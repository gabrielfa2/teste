import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductsSection from '../components/ProductsSection';
import CollectionsSection from '../components/CollectionsSection';
import VideosSection from '../components/VideosSection';
import DualBanners from '../components/DualBanners';

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <ProductsSection />
      <DualBanners />
      <CollectionsSection />
      <VideosSection />
    </>
  );
};

export default HomePage;