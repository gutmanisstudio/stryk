export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  category: string;
  description: string;
  details: string[];
  limited?: boolean;
}

export const products: Product[] = [
  {
    slug: "electrolytes",
    name: "Electrolytes",
    subtitle: "Mango · 330 g",
    price: 17,
    image: "/images/ELECTROLYTES.png",
    category: "Supplements",
    description:
      "Replenish what you lose. STRYK Electrolyte formula delivers essential minerals in a refreshing mango flavour to keep you hydrated and performing at your peak.",
    details: [
      "330 g per tub",
      "Mango flavour",
      "6 key electrolytes",
      "Zero sugar",
      "40 servings",
    ],
  },
  {
    slug: "bcaa",
    name: "BCAA 2:1:1",
    subtitle: "Lemon · 330 g",
    price: 17,
    image: "/images/BCAA.png",
    category: "Supplements",
    description:
      "Recover faster, train harder. STRYK BCAA delivers a research-backed 2:1:1 ratio of leucine, isoleucine, and valine in a crisp lemon flavour.",
    details: [
      "330 g per tub",
      "Lemon flavour",
      "2:1:1 BCAA ratio",
      "Amino recovery formula",
      "40 servings",
    ],
  },
  {
    slug: "shaker-white",
    name: "STRYK Shaker — White",
    subtitle: "First Drop · Limited Edition",
    price: 13,
    image: "/images/shakerwhite.jpg",
    category: "Shakers",
    limited: true,
    description:
      "First drop limited edition. The white STRYK Shaker — only available while stocks last. Each drop gets its own exclusive design that never comes back.",
    details: [
      "First drop — limited edition",
      "700 ml capacity",
      "White body",
      "Leak-proof lid",
      "BPA-free plastic",
      "Mixing ball included",
    ],
  },
  {
    slug: "shaker-black",
    name: "STRYK Shaker — Black",
    subtitle: "First Drop · Limited Edition",
    price: 13,
    image: "/images/shakerblack.jpg",
    category: "Shakers",
    limited: true,
    description:
      "First drop limited edition. The black STRYK Shaker — only available while stocks last. Each drop gets its own exclusive design that never comes back.",
    details: [
      "First drop — limited edition",
      "700 ml capacity",
      "Black body",
      "Leak-proof lid",
      "BPA-free plastic",
      "Mixing ball included",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
