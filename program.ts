import API from './src/TempMailAPI';

const tempmail = new API('4t8w2gfvu6','@mocvn.com');


tempmail.init().then(() => {
    console.log(tempmail.getEmails());
});