import React from 'react';
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, deleteCart, resetCart } from '../../redux/action';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleSub = (item) => {
        dispatch(deleteCart(item));
    };
    const handleAdd = (item) => {
        dispatch(addCart(item));
    };

    const Order = (e) => {
        alert("Đặt hàng thành công!!");
        dispatch(resetCart());
        emptyCart();
    };

    const getTotalPrice = () => {
        let total = 0;

        state.forEach((product) => {
            total += product.qty * product.price;
        });

        return total;
    };
    
    const products = (product) => {
        return (
            <>
                <div className="px-4 my-5 bg-light rounded-3">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-md-4">
                                <img
                                    src={`http://localhost:8000/${product.image}`}
                                    alt={product.name}
                                    height="250px"
                                    width="350px"
                                />
                            </div>
                            <div className="offset-md-2 col-md-4">
                                <h3>{product.name}</h3>
                                <p className="lead fw-bold">
                                    {product.qty} x {product.price} ={product.qty * product.price}{" "}
                                    đ
                                </p>
                                <button
                                    className="btn btn-outline-dark me-2"
                                    onClick={() => handleSub(product)}
                                >
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button
                                    className="btn btn-outline-dark"
                                    onClick={() => handleAdd(product)}
                                >
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <h5 className="" style={{ float: "right", marginRight: "300px" }}>
                        Tổng: {product.qty * product.price} đ
                    </h5>

                </div>

            </>
        );
    };

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Giỏ hàng của bạn đang trống ! Mời bạn mua hàng!!</h3>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='mb-5'>
            <Navbar />
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(products)}
            

<div className='offset-1 mt-5 mb-5 py-3'>
    <h3 style={{float: 'right', marginRight: '40px'}}>Tổng tiền các sản phẩm trong giỏ hàng: <span>{getTotalPrice()} đ</span></h3>
</div>

{state.length !== 0 ? (
            <button
                className="btn btn-outline-success offset-5"
                onClick={Order}
            >
                Đặt hàng
            </button>
        ) : (
            <Link
                className="btn btn-outline-success offset-5"
                to={'/home'}
            >
                Tiếp tục mua hàng
            </Link>
        )}
        </div>
    );
};
export default Cart;
