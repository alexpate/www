'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';

interface DataPoint {
  date: string;
  value: number;
}

const ChartComponent = () => {
  const [data, setData] = useState<DataPoint[] | []>([]);
  const chartContainerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch('/api/spotify/data');

      if (!req.ok) {
        throw new Error('Failed to fetch data');
      }

      const res = await req.json();
      setData(res);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: 'black',
        background: { type: 'solid', color: 'transparent' },
      },
    };

    const chart = createChart(chartContainerRef.current, chartOptions);

    chart.applyOptions({
      rightPriceScale: {
        scaleMargins: {
          top: 0.3, // leave some space for the legend
          bottom: 0.25,
        },
      },
      crosshair: {
        horzLine: {
          visible: false,
          labelVisible: false,
        },
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
    });

    const areaSeries = chart.addAreaSeries({
      topColor: '#2962FF',
      bottomColor: 'rgba(41, 98, 255, 0.28)',
      lineColor: '#2962FF',
      lineWidth: 2,
      crosshairMarkerVisible: false,
    });

    console.log(data);

    areaSeries.setData(
      data.map((playlist) => ({
        time: playlist.date,
        value: playlist.averageValence,
      }))
    );

    const symbolName = 'Average monthly valence';

    const legend = document.createElement('div');
    legend.style = `position: absolute; left: 12px; top: 12px; z-index: 1; font-size: 14px; font-family: sans-serif; line-height: 18px; font-weight: 300;`;
    chartContainerRef.current.appendChild(legend);

    const firstRow = document.createElement('div');
    firstRow.innerHTML = symbolName;
    firstRow.style.color = 'black';
    legend.appendChild(firstRow);

    chart.subscribeCrosshairMove((param) => {
      let priceFormatted = '';
      if (param.time) {
        const data = param.seriesData.get(areaSeries);
        const price = data.value !== undefined ? data.value : data.close;
        priceFormatted = price.toFixed(2);
      }
      firstRow.innerHTML = `${symbolName} <strong>${priceFormatted}</strong>`;
    });

    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [data]);

  return (
    <div
      ref={chartContainerRef}
      style={{ position: 'relative', width: '100%', height: '400px' }}
    />
  );
};

export default ChartComponent;
