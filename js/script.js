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

function startSnakeGame() {
    const vitaminsContainer = document.getElementById('p-vitamins');
    if (!vitaminsContainer) return;

    // Очищуємо контейнер і додаємо елементи гри
    vitaminsContainer.innerHTML = `
        <div class="snake-game-container">
            <canvas id="snakeCanvas"></canvas>
            <button id="restartSnakeGame">Restart Game</button>
            <p id="snakeInstructions">Use W, A, S, D to move the snake. Eat the pills to grow!</p>
            <div id="snakeScore">Score: 0</div>
        </div>
    `;

    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;

    // Змінні гри
    const boxSize = 20;
    let snake = [{ x: 200, y: 200 }];
    let food = { x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize, y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize };
    let direction = 'RIGHT'; // Початковий напрямок
    let nextDirection = 'RIGHT';
    let score = 0;
    let gameStarted = false;

    // Малюємо границі гри
    function drawBorder() {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 4;
        ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
    }

    // Малюємо змійку
    function drawSnake() {
        ctx.fillStyle = 'green';
        snake.forEach(segment => {
            ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
        });
    }

    // Малюємо їжу (пігулку)
    function drawFood() {
        ctx.font = '20px Arial';
        ctx.fillText('💊', food.x + 2, food.y + 18);
    }

    // Рух змійки
    function moveSnake() {
        const head = { ...snake[0] };

        // Змінюємо напрямок
        if (nextDirection === 'UP' && direction !== 'DOWN') direction = 'UP';
        if (nextDirection === 'DOWN' && direction !== 'UP') direction = 'DOWN';
        if (nextDirection === 'LEFT' && direction !== 'RIGHT') direction = 'LEFT';
        if (nextDirection === 'RIGHT' && direction !== 'LEFT') direction = 'RIGHT';

        // Оновлюємо позицію голови
        if (direction === 'UP') head.y -= boxSize;
        if (direction === 'DOWN') head.y += boxSize;
        if (direction === 'LEFT') head.x -= boxSize;
        if (direction === 'RIGHT') head.x += boxSize;

        // Перевірка на зіткнення зі стінами або собою
        if (
            head.x < 0 ||
            head.y < 0 ||
            head.x >= canvas.width ||
            head.y >= canvas.height ||
            snake.some(segment => segment.x === head.x && segment.y === head.y)
        ) {
            alert(`Game Over! Your score: ${score}`);
            restartGame();
            return;
        }

        // Перевірка, чи з'їла змійка їжу
        if (head.x === food.x && head.y === food.y) {
            score++;
            document.getElementById('snakeScore').textContent = `Score: ${score}`;
            food = { x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize, y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize };
        } else {
            snake.pop(); // Видаляємо хвіст, якщо їжа не з'їдена
        }

        snake.unshift(head); // Додаємо нову голову
    }

    // Перезапуск гри
    function restartGame() {
        snake = [{ x: 200, y: 200 }];
        direction = 'RIGHT';
        nextDirection = 'RIGHT';
        score = 0;
        gameStarted = false;
        document.getElementById('snakeScore').textContent = `Score: ${score}`;
        food = { x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize, y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize };
    }

    // Основний цикл гри
    function gameLoop() {
        if (!gameStarted) return; // Не запускаємо гру, поки вона не почалася
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBorder();
        drawSnake();
        drawFood();
        moveSnake();
    }

    // Слухаємо натискання клавіш (W, A, S, D)
    document.addEventListener('keydown', (event) => {
        if (!gameStarted) gameStarted = true; // Починаємо гру після першого натискання
        if (event.key === 'w') nextDirection = 'UP';
        if (event.key === 's') nextDirection = 'DOWN';
        if (event.key === 'a') nextDirection = 'LEFT';
        if (event.key === 'd') nextDirection = 'RIGHT';
    });

    // Кнопка перезапуску гри
    document.getElementById('restartSnakeGame').addEventListener('click', restartGame);

    // Запускаємо основний цикл гри
    setInterval(gameLoop, 100); // Оновлюємо гру кожні 100 мс
}

// Додаємо кнопку "Play Snake" у блок p-vitamins
function addSnakeGameButton() {
    const vitaminsContainer = document.getElementById('p-vitamins');
    if (!vitaminsContainer) return;

    const playSnakeButton = document.createElement('button');
    playSnakeButton.innerText = 'Play Snake';
    playSnakeButton.classList.add('play-snake-button');
    playSnakeButton.addEventListener('click', startSnakeGame);

    vitaminsContainer.appendChild(playSnakeButton);
}

// Ініціалізуємо кнопку при завантаженні сторінки
addSnakeGameButton();
