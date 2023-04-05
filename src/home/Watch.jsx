const Watch = () => {
  return (
    <section className="section watch">
      <div className="text-center">
        <h2>Oglądaj tak, jak lubisz</h2>
        <p>Najwspanialsze historie - kiedykolwiek i gdziekolwiek chcesz.</p>
      </div>

      <picture class="img">
        <source
          media="(max-width: 768px)"
          srcset="//cnbl-cdn.bamgrid.com/assets/d28000d77ac44996055ed64047869219bec2baa70b49dcba0d23c1d5d29257bf/original"
        />
        <source
          media="(min-width: 1025px)"
          srcset="//cnbl-cdn.bamgrid.com/assets/5960160dc2e24aea0a9c15ce7f4bef6ce02d7fc6548effe2624c8a8a0dc8d5af/original"
        />
        <img
          src="//cnbl-cdn.bamgrid.com/assets/5960160dc2e24aea0a9c15ce7f4bef6ce02d7fc6548effe2624c8a8a0dc8d5af/original"
          alt="Watch the Way you Want on a Variety of Devices shown here"
        />
      </picture>

      <div className="watch-wrapper">
        <div className="watch-el">
          <div className="watch-el-img">
            <img
              src="https://cnbl-cdn.bamgrid.com/assets/f496c4734732c167a1643eaa214dbdd3a9124a04a66c4f78f83435fd80a13534/original"
              alt="movie-icon"
            />
          </div>
          <div className="text-center">
            <h3>Rozrywka bez granic</h3>
            <p>Tysiące godzin seriali, filmów i produkcji oryginalnych.</p>
          </div>
        </div>
        <div className="watch-el">
          <div className="watch-el-img">
            <img
              src="https://cnbl-cdn.bamgrid.com/assets/bb4f144134120dc90d8a6023a34450e93d4877ea380bd5e8243f49affa022186/original"
              alt="computer-icon"
            />
          </div>
          <div className="text-center">
            <h3>Dostępny na Twoich ulubionych urządzeniach</h3>
            <p>
              Oglądaj na czterech ekranach jednocześnie, na obsługiwanych
              urządzeniach.
            </p>
          </div>
        </div>
        <div className="watch-el">
          <div className="watch-el-img">
            <img
              src="https://cnbl-cdn.bamgrid.com/assets/6876a3855aaa6da0c58b19d95989cec2342f3fe6e079a583456d19539d74bbfb/original"
              alt="user-icon"
            />
          </div>
          <div className="text-center">
            <h3>Prosta w użyciu kontrola rodzicielska</h3>
            <p>
              Zadbaj o bezpieczeństwo dzięki intuicyjnej kontroli
              rodzicielskiej.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Watch;
