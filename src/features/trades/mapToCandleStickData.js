export function mapToCandleStickData(tradedata, intervalMins = 120) {
  intervalMins *= 60

  let result = [];

  tradedata.sort((a, b) => a.time - b.time);

  let open = 0;
  let high = 0;
  let close = 0;
  let low = 0;
  let volume = 0;
  let timeOpen = 0;
  let previousClose = null

  for (let i = 0; i < tradedata.length; i++) {
    const trade = tradedata[i];

    trade.price = Number(trade.price);
    trade.quantity = Number(trade.quantity);
    trade.time = Number(trade.time) - (Number(trade.time) % intervalMins);

    if (i === 0) {
      timeOpen = trade.time;
      open = trade.price;
      low = trade.price;
      high = trade.price;
      close = trade.price;
      volume = trade.quantity;
    }

    if (timeOpen === trade.time) {
      low = Math.min(trade.price, low);
      high = Math.max(trade.price, high);
      volume += trade.quantity;
      close = trade.price;
    } else {
      result.push({time: timeOpen, open, high, low, close, volume});
      timeOpen = trade.time;
      open = previousClose || trade.price;
      low = trade.price;
      high = trade.price;
      close = trade.price;
      volume = trade.quantity;
    }
    previousClose = close
  }

  return result;
}
