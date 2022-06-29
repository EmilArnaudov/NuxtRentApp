export function getDeskFreeDate(weeks) {
    let msWeeks = 1000 * 60 * 60 * 24 * (7 * Number(weeks));
    let futureDate = new Date(Date.now() + msWeeks);
    let formattedData = futureDate.toLocaleDateString('en-eu', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    console.log(Date.now(), weeks, msWeeks, futureDate, formattedData);
    return formattedData;
}