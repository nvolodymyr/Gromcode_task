let getMessagesForBestStudents = (allStudents, badStudents) => {
    return allStudents.filter(elem => !badStudents.includes(elem)).map(name => `Good job, ${name}`);
}