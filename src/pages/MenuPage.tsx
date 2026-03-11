import { useState } from "react";
import { motion } from "framer-motion";
import DishCard from "@/components/DishCard";
import { dishes } from "@/data/dishes";

const categories = [
  { key: "all", label: "All" },
  { key: "main", label: "Main Course" },
  { key: "snack", label: "Snacks" },
  { key: "sweet", label: "Sweets" },
  { key: "breakfast", label: "Breakfast" },
];

const MenuPage = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? dishes : dishes.filter((d) => d.category === active);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">Our Menu</h1>
          <p className="text-muted-foreground">Authentic Maharashtrian dishes, freshly prepared for you</p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat.key
                  ? "gradient-warm text-primary-foreground shadow-warm"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dish) => (
            <motion.div key={dish.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;
