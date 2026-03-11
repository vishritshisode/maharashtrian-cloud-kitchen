import { useState } from "react";
import { dishes } from "@/data/dishes";
import { Package, Users, Star, TrendingUp, Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

const sampleOrders = [
  { id: "ORD001", customer: "Priya S.", items: "2x Misal Pav, 1x Vada Pav", total: 360, status: "Preparing" },
  { id: "ORD002", customer: "Rahul M.", items: "3x Modak", total: 540, status: "Delivered" },
  { id: "ORD003", customer: "Anjali K.", items: "1x Puran Poli, 2x Poha", total: 280, status: "Ready" },
];

const AdminPage = () => {
  const [tab, setTab] = useState<"menu" | "orders" | "overview">("overview");

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground text-sm mb-8">Manage your cloud kitchen</p>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border">
          {[
            { key: "overview", label: "Overview" },
            { key: "orders", label: "Orders" },
            { key: "menu", label: "Menu Items" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key as any)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                tab === t.key ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Package, label: "Total Orders", value: "156", color: "text-primary" },
              { icon: TrendingUp, label: "Revenue", value: "₹24,500", color: "text-green-600" },
              { icon: Users, label: "Customers", value: "89", color: "text-blue-600" },
              { icon: Star, label: "Avg Rating", value: "4.8", color: "text-accent" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-5 border border-border shadow-card">
                <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "orders" && (
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left p-3 font-semibold text-foreground">Order ID</th>
                    <th className="text-left p-3 font-semibold text-foreground">Customer</th>
                    <th className="text-left p-3 font-semibold text-foreground">Items</th>
                    <th className="text-left p-3 font-semibold text-foreground">Total</th>
                    <th className="text-left p-3 font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border last:border-0">
                      <td className="p-3 font-mono text-foreground">{order.id}</td>
                      <td className="p-3 text-foreground">{order.customer}</td>
                      <td className="p-3 text-muted-foreground">{order.items}</td>
                      <td className="p-3 font-semibold text-foreground">₹{order.total}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "Delivered" ? "bg-green-100 text-green-700" :
                          order.status === "Preparing" ? "bg-yellow-100 text-yellow-700" :
                          "bg-blue-100 text-blue-700"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "menu" && (
          <div>
            <button
              onClick={() => toast.info("Connect Lovable Cloud to add new dishes to the database")}
              className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-warm text-primary-foreground text-sm font-semibold shadow-warm"
            >
              <Plus className="w-4 h-4" /> Add New Dish
            </button>
            <div className="space-y-3">
              {dishes.map((dish) => (
                <div key={dish.id} className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border shadow-card">
                  <img src={dish.image} alt={dish.name} className="w-14 h-14 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm">{dish.name}</h3>
                    <p className="text-xs text-muted-foreground">{dish.category} · ₹{dish.price}</p>
                  </div>
                  <button className="p-2 hover:bg-muted rounded-lg"><Edit className="w-4 h-4 text-muted-foreground" /></button>
                  <button className="p-2 hover:bg-destructive/10 rounded-lg"><Trash2 className="w-4 h-4 text-destructive" /></button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
