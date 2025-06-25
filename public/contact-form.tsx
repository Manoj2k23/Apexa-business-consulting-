"use client"

import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import * as React from "react"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { LoadingButton } from "@/components/ui/LoadingButton"
 import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import { Sheet, SheetContent, SheetHeader, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { sendEmail } from "@/components/get-started"
 import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type ButtonType = "default" | "gradient" | "link" | "Touch"

interface FlexibleSheetDemoProps {
  buttonType: ButtonType
}

export function FlexibleSheetDemo({ buttonType }: FlexibleSheetDemoProps) {
  const FormSchema = z.object({
    FirstName: z.string().min(2, {
      message: "First name is required.",
    }),
    LastName: z.string().min(1, {
      message: "Last name is required.",
    }),
    BusinessEmail: z.string().email({
      message: "Please enter a valid business email address.",
    }),
    PhoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Please enter a valid phone number.",
    }),
  })

  type FormValues = z.infer<typeof FormSchema>

  const form = useForm<FormValues>({
    defaultValues: {
      FirstName: "",
      LastName: "",
      BusinessEmail: "",
      PhoneNumber: "",
    },
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
  })

  const [loading, setLoading] = React.useState(false)
  const { toast } = useToast()

  async function onSubmit(data: FormValues) {
    setLoading(true)
    try {
      const result = await sendEmail(data)
      if (result.success) {
        toast({
          description: (
            <pre className="">
              <code className="text-white font-bold text-sm">Your message has been sent. </code>
            </pre>
          ),
        })
        form.reset()
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to send email. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  const renderButton = () => {
    switch (buttonType) {
      case "default":
        return <div>Get started </div>
      case "gradient":
        return (
          <Button

            className="bg-white font-semibold text-lg border-[#6F62A3] border-2  px-8 py-6 rounded-full text-gray-600  hover:bg-gray-100 transition-colors duration-200"
          >
            <span>Get In Touch</span>
          </Button>
        )
      case "link":
        return (
          <Button className="bg-purple-950 hover:bg-[#C1BCD9]">
            Free Consultation
          </Button>
        )
      case "Touch":
        return (
          <div className="flex flex-col sm:flex-row">
            <Button size="lg" className="bg-purple-950 hover:bg-[#C1BCD9]">
              GET FREE CONSULTATION <ArrowRight className="ml-2 w-4 h-4" />
            </Button></div>
        )
      default:
        return null
    }
  }

  return (
    <section className="">
      <Sheet >
        <SheetTrigger asChild>{renderButton()}</SheetTrigger>
        <SheetContent className="w-full   mx-auto bg-white mb-">
          <SheetHeader className="mb-10 flex mt-8 py-">
            <SheetTitle className="text-2xl font-bold text-gray-800 text-left  ">
              <h1 className="-mt-10 mb-8 mx-2">Schedule a Call</h1>
            </SheetTitle>
            <SheetDescription>
              <div className="text-center">
                <h2 className="text-blue-950 font-bold text-4xl mb-4">Connect with our Business Consulting Team</h2>
                <p className="text-gray-600 text-sm">Add your details to schedule a consultation with our experts</p>
              </div>
            </SheetDescription>
          </SheetHeader>

          <div className="px-4 sm:px-6 lg:px-8 space-y-6 ">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-6 space-y-6   ">
                <div className="flex  gap-4">
                  <FormField
                    control={form.control}
                    name="FirstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FloatingLabelInput
                            {...field}
                            id="FirstName"
                            label="First Name"
                            className="text-gray-700 focus:border-blue-500 p-6"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="LastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FloatingLabelInput
                            {...field}
                            id="LastName"
                            label="Last Name"
                            className="text-gray-700 focus:border-blue-500 p-6"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="BusinessEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          {...field}
                          id="BusinessEmail"
                          label="Business Email"
                          className="text-gray-700 focus:border-blue-500 p-6  "
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="PhoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          {...field}
                          id="PhoneNumber"
                          label="Phone Number"
                          className="text-gray-700 focus:border-blue-500 p-6"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
                <LoadingButton
                  type="submit"
                  loading={loading}
                  className="w-full mt- bg-purple-950 hover:bg-purple-950/70 text-white py-6  text-lg items-center text-center
                font-semibold rounded-lg transition-colors duration-300"
                >
                  Schedule Consultation
                </LoadingButton>
              </form>
            </Form>
          </div>
        </SheetContent>
      </Sheet></section>
  )
}
