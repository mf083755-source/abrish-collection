import Header from "../components/Header";
import AnnouncementBar from "../components/AnnouncementBar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import FeaturedProducts from "../components/FeaturedProducts";
import PromoBanner from "../components/PromoBanner";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Hero />
      <Categories />
      <NewArrivals />
      <FeaturedProducts />
      <PromoBanner />
      <Newsletter />
      <Footer />
      <WhatsAppButton />

    </>
  );
}

export default Home;