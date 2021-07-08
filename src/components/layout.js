import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

export const Section = tw.section`relative bg-white mb-36`;
export const SectionTitle = tw.h2`mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl`;
export const IntroWrapper = tw.div`max-w-7xl mx-auto`;
export const Intro = tw.div`relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`;
export const PictureWrapper = tw.div`lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2`;
export const Picture = tw(GatsbyImage)`h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full`;
export const HeroWrapper = tw.main`mt-16 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28`;
export const Hero = tw.div`text-center lg:text-left`;
export const HeroTitle = tw.h1`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl`;
export const HeroParagraph = tw.p`mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`;
export const SubTitle = tw.h2`text-base font-semibold tracking-wide text-magenta uppercase`;
export const Paragraph = tw.p`text-xl text-gray-900 lg:w-10/12`;
export const Container = tw.div`max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8`;
export const Posts = tw.ul`flex flex-wrap mb-12 text-left -mx-1 lg:-mx-8`;
export const PostWrapper = tw.li`w-full w-1/3`;
export const Card = tw.div`p-1 lg:p-8`;
export const CardImage = tw(GatsbyImage)`object-cover object-center w-full`;
export const CardTitle = tw.h3`mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black`;
export const CardParagraph = tw.p`mx-auto text-base font-medium leading-relaxed text-gray-700`;
export const Videos = tw.div`flex flex-wrap mb-12 text-left -mx-1 lg:-mx-8`;
export const VideoLink = tw.a`p-1 lg:p-8 w-full md:w-1/3`;
export const VideoPreview = tw.img`object-cover object-center w-full`;
export const VideoTitle = tw.div`font-extrabold py-4 px-2`;
export const VideoDescription = tw.div`text-sm text-gray-500 pb-4 px-2`;
export const PressList = tw.ul`mb-12 text-left`;
export const PressLink = tw.a`text-2xl font-bold hover:text-magenta`;
export const PressDescription = tw.div`py-4 text-base text-gray-600`;