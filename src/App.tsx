import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import logo from "figma:asset/ea79cb5c0fd9b0706afeb234030c764d06c99642.png";

export default function App() {
  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#F9F6F0" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://www.livcollections.com/wp-content/uploads/2023/11/Exterior-View-1-Final-Issue-2.jpg"
          alt="Liv Collection Hospitality"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F6F0]/40 via-[#F9F6F0]/30 to-[#F9F6F0]/40"></div>
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20">
        <img
          src={logo}
          alt="Liv Collection Logo"
          className="w-24 md:w-40"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-12 md:py-20">
        <div
          className="backdrop-blur-sm rounded-xl px-6 py-8 md:px-12 md:py-12 shadow-2xl text-center"
          style={{ backgroundColor: "#F9F6F0" }}
        >
          <h1
            className="mb-5 md:mb-6"
            style={{
              color: "#3E617F",
              fontFamily: "'Love', cursive",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: "1.3",
            }}
          >
            ברוכים הבאים בעלי הדירות של רשת Live Collection
          </h1>

          <p
            className="mb-6 md:mb-8 max-w-2xl mx-auto"
            style={{
              color: "#3E617F",
              fontFamily: "Heebo, sans-serif",
              fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
              lineHeight: "1.7",
              fontWeight: "400",
            }}
          >
            הגעתם לבית החדש שלכם בעולם האירוח, כאן תוכלו להזמין
            חופשות במתחמי הרשת, להנות מהנחה קבועה ולהוסיף חוויות
            מיוחדות כמו סיור מאורגן לבעלי דירות או שירותי אירוח
            נוספים.
          </p>

          <a
            href="https://liv.reserve-online.net/about"
            className="inline-block px-10 py-4 md:px-12 md:py-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{
              backgroundColor: "#D46737",
              color: "#F9F6F0",
              fontFamily: "Heebo, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: "500",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(212, 103, 55, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#C15629";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(212, 103, 55, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#D46737";
              e.currentTarget.style.boxShadow =
                "0 4px 14px rgba(212, 103, 55, 0.3)";
            }}
          >
            לבחירת בית מלון מהרשת
          </a>

          {/* Decorative Element */}
          <div className="mt-10 md:mt-12 flex justify-center items-center gap-3">
            <div
              className="h-px w-12"
              style={{
                backgroundColor: "#D46737",
                opacity: 0.5,
              }}
            ></div>
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#D46737" }}
            ></div>
            <div
              className="h-px w-12"
              style={{
                backgroundColor: "#D46737",
                opacity: 0.5,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}