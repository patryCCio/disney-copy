const Header = () => {
  return (
    <section className="section header">
      <div className="header-box">
        <div className="img">
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
            alt=""
          />
        </div>
        <div className="text-center">
          <h1>+ więcej niż możesz sobie wymarzyć</h1>
          <p>
            Wpisz swój adres e-mail, aby utworzyć lub ponownie wykupić
            subskrypcję.
          </p>
        </div>
        <div className="input-box">
          <input type="email" placeholder="E-mail" />
          <a>Kontynuuj</a>
        </div>

        <div className="text-center">
          <p>
            12 miesięcy w cenie 10 - kup korzystniejszą roczną subskrypcję
            Disney+, zamiast comiesięcznej.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
