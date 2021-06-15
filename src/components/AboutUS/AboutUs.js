import React from "react";
import "./AboutUs.css";

class AboutUs extends React.Component {
  state = {};
  render() {
    return (
      <section id="aboutus" className={"aboutUs"}>
        <div className={"separator"}></div>
        <h2>Meble klasyczne sprzedaż, renowacja, realizacja projektów</h2>
        <div className={"aboutUsImage"}></div>
        <div className={"aboutUsDescription"}>
          <p>
            Eleganckie meble klasyczne świetnie prezentują się w sypialni,
            salonie, czy kuchni zapewnią Państwu powrót do ubiegłych epok i
            ponadczasowego piękna. Posiadanie ekskluzywnych mebli wiąże się z
            wielkim prestiżem, oraz zapewni duży komfort użytkowania. Nasza
            firma od ponad 80 lat zapewnia swoim Klientom meble klasyczne
            najwyższej jakości. Meble klasyczne tworzymy z pasja, dlatego też
            każdy sprzedawany przez nas mebel wykonany jest z największą
            precyzją.{" "}
          </p>
          <p>
            W naszej ofercie znajdą państwo szeroki wybór mebli klasycznych,
            mebli włoskich oraz mebli dębowych oraz wielu innych materiałów aby
            sprostać Waszym wymaganiom.
          </p>
          <p>
            Jeżeli przygotowane przez naszą firmę aranżacje mebli klasycznych
            nie spełniają państwa wymagań nic nie szkodzi. Wykonamy dla Was
            meble na zamówienie według projektu. Tak wykonane meble na wymiar
            będą będą idealnie pasować do każdego pomieszczenia. Ponadto będą
            niepowtarzalne i jedyne w swoim rodzaju dla klientów którzy cenią
            indywidualność.{" "}
          </p>
          <p>
            Stan Twoich mebli pozostawia wiele do życzenia? Może znudził Ci się
            ich dawny wygląd? A może odziedziczyłeś antyczny mebel? Przynieś go
            do nas a my zajmiemy się resztą. Zniszczone antyki odzyskają dawny
            blask, a meble z duszą staną się ozdobą Twojego wnętrza, które zyska
            nowy, niepowtarzalny charakter.{" "}
          </p>
        </div>
      </section>
    );
  }
}

export default AboutUs;
