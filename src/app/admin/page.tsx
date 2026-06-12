import { ArrowUpRight, Package, ShoppingBag, TrendingUp, Users } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { name: "Total Products", value: "24", change: "+4.75%", icon: ShoppingBag, color: "bg-blue-50 text-blue-600" },
    { name: "Travel Packages", value: "6", change: "+12.5%", icon: Package, color: "bg-emerald-50 text-emerald-600" },
    { name: "Total Inquiries", value: "145", change: "+24.3%", icon: Users, color: "bg-orange-50 text-orange-600" },
    { name: "Revenue (MTD)", value: "$4,250", change: "+10.2%", icon: TrendingUp, color: "bg-purple-50 text-purple-600" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-[family-name:var(--font-serif)] text-gray-900 mb-2">Overview</h1>
        <p className="text-gray-500 font-medium">Welcome back! Here's what's happening with Exclusive Ceylon.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-2xl ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs font-bold">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.change}
                </div>
              </div>
              <p className="text-gray-500 text-sm font-medium mb-1">{stat.name}</p>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Mockup */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-[family-name:var(--font-serif)]">Recent Activity</h2>
              <button className="text-sm font-bold text-gray-500 hover:text-black transition-colors">View all</button>
           </div>
           
           <div className="space-y-6">
              {[
                { action: "New inquiry received", target: "Yala Safari Package", time: "2 hours ago", initial: "Y" },
                { action: "Product updated", target: "Silver Tips White Tea", time: "5 hours ago", initial: "S" },
                { action: "New package added", target: "Ella Train Journey", time: "1 day ago", initial: "E" },
              ].map((activity, i) => (
                 <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center font-bold text-gray-500 text-sm">
                       {activity.initial}
                    </div>
                    <div>
                       <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                       <p className="text-xs text-gray-500">{activity.target} • {activity.time}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Quick Actions Mockup */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
           <h2 className="text-xl font-[family-name:var(--font-serif)] mb-8">Quick Actions</h2>
           <div className="flex flex-col gap-3">
              <button className="w-full py-3 px-4 rounded-xl bg-black text-white text-sm font-bold shadow-sm hover:bg-gray-800 transition-colors text-left flex items-center justify-between group">
                 Add New Product
                 <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </button>
              <button className="w-full py-3 px-4 rounded-xl bg-gray-50 text-black border border-gray-100 text-sm font-bold hover:bg-gray-100 transition-colors text-left flex items-center justify-between group">
                 Add Travel Package
                 <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
              </button>
              <button className="w-full py-3 px-4 rounded-xl bg-gray-50 text-black border border-gray-100 text-sm font-bold hover:bg-gray-100 transition-colors text-left flex items-center justify-between group">
                 Update Settings
                 <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
