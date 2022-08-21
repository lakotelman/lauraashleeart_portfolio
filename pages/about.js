import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header main="About Me" />
      <div className="container">
        <h1>Hello, my name is Laura-Ashlee Kotelman</h1>
        <p>
          I&#39;m passionate about taking an idea or task which is big and scary and
          making it into something familiar and engaging. As an educator, I love
          teaching others. I feel I&#39;m naturally able to break concepts down and
          help others find comfort in writing, reading, and analysis.
        </p>
        <p>
          Graphic design and illustration brought me into web design. Web design
          transported me to programming. From just a few experiences with the
          building blocks and problem solving, I&#39;m hooked. The challenge of
          playing with puzzles and finding solutions to problems provides a
          never ending space of learning.
        </p>
        <div>
          <h1>Let&#39;s get in touch</h1>
          <p>
            Email <a href="mailto:la.n.kot@pm.me">la.n.kot@pm.me</a>
          </p>
        </div>
      </div>
    </>
  );
}
