const config = {
  dateFormat: "DD/MM/YYYY",
  dateFromFormat: "YYYY-MM-DD",
  featureCta: false,
  featureCustomForm: true,
  footerLogo: "images/logos/logo-1024.png",
  formIframeSrc: "//docs.google.com/forms/d/e/1FAIpQLSfho4q8t0YQHHqf47EeePO6dK9HeL1xj9hslyVPJSG8tMWr9A/viewform?embedded=true",
  formUrl: "//sns.dailysh.it/dGVzdGRsYXNoIGRha3NqZGxrYXNqZG9uaXNhN2RiOThhc243ZDg5Nzk4c2FETS9EUykoTS9BU0QoQS9TRCkoLz07U0EoRHNhMDltOGQwOWE4c25kMGFzOGQwOWE4bXMwOWQsODA5c2E4ZDA5OG1zYW5kc2EwN2RhOThzZEIpKC9EKSgvU0EvRCkoQS9EUy9BUykoL0QvQlNBRCgvU0ElRC8kQadTPSkoTTtEREREREpLU0FIREhBTEtEU05TQURQSUtTQSrcRCfWQSdTRNYnQSdEQURT3CoqQVPcRAoi",
  instagramUrl: "//www.instagram.com/studieren_nicht_stagnieren/",
  maintainerLink: "//dailysh.it",
  maintainerName: "NEXT LEVEL SHIT",
  maintainerRepository: "//github.com/provokant/sns-gatsby/",
  pathPrefix: "/",
  siteBanner: "/images/banner.jpg",
  siteDescription: "In den vergangenen drei Semestern wurde das, was Studieren bedeutet, aus den Universitäten gefegt und in WG-Zimmer oder Kinderzimmer gekehrt. Mit teilweise fatalen Folgen: Nebeneinkünfte, die das Studieren häufig erst ermöglichen, brechen weg. Nach wie vor finden Prüfungen in Präsenz statt, es gelten häufig dieselben Fristen und Modalitäten wie vor der Pandemie. Archive, Bibliotheken, Labore oder Werkstätten haben geschlossen. Öffnungsperspektiven, wie es sie für Schulen gibt, fehlen. Wir wollen diese Probleme sichtbar machen und sie in die Öffentlichkeit und auf die Straße tragen. Motto: Wir wollen studieren — nicht stagnieren!",
  siteFavIcon: "/images/favicon.jpg",
  siteLanguage: "de",
  siteLogoTitle: "Fr, 16.07.2021 · Stadtgarten Konstanz",
  siteRss: "/rss.xml",
  siteTitle: "Studieren nicht Stagnieren!",
  siteTitleAlt: "SNS",
  siteUrl: "https://studieren-nicht-stagnieren.de/",
  themeColor: "#fe009a",
  ytApiKey: "AIzaSyDUyAM-Vyc11CsCQvXHfBa_BXz4xnM03JU",
  ytUrl: "//www.youtube.com/channel/UCe8R3Pi2vzDkaDJZW_CeznQ"
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
