import { FC } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

import Rab from "../images/rab.png"
import Gilbert from "../images/gilbert.png"
import Gatagara from "../images/gatagara.jpeg"
import Down from "../images/welders.jpg"
import IribaTech from "../images/iribatech.jpeg"
import Claude from "../images/claude.jpg"

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website?: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Ikigo cy’Igihugu gishinzwe Ubuhinzi (RAB)",
    logo: Rab,
    description:
      "Dufatanya mu gutunganya Imbuto nshya y'amatunda n'ibinyomoro, ubushakashatsi n’ubukangurambaga bugamije guteza imbere ubuhinzi no gutanga amahugurwa ku buhinzi bugezweho.",
    website: "https://www.rab.gov.rw/",
  },
  {
    id: 2,
    name: "Logical Welding Solution Ltd",
    logo: Down,
    description:
      "Badukorera Ibikoresho Byifashishwa mu buhinzi bifasha mu gukusanya no gusesengura amakuru y’ubutaka n’ibihingwa.",
    website: "https://www.minagri.gov.rw/",
  },
  {
    id: 3,
    name: "HVP GATAGARA TSS",
    logo: Gatagara,
    description: "Badufasha kugura umusaruro w'imyumbati w'abahinzi dukorana ",
    website: "https://www.ictrwanda.org/",
  },
  {
    id: 4,
    name: "CLAUDE TECHN",
    logo: Claude,
    description:
      "Bahaye abahinzi dukorana Telephonne zigendanwa zifashishwa mu gutanga no kwakira amakuru y’ubuhinzi bakazazishyura make make.",
    website: "https://www.wfp.org/",
  },
  {
    id: 5,
    name: "IRIBATECH Ltd",
    logo: IribaTech,
    description: "Badufasha kubika amakuru yavuye muri sisitemu yacu",
    website: "https://www.fao.org/",
  },
  {
    id: 6,
    name: "UWAYEZU GILBERT",
    logo: Gilbert,
    description:
      "Umuhuzabikorwa w'abahinzi dukorana",
    website: "https://codeguru.rw/",
  },
];

const Partners: FC = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gray-50 py-20 px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Abafatanyabikorwa bacu
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dukorana n’amashyirahamwe yizewe n’abanyamahanga bafite intego yo
            guteza imbere ubuhinzi bushingiye ku makuru, ubushakashatsi
            n’ikoranabuhanga.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: "spring",
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-32 object-contain mb-5"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {partner.description}
              </p>
              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 text-sm font-medium transition"
                >
                  Sura urubuga →
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-500 text-sm italic">
            Hamwe, turubaka ubuhinzi burambye, bunoze kandi bushingiye ku makuru
            🌱
          </p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Partners;
