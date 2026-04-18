import React,{useState, useContext} from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GeneralContext from "./GenralContext";
import DoughnoutChart from "./DoughnoutChart";

const labels = watchlist.map((stock) => stock.name);

const WatchList = () => {
  const data={
    labels,
    datasets:[
      {
      label :"price",
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [ 
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }
  ]
}
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} /50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index) => {
          return <WatchListItem key={index} stock={stock} />;
        })}

      </ul>
      <DoughnoutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock}) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  }

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down": "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          <span>
            {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
            ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          </span>
          <span className={stock.isDown ? "down" : "up"}>
          ₹{stock.price}
          </span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  )
}

const WatchListActions = ({uid}) => {
  const {openBuyWindow} = useContext(GeneralContext);

  const handleBuyClick = () => {
    openBuyWindow(uid);
  };

  return(
    <span className="actions"> 
      <span>
        <Tooltip title="Buy" placement="top" arrow >
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell" placement="top" arrow >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics" placement="top" arrow >
          <AnalyticsIcon className="icon" />
        </Tooltip>
        <Tooltip title="More" placement="top" arrow >
          <MoreHorizIcon className="icon" />
        </Tooltip>
      </span>
    </span>
  )

}