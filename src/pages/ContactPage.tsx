import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2 text-center">Contact Us</h1>
        <p className="text-muted-foreground text-center mb-12">We'd love to hear from you!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Address</p>
                  <p className="text-sm text-muted-foreground">FC Road, Pune, Maharashtra 411004</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Email</p>
                  <p className="text-sm text-muted-foreground">hello@maharashtrianck.com</p>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 text-primary-foreground font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>

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
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
            />
            <textarea
              required
              rows={4}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none resize-none"
            />
            <button type="submit" className="w-full py-3 rounded-xl gradient-warm text-primary-foreground font-semibold shadow-warm hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
