import {Link } from 'react-router-dom'






function Productlist({products}) {
    // console.log({products})
     
    return (
        
            <ul className="list-group list-group-horizontal m-5">
                {products.map((product , index) => {
                    return <li key ={index} className="list-group-item">Name: {product.name}<br/>    
                    <Link to={`/products/${product.articleNo}`}>More</Link></li>
                })}
            </ul>
    )
}

export default Productlist