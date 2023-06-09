import React, { useState } from 'react'
import axios from 'axios';
const Form = (props) => {
    const {product, setProduct} = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,    
            price,
            description      
        })
            .then(res=>{
console.log(res); 
console.log(res.data);
setProduct([...product, res.data])
})
            .catch(err=>console.log(err))
    }   
    return (
        <div style={{margin: "50px auto",
        width: "300px",
}}>
            <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p style={
                {backgroundColor: "#f6f6f6",
                padding: "10px",
                marginTop:"20px"
            }
            }>
                <label>Title</label>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p style={
                {backgroundColor: "#f6f6f6",
                padding: "10px",
                marginTop:"20px"
            }
            }>
                <label>Price $</label>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p style={
                {backgroundColor: "#f6f6f6",
                padding: "10px",
                marginTop:"20px"
            }
            }>
                <label>Description</label>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <button style={{
                width: "150px",
                height: "30px",
                marginTop:"20px"
            }}>Create</button>
            </form>
            </div>
    )
}
export default Form;

