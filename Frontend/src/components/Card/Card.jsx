export default function Card({ title, description, author, image, link }) {
  return (
    <div className="max-w-sm bg-[#0D0F13] border border-[#1A1F23] rounded-lg shadow-md overflow-hidden hover:border-[#33FFDD] transition-all">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-5 font-sans">
        <h5 className="mb-3 text-2xl font-bold tracking-wide text-white">{title}</h5>
        <p className="mb-4 text-[#D1D5DB] text-sm font-medium leading-relaxed">{description}</p>
        <p className="text-[#A6F4C5] text-sm font-semibold mb-4">Built by: {author}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-bold text-[#0D0F13] bg-[#33FFDD] rounded-md hover:bg-[#2ee0c5] transition"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
}
