export let createLogger = () => {
    let memory = [];
    return {
        warn: text => { memory.push({ message: text, dateTime: Date.now(), type: 'warn' }) },
        error: text => { memory.push({ message: text, dateTime: Date.now(), type: 'error' }) },
        log: text => { memory.push({ message: text, dateTime: Date.now(), type: 'log' }) },
        getRecords: textOfType => {
            let resultArray = textOfType === undefined ? memory : memory.filter(elem => elem.type === textOfType);
            return resultArray.sort((a, b) => a.dateTime - b.dateTime)
        }
    }
}