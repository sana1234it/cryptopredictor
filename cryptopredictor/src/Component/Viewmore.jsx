import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewMore = () => {
  let {id} =useParams()
  console.log(id)
let[coindata,setcoinData]=useState({})
useEffect(()=>{
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': '	CG-yovSJwEby5nhAYBZQkEyap7A'
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(e =>setcoinData(e) )
      .catch(err => console.error(err));

    },[id])

  return (
    <div>

      {/* <div className="card">
        <div className="left">
          {coindata.image && (
            <img src={coindata.image.large} alt={coindata.name}/>
          )}
        </div>
        <div className="right">
          <ul>
            <li>Name:{coindata.name}</li>
            <li>Symbol:{coindata.symbol}</li>
            <li>Market Cap Rank:{coindata.market_cap_rank}</li>

            <li></li>
          </ul>
        </div>
      </div> */}
{    
    <div className="view-container">
  <div className="view-logo">
    <img src={coindata.image?.large} alt={coindata.name} />
  </div>
  

  <div className="view-content">
    <div className="view-description">
      
      <h1>{coindata.name}</h1>
      <p dangerouslySetInnerHTML={{ __html: coindata.description?.en?.split(". ")[0] + "." }} />
      <div className="symbol">({coindata.symbol?.toUpperCase()})</div>
    </div>

    <div className="view-stats">
      <div className="stat-item">
        <span>Current Price</span>
        <strong>${coindata.market_data?.current_price?.usd}</strong>
      </div>
      <div className="stat-item">
        <span>Market Cap</span>
        <strong>${coindata.market_data?.market_cap?.usd?.toLocaleString()}</strong>
      </div>
      <div className="stat-item">
        <span>24h High</span>
        <strong>${coindata.market_data?.high_24h?.usd}</strong>
      </div>
      <div className="stat-item">
        <span>24h Low</span>
        <strong>${coindata.market_data?.low_24h?.usd}</strong>
      </div>
      <div className="stat-item">
        <span>Market Rank</span>
        <strong>#{coindata.market_cap_rank}</strong>
      </div>
    </div>
  </div>
</div> 
 }

    </div>
  )
}

export default ViewMore
