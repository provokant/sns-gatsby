import * as React from "react"
import tw, { GlobalStyles } from "twin.macro";
import { Header } from "../components/header";
import { Statement } from "../components/statement";
import { Claims } from "../components/claims";
import { OpenCall } from "../components/open-call";
import { Link } from "gatsby";
import { Seo } from "../components/seo";
import { InstaPosts } from "../components/insta-posts";
import { Container, SubTitle, Section, SectionTitle } from "../components/layout";
import { YtVideos } from "../components/yt-videos";
import { Press } from "../components/press";

const ImprintLink = tw(Link)`py-8`;

const IndexPage = () => {
  return (
    <>
      <Seo />
      <GlobalStyles />
      <Header />
      <Statement />
      <Section>
        <Container tw="lg:text-center">
          <SubTitle>
            Disclaimer
          </SubTitle>
          <SectionTitle>
            Wir <span tw={"text-magenta"}>distanzieren</span> uns klar von "Querdenken711"
          </SectionTitle>
        </Container>
      </Section>
      <Claims />
      <InstaPosts />
      <YtVideos />
      <Press />
      <OpenCall />
      <Container>
        <ImprintLink to={"/imprint"}>Impressum</ImprintLink>
      </Container>
    </>
  )
}

export default IndexPage
