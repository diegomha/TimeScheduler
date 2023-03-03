import { Routes, Route  } from 'react-router-dom';
import { Default } from './layout/Default';
import { Admin } from './layout/Admin';
import { Login } from './Pages/Login';
import { CalendarAdmin } from './Pages/CalendarAdmin';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={ <Default /> } >
                <Route path='/login' element={ <Login /> } />
                <Route path='/calendar/:company?' element={ <CalendarAdmin /> } />
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