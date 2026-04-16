"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import PillIcon from "./PillIcon";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const categories = ["All", "Supplements", "Shakers"];

export default function ProductGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
      <FadeIn>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Shop</h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <PillIcon
              key={cat}
              label={cat}
              active={active === cat}
              onClick={() => setActive(cat)}
            />
          ))}
        </div>
      </FadeIn>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-4">
        {filtered.map((product, i) => (
          <FadeIn key={product.slug} delay={i * 0.1}>
            <ProductCard
              slug={product.slug}
              name={product.name}
              subtitle={product.subtitle}
              price={`€${product.price}`}
              image={product.image}
              category={product.category}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
