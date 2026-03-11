import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Dish } from "@/data/dishes";
import { motion } from "framer-motion";
import { toast } from "sonner";

const DishCard = ({ dish }: { dish: Dish }) => {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(dish);
    toast.success(`${dish.name} added to cart!`);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-warm transition-shadow"
    >
      <Link to={`/dish/${dish.id}`}>
        <div className="relative overflow-hidden aspect-square">
          <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          {dish.isBestseller && (
            <span className="absolute top-3 left-3 px-2 py-1 rounded-full gradient-warm text-primary-foreground text-xs font-bold">
              Bestseller
            </span>
          )}
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded border text-xs font-bold bg-card/90 text-green-600 border-green-500">
            ● VEG
          </span>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-display font-semibold text-foreground">{dish.name}</h3>
            <div className="flex items-center gap-1 text-sm text-accent-foreground">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              {dish.rating}
            </div>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{dish.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-foreground">₹{dish.price}</span>
            <button
              onClick={handleAdd}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg gradient-warm text-primary-foreground text-xs font-semibold shadow-warm hover:opacity-90 transition-opacity"
            >
              <Plus className="w-3.5 h-3.5" /> ADD
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DishCard;
