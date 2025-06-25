"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import ClientLogos from "@/components/client-logos"
import Statistics from "@/components/statistics"
import Team from "@/components/team"
import Testimonial from "@/components/testimonial"
import Blog from "@/components/blog"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import ConsultingServices from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
  
export default function ApexaHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ClientLogos />
      <WhyChooseUs/>
 <ConsultingServices/>
       <Statistics />
      <Team />
      <Testimonial />
      <Blog />
      <ContactForm />
       <Footer />
    </div>
  )
}
