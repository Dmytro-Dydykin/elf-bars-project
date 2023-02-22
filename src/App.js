import {Navigate, Route, Routes,} from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProductsPage from "./pages/Products-page";
import ClientsPage from "./pages/Clients-page";
import Cart from "./components/cart/Cart";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Navigate to='/products'/>}/>
                <Route path='/products' element={<ProductsPage/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/clients' element={<ClientsPage/>} />
            </Routes>
        </Layout>
    )
}

export default App;
