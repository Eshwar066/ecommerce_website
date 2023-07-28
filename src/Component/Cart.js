import { useSelector } from "react-redux/es/hooks/useSelector"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch } from "react-redux"
import { remove } from "../Store/CartSlice"


const Cart=()=>{
    const dispatch=useDispatch();
    const productCart=useSelector(state=>state.cart)

    const removeFromCart=(id)=>{
       dispatch(remove(id));
    }
    
    const cards = productCart.map(product =>
        <div className="col-md-3" style={{marginBottom:'10px'}} >
            <Card key={product.id} className="h-100">
                <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}}/>
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                       INR: {product.price}
                    </Card.Text>
                    <Button variant="danger" onClick={()=>removeFromCart(product.id)}>Remove Item</Button>
                </Card.Body>
            </Card>
        </div>)
    return(
        <>
        <h1>Cart</h1>
        <div className="row">{cards}</div>
        </>
    )
    }
    
    export default Cart