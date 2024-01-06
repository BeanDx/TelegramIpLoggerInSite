# TelegramIpLoggerInSite

This project is a simple web-based tool designed to log information about new users accessing a website and send the data to a designated Telegram channel. It utilizes JavaScript and the Telegram Bot API to capture and communicate user details.

## Features

- **Random Image Display**: The project includes functionality to randomly display one of five images on the webpage, enhancing the user interface.
- **IP Address Logging**: The application fetches the user's IP address using the [ipify API](https://www.ipify.org/) and sends it to a specified Telegram channel.
- **Additional User Information**: In addition to the IP address, the project logs various details about the user, such as browser information, language, time zone, screen resolution, device type, device memory, internet speed, and cookie status.
- **Telegram Integration**: The user information is sent as a formatted message to a Telegram channel using the Telegram Bot API.

## Getting Started

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.

## Usage

1. Open the webpage in a browser.
2. The page will display a random image upon loading.
3. The user's IP address and additional information will be sent to the specified Telegram channel.

## Configuration

Before deploying the project, make sure to set up the following configurations:

- **Telegram Bot Token (`TOKEN`) and Chat ID (`CHAT_ID`)**: Obtain a Telegram bot token by creating a new bot on Telegram and get the chat ID of the channel where you want to receive logs. Update the `TOKEN` and `CHAT_ID` variables in the script accordingly.
