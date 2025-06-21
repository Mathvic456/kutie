"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, BookOpen, ArrowLeft, ArrowRight, Sparkles, Flower2 } from "lucide-react"

const poems = [
  {
    id: 1,
    title: "From the ruins that make VIctor, Vic",
    category: "Love",
    content: ` If we were to be sunflowers in a field of sunflowers, I'd look to you rather than the sun, I'd die for you, rather than the sun.`,
    color: "from-purple-400 to-pink-400",
    icon: "✨",
  },
  {
    id: 2,
    title: "Meeting you, knowing you",
    category: "Time and CHance",
    content: `For I thank you for merely living at the same time as I do. Dear Kutie, my alone has never felt so good becuase now, it has been invaded by the thoughts of you, so I am no more alone`,
    color: "from-indigo-400 to-purple-400",
    icon: "💪",
  },
  {
    id: 3,
    title: "Atlas",
    category: "Normal?",
    content: `I find it so amusing that we all pretend to be alone, when we could be insanely interesting instead.`,
    color: "from-emerald-400 to-teal-400",
    icon: "🌿",
  },
  {
    id: 4,
    title: "Skincare Queen",
    category: "Self-Love",
    content: `In morning light you tend your glowing skin,
Each gentle touch, a ritual from within.
The creams and serums, masks that make you glow,
Are acts of love that help your beauty show.

You take the time to pamper and to care,
For the one person who'll always be there.
Your skincare routine is more than what it seems,
It's self-love practiced, fulfilling all your dreams.`,
    color: "from-pink-400 to-rose-400",
    icon: "🌸",
  },
  {
    id: 5,
    title: "Stars",
    category: "You, Me, Us",
    content: `If I was a star and you were a star, I would wink at you and blink at you and the earthlings would call it science`,
    color: "from-amber-400 to-yellow-400",
    icon: "👑",
  },
  {
    id: 6,
    title: "Despair",
    category: "Dreams",
    content: `For if you were to ever leave. I would try, to see you off with love. To say thank you. For knowing me, for stopping by.`,
    color: "from-yellow-400 to-orange-400",
    icon: "🌟",
  },
  {
    id: 7,
    title: "You Are Enough",
    category: "Self-Worth",
    content: `If you are intolerable, give me the permission to be the one to tolerate you. For you are enough, just as you are, and I will love you for it.`,
    color: "from-rose-400 to-pink-400",
    icon: "💖",
  },
  {
    id: 8,
    title: "Love Letter in Verse",
    category: "Love",
    content: 'I do not wish for you in a soft or subtle way. I wish for you in a rough, wild, and passionate way. I want the heartache, the sins, the laughter, the tears, the joy that makes you. Thank you for being you, ',
    color: "from-purple-400 to-pink-400",
    icon: "💕",
  },
]

export default function PoetrySection() {
  const [selectedPoem, setSelectedPoem] = useState<number | null>(null)

  const selectedPoemData = poems.find((poem) => poem.id === selectedPoem)

  const nextPoem = () => {
    if (selectedPoemData) {
      const currentIndex = poems.findIndex((p) => p.id === selectedPoem)
      const nextIndex = (currentIndex + 1) % poems.length
      setSelectedPoem(poems[nextIndex].id)
    }
  }

  const prevPoem = () => {
    if (selectedPoemData) {
      const currentIndex = poems.findIndex((p) => p.id === selectedPoem)
      const prevIndex = currentIndex === 0 ? poems.length - 1 : currentIndex - 1
      setSelectedPoem(poems[prevIndex].id)
    }
  }

  if (selectedPoem && selectedPoemData) {
    return (
      <div className="mb-8">
        <Card className="border-0 bg-gray-800/90 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className={`h-3 bg-gradient-to-r ${selectedPoemData.color}`} />
          <CardHeader>
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setSelectedPoem(null)}
                className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Poems
              </Button>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevPoem}
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextPoem}
                  className="text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-8">
            <div className="text-center space-y-4 md:space-y-6">
              <div className="text-4xl md:text-6xl animate-pulse">{selectedPoemData.icon}</div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedPoemData.title}</h2>
                <Badge
                  variant="secondary"
                  className={`bg-gradient-to-r ${selectedPoemData.color} text-white text-xs md:text-sm`}
                >
                  {selectedPoemData.category}
                </Badge>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="text-base md:text-lg leading-relaxed text-gray-200 whitespace-pre-line font-serif italic">
                  "{selectedPoemData.content}"
                </div>
              </div>

              <div className="flex justify-center items-center gap-2 pt-4">
                <Heart className="w-5 h-5 text-purple-400 animate-pulse" fill="currentColor" />
                <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce" />
                <Heart className="w-5 h-5 text-purple-400 animate-pulse" fill="currentColor" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-4 p-4 bg-gradient-to-r from-gray-800/80 to-purple-800/80 rounded-2xl backdrop-blur-sm">
          <p className="text-gray-300 text-sm">💝 Every word written with love, just for you</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8">
      <Card className="border-0 bg-gradient-to-r from-gray-800/80 to-purple-800/80 shadow-xl overflow-hidden backdrop-blur-sm">
        <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="flex justify-center items-center gap-2 mb-2">
            <BookOpen className="w-6 h-6" />
            <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
          </div>
          <CardTitle className="text-2xl font-bold">Poetry Corner</CardTitle>
          <CardDescription className="text-purple-100">
            Verses written from the heart, just for Kutie 💕
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {poems.map((poem) => (
              <Card
                key={poem.id}
                className="cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-purple-600/30 bg-gray-800/80 backdrop-blur-sm overflow-hidden group"
                onClick={() => setSelectedPoem(poem.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${poem.color}`} />
                <CardContent className="p-3 md:p-4">
                  <div className="text-center space-y-3">
                    <div className="text-3xl group-hover:animate-bounce">{poem.icon}</div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{poem.title}</h4>
                      <Badge variant="secondary" className="text-xs mt-1 bg-gray-700 text-gray-200">
                        {poem.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-300 line-clamp-3">{poem.content.split("\n")[0]}...</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6 p-4 bg-gray-800/60 backdrop-blur-sm rounded-xl">
            <div className="flex justify-center items-center gap-2 mb-2">
              <Flower2 className="w-4 h-4 text-purple-400" />
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <Flower2 className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-sm text-gray-200 font-medium">Each poem is a love letter written in verse 💜</p>
            <p className="text-xs text-gray-400 mt-1">
              Tap any poem to read the full verse and feel the love in every word
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
