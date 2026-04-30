const fs = require('fs');
const path = require('path');

const locales = ['en', 'id', 'de', 'hi'];

const updates = {
  en: {
    ContactForm: {
      title1: "Let's Build",
      title2: "Greatness",
      description: "Ready to scale your digital presence? Send us a brief and our principal engineers will provide a comprehensive technical audit within 24 hours.",
      directEmail: "Direct Email",
      globalHQ: "Global HQ",
      projectScope: "Project Scope"
    },
    FooterUpdates: {
      company: "Company",
      aboutUs: "About Us",
      ourProcess: "Our Process",
      portfolio: "Portfolio",
      contact: "Contact",
      services: "Services",
      webDev: "Web Development",
      mobileSolutions: "Mobile Solutions",
      uiUxDesign: "UI/UX Design",
      cloudServices: "Cloud Services",
      insights: "Insights",
      insightsDesc: "Join our exclusive network for strategic technical intelligence.",
      subscribe: "Subscribe",
      businessEmail: "Business Email",
      rights: "© {year} PT NextGen Infinity Solutions. All rights reserved."
    }
  },
  id: {
    ContactForm: {
      title1: "Mari Bangun",
      title2: "Kehebatan",
      description: "Siap untuk menskalakan kehadiran digital Anda? Kirimkan ringkasan dan insinyur utama kami akan memberikan audit teknis komprehensif dalam 24 jam.",
      directEmail: "Email Langsung",
      globalHQ: "Kantor Pusat Global",
      projectScope: "Cakupan Proyek"
    },
    FooterUpdates: {
      company: "Perusahaan",
      aboutUs: "Tentang Kami",
      ourProcess: "Proses Kami",
      portfolio: "Portofolio",
      contact: "Kontak",
      services: "Layanan",
      webDev: "Pengembangan Web",
      mobileSolutions: "Solusi Mobile",
      uiUxDesign: "Desain UI/UX",
      cloudServices: "Layanan Cloud",
      insights: "Wawasan",
      insightsDesc: "Bergabunglah dengan jaringan eksklusif kami untuk intelijen teknis strategis.",
      subscribe: "Berlangganan",
      businessEmail: "Email Bisnis",
      rights: "© {year} PT NextGen Infinity Solutions. Hak cipta dilindungi undang-undang."
    }
  },
  de: {
    ContactForm: {
      title1: "Lassen Sie uns",
      title2: "Großes Bauen",
      description: "Bereit, Ihre digitale Präsenz zu skalieren? Senden Sie uns ein Briefing und unsere leitenden Ingenieure werden innerhalb von 24 Stunden ein umfassendes technisches Audit durchführen.",
      directEmail: "Direkte E-Mail",
      globalHQ: "Globaler Hauptsitz",
      projectScope: "Projektumfang"
    },
    FooterUpdates: {
      company: "Unternehmen",
      aboutUs: "Über Uns",
      ourProcess: "Unser Prozess",
      portfolio: "Portfolio",
      contact: "Kontakt",
      services: "Dienstleistungen",
      webDev: "Webentwicklung",
      mobileSolutions: "Mobile Lösungen",
      uiUxDesign: "UI/UX-Design",
      cloudServices: "Cloud-Dienste",
      insights: "Einblicke",
      insightsDesc: "Treten Sie unserem exklusiven Netzwerk für strategische technische Intelligenz bei.",
      subscribe: "Abonnieren",
      businessEmail: "Geschäftliche E-Mail",
      rights: "© {year} PT NextGen Infinity Solutions. Alle Rechte vorbehalten."
    }
  },
  hi: {
    ContactForm: {
      title1: "आइए निर्माण करें",
      title2: "महानता",
      description: "क्या आप अपनी डिजिटल उपस्थिति को बढ़ाने के लिए तैयार हैं? हमें एक संक्षिप्त विवरण भेजें और हमारे प्रमुख इंजीनियर 24 घंटों के भीतर एक व्यापक तकनीकी ऑडिट प्रदान करेंगे।",
      directEmail: "सीधा ईमेल",
      globalHQ: "वैश्विक मुख्यालय",
      projectScope: "परियोजना का दायरा"
    },
    FooterUpdates: {
      company: "कंपनी",
      aboutUs: "हमारे बारे में",
      ourProcess: "हमारी प्रक्रिया",
      portfolio: "पोर्टफोलियो",
      contact: "संपर्क",
      services: "सेवाएं",
      webDev: "वेब विकास",
      mobileSolutions: "मोबाइल समाधान",
      uiUxDesign: "UI/UX डिज़ाइन",
      cloudServices: "क्लाउड सेवाएं",
      insights: "अंतर्दृष्टि",
      insightsDesc: "रणनीतिक तकनीकी बुद्धिमत्ता के लिए हमारे विशेष नेटवर्क से जुड़ें।",
      subscribe: "सदस्यता लें",
      businessEmail: "व्यावसायिक ईमेल",
      rights: "© {year} PT NextGen Infinity Solutions. सर्वाधिकार सुरक्षित।"
    }
  }
};

locales.forEach(locale => {
  const filePath = path.join(process.cwd(), `messages/${locale}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  data.ContactForm = updates[locale].ContactForm;
  
  // Merge Footer Updates
  data.Footer = { ...data.Footer, ...updates[locale].FooterUpdates };
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});

console.log('Locales updated!');
