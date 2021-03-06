
import Navbar from '../../components/navbar'
import PageHeading from '../../components/page-heading'
import Products from '../../components/products'
import About from '../../components/about'
import CTA from '../../components/call-to-action'
import Footer from '../../components/footer'

const HomePage = () => {
  return ( 
    <>
      <Navbar 
        pageName="home" 
      />

      <PageHeading 
        heading="NEW ARRIVALS ON SALE"
        subHeading="BEST OFFER"
      />

      <Products 
        isHome={true}
      />
      
      <About />
      <CTA />
      <Footer />
    </>
  );
}
 
export default HomePage;