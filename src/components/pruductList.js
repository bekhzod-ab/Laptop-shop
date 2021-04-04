import {Link } from 'react-router-dom'






function Productlist({products}) {
    // console.log({products})
     
    return (
        
            <ul className="products__list">
                {products.map((product , index) => {
                    return <li key ={index} >Name: {product.name}<br/>    
                    <Link className="nav__link" to={`/products/${product.articleNo}`}>More</Link></li>
                })}
            </ul>
    )
}

export default Productlist