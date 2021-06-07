import { Section, TeaserHeadline } from "./layout";
import * as React from "react";
import { AcademicCapIcon, CashIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from "@heroicons/react/outline";
import { GlobalStyles } from "twin.macro";
import { themeColor } from "../../site-config";

export const Claims = () => {
  return (
    <>
      <GlobalStyles/>
      <Section>
        <div tw="py-12 bg-white">
          <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div tw="lg:text-center">
              <TeaserHeadline style={{color: themeColor}}>Unsere Forderungen</TeaserHeadline>
              <p tw="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Wir fordern vom Ministerium für Wissenschaft, Forschung und Kunst Baden-Württemberg angemessene Studienbedingungen
              </p>
            </div>

            <div tw="mt-10">
              <dl tw="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {listItems.map((item) => (
                  <div key={item.name} tw="relative">
                    <dt>
                      <div tw="absolute flex items-center justify-center h-12 w-12 rounded-md text-white" style={{backgroundColor: themeColor}}>
                        <item.icon tw="h-6 w-6" aria-hidden="true"/>
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
      "Wir fordern ein integratives Konzept der universitären Idee für die digitalen Angebote! Die Universität lebt auch außerhalb des Hörsaals und Diskurse lassen sich nur sehr schwer oder überhaupt nicht in Videokonferenzen führen.",
    icon: GlobeAltIcon,
  },
  {
    claim:
      "Wir fordern konkrete Perspektiven — sei es für die Öffnung der Akademien, Hochschulen und Universitäten, für die Eingliederung von Erstsemester im Studium oder Letztsemester auf dem Arbeitsmarkt!",
    icon: AcademicCapIcon,
  },
  {
    claim:
      "Wir fordern die Aussetzung der Gebühren für alle Studierenden, vor allem aber für die, die sich im internationalen oder zweiten Studium befinden!",
    icon: LightningBoltIcon,
  },
  {
    claim:
      "Wir fordern vernünftige, sozial angemessene finanzielle Unterstützung für Studierende!",
    icon: CashIcon,
  },
  {
    claim:
      "Wir fordern die Anpassung der Prüfungsordnungen auf die besonderen Bedingungen der Pandemie!",
    icon: ScaleIcon,
  }
]
