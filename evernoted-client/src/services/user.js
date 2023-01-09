import Api from "./api";

const UserService = {
    register: (params) => Api.post("/users/register", params),
    update: async (id, params) => {
        const response = await Api.put(`/users/${id}`, params, {
            headers: {'x-access-token': localStorage.getItem('token')}
        })
        localStorage.setItem('user', JSON.stringify(response.data))
    },
    updatePassword: async (params) => {
        await Api.put("/users/password/", params, {
            headers: {'x-access-token': localStorage.getItem('token')}
        })
    },
    delete: async (id) => {
        await Api.delete(`/users/${id}`, {
            headers: {'x-access-token': localStorage.getItem('token')}
        }) 
        localStorage.removeItem('user', null);
        localStorage.removeItem('token', null);
    },
    login: async (params) => {
        const response = await Api.post("/users/login", params) 
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
    },
    logout: () => {
        localStorage.removeItem('user', null); 
        localStorage.remoteItem('token', null);
    }
}

export default UserService; 