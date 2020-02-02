const tasks = [
    { text: 'Buy milk', done: false, date: Date.now(), },
    { text: 'Pick up Tom from airport', done: false, date: Date.now() + 1, },
    { text: 'Visit party', done: false, date: Date.now() + 2, },
    { text: 'Visit doctor', done: true, date: Date.now() + 3, },
    { text: 'Buy meat', done: true, date: Date.now() + 4, },
]

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';
    const notDoneItemsElements = listItems.filter(elem => elem.done === false)
        .sort((a, b) => b.date - a.date);
    const yesDoneItemsElements = listItems.filter(elem => elem.done === true)
        .sort((a, b) => b.date - a.date);
    let finalArrayOfItems = [...notDoneItemsElements, ...yesDoneItemsElements]
    const listItemsElems = finalArrayOfItems
        .map(({ text, done, date }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const cheboxElem = document.createElement('input');
            cheboxElem.setAttribute('type', 'checkbox');
            cheboxElem.setAttribute('id', `${date}`)
            cheboxElem.classList.add('list__item-checkbox');
            cheboxElem.checked = done;
            cheboxElem.addEventListener('click', trigerCheckbox);
            listItemElem.append(cheboxElem, text);

            return listItemElem;
        });
    return listElem.append(...listItemsElems);
}

////////////////////////////////
let addNewItem = () => {
    const nameOfTask = document.querySelector('.task-input');
    if (nameOfTask.value == '') return;
    console.log(nameOfTask.value);
    let newTask = {
        text: nameOfTask.value,
        done: false,
        date: Date.now(),
    }
    tasks.push(newTask);
    renderListItems(tasks);
    nameOfTask.value = '';
}
let createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', addNewItem);
///////////////////////////
function trigerCheckbox() {
    let id = this.id;
    let oneTask = tasks.find(elem => elem.date == id);
    console.log(oneTask);
    console.log(this.checked);
    oneTask.done = this.checked;
    oneTask.date = Date.now();
    renderListItems(tasks);
}
renderListItems(tasks);