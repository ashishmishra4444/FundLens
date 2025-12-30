import React from "react";
import { TrendingDown, Flame, Clock } from "lucide-react";

const insights = [
  {
    icon: Clock,
    title: "Delay Cost",
    value: "30–40%",
    description:
      "Starting your SIP just 5 years late can reduce your final wealth by up to 40% due to lost compounding.",
  },
  {
    icon: Flame,
    title: "Inflation Reality",
    value: "6–7%",
    description:
      "Inflation silently eats your returns. ₹1 today won’t have the same value tomorrow.",
  },
  {
    icon: TrendingDown,
    title: "Missed SIP Impact",
    value: "Breaks Growth",
    description:
      "Skipping SIPs interrupts compounding momentum and reduces long‑term gains.",
  },
];

const Insights = () => {
  return (
    <section className="relative w-full overflow-hidden py-20">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('/images/insight-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why SIP Needs Discipline
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Small decisions today can create massive differences in long‑term
              wealth. FundLens helps you see those impacts clearly.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
                    group
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    p-6
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                  "
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500/10 mb-4">
                    <Icon className="h-6 w-6 text-teal-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-2xl font-bold text-teal-400">
                    {item.value}
                  </p>

                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-gray-300 text-sm sm:text-base">
              Understand your money before you invest.
            </p>
            <button
              className="
                mt-6
                inline-flex items-center justify-center
                rounded-full
                bg-linear-to-r from-teal-500/80 to-cyan-500
                px-8 py-3
                text-sm font-semibold text-white
                hover:opacity-85
                transition
              "
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              Get Started →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Insights;
