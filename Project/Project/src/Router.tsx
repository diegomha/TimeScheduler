import { Routes, Route  } from 'react-router-dom';
import { Home } from './Pages/Home';
import { History } from './Pages/History';
import { Default } from './layout/Default';
import { Admin } from './layout/Admin';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={ <Default /> } >
                <Route path='/' element={ <Home /> } />
                <Route path='/history' element={ <History /> } />
            </Route>

            {/* admin/home ou admin  */}
            {/* admin/history  */}
            {/* <Route path='/admin' element={ <Admin /> } >
                <Route path='/' element={ <Home /> } /> 
                <Route path='/history' element={ <History /> } /> 
            </Route> */}
        </Routes>
    );
}