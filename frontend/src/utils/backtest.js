import * as d3 from 'd3';

export function backtest(data, strategy) {
  let results = [];
  for (let i = 28; i < data.length; i++) {
    let signal = strategy(data.slice(i - 28, i));
    results.push({
      timestamp: data[i].timestamp,
      signal: signal
    });
  }
  return results;
}

export function sampleStrategy(data) {
  let shortSMA = d3.mean(data.slice(-14).map(d => d.close));
  let longSMA = d3.mean(data.slice(-28).map(d => d.close));
  if (shortSMA > longSMA) {
    return 'buy';
  } else if (shortSMA < longSMA) {
    return 'sell';
  } else {
    return 'hold';
  }
}
