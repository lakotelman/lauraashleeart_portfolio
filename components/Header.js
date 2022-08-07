import Link from "next/link";

export default function Header(props) {
  return (
    
    <header>
      {/* <!-- * Nav Bar--> */}
      <nav>
        <h1> {props.tag}</h1>
        <ul className="navigation">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About & Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* <!-- * Hero Section--> */}
      <section className="hero" id="about">
        <div className="header-background">
          <div className="about-me-container">
            <article className="about-me">
              <h2 className="hero-title">{props.main}</h2>
              <p className="hero-text">{props.tagline}</p>
            </article>
          </div>
        </div>
      </section>
    </header>
  );
}
