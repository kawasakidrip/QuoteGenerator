async function getQuote() {
  try {
    const response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=ru', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '81d549cfaemsh060cff6e4b4677ep1c0aeajsn1ee45e409c7a',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    });
    const data = await response.json();
    const quote = data.content;
    const author = data.originator ? data.originator.name : 'Unknown'; // Проверка наличия свойства 'originator' и 'name'
    console.log('quote.js', quote, author);
    return { quote, author };
  } catch (error) {
    console.error('Ошибка при получении цитаты:', error.message);
  }
}

export default getQuote;
