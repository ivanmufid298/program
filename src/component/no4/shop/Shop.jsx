import React, { useState } from 'react'
import { increasevalue, decreasevalue } from '../../no4/redux/ActionCreator'
import { useSelector, useDispatch } from 'react-redux'
import "./shop.css"
import { Link } from 'react-router-dom'

function Shop() {

    const myState=useSelector(state=>state.ourState.count)
    const dispatch=useDispatch()
    console.log("==== myState ====", myState)


    const [show, toogleShow] = useState(false)

  return (
    <div>

        <ul>
        <li><Link style={{textDecoration: 'none'}} to="/" >Nomor 4</Link></li>
        <li><Link style={{textDecoration: 'none'}} to="/no5" >Nomor 5</Link></li>
        <button type="button" className="icon-button">
        <span className="material-symbols-outlined">shopping_bag</span>
            <span className="icon-button__badge">{myState}</span>
        </button>
        </ul>
        
        <p>$ {(myState) * 19}</p>

        <div className="card">
        <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=542,height=723,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-501-54-jeans-A46770001_14_Details.jpg" alt="Denim Jeans" style={{width:'100%'}}/>
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
        <p><button onClick={() => toogleShow (!show)} className='card-button'>{show ? "Remove" : "Add to Cart"}</button></p>

            { show &&
                <div style={{
                display: 'flex'
            }}>
                
                <button className='item-button' onClick={()=>dispatch(decreasevalue())} >-</button>
                <p
                style={{
                    padding: 20,
                }}
                >{myState}</p>
                <button className='item-button' onClick={()=>dispatch(increasevalue())}>+</button>

            </div>}
        </div>

        
    </div>
  )
}

export default Shop