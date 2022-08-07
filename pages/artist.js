import matter from "gray-matter";
import Post from "../components/Post";
import fs from "fs";
import path from "path";
import Header from "../components/Header";
import Head from "next/head";
import { sortByDate } from "../utils";

export default function Developer({ posts }) {
  return (
    <>
      <Header main="I create things." tag="Laura-Ashlee: Artist" tagline="Here are some examples of my work."/>
      <section className="projects">
        <div className="projects-grid">
          {posts.map((post, index) => (
            <Post post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts/art_posts"));

  //get slug and frontmatter from the post

  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts/art_posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
