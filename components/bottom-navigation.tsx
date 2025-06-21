"use client"

import { Button } from "@/components/ui/button"
import { Home, Lightbulb, BookOpen, Music } from "lucide-react"

type PageType = "home" | "affirmations" | "poetry" | "audio"

interface BottomNavigationProps {
  currentPage: PageType
  onPageChange: (page: PageType) => void
}

export default function BottomNavigation({ currentPage, onPageChange }: BottomNavigationProps) {
  const navItems = [
    {
      id: "home" as PageType,
      label: "Home",
      icon: Home,
      color: "text-purple-400",
      activeColor: "text-purple-300",
    },
    {
      id: "affirmations" as PageType,
      label: "Affirmations",
      icon: Lightbulb,
      color: "text-pink-400",
      activeColor: "text-pink-300",
    },
    {
      id: "poetry" as PageType,
      label: "Poetry",
      icon: BookOpen,
      color: "text-indigo-400",
      activeColor: "text-indigo-300",
    },
    {
      id: "audio" as PageType,
      label: "Audio",
      icon: Music,
      color: "text-emerald-400",
      activeColor: "text-emerald-300",
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 px-4 py-2 z-50">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentPage === item.id

            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => onPageChange(item.id)}
                className={`flex flex-col items-center gap-1 p-2 h-auto hover:bg-gray-800 transition-all duration-200 ${
                  isActive ? "bg-gray-800/50" : ""
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isActive ? item.activeColor : `${item.color} opacity-70`
                  }`}
                />
                <span
                  className={`text-xs font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </span>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
