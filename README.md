# CurrencyX - Professional Exchange Rates

A high-performance, professional currency converter built with modern JavaScript standards. CurrencyX provides real-time global exchange rates with an institutional-grade interface and secure environmental management.

## Features

- **Real-time Conversion**: Powered by the ExchangeRate-API for accurate, up-to-date data.
- **Institutional UI**: Clean, high-contrast dashboard design focused on data clarity.
- **Flag Integration**: Automatic flag updates for over 150+ global currencies.
- **Rates Board**: View all global parities relative to your base currency in a single view.
- **Searchable Rates**: Filter local and global rates instantly.
- **Responsive Design**: Optimized for both desktop and mobile high-precision usage.

## Technical Highlights

- **Vite & ES Modules**: Built using Vite for lightning-fast development and optimized production builds.
- **Secure Architecture**: Environment variable management using `.env` to protect sensitive API keys.
- **Clean Code**: Zero generic comments, focused logic separation, and modular data management.
- **Typography**: Professional data representation using `JetBrains Mono` and `Inter`.

## Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd Currency-Converter
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment**:
   - Create a `.env` file in the root directory.
   - Add your API key from [ExchangeRate-API](https://www.exchangerate-api.com/):
     ```env
     VITE_API_KEY=your_actual_api_key_here
     ```

4. **Launch Application**:
   ```bash
   npm run dev
   ```

## Production Build

To generate a production-ready bundle:

```bash
npm run build
```

The output will be in the `/dist` directory.

## Default Currencies

- **Base**: USD (US Dollar)
- **Target**: TRY (Turkish Lira)

## License

MIT
