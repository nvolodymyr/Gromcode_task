export let createLogger = () => {
    let memory = [];
    return {
        warn: function(text) {
            memory.push({
                message: text,
                dateTime: new Date(),
                type: 'warn',
            });
        },
        error: text => {
            memory.push({ message: text, dateTime: new Date(), type: 'error' })
        },
        log: text => memory.push({ message: text, dateTime: Date.now(), type: 'log' }),
        getRecords: textOfType => {
            let resultArray = textOfType === undefined ? memory : memory.filter(elem => elem.type === textOfType);
            return resultArray.sort((a, b) => a.dateTime - b.dateTime)
        }
    }
}