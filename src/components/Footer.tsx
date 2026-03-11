import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold mb-3">🍛 Maharashtrian Cloud Kitchen</h3>
          <p className="text-secondary-foreground/70 text-sm leading-relaxed">
            Authentic Maharashtrian flavors delivered to your doorstep. Experience the rich culinary heritage of Maharashtra.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
            <Link to="/menu" className="hover:text-primary transition-colors">Menu</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link to="/custom-order" className="hover:text-primary transition-colors">Custom Orders</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Contact</h4>
          <div className="text-sm text-secondary-foreground/70 space-y-1">
            <p>📞 +91 98765 43210</p>
            <p>📧 hello@maharashtrianck.com</p>
            <p>📍 Pune, Maharashtra, India</p>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 mt-8 pt-6 text-center text-xs text-secondary-foreground/50">
        © 2026 Maharashtrian Cloud Kitchen. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
