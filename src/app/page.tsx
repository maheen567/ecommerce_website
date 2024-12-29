import FeaturesBannerSection from "@/components/FeaturesBanner/FeaturesBannerSection";
import HeroSection from "./pages/Hero/HeroSection";
import FeaturesProductSection from "./pages/FeatuesProduct/FeaturesProductSection";
import ArrivalProductSection from "./pages/ArrivalProducts/ArrivalProductSection";
import Banner1 from "@/components/Banner/Banner1";
import Banner2 from "@/components/Banner/Banner2";
import OfferBanners from "@/components/Banner/OfferBanners";
import Newsletter from "@/components/Newsletter/Newsletter";
import './globals.css'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Shoppy",
  description: "An Online E-commerce Website",
};

export default function Home() {
  return (
    <>
    <HeroSection />
    <FeaturesBannerSection />
    <FeaturesProductSection />
    <Banner1 />
    <ArrivalProductSection />
    <Banner2 />
    <OfferBanners />
    <Newsletter />
    </>
  );
}
