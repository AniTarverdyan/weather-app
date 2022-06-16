import { FC } from 'react';
import Header from './components/Header';
import { UnitProvider } from './context/UnitContext';
import Routing from './Routing';

const App: FC = () => {
    return (
        <UnitProvider>
            <div className='div'>
                <Header />
                <Routing />
            </div>
        </UnitProvider>
    );
};
export default App;
