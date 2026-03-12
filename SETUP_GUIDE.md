# Quick Setup Guide

## Step 1: Get Your Free API Key

1. Go to https://currencyapi.com/
2. Click "Sign Up" and create a free account
3. Verify your email
4. Go to your dashboard and copy your API key (it starts with `fca_live_`)

## Step 2: Update the API Key in the App

1. Open `src/App.jsx`
2. Find this line (around line 14):
   ```javascript
   const API_KEY = 'fca_live_xxxxxxxxxxxxxxxxxxxxxxxxxxx'
   ```
3. Replace it with your actual API key:
   ```javascript
   const API_KEY = 'fca_live_YOUR_ACTUAL_KEY_HERE'
   ```

## Step 3: Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:5173/`

## What You Get

✅ Convert between 150+ currencies
✅ Real-time exchange rates
✅ Responsive design (works on mobile & desktop)
✅ Instant calculations as you type
✅ Easy currency swap feature

## Features

- **Amount Input**: Enter any amount to convert
- **From/To Dropdowns**: Select source and target currencies
- **Swap Button**: Click ⇄ to reverse the currencies
- **Real-time Results**: See converted amount instantly
- **Exchange Rate Display**: Shows current exchange rate

## Common Issues

**Issue**: "Failed to fetch currencies"
- **Solution**: Check if your API key is correct and you have internet connection

**Issue**: Currency dropdowns are empty
- **Solution**: Make sure your API key is valid and the app has internet access

**Issue**: Conversion not working
- **Solution**: Verify both currencies are selected and amount is valid

## Need Help?

Check the full README.md for more information and troubleshooting tips.
