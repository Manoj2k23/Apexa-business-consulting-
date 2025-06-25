import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { blogPosts } from "@/lib/apexa-data"

export default function Blog() {
 
  return (
    <section className="min-h-screen bg-gray-50 max-w-[1800px] lg:px-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <Card className="p-8 ring-1 ring-[#D6A4A4]">
                <div className="text-center">
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                      FEATURED CONSULTANT
                    </h3>
                  </div>

                  {/* Consultant Profile */}
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <div className="text-white font-bold text-2xl">L</div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Lisa Wang</h2>
                    <p className="text-gray-600 text-left mb-6">
                      Business strategist with 10+ years in digital transformation, market analysis, and operations consulting.
                    </p>
                  </div>

                  <Button className="w-full bg-purple-950 hover:bg-purple-950/70 text-white">Follow</Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow ring-1 ring-[#D6A4A4]">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                       <div className="flex-shrink-0">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt="Blog post thumbnail"
                          width={120}
                          height={80}
                          className="w-30 h-20 object-cover rounded-lg"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                          {post.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>{post.date} • {post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
