import axios from 'axios'
import { API_BASE_URL } from '../../config/appConfig';

const createAxios  =()=>{
    const instance = axios.create({
        baseURL: API_BASE_URL,
           headers: {'content-type': 'application/json'}
      });


      return instance
}

export default createAxios()