import api from './api';
//import axios from 'axios';

class App{
    constructor(){
        this.buttonEl = document.querySelector('button[id=consultar]')
        this.textoEl = document.querySelector('input[id=local]');
        this.key = '695492825d6ec0b5c363358aa43093da';
        this.listTemperatura = [];
        this.ulEl = document.querySelector('ul[id=lista]');
        
        this.handler();
    }

    handler(){
        this.buttonEl.onclick = event => this.getPrevisao(event);
    }

    async getPrevisao(event){
        event.preventDefault();
        //const response = await api.get(`?q=${this.textoEl.value}&units=metric&appid=${this.key}`);

        const newApi = new api(this.key, this.textoEl.value);

        const response = await newApi.getTemperatura();

        if (response.length === 0)
            return

        try{
            const { name,  main:{temp, temp_min, temp_max, humidity}, sys:{country}} = response.data;

            this.listTemperatura.push({
                cidade: name,
                temperatura: temp,
                tempmin: temp_min,
                tempmax: temp_max,
                umidade: humidity,
                pais: country
            });

            console.log(this.listTemperatura); 
            this.render();
        }catch(erro){
            console.log('Erroao consultar cidade');
            console.log(erro);
        }            
    }

    render(){
       this.ulEl.innerHTML = '' ;

       this.listTemperatura.forEach(lista =>{
            let liEl = document.createElement('li');
           
            let divCidade = document.createElement('div');

            let labelCidade = document.createElement('strong');
            labelCidade.textContent = 'Cidade: ' + lista.cidade;

            divCidade.appendChild(labelCidade);

            let divTemp = document.createElement('div');
            let labelTemp = document.createElement('label')
            labelTemp.textContent = 'Temperatura: ' + lista.temperatura;
            divTemp.appendChild(labelTemp);

            let divTempmin = document.createElement('div');
            let labelTempmin = document.createElement('label')
            labelTempmin.textContent = 'Temp min: ' + lista.tempmin;
            divTempmin.appendChild(labelTempmin);

            let divtempmax = document.createElement('div');
            let labeltempmax = document.createElement('label')
            labeltempmax.textContent = 'Temp máx: ' + lista.tempmax;
            divtempmax.appendChild(labeltempmax);

            let divUmidade = document.createElement('div');
            let labelUmidade = document.createElement('label');
            labelUmidade.textContent = 'Umidade: ' + lista.umidade;
            divUmidade.appendChild(labelUmidade);

            let divPais = document.createElement('div');
            let labelPais = document.createElement('label');
            labelPais.textContent = 'Pais: ' + lista.pais;
            divPais.appendChild(labelPais);

            let divSeparacao = document.createElement('div');
            let labelSeparacao = document.createElement('label');
            labelSeparacao.textContent = '---------------------------------------';
            divSeparacao.appendChild(labelSeparacao);

            liEl.appendChild(divCidade);
            liEl.appendChild(divTemp);
            liEl.appendChild(divTempmin);
            liEl.appendChild(divtempmax);
            liEl.appendChild(divUmidade);
            liEl.appendChild(divPais);
            liEl.appendChild(divSeparacao);

            this.ulEl.appendChild(liEl);
       } )
    }

}

const MyApp = new App;