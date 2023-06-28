import getQuote from "./quote.js";

const app = async () => {
  const button = document.querySelector('.generate-btn');
  const resultEl = document.querySelector('#result');
  const authorEl = document.querySelector('.author-name');
  const quoteTitle = document.querySelector('.quote-title');
  const quoteOfTheDay = document.querySelector('#quote-label');
  const quoteEl = document.querySelector('#result');
  const authorNameEl = document.querySelector('.author-name');
  const maxCharacters = 175;

  let isButtonDisabled = false;

  const generateRandomQuote = async () => {
    if (isButtonDisabled) return;
    isButtonDisabled = true;

    const { quote, author } = await getQuote();
    if (quote) {
      const truncatedQuote = truncateQuote(quote);
      if (truncatedQuote.length <= maxCharacters) {
        resultEl.textContent = truncatedQuote;
        authorEl.textContent = author;
      } else {
        generateRandomQuote(); // Если цитата длиннее maxCharacters, генерируем новую цитату
      }
    }

    setTimeout(() => {
      isButtonDisabled = false;
    }, 1500);
  };


  const getQuoteOfTheDay = async () => {
    const { quote, author } = await getQuote();
    if (quote) {
      const truncatedQuote = truncateQuote(quote);
      quoteEl.textContent = truncatedQuote;
      authorNameEl.textContent = author;
    }
  };

  const truncateQuote = (quote) => {
    if (quote && quote.length > maxCharacters) {
      return quote.slice(0, maxCharacters) + '...';
    }
    return quote;
  };

  button.addEventListener('click', async (e) => {
    e.preventDefault();
    generateRandomQuote();
    quoteOfTheDay.style.display = 'none';
    button.parentNode.classList.add('static-buttons');
  });

  await getQuoteOfTheDay();

  // Подключение кнопки "Поделиться"
  const shareBtn = document.getElementById('shareBtn');

  // Функция для создания ссылки на шаринг в вк
  const createVKShareLink = () => {
    const quoteText = document.getElementById('result').textContent;
    const quoteAuthor = document.querySelector('.author-name').textContent;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(quoteText);
    const description = encodeURIComponent(quoteAuthor);
    const vkUrl = `https://vk.com/share.php?url=${url}&title=${title}&description=${description}`;
    return vkUrl;
  };

  // Обработчик нажатия кнопки "Поделиться"
  shareBtn.addEventListener('click', () => {
    const vkUrl = createVKShareLink();
    window.open(vkUrl, '_blank', 'width=600,height=400');
  });
};

const themeTranslations = {
  life: 'Жизнь',
  love: 'Любовь',
  inspiration: 'Вдохновение',
  motivation: 'Мотивация',
};

const themeSelect = document.getElementById('themeSelect');

Object.keys(themeTranslations).forEach((theme) => {
  const option = document.createElement('option');
  option.value = theme;
  option.textContent = themeTranslations[theme];
  themeSelect.appendChild(option);
});

export default app;
