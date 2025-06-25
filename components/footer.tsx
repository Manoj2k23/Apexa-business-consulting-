import { Mail, Phone, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
 
export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#6F62A3]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
           <div className="lg:col-span-1">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-8">
              Succeeding Together:
              <br />
              Your Goals, Our Mission
            </h2>

            {/* Logo */}
            <div className="flex items-center space-x-3">
               <div>
    <Link href="/" className="text-3xl font-bold text-blue-600">
                 <Image
      src="/apexa-logo.png"  
      alt="Company Logo"
      width={120}
      height={80}
   className="h-16 w-full " />
            </Link>                
              </div>
            </div>
          </div>

           <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Apexa Consulting</h4>
            <div className="space-y-2 text-gray-600">
              <p>Manhattan Business Center</p>
              <p>1234 Broadway, Suite 567</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>

            <div className="pt-4">
              <Link
                href="#"
                className="inline-flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>

           <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">
              We look forward to
              <br />
              hearing from you
            </h4>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>hello@apexa.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-[#E8E5F2]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
             <div className="flex space-x-8">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Our Team
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Insights
              </Link>
            </div>

             <p className="text-gray-500 text-sm">Apexa © 2025. All rights reserved.</p>

            </div>
        </div>
      </div>
    </footer>
  )
}
