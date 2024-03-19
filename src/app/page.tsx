"use client";

import MainHeader from "@/components/base/headers/main-header";
import MainSlider from "@/components/base/sliders/main-slider";
import ProductSlider from "@/components/base/sliders/products/product-slider";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 pt-36">
      <MainSlider />
      <ProductSlider />
    </div>
  );
}
