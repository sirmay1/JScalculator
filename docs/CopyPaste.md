//button click method
const btn = document.getElementById('btn');
const box = document.getElementById('box');

btn.addEventListener('click', () => {
    alert("Test Alert on JavaScript!");
document.body.appendChild(btn);
});

const renderColors = () => {
 //looping though the array of colors
for (let i = 0; i < spectrum.length; i++) {
        if (spectrum[i].color === 'rgba(0, 0, 255, 1)') {
            document.body.appendChild(box).backgroundColor = 'rgba(0, 0, 255, 1)';
        }
    }
}
renderColors();

//color spectrum
const spectrum = [
    {
        id: 1,
        name: 'red',
        color: `rgba(255, 0, 0, 1)`,
    },
    {
        id: 2,
        name: 'green',
        color: `rgba(0, 255, 0, 1)`,
    },
    {
        id: 3,
        name: 'blue',
        color: `rgba(0, 0, 255, 1)`,
    },
]

-------------------------------------------------------------------------

//button click method
const btn = document.getElementById('btn');
const box = document.getElementById('box');



btn.addEventListener('click', (spectrum) => {
    const handleClick = () => {
        if (this.spectrum.id == '0') {
            document.getElementById('box').innerHTML = 'rgba(255, 0, 0, 1)';
        } else {
            document.getElementById('box').remove(spectrum.id);
        }
        return;
      }
      handleClick();
}

const spectrum = [
    {
        id: 1,
        name: 'red',
        color: `rgba(255, 0, 0, 1)`,
    },
    {
        id: 2,
        name: 'green',
        color: `rgba(0, 255, 0, 1)`,
    },
    {
        id: 3,
        name: 'blue',
        color: `rgba(0, 0, 255, 1)`,
    },
]

--------------------------------------------------------------------------

const btn = document.getElementById('btn');
const root = document.getElementById('root').style.backgroundColor = `${color}`;


const renderColor = (color, root) => {
    color = `rgba(255, 0, 0, 1)`;
    if (color == "red") {
        color = document.getElementById("color").value
        color.style.backgroundColor = `rgba(255, 0, 0, 1)`;
       } if (color == "green") {
        color = document.getElementById("color").value;
        color.style.backgroundColor = `rgba(0, 255, 0, 1)`;
       } if (color == "blue") {
        color = document.getElementById("color").value;
        color.style.backgroundColor = `rgba(0, 0, 255, 1)`;
       }
}

btn.addEventListener('click', renderColor);
document.body.appendChild(root);

--------------------------------------------------------------------

const root = document.getElementById('root');
const btn = document.getElementById('btn');


const renderValue = (color) => {
    const color = [];
    btn.addEventListener('click', () => {
        switch (color.length) {
            case 1: `rgba(255, 0, 0, 1)`;
            break;
            case 2: `rgba(0, 255, 0, 1)`;
            break;
            case 3: `rgba(0, 0, 255, 1)`;
            break;
            default: `rgba(0, 0, 0, 1)`;
        }
        return;
    })
}
renderValue(1);





border: 1px inset white;
    border-radius: 3px;
