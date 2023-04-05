const About = () => {
  return (
    <section className="section about">
      <div className="about-wrapper">
        <div className="text-center">
          <h2>Tylko w Disney+</h2>
          <p>
            Hity filmowe, seriale oraz produkcje oryginalne, których nie
            znajdziesz w innych usługach streamingowych.
          </p>
        </div>

        <picture class="img">
          <source
            media="(max-width: 768px)"
            srcset="//cnbl-cdn.bamgrid.com/assets/e74c4938c8c88787281a02457c999c62ac718176abb30f8c6538f370d2f38007/original"
          />

          <source
            media="(min-width: 1025px)"
            srcset="//cnbl-cdn.bamgrid.com/assets/8b48f30edcb70efdd547aa959a4b3a4002120cc6fb574042744f426528195ed3/original"
          />
          <img
            src="//cnbl-cdn.bamgrid.com/assets/8b48f30edcb70efdd547aa959a4b3a4002120cc6fb574042744f426528195ed3/original"
            alt="Original Content by Disney "
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
};

export default About;
