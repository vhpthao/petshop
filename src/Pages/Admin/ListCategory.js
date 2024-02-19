import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListCategory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const baseURL = "http://localhost:8000/api/categories";

        const fetchData = async () => {
            try {
                const response = await axios.get(baseURL);
                setData(response.data);
                console.log("thao", response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);
    
    const handleDelete = async (id) => {
        let result = await fetch(`http://localhost:8000/api/categories/delete/${id}`, {
            method: "DELETE",
        });

        result = await result.json();
        console.log("thao test result", result);
        setData()
    }


    return (
        <>
        <Header/>
        <div className='listProductPage col-sm-6 offset-sm-3'>
            <h1 className='text-center mt-3 mb-5'>List product</h1>
            <Link className='btn btn-outline-success mb-5' to={'/admin/categories/add'}>+ Add</Link>
    
            <Table striped bordered hover >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item)=> 
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
               
                <td>
                <Link to={`/admin/categories/update/${item.id}`} className='btn btn-warning mx-1'>
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
    );
};

export default ListCategory;
