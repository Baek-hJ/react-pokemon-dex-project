import { BrowserRouter, Routes, Route} from 'react-router-dom';


import Home from '../pages/home';
import Dex from '../pages/dex';

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Dex' element={<Dex/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;