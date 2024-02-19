import React, {useState} from 'react'
import Header from './components/Header'

function AddProduct() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = async () => {
    let item = {name, image, description, price};
    console.log("Đối tượng truyền vào hàm Add", item);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('price', price);

    let result = await fetch("http://localhost:8000/api/products/add", {
      method: "POST",
      body: formData,
    });

    alert("Data has been saved!");
    result = await result.json();
    console.log("result", result);

    resetForm();
  }

  const resetForm = () => {
    setName("");
    setImage("");
    setDescription("");
    setPrice("");
  }

  return (
    <>
    <Header/>
    <div className='addProductPage col-sm-6 offset-sm-3'> 
      <h1 className='text-center mt-3 '>AddProduct</h1>
      <label>Name</label>
      <input type='text' className='form-control' value={name} onChange={(e)=> setName(e.target.value)}/>
      <label>Image</label>
      <input type='file' className='form-control' onChange={(e)=> setImage(e.target.files[0])}/>
      <label>Description</label>
      <input type='text' className='form-control' value={description} onChange={(e) => setDescription(e.target.value)}/>
      <label>Price</label>
      <input type='text' className='form-control' value={price} onChange={(e) => setPrice(e.target.value)}/>

      <button className='btn btn-success offset-sm-5 mt-5' onClick={handleAdd}>Add</button>
    </div>
    </>
  )
}

export default AddProduct