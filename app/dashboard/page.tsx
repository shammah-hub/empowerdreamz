"use client";

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';

interface Donation {
  id: string;
  amount: number;
  projectId: string;
  projectTitle: string;
  donorName: string;
  donorEmail: string;
  isAnonymous: boolean;
  createdAt: { toDate?: () => Date } | Date | null;
}

interface Project {
  id: string;
  title: string;
  raised: number;
  supporters: number;
  isActive: boolean;
}

interface Stats {
  totalDonations: number;
  totalDonors: number;
  activeProjects: number;
  thisMonth: number;
}

export default function DashboardOverview() {
  const [stats, setStats] = useState<Stats>({
    totalDonations: 0,
    totalDonors: 0,
    activeProjects: 0,
    thisMonth: 0
  });
  const [recentDonations, setRecentDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to projects for stats calculation
    const projectsUnsubscribe = onSnapshot(
      collection(db, 'projects'),
      (snapshot) => {
        const projects = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Project));

        // Calculate stats from projects
        const totalRaised = projects.reduce((sum, p) => sum + (p.raised || 0), 0);
        const totalSupporters = projects.reduce((sum, p) => sum + (p.supporters || 0), 0);
        const activeCount = projects.filter(p => p.isActive).length;

        setStats(prev => ({
          ...prev,
          totalDonations: totalRaised,
          totalDonors: totalSupporters,
          activeProjects: activeCount
        }));
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );

    // Subscribe to donations for recent activity
    const donationsQuery = query(
      collection(db, 'donations'),
      orderBy('createdAt', 'desc'),
      limit(10)
    );

    const donationsUnsubscribe = onSnapshot(
      donationsQuery,
      (snapshot) => {
        const donations = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Donation));

        setRecentDonations(donations);

        // Calculate this month's donations
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        
        const thisMonthTotal = donations
        .filter(d => {
          if (!d.createdAt) return false;
          const donationDate = d.createdAt instanceof Date 
            ? d.createdAt 
            : (typeof d.createdAt === 'object' && 'toDate' in d.createdAt && typeof d.createdAt.toDate === 'function')
              ? d.createdAt.toDate()
              : new Date();
          return donationDate >= startOfMonth;
        })
        .reduce((sum, d) => sum + d.amount, 0);

        setStats(prev => ({
          ...prev,
          thisMonth: thisMonthTotal
        }));

        setLoading(false);
      },
      (error) => {
        console.error('Error fetching donations:', error);
        setLoading(false);
      }
    );

    // Cleanup subscriptions
    return () => {
      projectsUnsubscribe();
      donationsUnsubscribe();
    };
  }, []);

 const formatDate = (timestamp: { toDate?: () => Date } | Date | null) => {
  if (!timestamp) return 'N/A';
  const date = timestamp instanceof Date 
    ? timestamp 
    : (typeof timestamp === 'object' && timestamp.toDate) 
      ? timestamp.toDate() 
      : new Date();
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Total Donations</p>
          <p className="text-3xl font-light text-gray-900">${stats.totalDonations.toLocaleString()}</p>
          <p className="text-xs text-green-600 mt-2">+${stats.thisMonth.toLocaleString()} this month</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Total Donors</p>
          <p className="text-3xl font-light text-gray-900">{stats.totalDonors}</p>
          <p className="text-xs text-gray-400 mt-2">All time</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Active Projects</p>
          <p className="text-3xl font-light text-gray-900">{stats.activeProjects}</p>
          <p className="text-xs text-gray-400 mt-2">Currently running</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">This Month</p>
          <p className="text-3xl font-light text-gray-900">${stats.thisMonth.toLocaleString()}</p>
          <p className="text-xs text-green-600 mt-2">
            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Recent Donations */}
      <div className="bg-white rounded-2xl border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-light text-gray-900">Recent Donations</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-light text-gray-500 uppercase">Date</th>
                <th className="text-left px-6 py-3 text-xs font-light text-gray-500 uppercase">Donor</th>
                <th className="text-left px-6 py-3 text-xs font-light text-gray-500 uppercase">Project</th>
                <th className="text-right px-6 py-3 text-xs font-light text-gray-500 uppercase">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentDonations.length > 0 ? (
                recentDonations.map((donation) => (
                  <tr key={donation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {formatDate(donation.createdAt)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {donation.isAnonymous ? 'Anonymous' : donation.donorName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {donation.projectTitle || donation.projectId}
                    </td>
                    <td className="px-6 py-4 text-sm text-right font-light text-green-600">
                      ${donation.amount.toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-500">
                    No donations yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}