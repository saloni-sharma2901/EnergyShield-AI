import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-blue-400">
            Contact Us
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you.
            Contact the EnergyShield AI team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="bg-slate-900 p-6 rounded-xl flex items-center gap-5">
              <FaEnvelope className="text-blue-400 text-3xl" />

              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-slate-400">
                  support@energyshield.ai
                </p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl flex items-center gap-5">
              <FaPhoneAlt className="text-blue-400 text-3xl" />

              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-slate-400">
                  +91 9876543210
                </p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl flex items-center gap-5">
              <FaMapMarkerAlt className="text-blue-400 text-3xl" />

              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-slate-400">
                  New Delhi, India
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaGithub className="text-2xl cursor-pointer hover:text-blue-400" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-400" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
              <FaFacebook className="text-2xl cursor-pointer hover:text-blue-400" />
            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-slate-900 rounded-xl p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none"
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 transition duration-300 py-4 rounded-lg font-semibold text-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Footer CTA */}

        <div className="mt-20 text-center border-t border-slate-800 pt-10">

          <h3 className="text-3xl font-bold text-blue-400">
            Let's Build a Smarter Energy Future Together
          </h3>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            EnergyShield AI empowers organizations with AI-driven
            monitoring, predictive analytics, and intelligent
            recommendations to build resilient energy supply chains.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Contact;