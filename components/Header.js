import Link from "next/link";

export default function Header() {
  return (
    
    <header>
      {/* <!-- * Nav Bar--> */}
      <nav>
        <h1></h1>
        <ul className="navigation">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* <!-- * Hero Section--> */}
      <section className="hero" id="about">
        <div className="header-background">
          <div className="about-me-container">
            <article className="about-me">
              <h2 className="hero-title">I make things.</h2>
              <p className="hero-text">Here are some examples of my work.</p>
            </article>
          </div>
        </div>
      </section>
    </header>
  );
}
