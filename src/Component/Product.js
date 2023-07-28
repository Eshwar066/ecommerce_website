
import {  useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Store/CartSlice'
import { getProducts } from '../Store/productSlice'


const Product = () => {
    const dispatch=useDispatch();
    // const [products, getProducts] = useState([]);

   
    const { data  }= useSelector(state=>state.product);

    const addToCart=(product)=>{
        dispatch(add(product));

    }
  

  

    useEffect(() => {
        dispatch(getProducts());
      
        
    },[dispatch])

    const cards = Array.isArray(data)?data.map(product =>
       ( <div className="col-md-3" style={{marginBottom:'10px'}} >
            <Card key={product.id} className="h-100">
                <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}}/>
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                       INR: {product.price}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>)):null

    return (
        <>
            <h1>Products Dashboard</h1>
            <div className='row'>
                {cards}
            </div>
        </>
    )
}

export default Product