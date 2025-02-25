import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Image, Pill, Brain, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="flex items-center justify-center" href="#">
            <Pill className="h-6 w-6 text-green-600" />
            <span className="ml-2 text-xl font-bold">PharmAI Assist</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to PharmAI Assist
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Your intelligent pharmacist's assistant powered by AI. Streamlining prescriptions, diagnoses, and
                  medication management.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our AI-Powered Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  icon: FileText,
                  title: "Prescription Recognition",
                  description: "Accurately interpret handwritten prescriptions and create digital orders.",
                },
                {
                  icon: Image,
                  title: "Medical Image Analysis",
                  description: "Analyze medical images to assist in disease recognition and diagnosis.",
                },
                {
                  icon: Pill,
                  title: "Medicine Recommendations",
                  description: "Suggest appropriate medications based on patient data and diagnoses.",
                },
                {
                  icon: Brain,
                  title: "Symptom Analysis",
                  description: "Analyze patient symptoms to assist in accurate disease identification.",
                },
                {
                  icon: Zap,
                  title: "Real-time Processing",
                  description: "Process prescriptions and medical data in real-time for quick results.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 border border-green-200 p-4 rounded-lg"
                >
                  <feature.icon className="h-8 w-8 text-green-500" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              About PharmAI Assist
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl text-center">
              PharmAI Assist is an innovative AI-powered solution designed to streamline pharmacy operations and improve
              patient care. Our advanced algorithms can interpret handwritten prescriptions, analyze medical images, and
              provide intelligent medication recommendations, all while ensuring accuracy and efficiency in healthcare
              delivery.
            </p>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2>
            <div className="mx-auto max-w-[500px]">
              <form className="space-y-4">
                <input className="w-full p-2 border rounded" type="text" placeholder="Name" />
                <input className="w-full p-2 border rounded" type="email" placeholder="Email" />
                <textarea className="w-full p-2 border rounded" rows={4} placeholder="Message"></textarea>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-600">© 2024 PharmAI Assist. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
