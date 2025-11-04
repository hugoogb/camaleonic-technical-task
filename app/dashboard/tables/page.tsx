"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Download } from "lucide-react";

export default function TablesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Data Tables</h1>
          <p className="text-muted-foreground mt-2">
            View and manage your social media data in tabular format
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="size-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="size-4" />
            Add Record
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-background mb-6 rounded-lg border p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
            <Input
              placeholder="Search posts, platforms, or dates..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">Filters</Button>
        </div>
      </div>

      {/* Engagement Table */}
      <div className="bg-background mb-6 overflow-hidden rounded-lg border">
        <div className="border-b p-4">
          <h3 className="text-lg font-semibold">Engagement Metrics</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Platform
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Likes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Comments
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Shares
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Reach
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-muted/50">
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  2024-01-15
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="bg-blue-100 text-blue-700 rounded px-2 py-1 text-xs font-medium">
                    Instagram
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">2,345</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">156</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">89</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">12.5K</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  2024-01-14
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="bg-pink-100 text-pink-700 rounded px-2 py-1 text-xs font-medium">
                    Facebook
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">1,876</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">234</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">145</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">18.3K</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  2024-01-13
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="bg-sky-100 text-sky-700 rounded px-2 py-1 text-xs font-medium">
                    Twitter
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">3,421</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">89</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">567</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">25.7K</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Followers Table */}
      <div className="bg-background overflow-hidden rounded-lg border">
        <div className="border-b p-4">
          <h3 className="text-lg font-semibold">Follower Growth</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Platform
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Followers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  New
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Unfollows
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Net Growth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-muted/50">
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  2024-01-15
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="bg-blue-100 text-blue-700 rounded px-2 py-1 text-xs font-medium">
                    Instagram
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  12,345
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">+234</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">-12</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="text-green-600 font-medium">+222</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  2024-01-14
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="bg-pink-100 text-pink-700 rounded px-2 py-1 text-xs font-medium">
                    Facebook
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">8,976</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">+189</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">-23</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="text-green-600 font-medium">+166</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  2024-01-13
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="bg-sky-100 text-sky-700 rounded px-2 py-1 text-xs font-medium">
                    Twitter
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">3,242</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">+78</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">-5</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="text-green-600 font-medium">+73</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

