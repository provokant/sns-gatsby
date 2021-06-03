import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import tw, { GlobalStyles } from "twin.macro";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: 'Beiträge', href: '#posts', isMobileOnly: false, },
  { name: 'Open Call', href: '#opencall', isMobileOnly: false, },
  { name: 'Kontakt', href: '#contact', isMobileOnly: false, },
  { name: 'Impressum', href: '#imprint', isMobileOnly: true, },
];

const Section = tw.section`relative bg-white overflow-hidden`;
const IntroWrapper = tw.div`max-w-7xl mx-auto`;
const Intro = tw.div`relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`;
const PolygonWrapper = tw.svg`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1`;
const PictureWrapper = tw.div`lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2`;
const Picture = tw.img`h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full`;
const HeroWrapper = tw.main`mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28`;
const Hero = tw.div`sm:text-center lg:text-left`;
const HeroTitle = tw.h1`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl`;
const HeroParagraph = tw.p`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`;

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
      <Section>
        <IntroWrapper>
          <Intro>
            <PolygonWrapper
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </PolygonWrapper>

            <Popover>
              {({ open }) => (
                <>
                  <div tw="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav
                      tw="relative flex items-center justify-between sm:h-10 lg:justify-start"
                      aria-label="Global"
                    >
                      <div tw="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div tw="flex items-center justify-between w-full md:w-auto">
                          <a href="#">
                            <span tw="sr-only">Studieren nicht Stagnieren!</span>
                            <img
                              tw="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            />
                          </a>
                          <div tw="-mr-2 flex items-center md:hidden">
                            <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                              <span tw="sr-only">Menü öffnen</span>
                              <MenuIcon tw="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                      <div tw="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.filter(({isMobileOnly}) => !isMobileOnly).map((item) => (
                          <a key={item.name} href={item.href} tw="font-medium text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      static
                      tw="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                      <div tw="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div tw="px-5 pt-4 flex items-center justify-between">
                          <div>
                            <img
                              tw="h-8 w-auto"
                              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                              alt=""
                            />
                          </div>
                          <div tw="-mr-2">
                            <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                              <span tw="sr-only">Close main menu</span>
                              <XIcon tw="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div tw="px-2 pt-2 pb-3 space-y-1">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              tw="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <a
                          href="#"
                          tw="block w-full px-5 py-3 text-center font-medium text-yellow-600 bg-gray-50 hover:bg-gray-100"
                        >
                          Eigenen Post einreichen
                        </a>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <HeroWrapper>
              <Hero>
                <HeroTitle>
                  <span tw="block xl:inline">Studieren</span>{" "}
                  <span tw="block text-yellow-600 xl:inline">nicht stagnieren</span>
                </HeroTitle>
                <HeroParagraph>
                  14.06.2021 — Karlsplatz Stuttgart — 19:00 Uhr
                </HeroParagraph>
                <div tw="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div tw="rounded-md shadow">
                    <a
                      href="#"
                      tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
                    >
                      Auf Insta teilen
                    </a>
                  </div>
                  <div tw="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"
                    >
                      Eigenen Post einreichen
                    </a>
                  </div>
                </div>
              </Hero>
            </HeroWrapper>
          </Intro>
        </IntroWrapper>
        <PictureWrapper>
          <Picture
            src="https://images.unsplash.com/photo-1583870996776-847fa9899398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt=""/>
        </PictureWrapper>
      </Section>
      {/*<IntroWrapper>*/}
      {/*  <Intro>*/}
      {/*    <PolygonWrapper*/}
      {/*      fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"*/}
      {/*    >*/}
      {/*      <polygon points="50,0 100,0 50,100 0,100"/>*/}
      {/*    </PolygonWrapper>*/}

      {/*    <div>*/}
      {/*      <div tw="relative pt-6 px-4 sm:px-6 lg:px-8">*/}
      {/*        <nav tw="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">*/}
      {/*          <div tw="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">*/}
      {/*            <div tw="flex items-center justify-between w-full md:w-auto">*/}
      {/*              <a href="#opencall">*/}
      {/*                <span tw="sr-only">Workflow</span>*/}
      {/*                <img tw="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-yellow-600.svg"*/}
      {/*                     alt={""}/>*/}
      {/*              </a>*/}
      {/*              <div tw="-mr-2 flex items-center md:hidden">*/}
      {/*                <button type="button"*/}
      {/*                        tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"*/}
      {/*                        aria-expanded="false">*/}
      {/*                  <span tw="sr-only">Open main menu</span>*/}
      {/*                  <svg tw="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
      {/*                       stroke="currentColor" aria-hidden="true">*/}
      {/*                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
      {/*                          d="M4 6h16M4 12h16M4 18h16"/>*/}
      {/*                  </svg>*/}
      {/*                </button>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div tw="hidden md:block md:ml-10 md:pr-4 md:space-x-8">*/}
      {/*            <a href="#posts" tw="font-medium text-gray-500 hover:text-gray-900">Beiträge</a>*/}

      {/*            <a href="#opencall" tw="font-medium text-gray-500 hover:text-gray-900">Open Call</a>*/}

      {/*            <a href="#contact" tw="font-medium text-gray-500 hover:text-gray-900">Kontakt</a>*/}

      {/*            <a href="#opencall" tw="font-medium text-yellow-600 hover:text-yellow-500">Dein Beitrag zählt</a>*/}
      {/*          </div>*/}
      {/*        </nav>*/}
      {/*      </div>*/}
      {/*      <div tw="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">*/}
      {/*        <div tw="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">*/}
      {/*          <div tw="px-5 pt-4 flex items-center justify-between">*/}
      {/*            <div>*/}
      {/*              <img tw="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-yellow-600.svg" alt=""/>*/}
      {/*            </div>*/}
      {/*            <div tw="-mr-2">*/}
      {/*              <button type="button"*/}
      {/*                      tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">*/}
      {/*                <span tw="sr-only">Close main menu</span>*/}
      {/*                <svg tw="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
      {/*                     stroke="currentColor" aria-hidden="true">*/}
      {/*                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>*/}
      {/*                </svg>*/}
      {/*              </button>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div tw="px-2 pt-2 pb-3 space-y-1">*/}
      {/*            <a href="#posts"*/}
      {/*               tw="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Beiträge</a>*/}

      {/*            <a href="#opencall"*/}
      {/*               tw="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Open*/}
      {/*              Call</a>*/}

      {/*            <a href="#contact"*/}
      {/*               tw="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Kontakt</a>*/}

      {/*            <a href="#imprint"*/}
      {/*               tw="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Impressum</a>*/}
      {/*          </div>*/}
      {/*          <a href="#opencall"*/}
      {/*             tw="block w-full px-5 py-3 text-center font-medium text-yellow-600 bg-gray-50 hover:bg-gray-100">*/}
      {/*            Dein Beitrag zählt*/}
      {/*          </a>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <main tw="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">*/}
      {/*      <div tw="sm:text-center lg:text-left">*/}
      {/*        <h1 tw="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">*/}
      {/*          <span tw="block xl:inline">Data to enrich your</span>*/}
      {/*          <span tw="block text-yellow-600 xl:inline">online business</span>*/}
      {/*        </h1>*/}
      {/*        <p tw="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">*/}
      {/*          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet*/}
      {/*          fugiat veniam occaecat fugiat aliqua.*/}
      {/*        </p>*/}
      {/*        <div tw="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">*/}
      {/*          <div tw="rounded-md shadow">*/}
      {/*            <a href="#opencall"*/}
      {/*               tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10">*/}
      {/*              Get started*/}
      {/*            </a>*/}
      {/*          </div>*/}
      {/*          <div tw="mt-3 sm:mt-0 sm:ml-3">*/}
      {/*            <a href="#opencall"*/}
      {/*               tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10">*/}
      {/*              Live demo*/}
      {/*            </a>*/}
      {/*          </div>*/}
      {/*    </main>*/}
      {/*  </Intro>*/}
      {/*</IntroWrapper>*/}



      {/*<title>Studieren nicht stagnieren! 14.6. um 19Uhr Karlsplatz, Stuttgart</title>*/}
      {/*<h1 style={headingStyles}>*/}
      {/*  Wir fordern!!*/}
      {/*  <br/>*/}
      {/*  <span style={headingAccentStyles}>— die Aussetzung der Gebühren für alle Studierenden</span>*/}
      {/*  <span role="img" aria-label="Party popper emojis">*/}
      {/*    🎉🎉🎉*/}
      {/*  </span>*/}
      {/*</h1>*/}
      {/*<p style={paragraphStyles}>*/}
      {/*  Komm am <code style={codeStyles}>Montag, 14.06.2021</code> zum Karlsplatz nach Stuttgart!*/}
      {/*  Komm um <code style={codeStyles}>19:00 Uhr</code> zur Kundgebung und Protest.*/}
      {/*</p>*/}
      {/*<ul style={listStyles}>*/}
      {/*  {instaPosts && instaPosts.map(link => (*/}
      {/*    <li key={link.url} style={{ ...listItemStyles, color: link.color }}>*/}
      {/*      <span>*/}
      {/*        <a*/}
      {/*          style={linkStyles}*/}
      {/*          href={`${link.url}`}*/}
      {/*          target={"_blank"}*/}
      {/*          rel={"nofollow noopener noreferrer"}*/}
      {/*        >*/}
      {/*          {link.caption}*/}
      {/*        </a>*/}
      {/*        <p style={descriptionStyles}>{link.caption}</p>*/}
      {/*        <div style={instaStyles}>*/}
      {/*          <GatsbyImage alt={link.caption ?? ""} image={link.imageData} style={imgStyles}/>*/}
      {/*        </div>*/}
      {/*      </span>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}

      {/*<section style={sectionStyles}>*/}
      {/*  <iframe*/}
      {/*    title={"Open Call"}*/}
      {/*    src={formIframeSrc}*/}
      {/*    width={sectionStyles.width} height={1200} frameBorder="0" marginHeight="0" marginWidth="0"*/}
      {/*  >*/}
      {/*    Wird geladen…*/}
      {/*  </iframe>*/}
      {/*</section>*/}

      {/*<article style={imprintStyles}>*/}
      {/*  <h1 id="impressum">*/}
      {/*    Impressum*/}
      {/*  </h1>*/}
      {/*  <h2 id="angaben-gemäß-§-5-tmg">*/}
      {/*    Angaben gemäß § 5 TMG*/}
      {/*  </h2>*/}
      {/*  <p>*/}
      {/*    Maximilian Sprenger<br/>*/}
      {/*    Böheimstraße 43a<br/>*/}
      {/*    70199 Stuttgart*/}
      {/*  </p>*/}
      {/*  <h2 id="kontakt">*/}
      {/*    Kontakt*/}
      {/*  </h2>*/}
      {/*  <p>Telefon: <em>Kann per E-Mail angefordert werden</em><br/>*/}
      {/*    E-Mail: studieren.nicht.stagnieren @ posteo.de</p>*/}
      {/*  <h2 id="streitschlichtung">*/}
      {/*    Streitschlichtung*/}
      {/*  </h2>*/}
      {/*  <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:*/}
      {/*    <a href="https://ec.europa.eu/consumers/odr" target="_blank"*/}
      {/*       rel="nofollow noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.*/}
      {/*    Unsere E-Mail-Adresse finden Sie oben im Impressum.*/}
      {/*    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle*/}
      {/*    teilzunehmen.</p>*/}
      {/*  <h3 id="haftung-für-inhalte">*/}
      {/*    Haftung für Inhalte*/}
      {/*  </h3>*/}
      {/*  <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen*/}
      {/*    Gesetzen verantwortlich.*/}
      {/*    Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte*/}
      {/*    fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit*/}
      {/*    hinweisen.*/}
      {/*    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen*/}
      {/*    bleiben hiervon unberührt.*/}
      {/*    Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung*/}
      {/*    möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend*/}
      {/*    entfernen.</p>*/}
      {/*  <h3 id="haftung-für-links">*/}
      {/*    Haftung für Links*/}
      {/*  </h3>*/}
      {/*  <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.*/}
      {/*    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.*/}
      {/*    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten*/}
      {/*    verantwortlich.*/}
      {/*    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.*/}
      {/*    Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>*/}
      {/*  <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer*/}
      {/*    Rechtsverletzung nicht zumutbar.*/}
      {/*    Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>*/}
      {/*  <h3 id="urheberrecht">*/}
      {/*    Urheberrecht*/}
      {/*  </h3>*/}
      {/*  <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen*/}
      {/*    Urheberrecht.*/}
      {/*    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des*/}
      {/*    Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.*/}
      {/*    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.*/}
      {/*    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter*/}
      {/*    beachtet.*/}
      {/*    Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine*/}
      {/*    Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.*/}
      {/*    Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen</p>*/}
      {/*</article>*/}
    </>

)
}

export default IndexPage
