import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // initialize with empty strings to avoid uncontrolled → controlled warning
  const [listing, setListing] = useState({
    title: "",
    description: "",
    link: "",
    owner: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch existing listing
  useEffect(() => {
    fetch(`http://localhost:3000/api/listings/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Failed to fetch the data for editing the listing", err);
        setError("Failed to load listing data");
        setLoading(false);
      });
  }, [id]);

  // handle input change
  const handleChange = (e) => {
    setListing({ ...listing, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(`http://localhost:3000/api/listings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(listing),
      });
      
      if (res.ok) {
        console.log("Listing updated");
        navigate(`/listings/${id}`);
      } else {
        console.log("Failed to update listing");
        setError("Failed to update listing");
      }
    } catch (err) {
      console.error("Error updating:", err);
      setError("Error updating listing");
    }
  };

  if (loading) {
    return (
      <section className="bg-[#0D0F13] min-h-screen px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-[#33FFDD] text-xl">Loading...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#0D0F13] min-h-screen px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-red-400 text-xl mb-4">{error}</div>
          <button
            onClick={() => navigate("/")}
            className="bg-[#33FFDD] text-[#0D0F13] font-bold py-2 px-4 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0D0F13] min-h-screen px-6 py-16">
      {/* Hero Text */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-block bg-[#1A1F23] text-[#33FFDD] text-sm font-medium px-4 py-1 rounded-full mb-6">
          Edit Listing
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Update Your <span className="text-[#33FFDD]">Tool</span>
        </h1>
        <p className="text-[#D1D5DB] text-lg md:text-xl leading-relaxed">
          Make changes to your listing to keep the Kaito<br />
          community updated with the latest information.
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
                value={listing.title}
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
                value={listing.description}
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
                value={listing.link}
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
                value={listing.owner}
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
                value={listing.image}
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
                Update Listing
              </button>
            </div>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => navigate(`/listings/${id}`)}
                className="bg-transparent border border-[#2A2F35] text-[#D1D5DB] font-medium py-3 px-6 rounded-lg hover:border-[#33FFDD] hover:text-[#33FFDD] transition-colors"
              >
                View Listing
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="bg-transparent border border-[#2A2F35] text-[#D1D5DB] font-medium py-3 px-6 rounded-lg hover:border-[#33FFDD] hover:text-[#33FFDD] transition-colors"
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

export default EditListing;