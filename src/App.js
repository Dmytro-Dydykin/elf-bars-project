import {Navigate, Route, Routes,} from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/Main-page";
import StorePage from "./pages/Store-page";
import ClientsPage from "./pages/Clients-page";


function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Navigate to='/store'/>}/>
                <Route path='/store' element={<StorePage />} />
                <Route path='/elf' element={<MainPage />} />
                <Route path='/clients' element={<ClientsPage />} />
                <Route path='/money' element={<MainPage />} />
                <Route path='/purchase' element={<MainPage />} />
            </Routes>
        </Layout>
    )
}

export default App;
