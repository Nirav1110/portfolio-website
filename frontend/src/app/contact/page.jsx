"use client";
import { useState } from "react";
import { CommonCard } from "@/components/common/CardLayout";
import { Button } from "@/components/ui/button";
import { FormInput, FormTextarea } from "@/components/common/FormInput";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "niravparmar7612@gmail.com",
      action: () => window.open("mailto:niravparmar7612@gmail.com"),
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/nirav-parmar-6b89502a2",
      action: () =>
        window.open(
          "https://www.linkedin.com/in/nirav-parmar-6b89502a2",
          "_blank"
        ),
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/Nirav1110",
      action: () => window.open("https://github.com/Nirav1110", "_blank"),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <CommonCard
            title="Send a Message"
            content={
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    name="name"
                    label="Name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <FormInput
                  name="subject"
                  label="Subject"
                  placeholder="What's this about?"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                />

                <FormTextarea
                  name="message"
                  label="Message"
                  placeholder="Tell me about your project or idea..."
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                />

                <Button type="submit" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            }
          />

          {/* Contact Information */}
          <div className="space-y-6">
            <CommonCard
              title="Contact Information"
              content={
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-muted cursor-pointer"
                      onClick={contact.action}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{contact.label}</p>
                        <p className="text-muted-foreground text-sm break-all">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              }
            />

            <CommonCard
              title="Let's Connect"
              content={
                <div>
                  <p className="text-muted-foreground text-sm mb-4">
                    I'm always open to discussing new opportunities, creative
                    ideas, or just having a chat about technology and remote
                    work opportunities.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        window.open("https://github.com/Nirav1110", "_blank")
                      }
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/nirav-parmar-6b89502a2",
                          "_blank"
                        )
                      }
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        window.open("mailto:niravparmar7612@gmail.com")
                      }
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
