"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, RefreshCw, Sparkles } from "lucide-react"

interface AffirmationCategory {
  id: string
  title: string
  icon: string
  color: string
  affirmations: string[]
}

interface AffirmationCardProps {
  category: AffirmationCategory
}

export default function AffirmationCard({ category }: AffirmationCardProps) {
  const [currentAffirmation, setCurrentAffirmation] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextAffirmation = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentAffirmation((prev) => (prev + 1) % category.affirmations.length)
      setIsAnimating(false)
    }, 300)
  }

  const randomAffirmation = () => {
    setIsAnimating(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * category.affirmations.length)
      setCurrentAffirmation(randomIndex)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextAffirmation()
    }, 8000) // Auto-advance every 8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <Card className="border-0 bg-gray-800/90 backdrop-blur-sm shadow-2xl overflow-hidden">
        <div className={`h-3 bg-gradient-to-r ${category.color}`} />
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="text-6xl animate-pulse">{category.icon}</div>

            <div
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
              }`}
            >
              <p className="text-2xl font-medium text-gray-100 leading-relaxed mb-4">
                "{category.affirmations[currentAffirmation]}"
              </p>

              <div className="flex justify-center items-center gap-2">
                <Heart className="w-5 h-5 text-purple-400 animate-pulse" fill="currentColor" />
                <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce" />
                <Heart className="w-5 h-5 text-purple-400 animate-pulse" fill="currentColor" />
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
              <span>
                {currentAffirmation + 1} of {category.affirmations.length}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4">
        <Button
          onClick={nextAffirmation}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          disabled={isAnimating}
        >
          Next Affirmation ✨
        </Button>

        <Button
          onClick={randomAffirmation}
          variant="outline"
          className="border-2 border-purple-400 text-purple-300 hover:bg-purple-900/50 hover:text-purple-200 font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          disabled={isAnimating}
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Surprise Me
        </Button>
      </div>

      <div className="text-center p-4 bg-gradient-to-r from-gray-800/80 to-purple-800/80 rounded-2xl backdrop-blur-sm">
        <p className="text-gray-300 text-sm">
          💡 Tip: Let these words sink in. You deserve every bit of love and positivity.
        </p>
      </div>
    </div>
  )
}
