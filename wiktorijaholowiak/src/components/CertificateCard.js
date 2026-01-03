export default function CertificateCard({
  title,
  provider,
  duration,
  date,
  image,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-poppins font-semibold">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{provider}</p>

        <div className="flex justify-between mt-4 text-sm">
          <span>⏱ {duration}</span>
          <span>📅 {date}</span>
        </div>
      </div>
    </div>
  );
}
