export type MenuCategory = "Starters" | "Main Course" | "Mocktails" | "Desserts";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
}

export const MENU: Record<MenuCategory, MenuItem[]> = {
  Starters: [
    { name: "Tempura Prawns", description: "Crispy panko-crusted prawns, yuzu aioli, citrus pearls.", price: "₹ 545", popular: true },
    { name: "Truffle Dimsums", description: "Hand-pleated wild mushroom dumplings, black truffle drizzle.", price: "₹ 425" },
    { name: "Burrata & Heirloom", description: "Creamy burrata, slow-roasted tomatoes, basil oil, sourdough.", price: "₹ 495" },
    { name: "Smoked Chicken Tikka", description: "Charcoal-smoked, hung-curd marinade, mint chutney.", price: "₹ 395" },
  ],
  "Main Course": [
    { name: "Butter Chicken & Naan", description: "Slow-cooked tomato gravy, charred butter, freshly baked naan.", price: "₹ 595", popular: true },
    { name: "Lotus Stem Khichdi", description: "House signature — comforting, crisp, deeply spiced.", price: "₹ 525" },
    { name: "Wild Mushroom Risotto", description: "Carnaroli rice, porcini, parmesan, white truffle oil.", price: "₹ 565" },
    { name: "Coastal Prawn Curry", description: "Coconut, kokum, curry leaves, steamed appam.", price: "₹ 645" },
  ],
  Mocktails: [
    { name: "Signature Lola Spritz", description: "Rose, elderflower, citrus foam — our crowd favourite.", price: "₹ 325", popular: true },
    { name: "Piña Colada Reimagined", description: "Charred pineapple, coconut cream, toasted nutmeg.", price: "₹ 295" },
    { name: "Lotus Gem", description: "Hibiscus, lychee, finger lime, smoked basil.", price: "₹ 285" },
    { name: "Sundowner Punch", description: "Watermelon, mint, ginger, pink salt rim.", price: "₹ 265" },
  ],
  Desserts: [
    { name: "Burnt Basque Cheesecake", description: "Caramelised top, vanilla cream, sea salt.", price: "₹ 345" },
    { name: "Hazelnut Praline Tart", description: "Dark chocolate ganache, gold leaf, candied hazelnuts.", price: "₹ 365" },
    { name: "Rose Phirni Brûlée", description: "Saffron-rose phirni, torched sugar, pistachio dust.", price: "₹ 295" },
  ],
};

export const CATEGORIES: MenuCategory[] = ["Starters", "Main Course", "Mocktails", "Desserts"];
