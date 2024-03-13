"use client";

import MainSlider from "@/components/base/sliders/main-slider";
import ProductSlider from "@/components/base/sliders/products/product-slider";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 pt-36">
      <MainSlider />
      <ProductSlider />
    </main>
  );
}
