"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Sparkles, AlertCircle } from "lucide-react"

interface LoginScreenProps {
  onLogin: (name: string) => void
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedName = name.trim().toLowerCase()

    if (!trimmedName) {
      setError("Please enter your name")
      return
    }

    if (trimmedName !== "kutie") {
      setError("This healing space is reserved for someone special 💜")
      return
    }

    setError("")
    onLogin("Kutie")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Card className="w-full max-w-md shadow-2xl border-0 bg-gray-800/90 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="w-12 h-12 text-purple-400 animate-pulse" fill="currentColor" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kutie's Very own safe space
          </CardTitle>
          <CardDescription className="text-gray-300">A special place of affirmations and love 💕</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Enter your name to begin..."
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setError("")
                }}
                className="text-center border-purple-600 bg-gray-700/50 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400"
              />
              {error && (
                <div className="flex items-center gap-2 mt-2 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              disabled={!name.trim()}
            >
              Enter Your Healing Space ✨
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
