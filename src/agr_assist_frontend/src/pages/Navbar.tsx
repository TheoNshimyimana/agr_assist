import { useState } from "react";
import { Bell, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const notificationsList = [
  { id: 1, text: "Raporo yuzuye ku buzima bw'ibihingwa." },
  { id: 2, text: "Imvura irateganyijwe ejo — tegura uburyo bwo kuyiyobora." },
  { id: 3, text: "Icyitegererezo cy’ubutaka bwawe kirarangiye." },
  {
    id: 4,
    text: "Ibiciro by’amasoko y’ibigori byavuguruwe muri iki cyumweru.",
  },
  { id: 5, text: "Itangazo ry’udukoko: Kurwanya hakiri kare birasabwa." },
  { id: 6, text: "Ubushyuhe bwinshi bwaragaragaye mu karere kawe." },
  { id: 7, text: "Gahunda nshya y’irrigation yavuguruwe." },
  { id: 8, text: "Raporo y’ifumbire irarangiye hamwe n’inama." },
  { id: 9, text: "Isuzuma rya satellite ry’ibihingwa ryavuguruwe." },
  {
    id: 10,
    text: "Ubushuhe bw’ubutaka buri hasi — tera amazi ibihingwa byawe.",
  },
  { id: 11, text: "Isesengura ry’umusaruro w’ibihingwa ryakozwe." },
  { id: 12, text: "Icyitegererezo cy’ikirere cy’icyumweru kirarangiye." },
  { id: 13, text: "Isesengura ry’ingufu zikoreshwa n’ibikoresho byawe." },
  { id: 14, text: "Gukora isuzuma rya system birarangiye." },
  { id: 15, text: "Uburyo bushya bwa AI bwo kuvura ibihingwa buraboneka." },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center relative">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Ai-Powered AGRI-Assist (AI for Sustainable Farming)
      </h1>

      <div className="flex items-center mr-6 gap-5">
        <Link to="/home/documentation">
          <Button variant="ghost" className="rounded-full p-2 text-white">
            Docs
          </Button>
        </Link>

        <Link to="/home/my-wallet">
          <Button variant="ghost" className="rounded-full p-2 text-white">
            Wallet
          </Button>
        </Link>

        <Link to="/home/stock">
          <Button variant="ghost" className="rounded-full p-2 text-white">
            Stock
          </Button>
        </Link>

        <Link to="/home/settings">
          <Button variant="ghost" className="rounded-full p-2 text-white">
            <Settings className="w-5 h-5" />
          </Button>
        </Link>

        {/* === NOTIFICATION DROPDOWN === */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer relative"
          >
            <Bell className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            {notificationsList.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {notificationsList.length}
              </span>
            )}
          </div> 

          {/* DROPDOWN CONTENT */}
          {open && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50 p-4">
              <h2 className="font-semibold text-white dark:text-white mb-2">
                Ubutumwa
              </h2>

              <div className="max-h-64 overflow-y-auto space-y-2">
                {notificationsList.slice(0, 6).map((item) => (
                  <Link
                    to={`/home/notification/${item.id}`}
                    key={item.id}
                    className="block p-3 text-white rounded-md border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {item.text} 
                  </Link>
                ))}
              </div>

              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
