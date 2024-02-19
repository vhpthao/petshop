import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { useParams } from 'react-router-dom';

const UpdateCategory = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    const [name, setName] = useState('');

    const updateCate = async (id) => {
        const formData = new FormData();
        formData.append('name', name);

        let result = await fetch(`http://localhost:8000/api/categories/update/${id}?_method=PUT`, {
            method: 'POST',
            body: formData,
          });

          console.log("result", result);
          alert("Data has been updated");

    }

    useEffect(() => {
        const getValue = async () => {
            try {
              const result = await fetch(`http://localhost:8000/api/categories/${id}`);
              const resultData = await result.json();
              setData(resultData);
              setName(resultData.name);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
    };
    getValue();
},[id]);

    return (
        <>
      <Header />
      <div className='updateProductPage col-sm-6 offset-sm-3'>
        <h1 className='text-center mt-3'>Cập nhật loại</h1>
        <label>Tên loại</label>
        <input type='text' className='form-control' onChange={(e) => setName(e.target.value)} defaultValue={data.name}/>
        <br/>
        <button className='btn btn-success offset-sm-5 mt-5' onClick={() => updateCate(data.id)}>Cập nhật</button>
      </div>
    </>
    );
};

export default UpdateCategory;