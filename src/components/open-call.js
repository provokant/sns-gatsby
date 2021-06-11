import { Container, Section } from "./layout";
import * as React from "react";
import { featureCustomForm, formIframeSrc } from "../../site-config";
import tw, { GlobalStyles } from "twin.macro";
import { CustomForm } from "./custom-form";

export const OpenCall = () => {
  return (
    <>
      <GlobalStyles/>
      <Section>
        <a name={"opencall"} id={"opencall"} href={"#opencall"}/>
        <Container>
          {featureCustomForm
          ? <CustomForm/>
          : <iframe
            title={"Open Call"}
            src={formIframeSrc}
            tw={"w-full"} height={600} frameBorder="0" marginHeight="0" marginWidth="0"
          >
            Forumlar wird geladen…
          </iframe>}
        </Container>
      </Section>
    </>
  )
}
