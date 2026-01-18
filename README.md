# CurrencyX - Professional Exchange Rates

A high-performance, professional currency converter built with vanilla JavaScript. CurrencyX provides real-time global exchange rates with an institutional-grade interface.

## Features

- **Real-time Conversion**: Powered by the ExchangeRate-API for accurate, up-to-date data.
- **Institutional UI**: Clean, high-contrast dashboard design focused on data clarity.
- **Flag Integration**: Automatic flag updates for over 150+ global currencies.
- **Rates Board**: View all global parities relative to your base currency in a single view.
- **Searchable Rates**: Filter local and global rates instantly.
- **Responsive Design**: Optimized for both desktop and mobile high-precision usage.

## Technical Highlights

- **Vanilla JS**: Zero heavy frameworks, optimized for speed and reliability.
- **Secure Configuration**: Externalized API key management to prevent accidental exposure.
- **Modern CSS**: Custom variable-driven design system with professional typography.
- **Clean Code**: Follows SOLID principles and focused logic separation.

## Setup

1. Clone the repository.
2. Get your free API key from [ExchangeRate-API](https://www.exchangerate-api.com/).
3. Open `config.js`.
4. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const config = {
     apiKey: "your_api_key_goes_here",
   };
   ```
5. Open `index.html` in your browser or use a local server.

## Default Currencies

- **Base**: USD (US Dollar)
- **Target**: TRY (Turkish Lira)

## License

MIT
