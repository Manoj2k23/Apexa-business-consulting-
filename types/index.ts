import type React from "react"
export interface TeamMember {
  name: string
  role: string
  image?: string
}

export interface BlogPost {
  title: string
  author: string
  date: string
  image: string
  excerpt?: string
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface Statistic {
  value: string
  label: string
}
