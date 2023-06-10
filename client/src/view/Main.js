import React, {useState} from 'react'
import axios from 'axios'
import Form from '../components/Form'
import ProductList from '../components/ProductList'

const Main = (props) => {
    const [product, setProduct] = useState([])
    const removeFromDom = productId => {
      setProduct(product.filter(product => product._id != productId))
    }
  return (
    <div>
        <Form product={product} setProduct={setProduct} />
        <hr/>
        <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>

    </div>
  )
}

export default Main