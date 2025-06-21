"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, BookOpen, ArrowLeft, ArrowRight, Sparkles, Flower2 } from "lucide-react"

const poems = [
  {
    id: 1,
    title: "Brown Skin Goddess",
    category: "Beauty",
    content: `Your skin glows like honey in morning light,
Each shade and tone a work of art so bright.
Your locs cascade like rivers of pure grace,
A crown of beauty framing your sweet face.

You are the sun that brightens every room,
A flower that will always be in bloom.
Your brown skin tells a story rich and deep,
Of strength and beauty that will always keep.`,
    color: "from-purple-400 to-pink-400",
    icon: "✨",
  },
  {
    id: 2,
    title: "Final Year Warrior",
    category: "Strength",
    content: `Through textbooks thick and deadlines that won't wait,
You push ahead, refusing to break or hate.
Each assignment done, each test that you complete,
Brings you closer to making your dreams meet.

The stress may come, the pressure may feel strong,
But remember, dear, you've been brave all along.
Your mind is sharp, your spirit burning bright,
You'll conquer all and reach your greatest height.`,
    color: "from-indigo-400 to-purple-400",
    icon: "💪",
  },
  {
    id: 3,
    title: "Healing Heart",
    category: "Recovery",
    content: `Rest now, my love, let your body heal,
Take time to process all that you feel.
Your strength isn't measured by what you do,
But by the gentle way you're caring for you.

Each breath you take, each moment that you rest,
Is proof that you deserve only the best.
Your body knows the way to make you whole,
Trust in the wisdom of your healing soul.`,
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
    title: "Crown of Locs",
    category: "Natural Beauty",
    content: `Each loc a story, twisted with such care,
A testament to your natural flair.
They frame your face like art upon a wall,
Your crown of glory, standing proud and tall.

The way they catch the light, the way they move,
Each twist and turn has something to prove.
That natural beauty needs no disguise,
Your locs are perfect in everyone's eyes.`,
    color: "from-amber-400 to-yellow-400",
    icon: "👑",
  },
  {
    id: 6,
    title: "Future Bright",
    category: "Dreams",
    content: `Beyond these walls of study and of stress,
Awaits a future filled with happiness.
Your dreams are valid, your goals within reach,
The world is waiting for what you will teach.

Success will find you, as it always does,
For those who work with passion and with love.
Your future's bright, your path is crystal clear,
Amazing things are drawing ever near.`,
    color: "from-yellow-400 to-orange-400",
    icon: "🌟",
  },
  {
    id: 7,
    title: "You Are Enough",
    category: "Self-Worth",
    content: `In moments when you doubt your worth and might,
Remember you're a beacon of pure light.
You don't need fixing, changing, or to be
Someone other than who you're meant to be.

Your laugh, your smile, your gentle, caring way,
Make this world brighter every single day.
You are enough, exactly as you are,
My beautiful, brilliant, shining star.`,
    color: "from-rose-400 to-pink-400",
    icon: "💖",
  },
  {
    id: 8,
    title: "Love Letter in Verse",
    category: "Love",
    content: `If I could write your beauty in the stars,
Each constellation would pale next to yours.
Your smile could light the darkest of nights,
Your presence makes everything feel right.

You are the poem I never knew I'd write,
The song that makes my heart take flight.
In every word of love I try to say,
You are the meaning, night and day.`,
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
