import { useEffect, useState } from "react";
import { Moon, Sun, Bell, User, Globe, Shield, Lock } from "lucide-react";
import { Button } from "../components/ui/button";

const Settings = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // Apply dark theme immediately when toggled
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSave = () => {
    alert("✅ Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-blue-400">
          ⚙️ Settings
        </h2>

        {/* ================= PROFILE SETTINGS ================= */}
        <section className="mb-10 border-b border-gray-300 dark:border-gray-700 pb-6 animate-fadeIn">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Profile
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>
        </section>

        {/* ================= LANGUAGE SETTINGS ================= */}
        <section className="mb-10 border-b border-gray-300 dark:border-gray-700 pb-6 animate-fadeIn">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
            Language
          </h3>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option>English</option>
            <option>Kinyarwanda</option>
            <option>French</option>
            <option>Swahili</option>
          </select>
        </section>

        {/* ================= APP PREFERENCES ================= */}
        <section className="mb-10 border-b border-gray-300 dark:border-gray-700 pb-6 animate-fadeIn">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <Bell className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            App Preferences
          </h3>

          {/* Notification Toggle */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium">Enable Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
                notifications ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                  notifications ? "translate-x-6" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium flex items-center gap-2">
              {darkMode ? <Moon /> : <Sun />}
              Dark Theme
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
                darkMode ? "bg-blue-600" : "bg-gray-400"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                  darkMode ? "translate-x-6" : ""
                }`}
              ></div>
            </button>
          </div>
        </section>

        {/* ================= SECURITY SETTINGS ================= */}
        <section className="mb-10 animate-fadeIn">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Security & Privacy
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-medium">
                <Lock className="w-4 h-4" /> Change Password
              </span>
              <Button
                variant="outline"
                className="text-sm hover:bg-purple-100 dark:hover:bg-purple-800 transition"
              >
                Update
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-medium text-red-500 dark:text-red-400">
                Delete Account
              </span>
              <Button variant="destructive" className="text-sm">
                Delete
              </Button>
            </div>
          </div>
        </section>

        {/* ================= SAVE BUTTON ================= */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg shadow-md hover:shadow-lg transition-all"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
