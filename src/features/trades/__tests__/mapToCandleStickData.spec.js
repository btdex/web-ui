const {mapToCandleStickData} = require("../mapToCandleStickData")

const TestData = [
  {
    "trade_id": "8740722415956905576",
    "price": 1.58,
    "base_volume": 700.0,
    "quote_volume": 1106.0,
    "timestamp": 1596269588000,
    "type": "sell"
  },
  {
    "trade_id": "14231647083230060437",
    "price": 1.55,
    "base_volume": 100.0,
    "quote_volume": 155.0,
    "timestamp": 1596268559000,
    "type": "sell"
  },
  {
    "trade_id": "1541052186897049501",
    "price": 1.55,
    "base_volume": 200.0,
    "quote_volume": 310.0,
    "timestamp": 1596268538000,
    "type": "sell"
  },
  {
    "trade_id": "9235880132727872117",
    "price": 1.55,
    "base_volume": 300.0,
    "quote_volume": 465.0,
    "timestamp": 1596268492000,
    "type": "sell"
  },
  {
    "trade_id": "11320324226900477009",
    "price": 1.55,
    "base_volume": 600.0,
    "quote_volume": 930.0,
    "timestamp": 1596268435000,
    "type": "sell"
  },
  {
    "trade_id": "9308008852659535320",
    "price": 1.55,
    "base_volume": 1000.0,
    "quote_volume": 1550.0,
    "timestamp": 1596268379000,
    "type": "sell"
  },
  {
    "trade_id": "11680699718992702103",
    "price": 1.55,
    "base_volume": 10000.0,
    "quote_volume": 15500.0,
    "timestamp": 1596236825000,
    "type": "sell"
  },
  {
    "trade_id": "11442101286409220780",
    "price": 1.38,
    "base_volume": 1000.0,
    "quote_volume": 1380.0,
    "timestamp": 1596063447000,
    "type": "buy"
  },
  {
    "trade_id": "16816737964532765948",
    "price": 1.38,
    "base_volume": 100.0,
    "quote_volume": 137.99999999999997,
    "timestamp": 1595772849000,
    "type": "buy"
  },
  {
    "trade_id": "16866308939073475257",
    "price": 1.4,
    "base_volume": 200.0,
    "quote_volume": 280.0,
    "timestamp": 1595770558000,
    "type": "buy"
  },
  {
    "trade_id": "2787559901499934047",
    "price": 1.4,
    "base_volume": 200.0,
    "quote_volume": 280.0,
    "timestamp": 1595770552000,
    "type": "buy"
  },
  {
    "trade_id": "15949306993131595572",
    "price": 1.4,
    "base_volume": 200.0,
    "quote_volume": 280.0,
    "timestamp": 1595770547000,
    "type": "buy"
  },
  {
    "trade_id": "14329136481203426851",
    "price": 1.4,
    "base_volume": 200.0,
    "quote_volume": 280.0,
    "timestamp": 1595770541000,
    "type": "buy"
  },
]

describe('mapToCandleStickData', () => {
  it('should map raw trades correctly to candle data ', () => {
    const ExpectedData = [
      {
        time: '2020-08-01',
        open: 1.55,
        high: 1.58,
        low: 1.55,
        close: 1.58,
      },
      {
        time: '2020-07-31',
        open: 1.55,
        high: 1.55,
        low: 1.55,
        close: 1.55,
      },
      {
        time: '2020-07-29',
        open: 1.38,
        high: 1.38,
        low: 1.38,
        close: 1.38,
      },
      {
        time: '2020-07-26',
        open: 1.4,
        high: 1.4,
        low: 1.38,
        close: 1.38,
      }
    ]

    expect(mapToCandleStickData(TestData)).toEqual(ExpectedData)
  })
})
