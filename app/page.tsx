import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductViewer from "@/components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  );
}
