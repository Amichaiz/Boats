import Card from './Card'
import React, { useState,useEffect } from 'react';

const Listing = () => {
    const [data, setData] = useState('');
    
    useEffect(() => {
      if(sessionStorage.getItem('data')!=null){
        console.log(sessionStorage.getItem('data'));
        setData(JSON.parse(sessionStorage.getItem('data')))
        sessionStorage.removeItem('data')
      }
      else(
        fetch(`https://git.heroku.com/boat-prime.git/boats`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setData(data)
        })
        .catch(err => {
          console.log(err);
        })
      )
    },[])
      
    return (
        <>
        <div className='flexme'>
        {data===''?'':data.map((item,i) => <Card data={item} key={i}/>)}
        </div>
        </>
    );
}

export default Listing;