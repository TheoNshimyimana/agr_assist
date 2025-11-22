import React, { useState, useEffect } from "react";
import {
  Droplet,
  Leaf,
  Sun,
  Thermometer,
  Zap,
  CloudRain,
  ThermometerSun,
  Waves,
  Layers,
} from "lucide-react";
import Footer from "./Footer";

interface SoilData {
  ph: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  organicMatter: number;
  moisture: number;
  temperature: number;
  salinity: number;
  compaction: number;
  aeration: number;
  microbialActivity: number;
}

const SoilHealthyAnalysis: React.FC = () => {
  const [soilData, setSoilData] = useState<SoilData | null>(null);

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setSoilData({
        ph: 6.5,
        nitrogen: 0.25,
        phosphorus: 0.15,
        potassium: 0.2,
        organicMatter: 2.5,
        moisture: 45,
        temperature: 22,
        salinity: 1.2,
        compaction: 30,
        aeration: 60,
        microbialActivity: 80,
      });
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const optimalRanges = {
    ph: { min: 6.0, max: 7.0 },
    nitrogen: { min: 0.2, max: 0.3 },
    phosphorus: { min: 0.1, max: 0.2 },
    potassium: { min: 0.15, max: 0.25 },
    organicMatter: { min: 2.0, max: 3.0 },
    moisture: { min: 30, max: 60 },
    temperature: { min: 18, max: 25 },
    salinity: { min: 0.5, max: 1.5 },
    compaction: { min: 20, max: 40 },
    aeration: { min: 50, max: 70 },
    microbialActivity: { min: 60, max: 90 },
  };

  const formatKey = (key: string) => {
    const map: { [key: string]: string } = {
      ph: "pH",
      nitrogen: "Azote",
      phosphorus: "Phosphore",
      potassium: "Potassium",
      organicMatter: "Ibinyabuzima",
      moisture: "Ubusitani",
      temperature: "Ubushyuhe",
      salinity: "Salinity",
      compaction: "Uburyo bw’Ubuhagarike",
      aeration: "Ikirere",
      microbialActivity: "Ibikorwa bya Mikorobi",
    };
    return map[key] || key;
  };

  const getUnit = (key: string) => {
    if (key === "ph") return "pH";
    if (key === "temperature") return "°C";
    if (key === "salinity") return "dS/m";
    return "%";
  };

  const getProgressColor = (value: number, min: number, max: number) => {
    if (value < min) return "bg-red-500";
    if (value > max) return "bg-yellow-500";
    return "bg-green-500";
  };

  const iconMap: { [key: string]: JSX.Element } = {
    ph: <Droplet className="w-5 h-5 text-blue-500" />,
    nitrogen: <Zap className="w-5 h-5 text-purple-500" />,
    phosphorus: <Sun className="w-5 h-5 text-orange-500" />,
    potassium: <Thermometer className="w-5 h-5 text-yellow-500" />,
    organicMatter: <Leaf className="w-5 h-5 text-green-500" />,
    moisture: <CloudRain className="w-5 h-5 text-blue-400" />,
    temperature: <ThermometerSun className="w-5 h-5 text-red-500" />,
    salinity: <Waves className="w-5 h-5 text-teal-500" />,
    compaction: <Layers className="w-5 h-5 text-gray-600" />,
    aeration: <Layers className="w-5 h-5 text-gray-600" />,
    microbialActivity: <Layers className="w-5 h-5 text-gray-600" />,
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white p-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Isesengura ry’Ubuzima bw’Ubutaka
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Isesengura ry’ubutaka rigenzura ibipimo by’ingenzi nk’umunyu wa pH,
            amazi, intungamubiri, n’ibikorwa bya mikorobi kugirango hamenyekane
            imikorere y’ubutaka n’iterambere ry’ubuhinzi.
          </p>
        </div>

        {!soilData ? (
          <div className="animate-pulse space-y-6">
            <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-40 bg-gray-100 rounded-xl" />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.keys(optimalRanges).map((key) => {
              const value = soilData[key as keyof SoilData] as number;
              const { min, max } =
                optimalRanges[key as keyof typeof optimalRanges];
              const progressPercent = Math.min(
                100,
                ((value - min) / (max - min)) * 100
              );

              return (
                <div
                  key={key}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-2 mb-3 text-lg font-semibold">
                    {iconMap[key]}
                    {formatKey(key)}
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-3">
                    {value}
                    <span className="text-gray-500 text-lg ml-2">
                      {getUnit(key)}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`${getProgressColor(
                        value,
                        min,
                        max
                      )} h-full rounded-full`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Min ({min})</span>
                    <span>Optimal</span>
                    <span>Max ({max})</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SoilHealthyAnalysis;
