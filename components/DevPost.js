import Link from "next/link";

export default function DevPost({ post }) {
  return (
    <article className="projects-card">
      <img
        className="card-image"
        loading="lazy"
        src={post.frontmatter.cover_image}
      />
      <div className="overlay"></div>
      <h3>
        <a href={post.frontmatter.link} rel="noreferrer" target="_blank">
          {post.frontmatter.title}
        </a>
      </h3>
      <p>
        <small>{post.frontmatter.date}</small>
      </p>
      <p className="italics">
        <small>{post.frontmatter.exerpt}</small>
      </p>
      <div className="a-flex">
        <Link href={`/devblog/${post.slug}`} className="project-link">
          Read More
        </Link>
      </div>
    </article>
  );
}
