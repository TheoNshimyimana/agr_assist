import { useParams, Link } from "react-router-dom";

// Expanded Notifications Data with detailed messages and advice
const notificationsData: Record<string, { text: string; advice: string }> = {
  "1": {
    text: "Raporo yuzuye ku buzima bw'ibihingwa: Nyuma yo gusuzuma ubutaka n’imiterere y’ibihingwa mu kwezi gushize, twabonye ibice bifite ikibazo cy’intungamubiri n’ahashobora kwibasirwa n’udukoko. Inyigo zirimo urwego rwa chlorophyll mu mababi, pH y’ubutaka, n’ubushuhe bw’ubutaka kugirango ibihingwa bikure neza.",
    advice:
      "Soma iyi raporo witonze, shyira mu bikorwa inama z'ubuhinzi zishingiye ku ifumbire n’uburyo bwo kurwanya udukoko, kandi ukurikire impinduka buri cyumweru kugirango umusaruro wiyongere kandi wirinde igihombo.",
  },
  "2": {
    text: "Imvura irateganyijwe ejo — tegura uburyo bwo kuyiyobora: Icyitegererezo cy’ikirere cyerekana ko hazagwa imvura nyinshi ejo. Ibi bishobora gutuma amazi akura mu mirima iri hasi bikangiza imizi y’ibihingwa.",
    advice:
      "Reba imirima yawe niba imiyoboro y’amazi itabuze, usukure ivumbi n’ibindi bikoma amazi, kandi wemeze ko amazi agenda neza. Tekereza ku buryo bwo kurinda ibihingwa byoroshye kugirango wirinde kwangirika.",
  },
  "3": {
    text: "Icyitegererezo cy’ubutaka bwawe kirarangiye: Laboratwari yarangije gupima ubutaka bwawe. Isuzuma ririmo intungamubiri, pH, ibirimo organic matter, n’inama ku ifumbire yihariye ku bwoko bw’ibihingwa byawe.",
    advice:
      "Fata ibisubizo by’icyitegererezo, ugereranye n’urwego rw’intungamubiri rwemewe, kandi uhindure uburyo bwo gukoresha ifumbire. Teganya gusuzuma nyuma y’ukwezi kugirango urebe impinduka.",
  },
  "4": {
    text: "Ibiciro by’amasoko y’ibigori byavuguruwe muri iki cyumweru: Amasoko y’akarere n’ay’imbere mu gihugu yatangaje impinduka mu biciro by’ibigori bitewe n’igihe cy’ihinga n’ubwikorezi.",
    advice:
      "Koresha aya makuru y'ibiciro kugirango wemeze niba ugurisha ubu, ukabika kugurisha nyuma, cyangwa uhindure uburyo bwo gucuruza. Tekereza ku masezerano n’abaguzi niba ibiciro byiza bihari.",
  },
  "5": {
    text: "Itangazo ry’udukoko: Kurwanya hakiri kare birasabwa: Raporo n’uburyo bwa AI bwerekana ko hari ubwinshi bw’udukoko nka aphids na caterpillars mu mirima iri hafi. Kwiyongera hakiri kare bishobora kugabanya umusaruro.",
    advice:
      "Sura imirima yawe uyu munsi, ukoreshe imiti yemewe cyangwa uburyo bw’udukoko kamere, kandi ukomeze gukurikirana buri gihe. Andika aho wakoresheje n’ingaruka kugira ngo ugenzure neza.",
  },
  "6": {
    text: "Ubushyuhe bwinshi bwaragaragaye: Ibipimo by’ubu birerekana ubushyuhe burenze 35°C bushobora gutera stress ku bihingwa no kugabanya gukura kwabyo.",
    advice:
      "Shyiraho igicucu cy’igihe gito, ongeramo amazi kenshi, kandi ukoreshe mulch mu mirima kugirango ubushuhe bugabanuke. Kurikirana amababi y’ibihingwa ku bimenyetso by’ubushyuhe.",
  },
  "7": {
    text: "Gahunda nshya y'irrigation: Hashingiwe ku mvura iheruka n’ubushuhe bw’ubutaka, gahunda nshya y’irrigation yateguwe kugirango ubutaka butangirika kandi wirinde gushiramo amazi menshi.",
    advice:
      "Kurikiza gahunda nshya neza, ukoreshe drip cyangwa sprinkler neza, kandi ukurikire ubushuhe bw’ubutaka hifashishijwe sensor.",
  },
  "8": {
    text: "Raporo y’ifumbire irarangiye: Isuzuma ry’ubutaka ryerekana ko nitrogen na potassium biri munsi y’urwego rwiza. Raporo itanga ingano y’ifumbire ikenewe n’uburyo bwo kuyikoresha ku bihingwa byawe.",
    advice:
      "Shyira ifumbire uko gahunda ibivuga, ukurikire uko ibihingwa byiyumvamo, kandi uhindure uburyo bwo gukoresha mu gihe kizaza. Irinde gukoresha ifumbire nyinshi.",
  },
  "9": {
    text: "Isuzuma rya satellite ryavuguruwe: Amashusho ya satellite yerekana imiterere y’ukwiyongera kw’ibihingwa n’ahashobora kugira stress.",
    advice:
      "Reba ahantu hari ibimera bifite ikibazo, sura imirima, kandi ukore ibyo bisabwa nko kongera amazi, kurwanya udukoko, cyangwa kongera ifumbire.",
  },
  "10": {
    text: "Ubushuhe bw’ubutaka buri hasi. Tera amazi: Sensor mu mirima yawe zerekana ko ubutaka buri munsi y’urwego rwiza, bishobora kugabanya umusaruro.",
    advice:
      "Tera amazi hakurikijwe gahunda, ukoreshe uburyo buboneye nka drip irrigation, kandi reba sensor nyuma yo gutera amazi.",
  },
  "11": {
    text: "Isesengura ry’umusaruro ryakozwe: Hashingiwe ku gukura kw’ibihingwa, ikirere n’amateka, AI irateganya umusaruro mu gihe cy’isarura.",
    advice:
      "Koresha izi nyunganizi mu gutegura abakozi, kubika, no gucuruza. Teganya uburyo bwo kwitegura niba umusaruro wateganijwe uri hasi.",
  },
  "12": {
    text: "Icyitegererezo cy’ikirere cy’icyumweru: Kirimo imvura, ubushyuhe, humidity n’umuyaga mu minsi 7 iri imbere.",
    advice:
      "Teganya ibikorwa mu murima nk’uguhinga, gusasa imiti no gusarura hakurikijwe ikirere. Rinda ibihingwa byoroshye ku mvura cyangwa ibihe bidasanzwe.",
  },
  "13": {
    text: "Isesengura ry’ingufu zikoreshwa n’ibikoresho: Ibikoresho by’ubuhinzi byakoresheje amashanyarazi menshi mu bipompo by’amazi no kubika ibintu mu cyumweru gishize.",
    advice:
      "Menya ibikoresho bikoresha amashanyarazi menshi, shyiraho timers cyangwa uburyo bwo kuzigama, kandi tekereza ku bundi buryo bwo gukoresha ingufu.",
  },
  "14": {
    text: "Gukora isuzuma rya system birarangiye: Ibikoresho byose bya IoT, sensor na software byasuzumwe kandi byavuguruwe.",
    advice:
      "Reba ko sensor zose zikorera neza, ukomeze gukurikirana, kandi ukurikize gahunda yo gusuzuma.",
  },
  "15": {
    text: "Uburyo bushya bwa AI bwo kuvura ibihingwa buraboneka: Ubu buryo bukoresha ibinyabuzima karemano bugamije kongera imikurire no kurwanya udukoko n’indwara.",
    advice:
      "Suzuma uburyo bwo kuvura, shyira mu bikorwa aho bikenewe, kandi ukurikire uko ibihingwa byiyumvamo. Andika aho wakoresheje n’ibisubizo.",
  },
};


const NotificationDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const notification = id ? notificationsData[id] : undefined;

  if (!notification) {
    return (
      <div className="p-6 flex justify-center items-center h-screen text-gray-300 dark:text-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Notification Not Found</h1>
          <Link
            to="/home"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold text-lg"
          >
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-800 min-h-screen flex justify-center">
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-2xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
          Ubutumwa burambuye
        </h1>

        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 space-y-8">
          {/* Notification Section */}
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-2xl">
            <h2 className="text-xl md:text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Ubutumwa
            </h2>
            <p className="text-lg md:text-base text-gray-900 dark:text-gray-100 leading-relaxed">
              {notification.text}
            </p>
          </div>

          {/* Advice Section */}
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-2xl">
            <h2 className="text-lg md:text-xl font-bold text-green-700 dark:text-green-300 mb-4">
              Inama zishoboka
            </h2>
            <p className="text-sm md:text-base text-green-900 dark:text-green-200 leading-relaxed">
              {notification.advice}
            </p>
          </div>

          {/* Back Button */}
          <div className="text-right">
            <Link
              to="/home"
              className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900 rounded-xl text-base md:text-base hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              Subira inyuma
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetailsPage;
