import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import ComparisonSlider from "./components/ComparisonSlider";
import Roadmap from "./components/Roadmap";
import Modules from "./components/Modules";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Carousel />
        <Features />
        <ComparisonSlider />
        <Roadmap />
        <Modules />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}
