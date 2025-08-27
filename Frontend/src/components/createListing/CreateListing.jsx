import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateListing() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    owner: "",
    image: ""
  });

  const navigate = useNavigate();
      
  // e.target.name → jo bhi input ka name="title" ya name="description" hai, wahi field update karega.
  // e.target.value → input box me jo value hai.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    
  // headers: { "Content-Type": "application/json" } → bata raha hai ki data JSON format me bheja ja raha hai.
  // body: JSON.stringify(formData) → form ka pura data JSON string me backend ko bhejta hai.
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    navigate("/");
  };

  return (
    <section className="bg-[#0D0F13] min-h-screen px-6 py-16">
      {/* Hero Text */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-block bg-[#1A1F23] text-[#33FFDD] text-sm font-medium px-4 py-1 rounded-full mb-6">
          Create New Listing
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Add to Yappers<span className="text-[#33FFDD]">HUB</span>
        </h1>
        <p className="text-[#D1D5DB] text-lg md:text-xl leading-relaxed">
          Share your amazing Web3 tools and utilities with the<br />
          Kaito community. Help others discover what you've built.
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#1A1F23] rounded-2xl p-8 border border-[#2A2F35] shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div>
              <label className="block text-[#33FFDD] text-sm font-semibold mb-2">
                Title
              </label>
              <input
                name="title"
                placeholder="Enter your tool's name"
                onChange={handleChange}
                className="w-full bg-[#0D0F13] border border-[#2A2F35] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#33FFDD] focus:ring-1 focus:ring-[#33FFDD] focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Description Field */}
            <div>
              <label className="block text-[#33FFDD] text-sm font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Describe what your tool does and how it helps the community"
                onChange={handleChange}
                rows="4"
                className="w-full bg-[#0D0F13] border border-[#2A2F35] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#33FFDD] focus:ring-1 focus:ring-[#33FFDD] focus:outline-none transition-colors resize-vertical"
                required
              />
            </div>

            {/* Link Field */}
            <div>
              <label className="block text-[#33FFDD] text-sm font-semibold mb-2">
                Link
              </label>
              <input
                name="link"
                type="url"
                placeholder="https://your-tool-website.com"
                onChange={handleChange}
                className="w-full bg-[#0D0F13] border border-[#2A2F35] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#33FFDD] focus:ring-1 focus:ring-[#33FFDD] focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Owner Field */}
            <div>
              <label className="block text-[#33FFDD] text-sm font-semibold mb-2">
                Owner
              </label>
              <input
                name="owner"
                placeholder="Your name or username"
                onChange={handleChange}
                className="w-full bg-[#0D0F13] border border-[#2A2F35] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#33FFDD] focus:ring-1 focus:ring-[#33FFDD] focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Image Field */}
            <div>
              <label className="block text-[#33FFDD] text-sm font-semibold mb-2">
                Image URL
              </label>
              <input
                name="image"
                type="url"
                placeholder="https://image-url.com/screenshot.png"
                onChange={handleChange}
                className="w-full bg-[#0D0F13] border border-[#2A2F35] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#33FFDD] focus:ring-1 focus:ring-[#33FFDD] focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#33FFDD] to-[#00E5FF] text-[#0D0F13] font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-[#33FFDD]/25 transform hover:scale-[1.02] transition-all duration-200"
              >
                Add to YappersHUB
              </button>
            </div>

            {/* Cancel/Back Button */}
            <div>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-full bg-transparent border border-[#2A2F35] text-[#D1D5DB] font-medium py-3 px-6 rounded-lg hover:border-[#33FFDD] hover:text-[#33FFDD] transition-colors"
              >
                Back to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateListing;