import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);
    
    const renderList = products.map(value => {
        
        const { id, image, title, price, category } = value;

        return(
            <div className='four column wide' key={id}>
                <Link to={`/product/${id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src={image} alt={title} />
                            </div>
                            <div className='content'>
                                <div className='header'>{title}</div>
                                <div className='meta price'>$ {price}</div>
                                <div className='meta'>{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return(
        <>
            {renderList}
        </>
    )
}

export default ProductComponent;