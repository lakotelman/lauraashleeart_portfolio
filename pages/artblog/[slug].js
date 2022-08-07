import matter from "gray-matter";
import BlogSingle from "../../components/ArtBlogSingle";
import { marked } from "marked";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function ArtPostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <BlogSingle title={title} date={date} cover_image={cover_image}>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </BlogSingle>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts/art_posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  // console.log(paths)
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts/art_posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: { frontmatter, slug, content },
  };
}
