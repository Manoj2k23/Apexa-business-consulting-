import Image from "next/image"
import { CardContent } from "@/components/ui/card"
import { teamMembers } from "@/lib/apexa-data"

export default function Team() {


  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">MEET OUR TEAM</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <CardContent className="pt-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4 ring-1 ring-purple-950 shadow-xl w-40 h-40 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
