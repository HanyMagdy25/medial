import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features/Features";
import GalleryHome from "../components/GalleryHome/GalleryHome";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Layout from "../components/Layout";
import Statics from "../components/Statics/Statics";

export default function Home() {
  return (
    <Layout>
      <div>
        <HeroCarousel />
        <Features/>
        <Statics/>
        <GalleryHome/>
      </div>
    </Layout>
  );
}
