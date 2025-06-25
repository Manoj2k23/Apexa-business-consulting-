import { Mail, MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FlexibleSheetDemo } from "@/public/contact-form"

export default function Header() {
  return (
    <>
       <div className="bg-purple-950 text-white py-2 text-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>consulting@apexa.com</span>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>1250 Broadway, Suite 3600, New York, NY</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Header */}
      <header className="bg-[#E8E5F2]  border-b border-purple-950 lg:pt-10 pt-16 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 gap-x-8 md:gap-x-0 ">
            <Link href="/" className="text-3xl font-bold text-blue-600">
                 <Image
      src="/apexa-logo.png"  
      alt="Company Logo"
      width={120}
      height={80}
   className="h-16 w-full " />
            </Link>
            <FlexibleSheetDemo buttonType={"link"} />
          </div>
        </div>
      </header>
    </>
  )
}
