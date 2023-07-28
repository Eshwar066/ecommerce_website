// import Product from "./Component/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Cart from './Component/Cart';
import Dashboard from "./Component/Dashboard";
import Rootlayout from "./Component/Rootlayout";



function App() {
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))
  return ( 
    <div className="App">
      {/* <Product/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
