"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Phone, Mail, MapPin, Github, Linkedin, TextIcon as Telegram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Get In <span className="text-[#00e0ff]">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-[#00e0ff] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-[#00e0ff] h-6 w-6 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+91 6398644252</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-[#00e0ff] h-6 w-6 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-gray-400">vikhyatagrawal1410@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-[#00e0ff] h-6 w-6 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-400">Hathras, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#121a2e] flex items-center justify-center border border-[#1e293b] hover:border-[#00e0ff] transition-colors duration-300"
                >
                  <Github className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#121a2e] flex items-center justify-center border border-[#1e293b] hover:border-[#00e0ff] transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#121a2e] flex items-center justify-center border border-[#1e293b] hover:border-[#00e0ff] transition-colors duration-300"
                >
                  <Telegram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#121a2e] border-[#1e293b] focus:border-[#00e0ff] focus:ring-[#00e0ff] h-12"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#121a2e] border-[#1e293b] focus:border-[#00e0ff] focus:ring-[#00e0ff] h-12"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-[#121a2e] border-[#1e293b] focus:border-[#00e0ff] focus:ring-[#00e0ff] h-12"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-[#121a2e] border-[#1e293b] focus:border-[#00e0ff] focus:ring-[#00e0ff] min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#00e0ff] hover:bg-[#00e0ff]/80 text-black font-medium w-full h-12 btn-glow"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
