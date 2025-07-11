document.getElementById('predictButton').addEventListener('click', function() {
    const predictionElement = document.getElementById('prediction');
    const numbers = predictLotoNumbers();
    const stars = predictLotoStars();
    predictionElement.textContent =
        'Numéros prédits\n' +
        numbers.join(', ') +
        '\n\n' +
        'Étoiles\n' +
        stars.join(', ');
});

function predictLotoNumbers() {
    const numbers = [];
    while (numbers.length < 5) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    numbers.sort((a, b) => a - b);
    return numbers;
}

function predictLotoStars() {
    const stars = [];
    while (stars.length < 2) {
        const randomStar = Math.floor(Math.random() * 10) + 1; // Changed to 10
        if (!stars.includes(randomStar)) {
            stars.push(randomStar);
        }
    }
    stars.sort((a, b) => a - b);
    return stars;
}
