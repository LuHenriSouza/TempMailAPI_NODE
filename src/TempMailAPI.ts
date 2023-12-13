import axios from 'axios';
import * as crypto from 'crypto';

class TempMailAPI {
    public md5address: string;
    public name: string;
    private domain: any;
    public address: string;

    constructor(name: string | null = null, domain: string | null = null) {
        this.name = name ? name : this.generateRandomString();
        this.domain = domain ? domain : '';
    }

    private generateMD5Hash(data: string): string {
        const hash = crypto.createHash('md5');
        hash.update(data);
        return hash.digest('hex');
    }

    public async init(): Promise<void> {
        if (this.domain === '') {
            const randomDomain = await this.getDomain();
            this.domain = randomDomain;
        }

        this.address = this.name + this.domain;
        this.md5address = this.generateMD5Hash(this.address);
        return Promise.resolve();
    }

    private generateRandomString(length: number = 10): string {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
        let string = "";
        for (let i = 0; i < length; i++) {
            string = string + characters[Math.floor(Math.random() * characters.length)]
        }
        return string;
    }

    private async getDomain() {

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
            const domains = Array.isArray(response.data) ? response.data : [];
            if (domains.length > 0) {
                const randomDomain = domains[Math.floor(Math.random() * domains.length)];
                return randomDomain.trim(); // Remova espaços em branco extras, se houver
            } else {
                throw new Error('A resposta da API não contém domínios válidos.');
            }
        } catch (error) {
            console.error("getDomainError: " + error);
            return;
        }
    }

    public async getEmails() {
        if (this.md5address) {
            const options = {
                method: 'GET',
                url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/' + this.md5address + '/',
                headers: {
                    'X-RapidAPI-Key': '5cdcb6428dmshc5fbda396a832c8p1a1e08jsnfc9bc7908b1e',
                    'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error("getEmailsError: " + error);
                return;
            }
        }else{
            console.error("getEmailsError: " + "'md5address' not found, try using init() before getEmails()")
        }
    }
}

export default TempMailAPI;