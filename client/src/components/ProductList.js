import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ProductList = (props) => {

    const {product, setProduct} = props

    useEffect(() =>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
            setProduct(res.data)
        })
    }, [])

return (
    <div>
        {
            product.map((product, index)=>{
                return(
                    <div key={index}>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <Link to={`/product/${product._id}`}> {product.title}'s Page

                        </Link>
                    </div>
            )})
        }
    </div>
)
}

export default ProductList