import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cabbage from "../images/cabages.jpeg";
import Cassava from "../images/Cassava.webp";
import IrishPotatoes from "../images/ibirayi.jpg";
import Beans from "../images/ibishyimbo.jpeg";
import Imiteja from "../images/imiteja.png";
import Mushroom from "../images/mushroom.jpg";
import Onions from "../images/onions.jpg";
import Maize from "../images/maizes.jpeg";
import Wheat from "../images/wheat.jpeg";
import Footer from "./Footer";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  summary: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Uko Ikoranabuhanga rya AI Rifasha mu Kubungabunga Umusaruro w'Amashu",
    date: "10 Ugushyingo 2025",
    author: "Agri-Assist Field Team",
    image: Cabbage,
    summary:
      "Kabeji ni kimwe mu bihingwa byinjiriza amafaranga menshi mu Rwanda, ariko ihura n’ibibazo by’indwara n’udukoko. Agri-Assist ifasha abahinzi gukurikirana uko ibihingwa bihagaze no gufata ibyemezo bishingiye ku makuru yizewe.",
    content:
      "Agri-Assist ifasha abahinzi b’amashu gukurikirana imiterere y’ubutaka, ubushyuhe n’ubushuhe hifashishijwe AI. Iyo amakuru agaragaje indwara cyangwa ubushuhe budasanzwe, sisitemu itanga impuruza hakiri kare. Ibi bifasha abahinzi kugabanya igihombo no kongera umusaruro ku rugero rwa 30% mu duce twa Musanze na Rulindo. Ubu buryo bwifashisha sensori n’imashini zisesengura amakuru akoreshwa mu gufata ibyemezo ku gihe nyacyo.",
  },
  {
    id: 2,
    title: "Uburyo Ikoranabuhanga Riteza Imbere Ubuhinzi bw’Imyumbati",
    date: "25 Ukwakira 2025",
    author: "Agri-Assist Research",
    image: Cassava,
    summary:
      "Imyumbati ni igihingwa cy’ingenzi mu kurwanya inzara. Agri-Assist ikoreshwa mu kumenya uko ubutaka buhagaze no gukurikirana uko imyumbati ikura.",
    content:
      "Imyumbati ikenerwa mu duce tw’uburasirazuba n’amajyepfo y’u Rwanda. Agri-Assist ikoreshwa mu gukurikirana ibipimo by’ubutaka nka pH, NPK, n’ubushuhe kugira ngo hamenyekane igihe cyiza cyo guteraho no gusarura. Iyo sisitemu ibonye ibibazo nk’indwara ya mosaic, itanga inama zo gukoresha imbuto zizewe n’uburyo bwo kuvomerera hakurikijwe ikirere.",
  },
  {
    id: 3,
    title: "Uko AI Ifasha mu Guhangana n’Indwara z’Ibirayi",
    date: "16 Ukwakira 2025",
    author: "Agri-Assist Weather Unit",
    image: IrishPotatoes,
    summary:
      "Ibirayi bihura n’indwara ziterwa n’imihindagurikire y’ikirere. Agri-Assist ifasha kumenya imiterere y’ubutaka no gusuzuma indwara hakiri kare.",
    content:
      "Agri-Assist ikoresha ikoranabuhanga rya AI na drone mu kumenya indwara z’ibirayi zishobora kwibasira imyaka hakiri kare. Amakuru ava mu mashusho y’ikirere n’ubutaka asuzumwa mu buryo bw’ikoranabuhanga kugira ngo hamenyekane niba imyaka ifite ibibazo by’uburwayi cyangwa ubushuhe budasanzwe. Ubu buryo bwahinduye uburyo bwo gucunga ibirayi mu karere ka Musanze, aho umusaruro wiyongereyeho 40%.",
  },
  {
    id: 4,
    title: "Guhanga Udushya mu Buhinzi bw’Ibishyimbo hifashishijwe AI",
    date: "3 Ukwakira 2025",
    author: "Agri-Assist Agronomy Team",
    image: Beans,
    summary:
      "Ibishyimbo ni isoko y’intungamubiri kandi bifasha mu kubungabunga ubutaka. Agri-Assist ikurikirana uko bikura, igatanga inama ku mvura n’ubutaka.",
    content:
      "AI ikoreshwa mu gukurikirana uko ibishyimbo bikura hakoreshejwe amakuru y’ubutaka n’imvura. Sisitemu isuzuma igihe cyiza cyo guteraho, kuvomerera, no gusarura hashingiwe ku makuru y’ikirere. Ibi bifasha abahinzi kugabanya igihombo no kubyaza umusaruro ubutaka neza.",
  },
  {
    id: 5,
    title: "Kugenzura Umusaruro w’Imiteja hifashishijwe Agri-Assist",
    date: "20 Nzeri 2025",
    author: "Agri-Assist Field Agents",
    image: Imiteja,
    summary:
      "Imiteja ikenera ubwitabire bw’abahinzi mu gihe cyose ikura. Agri-Assist ifasha kubona amakuru y’ikirere no kumenya igihe cyiza cyo gusarura.",
    content:
      "Agri-Assist ifasha gukurikirana uko imiteja ikura mu buryo buhoraho. Amakuru y’ubushuhe n’imvura yoherezwa kuri telefoni y’umuhinzi kugira ngo amenye igihe nyacyo cyo kuvomerera. Ibi byatumye abahinzi bo mu Karere ka Huye bagabanya igihombo cyaterwaga n’isarura ritateguwe ku gihe.",
  },
  {
    id: 6,
    title: "Ibinyunguruzo: Ubuhinzi bushya bufasha urubyiruko kubona akazi",
    date: "10 Nzeri 2025",
    author: "Agri-Assist Innovation Team",
    image: Mushroom,
    summary:
      "Ubuhinzi bw’ibinyunguruzo burimo gukura cyane mu Rwanda. Agri-Assist itanga ubujyanama ku buryo bwo kugenzura ubushyuhe n’ubushuhe.",
    content:
      "Urubyiruko rwinshi rurimo kwitabira ubuhinzi bw’ibinyunguruzo kuko butangiza ibidukikije kandi bukenera ubushobozi buke. Agri-Assist ikurikirana ibipimo by’ubushuhe n’ubushyuhe kugira ngo bikomeze gukura neza. Ubu buryo bwatumye umusaruro wiyongera kandi bugabanya igihombo giterwa n’indwara.",
  },
  {
    id: 7,
    title: "AI mu Gukurikirana Ibitunguru: Uburyo bushya bwo Kongera Umusaruro",
    date: "28 Kanama 2025",
    author: "Agri-Assist Data Team",
    image: Onions,
    summary:
      "AI ikoreshwa mu kumenya igihe cyiza cyo guteraho ibitunguru no gutegura amasoko y’ibiribwa.",
    content:
      "Agri-Assist ifasha kumenya igihe cyiza cyo guteraho ibitunguru, kugenzura ikirere, no gutegura amasoko. Ibi bituma abahinzi babasha gutegura umusaruro ujyanye n’isoko kandi bakirinda igihombo giterwa n’ubwinshi bw’ibiribwa mu gihe kimwe.",
  },
  {
    id: 8,
    title: "Gukoresha AI mu Buhinzi bw’Ibigori: Inzira y’Ejo hazaza",
    date: "12 Kanama 2025",
    author: "Agri-Assist Crop Unit",
    image: Maize,
    summary:
      "Ibigori ni igihingwa cy’ingenzi mu Rwanda. Agri-Assist ifasha kumenya uko ubutaka n’imvura bigira uruhare mu kongera umusaruro.",
    content:
      "AI ikoreshwa mu gukurikirana uko ibigori bikura hakoreshejwe amakuru y’ubutaka, ikirere, n’ubushyuhe. Abahinzi bahabwa inama ku gihe cyo guteraho, kuvomerera, n’isarura hashingiwe ku makuru y’ikoranabuhanga. Ibi byatumye mu karere ka Nyagatare umusaruro wiyongeraho 25%.",
  },
  {
    id: 9,
    title: "Ubuhinzi bw’Ingano Bukoresha AI mu Kunoza Umusaruro",
    date: "3 Kanama 2025",
    author: "Agri-Assist Smart Farming Unit",
    image: Wheat,
    summary:
      "Ingano ni igihingwa gifite agaciro mu gukora ifu n’ibiribwa bitandukanye. Agri-Assist ikoreshwa mu gukurikirana imihindagurikire y’ikirere no kugabanya igihombo.",
    content:
      "Agri-Assist yifashishwa mu gukurikirana uburyo ubutaka buhinduka n’uko ikirere gihinduka mu gihe cy’ihinga ry’ingano. Ibi bifasha abahinzi gutegura neza isarura no gucunga amazi mu gihe cy’izuba. Sisitemu kandi isuzuma ubuzima bw’ubutaka kugira ngo hamenyekane igihe cyiza cyo gutera imbuto z’ingano zifite ubuziranenge.",
  },
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-800 mb-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Amakuru & Inkuru z’Ubuhinzi 🌾
        </motion.h1>
        <p className="text-gray-600 text-lg">
          Sobanukirwa n’uburyo ikoranabuhanga rya AI n’amakuru y’ikirere
          bihindura ubuhinzi mu Rwanda.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                {post.date} | {post.author}
              </p>
              <p className="text-gray-600 text-base mb-4">{post.summary}</p>
              <button
                onClick={() => setSelectedBlog(post)}
                className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors"
              >
                Soma birambuye
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-3xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
                onClick={() => setSelectedBlog(null)}
              >
                ✕
              </button>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-lg mb-5"
              />
              <h3 className="text-3xl font-bold text-green-800 mb-3">
                {selectedBlog.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {selectedBlog.date} | {selectedBlog.author}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedBlog.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <Footer  />
    </>
  );
};

export default Blogs;
