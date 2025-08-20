import React, { useContext, useEffect, useState } from 'react'
import { ContextObj } from './Cryptodata'
import { Link } from 'react-router-dom'

const DisplayCrypto = () => {
    let all_data = useContext(ContextObj)
    let [coin,setcoin]=useState([]) 
    useEffect(()=>{
        setcoin(all_data.data)
     },[all_data.data])
    
    let filterdata=(e)=>{
        console.log(e.target.value)
        let filterdcoin=all_data.data.filter((coin)=>{
            return coin.id.includes(e.target.value.toLowerCase())
        })
        setcoin(filterdcoin)
    }
    console.log(coin)
  return (
    <div>
        <div className='search'>
            <input type='search' placeholder='Search Here' onInput={filterdata} />
        </div>
        <table className='cryptoTable'>
            <tr>
            <th>SL NO</th>
            <th>CRYPTO NAME</th>
            <th>IMAGE</th>
            <th>PRICE</th>
            <th>MARKET CAPITAL</th>
            <th>24 H % CHANGES</th>
            <th>Select view Here</th>
            </tr>
            {
                coin.map((val,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{val.id}</td>
                            <td> <img src={val.image} alt=''/></td>
                            <td>{all_data.symbol} {val.current_price}</td>
                            <td>{val.market_cap}</td>
                            <td>{val.market_cap_change_percentage_24h}</td>
                            <td><Link to ={`/coin/${val.id}`}> <button style={{backgroundColor:'rgb(34, 134, 113'}}>
                                 
                                View 
                                </button>  </Link> </td>
                        </tr>

                )
                    //useeffect ()=>{} []-logic will get once executed 
                })
            }

        </table>
    </div>
  )
}

export default DisplayCrypto