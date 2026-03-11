import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, Clock, Shield } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";
import DishCard from "@/components/DishCard";
import { dishes } from "@/data/dishes";

const testimonials = [
  { name: "Priya S.", text: "The Misal Pav reminded me of my grandmother's cooking. Absolutely authentic!", rating: 5 },
  { name: "Rahul M.", text: "Best Vada Pav I've had outside Mumbai. The chutneys are spot on!", rating: 5 },
  { name: "Anjali K.", text: "Ordered Modak for Ganpati — everyone loved it. Will definitely order again!", rating: 5 },
];

const features = [
  { icon: Truck, title: "Free Delivery", desc: "On orders above ₹300" },
  { icon: Clock, title: "Quick Prep", desc: "Ready in 30-45 minutes" },
  { icon: Shield, title: "Pure & Fresh", desc: "100% vegetarian kitchen" },
];

const Index = () => {
  const featured = dishes.filter((d) => d.isBestseller).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">
        <img src={heroFood} alt="Maharashtrian Thali" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4">
              🍛 Authentic Maharashtrian Cuisine
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              Taste of <span className="text-gradient">Maharashtra</span> at Your Doorstep
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              From Puran Poli to Misal Pav — experience the rich flavors of Maharashtrian cuisine, freshly prepared and delivered to you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-warm text-primary-foreground font-semibold shadow-warm hover:opacity-90 transition-opacity"
              >
                Explore Menu <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/custom-order"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Custom Order
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features strip */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 rounded-full gradient-warm flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{f.title}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Our Bestsellers</h2>
            <p className="text-muted-foreground">Most loved dishes by our customers</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((dish, i) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <DishCard dish={dish} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
