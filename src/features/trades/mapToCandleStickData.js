import groupBy from "lodash.groupby"
import sortBy from "lodash.sortby"

const _ = n => n < 10 ? '0' + n : n;

function toDayte(d) {
  return `${_(d.getYear() + 1900)}-${_(d.getMonth() + 1)}-${_(d.getDate())}`
}

export function mapToCandleStickData(trades) {

  let groupedByDay =
    groupBy(
      sortBy(trades, 'timestamp'), // ascending
      ({timestamp}) => toDayte(new Date(timestamp))
    )
  let lastClose = null
  const result = Object.keys(groupedByDay).map(k => {
    let dayPrices = groupedByDay[k].map(({price}) => price);
    const open = lastClose || dayPrices[0]
    lastClose = dayPrices[dayPrices.length - 1]
    const result = {
      time: k,
      open,
      high: Math.max(...dayPrices),
      low: Math.min(...dayPrices),
      close: lastClose,
    }
    return result
  })

  return result
}
