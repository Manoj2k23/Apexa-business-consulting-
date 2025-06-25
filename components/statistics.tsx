"use client"

import { stats } from "@/lib/apexa-data"
import { useState, useEffect } from "react"

export default function Statistics() {


  const [counters, setCounters] = useState(stats.map(() => 0))
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("statistics-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const intervals = stats.map((stat, index) => {
      const increment = stat.value / 100
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(intervals[index])
        }

        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(current)
          return newCounters
        })
      }, 20)
    })

    return () => intervals.forEach(clearInterval)
  }, [isVisible])

  return (
    <section
      id="statistics-section"
      className="py-16 bg-[#E8E5F2] text-gray-900 relative overflow-hidden border-t border-gray-200"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold mb-3 text-blue-950">
                  {counters[index]}
                  {stat.suffix}
                </div>
                <div className="text-base text-gray-500 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>

               <div className="absolute top-4 right-4 w-2 h-2 bg-blue-300 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-300 rounded-full opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
