import React, { useEffect, useRef } from "react";

interface TradingViewWidgetProps {
  // Add any props you may want to pass to the component
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = (props) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTradingViewScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: "BITSTAMP:BTCUSD",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "3",
        locale: "en",
        enable_publishing: false,
        gridColor: "rgba(182, 182, 182, 0.06)",
        hide_top_toolbar: true,
        save_image: false,
        details: true,
        calendar: false,
        chartOnly: true,
        hide_volume: true,
        support_host: "https://www.tradingview.com",
      });

      if (container.current) {
        container.current.innerHTML = ""; // Clear previous content
        container.current.appendChild(script);
      }
    };

    loadTradingViewScript();

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      if (container.current) {
        container.current.innerHTML = ""; // Clear content on unmount
      }
    };
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
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
