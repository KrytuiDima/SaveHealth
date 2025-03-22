let pillsCount = 5;

const healthPhrases = [
    "Пийте більше води! 💧",
    "Займайтесь фізичними вправами! 🏋️‍♂️",
    "Їжте здорову їжу! 🍎",
    "Поспіть достатньо! 💤",
    "Не забувайте про психічне здоров'я! 🧘‍♂️",
    "Уникайте стресу! 🌿",
    "Прогулюйтесь на свіжому повітрі! 🌳",
    "Смійтесь більше! 😂",
    "Знайдіть час для хобі! 🎨",
    "Час від часу відпочивайте від екранів! 📱",
    "Робіть глибоке дихання для зняття напруги! 🌬️",
    "Чистіть зуби двічі на день! 😁",
    "Займайтесь йогою для гнучкості! 🧘‍♀️",
    "Медитуйте для спокою! 🧘‍♂️",
    "Споживайте менше цукру! 🍭",
    "Не забувайте про сонячне світло! 🌞",
    "Слухайте музику для настрою! 🎶",
    "Бережіть свої очі від яскравого світла! 👀",
    "Залишайтеся на позитиві! 🌟",
    "Дякуйте за кожен день! 🙏"
];

// Функція для оновлення кнопки пігулок
function updatePillsButton() {
    let pillsText = '';
    for (let i = 0; i < pillsCount; i++) {
        pillsText += '💊';
    }
    for (let i = pillsCount; i < 5; i++) {
        pillsText += '❌';
    }
    document.getElementById('healthPillsButton').textContent = pillsText;
}

document.getElementById("healthButton").addEventListener("click", function() {
    if (pillsCount > 0) {
        const randomIndex = Math.floor(Math.random() * healthPhrases.length);
        document.getElementById("healthMessage").textContent = healthPhrases[randomIndex];
        pillsCount--;
        updatePillsButton();
    } else {
        document.getElementById("healthMessage").textContent = "Пігулки закінчилися! Купіть нові.";
    }
});

document.getElementById("buyPillsButton").addEventListener("click", function() {
    pillsCount = 5;
    updatePillsButton();
    document.getElementById("healthMessage").textContent = "Пігулки відновлені. Готові для використання!";
});

updatePillsButton();

const arrayOfGalleryImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

let galleryImage = 0;
const mainImage = document.getElementById('main-image');

// Set the initial image in the gallery
mainImage.setAttribute('src', `img/gallery/${arrayOfGalleryImages[galleryImage]}`);

// Right arrow click event
document.getElementById('btn-right-arrow').addEventListener('click', () => {
    galleryImage++;
    if (galleryImage === arrayOfGalleryImages.length) galleryImage = 0;
    
    mainImage.classList.add('fade');
    setTimeout(() => {
        mainImage.setAttribute('src', `img/gallery/${arrayOfGalleryImages[galleryImage]}`);
        mainImage.classList.remove('fade');
    }, 500); // Match the transition duration
});

// Left arrow click event
document.getElementById('btn-left-arrow').addEventListener('click', () => {
    galleryImage--;
    if (galleryImage < 0) galleryImage = arrayOfGalleryImages.length - 1;
    
    mainImage.classList.add('fade');
    setTimeout(() => {
        mainImage.setAttribute('src', `img/gallery/${arrayOfGalleryImages[galleryImage]}`);
        mainImage.classList.remove('fade');
    }, 500); // Match the transition duration
});

// Check if the vitamins container exists before adding elements
const vitaminsContainer = document.getElementById('p-vitamins');

if (vitaminsContainer) {
    // Масив вітамінів
    const arrayOfVitaminObjects = [
        {
            id: "1",
            title: "Вітамін С",
            photo: "img/vitamins/vitamin-c.png",
            description: "Допомагає імунній системі.",
            rating: "⭐⭐⭐⭐",
            useful: "Підтримує здоров'я шкіри.",
            price: 2, // Ціна в пігулках
            purchased: false, // Чи куплено
        },
        {
            id: "2",
            title: "Вітамін D",
            photo: "img/vitamins/vitamin-d.png",
            description: "Підтримує здоров'я кісток.",
            rating: "⭐⭐⭐⭐⭐",
            useful: "Допомагає засвоювати кальцій.",
            price: 3, // Ціна в пігулках
            purchased: false, // Чи куплено
        },
        {
            id: "3",
            title: "Вітамін B+",
            photo: "img/vitamins/vitamin-b+.png", // Додайте відповідний шлях до зображення
            description: "Покращує роботу нервової системи.",
            rating: "⭐⭐⭐⭐",
            useful: "Допомагає зменшити втому.",
            price: 4, // Ціна в пігулках
            purchased: false, // Чи куплено
        },
        {
            id: "4",
            title: "Магній",
            photo: "img/vitamins/magnesium.png", // Додайте відповідний шлях до зображення
            description: "Допомагає зменшити м'язові спазми.",
            rating: "⭐⭐⭐⭐⭐",
            useful: "Покращує сон та знижує стрес.",
            price: 5, // Ціна в пігулках
            purchased: false, // Чи куплено
        },
    ];

    // Функція для рендерингу однієї картки вітаміну
    function renderVitamin(item) {
        // Знаходимо або створюємо контейнер для вітаміну
        let divVitamin = document.querySelector(`.vitamin[data-id="${item.id}"]`);
        if (!divVitamin) {
            divVitamin = document.createElement('div');
            divVitamin.classList.add('vitamin');
            divVitamin.setAttribute('data-id', item.id);
            vitaminsContainer.appendChild(divVitamin); // Додаємо до загального контейнера
        }

        // Очищуємо вміст картки
        divVitamin.innerHTML = '';

        // Додаємо назву
        let titleVitamin = document.createElement('div');
        titleVitamin.classList.add('vitamin-title');
        titleVitamin.innerText = item.title;
        divVitamin.appendChild(titleVitamin);

        // Якщо вітамін куплено, показуємо всю інформацію
        if (item.purchased) {
            divVitamin.classList.add('open'); // Додаємо клас для анімації

            let imgVitamin = document.createElement('img');
            imgVitamin.classList.add('vitamin-photo');
            imgVitamin.src = item.photo;
            imgVitamin.alt = item.title;

            let descriptionVitamin = document.createElement('div');
            descriptionVitamin.classList.add('vitamin-description');
            descriptionVitamin.innerText = item.description;

            let ratingVitamin = document.createElement('div');
            ratingVitamin.classList.add('vitamin-rating');
            ratingVitamin.innerText = `Рейтинг: ${item.rating}`;

            let usefulVitamin = document.createElement('div');
            usefulVitamin.classList.add('vitamin-useful');
            usefulVitamin.innerText = `Корисно: ${item.useful}`;

            divVitamin.appendChild(imgVitamin);
            divVitamin.appendChild(descriptionVitamin);
            divVitamin.appendChild(ratingVitamin);
            divVitamin.appendChild(usefulVitamin);
        } else {
            // Якщо не куплено, додаємо кнопку покупки
            let buyButton = document.createElement('button');
            buyButton.classList.add('buy-vitamin-button');
            buyButton.innerText = `Купити за ${item.price} 💊`;
            buyButton.addEventListener('click', () => buyVitamin(item.id)); // Передаємо ID вітаміну
            divVitamin.appendChild(buyButton);
        }
    }

    // Функція для рендерингу всіх вітамінів
    function renderVitamins() {
        vitaminsContainer.innerHTML = ''; // Очищуємо загальний контейнер
        arrayOfVitaminObjects.forEach((item) => {
            renderVitamin(item); // Рендеримо кожен вітамін окремо
        });
    }

    // Функція покупки вітаміну
    function buyVitamin(vitaminId) {
        const vitamin = arrayOfVitaminObjects.find((item) => item.id === vitaminId); // Знаходимо потрібний вітамін
        if (vitamin && pillsCount >= vitamin.price) {
            pillsCount -= vitamin.price; // Знімаємо пігулки
            vitamin.purchased = true; // Позначаємо як куплений
            updatePillsButton(); // Оновлюємо кнопку пігулок
            renderVitamin(vitamin); // Оновлюємо тільки куплений вітамін
            document.getElementById('healthMessage').textContent = `Ви купили ${vitamin.title}!`;
        } else {
            document.getElementById('healthMessage').textContent = "Недостатньо пігулок для покупки!";
        }
    }

    // Ініціалізація
    renderVitamins();
    updatePillsButton();
}
