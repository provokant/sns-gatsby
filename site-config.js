const config = {
  backgroundColor: "#fff",
  backgroundImage: "images/content/spiral.jpg",
  copyright: "(c) 2021 - Michael Czechowski",
  dateFormat: "DD/MM/YYYY",
  dateFromFormat: "YYYY-MM-DD",
  featureCta: false,
  footerBackground: "images/content/sky.jpg",
  footerLink: "//dailysh.it",
  footerLogo: "images/logos/logo-1024.png",
  formIframeSrc: "https://docs.google.com/forms/d/e/1FAIpQLSfho4q8t0YQHHqf47EeePO6dK9HeL1xj9hslyVPJSG8tMWr9A/viewform?embedded=true",
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfho4q8t0YQHHqf47EeePO6dK9HeL1xj9hslyVPJSG8tMWr9A/formResponse",
  landingPageImage: "images/content/hands.png",
  landingPageTeaser: "We're constantly collecting introductory material for all those interested in philosophy.<br><br><br><i><small>Easy language · Well researched · User-friendly</small></i>",
  landingPageTitle: "Philosophical<br>Paragraphs<br>Explained",
  pathPrefix: "/",
  siteBanner: "https://images.unsplash.com/photo-1583870996776-847fa9899398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  siteDescription: `
    In den vergangenen drei Semestern wurde das, was Studieren bedeutet, aus den Universitäten gefegt und in
    WG-Zimmer oder Kinderzimmer gekehrt. Mit teilweise fatalen Folgen: Nebeneinkünfte, die das Studieren häufig
    erst ermöglichen, brechen weg. Nach wie vor finden Prüfungen in Präsenz statt, es gelten häufig dieselben
    Fristen und Modalitäten wie vor der Pandemie. Archive, Bibliotheken, Labore oder Werkstätten haben
    geschlossen. Öffnungsperspektiven, wie es sie für Schulen gibt, fehlen. Wir wollen diese Probleme sichtbar
    machen und sie in die Öffentlichkeit und auf die Straße tragen. Motto: Wir wollen studieren — nicht
    stagnieren!
  `,
  siteLanguage: "de",
  siteLogo: "images/logos/logo-1024.png",
  siteLogoTitle: "Montag · 14.06.2021 · Karlsplatz",
  siteRss: "/rss.xml",
  siteTitle: "Studieren nicht Stagnieren!",
  siteTitleAlt: "SNS",
  siteTitleShort: "SNS",
  siteUrl: "https://studieren-nicht-stagnieren.de/",
  themeColor: "#fe009a",
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
