const tasks = [
    { text: 'Buy milk', done: false, id: 0, date: Date.now(), },
    { text: 'Pick up Tom from airport', done: false, id: 1, date: Date.now() + 1, },
    { text: 'Visit party', done: false, id: 2, date: Date.now() + 2, },
    { text: 'Visit doctor', done: true, id: 3, date: Date.now() + 3, },
    { text: 'Buy meat', done: true, id: 4, date: Date.now() + 4, },
]

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
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