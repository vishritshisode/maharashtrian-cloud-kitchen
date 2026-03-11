import puranPoli from "@/assets/puran-poli.jpg";
import misalPav from "@/assets/misal-pav.jpg";
import vadaPavNew from "@/assets/vada-pav-new.jpg";
import sabudanaKhichdi from "@/assets/sabudana-khichdi.jpg";
import modak from "@/assets/modak.jpg";
import poha from "@/assets/poha.jpg";

export interface Dish {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "main" | "snack" | "sweet" | "breakfast";
  rating: number;
  isVeg: boolean;
  isBestseller: boolean;
}

export const dishes: Dish[] = [
  {
    id: "puran-poli",
    name: "Puran Poli",
    price: 120,
    description: "Traditional sweet flatbread stuffed with jaggery and chana dal filling, served with a generous dollop of ghee. A festive Maharashtrian delicacy.",
    image: puranPoli,
    category: "sweet",
    rating: 4.8,
    isVeg: true,
    isBestseller: true,
  },
  {
    id: "misal-pav",
    name: "Misal Pav",
    price: 150,
    description: "Spicy sprouted moth beans curry topped with crunchy farsan, onions, tomatoes, and lemon. Served with soft pav bread.",
    image: misalPav,
    category: "main",
    rating: 4.9,
    isVeg: true,
    isBestseller: true,
  },
  {
    id: "vada-pav",
    name: "Vada Pav",
    price: 60,
    description: "Mumbai's iconic street food — crispy batata vada in a soft pav bun with spicy green chutney and dry garlic chutney.",
    image: vadaPavNew,
    category: "snack",
    rating: 4.7,
    isVeg: true,
    isBestseller: true,
  },
  {
    id: "sabudana-khichdi",
    name: "Sabudana Khichdi",
    price: 100,
    description: "Light and fluffy tapioca pearls cooked with roasted peanuts, cumin, green chilies, and fresh coriander. Perfect fasting food.",
    image: sabudanaKhichdi,
    category: "breakfast",
    rating: 4.5,
    isVeg: true,
    isBestseller: false,
  },
  {
    id: "modak",
    name: "Modak",
    price: 180,
    description: "Lord Ganesha's favorite! Steamed rice flour dumplings filled with fresh coconut and jaggery. A sacred Maharashtrian sweet.",
    image: modak,
    category: "sweet",
    rating: 4.9,
    isVeg: true,
    isBestseller: true,
  },
  {
    id: "poha",
    name: "Poha",
    price: 80,
    description: "Flattened rice tempered with mustard seeds, curry leaves, onions, and turmeric. Garnished with peanuts, coriander, and fresh lemon.",
    image: poha,
    category: "breakfast",
    rating: 4.6,
    isVeg: true,
    isBestseller: false,
  },
];
