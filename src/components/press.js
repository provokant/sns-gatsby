import * as React from "react";
import tw from "twin.macro";
import { Container, SectionTitle, SubTitle, Section, PressList, PressLink, PressDescription } from "./layout";

export const Press = () => {
  const articles = [
    {
      title: "Eckpunktepapier: Öffnungsperspektiven für Hochschulen in Baden-Württemberg",
      url: "https://lastuve-bawue.de/eckpunktepapier-oeffnungsperspektiven-hochschulen-bw/",
      date: "06.06.2021",
      source: "vom Landesstudierendenvertretung Baden-Württemberg",
    },
    {
      url: "https://www.stuttgarter-nachrichten.de/inhalt.demo-auf-dem-karlsplatz-in-stuttgart-studierende-machen-ihrem-aerger-luft.ed59c911-1774-4dc0-9d48-80b8ac798804.html",
      date: "14.06.2021",
      source: "in den Stuttgarter Nachrichten",
      title: "Demo auf dem Karlsplatz: Studierende machen ihrem Ärger Luft",
    },
    {
      url: "https://www.swr.de/swraktuell/baden-wuerttemberg/stuttgart/studenten-demonstration-stuttgart-studieren-nicht-stagnieren-100.html",
      date: "14.06.2021",
      source: "im Süd-West Rundfunk (SWR)",
      title: "Studierende fordern bessere Bedingungen und Öffnungsperspektiven an den Universitäten"
    },
    {
      url: "https://www.mannheimer-morgen.de/politik_artikel,-laender-studierende-sind-die-bildungsverlierer-der-krise-_arid,1811044.html",
      date: "18.06.2021",
      source: "Mannheimer Morgen",
      title: "Studierende sind die Bildungsverlierer der Krise"
    }
  ];

  return (
    <Section>
      <Container>
        <div>
          <SubTitle>Was man so über uns spricht</SubTitle>
          <SectionTitle>Presseecke</SectionTitle>
          <PressList>
            {articles && articles.map(({ url, date, source, title }) =>
              <li key={url} tw={"mb-2"}>
                <PressLink href={url} rel={"noreferer nofollow"} alt={title}>
                  {title}
                </PressLink>
                <PressDescription>Veröffentlicht {source} am {date}</PressDescription>
              </li>
            )}
          </PressList>
        </div>
      </Container>
    </Section>
  )
}
