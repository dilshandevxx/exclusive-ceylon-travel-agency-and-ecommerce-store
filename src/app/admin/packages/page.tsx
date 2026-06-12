"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Search, Edit2, Trash2, Filter, MoreHorizontal, X, MapPin } from "lucide-react";

// Mock data based on the packages page
const initialPackages = [
  { id: 1, title: "Yala Safari Package", price: "$250", duration: "7 Days", category: "WILDLIFE", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80", status: "Active" },
  { id: 2, title: "Ella Train Journey", price: "$210", duration: "5 Days", category: "SCENIC", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80", status: "Active" },
  { id: 3, title: "Galle Fort Tour", price: "$180", duration: "3 Days", category: "HERITAGE", image: "https://images.unsplash.com/photo-1620849641777-66bd327361cd?auto=format&fit=crop&w=800&q=80", status: "Active" },
  { id: 4, title: "Sigiriya Rock Climb", price: "$150", duration: "2 Days", category: "HERITAGE", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=800&q=80", status: "Inactive" },
  { id: 5, title: "Mirissa Whale Watching", price: "$120", duration: "1 Day", category: "WILDLIFE", image: "https://images.unsplash.com/photo-1596540608035-716447817415?auto=format&fit=crop&w=800&q=80", status: "Active" },
  { id: 6, title: "Nuwara Eliya Tea Trails", price: "$190", duration: "4 Days", category: "HIGHLANDS", image: "https://images.unsplash.com/photo-1560064506-654c6198f3b6?auto=format&fit=crop&w=800&q=80", status: "Active" },
];

export default function AdminPackagesPage() {
  const [packages, setPackages] = useState(initialPackages);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = packages.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this travel package?")) {
      setPackages(packages.filter(p => p.id !== id));
    }
  };

  const openEditModal = (pkg: any) => {
    setEditingPackage(pkg);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setEditingPackage(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-[family-name:var(--font-serif)] text-gray-900 mb-2">Travel Packages</h1>
          <p className="text-gray-500 font-medium text-sm">Manage your travel destinations and experiences.</p>
        </div>
        <button 
          onClick={openAddModal}
          className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center"
        >
          <Plus className="w-4 h-4" />
          Add Package
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search packages..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm outline-none focus:ring-2 focus:ring-black/5"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Category
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Duration
          </button>
        </div>
      </div>

      {/* Data Grid (Instead of table for packages to show more image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden group">
            <div className="relative h-48 w-full">
              <Image src={pkg.image} alt={pkg.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold shadow-sm ${
                  pkg.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'
                }`}>
                  {pkg.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg text-gray-900">{pkg.title}</h3>
                <p className="font-bold text-gray-900">{pkg.price}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  {pkg.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">
                  {pkg.duration}
                </span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <button className="text-sm font-bold text-gray-500 hover:text-black transition-colors">
                  View details
                </button>
                <div className="flex items-center gap-2">
                  <button onClick={() => openEditModal(pkg)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(pkg.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {filteredPackages.length === 0 && (
          <div className="col-span-full py-12 text-center bg-white rounded-[2rem] border border-gray-100">
            <p className="text-gray-500">No packages found matching your search.</p>
          </div>
        )}
      </div>

      {/* Modal for Add/Edit (UI Only) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-xl font-[family-name:var(--font-serif)]">{editingPackage ? 'Edit Package' : 'Add New Package'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-200 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700">Package Title</label>
                  <input type="text" defaultValue={editingPackage?.title} placeholder="e.g. Yala Safari Package" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Price</label>
                  <input type="text" defaultValue={editingPackage?.price} placeholder="e.g. $250" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Duration</label>
                  <input type="text" defaultValue={editingPackage?.duration} placeholder="e.g. 7 Days" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Category</label>
                  <select defaultValue={editingPackage?.category || ""} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all">
                    <option value="" disabled>Select category</option>
                    <option value="WILDLIFE">Wildlife</option>
                    <option value="HERITAGE">Heritage</option>
                    <option value="SCENIC">Scenic</option>
                    <option value="HIGHLANDS">Highlands</option>
                    <option value="BEACH">Beach</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Status</label>
                  <select defaultValue={editingPackage?.status || "Active"} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Image URL</label>
                <div className="flex gap-4">
                  <input type="text" defaultValue={editingPackage?.image} placeholder="https://images.unsplash.com/..." className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all" />
                  {editingPackage?.image && (
                    <div className="w-16 h-12 rounded-xl overflow-hidden relative shrink-0 border border-gray-200">
                      <Image src={editingPackage.image} alt="Preview" fill className="object-cover" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50">
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-200 transition-colors">
                Cancel
              </button>
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 rounded-full text-sm font-bold bg-black text-white shadow-md hover:bg-gray-800 transition-colors">
                {editingPackage ? 'Save Changes' : 'Create Package'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
