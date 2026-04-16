import React ,{useState, useEffect}from "react";
import axios from "axios";
// import { holdings } from "../data/data.js";

const Holdings = () => {
  const [allHoldings,setAllHoldings]=useState([]);

  useEffect(() => {
  console.log("API CALL STARTED");

  axios.get("http://127.0.0.1:3002/allholdings")
    .then((res) => {
      console.log("SUCCESS:", res.data);
      setAllHoldings(res.data);
    })
    .catch((err) => {
      console.log("ERROR FULL:", err);        // 👈 important
      console.log("ERROR MSG:", err.message); // 👈 important
      console.log("ERROR CODE:", err.code);   // 👈 important
    });

}, []);
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
        <tbody>
          {allHoldings.map((stock,index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty > 0;
            const profClass=isProfit?'profit':'loss';
            const dayClass=stock.isDown?'loss':'profit';

            return (
              <tr key={index} >
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profClass}>
                  {((currValue - stock.avg * stock.qty).toFixed(2))}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            )
          } ) }  
        </tbody>

        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;