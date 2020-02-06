const tasks = [
    { text: 'Buy milk', done: false, date: Date.now(), dateCheck: undefined },
    { text: 'Pick up Tom from airport', done: false, date: Date.now() + 1, dateCheck: undefined },
    { text: 'Visit party', done: false, date: Date.now() + 2, dateCheck: undefined },
    { text: 'Visit doctor', done: true, date: Date.now() + 3, dateCheck: this.date + 1 },
    { text: 'Buy meat', done: true, date: Date.now() + 4, dateCheck: this.date + 1 },
]

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';
    // const notDoneItemsElements = listItems.filter(elem => elem.done === false)
    //     .sort((a, b) => b.date - a.date);
    // const yesDoneItemsElements = listItems.filter(elem => elem.done === true)
    //     .sort((a, b) => b.date - a.date);
    // let finalArrayOfItems = [...notDoneItemsElements, ...yesDoneItemsElements]

    const listItemsElems = listItems.sort((a, b) => b.done - a.done)
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
    let newTask = {
        text: nameOfTask.value,
        done: false,
        date: Date.now() + tasks.length,
        dateCheck: undefined
    }
    let lengthOfDone = tasks.filter(elem => elem.done).length

    tasks.splice(lengthOfDone, 0, newTask);
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
    oneTask.dateCheck = Date.now();

    renderListItems(tasks);
}
renderListItems(tasks);