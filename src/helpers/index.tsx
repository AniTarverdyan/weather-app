export const getFormattedTemp = (unit: string, temp: any) => {
    let formattedTemp;
    if (!temp) {
        formattedTemp = '';
    } else if (unit === 'F') {
        formattedTemp = Math.round(temp * 1.8 + 32) + '°F';
    } else {
        formattedTemp = Math.round(temp) + '°C';
    }
    return formattedTemp;
}

export const getFormattedDate = (dateStr?: string): string => {
    if (!dateStr) {
        return '';
    }

    const date = new Date(dateStr);
    let hours = date.getHours() as string | 0;
    let minutes = date.getMinutes() as string | 0;
    let seconds = date.getSeconds() as string | 0;
    if (hours < 10) {
        hours = '0' + hours
    } if (minutes < 10) {
        minutes = '0' + minutes || 0
    } if (seconds < 10) {
        seconds = '0' + seconds || 0
    }

    const formattedDate = hours + ':' + minutes + ':' + seconds
    return formattedDate;
};