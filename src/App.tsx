import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components';

export const App = () => {
    return (
        <>
            <Link to='/'>Home</Link>

            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    );
};
