
import Navbar from '../../components/navbar'
import PageHeading from '../../components/page-heading'
import Products from '../../components/products'
import Footer from '../../components/footer'

const ProductsPage = () => {
  return ( 
    <>
      <Navbar 
        pageName="products" 
      />

      <PageHeading 
        heading="SIXTEEN PRODUCTS"
        subHeading="NEW ARRIVALS"
      />

      <Products 
        isHome={false}
      />

        

      <Footer />
    </>
  );
}
 
export default ProductsPage