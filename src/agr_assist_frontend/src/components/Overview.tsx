import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import {
  FaSeedling,
  FaChartLine,
  FaRobot,
  FaGlobe,
  FaUsers,
  FaCloudSun,
  FaLeaf,
  FaDatabase,
  FaTractor,
} from "react-icons/fa";
import Footer from "./Footer";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const Overview: React.FC = () => {
  const [climateData, setClimateData] = useState<number[]>([]);
  const [cropGrowthData, setCropGrowthData] = useState<number[]>([]);

  useEffect(() => {
    // Mock data
    setClimateData([15, 18, 21, 25, 28, 32, 30, 27, 24, 20, 16, 14]);
    setCropGrowthData([30, 50, 75, 95, 120, 135, 140, 138, 120, 100, 70, 50]);
  }, []);

  const climateChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Ubushyuhe bwo hagati (°C)",
        data: climateData,
        borderColor: "#ff9800",
        backgroundColor: "rgba(255, 152, 0, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const cropGrowthChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Umuvuduko w’Ubwiyongere bw’Ibihingwa (%)",
        data: cropGrowthData,
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            AI Powered AGRI-Assist 🌱
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Murakaza neza kuri{" "}
            <span className="font-semibold">Climate Change AGRI-Assist</span>,
            urubuga rukoresha AI na Blockchain mu buhinzi. Dutanga amakuru
            y’igihe nyacyo yo kunoza umusaruro w’ibihingwa no kubungabunga
            ibidukikije.
          </p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
          <StatCard
            icon={<FaSeedling />}
            title="13+ Imirima Yubakiye kuri AI"
            description="Imirima ikoresha AI mu gukurikirana no kunoza imikorere."
          />
          <StatCard
            icon={<FaChartLine />}
            title="95% Ukuri"
            description="AI itanga ibisubizo by’ibihe n’umusaruro w’ibihingwa."
          />
          <StatCard
            icon={<FaRobot />}
            title="AI & IoT Byuzuzanya"
            description="Gukusanya amakuru no gukoresha imashini mu gihe nyacyo."
          />
          <StatCard
            icon={<FaGlobe />}
            title="Ibihugu 3+"
            description="AGRI-Assist duteganya gukorana b'ihihugu bitatu muri Africa."
          />
          <StatCard
            icon={<FaUsers />}
            title="Abahinzi 13+"
            description="Ubu turi gukorana n'abahinzi 13 mu Rwanda ."
          />
          <StatCard
            icon={<FaCloudSun />}
            title="Amakuru y’Ibidukikije"
            description="Guhanga uburyo bwo kwirinda imihindagurikire y'ikirere."
          />
          <StatCard
            icon={<FaLeaf />}
            title="Gukurikirana Indwara n’Imibu"
            description="AI ibona ibimenyetso mbere y’uko indwara zikwira."
          />
          <StatCard
            icon={<FaDatabase />}
            title="Umutekano muri Blockchain"
            description="Ibyanditswe byose mu buhinzi birinzwe kandi bisobanutse."
          />
          <StatCard
            icon={<FaTractor />}
            title="Ibikoresho by’Ubwenge"
            description="Traktori zifashishwa na AI mu buhinzi bwa precision."
          />
        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-5xl mx-auto mb-10">
          <h3 className="text-3xl font-semibold text-green-600 mb-4 text-center">
            Ibitekerezo bya AI
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>
              <strong>Gukurikirana Ibihingwa:</strong> AI ibona ibibazo
              by’ubuzima, amazi, n’ubwiyongere bw’ibihingwa.
            </li>
            <li>
              <strong>Isesengura ry’Ubutaka:</strong> AI isuzuma intungamubiri,
              pH, n’ubukungu bw’ubutaka.
            </li>
            <li>
              <strong>Kwitegura Igihe:</strong> Amakuru ya blockchain ku byago
              by’ikirere.
            </li>
            <li>
              <strong>Amakuru ku Mibu n’Indwara:</strong> AI ibona ibimenyetso
              hakiri kare.
            </li>
            <li>
              <strong>Gukurikirana Ibiciro:</strong> Abahinzi babona amakuru
              y’igihe nyacyo ku biciro by’imbuto n’ibihingwa.
            </li>
            <li>
              <strong>Blockchain mu Buhinzi:</strong> Ubucuruzi bwizewe kandi
              busobanutse.
            </li>
          </ul>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-4 text-center">
              🌡 Impinduka z’Ubushyuhe
            </h3>
            <Line data={climateChartData} options={{ responsive: true }} />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-4 text-center">
              🌱 Umuvuduko w’Ubwiyongere bw’Ibihingwa
            </h3>
            <Line data={cropGrowthChartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Stat Card Component
const StatCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
    <div className="text-green-600 text-4xl mb-2">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2 text-sm md:text-base">{description}</p>
  </div>
);

export default Overview;
