const millsecPerMinute = 60 * 1000;
const millsecPerHour = 60 * millsecPerMinute;
const millsecPerDay = 24 * millsecPerHour;



export let getDiff = (startDate, endDate) => {
        ////////////days
        let differentTime = Math.abs(startDate - endDate);
        let countDays = Math.trunc(differentTime / millsecPerDay);

        /////hours
        let countDaysInMilliseconds = countDays * millsecPerDay;
        let lastDayInMillseconds = differentTime - countDaysInMilliseconds;
        let countHours = Math.trunc(lastDayInMillseconds / millsecPerHour);
        /////minutes
        let lastHourInMs = lastDayInMillseconds - (countHours * millsecPerHour);
        let minutes = Math.trunc(lastHourInMs / millsecPerMinute);
        /////secondss
        let seconds = Math.trunc((lastHourInMs - (minutes * millsecPerMinute)) / 1000)

        return `${countDays}d ${countHours}h ${minutes}m ${seconds}s`

    }
    // console.log(getDiff(new Date(1991, 2, 22), new Date(1990, 2, 22)));