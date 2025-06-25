import { logos } from "@/lib/apexa-data"
import Image from "next/image"

export default function ClientLogos() {


  return (
    <section className="py-12 bg-white overflow-hidden border-b">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex animate-scroll space-x-12 whitespace-nowrap items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="object-contain   transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
