import { useState } from "react";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";

const CustomOrderPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", items: "", date: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Custom order request submitted! We'll contact you shortly.");
    setForm({ name: "", phone: "", items: "", date: "", notes: "" });
  };

  const whatsappMsg = encodeURIComponent(
    `Hi! I'd like to place a custom order.\nName: ${form.name}\nItems: ${form.items}\nDate: ${form.date}\nNotes: ${form.notes}`
  );

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2 text-center">Custom Order</h1>
        <p className="text-muted-foreground text-center mb-10">
          Planning a party or special occasion? Let us create a customized Maharashtrian feast for you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
          />
          <input
            required
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
          />
          <textarea
            required
            placeholder="What dishes do you need? (e.g., 50 Modaks, 30 Puran Polis)"
            rows={3}
            value={form.items}
            onChange={(e) => setForm({ ...form, items: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none resize-none"
          />
          <input
            type="date"
            required
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-ring outline-none"
          />
          <textarea
            placeholder="Any special instructions or dietary requirements?"
            rows={2}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none resize-none"
          />
          <button type="submit" className="w-full py-3 rounded-xl gradient-warm text-primary-foreground font-semibold shadow-warm hover:opacity-90 transition-opacity">
            Submit Order Request
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground mb-3">Or reach us directly on WhatsApp</p>
          <a
            href={`https://wa.me/919876543210?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 text-primary-foreground font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomOrderPage;
