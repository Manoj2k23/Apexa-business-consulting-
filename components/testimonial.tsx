"use client"

import { TestimonialCarousel } from "@/components/ui/testimonial-carousel"
import { testimonials } from "@/lib/apexa-data"



export default function TestimonialCarouselDemo() {
  return (
    <section className="py-20 bg-[#F6F5FA]">
      <TestimonialCarousel testimonials={testimonials} companyLogoPath="" avatarPath="" />
    </section>
  )
}
