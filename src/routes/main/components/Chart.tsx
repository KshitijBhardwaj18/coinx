import { useEffect, useRef, memo } from "react";

function TradingViewWidget(props: { symbol: string }) {
  const flag = useRef(false);
  const container = useRef() as React.MutableRefObject<HTMLDivElement>;

  function renderChart() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BITSTAMP:${props.symbol.toUpperCase()}USD",
        "interval": "W",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "allow_symbol_change": true,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;

    container.current.appendChild(script);
  }

  useEffect(() => {
    if (!flag.current) {
      flag.current = true;
      renderChart();
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
}

export default memo(TradingViewWidget);
