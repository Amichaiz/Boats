import React, { useState } from 'react';

import './Search.css'
const Search = () => {
  const [boatStyle, setboutStyle] = useState('sail');
  const [typeCondition, setCondition] = useState('new');
  const [boutLength, setboutLength] = useState('');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setpriceMax] = useState(5000000);
  const [yearMin, setyearMin] = useState(0);
  const [yearMax, setyearMax] = useState(2022);
  const [brand, setbrand] = useState('');
  const [model, setmodel] = useState('');

  const findBoat = () => {
    fetch(`https://boat-prime.herokuapp.com/params?s=${boatStyle}&c=${typeCondition}&l=${boutLength}&pmi=${priceMin}&pma=${priceMax}&ymi=${yearMin}&yma=${yearMax}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        sessionStorage.setItem('data', JSON.stringify(data));
        window.location.replace('/boats')
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <div className='container card'>
      <h2 className='h2'>Buy a Boat</h2>
      <p><strong>You can search some or all of the fields</strong></p>
      <div className='search-area'>
        <div className='line '>
          <select className="right-side" onChange={(e) => setboutStyle(e.target.value)}>
            <option value="">Style</option>
            <option value="sail">Sailboat</option>
            <option value="motor">Motor</option>
          </select>
          <input type='number' min="0" step="1000" placeholder='Price: Min' className="left-side" onChange={(e) => setPriceMin(e.target.value)} /><input type='number' min="0" step="1000" placeholder='Max' className="left-side" onChange={(e) => setpriceMax(e.target.value)} /></div>
        <div className='line'>
          <select className="right-side" onChange={(e) => setCondition(e.target.value)}>
            <option value="">Condition</option>
            <option value="used">Used</option>
            <option value="new">New</option>
          </select>
          <input type="number" min="1960" max="2022" step="1" placeholder="Year: From" className="left-side" onChange={(e) => setyearMin(e.target.value)} /><input type="number" min="1960" max="2022" step="1" placeholder="To" className="left-side" onChange={(e) => setyearMax(e.target.value)} />
        </div>
        <div className='line'>
          <input type="number" placeholder="Length" step="0.5" className="right-side" onChange={(e) => setboutLength(e.target.value)} /><input type="text" placeholder="Brand: All" className="left-side" onChange={(e) => setyearMin(e.target.value)} /><input type="text" placeholder="Model: All" className="left-side" onChange={(e) => setyearMin(e.target.value)} />
        </div>
        <div className='line'><button onClick={findBoat} className='butboat'>Go Fishing</button></div>

      </div>
    </div>
  )
}

export default Search;


