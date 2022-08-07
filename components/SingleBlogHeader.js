import Link from "next/link";
export default function BlogSingleHeader(props) {
  return (
    <div className="header-background-small">
      {props.children}
      <div>
        <button>
          <Link href="/artist">Go Back</Link>
        </button>
      </div>
    </div>
  );
}
