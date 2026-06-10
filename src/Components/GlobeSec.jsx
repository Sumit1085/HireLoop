import Image from "next/image";
import { Briefcase, ChartColumn, Magnifier, Star } from "@gravity-ui/icons";

const stats = [
  {
    icon: <Briefcase className="w-5 h-5 text-gray-400" />,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: <ChartColumn className="w-5 h-5 text-gray-400" />,
    value: "12K",
    label: "Companies",
  },
  {
    icon: <Magnifier className="w-5 h-5 text-gray-400" />,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: <Star className="w-5 h-5 text-gray-400" />,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

export default function GlobeSection() {
  return (
    <section className="relative w-full bg-[#0a0a0f] overflow-hidden min-h-[560px] flex flex-col items-center justify-end pb-12">

      {/* Globe Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="relative w-full max-w-3xl aspect-square -mt-[10%]">
          <Image
            src="/globe.png"
            alt="Globe background"
            fill
            className="object-contain object-center opacity-90"
            priority
          />
        </div>
      </div>

      {/* Headline */}
      <div className="relative z-10 text-center mb-10 px-4">
        <p className="text-white text-lg sm:text-xl md:text-2xl font-light leading-snug drop-shadow-lg">
          Assisting over{" "}
          <span className="font-bold text-white">15,000 job seekers</span>
          <br />
          find their dream positions.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="relative z-10 w-full max-w-5xl px-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#111118]/90 border border-white/8 rounded-2xl p-5 flex flex-col gap-4 backdrop-blur-sm hover:border-white/15 transition-colors"
          >
            <div>{stat.icon}</div>
            <div>
              <p className="text-white text-3xl sm:text-4xl font-bold tracking-tight">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}