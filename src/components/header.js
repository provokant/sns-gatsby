import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Hero, HeroParagraph, HeroTitle, HeroWrapper, Intro, IntroWrapper, Picture, PictureWrapper, Section } from "./layout";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import tw, { GlobalStyles } from "twin.macro";
import { featureCta, siteLogoTitle, siteUrl } from "../../site-config";
import { graphql, useStaticQuery, Link } from "gatsby";

const Logo = tw(Link)`font-bold`;

export const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "intro.jpg"}) {
        childImageSharp {
          gatsbyImageData(quality: 90, width: 680, layout: CONSTRAINED)
        }
      }
    }
  `);
  const { gatsbyImageData: imgData } = data.file.childImageSharp;

  return (
    <>
      <GlobalStyles />
      <Section>
        <IntroWrapper>
          <Intro>
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
                          <Logo to={"/"}>
                            {siteLogoTitle}
                          </Logo>
                          <div tw="-mr-2 flex items-center md:hidden">
                            <Popover.Button
                              tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                              <span tw="sr-only">Menü öffnen</span>
                              <MenuIcon tw="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                      <div tw="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.filter(({ isMobileOnly }) => !isMobileOnly).map((item) => (
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
                            <Logo href={siteUrl}>
                              {siteLogoTitle}
                            </Logo>
                          </div>
                          <div tw="-mr-2">
                            <Popover.Button
                              tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
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
                        {featureCta && <a
                          href="#opencall"
                          tw="block w-full px-5 py-3 text-center font-medium text-yellow-600 bg-gray-50 hover:bg-gray-100"
                        >
                          Eigenen Post einreichen
                        </a>}
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
                  <span tw="block xl:inline text-magenta">nicht stagnieren</span>
                </HeroTitle>
                <HeroParagraph>
                  16.07.2021 — Stadtgarten Konstanz — 19:00 Uhr
                </HeroParagraph>
                {featureCta && <div tw="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div tw="rounded-md shadow">
                    <a
                      href="#flyer"
                      tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
                    >
                      Flyer ausdrucken
                    </a>
                  </div>
                  <div tw="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#opencall"
                      tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"
                    >
                      Eigenen Post einreichen
                    </a>
                  </div>
                </div>}
              </Hero>
            </HeroWrapper>
          </Intro>
        </IntroWrapper>

        <PictureWrapper>
          <Picture
            image={imgData} imgStyle={{ objectFit: "contain" }}
            alt="" />
        </PictureWrapper>
      </Section>
    </>
  )
}

const navigation = [
  { name: 'Beiträge', href: '/#posts', isMobileOnly: false },
  { name: 'Videos', href: '/#videos', isMobileOnly: false },
  { name: 'Open Call', href: '/#opencall', isMobileOnly: false },
  // { name: 'Kontakt', href: '/imprint', isMobileOnly: false },
];
