import React, { useState } from 'react'
import { FcCurrencyExchange } from "react-icons/fc";
import { FaArrowDownLong } from "react-icons/fa6";
import axios from 'axios';

function Currency() {

  const URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_M0cmQSzix5rTERugDvhKDwUmpJ9RvB0RDVbnLicn"

  const getData = async () => {
    const response = await axios.get(`${URL}&base_currency=${from}`);
    const result = (response.data.data[to]) * amount;
    SetResult(result.toFixed(1));
  }

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, SetTo] = useState("GBP");
  const [result, SetResult] = useState(1);

  const catchAmount = (event) => {
    setAmount(event.target.value);
  }
  const catchFrom = (event) => {
    setFrom(event.target.value);
  }
  const catchTo = (event) => {
    SetTo(event.target.value);
  }
  const catchResult = (event) => {
    SetResult(event.target.value);
  }

  return (
    <>
      <div className='container'>
        <div className='title-div'>
          <FcCurrencyExchange className='icon' />
          <h1>Currency Converter</h1>
        </div>

        <div className='currency-div'>

          <div className='select-wrapper'>
            <input className='amount-input' onChange={catchAmount} value={amount} type="number" placeholder='amount' />
            <select onChange={catchFrom} className='select-input' value={from}>
              <option>USD</option>
              <option>GBP</option>
              <option>TRY</option>
              <option>EUR</option>
            </select>
          </div>

          <FaArrowDownLong className='arrow-icon' />

          <div className='select-wrapper'>
            <select onChange={catchTo} className='select-input' value={to}>
              <option>TRY</option>
              <option>GBP</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
            <input onChange={catchResult} className='result-input' type="number" placeholder='result' value={result} />
          </div>

        </div>
        <div className='btn-div'>
          <button onClick={getData} className='convert-btn'>convert</button>
        </div>
      </div>
    </>

  )
}

export default Currency