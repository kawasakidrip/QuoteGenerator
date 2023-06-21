async function getQuote() {
  try {
    const response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=ru', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '81d549cfaemsh060cff6e4b4677ep1c0aeajsn1ee45e409c7a',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    });

    if (response.ok) {
      const data = await response.json();
      const quote = data.content;
      const author = data.originator.name;
      const quoteContainer = document.getElementById('content-wrapper1');
      quoteContainer.innerHTML = `"${quote}" - ${author}`;
    } else {
      throw new Error('Ошибка при получении цитаты');
    }
  } catch (error) {
    console.error('Ошибка при получении цитаты:', error.message);
  }
}

getQuote();

document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('gen-btn');
  generateButton.addEventListener('click', function() {
    getQuote();
 });
});