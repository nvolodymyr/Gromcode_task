 let arrayDaysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
 export let dayOfWeek = (date, days) => {
     const day = new Date(date).getDate();
     const dateInFuture = new Date(date).setDate(day + days);
     return arrayDaysOfWeek[new Date(dateInFuture).getDay()];
 }