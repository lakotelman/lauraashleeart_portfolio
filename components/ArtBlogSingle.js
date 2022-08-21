import Link from "next/link";
import BlogSingleHeader from "./SingleBlogHeader";

export default function BlogSingle(props) {
  return (<>
    <BlogSingleHeader>
        <h1>{props.title}</h1>
    </BlogSingleHeader>
    <div>
        <button>
          <Link href="/artist">Go Back</Link>
        </button>
      </div>
    <div className="blog-container">
      <div className="blog-flex-col">
          <div>
              <p>{props.date}</p>
          </div>
          <img src={props.cover_image} alt="" />
      </div>
      {props.children}
    </div></>
  );
}
