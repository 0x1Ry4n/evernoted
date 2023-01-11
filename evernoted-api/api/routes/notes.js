const express = require('express');
const Note = require('../models/note');
const router = express.Router();
const withAuth = require('../middlewares/auth');

router.post('/', withAuth, async (req, res) => {
    const { title, body } = req.body;

    try {
        let note = new Note({ title: title, body: body, author: req.user._id });

        await note.save();
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({ error: 'Error creating a note!' });
    }
});

router.get('/search', withAuth, async (req, res) => {
    const { query } = req.query;

    try {
        let notes = await Note
            .find({ author: req.user._id })
            .find({ $text: { $search: query } });

        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Error filtering the note!' });
    }
});

router.get('/:id', withAuth, async (req, res) => {
    const { id } = req.params;

    try {
        let note = await Note.findById(id);

        if (isOwner(req.user, note))
            res.json(note)
        else
            res.status(403).json({ error: 'Permission denied!' });
    } catch (err) { 
        res.status(500).json({ error: 'Error to get the note!' });
    }
});

router.get('/', withAuth, async (req, res) => {
    try {
        let notes = await Note.find({ author: req.user._id });

        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Error getting the notes!' });
    }
});


router.put('/:id', withAuth, async (req, res) => {
    const { title, body } = req.body;
    const { id } = req.params;

    try {
        let note = await Note.findById(id);

        if (isOwner(req.user, note)) {
            let updatedNote = await Note.findOneAndUpdate(id,
                { $set: { title: title, body: body } },
                { upsert: true, 'new': true }
            );

            res.json(updatedNote);
        } else
            res.status(403).json({ error: 'Permission denied!' });
    } catch (err) {
        res.status(500).json({ error: 'Error updating the note!' });
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    const { id } = req.params;

    try {
        let note = await Note.findById(id);

        if (isOwner(req.user, note)) {
            await note.delete();
            res.status(204).json({ message: 'Note deleted successfully!' });
        } else
            res.status(403);

    } catch (err) {
        res.status(500).json({ error: 'Error deleting the note!' });
    }
});

const isOwner = (user, note) => {
    return JSON.stringify(user._id) == JSON.stringify(note.author._id);
}

module.exports = router; 
