import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Page from './Layout/Page';
import LoginPage from './Layout/login/LoginPage';
import NavBar from './Layout/NavBar';
import HomeDashBoard from './Layout/HomeDashBoard';
import ProductListPage from './Layout/ProductListPage';
import AddProductPage from './Layout/AddProductPage';
import OrdersPage from './Layout/OrdersPage';
import CategoriesPage from './Layout/CategoriesPage';
import NotFoundPage from './Layout/NotFoundPage';
import Locations from './Layout/Locations';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes >
                  <Route path='login' element = {<LoginPage />} />
                  <Route path='/' element = {<Page />}>
                                <Route path={'/'} element={<HomeDashBoard/>} />
                                <Route path={'/products'} element={<ProductListPage/>} />
                                <Route path='/products/addproduct' element = {<AddProductPage />} />
                                <Route path={'/orders'} element={<OrdersPage/>} />
                                <Route path={'/categories'} element={<CategoriesPage/>} />
                                <Route path={'/location'} element={<Locations/>} />
                                <Route path={'/customers'} element={<CategoriesPage/>} />
                                <Route path={'*'} element={<NotFoundPage/>} />

                  </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

