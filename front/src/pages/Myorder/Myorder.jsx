import React, { useContext, useEffect, useState } from 'react'
import './Myorder.css';
import { StoreContexts } from '../../Context/StoreContexts';
import axios from 'axios';
import { assets } from '../../assets/assets'
const Myorder = () => {
    const {url,token} = useContext(StoreContexts);
    const [data,setData] = useState([]);

    const fetchorders = async()=>{
        const res = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(res.data.data);
        
        
    }

    useEffect(()=>{
     if(token){
        fetchorders();
     }
    },[token])
    
  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {
                data.map((order,index)=>{
                return (
                    <div key={index} className='my-orders-order'>
                        <img src={assets.parcel_icon} alt="" />
                        
                        <p>{order.items.map((item,index)=>{
                            if(index === order.items.length-1){
                                return item.name+" x "+item.quantity
                            }else{
                                return item.name+" x "+item.quantity+", "
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                        <button onClick={fetchorders}>Track Order</button>
                    </div>
                )
                })
            }
        </div>
        
      
    </div>
  )
}

export default Myorder
