import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import { useParams } from 'react-router-dom';

function UpdateProduct() {
  const { id } = useParams();
  const [data, setData] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
  });

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const getValue = async () => {
      try {
        const result = await fetch(`http://localhost:8000/api/products/${id}`);
        const resultData = await result.json();
        setData(resultData);
        setName(resultData.name);
        setImage(resultData.image);
        setDescription(resultData.description);
        setPrice(resultData.price);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getValue();
  }, [data.description, data.image, data.name, data.price, id]);


  const handleUpdate = async (id) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('price', price);

    let result = await fetch(`http://localhost:8000/api/products/update/${id}?_method=PUT`, {
      method: 'POST',
      body: formData,
    });

    console.log("result after update", result);
    alert("Data has been updated");

  }

  return (
    <>
      <Header />
      <div className='updateProductPage col-sm-6 offset-sm-3'>
        <h1 className='text-center mt-3'>Cập nhật sản phẩm</h1>
        <label>Name</label>
        <input type='text' className='form-control' defaultValue={data.name} onChange={(e)=> setName(e.target.value)}/>
        <label>Image</label>
        <input type='file' className='form-control' onChange={(e)=> setImage(e.target.files[0])}/>
        <img alt='img' style={{width: '100px', height: '100px'}} src={"http://localhost:8000/"+data.image}/>
        <br/>

        <label>Description</label>
        <input type='text' className='form-control' defaultValue={data.description} onChange={(e)=> setDescription(e.target.value)}/>
        <label>Price</label>
        <input type='text' className='form-control' defaultValue={data.price} onChange={(e)=> setPrice(e.target.value)}/>
        <button className='btn btn-success offset-sm-5 mt-5' onClick={() => handleUpdate(data.id)}>Cập nhật</button>
      </div>
    </>
  );
}

export default UpdateProduct;
