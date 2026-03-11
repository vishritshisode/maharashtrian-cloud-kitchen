import { motion } from "framer-motion";

const AboutPage = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-4xl font-bold text-foreground mb-6 text-center">About Us</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Welcome to <strong className="text-foreground">Maharashtrian Cloud Kitchen</strong> — your gateway to the authentic flavors of Maharashtra, right at your doorstep.
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Born from a passion for preserving the rich culinary traditions of Maharashtra, our cloud kitchen brings you recipes passed down through generations. Every dish is crafted with the same love and care that Maharashtrian grandmothers have poured into their cooking for centuries.
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Our Cuisine</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Maharashtrian cuisine is a beautiful tapestry of flavors — from the fiery Kolhapuri spices to the subtle sweetness of Puran Poli. Our menu celebrates this diversity, featuring iconic street food like Vada Pav and Misal Pav alongside traditional sweets like Modak and festive specialties.
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Our Promise</h2>
          <ul className="text-muted-foreground space-y-2 mb-6">
            <li>🌿 100% vegetarian kitchen with pure ingredients</li>
            <li>🍳 Freshly prepared for every order — no reheating</li>
            <li>🏠 Traditional recipes with a modern touch</li>
            <li>📦 Hygienic packaging and timely delivery</li>
          </ul>
        </div>
      </motion.div>
    </div>
  </div>
);

export default AboutPage;
