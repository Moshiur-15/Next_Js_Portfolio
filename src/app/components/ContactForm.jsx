import {
  Github,
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
    <div id="contact" className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <input
                    name="user_email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
                {message && <p className="text-blue-500 mb-3">{message}</p>}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-medium  transition-all duration-300 flex items-center justify-center"
                >
                  {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin mx-auto text-2xl" />
                  ) : (
                    <div className="flex justify-center items-center gap-2">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700/50">
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
                      <p className="text-white">masiurislam@email.com</p>
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
                      <p className="text-white">Patuakhali, Barisal, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/Moshiur-15", color: "hover:text-gray-400" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/moshiur-islam28/", color: "hover:text-blue-400" },
                    { icon: Facebook, href: "https://www.facebook.com/masiur.isllam", color: "hover:text-blue-500" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      className={`w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
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