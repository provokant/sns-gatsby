import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ytUrl } from "../../site-config";
import { Container, Section, SectionTitle, SubTitle, VideoLink, VideoPreview, Videos, VideoTitle, VideoDescription } from "./layout";
import { YtIcon } from "./yt-icon";

export const YtVideos = () => {
  const data = useStaticQuery(graphql`
    query YoutubeQuery {
      allYoutubeVideo {
        videos: nodes {
          channelTitle
          title
          thumbnail {
            url
            width
            height
          }
          description
          internal {
            content
          }
          id: videoId
          date: publishedAt(locale: "de-DE", formatString: "DD.MM.YYYY")
        }
      }
    }
  `);
  const { videos } = data.allYoutubeVideo;

  return (
    <Section>
      <a name={"videos"} id={"videos"} href={"#videos"} />
      <Container>
        <div tw={"text-center"}>
          <SubTitle>Mitschnitte vom 14.06.21</SubTitle>
          <SectionTitle>Eure Beiträge auf YouTube</SectionTitle>
          <a href={ytUrl} target={"blank"} rel={"nofollow noreferer"} tw={"mb-8 flex justify-center"}>
            <YtIcon tw="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <Videos>
          {videos && videos.map((video) => (
            <VideoLink
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target={"_blank"}
              rel={"nofollow noopener noreferrer"}
              key={video.id}
            >
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDescription>
                veröffentlicht: {video.date} | aufgenommen Mo, 14.06.2021
              </VideoDescription>
              <VideoPreview style={{ maxWidth: "100%" }} alt={video.title ?? ""} src={video.thumbnail.url} />
            </VideoLink>
          ))}
        </Videos>
      </Container>
    </Section>

  )
}