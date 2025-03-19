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

// Set the initial image in the gallery
document.getElementById('main-image').setAttribute('src', `img/gallery/${arrayOfGalleryImages[galleryImage]}`);

// Right arrow click event
document.getElementById('btn-right-arrow').addEventListener('click', () => {
    galleryImage++;
    if (galleryImage === arrayOfGalleryImages.length) galleryImage = 0;
    document.getElementById('main-image').setAttribute('src', `img/gallery/${arrayOfGalleryImages[galleryImage]}`);
});

// Left arrow click event
document.getElementById('btn-left-arrow').addEventListener('click', () => {
    galleryImage--;
    if (galleryImage < 0) galleryImage = arrayOfGalleryImages.length - 1;
    document.getElementById('main-image').setAttribute('src', `img/gallery/${arrayOfGalleryImages[galleryImage]}`);
});

document.getElementById('btn_health_wishes').addEventListener('click', () => {
    let index = Math.floor(Math.random() * arrayOfHealthWishes.length);
    document.getElementById('p-health-wishes').innerText = arrayOfHealthWishes[index];
});

const arrayOfVitaminObjects = [{
    "id" : "1",
    "title" : "Вітамін С",
    "photo" : "",
    "description" : "",
    "rating" : "",
    "useful" : "",
},
{
    "id" : "2",
    "title" : "Вітамін D3",
    "photo" : "",
    "description" : "",
    "rating" : "",
    "useful" : "",
},
];
arrayOfVitaminObjects.forEach((item) => {
    console.log(item)

    let divVitamin = document.createElement('div')
    divVitamin.classList.add('vitamin')
    divVitamin.innerText = item.title

    document.getElementById('p-vitamins').appendChild(divVitamin)
});