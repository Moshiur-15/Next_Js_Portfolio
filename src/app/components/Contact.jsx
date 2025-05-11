"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  FaArrowRightLong,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaLocationDot,
} from "react-icons/fa6";
import { FlipText } from "@/components/magicui/flip-text";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_ahqyoua", "template_px0c2kk", form.current, {
        publicKey: "3eOT6dB9zWU0c1M1F",
      })
      .then(
        (res) => {
          console.log("SUCCESS!", res.text);
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gray-100 pb-32 lg:pb-20 px-4">
      <div className="py-8 sm:py-10 container mx-auto" id="contact">
        <h2 className="text-3xl font-bold uppercase text-gray-700 text-center mb-2">
          <FlipText>Contact Me</FlipText>
        </h2>
        <p className="text-xl text-center mb-6 lg:mb-10">
          Use the contact form below to send me an email
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start h-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="h-full flex-grow flex flex-col bg-white p-10 shadow"
          >
            {/* Full Name */}
            <div className="mb-6">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                FULL NAME <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                id="fullName"
                name="from_name"
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 bg-gray-200  placeholder-gray-400 border border-gray-600 focus:outline-none border-none"
              />
            </div>

            {/* Email Address */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                EMAIL ADDRESS <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="from_email"
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 bg-gray-200  placeholder-gray-400 border border-gray-600 focus:outline-none border-none"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                MESSAGE <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                name="message"
                id="message"
                rows="6"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 bg-gray-200  placeholder-gray-400 border border-gray-600 focus:outline-none border-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-auto">
              <button
                type="submit"
                value="Send"
                className="px-3 md:px-5 py-2 bg-[#1976D2] text-white border-none group"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="animate-spin mx-auto text-3xl" />
                ) : (
                  <div className="flex items-center gap-2">
                    <span>SEND MESSAGE</span>
                    <span className="-rotate-45 group-hover:-rotate-0 duration-700">
                      <FaArrowRightLong />
                    </span>
                  </div>
                )}
              </button>
            </div>
          </form>
          {/* Contact Info */}
          <section className="bg-white p-8 shadow-md flex flex-col h-full mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold uppercase lg:scale-y-125 text-gray-700 text-center mb-8">
              GET IN TOUCH
            </h2>

            <div className="p-5">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="text-red-400 text-2xl mr-4">
                      <FaEnvelope />
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">Email</h4>
                      <p className="text-gray-600">masiurislam28@email.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-4">
                      <FaPhone />
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+8801327023639</p>
                      <p className="text-gray-600">+8801615209724</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-4">
                      <FaWhatsapp className="text-3xl" />
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        Whatsapp
                      </h4>
                      <p className="text-gray-600">+8801327023639</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 text-2xl mr-4">
                      <FaLocationDot />
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        Location
                      </h4>
                      <p className="text-gray-600 w-max">
                        Patuakhali, Barisal, Bangladesh
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right Side - Social Links */}
              <div className="text-center mt-6">
                <div className="border border-gray-400/60 mb-5"></div>
                <div className="flex space-x-6 mt-6">
                  {/* Email */}
                  <a
                    href="mailto:masiurislam28@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-red-400 hover:text-red-600 transition duration-700 "
                  >
                    <FaEnvelope />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://github.com/Moshiur-15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-gray-500 hover:text-gray-800 transition duration-700 "
                  >
                    <FaGithub />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-3xl cursor-pointer hover:text-blue-600 transition duration-700"
                  >
                    <FaFacebook className="" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/moshiur-islam28/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-3xl cursor-pointer hover:text-blue-600 transition duration-700"
                  >
                    <FaLinkedin className="" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Service ID: service_o751745 p:Z2qfI6Xmrlgyd4bDo t:template_21grsfp
