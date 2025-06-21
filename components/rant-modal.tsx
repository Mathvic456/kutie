"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MessageSquare, Send, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface RantModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RantModal({ isOpen, onClose }: RantModalProps) {
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xzzgawga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          message: message,
          subject: "Rant from Kutie's Healing App",
        }),
      })

      if (response.ok) {
        toast({
          title: "Message sent! 💕",
          description: "Victor will get your message soon. Take care of yourself!",
        })
        setMessage("")
        setEmail("")
        onClose()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Try calling Victor directly or try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-800 border-gray-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl text-white">
            <MessageSquare className="w-5 h-5 text-purple-400" />
            Rant to Victor 💜
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Let it all out! Victor is here to listen and support you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-200">
              Your Email (optional)
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="kutie@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-gray-200">
              What's on your mind? 💭
            </Label>
            <Textarea
              id="message"
              placeholder="Pour your heart out here... Victor is listening 💕"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 min-h-[120px] resize-none bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Maybe Later
            </Button>
            <Button
              type="submit"
              disabled={!message.trim() || isSubmitting}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send to Victor
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="text-center pt-2 border-t border-gray-700">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
            <Heart className="w-3 h-3 text-purple-400" fill="currentColor" />
            Your feelings are valid and you are not alone
            <Heart className="w-3 h-3 text-purple-400" fill="currentColor" />
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
