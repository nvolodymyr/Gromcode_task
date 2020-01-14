const TEXT_VALUE = document.querySelector('.inputString');
const BUTTON = document.querySelector('.button');
const DATA = [{
        name: 'Jhon Walker',
        birthDate: '1995-12-17',
    },
    {
        name: 'Andrew Wer',
        birthDate: '2001-10-29',
    },
    {
        name: 'Andrew We',
        birthDate: '2001-11-29',
    },
    {
        name: 'Andrew',
        birthDate: '1976-11-29',
    },
    {
        name: 'Andrew W',
        birthDate: '2001-11-29',
    },
    {
        name: 'Vovan',
        birthDate: '1991-09-06',
    }
];

function searchByName(str) {

    let newArray = DATA.filter(elem => {
        let name = elem.name.toLocaleLowerCase();
        let strLowecCase = str.value.toLocaleLowerCase();
        return name.includes(strLowecCase);
    });

    return newArray
}
let getBiggestAge = () => {
    DATA.sort((a, b) => {
        let dateA = new Date(a.birthDate);
        let dateB = new Date(b.birthDate);
        return dateA - dateB;
    });
    return DATA[0];
}

function keyEnter(e) {
    let keyC = e.keyCode;
    if (keyC === 13) {
        console.log(searchByName(TEXT_VALUE));
        console.log(getBiggestAge());
        TEXT_VALUE.value = '';
    }
}
TEXT_VALUE.addEventListener('keydown', keyEnter);
BUTTON.addEventListener('click', function() {
    console.log(searchByName(TEXT_VALUE));
    console.log(getBiggestAge());
    TEXT_VALUE.value = '';

});