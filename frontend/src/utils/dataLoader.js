import * as d3 from 'd3';

export async function loadData(filePath) {
  const data = await d3.csv(filePath, d => {
    return {
      timestamp: new Date(d.timestamp),
      open: +d.open,
      high: +d.high,
      low: +d.low,
      close: +d.close,
      volume: +d.volume
    };
  });
  return data;
}
