"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Pause, Volume2, Heart, Music } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const audioMessages = [
  {
    id: 1,
    title: "Good Morning Beautiful",
    description: "Start your day with love",
    duration: "2:30",
    audioUrl: "/audio/beauty.mp3",
  },
  {
    id: 2,
    title: "You're Stronger Than You Know",
    description: "For when you're feeling overwhelmed",
    duration: "3:15",
    audioUrl: "/audio/strong.mp3",
  },
  {
    id: 3,
    title: "Your Locs Are Gorgeous",
    description: "Celebrating your natural beauty",
    duration: "1:45",
    audioUrl: "/audio/locs.mp3",
  },
  {
    id: 4,
    title: "Final Year Motivation",
    description: "You've got this, almost there!",
    duration: "4:20",
    audioUrl: "/audio/final.mp3",
  },
  {
    id: 5,
    title: "Rest and Heal",
    description: "Gentle words for recovery",
    duration: "2:50",
    audioUrl: "/audio/Rest.mp3",
  },
]

export default function AudioSection() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)
  const [currentTime, setCurrentTime] = useState<{ [key: number]: number }>({})
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({})
  const { toast } = useToast()

  const togglePlay = async (messageId: number) => {
    const audio = audioRefs.current[messageId]
    if (!audio) return

    try {
      if (currentlyPlaying === messageId) {
        audio.pause()
        setCurrentlyPlaying(null)
      } else {
        // Pause any currently playing audio
        if (currentlyPlaying !== null) {
          const currentAudio = audioRefs.current[currentlyPlaying]
          if (currentAudio) currentAudio.pause()
        }

        await audio.play()
        setCurrentlyPlaying(messageId)
      }
    } catch (error) {
      console.error("Audio playback failed:", error)
      toast({ title: "Playback failed", description: String(error), variant: "destructive" })
    }
  }

  const handleTimeUpdate = (messageId: number) => {
    const audio = audioRefs.current[messageId]
    if (audio) {
      setCurrentTime((prev) => ({
        ...prev,
        [messageId]: audio.currentTime,
      }))
    }
  }

  const handleAudioEnd = (messageId: number) => {
    setCurrentlyPlaying(null)
    setCurrentTime((prev) => ({
      ...prev,
      [messageId]: 0,
    }))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="mb-8">
      <Card className="border-0 bg-gradient-to-r from-gray-800/80 to-purple-800/80 shadow-xl overflow-hidden backdrop-blur-sm">
        <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Music className="w-6 h-6" />
            <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
          </div>
          <CardTitle className="text-xl md:text-2xl font-bold">Listen to What Victor Thinks About Kutie</CardTitle>
          <CardDescription className="text-purple-100 text-sm md:text-base">
            Personal voice messages filled with love and encouragement 💕
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {audioMessages.map((message) => (
              <Card
                key={message.id}
                className="bg-gray-800/80 backdrop-blur-sm border border-purple-600/30 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-3 md:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm">{message.title}</h4>
                      <p className="text-xs text-gray-300">{message.description}</p>
                    </div>
                    <Button
                      onClick={() => togglePlay(message.id)}
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full w-8 h-8 md:w-10 md:h-10 p-0"
                    >
                      {currentlyPlaying === message.id ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Volume2 className="w-3 h-3" />
                    <span>
                      {currentTime[message.id] ? formatTime(currentTime[message.id]) : "0:00"} / {message.duration}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full transition-all duration-300"
                      style={{
                        width: currentTime[message.id]
                          ? `${(currentTime[message.id] / (Number.parseFloat(message.duration.split(":")[0]) * 60 + Number.parseFloat(message.duration.split(":")[1]))) * 100}%`
                          : "0%",
                      }}
                    />
                  </div>

                  {/* Hidden audio element */}
                  <audio
                    ref={(el) => {
                      if (el) audioRefs.current[message.id] = el
                    }}
                    onTimeUpdate={() => handleTimeUpdate(message.id)}
                    onEnded={() => handleAudioEnd(message.id)}
                    onError={() =>
                      toast({
                        title: "Cannot play this recording 😔",
                        description:
                          "Your browser couldn’t decode the file. Try another browser or replace the MP3 with a new upload.",
                        variant: "destructive",
                      })
                    }
                    preload="metadata"
                  >
                    <source src={message.audioUrl} type="audio/mpeg" />
                  </audio>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6 p-4 bg-gray-800/60 backdrop-blur-sm rounded-xl">
            <div className="flex justify-center items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-purple-400" fill="currentColor" />
              <Music className="w-4 h-4 text-indigo-400" />
              <Heart className="w-4 h-4 text-purple-400" fill="currentColor" />
            </div>
            <p className="text-sm text-gray-200 font-medium">Each message was recorded with so much love for you 💜</p>
            <p className="text-xs text-gray-400 mt-1">
              Put on your headphones and let Victor's voice remind you how amazing you are
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
