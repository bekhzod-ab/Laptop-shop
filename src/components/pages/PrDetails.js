import {useParams} from "react-router-dom"
import {useContext} from 'react'
import ProductsContext from "../../Context/ContextCreate.js"

export default function Details(){
    const {articleNo} = useParams()
    const {products} = useContext(ProductsContext)
    
    const delaits = Object.values(products.find(el => el.articleNo === articleNo))
    
    return(
        
        <div>
            <ul>
                <li>Brand: {delaits[1]}</li>
                <li>Price: {delaits[3]} $</li>
                <li>Description: {delaits[2]}</li>
            </ul>
        </div>
    )
}