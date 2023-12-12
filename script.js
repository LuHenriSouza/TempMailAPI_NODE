const axios = require('axios');

const fetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/null/',
    headers: {
      'X-RapidAPI-Key': '5cdcb6428dmshc5fbda396a832c8p1a1e08jsnfc9bc7908b1e',
      'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();