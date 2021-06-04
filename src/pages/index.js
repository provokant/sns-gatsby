import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import tw, { GlobalStyles } from "twin.macro";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { AcademicCapIcon, CashIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { formIframeSrc } from "../../site-config";
import { GatsbyImage } from "gatsby-plugin-image";

const navigation = [
  { name: 'Beiträge', href: '#posts', isMobileOnly: false, },
  { name: 'Open Call', href: '#opencall', isMobileOnly: false, },
  { name: 'Kontakt', href: '#contact', isMobileOnly: false, },
  { name: 'Impressum', href: '#imprint', isMobileOnly: true, },
];

const listItems = [
  {
    name: "Forderung #1",
    description:
      "Wir fordern ein integratives Konzept der universitären Idee für die digitalen Angebote! Die Universität lebt auch außerhalb des Hörsaals und Diskurse lassen sich nur sehr schwer oder überhaupt nicht in Videokonferenzen führen.",
    icon: GlobeAltIcon,
  },
  {
    name: "Forderung #2",
    description:
      "Wir fordern konkrete Perspektiven — sei es für die Öffnung der Akademien, Hochschulen und Universitäten, für die Eingliederung von Erstsemester im Studium oder Letztsemester auf dem Arbeitsmarkt!",
    icon: AcademicCapIcon,
  },
  {
    name: "Forderung #3",
    description:
      "Wir fordern die Aussetzung der Gebühren für alle Studierenden, vor allem aber für die, die sich im internationalen oder zweiten Studium befinden!",
    icon: LightningBoltIcon,
  },
  {
    name: "Forderung #4",
    description:
      "Wir fordern vernünftige, sozial angemessene finanzielle Unterstützung für Studierende!",
    icon: CashIcon,
  },
  {
    name: "Forderung #5",
    description:
      "Wir fordern die Anpassung der Prüfungsordnungen auf die besonderen Bedingungen der Pandemie!",
    icon: ScaleIcon,
  }
]

const form = {
  post: null,
  email: null,
  gaveConsent: false
}

const payload = {
  "entry.845892413": form.post ?? "No message",
  "entry.335473875": form.email ?? "No Email address",
  "entry.377939158": form.gaveConsent ? "Ja" : "Nein",
}
const Section = tw.section`relative bg-white overflow-hidden mb-36`;
const IntroWrapper = tw.div`max-w-7xl mx-auto`;
const Intro = tw.div`relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`;
const PolygonWrapper = tw.svg`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1`;
const PictureWrapper = tw.div`lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2`;
const Picture = tw.img`h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full`;
const HeroWrapper = tw.main`mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28`;
const Hero = tw.div`sm:text-center lg:text-left`;
const HeroTitle = tw.h1`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl`;
const HeroParagraph = tw.p`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`;
const Teaser = tw.p`mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto`;
const TeaserHeadline = tw.h2`text-base text-yellow-600 font-semibold tracking-wide uppercase`;
const Paragraph = tw.p`text-xl text-gray-500 lg:w-10/12`;
const Container = tw.div`max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8`;
const Posts = tw.ul`flex flex-wrap mb-12 text-left`;
const PostItem = tw.li`w-full p-6 mx-auto lg:w-1/3`;
const Card = tw.div`p-4 lg:p-8 rounded-xl bg-gray-50`;
const CardImage = tw(GatsbyImage)`object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl`;
const CardTitle = tw.h3`mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black`;
const CardParagraph = tw.p`mx-auto text-base font-medium leading-relaxed text-gray-700`;

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
              gatsbyImageData(
                quality: 90
                width: 360
                layout: CONSTRAINED
              )
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

      <Section>
        <Container>
          <Paragraph>
            In den vergangenen drei Semestern wurde das, was Studieren bedeutet, aus den Universitäten gefegt und in WG-Zimmer oder Kinderzimmer gekehrt. Mit teilweise fatalen Folgen: Nebeneinkünfte, die das Studieren häufig erst ermöglichen, brechen weg. Nach wie vor finden Prüfungen in Präsenz statt, es gelten häufig dieselben Fristen und Modalitäten wie vor der Pandemie. Archive, Bibliotheken, Labore oder Werkstätten haben geschlossen. Öffnungsperspektiven, wie es sie für Schulen gibt, fehlen. Wir wollen diese Probleme sichtbar machen und sie in die Öffentlichkeit und auf die Straße tragen. Motto: Wir wollen studieren — nicht stagnieren!<br/>
            Vor allem wehren wir uns gegen die psychischen Belastungen und die schlechten und niederschmetternden Zukunftsperspektiven des Studiums in der Pandemie! Über die Zahl der Abbrecher*innen, der coronabedingt vertagten Prüfungen oder die schiere Überforderung eines Online-Studiums wird kaum gesprochen. Wir möchten ein Zeichen setzen: Ihr seid nicht allein!<br/>
            Wir, das sind Studierende aller Akademien, Hochschulen und Universitäten in Stuttgart.
          </Paragraph>
        </Container>
      </Section>

      <Section>
        <div tw="py-12 bg-white">
          <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div tw="lg:text-center">
              <TeaserHeadline>Unsere Forderungen</TeaserHeadline>
              <p tw="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Wir fordern vom Ministerium für Wissenschaft, Forschung und Kunst Baden-Württemberg angemessene Studienbedingungen
              </p>
            </div>

            <div tw="mt-10">
              <dl tw="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {listItems.map((item) => (
                  <div key={item.name} tw="relative">
                    <dt>
                      <div tw="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                        <item.icon tw="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p tw="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                    </dt>
                    <dd tw="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Teaser>
              Wir möchten gehört und nicht vergessen werden! Wir fordern aktive Beteiligung! Mit uns und nicht gegen uns geht Hochschule besser!
            </Teaser>
          </div>
        </div>
      </Section>



      <Section>
        <Container>
          <Posts>
            {instaPosts && instaPosts.map(link => (
              <PostItem key={link.url}>
                <Card>
                  <CardTitle>Vielleicht 'ne Überschrift</CardTitle>
                  <CardParagraph>
                    {link.caption}
                  </CardParagraph>
                  <a
                    href={`${link.url}`}
                    target={"_blank"}
                    rel={"nofollow noopener noreferrer"}
                  >
                    <CardImage alt={link.caption ?? ""} image={link.imageData}/>
                  </a>
                </Card>
              </PostItem>
            ))}
          </Posts>
        </Container>
      </Section>

      <Section>
        <Container>
          <div>
            <div tw="md:grid md:grid-cols-3 md:gap-6">
              <div tw="md:col-span-1">
                <div tw="px-4 sm:px-0">
                  <h3 tw="text-lg font-medium leading-6 text-gray-900">Open Call</h3>
                  <p tw="mt-1 text-sm text-gray-600">
                    This information will be displayed publicly so be careful what you share.
                  </p>
                </div>
              </div>
              <div tw="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div tw="shadow sm:rounded-md sm:overflow-hidden">
                    <div tw="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div tw="grid grid-cols-3 gap-6">
                        <div tw="col-span-3 sm:col-span-2">
                          <label htmlFor="company_website" tw="block text-sm font-medium text-gray-700">
                            Thema
                          </label>
                          <div tw="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="company_website"
                              id="company_website"
                              tw="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                              placeholder="www.example.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="about" tw="block text-sm font-medium text-gray-700">
                          Stellungenahme
                        </label>
                        <div tw="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        tw="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Deine Story ..."
                        defaultValue={''}
                      />
                        </div>
                        <p tw="mt-2 text-sm text-gray-500">
                          Brief description for your profile. URLs are hyperlinked.
                        </p>
                      </div>
                    </div>

                    <div tw="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        tw="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>


      {/*<Section>*/}
      {/*  <iframe*/}
      {/*    title={"Open Call"}*/}
      {/*    src={formIframeSrc}*/}
      {/*    tw={"w-full"} height={1200} frameBorder="0" marginHeight="0" marginWidth="0"*/}
      {/*  >*/}
      {/*    Wird geladen…*/}
      {/*  </iframe>*/}
      {/*</Section>*/}

      <Section>
        <Container>
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
        </Container>
      </Section>
    </>

)
}

export default IndexPage
