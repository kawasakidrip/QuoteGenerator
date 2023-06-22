import getQuote from "./quote.js";

const app = () => {
  const button = document.querySelector('.generate-btn');
  const resultEl = document.querySelector('#result');
  const authorEl = document.querySelector('.author-name');

  button.addEventListener('click', async (e) => {
    e.preventDefault();

    const { quote, author } = await getQuote();
    console.log('applications.js', quote, author);
    resultEl.textContent = quote;
    authorEl.textContent = author;
  });
};

const themeTranslations = {
    life: 'Жизнь',
    love: 'Любовь',
    inspiration: 'Вдохновение',
    motivation: 'Мотивация',
  };

// Нахождение элемента select в HTML
const themeSelect = document.getElementById('themeSelect');

// Добавление опций тем в select
Object.keys(themeTranslations).forEach((theme) => {
    const option = document.createElement('option');
    option.value = theme;
    option.textContent = themeTranslations[theme];
    themeSelect.appendChild(option);
});

const ratingButtons = document.querySelectorAll('.rating-btn');
const ratingValue = document.getElementById('rating-value');

function handleRatingClick(event) {
  const rating = event.target.dataset.rating;
  ratingValue.textContent = rating;
  console.log(`Вы оценили цитату на ${rating} из 5`);
  // Здесь можно добавить логику отправки оценки на сервер или обновления отображения оценки на странице
}

ratingButtons.forEach((button) => {
    button.addEventListener('click', handleRatingClick);
});

export default  app //handleRatingClick };