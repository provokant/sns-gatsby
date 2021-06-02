import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { formIframeSrc } from "../../site-config";
import tw, { GlobalStyles } from "twin.macro"

// styles
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

const descriptionStyles = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const instaStyles = {
  maxWidth: 200
}

const imgStyles = {
  // maxWidth: 200
}

const sectionStyles = {
  width: "100%",
  minHeight: "80vh"
}

const imprintStyles = {
  fontSize: "80%",
  color: "#3e3749"
}


const Intro = tw.div`max-w-7xl mx-auto`;
const IntroWrapper = tw.div`relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`;


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
    <>
      <GlobalStyles/>
      <Intro>
        <IntroWrapper>
          <svg
            tw="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"/>
          </svg>
          <div>
            <div tw="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav tw="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div tw="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div tw="flex items-center justify-between w-full md:w-auto">
                    <a href="#opencall">
                      <span tw="sr-only">Workflow</span>
                      <img tw="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt={""} />
                    </a>
                    <div tw="-mr-2 flex items-center md:hidden">
                      <button type="button" tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span tw="sr-only">Open main menu</span>
                        <svg tw="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div tw="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a href="#posts" tw="font-medium text-gray-500 hover:text-gray-900">Beiträge</a>

                  <a href="#opencall" tw="font-medium text-gray-500 hover:text-gray-900">Open Call</a>

                  <a href="#contact" tw="font-medium text-gray-500 hover:text-gray-900">Kontakt</a>

                  <a href="#opencall" tw="font-medium text-indigo-600 hover:text-indigo-500">Dein Beitrag zählt</a>
                </div>
              </nav>
            </div>
            <div tw="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div tw="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div tw="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img tw="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
                  </div>
                  <div tw="-mr-2">
                    <button type="button" tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span tw="sr-only">Close main menu</span>
                      <svg tw="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div tw="px-2 pt-2 pb-3 space-y-1">
                  <a href="#posts" tw="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Beiträge</a>

                  <a href="#opencall" tw="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Open Call</a>

                  <a href="#contact" tw="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Kontakt</a>

                  <a href="#imprint" tw="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Impressum</a>
                </div>
                <a href="#opencall" tw="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                  Dein Beitrag zählt
                </a>
              </div>
            </div>
          </div>

          <main tw="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div tw="sm:text-center lg:text-left">
              <h1 tw="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span tw="block xl:inline">Data to enrich your</span>
                <span tw="block text-indigo-600 xl:inline">online business</span>
              </h1>
              <p tw="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div tw="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div tw="rounded-md shadow">
                  <a href="#opencall" tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
                <div tw="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#opencall" tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
          <div tw="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img tw="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
          </div>
        </IntroWrapper>
      </Intro>

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
              <p style={descriptionStyles}>{link.caption}</p>
              <div style={instaStyles}>
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

      <article style={imprintStyles}>
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
    </>

  )
}

export default IndexPage
