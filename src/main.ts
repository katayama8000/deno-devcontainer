import yahooFinance from 'npm:yahoo-finance2';

async function getAppleStockPrice() {
  const symbol = 'AAPL';
  const quote = await yahooFinance.quote(symbol);
  console.log(`Appleの現在の株価: $${quote.regularMarketPrice}`);
}

getAppleStockPrice();
