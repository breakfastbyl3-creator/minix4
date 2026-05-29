import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import FeaturedMenu from "@/components/FeaturedMenu";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import ReviewsWall from "@/components/ReviewsWall";
import Amenities from "@/components/Amenities";
import CateringForm from "@/components/CateringForm";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";
import FloatingOrder from "@/components/FloatingOrder";

function Home() {
  return (
    <main className="bg-[#FDFBF7]">
      <Header />
      <Hero />
      <Ticker />
      <FeaturedMenu />
      <About />
      <Highlights />
      <ReviewsWall />
      <Amenities />
      <CateringForm />
      <LocationHours />
      <Footer />
      <FloatingOrder />
      <Toaster position="top-center" richColors />
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
