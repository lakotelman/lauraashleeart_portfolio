import Link from "next/Link";

export default function Header() {
  return (
    <header>
      {/* <!-- * Nav Bar--> */}
      <nav>
        <h1>Laura-Ashlee</h1>
        <ul class="navigation">
          <li>
            <Link href="/" class="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="" class="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="" class="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="" class="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* <!-- * Hero Section--> */}
      <section class="hero" id="about">
        <div class="header-background">
          <div class="about-me-container">
            <article class="about-me">
              <h2 class="hero-title">I make things.</h2>
              <p class="hero-text">Here are some examples of my work.</p>
            </article>
          </div>
        </div>
      </section>
    </header>
  );
}
