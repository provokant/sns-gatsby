import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { formIframeSrc } from "../../site-config";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 600,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
  maxWidth: 540,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyles = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const instaStyle = {
  maxWidth: 200
}

const imgStyles = {
  // maxWidth: 200
}

const sectionStyles = {
  width: "100%",
  minHeight: "80vh"
}

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode {
        nodes {
          id
          mediaType
          preview
          timestamp
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
      }
    }
  `);
  const { allInstaNode: { nodes } } = data;
  const instaPosts = nodes && nodes
    // .filter(({mediaType}) => "GraphImage" === mediaType) // Filter by GraphImage or GraphVideo
    .map(({
      id,
      caption,
      preview: imgPath,
      localFile: { childImageSharp: { gatsbyImageData: imageData } }
    }) => ({
      caption,
      color: "#BAD455",
      imgPath,
      imageData,
      url: `https://www.instagram.com/p/${id}/`,
    }));

  return (
    <main style={pageStyles}>
      <title>Studieren nicht stagnieren! 14.6. um 19Uhr Karlsplatz, Stuttgart</title>
      <h1 style={headingStyles}>
        Wir fordern!!
        <br/>
        <span style={headingAccentStyles}>— die Aussetzung der Gebühren für alle Studierenden</span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Komm am <code style={codeStyles}>Montag, 14.06.2021</code> zum Karlsplatz nach Stuttgart!
        Komm um <code style={codeStyles}>19:00 Uhr</code> zur Kundgebung und Protest.
      </p>
      <ul style={listStyles}>
        {instaPosts && instaPosts.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyles}
                href={`${link.url}`}
                target={"_blank"}
                rel={"nofollow noopener noreferrer"}
              >
                {link.caption}
              </a>
              <p style={descriptionStyle}>{link.caption}</p>
              <div style={instaStyle}>
                <GatsbyImage alt={link.caption ?? ""} image={link.imageData} style={imgStyles}/>
              </div>
            </span>
          </li>
        ))}
      </ul>

      <section style={sectionStyles}>
        <iframe
          title={"Open Call"}
          src={formIframeSrc}
          width={sectionStyles.width} height={1200} frameBorder="0" marginHeight="0" marginWidth="0"
        >
          Wird geladen…
        </iframe>
      </section>

      <article className="">
        <h1 id="impressum">
          Impressum
        </h1>
        <h2 id="angaben-gemäß-§-5-tmg">
          Angaben gemäß § 5 TMG
        </h2>
        <p>
          Maximilian Sprenger<br/>
          Böheimstraße 43a<br/>
          70199 Stuttgart
        </p>
        <h2 id="kontakt">
          Kontakt
        </h2>
        <p>Telefon: <em>Kann per E-Mail angefordert werden</em><br/>
          E-Mail: studieren.nicht.stagnieren @ posteo.de</p>
        <h2 id="streitschlichtung">
          Streitschlichtung
        </h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <a href="https://ec.europa.eu/consumers/odr" target="_blank"
             rel="nofollow noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.</p>
        <h3 id="haftung-für-inhalte">
          Haftung für Inhalte
        </h3>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich.
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
          fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
          möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen.</p>
        <h3 id="haftung-für-links">
          Haftung für Links
        </h3>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich.
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
        <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar.
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
        <h3 id="urheberrecht">
          Urheberrecht
        </h3>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht.
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
          beachtet.
          Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen</p>
      </article>
    </main>
  )
}

export default IndexPage
