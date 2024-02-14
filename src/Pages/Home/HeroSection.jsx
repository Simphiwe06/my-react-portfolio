export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Simphiwe Mbuli</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Welcome to my digital realm of coding adventures.
            <br /> -where creativity meets functionality and innovation.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
