import ManLifting from "../assets/ManLifting.png";
import Hex from "../assets/Hex.png";
import Countdown  from "./Countdown";

export default function Hero() {
  return (
    <div className="flex flex-column relative h-1/2 bg-black">
      {/* Main Image */}
      <img
        src={ManLifting}
        alt="Man Lifting Weights"
        className=" left-0 top-0 h-full object-cover"
        style={{ width: "auto" }}
      />

      {/* Hex Image */}
      <img
        src={Hex}
        alt="Hex Pattern"
        className="absolute bottom-0 right-0 h-3/4 w-auto"
      />
      
      {/* Hero Content */}

      
      <div className="absolute top-12 left-8 text-white">
        <h2 className="text-xl md:text-3xl font-semibold leading-tight">
          STRENGTH IN COMMUNITY,<br />
          POWER IN PROGRESS
        </h2>
      </div>

      {/* Join UCSC Barbell */}
      <div
        className="absolute top-12 text-white text-left"
        style={{
          left: "50%", // Start the element at the midpoint of the hero section
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          JOIN UCSC BARBELL
        </h1>
        <div className="mt-16">
          <Countdown />
        </div>
      </div>

      
    </div>
  );
}