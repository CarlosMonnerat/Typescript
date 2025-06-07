'use client';
import ProductCard from "@/components/product/ProductCard";
import Page from "@/components/template/Page";
import product from "@/data/constants/products";

export default function Home() {
  return (
    <Page>
      <div className="flex gap-5 justify-center flex-wrap ">
        {product.map(e => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
    </Page>
  );
}


