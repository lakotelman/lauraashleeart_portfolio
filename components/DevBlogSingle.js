import Link from "next/link";
import BlogSingleHeader from "./SingleBlogHeader";

export default function BlogSingle(props) {
  return (
    <>
      <BlogSingleHeader>
        <h1>{props.title}</h1>
      </BlogSingleHeader>

      <div className="blog-container">
        <div className="button-container">
          <button>
            <Link href="/developer">Go Back</Link>
          </button>
        </div>
        <div className="blog-flex-col">
          <img src={props.cover_image} alt="" />
          <p>{props.date}</p>
        </div>
        {props.children}
      </div>
    </>
  );
}
