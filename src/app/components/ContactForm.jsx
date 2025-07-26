import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Facebook,
  Linkedin,
} from "lucide-react";
import { useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = () => {
    if (message) setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_o751745", "template_21grsfp", form.current, {
        publicKey: "Z2qfI6Xmrlgyd4bDo",
      })
      .then(
        (res) => {
          console.log("SUCCESS!", res.text);
          form.current.reset();
          setLoading(false);
          setMessage("Your message has been sent successfully.");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          setMessage("Something went wrong. Try again later.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Contact Section */}
      <section className="py-6 sm:py-10 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects. Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/50 hover:border-blue-500/50 transition-all duration-300 rounded-sm p-8 backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    onChange={handleInputChange}
                    className="w-full px-5 py-3 bg-gray-700/60 border border-gray-600 focus:border-blue-500 focus:ring-0 focus:outline-none transition-colors text-white"
                    required
                  />
                  <input
                    name="user_email"
                    type="email"
                    placeholder="Your Email"
                    onChange={handleInputChange}
                    className="w-full px-5 py-3 bg-gray-700/60 border border-gray-600 focus:border-blue-500 focus:ring-0 focus:outline-none transition-colors text-white"
                    required
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 bg-gray-700/60 border border-gray-600 focus:border-blue-500 focus:ring-0 focus:outline-none transition-colors resize-none text-white"
                  required
                />

                {message && (
                  <p
                    className={`mb-3 text-center ${
                      message.includes("successfully")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-blue-600/70 hover:bg-blue-600 duration-300 rounded text-white font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-60"
                >
                  {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="hover:border-blue-500/50 transition-all duration-300 bg-gray-800/50 rounded-sm p-8 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="text-white">masiurislam28@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <p className="text-white">+880 1327023639</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-white">
                        Patuakhali, Barisal, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="hover:border-blue-500/50 transition-all duration-300 bg-gray-800/50 rounded-sm p-8 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/Moshiur-15",
                      color: "hover:text-gray-400",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/moshiur-islam28/",
                      color: "hover:text-blue-400",
                    },
                    {
                      icon: Facebook,
                      href: "https://www.facebook.com/masiur.isllam",
                      color: "hover:text-blue-500",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      className={`w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 active:scale-95 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
