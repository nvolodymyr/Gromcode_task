const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
]
const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems.map(({ text, done }) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        if (done) {
            listItemElem.classList.add('list__item_done');
        }
        const cheboxElem = document.createElement('input');
        cheboxElem.classList.add('list__item-checkbox');
        cheboxElem.checked = done;
        cheboxElem.setAttribute('type', 'checkbox');
        listItemElem.append(cheboxElem, text);

        return listItemElem;
    });
    return listElem.append(...listItemsElems);
}
renderListItems(tasks);