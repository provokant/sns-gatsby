const config = {
  backgroundColor: "#fff",
  backgroundImage: "images/content/spiral.jpg",
  copyright: "(c) 2021 - Michael Czechowski",
  dateFormat: "DD/MM/YYYY",
  dateFromFormat: "YYYY-MM-DD",
  footerBackground: "images/content/sky.jpg",
  footerLink: "//dailysh.it",
  footerLogo: "images/logos/logo-1024.png",
  landingPageImage: "images/content/hands.png",
  landingPageTeaser: "We're constantly collecting introductory material for all those interested in philosophy.<br><br><br><i><small>Easy language · Well researched · User-friendly</small></i>",
  landingPageTitle: "Philosophical<br>Paragraphs<br>Explained",
  formUrl: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScbwhFgZcPZHyF_9fOv6tg_sRCLP-bxuB-LBLW3rbagqstlFg/formResponse",
  formIframeSrc: "https://docs.google.com/forms/d/e/1FAIpQLScbwhFgZcPZHyF_9fOv6tg_sRCLP-bxuB-LBLW3rbagqstlFg/viewform?embedded=true",
  pathPrefix: "/",
  questionAccept: "Yes, let me read more!",
  questionDeny: "No, thanks",
  showBackButton: true,
  showCategoryLinks: true,
  siteDescription: "Studieren nicht Stagnieren",
  siteLanguage: "de",
  siteLogo: "images/logos/logo-1024.png",
  siteBanner: "https://images.unsplash.com/photo-1583870996776-847fa9899398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  siteRss: "/rss.xml",
  siteTitle: "Studieren nicht Stagnieren!",
  siteTitleAlt: "SNS",
  siteTitleShort: "SNS",
  siteUrl: "https://studieren-nicht-stagnieren.de/",
  themeColor: "#c62828",
  userLocation: "North Pole, Earth",
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

module.exports = config;
