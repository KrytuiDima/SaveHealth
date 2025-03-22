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
    const arrayOfVitaminObjects = [
        {
            id: "1",
            title: "Вітамін С",
            photo: "img/vitamins/vitamin-c.png", // Add photo path
            description: "Допомагає імунній системі.",
            rating: "⭐⭐⭐⭐",
            useful: "Підтримує здоров'я шкіри.",
        },
        {
            id: "2",
            title: "Вітамін D",
            photo: "img/vitamins/vitamin-d.png", // Add photo path
            description: "Підтримує здоров'я кісток.",
            rating: "⭐⭐⭐⭐⭐",
            useful: "Допомагає засвоювати кальцій.",
        },
    ];

    // Loop through each vitamin object and create its elements
    arrayOfVitaminObjects.forEach((item) => {
        // Create the main container for the vitamin
        let divVitamin = document.createElement('div');
        divVitamin.classList.add('vitamin');

        // Add the photo
        let imgVitamin = document.createElement('img');
        imgVitamin.classList.add('vitamin-photo');
        imgVitamin.src = item.photo;
        imgVitamin.alt = item.title;

        // Add the title
        let titleVitamin = document.createElement('div');
        titleVitamin.classList.add('vitamin-title');
        titleVitamin.innerText = item.title;

        // Add the description
        let descriptionVitamin = document.createElement('div');
        descriptionVitamin.classList.add('vitamin-description');
        descriptionVitamin.innerText = item.description;

        // Add the rating
        let ratingVitamin = document.createElement('div');
        ratingVitamin.classList.add('vitamin-rating');
        ratingVitamin.innerText = `Рейтинг: ${item.rating}`;

        // Add the useful information
        let usefulVitamin = document.createElement('div');
        usefulVitamin.classList.add('vitamin-useful');
        usefulVitamin.innerText = `Корисно: ${item.useful}`;

        // Append all elements to the vitamin container
        divVitamin.appendChild(imgVitamin);
        divVitamin.appendChild(titleVitamin);
        divVitamin.appendChild(descriptionVitamin);
        divVitamin.appendChild(ratingVitamin);
        divVitamin.appendChild(usefulVitamin);

        // Append the vitamin container to the main container
        vitaminsContainer.appendChild(divVitamin);
    });
}
