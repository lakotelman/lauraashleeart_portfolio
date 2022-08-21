import matter from "gray-matter";
import DevPost from "../components/DevPost";
import DevSkills from "../components/DevSkills";
import fs from "fs";
import path from "path";
import Header from "../components/Header";
import Head from "next/head";
import { sortByDate } from "../utils";

export default function Developer({ posts }) {
  return (
    <>
      <Header tag="Laura-Ashlee: Developer" main="I build things."tagline="Let's connect."/>
        <div className="container"><DevSkills/></div>
        <h1>Projects and Blog</h1>
      <section className="projects">
        <div className="projects-grid">
          {posts.map((post, index) => (
            <DevPost post={post} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts/dev_posts"));

  //get slug and frontmatter from the post

  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts/dev_posts", filename),
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
