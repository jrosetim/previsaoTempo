import api from './api';

class App{
    constructor(){
        this.buttonEl = document.querySelector('button[id=consultar]')
        this.textoEl = document.querySelector('input[id=local]');
        this.key = '695492825d6ec0b5c363358aa43093da';

        
        this.handler();
    }

    handler(){
        this.buttonEl.onclick = event => this.getPrevisao(event);
    }

    async getPrevisao(event){
        event.preventDefault();

        //const response = await api.get(`?q=${this.textoEl.value}&appid=${this.key}`);
        const response = await api.get(`?q=${this.textoEl.value}&appid=${this.key}`);
    
        console.log(response);            
    }

}

const MyApp = new App;