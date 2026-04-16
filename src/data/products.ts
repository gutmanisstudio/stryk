export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  category: string;
  description: string;
  details: string[];
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
    slug: "shaker-white-logo",
    name: "STRYK Shaker — White Logo",
    subtitle: "White · Full octagon logo",
    price: 13,
    image: "/images/shaker1.jpg",
    category: "Shakers",
    description:
      "The STRYK White Logo Shaker features the full octagon panther emblem. Leak-proof, BPA-free, and built to last.",
    details: [
      "700 ml capacity",
      "White body",
      "Full octagon logo design",
      "Leak-proof lid",
      "BPA-free plastic",
      "Mixing ball included",
    ],
  },
  {
    slug: "shaker-white-minimal",
    name: "STRYK Shaker — White Minimal",
    subtitle: "White · Minimalist logo",
    price: 13,
    image: "/images/shaker2.jpg",
    category: "Shakers",
    description:
      "Clean and minimal. The white STRYK shaker with a sleek minimalist panther silhouette. Same quality, sleeker look.",
    details: [
      "700 ml capacity",
      "White body",
      "Minimalist panther design",
      "Leak-proof lid",
      "BPA-free plastic",
      "Mixing ball included",
    ],
  },
  {
    slug: "shaker-black-logo",
    name: "STRYK Shaker — Black Logo",
    subtitle: "Black · Full octagon logo",
    price: 13,
    image: "/images/shaker3.png",
    category: "Shakers",
    description:
      "The STRYK Black Logo Shaker features the full octagon panther emblem on a stealth black body. Leak-proof, BPA-free, and built to last.",
    details: [
      "700 ml capacity",
      "Black body",
      "Full octagon logo design",
      "Leak-proof lid",
      "BPA-free plastic",
      "Mixing ball included",
    ],
  },
  {
    slug: "shaker-black-text",
    name: "STRYK Shaker — Black Text",
    subtitle: "Black · STRYK letters only",
    price: 13,
    image: "/images/shaker4.png",
    category: "Shakers",
    description:
      "Murdered out. The STRYK Black Text Shaker keeps it simple with bold STRYK lettering on an all-black body.",
    details: [
      "700 ml capacity",
      "Black body",
      "STRYK text-only design",
      "Leak-proof lid",
      "BPA-free plastic",
      "Mixing ball included",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
