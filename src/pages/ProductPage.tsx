import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { dishes } from "@/data/dishes";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductPage = () => {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">Dish not found</h1>
          <Link to="/menu" className="text-primary hover:underline">Back to Menu</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(dish);
    toast.success(`${qty}x ${dish.name} added to cart!`);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Link to="/menu" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Menu
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-2xl overflow-hidden">
            <img src={dish.image} alt={dish.name} className="w-full h-full object-cover max-h-[500px]" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded border text-xs font-bold border-green-500 text-green-600">● VEG</span>
              {dish.isBestseller && (
                <span className="px-2 py-1 rounded-full gradient-warm text-primary-foreground text-xs font-bold">Bestseller</span>
              )}
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{dish.name}</h1>
            <div className="flex items-center gap-1 mb-4">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-semibold text-foreground">{dish.rating}</span>
              <span className="text-muted-foreground text-sm">(120+ ratings)</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{dish.description}</p>
            <p className="text-3xl font-bold text-foreground mb-6">₹{dish.price}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-lg">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 hover:bg-muted transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-2 hover:bg-muted transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 py-3 rounded-xl gradient-warm text-primary-foreground font-semibold shadow-warm hover:opacity-90 transition-opacity"
              >
                Add to Cart — ₹{dish.price * qty}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
