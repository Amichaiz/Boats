import './Sell.css'
import React, { useState,useEffect } from 'react';

const Sell = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [condition, setCon] = useState('new');
    const [year, setYear] = useState('');
    const [len, setLen] = useState('');
    const [style, setStyle] = useState('');
    const [price, setPrice] = useState('');
    const [seller, setSeller] = useState('');

    useEffect(() => {
        fetch(`https://git.heroku.com/boat-prime.git/userbymail?q=${sessionStorage.getItem('email')}`)
        .then(res => res.json())
        .then(data => {
            setSeller(data)
        })
        .catch(err => {
          console.log(err);
        })
    },[])
    const addBout = (e) => {
        
        fetch(`https://git.heroku.com/boat-prime.git/addbout`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json', // this needs to be defined
          },
          body: JSON.stringify({ brand, model, condition, year, len, style, price,seller })
        })
          .then(res => res.json())
          .then(data => {
            document.getElementById('added').innerHTML="Bout Added"
            setTimeout(function(){  document.getElementById('added').innerHTML="" }, 3000);
          })
          .catch(err => {
            console.log(err);
          })
      }
    return (
        <>
            <div className="s-card">
                <h1>Brand: <input className='input-csss' type="text" required onChange={(e) => setBrand(e.target.value)} /></h1>
                <p>Model: <input className='input-csss' type="text" required onChange={(e) => setModel(e.target.value)} /></p>
                <p>Condition: <select className='input-csss' onChange={(e) => setCon(e.target.value)}>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                </select></p>
                <p>Year: <input className='input-csss' type="number" min="1960" max="2022" step="1" required onChange={(e) => setYear(e.target.value)} /></p>
                <p>Length: <input className='input-csss' type="number" required onChange={(e) => setLen(e.target.value)} /></p>
                <p>Style: <input className='input-csss' type="text" required onChange={(e) => setStyle(e.target.value)} /></p>
                <p>Price: <input className='input-csss' type="number" min="0" step="1000" required onChange={(e) => setPrice(e.target.value)} /></p>
                <p><button className="s-button" onClick={addBout}>Sell</button></p>
                <div id="added"></div>
            </div>
        </>
    );
}

export default Sell;