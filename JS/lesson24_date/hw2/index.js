export let studentsBirthDays = (students) => {
    let [newArrayOfStudents] = [...students];
    return newArrayOfStudents
        .sort((a, b) => a.bibirthDate > b.bibirthDate ? 1 : -1)
        .reduce((acumm, elem) => {
            let monthSortNameOfStudents = [];
            let nameMonthInDate = new Date(elem.bibirthDate).toString().split(' ')[1];

            for (let index = 0; index < newArrayOfStudents.length; index++) {
                if (nameMonthInDate === new Date(newArrayOfStudents[index].bibirthDate).toString().split(' ')[1]) {
                    monthSortNameOfStudents.push(newArrayOfStudents[index].name);
                }

            }
            acumm[nameMonthInDate] = monthSortNameOfStudents;
            return acumm;
        }, {});
}