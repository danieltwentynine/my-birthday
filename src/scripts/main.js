AOS.init();

const birthDate = new Date("Jun 19, 2025 00:00:00");
const timeStampEvent = birthDate.getTime();

const countTime = setInterval(function () {
    const now = new Date();
    const timeStampNow = now.getTime();

    //gap from present date to birth date
    const eventGap = timeStampEvent - timeStampNow;

    //all in milliseconds
    const days = 1000 * 60 * 60 * 24;
    const hours = 1000 * 60 * 60;
    const minutes = 1000 * 60;
    const seconds = 1000;

    const daysTilBirthday = Math.floor(eventGap / days);
    const hoursTilBirthday = Math.floor((eventGap % days) / hours);
    const minTilBirthday = Math.floor((eventGap % hours) / minutes);
    const secTilBirthday = Math.floor((eventGap % minutes) / seconds);

    document.getElementById('counter').innerHTML = `${daysTilBirthday}d ${hoursTilBirthday}h ${minTilBirthday}m ${secTilBirthday}s`;

    if(eventGap < 0) {
        clearInterval(countTime);
        document.getElementById('counter').innerHTML = 'Daniel is already 24 years old!';
    }

}, 1000)