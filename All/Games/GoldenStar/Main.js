let Random;
let Fall = [];

const Map = document.getElementById('Map');

function Select(id) {
    const Star = document.createElement('div');
    Star.className = 'Star';
    Star.innerHTML = '<H2>★</H2>';

    document.getElementById(id).replaceWith(Star);
}

// function RandomFall() {
//     const Stavka = document.getElementById('Stavka').value;
//     Random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
// }

for (let A = 0; A < 16; A++) {
    Map.innerHTML += `<div class="Block" id="${A}" onclick="Select('${A}')"></div>`;
}

document.getElementById('Claim').addEventListener('click', function() {
    console.log('Победа!');
});