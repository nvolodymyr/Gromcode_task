let summa = 0;
for (let index = 0; index <= 1000; index++) {
    if (index % 2 !== 0) {
        console.log('Found');
        summa += index;
    }
}
if ((summa * 5) > 5000) {
    console.log('Bigger')
} else {
    console.log('Smaller or equal');
}