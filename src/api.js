import axios from "axios";

 class api{
    constructor(key, cidade){
        this.key = key;
        this.cidade = cidade;
        
         this.getTemperatura();
    }         

    getTemperatura(){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cidade}&units=metric&appid=${this.key}`); 
    }
}


//  const api = axios.create({
//     baseURL: 'https://api.openweathermap.org/data/2.5/weather' 
// });

export default api;