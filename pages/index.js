import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features/Features";
import GalleryHome from "../components/GalleryHome/GalleryHome";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <HeroCarousel />
        <Features/>
        <GalleryHome/>
      </div>
    </Layout>
  );
}
