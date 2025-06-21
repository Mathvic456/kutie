"use client"

import { useState } from "react"
import LoginScreen from "@/components/login-screen"
import GameScreen from "@/components/game-screen"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")

  const handleLogin = (name: string) => {
    setUserName(name)
    setIsLoggedIn(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {!isLoggedIn ? <LoginScreen onLogin={handleLogin} /> : <GameScreen userName={userName} />}
    </div>
  )
}
