import { Route, Routes} from 'react-router-dom'
import MainLayout from '../layout/main-layout'
import BudgetPage from '../page/budget'
import CatgoryPage from '../page/categoryPage'
import GrafikPage from '../page/grafik'
import HomePage from '../page/home'

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}  >
                <Route path="/" element={<HomePage />} />
                <Route path="/grafik" element={<GrafikPage />} />
                <Route path="/budget" element={<BudgetPage />} />
                <Route path="/category" element={<CatgoryPage />} />
                
            </Route>
        </Routes>
    )
}
