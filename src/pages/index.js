import * as React from "react"
import tw, { GlobalStyles } from "twin.macro";
import { Header } from "../components/header";
import { Statement } from "../components/statement";
import { Claims } from "../components/claims";
import { OpenCall } from "../components/open-call";
import { Link } from "gatsby";
import { Seo } from "../components/seo";
import { InstaPosts } from "../components/insta-posts";
import { Container } from "../components/layout";

const ImprintLink = tw(Link)`py-8`;

const IndexPage = () => {
  return (
    <>
      <Seo/>
      <GlobalStyles/>
      <Header/>
      <Statement/>
      <Claims/>
      <InstaPosts/>
      <OpenCall/>
      <Container>
        <ImprintLink to={"/imprint"}>Impressum</ImprintLink>
      </Container>
    </>
  )
}

export default IndexPage
