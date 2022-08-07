import Link from "next/link";

export default function Post({ post }) {
  return (
    <article className="projects-card">
      <img
        className="card-image"
        loading="lazy"
        src={post.frontmatter.cover_image}
      />
      <div className="overlay"></div>
      <h3>{post.frontmatter.title}</h3>
      <p>
        <small>{post.frontmatter.date}</small>
      </p>
      <p className="italics">{post.frontmatter.exerpt}</p>
      <div className="a-flex">
        <Link href={`/artblog/${post.slug}`} className="project-link">
          Read More
        </Link>
      </div>
    </article>
  );
}
