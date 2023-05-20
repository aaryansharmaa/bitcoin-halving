import React, { useEffect, useState } from "react";

import axios from "axios";

const BitcoinPrice = () => {
  const [price, setPrice] = useState(null);
  const [cap, setCap] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true"
        );
        const data = response.data;
        const bitcoinPrice = data.bitcoin.usd;
        const marketCap = data.bitcoin.usd_market_cap;
        setPrice(bitcoinPrice);
        const formattedNumber = marketCap.toLocaleString(undefined, {
          maximumFractionDigits: 2,
          notation: "compact",
          compactDisplay: "short",
        });
        setCap(formattedNumber);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrice();

    const intervalId = setInterval(fetchPrice, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="mcaptext">
      Current Price: {price ? `$${price}` : "Loading..."}
      <br />
    </div>
  );
};

export default BitcoinPrice;
