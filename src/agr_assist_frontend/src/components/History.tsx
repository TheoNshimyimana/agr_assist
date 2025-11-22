import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Footer from "./Footer";

interface Activity {
  id: number;
  izina: string;
  umunsi: string;
  akarere: string;
  umurenge: string;
  akagari: string;
  ibisobanuro: string;
}

const activities: Activity[] = [
  {
    id: 1,
    izina: "Gusura abahinzi b’ibirayi",
    umunsi: "2025-02-10",
    akarere: "Musanze",
    umurenge: "Kinigi",
    akagari: "Kabeza",
    ibisobanuro: "Gusuzuma uburyo AI ifasha mu kugenzura indwara z’ibirayi.",
  },
  {
    id: 2,
    izina: "Amahugurwa ku ikoreshwa rya AI mu buhinzi",
    umunsi: "2025-07-14",
    akarere: "Rwamagana",
    umurenge: "Fumbwe",
    akagari: "Nyagasambu",
    ibisobanuro: "Amahugurwa y’abahinzi ku buryo bwo gukoresha AGRI-Assist.",
  },
  {
    id: 3,
    izina: "Gusura abahinzi b'ibitunguru",
    umunsi: "2025-10-20",
    akarere: "Nyanza",
    umurenge: "Gatagara",
    akagari: "Gatagara",
    ibisobanuro:
      "Twakoresheje amakuru twahawe na sisitemu dutangiza ubuhinzi bw'ibitunguru.",
  },
  {
    id: 4,
    izina: "Twatangije ubuhinzi bw'imyumbati",
    umunsi: "2025-02-25",
    akarere: "Nyanza",
    umurenge: "Gatagara",
    akagari: "Gatagara",
    ibisobanuro:
      "Twakoresheje amakuru twahawe na sisitemu dutangiza ubuhinzi bw'imyumbati.",
  },
  {
    id: 5,
    izina: "Gukusanya amakuru y’ikirere",
    umunsi: "2025-03-01",
    akarere: "Rubavu",
    umurenge: "Nyundo",
    akagari: "Busasamana",
    ibisobanuro: "Kwinjiza amakuru y’imvura muri sisitemu y’ubuhinzi.",
  },
  {
    id: 6,
    izina: "Gusura abahinzi b’ibigori",
    umunsi: "2025-03-05",
    akarere: "Kayonza",
    umurenge: "Rukara",
    akagari: "Nyagatovu",
    ibisobanuro: "Gusuzuma uko bigori bihagaze hifashishijwe drone.",
  },
  {
    id: 7,
    izina: "Gukora igenzura ry’imirima",
    umunsi: "2025-04-02",
    akarere: "Gakenke",
    umurenge: "Busengo",
    akagari: "Cyabingo",
    ibisobanuro: "Gusuzuma ko imbuto z'imyumbati zifite ubuzima bwiza.",
  },
  {
    id: 8,
    izina: "Gutanga raporo y’imihindagurikire y’ikirere",
    umunsi: "2025-04-15",
    akarere: "Rutsiro",
    umurenge: "Mushonyi",
    akagari: "Gihango",
    ibisobanuro:
      "Gukoresha amakuru twahawe na sisitemu mu gutanga inama ku bijyanye n’ikirere.",
  },
  {
    id: 9,
    izina: "Gusura abahinzi b’ibishyimbo",
    umunsi: "2025-04-26",
    akarere: "Ngororero",
    umurenge: "Kavumu",
    akagari: "Gatumba",
    ibisobanuro: "Kugenzura uko ibishyimbo bihagaze mu gihe cy’imvura.",
  },
  {
    id: 10,
    izina: "Gusura abahinzi b’imyumbati",
    umunsi: "2025-04-26",
    akarere: "Ngororero",
    umurenge: "Kavumu",
    akagari: "Gatumba",
    ibisobanuro: "Kugenzura uko imyumbati imeze mu gihe cy’imvura.",
  },
  {
    id: 11,
    izina: "Kwakira abahinzi bashya mu mushinga",
    umunsi: "2025-05-04",
    akarere: "Kicukiro",
    umurenge: "Gahanga",
    akagari: "Gahanga",
    ibisobanuro: "Guhugura abakozi bashya ku mikorere ya sisitemu.",
  },
];

const History = () => {
  const [search, setSearch] = useState("");

  const filteredActivities = activities.filter(
    (a) =>
      a.izina.toLowerCase().includes(search.toLowerCase()) ||
      a.akarere.toLowerCase().includes(search.toLowerCase()) ||
      a.umurenge.toLowerCase().includes(search.toLowerCase()) ||
      a.akagari.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <motion.div
        className="p-8 bg-gray-50 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Ibyakozwe mu mushinga wa AGRI-Assist
        </h1>

        <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Search className="text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Shakisha igikorwa cyangwa aho cyakorewe..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
              <thead className="bg-green-700 text-white text-left">
                <tr>
                  <th className="px-3 py-2">#</th>
                  <th className="px-3 py-2">Izina ry’igikorwa</th>
                  <th className="px-3 py-2">Itariki</th>
                  <th className="px-3 py-2">Akarere</th>
                  <th className="px-3 py-2">Umurenge</th>
                  <th className="px-3 py-2">Akagari</th>
                  <th className="px-3 py-2">Ibisobanuro</th>
                </tr>
              </thead>
              <tbody>
                {filteredActivities.map((a) => (
                  <tr
                    key={a.id}
                    className="hover:bg-green-50 transition duration-150 border-t"
                  >
                    <td className="px-3 py-2">{a.id}</td>
                    <td className="px-3 py-2 font-semibold text-gray-700">
                      {a.izina}
                    </td>
                    <td className="px-3 py-2">{a.umunsi}</td>
                    <td className="px-3 py-2">{a.akarere}</td>
                    <td className="px-3 py-2">{a.umurenge}</td>
                    <td className="px-3 py-2">{a.akagari}</td>
                    <td className="px-3 py-2 text-gray-600">{a.ibisobanuro}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredActivities.length === 0 && (
              <p className="text-center text-gray-500 mt-4">
                Nta gikorwa cyabonetse.
              </p>
            )}
          </div>
        </div>
      </motion.div>
      <Footer  />
    </>
  );
};

export default History;
