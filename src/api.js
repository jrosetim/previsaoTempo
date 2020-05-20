import axios from "axios";

//  class api{
//     constructor(){
//          this.buttonEl = document.querySelector('button[id=consultar]')
//          this.textoEl = document.querySelector('input[id=local]');
        
//          this.getApiAxios();
//     }         

//     getApiAxios(){
//     return axios.create({
//             baseURL: 'api.openweathermap.org/data/2.5/weather' 
//         });
// }

        
//         this.getBaseUrl();
//     }

//      getBaseUrl(){
//          const apiaxios = axios.create({
//             baseURL: 'api.openweathermap.org/data/2.5/weather' 
//         })
//      }
    

//     // teste(){
//     //     console.log('testando exportação de classe');
//     // }

 //}

 const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather' 
});

export default api;