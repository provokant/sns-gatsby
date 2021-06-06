import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Card, CardImage, CardParagraph, CardTitle, Container, PostItem, Posts, Section } from "./layout";

export const InstaPosts = () => {
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
      }) => {
        return {
          caption,
          imgPath,
          imageData,
          title: caption && caption.slice(0, caption.match(/[!?.,;]/m)?.index + 1),
          url: `https://www.instagram.com/p/${id}/`,
        }
      }
    );

  return (
    <Section>
      <Container>
        <Posts>
          {instaPosts && instaPosts.map(link => (
            <PostItem key={link.url}>
              <Card>
                <CardTitle>{link.title}</CardTitle>
                <CardParagraph>
                  {link.caption}
                </CardParagraph>
                <a
                  href={`${link.url}`}
                  target={"_blank"}
                  rel={"nofollow noopener noreferrer"}
                >
                  <CardImage alt={link.caption ?? ""} image={link.imageData} imgStyle={{objectFit: "contain"}}/>
                </a>
              </Card>
            </PostItem>
          ))}
        </Posts>
      </Container>
    </Section>
  )
}
