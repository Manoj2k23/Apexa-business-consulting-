import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FlexibleSheetDemo } from "@/public/contact-form"

export default function Hero() {
  return (
    <section className="bg-[#E8E5F2] py-10  ">
      <div className="container mx-auto px-4 max-w-[1800px] flex justify-center items-center lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-blue-950 mb-6">TRANSFORM YOUR BUSINESS WITH EXPERT CONSULTING</h1>
            <h2 className="text-3xl font-semibold text-[#7BA6A3] mb-4">Strategic Business Consulting</h2>
            <p className="text-lg text-gray-600 mb-8">
              Apexa empowers businesses to unlock their full potential through data-driven strategies, operational
              excellence, and innovative solutions. We transform challenges into opportunities for sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <FlexibleSheetDemo buttonType={"Touch"} />

              <Button size="lg" variant="outline" className="border-[1.2px] border-[#7BA6A3]">
                VIEW OUR SERVICES
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/team-01.jpg?height=500&width=600"
              alt="Business Consulting"
              width={600}
              height={500}
              className="rounded-sm   object-fill h-[400px] "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
