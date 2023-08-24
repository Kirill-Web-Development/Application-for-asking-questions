function getPastTime(date) {
    const qTime = new Date(date).getTime();
    const currTIme = new Date().getTime();
    const difference = currTIme - qTime;
    const pastTime = {
        days : Math.round(difference/(1000*60*60*24)),
        hours: calculateHours(difference/(1000*60*60) % 24)
    }
    if (pastTime.days === 0) {
        return `${pastTime.hours} hours ago`
    }
    return `${pastTime.days} days ${pastTime.hours} hours ago`
}

function calculateHours(hours) {
    if (hours < 1) {
        return hours = hours.toFixed(1);
    } else {
        return Math.round(hours)
    }
}