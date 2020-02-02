const formatter = new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
});
export let getGreenwichTime = (date) => {
    return formatter.format(date);
}