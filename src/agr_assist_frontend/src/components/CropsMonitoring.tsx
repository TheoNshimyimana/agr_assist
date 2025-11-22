import React, { useState } from "react";
import { Leaf, Activity, Droplet, X, Bug, ShieldAlert } from "lucide-react";
import Footer from "./Footer";

//Cassava
import Gikungu from "../images/gikungu.webp";
import Tebuka from "../images/Tebuka.webp";
import Nsize from "../images/nsize.jpeg";
import Buryohe from "../images/Buryohe.jpeg";

//Amatunda
import Amatunda1 from "../images/amatunda.jpeg";
import Amatunda2 from "../images/amatunda2.jpg";
import Amatunda3 from "../images/amatunda3.jpeg";
import Amatunda4 from "../images/amatunda4.jpeg";


interface PestDisease {
  name: string;
  type: "pest" | "disease";
  severity: "low" | "medium" | "high";
}

interface Crop {
  id: number;
  name: string;
  growthStage: string;
  health: string;
  moisture: string;
  description: string;
  images: string[];
  pestsDiseases: PestDisease[];
}

const CropsMonitoring: React.FC = () => {
  const [crops] = useState<Crop[]>([
    {
      id: 1,
      name: "Cassava (Imyumbati)",
      growthStage: "Mature (Kwera)",
      health: "Healthy (Nzima)",
      moisture: "50%",
      description:
        "Imyumbati ni igihingwa gikungahaye ku butare bw’ibiribwa. Gikura neza mu butaka bufite amazi ahagije kandi bukungahaye ku ifumbire kamere.",
      images: [
        Tebuka,
        Gikungu,
        Nsize,
        Buryohe,
      ],
      pestsDiseases: [
        {
          name: "Cassava Mosaic Disease (CMD)",
          type: "disease",
          severity: "high",
        },
        {
          name: "Cassava Bacterial Blight (CBB)",
          type: "disease",
          severity: "high",
        },
      ],
    },
    {
      id: 2,
      name: "Fruits(Amatunda) )",
      growthStage: "Vegetative (Kuboneka)",
      health: "Good (Nziza)",
      moisture: "40%",
      description:
        "Amatunda ni igihingwa cy'ingenzi kiribwa. Bikenera ubutaka bufite ubushuhe buhagije kandi bukungahaye ku ifumbire kamere.",
      images: [
       Amatunda1 ,
        Amatunda2,
        Amatunda3,
        Amatunda4,
      ],
      pestsDiseases: [
        { name: "Aphids", type: "pest", severity: "medium" },
        { name: "Corn Blight", type: "disease", severity: "high" },
      ],
    },

    {
      id: 3,
      name: "Tomato (Inyanya)",
      growthStage: "Fruit Setting (Gushyiraho imbuto)",
      health: "Average (Hagati)",
      moisture: "50%",
      description:
        "Tumatini ikenera izuba n’ubutaka bwiza kugirango ibone umusaruro mwiza kandi uhamye.",
      images: [
        "/images/tomato1.jpg",
        "/images/tomato2.jpg",
        "/images/tomato3.jpg",
        "/images/tomato4.jpg",
      ],
      pestsDiseases: [
        { name: "Tomato Blight", type: "disease", severity: "high" },
        { name: "Whiteflies", type: "pest", severity: "medium" },
      ],
    },
    {
      id: 4,
      name: "Peas (Amashaza)",
      growthStage: "Mature (Kukura neza)",
      health: "Excellent (Nziza cyane)",
      moisture: "60%",
      description:
        "Umuceri ukeneye amazi menshi kandi ubutaka bworoshye kugirango ukure neza kandi utange umusaruro mwiza.",
      images: [
        "/images/rice1.jpg",
        "/images/rice2.jpg",
        "/images/rice3.jpg",
        "/images/rice4.jpg",
      ],
      pestsDiseases: [
        { name: "Rice Blast", type: "disease", severity: "high" },
        { name: "Brown Planthopper", type: "pest", severity: "medium" },
      ],
    },
    {
      id: 4,
      name: "Mushroom (Ibihumyo)",
      growthStage: "Mature (Kukura neza)",
      health: "Excellent (Nziza cyane)",
      moisture: "60%",
      description:
        "Umuceri ukeneye amazi menshi kandi ubutaka bworoshye kugirango ukure neza kandi utange umusaruro mwiza.",
      images: [
        "/images/rice1.jpg",
        "/images/rice2.jpg",
        "/images/rice3.jpg",
        "/images/rice4.jpg",
      ],
      pestsDiseases: [
        { name: "Rice Blast", type: "disease", severity: "high" },
        { name: "Brown Planthopper", type: "pest", severity: "medium" },
      ],
    },
    {
      id: 4,
      name: "Rice (Umuceri)",
      growthStage: "Mature (Kukura neza)",
      health: "Excellent (Nziza cyane)",
      moisture: "60%",
      description:
        "Umuceri ukeneye amazi menshi kandi ubutaka bworoshye kugirango ukure neza kandi utange umusaruro mwiza.",
      images: [
        "/images/rice1.jpg",
        "/images/rice2.jpg",
        "/images/rice3.jpg",
        "/images/rice4.jpg",
      ],
      pestsDiseases: [
        { name: "Rice Blast", type: "disease", severity: "high" },
        { name: "Brown Planthopper", type: "pest", severity: "medium" },
      ],
    },
    {
      id: 4,
      name: "Maize (Ibigori)",
      growthStage: "Mature (Kukura neza)",
      health: "Excellent (Nziza cyane)",
      moisture: "60%",
      description:
        "Umuceri ukeneye amazi menshi kandi ubutaka bworoshye kugirango ukure neza kandi utange umusaruro mwiza.",
      images: [
        "/images/rice1.jpg",
        "/images/rice2.jpg",
        "/images/rice3.jpg",
        "/images/rice4.jpg",
      ],
      pestsDiseases: [
        { name: "Rice Blast", type: "disease", severity: "high" },
        { name: "Brown Planthopper", type: "pest", severity: "medium" },
      ],
    },
    {
      id: 4,
      name: "Beans (Ibishyimbo)",
      growthStage: "Mature (Kukura neza)",
      health: "Excellent (Nziza cyane)",
      moisture: "60%",
      description:
        "Umuceri ukeneye amazi menshi kandi ubutaka bworoshye kugirango ukure neza kandi utange umusaruro mwiza.",
      images: [
        "/images/rice1.jpg",
        "/images/rice2.jpg",
        "/images/rice3.jpg",
        "/images/rice4.jpg",
      ],
      pestsDiseases: [
        { name: "Rice Blast", type: "disease", severity: "high" },
        { name: "Brown Planthopper", type: "pest", severity: "medium" },
      ],
    },
    {
      id: 4,
      name: "Tomatoes (Inyanya)",
      growthStage: "Mature (Kukura neza)",
      health: "Excellent (Nziza cyane)",
      moisture: "60%",
      description:
        "Umuceri ukeneye amazi menshi kandi ubutaka bworoshye kugirango ukure neza kandi utange umusaruro mwiza.",
      images: [
        "/images/rice1.jpg",
        "/images/rice2.jpg",
        "/images/rice3.jpg",
        "/images/rice4.jpg",
      ],
      pestsDiseases: [
        { name: "Rice Blast", type: "disease", severity: "high" },
        { name: "Brown Planthopper", type: "pest", severity: "medium" },
      ],
    },
  ]);

  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white p-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-green-600">
              Ikibaho cyo Gukurikirana Ibihingwa 🌱
            </h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Gukurikirana ibihingwa hifashishijwe AI na blockchain bifasha
              kubona amakuru y’ubuzima bw’ibimera, gukumira imibu n’indwara,
              kunoza kuhira, no guteganya umusaruro mu buryo bw’igihe nyacyo.
            </p>
          </header>

          {/* Crops Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {crops.map((crop) => (
              <div
                key={crop.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <h2 className="text-2xl font-bold text-green-600 text-center mb-4">
                  {crop.name}
                </h2>

                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-emerald-500" />
                    <strong>Ikiciro cyo gukura:</strong> {crop.growthStage}
                  </p>
                  <p className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-green-600" />
                    <strong>Ubuzima bw’igihingwa:</strong> {crop.health}
                  </p>
                  <p className="flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-blue-400" />
                    <strong>Ubushuhe bw’ubutaka:</strong> {crop.moisture}
                  </p>
                </div>

                <div className="mt-4 text-center">
                  <button
                    onClick={() => setSelectedCrop(crop)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Soma Birambuye
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 relative">
            <button
              onClick={() => setSelectedCrop(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
              {selectedCrop.name}
            </h2>
            <p className="text-gray-700 mb-4">{selectedCrop.description}</p>

            {/* Crop Images */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {selectedCrop.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedCrop.name} ${idx + 1}`}
                  className="rounded-xl object-cover w-full h-48"
                />
              ))}
            </div>

            {/* Pests & Diseases */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Indwara n’Imibu Ishobora Kubangamira
              </h3>
              <ul className="space-y-2">
                {selectedCrop.pestsDiseases.map((pd, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-2 text-gray-700 text-sm font-medium ${
                      pd.type === "pest" ? "text-yellow-700" : "text-red-600"
                    }`}
                  >
                    {pd.type === "pest" ? (
                      <Bug className="w-4 h-4" />
                    ) : (
                      <ShieldAlert className="w-4 h-4" />
                    )}
                    {pd.name} - {pd.severity.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CropsMonitoring;
