
function Data() {

const digits = [
    {
        id: 1,
        compute: 9,
    },
    {
        id: 2,
        compute: 8,
    },
    {
        id: 3,
        compute: 7,
    },
    {
        id: 4,
        compute: 6,
    },
    {
        id: 5,
        compute: 5,
    },
    {
        id: 6,
        compute: 4,
    },
    {
        id: 7,
        compute: 3,
    },
    {
        id: 8,
        compute: 2,
    },
    {
        id: 9,
        compute: 1,
    },
    {
        id: 10,
        compute: 0,
    },
];

const sevenNth = document.querySelector('#sevenNth').value;
const windows = document.querySelector('#windows').innerHTML = `${digits[2].compute}`;
document.body.appendChild(sevenNth);
document.body.append(windows);

}

export { Data };


