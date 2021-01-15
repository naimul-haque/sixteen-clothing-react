
import Navbar from '../../components/navbar'
import PageHeading from '../../components/page-heading'
import Products from '../../components/products'
import About from '../../components/about'
import CTA from '../../components/call-to-action'
import Footer from '../../components/footer'

const Home = () => {
  return ( 
    <>
      <Navbar pageName="home" />
      <PageHeading 
        heading="NEW ARRIVALS ON SALE"
        subHeading="BEST OFFER"
      />
      <Products />
      <About />
      <CTA />
      <Footer />
    </>
  );
}
 
export default Home;