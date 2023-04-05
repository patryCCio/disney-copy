const Devices = () => {
  return (
    <section className="section devices">
      <div className="text-center">
        <h2>Dostępny na Twoich ulubionych urządzeniach</h2>
      </div>

      <div className="image-wrapper">
        <div className="image-box">
          <div className="img">
            <picture>
              <source
                media="(min-width: 1025px)"
                srcset="//cnbl-cdn.bamgrid.com/assets/00fb59319fa715222100d8a84d11bc7e23a42970b4f413c9e85166d0cfba9346/original"
              />
              <img
                src="//cnbl-cdn.bamgrid.com/assets/00fb59319fa715222100d8a84d11bc7e23a42970b4f413c9e85166d0cfba9346/original"
                alt="TV Icon"
              />
            </picture>
            <div className="text-center">
              <h3>TV</h3>
              <ul>
                <li>Amazon Fire TV</li>
                <li>Android TV</li>
                <li>Apple TV</li>
                <li>Chromecast</li>
                <li>Hisense</li>
                <li>LG</li>
                <li>Panasonic</li>
                <li>Samsung</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="image-box">
          <div className="img">
            <picture class="device">
              <source
                media="(min-width: 1025px)"
                srcset="//cnbl-cdn.bamgrid.com/assets/d73b7c534afd2af2a454dbd47bd6c766c70e334ce8137084e9cd25c2644dd267/original"
              />
              <img
                src="//cnbl-cdn.bamgrid.com/assets/d73b7c534afd2af2a454dbd47bd6c766c70e334ce8137084e9cd25c2644dd267/original"
                alt="Computer Icon"
                loading="lazy"
              />
            </picture>
            <div className="text-center">
              <h3>Komputer</h3>
              <ul>
                <li>Chrome OS</li>
                <li>MacOS</li>
                <li>Windows PC</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="image-box">
          <div className="img">
            <picture class="device">
              <source
                media="(min-width: 1025px)"
                srcset="//cnbl-cdn.bamgrid.com/assets/66475056e769443ef9a491a48dfa44059c8964890ae9ef7c4f69f322693c59d8/original"
              />
              <img
                src="//cnbl-cdn.bamgrid.com/assets/66475056e769443ef9a491a48dfa44059c8964890ae9ef7c4f69f322693c59d8/original"
                alt="Mobile &amp; Tablet Icon"
                loading="lazy"
              />
            </picture>
            <div className="text-center">
              <h3>Telefony komórkowe i tablety</h3>
              <ul>
                <li>Tablety Amazon</li>
                <li>Fire</li>
                <li>Telefony i tablety</li>
                <li>Android</li>
                <li>iPhone oraz iPad</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="image-box">
          <div className="img">
            <picture class="device">
              <source
                media="(min-width: 1025px)"
                srcset="//cnbl-cdn.bamgrid.com/assets/51b639d2ebe97ee175975c29d42a90b0e043713856db8e5d6d9fb87b2b3a48c0/original"
              />
              <img
                src="//cnbl-cdn.bamgrid.com/assets/51b639d2ebe97ee175975c29d42a90b0e043713856db8e5d6d9fb87b2b3a48c0/original"
                alt="Game Console Icon"
                loading="lazy"
              />
            </picture>
            <div className="text-center">
              <h3>Konsole</h3>
              <ul>
                <li>PS4</li>
                <li>PS5</li>
                <li>Xbox One</li>
                <li>Xbox Series X</li>
                <li>Xbox Series S</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devices;
