import BioGraphy from "@/component/biography/BioGraphy";
// import Contact from "@/component/contact/Contact";
import Footer from "@/component/footer/Footer";
import Gallery from "@/component/gallery/Gallery";
import Header from "@/component/header/Header";
import NavBar from "@/component/navbar/NavBar";
import Review from "@/component/review/Review";
import Service from "@/component/services/Services";
import Banner from "@/component/banner/Banner";



export default function Home() {
  return (
    <>
     <Header />
     <NavBar />
     <Banner />
     <BioGraphy />
     <Service />
     <Gallery />
     <Review />
     {/* <Contact /> */}
     <Footer />
    </>
  );
}
