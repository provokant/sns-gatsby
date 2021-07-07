import { Section, SectionTitle, SubTitle } from "./layout";
import * as React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import tw, { GlobalStyles } from "twin.macro";

export const Claims = () => {
  return (
    <>
      <GlobalStyles />
      <Section>
        <a name={"claims"} id={"claims"} href={"#claims"}>
          <span tw="sr-only">Studieren nicht Stagnieren!</span>
        </a>
        <div tw="py-12 bg-white">
          <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div tw="lg:text-center">
              <SubTitle>Unsere Forderungen</SubTitle>
              <SectionTitle>
                Wir fordern vom Ministerium für Wissenschaft, Forschung und Kunst Baden-Württemberg <span
                  tw={"text-magenta"}>angemessene Studienbedingungen</span>
              </SectionTitle>
            </div>

            <div tw="mt-10">
              <dl tw="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {listItems.map((item, index) => (
                  <div key={index} tw="relative">
                    <dt>
                      <div tw="absolute flex items-center justify-center h-12 w-12 rounded-md text-white bg-magenta">
                        <item.icon tw="h-6 w-6" aria-hidden="true" />
                      </div>
                    </dt>
                    <dd tw="ml-16 text-lg leading-6 font-medium text-gray-900">{item.claim}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

const listItems = [
  {
    claim:
      "Wir fordern konkrete und planungssichere Perspektiven — sei es für die Öffnung der Hochschulen, für die Konzeption eines Hybridsemesters oder für die Eingliederung von Erstsemester im Studium oder Letztsemester auf dem Arbeitsmarkt!",
    icon: ExclamationCircleIcon,
  },
  {
    claim:
      "Wir fordern einen entschiedenen Ausbau und Förderung der psychosozialen Beratungs- und Hilfsangebote, auch nach der Pandemie!",
    icon: ExclamationCircleIcon,
  },
  {
    claim:
      "Wir fordern ein integratives Konzept der digitalen Hochschule! Die Hochschule lebt auch außerhalb des Hörsaals und Diskurse lassen sich nur deutlich reduziert  in Videokonferenzen führen!",
    icon: ExclamationCircleIcon,
  },
  {
    claim:
      "Wir fordern die Aussetzung der Gebühren für alle Studierenden, vor allem aber für die, die sich im internationalen oder zweiten Studium befinden!",
    icon: ExclamationCircleIcon,
  },
  {
    claim:
      "Wir fordern vernünftige, unbürokratische und sozial angemessene finanzielle Unterstützung für Studierende!",
    icon: ExclamationCircleIcon,
  },
  {
    claim:
      "Wir fordern die sozialverträgliche und integrative Anpassung der Prüfungsordnungen und Fristen auf die besonderen Bedingungen der Pandemie!",
    icon: ExclamationCircleIcon,
  },
  {
    claim:
      "Wir fordern maßgebliche Beteiligung und Zusammenarbeit mit der Politik in der Überwindung der pandemiebedingten Herausforderungen!",
    icon: ExclamationCircleIcon,
  }
]
