import { useRef } from "react";

const Ask = () => {
  const array = [
    {
      question: "Co to jest Disney+?",
      answer: `<p><span>Disney+ to usługa streamingowa, będąca domem dla filmów i programów Disneya, Pixara, Marvela, Gwiezdnych Wojen, National Geographic oraz wielu innych.</span><br><br><span>Standardowa subskrypcja Disney+ oferuje wiele możliwości:</span></p><ul><li><p><span>Oryginalne produkcje, których nie zobaczysz nigdzie indziej, filmowe hity, seriale, filmy krótkometrażowe oraz inspirujące reportaże</span></p></li><li><p><span>Nieograniczona liczba pobrań na 10 urządzeniach i możliwość ustawienia 7 profili</span></p></li><li><p><span>Jakość 4K UHD z Dolby Vision i Dolby Atmos na kompatybilnych urządzeniach</span></p></li><li><p><span>Zaawansowana kontrola rodzicielska z możliwością utworzenia profili dla dzieci </span></p></li><li><p><span>Możliwość oglądania na 4 ekranach jednocześnie </span></p></li><li><p><span>Wirtualne wspólne oglądanie z maksymalnie 6 osobami dzięki funkcji GroupWatch </span></p></li></ul>`,
    },
    {
      question: "Co mogę zobaczyć w Disney+?",
      answer: `<p>Tysiące filmów i seriali, a także nowe produkcje każdego miesiąca. Zawsze znajdziesz coś ciekawego w Disney+<br></p><ul><li><p>Najnowsze filmowe hity, takie jak Cruella czy Nasze magiczne Encanto </p></li><li><p>Poruszające historie dla widzów w każdym wieku, stworzone przez zespól Studia Pixar, takie jak Luca i To niewypanda </p></li><li><p>Poznaj nowe historie ze świata Marvela dzięki oryginalnym produkcjom Studia Marvel, między innymi Moon Knight, WandaVision i Loki</p></li><li><p>Oglądaj historie z odległej galaktyki, w tym Obi-Wan Kenobi i The Mandalorian</p></li><li><p>Dzięki odkrywczym filmom dokumentalnym zobacz piękno naszej planety z eksplorerami National Geographic</p></li><li><p>Pod marką Star znajdziesz popularne seriale, w tym słynne The Walking Dead</p></li></ul>`,
    },
    {
      question: "Ile kosztuje Disney+?",
      answer: `<p>Disney+ kosztuje 28,99 zł miesięcznie. Możesz też wybrać opłatę za 1 rok (289,90 zł/rok) i otrzymać dwanaście miesięcy w cenie dziesięciu!*<br><br>*Oszczędności w pierwszym roku subskrypcji w porównaniu z 12 miesiącami subskrypcji w cenie 28,99 zł miesięcznie. Po roku automatyczne odnowienie subskrypcji w cenie 28,99 zł/miesiąc.</p>`,
    },
    {
      question: "Jakie urządzenia są kompatybilne?",
      answer: `<p>Disney+ jest kompatybilny z urządzeniami mobilnymi, przeglądarkami internetowymi, konsolami do gier, dekoderami oraz smart TV. Kliknij <a href="https://help.disneyplus.com/csp?id=csp_article_content&amp;article=devices-supported" class="link" data-gv2-element="element" data-gv2-key="button" data-gv2-name="mlp_link" data-gv2-type="button" data-analytics="click" data-analytics-name="Link/Button - EMEA - Devices link" data-testid="mlp_link_section"><span>tutaj</span></a>, żeby zobaczyć pełną listę.</p>`,
    },
    {
      question:
        "Czy z subskrupcją Disney+ wiążą się jakieś dodatkowe zobowiązania?",
      answer: `<p>Twoja subskrypcja Usługi Disney+ obejmuje zapisanie się do cyklicznego planu płatności, subskrypcję można anulować w każdej chwili. Wówczas przestanie być ona aktywna z końcem okresu rozliczeniowego. Możesz to zrobić w 5 prostych krokach: <br></p><ol><li><p>Wejdź na www.disneyplus.com i zaloguj się.</p></li><li><p>Wybierz swój profil.</p></li><li><p>Wybierz Konto.</p></li><li><p>Wybierz Anuluj subskrypcję.</p></li><li><p>Wybierz Dokończ anulowanie, żeby potwierdzić.</p></li></ol><p><span>Po więcej informacji kliknij </span><a href="https://help.disneyplus.com/csp?id=csp_article_content&amp;article=cancel" class="link" data-gv2-element="element" data-gv2-key="button" data-gv2-name="mlp_link" data-gv2-type="button" data-analytics="click" data-analytics-name="Link - Cancel Subscription Link - Official " data-testid="mlp_link_section"><span>tutaj.</span></a></p>`,
    },
  ];

  const questionRef = useRef([]);
  const answerRef = useRef([]);

  const handleClick = (index) => {
    questionRef.current.forEach((el, indexInner) => {
      if (indexInner === index) {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
          answerRef.current[indexInner].style.maxHeight = "0px";
          answerRef.current[indexInner].style.padding =
            "0rem 1.5rem 0rem 1.5rem";
        } else {
          el.classList.add("active");
          answerRef.current[indexInner].style.maxHeight = "3000px";
          answerRef.current[indexInner].style.padding =
            "0rem 1.5rem 0.5rem 1.5rem";
          answerRef.current[indexInner].classList.add("active");
        }
      }
    });
  };

  return (
    <section className="section ask">
      <div className="text-center">
        <h2>Najczęściej zadawane pytania</h2>
      </div>

      <div className="ask-wrapper">
        {array.map((el, index) => {
          return (
            <>
              <div
                className="question-box"
                ref={(el2) => (questionRef.current[index] = el2)}
                onClick={() => handleClick(index)}
              >
                <div className="question">{el.question}</div>
                <div className="add">+</div>
              </div>
              <div
                className="answer"
                ref={(el2) => (answerRef.current[index] = el2)}
                dangerouslySetInnerHTML={{ __html: el.answer }}
              ></div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Ask;
