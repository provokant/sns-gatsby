import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Card, CardImage, Container, PostItem, Posts, Section } from "./layout";

export const InstaPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode(sort: {fields: timestamp, order: DESC}) {
        nodes {
          id
          timestamp
          mediaType
          preview
          timestamp
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                width: 600
                placeholder: BLURRED
                formats: [AUTO, WEBP]
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
      <a name={"posts"} id={"posts"}/>
      <Container>
        <Posts>
          {instaPosts && instaPosts.map(link => (
            <PostItem key={link.url}>
              <Card>
                <a
                  href={`${link.url}`}
                  target={"_blank"}
                  rel={"nofollow noopener noreferrer"}
                >
                  <CardImage style={{maxWidth: "100%"}} alt={link.caption ?? ""} image={link.imageData} imgStyle={{objectFit: "contain"}}/>
                </a>
              </Card>
            </PostItem>
          ))}
        </Posts>
      </Container>
    </Section>
  )
}
