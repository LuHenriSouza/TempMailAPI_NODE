import API from './src/TempMailAPI';

const tempmail = new API();

tempmail.init().then(() => {
    console.log(tempmail.address);
    console.log(tempmail.md5address);
});