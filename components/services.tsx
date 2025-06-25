"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/lib/apexa-data"

export default function ConsultingServices() {


  return (
    <section className="py-10 max-w-[1800px] lg:px-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
          <p className="text-xl text-gray-600">
            Tailored business consulting solutions for sustainable success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-950"></div>

              <CardContent className="p-8 text-center">
                <div className="text-sm text-gray-400 font-medium mb-6 text-left">{service.number}</div>

                <div className="flex justify-center mb-6">
                  <service.icon className="w-12 h-12 text-gray-600 stroke-1" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">{service.title}</h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.description}</p>

                <Button
                  variant="default"
                  size="sm"
                  className="bg-purple-950 hover:bg-purple-950/70 hover:text-white text-white px-6 py-2 text-sm font-medium"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
