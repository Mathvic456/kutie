"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, Phone, MessageSquare, ArrowLeft, Flower2, BookOpen, Music, Lightbulb } from "lucide-react"
import AffirmationCard from "@/components/affirmation-card"
import RantModal from "@/components/rant-modal"
import AudioSection from "@/components/audio-section"
import PoetrySection from "@/components/poetry-section"
import AffirmationsPage from "@/components/affirmations-page"
import BottomNavigation from "@/components/bottom-navigation"

interface GameScreenProps {
  userName: string
}

type PageType = "home" | "affirmations" | "poetry" | "audio" | "category"

const affirmationCategories = [
  {
    id: "beauty",
    title: "Your Beautiful Self",
    icon: "✨",
    color: "from-purple-400 to-pink-400",
    affirmations: [
      "Your brown skin glows like golden honey in the sunlight",
      "Your locs are a crown of natural beauty and strength",
      "You radiate confidence and grace in everything you do",
      "Your smile lights up every room you enter",
      "You are absolutely stunning, inside and out",
    ],
  },
  {
    id: "skincare",
    title: "Skin Care Queen",
    icon: "🌸",
    color: "from-pink-400 to-rose-400",
    affirmations: [
      "Your skin care routine is an act of self-love",
      "You deserve to pamper and care for yourself",
      "Your glowing skin reflects your inner radiance",
      "Taking time for skincare is taking time for you",
      "You are worth every moment of care you give yourself",
    ],
  },
  {
    id: "strength",
    title: "Final Year Warrior",
    icon: "💪",
    color: "from-indigo-400 to-purple-400",
    affirmations: [
      "You are stronger than any challenge final year brings",
      "Every assignment completed is a step toward your dreams",
      "You have the intelligence and determination to succeed",
      "This stress is temporary, but your strength is permanent",
      "You are so close to achieving something amazing",
    ],
  },
  {
    id: "healing",
    title: "Rest & Recovery",
    icon: "🌿",
    color: "from-emerald-400 to-teal-400",
    affirmations: [
      "Your body is healing and getting stronger every day",
      "Rest is productive and necessary for your wellbeing",
      "You deserve comfort and care while you recover",
      "Taking time to heal shows wisdom and self-respect",
      "You will feel better soon, be patient with yourself",
    ],
  },
  {
    id: "academic",
    title: "Academic Goddess",
    icon: "📚",
    color: "from-blue-400 to-indigo-400",
    affirmations: [
      "Your mind is brilliant and capable of understanding anything",
      "Every study session brings you closer to your degree",
      "You have the discipline and focus to excel in your finals",
      "Your hard work and dedication will pay off beautifully",
      "You are destined for academic success and beyond",
      "Your professors see your potential and intelligence",
      "You absorb knowledge easily and retain it well",
    ],
  },
  {
    id: "selflove",
    title: "Self-Love Journey",
    icon: "💖",
    color: "from-rose-400 to-pink-400",
    affirmations: [
      "You are worthy of love, especially from yourself",
      "Your worth is not determined by your productivity",
      "You deserve kindness, patience, and understanding",
      "Taking care of yourself is not selfish, it's necessary",
      "You are enough, exactly as you are right now",
      "Your feelings are valid and deserve to be honored",
      "You treat yourself with the same love you give others",
    ],
  },
  {
    id: "future",
    title: "Bright Future Ahead",
    icon: "🌟",
    color: "from-yellow-400 to-orange-400",
    affirmations: [
      "Amazing opportunities are waiting for you after graduation",
      "Your future is bright and full of possibilities",
      "You will make a positive impact in whatever field you choose",
      "Success flows to you naturally and effortlessly",
      "Your dreams are valid and achievable",
      "The best version of yourself is emerging every day",
      "Your journey is unique and perfectly timed",
    ],
  },
  {
    id: "stress",
    title: "Stress Relief Sanctuary",
    icon: "🧘‍♀️",
    color: "from-teal-400 to-emerald-400",
    affirmations: [
      "You can handle whatever comes your way with grace",
      "This too shall pass, and you will emerge stronger",
      "You have survived 100% of your difficult days so far",
      "It's okay to take breaks and breathe deeply",
      "You don't have to be perfect to be amazing",
      "Your mental health is more important than any deadline",
      "You are learning to balance effort with ease",
    ],
  },
  {
    id: "locs",
    title: "Crown of Glory",
    icon: "👑",
    color: "from-amber-400 to-yellow-400",
    affirmations: [
      "Your locs are a testament to your patience and natural beauty",
      "Each loc tells a story of growth and self-acceptance",
      "Your hair is your crown, and you wear it with pride",
      "The way your locs frame your face is absolutely stunning",
      "Your natural hair journey inspires others to embrace themselves",
      "Your locs are as unique and beautiful as you are",
      "You radiate confidence with every twist and turn of your locs",
    ],
  },
]

export default function GameScreen({ userName }: GameScreenProps) {
  const [currentPage, setCurrentPage] = useState<PageType>("home")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showRantModal, setShowRantModal] = useState(false)

  const handleCall = () => {
    window.open("tel:+2347062391997", "_self")
  }

  const selectedCategoryData = affirmationCategories.find((cat) => cat.id === selectedCategory)

  // Category view
  if (selectedCategory && selectedCategoryData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pb-20">
        <div className="p-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedCategory(null)
                  setCurrentPage("affirmations")
                }}
                className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <h2 className="text-xl md:text-2xl font-bold text-white">{selectedCategoryData.title}</h2>
            </div>
            <AffirmationCard category={selectedCategoryData} />
          </div>
        </div>
        <BottomNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
    )
  }

  // Individual pages
  if (currentPage === "affirmations") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pb-20">
        <AffirmationsPage
          categories={affirmationCategories}
          onCategorySelect={setSelectedCategory}
          onBack={() => setCurrentPage("home")}
        />
        <BottomNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
    )
  }

  if (currentPage === "poetry") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pb-20">
        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="ghost"
                onClick={() => setCurrentPage("home")}
                className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <ArrowLeft className="w-4 h-4" />
                Back Home
              </Button>
              <h2 className="text-xl md:text-2xl font-bold text-white">Poetry Corner</h2>
            </div>
            <PoetrySection />
          </div>
        </div>
        <BottomNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
    )
  }

  if (currentPage === "audio") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pb-20">
        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="ghost"
                onClick={() => setCurrentPage("home")}
                className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <ArrowLeft className="w-4 h-4" />
                Back Home
              </Button>
              <h2 className="text-xl md:text-2xl font-bold text-white">Victor's Voice Messages</h2>
            </div>
            <AudioSection />
          </div>
        </div>
        <BottomNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
    )
  }

  // Home page
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pb-20">
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Flower2 className="w-6 h-6 md:w-8 md:h-8 text-purple-400 animate-pulse" />
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Welcome back, {userName}! 💕
              </h1>
              <Flower2 className="w-6 h-6 md:w-8 md:h-8 text-purple-400 animate-pulse" />
            </div>
            <p className="text-gray-300 text-base md:text-lg">Choose your healing journey for today</p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8">
            <Button
              onClick={handleCall}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Victor 📞
            </Button>
            <Button
              onClick={() => setShowRantModal(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Rant to Victor 💬
            </Button>
          </div>

          {/* Main Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {/* Affirmations Card */}
            <Card
              className="cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0 bg-gray-800/80 backdrop-blur-sm overflow-hidden group"
              onClick={() => setCurrentPage("affirmations")}
            >
              <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400" />
              <CardHeader className="text-center p-4 md:p-6">
                <div className="text-4xl md:text-5xl mb-2 group-hover:animate-bounce">
                  <Lightbulb className="w-12 h-12 md:w-16 md:h-16 mx-auto text-purple-400" />
                </div>
                <CardTitle className="text-lg md:text-xl font-bold text-white">Daily Affirmations</CardTitle>
                <CardDescription className="text-sm md:text-base text-gray-300">
                  Positive words to lift your spirit
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="flex justify-center">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-200 text-xs md:text-sm">
                    9 categories
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Poetry Card */}
            <Card
              className="cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0 bg-gray-800/80 backdrop-blur-sm overflow-hidden group"
              onClick={() => setCurrentPage("poetry")}
            >
              <div className="h-2 bg-gradient-to-r from-indigo-400 to-purple-400" />
              <CardHeader className="text-center p-4 md:p-6">
                <div className="text-4xl md:text-5xl mb-2 group-hover:animate-bounce">
                  <BookOpen className="w-12 h-12 md:w-16 md:h-16 mx-auto text-indigo-400" />
                </div>
                <CardTitle className="text-lg md:text-xl font-bold text-white">Poetry Corner</CardTitle>
                <CardDescription className="text-sm md:text-base text-gray-300">
                  Beautiful verses written just for you
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="flex justify-center">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-200 text-xs md:text-sm">
                    8 poems
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Audio Messages Card */}
            <Card
              className="cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0 bg-gray-800/80 backdrop-blur-sm overflow-hidden group"
              onClick={() => setCurrentPage("audio")}
            >
              <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-400" />
              <CardHeader className="text-center p-4 md:p-6">
                <div className="text-4xl md:text-5xl mb-2 group-hover:animate-bounce">
                  <Music className="w-12 h-12 md:w-16 md:h-16 mx-auto text-emerald-400" />
                </div>
                <CardTitle className="text-lg md:text-xl font-bold text-white">Voice Messages</CardTitle>
                <CardDescription className="text-sm md:text-base text-gray-300">
                  Listen to Victor's loving words
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="flex justify-center">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-200 text-xs md:text-sm">
                    5 messages
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Affirmation Preview */}
          <Card className="border-0 bg-gradient-to-r from-gray-800/80 to-purple-800/80 shadow-lg mb-8 backdrop-blur-sm">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="flex justify-center items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce" />
                <h3 className="text-base md:text-lg font-semibold text-white">Today's Quick Reminder</h3>
                <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce" />
              </div>
              <p className="text-sm md:text-base text-gray-200 italic font-medium">
                "You are absolutely stunning, inside and out, and your strength shines brighter than any challenge you
                face."
              </p>
            </CardContent>
          </Card>

          {/* Footer Message */}
          <div className="text-center p-4 md:p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl">
            <div className="flex justify-center items-center gap-2 mb-2">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-purple-400" fill="currentColor" />
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            </div>
            <p className="text-sm md:text-base text-gray-200 font-medium">
              You are loved, you are strong, and you will get through this 💕
            </p>
            <p className="text-xs md:text-sm text-gray-400 mt-2">
              Take your time, rest well, and remember how amazing you are
            </p>
          </div>
        </div>
      </div>

      <BottomNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <RantModal isOpen={showRantModal} onClose={() => setShowRantModal(false)} />
    </div>
  )
}
