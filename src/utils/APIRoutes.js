import { Api as APIRequest } from "./APIRequest";

const routes = {
    fetch_users: async () => {
        return await APIRequest.get('/fetch-users').then((/** @type {{ data: any; }} */ r) => r.data);
    },

    fetch_posts: async (user_id) => {
        return await APIRequest.get(`/fetch-posts/${user_id}`).then(r => r.data);
    }
};

export default routes;