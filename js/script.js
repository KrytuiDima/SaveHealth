let pillscount = 5;

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

// Update the pills button to display the count as xN
function updatePillsButton() {
    const pillsButton = document.getElementById('healthPillsButton');
    const buyPillsButton = document.getElementById('buyPillsButton');
    pillsButton.textContent = `Ви маєте ${pillscount}💊`;

    // Enable or disable the "Buy Pills" button based on pill count
    if (pillscount < 5) {
        buyPillsButton.disabled = false;
        buyPillsButton.classList.remove('disabled');
    } else {
        buyPillsButton.disabled = true;
        buyPillsButton.classList.add('disabled');
    }
}

document.getElementById("healthButton").addEventListener("click", function() {
    if (pillscount > 0) {
        const randomIndex = Math.floor(Math.random() * healthPhrases.length);
        document.getElementById("healthMessage").textContent = healthPhrases[randomIndex];
        pillscount--;
        updatePillsButton();
    } else {
        document.getElementById("healthMessage").textContent = "Пігулки закінчилися! Купіть нові.";
    }
});

document.getElementById("buyPillsButton").addEventListener("click", function() {
    if (pillscount < 5) {
        pillscount = 5;
        updatePillsButton();
        document.getElementById("healthMessage").textContent = "Пігулки відновлені. Готові для використання!";
    }
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

let arrayOfVitaminObjects = [];

// Завантаження даних з vitamins.json
fetch('js/vitamins.json')
  .then(response => response.json())
  .then(data => {
    arrayOfVitaminObjects = data.map(item => ({
      ...item,
      photo: `img/vitamins/${item.photo}`,
      scheme: `img/schemes/${item.scheme}`,
      rating: '⭐'.repeat(item.rating),
      purchased: false, // Додаємо властивість куплено
    }));

    renderVitamins(); // Рендеримо після завантаження
    addSnakeGameButton(); // Додаємо кнопку гри тільки після завантаження вітамінів
  })
  .catch(error => console.error('Error fetching vitamins:', error));

// Функція для рендерингу однієї картки вітаміну
function renderVitamin(item) {
  const vitaminsContainer = document.getElementById('p-vitamins');
  let divVitamin = document.querySelector(`.vitamin[data-id="${item.id}"]`);
  if (!divVitamin) {
    divVitamin = document.createElement('div');
    divVitamin.classList.add('vitamin');
    divVitamin.setAttribute('data-id', item.id);
    vitaminsContainer.appendChild(divVitamin);
  }

  divVitamin.innerHTML = '';

  let titleVitamin = document.createElement('div');
  titleVitamin.classList.add('vitamin-title');
  titleVitamin.innerText = item.title;
  divVitamin.appendChild(titleVitamin);

  if (item.purchased) {
    divVitamin.classList.add('open');

    let imgVitamin = document.createElement('img');
    imgVitamin.classList.add('vitamin-photo');
    imgVitamin.src = item.photo;
    imgVitamin.alt = item.title;

    let descriptionVitamin = document.createElement('div');
    descriptionVitamin.classList.add('vitamin-description');
    descriptionVitamin.innerText = item.description;

    let schemeVitamin = document.createElement('img');
    schemeVitamin.classList.add('scheme-photo');
    schemeVitamin.src = item.scheme;
    schemeVitamin.alt = `${item.title} схема`;
    schemeVitamin.style.cursor = 'pointer';
    schemeVitamin.addEventListener('click', () => openVitaminSchemeModal(item.scheme));

    let ratingVitamin = document.createElement('div');
    ratingVitamin.classList.add('vitamin-rating');
    ratingVitamin.innerText = `Рейтинг: ${item.rating}`;

    let usefulVitamin = document.createElement('div');
    usefulVitamin.classList.add('vitamin-useful');
    usefulVitamin.innerText = `Корисно: ${item.useful}`;

    divVitamin.appendChild(imgVitamin);
    divVitamin.appendChild(descriptionVitamin);
    divVitamin.appendChild(schemeVitamin);
    divVitamin.appendChild(ratingVitamin);
    divVitamin.appendChild(usefulVitamin);
  } else {
    let buyButton = document.createElement('button');
    buyButton.classList.add('buy-vitamin-button');
    buyButton.innerText = `Купити за ${item.price} 💊`;
    buyButton.addEventListener('click', () => buyVitamin(item.id));
    divVitamin.appendChild(buyButton);
  }
}

// Function to open the vitamin scheme modal
function openVitaminSchemeModal(schemeSrc) {
    const modal = document.getElementById('vitaminSchemeModal');
    const modalImage = document.getElementById('vitaminSchemeImage');
    modalImage.src = schemeSrc;
    modal.style.display = 'block';
}

// Close the vitamin scheme modal
document.getElementById('closeVitaminModal').addEventListener('click', function () {
    document.getElementById('vitaminSchemeModal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    const modal = document.getElementById('vitaminSchemeModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Рендер всіх вітамінів
function renderVitamins() {
  const vitaminsContainer = document.getElementById('p-vitamins');
  vitaminsContainer.innerHTML = '';
  arrayOfVitaminObjects.forEach(renderVitamin);
}

// Купівля
function buyVitamin(vitaminId) {
  const vitamin = arrayOfVitaminObjects.find(item => item.id === vitaminId);
  if (vitamin && pillscount >= vitamin.price) {
    pillscount -= vitamin.price;
    vitamin.purchased = true;
    updatePillsButton();
    renderVitamin(vitamin);

    // Add animation class for spinning effect
    const vitaminElement = document.querySelector(`.vitamin[data-id="${vitaminId}"]`);
    if (vitaminElement) {
        vitaminElement.classList.add('open');
    }

    document.getElementById('healthMessage').textContent = `Ви купили ${vitamin.title}!`;
  } else {
    document.getElementById('healthMessage').textContent = "Недостатньо пігулок для покупки!";
  }
}
    // Ініціалізація
    renderVitamins();
    updatePillsButton();

// Function to start the Snake game
function startSnakeGame() {
    const vitaminsContainer = document.getElementById('p-vitamins');
    if (!vitaminsContainer) return;

    // Replace the vitamins section with the Snake game
    vitaminsContainer.innerHTML = `
        <div class="snake-game-container">
            <canvas id="snakeCanvas"></canvas>
            <button id="restartSnakeGame">Restart Game</button>
            <p id="snakeInstructions">Use W, A, S, D to move the snake. Eat the pills to grow!</p>
            <div id="snakeScore">Score: 0</div>
            <div id="snakePillsCollected">Pills: 0</div>
        </div>
    `;

    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');

    // Dynamically set canvas dimensions
    const containerWidth = vitaminsContainer.offsetWidth;
    canvas.width = Math.floor(containerWidth / 20) * 20; // Ensure width is a multiple of boxSize
    canvas.height = 400; // Fixed height for gameplay

    // Game variables
    const boxSize = 20;
    let snake = [{ x: 100, y: 100 }];
    let food = {
        x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize,
        y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize
    };
    let direction = 'RIGHT';
    let nextDirection = 'RIGHT';
    let score = 0;
    let pillsCollected = 0;
    let gameStarted = false;

    // Draw the game border
    function drawBorder() {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 4;
        ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
    }

    // Draw the snake
    function drawSnake() {
        ctx.fillStyle = 'green';
        snake.forEach(segment => {
            ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
        });
    }

    // Draw the food (pill)
    function drawFood() {
        ctx.font = '20px Arial';
        ctx.fillText('💊', food.x + 2, food.y + 18);
    }

    // Move the snake
    function moveSnake() {
        const head = { ...snake[0] };

        // Update direction
        if (nextDirection === 'UP' && direction !== 'DOWN') direction = 'UP';
        if (nextDirection === 'DOWN' && direction !== 'UP') direction = 'DOWN';
        if (nextDirection === 'LEFT' && direction !== 'RIGHT') direction = 'LEFT';
        if (nextDirection === 'RIGHT' && direction !== 'LEFT') direction = 'RIGHT';

        // Update head position
        if (direction === 'UP') head.y -= boxSize;
        if (direction === 'DOWN') head.y += boxSize;
        if (direction === 'LEFT') head.x -= boxSize;
        if (direction === 'RIGHT') head.x += boxSize;

        // Check for collisions with walls or itself
        if (
            head.x < 0 || head.y < 0 ||
            head.x >= canvas.width || head.y >= canvas.height ||
            snake.some(segment => segment.x === head.x && segment.y === head.y)
        ) {
            alert(`Game Over! Your score: ${score}`);
            pillscount += pillsCollected; // Add collected pills to total count
            updatePillsButton();
            restartGame();
            return;
        }

        // Check if the snake eats the food
        if (head.x === food.x && head.y === food.y) {
            score++;
            pillsCollected++;
            pillscount++;
            updatePillsButton();
            document.getElementById('snakeScore').textContent = `Score: ${score}`;
            document.getElementById('snakePillsCollected').textContent = `Pills: ${pillsCollected}`;
            food = {
                x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize,
                y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize
            };
        } else {
            snake.pop(); // Remove tail if no food eaten
        }

        snake.unshift(head); // Add new head
    }

    // Restart the game
    function restartGame() {
        snake = [{ x: 100, y: 100 }];
        direction = 'RIGHT';
        nextDirection = 'RIGHT';
        score = 0;
        pillsCollected = 0;
        gameStarted = false;
        document.getElementById('snakeScore').textContent = `Score: ${score}`;
        document.getElementById('snakePillsCollected').textContent = `Pills: ${pillsCollected}`;
        food = {
            x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize,
            y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize
        };
    }

    // Main game loop
    function gameLoop() {
        if (!gameStarted) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBorder();
        drawSnake();
        drawFood();
        moveSnake();
    }

    // Listen for key presses (W, A, S, D)
    document.addEventListener('keydown', (event) => {
        if (!gameStarted) gameStarted = true;
        if (event.key === 'w') nextDirection = 'UP';
        if (event.key === 's') nextDirection = 'DOWN';
        if (event.key === 'a') nextDirection = 'LEFT';
        if (event.key === 'd') nextDirection = 'RIGHT';
    });

    // Restart button event listener
    document.getElementById('restartSnakeGame').addEventListener('click', restartGame);

    // Start the game loop
    setInterval(gameLoop, 100);
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

document.getElementById('openModalButton').addEventListener('click', function () {
    document.getElementById('schemeModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('schemeModal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    const modal = document.getElementById('schemeModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
