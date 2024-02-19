import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function ListProduct() {
    const [data, setData] = useState([]);

    useEffect( () => {
      getData();
    }, []);

    const handleDelete = async (id) => {
        let result = await fetch(`http://localhost:8000/api/products/delete/${id}`, {
            method: "DELETE",
        });

        result = await result.json();
        console.log("thao test result", result);
        getData()
    }

    const getData = async () => {
        let result = await fetch("http://localhost:8000/api/products");
        result = await result.json();
        setData(result);
        console.log("list", result);
    }

  return (
    <>
    <Header/>
    <div className='listProductPage col-sm-8 offset-sm-2 mb-5'>
        <h1 className='text-center mt-3 mb-5'>List product</h1>
        <Link className='btn btn-outline-success mb-5' to={'/admin/products/add'}>+ Add</Link>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th>Type</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
        {data.map((item)=> 
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td><img alt='img' style={{width: '100px', height: '100px'}} src={"http://localhost:8000/"+item.image} /></td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.type}</td>
            <td>
            <Link to={`/admin/products/update/${item.id}`} className='btn btn-warning mx-1'>
         Update
            </Link>
              <button className='btn btn-danger mx-1' onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        )}
      
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default ListProduct