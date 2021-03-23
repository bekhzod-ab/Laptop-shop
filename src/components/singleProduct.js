import {useContext} from 'react'
import {useParams} from "react-router-dom"
import ProductsContext from "../Context/ContextCreate.js"

export default function DisplayProducts(){
    const {byname} = useParams()
    const {products} = useContext(ProductsContext)
    const singleProduct = products.find(el => el.name === byname)
    
   
    return(
        <div>
            <ul>
                <li>Brand: {singleProduct.name}</li>
                <li>Price: {singleProduct.price} $</li>
                <li>Description: {singleProduct.description}</li>
            </ul>
        </div>
    )
}