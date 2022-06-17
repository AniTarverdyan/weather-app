import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CitiesPage from './pages/CitiesPage';
import Weather from './pages/WeatherPage';

export const UnitContext = React.createContext();

const App: FC = () => {
  return (
    <div className='div'>
      <UnitContext.Provider value={'C'}>
      <Header />
      </UnitContext.Provider>

      <Routes>
        <Route path='/weather'  element={<Weather />} />
        <Route path='/weather/:city' element={<Weather />} />
        <Route path='/weather/:city/:day' element={<Weather />} />
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='*' element={<Navigate to='/weather' replace />} />
      </Routes>
   
    </div>
  );
}
export default App;
