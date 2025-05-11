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
    <div className="bg-gray-100 pb-20 px-2 sm:px-4 overflow-x-hidden">
      <div className="py-8 sm:py-10 max-w-6xl mx-auto" id="contact">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase text-gray-700 text-center mb-2">
          <FlipText>Contact Me</FlipText>
        </h2>
        <p className="text-base sm:text-xl text-center mb-6 sm:mb-10">
          Use the contact form below to send me an email
        </p>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 items-start">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-grow flex flex-col bg-white p-5 sm:p-10 shadow w-full"
          >
            <div className="mb-5">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-2">
                FULL NAME <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                id="fullName"
                name="user_name"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-200 border border-gray-600 focus:outline-none"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                EMAIL ADDRESS <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="user_email"
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-200 border border-gray-600 focus:outline-none"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                MESSAGE <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                name="message"
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-200 border border-gray-600 focus:outline-none"
              ></textarea>
            </div>

            {message && (
              <p className="text-blue-500 mb-3">{message}</p>
            )}

            <div>
              <button
                type="submit"
                value="Send"
                className="px-4 py-2 bg-[#1976D2] text-white border-none group w-full sm:w-auto"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="animate-spin mx-auto text-2xl" />
                ) : (
                  <div className="flex justify-center items-center gap-2">
                    <span>SEND MESSAGE</span>
                    <span className="-rotate-45 group-hover:rotate-0 duration-700">
                      <FaArrowRightLong />
                    </span>
                  </div>
                )}
              </button>
            </div>
          </form>

          {/* Contact Info Section */}
          <section className="bg-white p-5 sm:p-8 shadow-md flex flex-col h-full w-full">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-gray-700 text-center mb-6">
              GET IN TOUCH
            </h2>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <FaEnvelope className="text-red-500 text-xl" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-600 break-all">masiurislam28@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaPhone className="text-green-500 text-xl" />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-600">+8801327023639</p>
                  <p className="text-gray-600">+8801615209724</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaWhatsapp className="text-green-500 text-xl" />
                <div>
                  <h4 className="font-bold">Whatsapp</h4>
                  <p className="text-gray-600">+8801327023639</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaLocationDot className="text-yellow-500 text-xl" />
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-600">Patuakhali, Barisal, Bangladesh</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 text-center">
              <div className="border border-gray-400/60 mb-4"></div>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:masiurislam28@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-600 text-xl"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://github.com/Moshiur-15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black text-xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/moshiur-islam28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
