let message = 'Just learn it!';
export let sendMessage = name => {
    console.log(`${name}, ${message} Your Gromcode`);
}
export let setMessage = (str) => {
    message = str;
}