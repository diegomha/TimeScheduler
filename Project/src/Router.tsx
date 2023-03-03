import { Routes, Route  } from 'react-router-dom';
import { Default } from './layout/Default';
import { Admin } from './layout/Admin';
import { Login } from './Pages/Login';
import { CalendarStatus } from './Pages/CalendarStatus';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={ <Default /> } >
                <Route path='/login' element={ <Login /> } />
                <Route path='/calendar' element={ <CalendarStatus /> } />
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