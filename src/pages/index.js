import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import { GlobalStyles } from "twin.macro";
import { Card, CardImage, CardParagraph, CardTitle, Container, PostItem, Posts, Section, } from "../components/layout";
import { Header } from "../components/header";
import { Statement } from "../components/statement";
import { Claims } from "../components/claims";
import { OpenCall } from "../components/open-call";
import { Imprint } from "../components/imprint";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode {
        nodes {
          id
          mediaType
          preview
          timestamp
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                width: 360
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `);
  const { allInstaNode: { nodes } } = data;
  const instaPosts = nodes && nodes
    // .filter(({mediaType}) => "GraphImage" === mediaType) // Filter by GraphImage or GraphVideo
    .map(
      ({
        id,
        caption,
        preview: imgPath,
        localFile: { childImageSharp: { gatsbyImageData: imageData } }
      }) => ({
        caption,
        color: "#BAD455",
        imgPath,
        imageData,
        url: `https://www.instagram.com/p/${id}/`,
      })
    );

  return (
    <>
      <GlobalStyles/>

      <Header/>

      <Statement/>

      <Claims/>

      <Section>
        <Container>
          <Posts>
            {instaPosts && instaPosts.map(link => (
              <PostItem key={link.url}>
                <Card>
                  <CardTitle>Vielleicht 'ne Überschrift</CardTitle>
                  <CardParagraph>
                    {link.caption}
                  </CardParagraph>
                  <a
                    href={`${link.url}`}
                    target={"_blank"}
                    rel={"nofollow noopener noreferrer"}
                  >
                    <CardImage alt={link.caption ?? ""} image={link.imageData}/>
                  </a>
                </Card>
              </PostItem>
            ))}
          </Posts>
        </Container>
      </Section>

      <OpenCall/>

      <Imprint/>
    </>

  )
}

export default IndexPage
