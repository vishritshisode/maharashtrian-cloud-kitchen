import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Priya Sharma", rating: 5, text: "The Puran Poli was out of this world! Reminded me of my aaji's cooking. Will order again!", date: "2 days ago" },
  { name: "Rahul Mehta", rating: 5, text: "Best Misal Pav in the city. The spice level is perfect and the pav is so fresh.", date: "1 week ago" },
  { name: "Anjali Kulkarni", rating: 5, text: "Ordered Modak for Ganesh Chaturthi — family was thrilled. Authentic taste!", date: "2 weeks ago" },
  { name: "Vikram Patil", rating: 4, text: "Vada Pav is incredible. The green chutney has that authentic street food kick.", date: "3 weeks ago" },
  { name: "Sneha Deshmukh", rating: 5, text: "Sabudana Khichdi was perfectly fluffy. Great option for fasting days.", date: "1 month ago" },
  { name: "Amit Joshi", rating: 5, text: "The Poha was amazing! Light, flavorful, and the peanuts were perfectly roasted.", date: "1 month ago" },
];

const ReviewsPage = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-display text-4xl font-bold text-foreground mb-2 text-center">Customer Reviews</h1>
      <p className="text-muted-foreground text-center mb-10">What our customers love about us</p>

      <div className="space-y-4">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-xl p-5 border border-border shadow-card"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full gradient-warm flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {r.name[0]}
                </div>
                <span className="font-semibold text-foreground text-sm">{r.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{r.date}</span>
            </div>
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default ReviewsPage;
