import * as React from "react"
import { GlobalStyles } from "twin.macro";
import { Header } from "../components/header";
import { Statement } from "../components/statement";
import { Claims } from "../components/claims";
import { OpenCall } from "../components/open-call";
import { Imprint } from "../components/imprint";
import { Seo } from "../components/seo";
import { InstaPosts } from "../components/insta-posts";

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
      <Imprint/>
    </>
  )
}

export default IndexPage
