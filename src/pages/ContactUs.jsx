import { useState } from "react";
import Button from "../components/Button";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMsg(""), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-screen bg-[#070B19] mesh-bg pt-32 pb-20 px-4 sm:px-10">
      {/* Background glow effects */}
      <div className="glow-orb bg-indigo-500 w-[40vw] h-[40vw] top-[-10%] left-[-10%] blur-[120px]"></div>
      <div className="glow-orb bg-purple-600 w-[30vw] h-[30vw] bottom-[-10%] right-[10%] blur-[120px]"></div>

      <div className="relative z-10 max-w-2xl mx-auto glassmorphism rounded-3xl p-8 sm:p-12 shadow-[0_0_40px_rgba(99,102,241,0.1)] border border-white/10">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black font-general text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-200">
            Contact D360 Voice
          </h1>
          <p className="mt-4 text-blue-100/70 font-circular-web max-w-md mx-auto">
            Ready to build the future of voice intelligence? Reach out to our team today.
          </p>
        </div>

        {successMsg && (
          <div className="mb-6 px-4 py-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-200 text-center text-sm">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-blue-100/60 font-general">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-blue-50 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 transition-all font-circular-web"
                placeholder="John Doe"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-wider text-blue-100/60 font-general">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-blue-50 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 transition-all font-circular-web"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-xs uppercase tracking-wider text-blue-100/60 font-general">Phone Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-blue-50 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 transition-all font-circular-web"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase tracking-wider text-blue-100/60 font-general">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-blue-50 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 transition-all font-circular-web resize-none"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full relative z-10 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3 text-white !bg-gradient-to-r !from-blue-500 !to-purple-600 border-0 hover:scale-[1.02] transition-transform duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span className="relative inline-flex font-general text-xs uppercase z-20">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
