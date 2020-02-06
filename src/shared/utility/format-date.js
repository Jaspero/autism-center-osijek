export function formatDate(timeStamp) {

    const date = new Date(timeStamp);

    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month > 9 ? month : `0${month}`;
    day = day > 9 ? day : `0${day}`;

    return `${day}/${month}/${date.getFullYear()}`;
}
