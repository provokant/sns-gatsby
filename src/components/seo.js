import React from "react";
import Helmet from "react-helmet";
import { pathPrefix, siteBanner, siteDescription, siteLanguage, siteTitle, siteTitleAlt, siteUrl } from "../../site-config";

export const Seo = () => {
  const fullSiteUrl = siteUrl + pathPrefix;

  let schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "@id": fullSiteUrl,
      url: fullSiteUrl,
      name: siteTitle,
      alternateName: siteTitleAlt ?? "",
    },
  ];

  return (
    <Helmet>
      <html lang={siteLanguage}/>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription}/>
      <meta name="image" content={siteBanner}/>
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property="og:locale" content={siteLanguage}/>
      <meta property="og:site_name" content={siteTitle ?? ""}/>
      <meta property="og:url" content={fullSiteUrl}/>
      <meta property="og:title" content={siteTitle}/>
      <meta property="og:description" content={siteDescription}/>
      <meta property="og:image" content={siteBanner}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={siteTitle}/>
      <meta name="twitter:url" content={siteUrl}/>
      <meta name="twitter:description" content={siteDescription}/>
      <meta name="twitter:image" content={siteBanner}/>
    </Helmet>
  );
};
