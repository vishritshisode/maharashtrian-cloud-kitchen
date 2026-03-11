import { useState } from "react";
import { toast } from "sonner";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Authentication requires Lovable Cloud. Enable it to add login functionality!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <span className="text-4xl">🍛</span>
          <h1 className="font-display text-3xl font-bold text-foreground mt-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {isLogin ? "Sign in to your account" : "Join us for delicious Maharashtrian food"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 border border-border shadow-card space-y-4">
          {!isLogin && (
            <input
              required
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
            />
          )}
          <input
            required
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
          />
          <button type="submit" className="w-full py-3 rounded-xl gradient-warm text-primary-foreground font-semibold shadow-warm hover:opacity-90 transition-opacity">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-primary font-semibold hover:underline">
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
