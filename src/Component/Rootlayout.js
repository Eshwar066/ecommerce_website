import {Outlet} from 'react-router-dom'
import NavBar from './NavBarPanel'
import {Provider} from 'react-redux'
import store from '../Store/Store'

const Rootlayout=()=>{
  return(
    <>
    <Provider store={store}>

     <NavBar/>
     <main>
        <Outlet/>
     </main>
    </Provider>
    </>
  )
}

export default Rootlayout