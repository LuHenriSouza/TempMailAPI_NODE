import axios from 'axios';

class TempMailAPI {


    private md5address: string;

    public name: string;
    public domain: string;
    public address: string;

    constructor(name: string | null = null, domain: string | null = null) {

        this.name = name ? name : this.generateRandomString();

        var randomDomain = this.getDomain();

        if(!domain){
            this.domain = randomDomain;
        }else{
            this.domain = domain;
        }
    }

    protected async getDomain(): Promise<string> {

        const options = {
            method: 'GET',
            url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/domains/',
            headers: {
                'X-RapidAPI-Key': '5cdcb6428dmshc5fbda396a832c8p1a1e08jsnfc9bc7908b1e',
                'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    protected generateRandomString(length: number = 10): string {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
        let string = "";
        for (let i = 0; i < length; i++) {
            string = string + characters[Math.floor(Math.random() * characters.length)]
        }
        return string;
    }
}