import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppTheme from './components/theme/AppTheme';
import RoutesMain from "./routes/RoutesMain.tsx";
import PageIndex from './pages/Main/PageIndex';

function App() {
    return (
        <AppTheme>
            <BrowserRouter>
                <Routes>
                    {RoutesMain}
                    <Route path="*" element={<PageIndex />} />
                </Routes>
            </BrowserRouter>
        </AppTheme>
    )
}

export default App
