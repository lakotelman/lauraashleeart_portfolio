import matter from "gray-matter"
import Post from "../components/Post";
import fs from "fs";
import path from "path";
import Head from "next/head";
import {sortByDate} from "../utils"

export default function Developer({ posts }) {
  return (
    <div>
      <Head>
        <title>Laura-Ashlee Makes Things</title>
        <link rel="stylesheet" href="assets/styles.css" />
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Calistoga&family=Montserrat&display=swap");
        </style>
      </Head>
      <section className="projects">
        <div className="projects-grid">
            {posts.map((post, index)=>(
              <Post post={post}/>
            ))}
        </div>
      </section>
    </div>
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
    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate)
    },
  };
}
