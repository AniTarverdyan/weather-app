import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CitiesPage from './pages/CitiesPage';
import Weather from './pages/WeatherPage';

const Routing: FC = () => {
    return (
        <Routes>
            <Route path='/weather' element={<Weather />} />
            <Route path='/cities' element={<CitiesPage />} />
            <Route path='*' element={<Navigate to='/weather' replace />} />
        </Routes>
    );
};
export default Routing;
