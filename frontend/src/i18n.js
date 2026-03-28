import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "welcome": "Understand Laws. Participate. Be Heard.",
            "exploreBills": "Explore Bills",
            "knowRights": "Know Your Rights",
            "participate": "Participate",
            "learn": "Learn",
            "bills": "Bills",
            "findLeaders": "Find Leaders",
            "getStarted": "Get Started",
            "heroSubtitle": "Democratizing legal information for every Kenyan. Track upcoming bills, understand your constitutional rights, and join the conversation that shapes our nation's future.",
            "activeBills": "Active Bills",
            "citizenViews": "Citizen Views",
            "freeAccess": "Free Access",
            "eGovernment": "E-Government",
            "aboutUs": "About Us",
            "bridgingGap": "Bridging the Gap Between Parliament & People",
            "featuredBills": "Featured Legislative Bills",
            "viewAllBills": "View All Bills",
            "howToUse": "How to use CivicConnect",
            "startSearch": "Start My First Search",
            "readyToShape": "Ready to take part in shaping Kenya's future?",
            "joinCivicConnect": "Join CivicConnect",
            "civicEducation": "Civic Education Guide",
            "analyzingBill": "Analyzing Bill Details...",
            "billNotFound": "Bill not found",
            "backToList": "Back to list",
            "backToBills": "Back to Bills",
            "downloadPDF": "Download Gazette PDF",
            "simplifiedExplanation": "Simplified Explanation",
            "pros": "Pros / Potential Benefits",
            "concerns": "Concerns / Criticisms",
            "keyProvisions": "Key Provisions & Changes",
            "haveYourSay": "Have Your Say",
            "submitOpinion": "Submit Opinion",
            "opinionReceived": "Opinion Received!",
            "statusUpcoming": "Upcoming",
            "statusActive": "Active",
            "statusPassed": "Passed",
            "viewDetails": "View Details",
            "whatIsYourStance": "What is your stance?",
            "support": "Support",
            "oppose": "Oppose",
            "supportVotes": "Support Votes",
            "opposeVotes": "Oppose Votes"
        }
    },
    sw: {
        translation: {
            "welcome": "Elewa Sheria. Shiriki. Sikika.",
            "exploreBills": "Gundua Miswada",
            "knowRights": "Jua Haki Zako",
            "participate": "Shiriki",
            "learn": "Jifunze",
            "bills": "Miswada",
            "findLeaders": "Tafuta Viongozi",
            "getStarted": "Anza Sasa",
            "heroSubtitle": "Kuhalalisha habari za kisheria kwa kila Mkenya. Fuatilia miswada ijayo, elewa haki zako za kikatiba, na ujiunge na mazungumzo yanayounda mustakabali wa taifa letu.",
            "activeBills": "Miswada Inayoendelea",
            "citizenViews": "Maoni ya Wananchi",
            "freeAccess": "Ufikiaji wa Bure",
            "eGovernment": "Serikali ya Kidijitali",
            "aboutUs": "Kuhusu Sisi",
            "bridgingGap": "Kuziba Pengo Kati ya Bunge na Wananchi",
            "featuredBills": "Miswada ya Kisheria Iliyoangaziwa",
            "viewAllBills": "Ona Miswada Yote",
            "howToUse": "Jinsi ya kutumia CivicConnect",
            "startSearch": "Anza Utafutaji Wangu wa Kwanza",
            "readyToShape": "Uko tayari kushiriki katika kuunda mustakabali wa Kenya?",
            "joinCivicConnect": "Jiunge na CivicConnect",
            "civicEducation": "Mwongozo wa Elimu ya Uraia",
            "analyzingBill": "Tunaidhinisha Maelezo ya Mswada...",
            "billNotFound": "Mswada haujapatikana",
            "backToList": "Rudi kwenye orodha",
            "backToBills": "Rudi kwenye Miswada",
            "downloadPDF": "Pakua PDF ya Gazette",
            "simplifiedExplanation": "Maelezo Rahisi",
            "pros": "Faida / Manufaa Yanayotarajiwa",
            "concerns": "Wasiwasi / Uhakiki",
            "keyProvisions": "Vipengele Muhimu na Mabadiliko",
            "haveYourSay": "Toa Maoni Yako",
            "submitOpinion": "Wasilisha Maoni",
            "opinionReceived": "Maoni Yamepokelewa!",
            "statusUpcoming": "Inayokuja",
            "statusActive": "Inaendelea",
            "statusPassed": "Imepitishwa",
            "viewDetails": "Ona Maelezo",
            "whatIsYourStance": "Msimamo wako ni upi?",
            "support": "Ungaji Mkono",
            "oppose": "Pingamizi",
            "supportVotes": "Kura za Kuunga",
            "opposeVotes": "Kura za Kupinga"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
