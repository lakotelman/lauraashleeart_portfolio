import matter from "gray-matter";
import Post from "../components/Post";
import path from "path";
import Head from "next/head";
import Header from "../components/Header";
import { sortByDate } from "../utils";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header main="Welcome" />
      <div className="container">
        <h1>Pick a persona</h1>
        <div className="button-container">
          <button>
            <Link href="/artist">Artist</Link>
          </button>
          <button>
            <Link href="/developer">Developer</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
