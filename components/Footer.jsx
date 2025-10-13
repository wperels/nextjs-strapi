"use client"

import { useState } from "react"

export default function Footer() {
const [count, setCount] = useState(0)

function handleClick() {
  setCount( prev => prev + 1)
}

  return (
    <footer className="z-10 bg-white/50 backdrop-blur">
      <div className="mx-auto max-w-4xl text-center py-6 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Developed by W.Perelstein.</p>
        <p>You have clicked the button {count} times. 
          <button onClick={handleClick}>Click me!</button></p>
      </div>

    </footer>

  )

}