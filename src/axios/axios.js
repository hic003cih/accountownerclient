import axios from 'axios';
 
const instance = axios.create({
    baseURL: 'http://localhost:4099',
    headers: {
        headerType: 'example header type'
    }
});
 
export default instance;
