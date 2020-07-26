import moment from 'moment';

function getMonthString(month) {
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthArr[month];
}

function getDateString(dateString) {
    let [month, date, year, time] = dateString.split(' ');
    if (time === '') time = dateString.split('  ')[1];
    const halfOfDay = time.slice(-2);
    time = time.slice(0,-2);
    const hour = halfOfDay.toLowerCase() === 'am'? time.split(':')[0]: `${parseInt(time.split(':')[0])+12}`;
    return moment().date(date).month(month).year(year).hour(hour).minute(time.split(':')[1]);
}

export function formatDateString(dateString) {
    const date = getDateString(dateString);
    const currentMonth = moment().months();
    const currentYear = moment().year();
    const dateMonth = date.months();    
    const dateYear = date.year();   
    const monthEqual = currentMonth === dateMonth;
    const yearEqual = currentYear === dateYear;
    if (!yearEqual) return `on ${date.date()} ${getMonthString(dateMonth)} ${dateYear}`;
    else if (yearEqual && !monthEqual) return `on ${date.date()} ${getMonthString(dateMonth)}`;
    else if (yearEqual && monthEqual) {
        const diffDays = moment().diff(date, 'days');
        if (diffDays === 0) {
            const diffHours = moment().diff(date, 'hour');
            if (diffHours === 0) {
                const diffMinutes = moment().diff(date, 'minutes');
                if (diffMinutes === 0) return ' just now';
                else return ` ${diffMinutes} ${diffMinutes === 1? 'minute': 'minutes'} ago`;
            } else return ` ${diffHours} ${diffHours === 1? 'hour': 'hours'} ago`;
        } else return ` ${diffDays} ${diffDays === 1? 'day': 'days'} ago`; 
    }
}

export function calculateDuration (startDateString, endDateString) {
    const startDate = getDateString(startDateString);
    const endDate = getDateString(endDateString);
    const diffHours = endDate.diff(startDate, 'hour');
    if (diffHours === 0) {
        return `${endDate.diff(startDate, 'minutes')} minutes`;
    } else {
        return `${diffHours} hours`;
    }
}
