"use client"

import { FlexibleSheetDemo } from '@/public/contact-form'
import React from 'react'
import Image from "next/image"

export default function ContactForm() {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-10 px-4">
      <div className="relative bg-[#D6A4A4] rounded-xl overflow-hidden p-0">
         <div className="flex flex-col md:flex-row items-center md:items-stretch">
           <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/team-05.png"
              alt="team"
              fill
              className="object-contain object-bottom "
            />
          </div>

           <div className="flex-1 px-6 py-10 md:p-12 text-white flex flex-col justify-center text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold leading-relaxed mb-4">
              Get in touch for business consulting
            </h3>
            <p className="text-sm md:text-base opacity-90 mb-6">
              Transform your business with expert guidance and strategic solutions
            </p>
            <div className="flex justify-center">
              <FlexibleSheetDemo buttonType={'gradient'} />
            </div>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute top-4 left-8 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute top-8 right-12 w-2 h-2 bg-white rounded-full"></div>
        </div>
    </div>
  )
}
