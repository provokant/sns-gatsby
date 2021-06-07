import * as React from "react";
import tw from "twin.macro";
import { Container, Paragraph, Section } from "./layout";

export const Statement = () => {
  return (
    <Section>
      <Container>
        <Paragraph>
          In den vergangenen drei Semestern wurde das, was Studieren bedeutet, aus den Universitäten gefegt und in
          WG-Zimmer oder Kinderzimmer gekehrt. Mit teilweise fatalen Folgen: Nebeneinkünfte, die das Studieren häufig
          erst ermöglichen, brechen weg. Nach wie vor finden Prüfungen in Präsenz statt, es gelten häufig dieselben
          Fristen und Modalitäten wie vor der Pandemie. Archive, Bibliotheken, Labore oder Werkstätten haben
          geschlossen. Öffnungsperspektiven, wie es sie für Schulen gibt, fehlen. Wir wollen diese Probleme sichtbar
          machen und sie in die Öffentlichkeit und auf die Straße tragen. Motto:
        </Paragraph>
        <Paragraph tw={"font-bold"}>
          Wir wollen studieren — nicht stagnieren!
        </Paragraph>

        <Paragraph>
          Vor allem wehren wir uns gegen die psychischen Belastungen und die schlechten und niederschmetternden
          Zukunftsperspektiven des Studiums in der Pandemie! Über die Zahl der Abbrecher*innen, der coronabedingt
          vertagten Prüfungen oder die schiere Überforderung eines Online-Studiums wird kaum gesprochen. Wir möchten ein
          Zeichen setzen: <span tw={"font-bold"}>Ihr seid nicht allein!</span><br/>
          Wir, das sind Studierende aller Akademien, Hochschulen und Universitäten in Stuttgart.
        </Paragraph>

        <Paragraph tw={"font-bold"}>
          Wir möchten gehört und nicht vergessen werden!<br/><br/>
          Wir zeigen Gesicht — mit Maske.<br/>
          Wir gehen auf die Straße — mit Abstand.<br/>
          Wir sind in der Krise solidarisch — ohne Zögern.
        </Paragraph>
      </Container>
    </Section>
  )
}
