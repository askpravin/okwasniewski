import MainTemplate from "src/templates/MainTemplate";
import Skills from "src/components/Skills";
import Hero from "src/components/Hero";
import Work from "src/components/Work";
import About from "src/components/About";
import { getPosts } from "src/lib/getAllPosts";
import Contact from "src/components/Contact";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainTemplate title="Software Engineer">
      <Head>
        <title>Pravin Jadhav - App Developer</title>
      </Head>
      <Hero />
      <Work posts={posts} />
      <About />
      <Skills />
      <Contact />
    </MainTemplate>
  );
}
export async function getStaticProps() {
  const posts = await getPosts({ directory: "portfolio", limit: 4 });

  return {
    props: {
      posts,
    },
  };
}
