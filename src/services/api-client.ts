import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'b354c8edfeab48fdb6b3334d441dc3db'
    }
})