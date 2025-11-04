"use client";

import { useAuthStore } from "@/lib/store/auth-store";
import { BarChart3, TrendingUp, Users, Activity } from "lucide-react";

export default function DashboardHomePage() {
  const { user } = useAuthStore();

  return (
    <div className="container mx-auto p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome back, {user?.name || "User"}!
        </h1>
        <p className="text-muted-foreground mt-2">
          Here&apos;s what&apos;s happening with your social media accounts
          today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-background rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Total Followers
              </p>
              <h3 className="mt-2 text-3xl font-bold">24,563</h3>
              <p className="text-green-600 mt-1 text-sm">
                +12.5% from last month
              </p>
            </div>
            <div className="bg-blue-100 text-blue-600 flex size-12 items-center justify-center rounded-lg">
              <Users className="size-6" />
            </div>
          </div>
        </div>

        <div className="bg-background rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Engagement Rate
              </p>
              <h3 className="mt-2 text-3xl font-bold">8.2%</h3>
              <p className="text-green-600 mt-1 text-sm">
                +2.1% from last month
              </p>
            </div>
            <div className="bg-pink-100 text-pink-600 flex size-12 items-center justify-center rounded-lg">
              <Activity className="size-6" />
            </div>
          </div>
        </div>

        <div className="bg-background rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Total Posts
              </p>
              <h3 className="mt-2 text-3xl font-bold">342</h3>
              <p className="text-green-600 mt-1 text-sm">+23 this month</p>
            </div>
            <div className="bg-purple-100 text-purple-600 flex size-12 items-center justify-center rounded-lg">
              <BarChart3 className="size-6" />
            </div>
          </div>
        </div>

        <div className="bg-background rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Reach</p>
              <h3 className="mt-2 text-3xl font-bold">156K</h3>
              <p className="text-green-600 mt-1 text-sm">
                +18.2% from last month
              </p>
            </div>
            <div className="bg-green-100 text-green-600 flex size-12 items-center justify-center rounded-lg">
              <TrendingUp className="size-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-background rounded-lg border p-6">
          <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">New Instagram Post</p>
                <p className="text-muted-foreground text-sm">2 hours ago</p>
              </div>
              <span className="text-green-600 text-sm">+234 likes</span>
            </div>
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">Facebook Story</p>
                <p className="text-muted-foreground text-sm">5 hours ago</p>
              </div>
              <span className="text-blue-600 text-sm">1.2K views</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Twitter Thread</p>
                <p className="text-muted-foreground text-sm">1 day ago</p>
              </div>
              <span className="text-sky-600 text-sm">89 retweets</span>
            </div>
          </div>
        </div>

        <div className="bg-background rounded-lg border p-6">
          <h3 className="mb-4 text-lg font-semibold">Top Performing Posts</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">Summer Collection Launch</p>
                <p className="text-muted-foreground text-sm">Instagram</p>
              </div>
              <span className="text-green-600 text-sm font-semibold">
                15.2K
              </span>
            </div>
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">Behind the Scenes</p>
                <p className="text-muted-foreground text-sm">Facebook</p>
              </div>
              <span className="text-blue-600 text-sm font-semibold">8.9K</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Product Announcement</p>
                <p className="text-muted-foreground text-sm">Twitter</p>
              </div>
              <span className="text-sky-600 text-sm font-semibold">6.4K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
