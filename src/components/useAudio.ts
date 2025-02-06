import { useEffect, useRef, useState } from "react"

export function useAudio(src: string) {
  const audio = useRef<HTMLAudioElement | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    audio.current = new Audio(src)
    audio.current.addEventListener("canplaythrough", () => setIsReady(true))
    return () => {
      if (audio.current) {
        audio.current.removeEventListener("canplaythrough", () => setIsReady(true))
        audio.current.pause()
        audio.current = null
      }
    }
  }, [src])

  const play = () => {
    if (audio.current && isReady) {
      audio.current.currentTime = 0
      audio.current.play().catch((error) => console.error("Audio playback failed:", error))
    }
  }

  return play
}

