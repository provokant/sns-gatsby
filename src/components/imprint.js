import * as React from "react";
import { Container, Paragraph, Section } from "./layout";
import { GlobalStyles } from "twin.macro";
import { maintainerLink, maintainerName, maintainerRepository  } from "../../site-config";

export const Imprint = () => {
  return (
    <>
      <GlobalStyles/>
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
      <Section>
        <Container>
          <Paragraph>
            Diese Seite wurde entwickelt und umgesetzt mit der freundlichen Unterstützung von <a href={maintainerLink} target={"_blank"} rel={"nofollow noopener noreferrer"} tw={"font-bold text-magenta"}>{maintainerName}</a>
          </Paragraph>
          <Paragraph>
            Der gesamte Quellcode steht der Öffentlichkeit zur Weiterverwendung kostenfrei zur Vergügung unter: <a href={maintainerRepository} target={"_blank"} rel={"nofollow noopener norefferer"} tw={"font-bold text-magenta"}>https:{maintainerRepository}</a>
          </Paragraph>
        </Container>
      </Section>
    </>
  )
}
