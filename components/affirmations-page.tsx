"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

interface AffirmationCategory {
  id: string
  title: string
  icon: string
  color: string
  affirmations: string[]
}

interface AffirmationsPageProps {
  categories: AffirmationCategory[]
  onCategorySelect: (categoryId: string) => void
  onBack: () => void
}

export default function AffirmationsPage({ categories, onCategorySelect, onBack }: AffirmationsPageProps) {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Button>
          <h2 className="text-xl md:text-2xl font-bold text-white">Daily Affirmations</h2>
        </div>

        {/* Description */}
        <div className="text-center mb-8 p-4 md:p-6 bg-gradient-to-r from-gray-800/80 to-purple-800/80 rounded-2xl backdrop-blur-sm">
          <p className="text-sm md:text-base text-gray-200 font-medium">
            Choose a category that speaks to your heart today. Each affirmation is crafted with love to remind you of
            your worth and strength. 💕
          </p>
        </div>

        {/* Affirmation Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0 bg-gray-800/80 backdrop-blur-sm overflow-hidden group"
              onClick={() => onCategorySelect(category.id)}
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`} />
              <CardHeader className="text-center p-4 md:p-6">
                <div className="text-3xl md:text-4xl mb-2 group-hover:animate-bounce">{category.icon}</div>
                <CardTitle className="text-base md:text-lg font-bold text-white">{category.title}</CardTitle>
                <CardDescription className="text-xs md:text-sm text-gray-300">
                  Tap to explore affirmations
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="flex justify-center">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-200 text-xs">
                    {category.affirmations.length} affirmations
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-8 p-4 md:p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl">
          <p className="text-sm md:text-base text-gray-200 font-medium">
            Remember: You can come back to any category whenever you need a gentle reminder of how amazing you are ✨
          </p>
        </div>
      </div>
    </div>
  )
}
