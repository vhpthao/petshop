import React from 'react';
import slider from '../../assets/about.jpg'
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

const About = () => {
    return (
        <div>
            <Navbar/>
               <div className="card bg-dark text-white border-0 mb-5">
        <img src={slider} className="card-img" alt="bg" height={620} />
        <div className="card-img-overlay">
    
            <h5 className="card-title display-5 col-sm-3 fw-bolder">About Pet Shop</h5>
         <p style={{width: '60%', fontSize: '18px'}}>
            
Chào mừng bạn đến với Pet Paradise - nơi tinh thần và sức khỏe của thú cưng được chăm sóc tốt nhất! Tại Pet Paradise, chúng tôi tận tâm cung cấp cho bạn những sản phẩm chất lượng cao nhất để chăm sóc và nuôi dưỡng thú cưng của bạn. Với một loạt các sản phẩm từ thức ăn dinh dưỡng đến đồ chơi vui nhộn, chúng tôi cam kết mang đến cho bạn và thú cưng của bạn trải nghiệm mua sắm đầy hài lòng và thú vị. Hãy đến với Pet Paradise ngay hôm nay và khám phá thế giới tươi mới cho tình yêu và sự kết nối giữa bạn và thú cưng của mình!
         </p>

         <Link className='btn btn-outline-dark' to={'/home'}>Khám phá ngay nào!</Link>
        </div>
      </div>

      <Footer/>
        </div>
    );
};

export default About;