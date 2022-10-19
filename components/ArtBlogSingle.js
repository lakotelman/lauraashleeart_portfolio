import Link from "next/link";
import Image from "next/image";
import BlogSingleHeader from "./SingleBlogHeader";

export default function BlogSingle(props) {
  return (<>
    <BlogSingleHeader>
        <h1>{props.title}</h1>
    </BlogSingleHeader>
    <div className="button-container">
        <button>
          <Link href="/artist">Go Back</Link>
        </button>
      </div>
    <div className="blog-container">
      <div className="blog-flex-col">
          <div>
              <p>{props.date}</p>
          </div>
          <Image src={props.cover_image} alt="" />
      </div>
      {props.children}
    </div></>
  );
}
