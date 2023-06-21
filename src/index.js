import axios from 'axios';

async function getQuote() {
  try {
    const response = await axios.request({
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      params: {
        language_code: 'ru',
      },
      headers: {
        'X-RapidAPI-Key': '81d549cfaemsh060cff6e4b4677ep1c0aeajsn1ee45e409c7a',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    });

    const quote = response.data.content;
    const author = response.data.originator.name;

    const quoteContainer = document.getElementById('content-wrapper');
    quoteContainer.innerHTML = `"${quote}" - ${author}`;
  } catch (error) {
    console.error('Ошибка при получении цитаты:', error.message);
  }
}

getQuote();

document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('generate-btn');

  generateButton.addEventListener('click', function() {
    getQuote();
  });
});