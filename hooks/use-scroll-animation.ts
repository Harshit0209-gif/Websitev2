"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(threshold = 0.1, delay = 0) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin: "50px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, delay])

  return { ref, isVisible }
}

export function useMultipleScrollAnimations(count: number, baseDelay = 0, increment = 100) {
  const refs = useRef<(HTMLElement | null)[]>(Array(count).fill(null))
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(count).fill(false))

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    refs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(
                () => {
                  setVisibleItems((prev) => {
                    const newState = [...prev]
                    newState[index] = true
                    return newState
                  })
                },
                baseDelay + index * increment,
              )
              observer.disconnect()
            }
          },
          {
            threshold: 0.1,
            rootMargin: "50px 0px -50px 0px",
          },
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [baseDelay, increment])

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el
  }

  return { setRef, visibleItems }
}
