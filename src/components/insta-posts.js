import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import tw from "twin.macro";
import { Card, CardImage, Container, PostWrapper, Posts, Section, SectionTitle, SubTitle } from "./layout";
import { InstaIcon } from "./insta-icon";
import { instagramUrl } from "../../site-config";

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
                height: 600,
                layout: CONSTRAINED,
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
      <a name={"posts"} id={"posts"} href={"#posts"} />
      <Container>
        <div tw={"text-center"}>
          <SubTitle>Was ihr so sagt</SubTitle>
          <SectionTitle>Eure Beiträge auf Instagram</SectionTitle>
          <a href={instagramUrl} target={"blank"} rel={"nofollow noreferer"} tw={"mb-8 flex justify-center"}>
            <InstaIcon tw="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <Posts>
          {instaPosts && instaPosts.map((link) => (
            <PostWrapper key={link.url}>
              <Card>
                <a
                  href={`${link.url}`}
                  target={"_blank"}
                  rel={"nofollow noopener noreferrer"}
                >
                  <CardImage style={{ maxWidth: "100%" }} alt={link.caption ?? ""} image={link.imageData} imgStyle={{ objectFit: "contain" }} />
                </a>
              </Card>
            </PostWrapper>
          ))}
        </Posts>
      </Container>
    </Section>
  )
}
