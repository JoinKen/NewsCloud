import axios from 'axios';
import * as Config from '../Constant/Config';

export default function apiCaller(endPoint,method ="POST",body) {
    return axios({
        method:method,
        url:Config.API_URL + "/" + endPoint,
        data: body,
    }).catch(err =>{
        console.log(err);
    });
}
// endPoint hay URL lả đích đến của request
// method: phương thực để xử lí request
/*
param là tham số gửi lên url
data: dữ liệu gửi theo body của request
==> axios là thư viện để xử lí API mà backend cung cấp
*/
