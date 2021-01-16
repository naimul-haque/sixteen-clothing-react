import { Router } from "@reach/router"

import HomePage from '../pages/home'
import ProductsPage from '../pages/products'

const AppRouter = () => {
  return (  
    <Router>
      <HomePage path ="/" />
      <ProductsPage path="/products" />
    </Router>
  );
}
 
export default AppRouter