import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppTheme from './components/theme/AppTheme';
import RoutesMain from "./routes/RoutesMain.tsx";
import Page404 from './pages/404/Page404.tsx';

function App() {
    return (
        <AppTheme>
            <BrowserRouter>
                <Routes>
                    {RoutesMain}
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
        </AppTheme>
    )
}

export default App
