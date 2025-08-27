import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Card from "../Card/Card"

function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <>
      <section className="bg-[#0D0F13] min-h-screen px-6 py-16">
        {/* Hero Text */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-[#1A1F23] text-[#33FFDD] text-sm font-medium px-4 py-1 rounded-full mb-6">
            Built for the Kaito Community
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Welcome to Yappers<span className="text-[#33FFDD]">HUB</span>
          </h1>
          <p className="text-[#D1D5DB] text-lg md:text-xl leading-relaxed">
            Discover all the essential tools and utilities curated<br />
            for your Kaito journey in one place. Yappers Hub makes it<br />
            easy to explore and navigate everything Web3 with ease.
          </p>
        </div>

        {/* Tools Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <Card
              title={listing.title}
              description={listing.description}
              author={listing.author}
              image={listing.image}
              link={listing.link}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
