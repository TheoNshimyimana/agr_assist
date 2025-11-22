import React from "react";
import { Bug, Sprout, ShieldAlert, SprayCan } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "./Footer";

interface PestDisease {
  name: string;
  type: "pest" | "disease";
  severity: "low" | "medium" | "high";
  description: string;
  prevention: string[];
  treatment: string[];
  seasonality: string[];
}

const pestAndDiseasesData: PestDisease[] = [
  {
    name: "Aphids (Imibu y’Imboga)",
    type: "pest",
    severity: "medium",
    description:
      "Ni udukoko dukurura umutobe w’ibyatsi, tugatera ibibabi kuvangika no gukura nabi kw’ibimera.",
    prevention: [
      "Kurekura udukoko tw’abanyamumaro nk’udukobwa (ladybugs)",
      "Gusiga amavuta ya neem buri byumweru bibiri",
      "Gukoresha imiringoti yerekana urumuri (reflective mulches)",
    ],
    treatment: [
      "Gusiga umuti wa insecticidal soap (2 tbsp kuri 1 galon y’amazi)",
      "Gukoresha umuti wa pyrethrin",
      "Gukata ibice byafashwe cyane n’udukoko",
    ],
    seasonality: ["Itumba", "Icyi"],
  },
  {
    name: "Powdery Mildew (Uruhu rwera rw’icyatsi)",
    type: "disease",
    severity: "high",
    description:
      "Ni indwara iterwa n’agahumyo kerekana ifu yera ku bibabi, bigatera kwuma no kugwa.",
    prevention: [
      "Kugumana urwego rw’ubushuhe hagati ya 50-70%",
      "Gushyira ibimera ahabona izuba amasaha 6+ ku munsi",
      "Guhana intera hagati y’ibimera hagati ya 18-24 cm",
    ],
    treatment: [
      "Gusiga umuti wa potassium bicarbonate",
      "Gukoresha umuti wa sulfur",
      "Gukuraho ibibabi byanduye ako kanya",
    ],
    seasonality: ["Igihe cy’ubushuhe bwinshi", "Itumba"],
  },
  {
    name: "Tomato Blight (Indwara y’ibitoki bya Tumatini)",
    type: "disease",
    severity: "high",
    description:
      "Ni indwara yandura yihuta iterwa n’agahumyo, itera ibibabi kugira amabara n’imbuto kubora.",
    prevention: [
      "Guhindura aho uhinga buri mwaka",
      "Gukoresha sisiteme yo kuhira ikoresheje drip irrigation",
      "Guhitamo imbuto zirwanya indwara ya blight",
    ],
    treatment: [
      "Gusiga umuti wa copper fungicide buri cyumweru",
      "Gusenya ibimera byanduye",
      "Gushyushya ubutaka nyuma y’umusaruro (solarization)",
    ],
    seasonality: ["Igihe cy’imvura", "Icyi"],
  },
  {
    name: "Cassava Mosaic Disease (CMD)",
    type: "disease",
    severity: "high",
    description:
      "Indwara iterwa na virus yica amashami n’ibibabi bya cassava, bigabanya umusaruro cyane.",
    prevention: [
      "Guhitamo imbuto zifite ubudahangarwa kuri CMD",
      "Kwirinda gukoresha imbuto zanduye",
      "Gukurikirana neza ibimera bishya byakoreshejwe",
    ],
    treatment: [
      "Gusenya ibimera byanduye",
      "Guhana imbuto zifite ubudahangarwa",
      "Gukoresha uburyo bwo kwirinda gukwirakwiza virus",
    ],
    seasonality: ["Itumba", "Icyi"],
  },
  {
    name: "Cassava Bacterial Blight (CBB)",
    type: "disease",
    severity: "high",
    description:
      "Indwara iterwa n’udukoko twa bacteriya twangiza ibibabi n’amashami ya cassava.",
    prevention: [
      "Guhitamo imbuto zifite ubudahangarwa kuri CBB",
      "Guhindura aho uhinga buri mwaka",
      "Kwirinda amazi yanduye ava ku bimera byanduye",
    ],
    treatment: [
      "Gusenya ibimera byanduye",
      "Gukoresha bactericide zemewe n’inzego z’ubuhinzi",
      "Gukurikiza amahame y’isuku mu mirima",
    ],
    seasonality: ["Igihe cy’imvura", "Itumba"],
  },
  {
    name: "Late Blight on Potatoes (Indwara ya Late Blight ku birayi)",
    type: "disease",
    severity: "high",
    description:
      "Ni indwara yihuta iterwa n’agahumyo, igatera ibibabi gucika no gutakaza imbuto.",
    prevention: [
      "Guhitamo imbuto zifite ubudahangarwa",
      "Gukoresha sisiteme ya drip irrigation",
      "Guhana intera ihagije hagati y’ibimera",
    ],
    treatment: [
      "Gusiga umuti wa fungicide",
      "Gusenya ibimera byanduye",
      "Guhindura imbuto buri mwaka",
    ],
    seasonality: ["Igihe cy’imvura", "Itumba"],
  },
];

const PestAndAlert: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Header Section */}
          <motion.header
            className="text-center space-y-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-md border border-green-100">
              <Bug className="w-8 h-8 text-amber-600" />
              <h1 className="text-4xl font-bold text-green-700 tracking-tight">
                Ubujyanama ku Indwara n'Ibyonnyi 🌿
              </h1>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Menya uburyo bwo kurwanya indwara n’imibu mu buhinzi bwawe
              hifashishijwe ubumenyi n’ikoranabuhanga. Twagufasha kubungabunga
              umusaruro wawe neza.
            </p>
          </motion.header>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {pestAndDiseasesData.map((item, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-green-100 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Card Header */}
                <div
                  className={`p-5 border-b flex items-center justify-between ${
                    item.type === "pest" ? "bg-amber-50" : "bg-blue-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        item.type === "pest" ? "bg-amber-100" : "bg-blue-100"
                      }`}
                    >
                      {item.type === "pest" ? (
                        <Bug className="w-6 h-6 text-amber-600" />
                      ) : (
                        <ShieldAlert className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                  </div>
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      item.severity === "high"
                        ? "bg-red-100 text-red-700"
                        : item.severity === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.severity === "high"
                      ? "HEAVY"
                      : item.severity === "medium"
                      ? "MODERATE"
                      : "LOW"}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Seasonality */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-green-700 uppercase mb-2">
                      <Sprout className="w-4 h-4" />
                      Igihe cyo kugaragaramo
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {item.seasonality.map((season, i) => (
                        <span
                          key={i}
                          className="px-4 py-1 rounded-full bg-emerald-100 text-green-800 text-sm"
                        >
                          {season}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Prevention */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-700 uppercase mb-2">
                      <ShieldAlert className="w-4 h-4" />
                      Uburyo bwo Kuburinda
                    </h3>
                    <ul className="space-y-2 pl-4">
                      {item.prevention.map((step, i) => (
                        <li
                          key={i}
                          className="flex items-start before:content-['✓'] before:text-green-500 before:mr-2 text-gray-600 text-sm"
                        >
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Treatment */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-rose-600 uppercase mb-2">
                      <SprayCan className="w-4 h-4" />
                      Uburyo bwo Kuvura
                    </h3>
                    <ul className="space-y-2 pl-4">
                      {item.treatment.map((step, i) => (
                        <li
                          key={i}
                          className="flex items-start before:content-['•'] before:text-rose-500 before:mr-3 text-gray-600 text-sm"
                        >
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PestAndAlert;
