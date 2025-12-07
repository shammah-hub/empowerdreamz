"use client";

import React, { useState, useEffect } from 'react';
import { Download, Search, Filter } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

export default function DonationsPage() {
  const [donations, setDonations] = useState<Array<{
  id: string;
  createdAt: string;
  donorEmail?: string;
  projectId?: string;
  amount?: number;
  paymentIntentId?: string;
}>>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const donationsRef = collection(db, 'donations');
      const q = query(donationsRef, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      
      const donationsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate().toLocaleDateString() || 'N/A'
      }));
      
      setDonations(donationsList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching donations:', error);
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['Date', 'Donor Email', 'Project', 'Amount', 'Payment ID'];
    const csvData = donations.map(d => [
      d.createdAt,
      d.donorEmail,
      d.projectId,
      d.amount,
      d.paymentIntentId
    ]);
    
    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `donations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const filteredDonations = donations.filter(d => 
    d.donorEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.projectId?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAmount = donations.reduce((sum, d) => sum + (d.amount || 0), 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-light text-gray-900">Donations Ledger</h1>
          <p className="text-sm text-gray-500 mt-1">
            Total: ${totalAmount.toLocaleString()} from {donations.length} donations
          </p>
        </div>
        <button 
          onClick={exportToCSV}
          className="px-6 py-2 border border-gray-200 rounded-full text-sm hover:bg-gray-50 flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by email or project..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-green-600"
          />
        </div>
        <button className="px-6 py-2 border border-gray-200 rounded-full text-sm hover:bg-gray-50 flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Donations Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-light text-gray-500 uppercase">Date</th>
                <th className="text-left px-6 py-3 text-xs font-light text-gray-500 uppercase">Donor</th>
                <th className="text-left px-6 py-3 text-xs font-light text-gray-500 uppercase">Project</th>
                <th className="text-right px-6 py-3 text-xs font-light text-gray-500 uppercase">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-light text-gray-500 uppercase">Payment ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredDonations.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No donations found
                  </td>
                </tr>
              ) : (
                filteredDonations.map((donation) => (
                  <tr key={donation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {donation.createdAt}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {donation.donorEmail || 'Anonymous'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {donation.projectId?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                    </td>
                    <td className="px-6 py-4 text-sm text-right font-light text-green-600">
                      ${donation.amount?.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400 font-mono text-xs">
                      {donation.paymentIntentId?.substring(0, 20)}...
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}