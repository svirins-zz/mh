import JSONPretty from 'react-json-pretty';
import Head from 'next/head';
import Link from 'next/link';

import { groq } from 'next-sanity';
import { NextSeo } from 'next-seo';
import { withDimensions, SanityImg } from 'sanity-react-extra';
import {
  imageUrlBuilder,
  sanityStaticProps,
  useSanityQuery,
} from '../utils/sanity';

const query = groq`{
  "site": *[_id == "site"][0] {
    ...,
    "logo": ${withDimensions('logo')}
  },
  "landingPage": *[_id == "landingPage"][0]
}`;

export const getStaticProps = async (context) => ({
  props: await sanityStaticProps(query, context),
});

export default function Home(props) {
  const {
    data: { site, landingPage },
  } = useSanityQuery(query, props);

  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/assets/fonts/clearsans/ttf/ClearSans-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/EBGaramond//ttf/ClearSans-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/EBGaramond/ttf/ClearSans-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <NextSeo
        title={landingPage.seo.title}
        description={landingPage.seo.description}
      />
      <div className="container flex flex-col items-center p-16 mx-auto">
        <SanityImg builder={imageUrlBuilder} image={site.logo} height={200} />
        <h1 className="my-8 text-4xl text-blue-900">{landingPage.heading}</h1>
        <p className="text-gray-500">{landingPage.description}</p>
      </div>
    </div>
  );
}
