import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers:{
        Authorization:"Client-ID aeM0j1j5DegjJbpmN-5WYVzhuyO4jVyXz9w78O0ckLg"
    }
});