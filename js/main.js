const button = document.getElementById('colorChangeButton');

const color = document.querySelector('.colorData');


const hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
];

button.addEventListener('click', () => {
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

const generateHex = () => {
    let hexColor = '#';
    for(let i =  0; i < 6;i++) {
        hexColor += hex[getRandomNumber()]
    }

    return (hexColor)
}

const getRandomNumber = () => {
    return(Math.floor(Math.random() * hex.length));
}

