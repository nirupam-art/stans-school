"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Users, Trophy, School } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: 100,
    suffix: "%",
    title: "Board Results",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    title: "Students",
  },
  {
    icon: School,
    value: 15,
    suffix: "+",
    title: "Years of Excellence",
  },
  {
    icon: Trophy,
    value: 35,
    suffix: "+",
    title: "Awards & Achievements",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            Excellence in Numbers
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Our Achievements
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg border border-gray-200 p-10 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-yellow-500"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-6 group-hover:rotate-6 transition">

                  <Icon
                    size={38}
                    className="text-yellow-600"
                  />

                </div>

                <h3 className="text-5xl font-extrabold text-gray-900">

                  {inView ? (
                    <CountUp
                      end={item.value}
                      duration={2}
                      suffix={item.suffix}
                    />
                  ) : (
                    0
                  )}

                </h3>

                <p className="mt-4 text-gray-600 text-lg">
                  {item.title}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}