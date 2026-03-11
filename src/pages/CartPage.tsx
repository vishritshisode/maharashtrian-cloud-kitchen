import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Add some delicious Maharashtrian dishes!</p>
          <Link to="/menu" className="px-6 py-3 rounded-xl gradient-warm text-primary-foreground font-semibold shadow-warm">
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Your Cart</h1>

        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div key={item.dish.id} className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border shadow-card">
              <img src={item.dish.image} alt={item.dish.name} className="w-20 h-20 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">{item.dish.name}</h3>
                <p className="text-sm text-muted-foreground">₹{item.dish.price} each</p>
              </div>
              <div className="flex items-center border border-border rounded-lg">
                <button onClick={() => updateQuantity(item.dish.id, item.quantity - 1)} className="p-1.5 hover:bg-muted">
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.dish.id, item.quantity + 1)} className="p-1.5 hover:bg-muted">
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="font-bold text-foreground w-16 text-right">₹{item.dish.price * item.quantity}</p>
              <button onClick={() => { removeFromCart(item.dish.id); toast.info("Item removed"); }} className="p-2 hover:bg-destructive/10 rounded-lg">
                <Trash2 className="w-4 h-4 text-destructive" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-6 border border-border shadow-card">
          <div className="flex justify-between mb-2 text-sm text-muted-foreground">
            <span>Subtotal</span><span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between mb-2 text-sm text-muted-foreground">
            <span>Delivery</span><span>{totalPrice >= 300 ? "Free" : "₹40"}</span>
          </div>
          <div className="border-t border-border pt-3 flex justify-between font-bold text-lg text-foreground">
            <span>Total</span><span>₹{totalPrice + (totalPrice >= 300 ? 0 : 40)}</span>
          </div>
          <button
            onClick={() => toast.info("Payment integration coming soon! Connect Lovable Cloud to enable Razorpay.")}
            className="w-full mt-4 py-3 rounded-xl gradient-warm text-primary-foreground font-semibold shadow-warm hover:opacity-90 transition-opacity"
          >
            Proceed to Checkout
          </button>
          <button onClick={() => { clearCart(); toast.info("Cart cleared"); }} className="w-full mt-2 py-2 text-sm text-muted-foreground hover:text-destructive transition-colors">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
