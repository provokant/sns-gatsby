import { Section, Teaser, TeaserHeadline } from "./layout";
import * as React from "react";
import { AcademicCapIcon, CashIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from "@heroicons/react/outline";

export const Claims = () => {
  return (
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
  )
}

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
