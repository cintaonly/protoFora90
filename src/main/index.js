import React from 'react';
import './main.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Mainpage(){
    const [products,setProducts]= React.useState([])
    React.useEffect(function(){
        axios.get('\n' +
            'https://56dafaf7-f631-499d-b5cb-5a289e0c3e2d.mock.pstmn.io/products')
            .then(function(result){
                const products = result.data.products;
                setProducts(products);
            }).catch(function(error){
            console.log(error)
        });
    },[])

    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="./images/icons/logo.png" alt="" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="./images/banners/banner1.png" alt="" />
                </div>
               <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {
                        products.map(function(products,index){
                            return(
                                <div className="product-card">
                                    <Link className='product-link' to={`/product/${index}`}>
                                        <div>
                                            <img className="product-img" src={products.imageUrl}/>
                                        </div>
                                        <div className="product-contents">
                                            <span className="product-name">
                                                {products.name}
                                            </span>
                                            <span className="product-price">
                                                {products.price}원
                                            </span>
                                            <span className="product-seller">
                                                <img className="product-avatar" src='images/icons/avatar.png' />
                                                <span>{products.seller}</span>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="footer"></div>
        </div>
    )
}

export default Mainpage;


