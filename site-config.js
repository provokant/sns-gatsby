const config = {
  dateFormat: "DD/MM/YYYY",
  dateFromFormat: "YYYY-MM-DD",
  featureCta: false,
  featureCustomForm: false,
  footerLink: "//dailysh.it",
  footerLogo: "images/logos/logo-1024.png",
  formIframeSrc: "https://docs.google.com/forms/d/e/1FAIpQLSfho4q8t0YQHHqf47EeePO6dK9HeL1xj9hslyVPJSG8tMWr9A/viewform?embedded=true",
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfho4q8t0YQHHqf47EeePO6dK9HeL1xj9hslyVPJSG8tMWr9A/formResponse",
  pathPrefix: "/",
  siteBanner: "/images/banner.jpg",
  siteDescription: "In den vergangenen drei Semestern wurde das, was Studieren bedeutet, aus den Universitäten gefegt und in WG-Zimmer oder Kinderzimmer gekehrt. Mit teilweise fatalen Folgen: Nebeneinkünfte, die das Studieren häufig erst ermöglichen, brechen weg. Nach wie vor finden Prüfungen in Präsenz statt, es gelten häufig dieselben Fristen und Modalitäten wie vor der Pandemie. Archive, Bibliotheken, Labore oder Werkstätten haben geschlossen. Öffnungsperspektiven, wie es sie für Schulen gibt, fehlen. Wir wollen diese Probleme sichtbar machen und sie in die Öffentlichkeit und auf die Straße tragen. Motto: Wir wollen studieren — nicht stagnieren!",
  siteFavIcon: "/images/favicon.jpg",
  siteLanguage: "de",
  siteLogoTitle: "Montag · 14.06.2021 · Karlsplatz",
  siteRss: "/rss.xml",
  siteTitle: "Studieren nicht Stagnieren!",
  siteTitleAlt: "SNS",
  siteUrl: "https://studieren-nicht-stagnieren.de/",
  themeColor: "#fe009a",
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
