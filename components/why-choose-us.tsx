"use client"

import { apexaServices } from "@/lib/apexa-data"

export function WhyChooseUs() {


  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-9s0 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team's proven expertise across core consulting domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {apexaServices.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-[#EEEAF6] rounded-lg p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="mx-auto mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm font-medium">{service.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
