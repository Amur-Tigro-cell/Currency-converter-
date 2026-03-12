# 💱 Currency Converter

A modern React web application for converting between different currencies using real-time exchange rates from the Currency API.

## Features

- ✅ **Real-time Exchange Rates** - Fetches live currency rates from currencyapi.com
- ✅ **Multiple Currency Support** - Convert between 150+ currencies
- ✅ **Instant Conversion** - Real-time conversion as you type
- ✅ **Swap Currencies** - Quick button to reverse the conversion direction
- ✅ **Responsive Design** - Works seamlessly on mobile and desktop devices
- ✅ **Error Handling** - Displays helpful error messages

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A free API key from [currencyapi.com](https://currencyapi.com/)

## Getting Started

### 1. Get an API Key

1. Visit [currencyapi.com](https://currencyapi.com/)
2. Sign up for a free account
3. Copy your API key from the dashboard

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your API Key

Open `src/App.jsx` and replace the placeholder API key:

```javascript
const API_KEY = 'fca_live_xxxxxxxxxxxxxxxxxxxxxxxxxxx' // Replace with your key
```

Replace `xxxxxxxxxxxxxxxxxxxxxxxxxxx` with your actual API key from currencyapi.com.

### 4. Run the Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173/` (or another port if 5173 is in use).

## Usage

1. Enter the amount you want to convert
2. Select the source currency from the "From" dropdown
3. Select the target currency from the "To" dropdown
4. The converted amount will be calculated automatically
5. Click the swap button (⇄) to reverse the currencies

## Project Structure

```
src/
├── App.jsx          # Main converter component
├── App.css          # Component styles
├── main.jsx         # React entry point
├── index.css        # Global styles
└── assets/          # Static assets
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## Technologies Used

- **React 19** - UI framework
- **Vite 7** - Build tool and development server
- **CSS3** - Styling with flexbox and gradients
- **Currency API** - Real-time exchange rates

## API Documentation

The application uses the [currencyapi.com API](https://currencyapi.com/docs):

- **Endpoint**: `https://api.currencyapi.com/v3/`
- **Authentication**: API key required (query parameter)
- **Rate Limits**: Free tier allows requests within daily limits

### API Endpoints Used

1. **Get Available Currencies**
   ```
   GET /currencies?apikey=YOUR_KEY
   ```

2. **Get Exchange Rates**
   ```
   GET /latest?apikey=YOUR_KEY&base_currency=USD&currencies=EUR
   ```

## Troubleshooting

### "Failed to fetch currencies"
- Verify your API key is correct
- Check your internet connection
- Check if you've exceeded API rate limits

### "Failed to fetch exchange rate"
- Ensure selected currencies are valid
- Check your API key permissions
- Verify the API is reachable

## Future Enhancements

- Add historical exchange rate charts
- Save favorite currency pairs
- Show conversion fees
- Add more currency information
- Add currency symbols display
- Cache exchange rates for offline use

## License

This project is open source and available under the MIT License.
