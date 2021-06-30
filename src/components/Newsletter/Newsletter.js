import React from "react";
import "./Newsletter.css";

const ErrorsList = (props) => {
  let errorsList = props.errorsList.map((error) => (
    <p className={"error"} key={error.message}>
      {error.message}
    </p>
  ));
  return errorsList;
};

class Newsletter extends React.Component {
  state = {
    username: "",
    email: "",
    rodo1: false,
    rodo2: false,
    errorsList: "",
    message: "",
  };

  handleNewsletterChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    if (type === "text" || type === "email") {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const { username, email, rodo1, rodo2 } = this.state;
    fetch("http://localhost:5000/newsletter/add", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        rodo1: rodo1,
        rodo2: rodo2,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          errorsList: data.errors,
          message: data.message,
          /////
        });
      });
  };
  render() {
    return (
      <section id="newsletter" className={"newsletter"}>
        <div className={"separator"}></div>
        <div className={"newslettercont"}>
          <div className={"newsletterDescription"}>
            <h1>ZAPISZ SIĘ DO NEWSLETTERA</h1>
            <p>
              Wyrażenie zgody na przetwarzanie danych osobowych jest dobrowolne
              ale konieczne do świadczenia usługi wysyłki Newslettera Meble
              Klasyczne sp. z o.o. sp. komandytowa informujemy, że
              administratorem Pana/i danych jest Meble Klasyczne sp. z o.o. sp.
              komandytowa z siedzibą w Krakowie przy ul. Meblowa 26/6, 27-862
              Kraków, zarejestrowana przez Sąd Rejonowy dla Krakowa –
              Śródmieścia w Krakowie XI Wydział Gospodarczy Krajowego Rejestru
              Sadowego pod numerem KRS 0000000000, posiadająca REGON: 000000000,
              NIP: 0000000000, tel. +48 12+00-00-000 (000). Dane te przetwarzane
              będą wyłącznie w celu przesyłania newslettera marki Meble
              Klasyczne sp. z o.o. sp. komandytowa na podstawie udzielonych
              zgód. Rozpoczęcie subskrypcji newslettera nastąpi po potwierdzeniu
              zgodności adresu e-mail, poprzez kliknięcie linka przesłanego na
              wskazany przez Pana(Panią) adres e-mail. Dane przechowywane będą
              przez okres realizacji usługi dostarczania newslettera przez
              administratora danych, nie dłużej niż 10 lat. Ma Pan(i) prawo
              żądania od administratora dostępu do Pani/Pana danych osobowych,
              ich sprostowania, usunięcia lub ograniczenia przetwarzania lub
              prawa do wniesienia sprzeciwu wobec przetwarzania, a także prawa
              do przenoszenia danych. Ponadto ma Pani/Pan prawo do cofnięcia
              zgody w dowolnym momencie oraz prawo do wniesienia skargi do
              organu nadzorczego. Regulamin newslettera
            </p>
          </div>

          <div className={"newsletterForm"}>
            <form onSubmit={this.handleNewsletterSubmit}>
              <label className={"newsletterlabel"} htmlFor="user">
                Podaj imie:
                <input
                  className={"logPanel"}
                  type="text"
                  id="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleNewsletterChange}
                />
              </label>
              <label className={"newsletterlabel"} htmlFor="email">
                Podaj email:
                <input
                  className={"logPanel"}
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleNewsletterChange}
                />
              </label>
              <label className={"newsletterlabel"} htmlFor="rodo1">
                <h3>
                  Rodo 1
                  <input
                    type="checkbox"
                    id="rodo1"
                    name="rodo1"
                    checked={this.state.rodo1}
                    onChange={this.handleNewsletterChange}
                  />
                </h3>
                <p>
                  Wyrażam zgodę na przesyłanie drogą elektroniczną newslettera
                  zawierającego informacje marketingowe oraz promocyjne Meble
                  Klasyczne sp. z o.o., na podany przeze mnie adres e-mail,
                  przez firmę Meble Klasyczne sp. z o.o. sp. komandytowa z
                  siedzibą w Krakowie przy ul. Meblowa 26/6, 27-862 Kraków
                  (numer KRS: 0000000000).
                </p>
              </label>
              <label className={"newsletterlabel"} htmlFor="rodo2">
                <h3>
                  Rodo 2{" "}
                  <input
                    type="checkbox"
                    id="rodo2"
                    name="rodo2"
                    checked={this.state.rodo2}
                    onChange={this.handleNewsletterChange}
                  />
                </h3>
                <p>
                  Wyrażam zgodę na przetwarzanie danych osobowych przez Meble
                  Klasyczne sp. z o.o. sp. komandytowa z siedzibą w Krakowie
                  (numer KRS: 0000000000) a także powierzenie osobie trzeciej
                  przetwarzania tych danych wyłącznie w celu realizacji
                  technicznych aspektów wysyłki newslettera.
                </p>
              </label>
              <div>
                <button className={"btnform"} type={"submit"}>
                  Zapisz sie
                </button>
                {this.state.errorsList ? (
                  <ErrorsList errorsList={this.state.errorsList} />
                ) : null}
                {this.state.message ? (
                  <p className={"newsletterMsg"}>{this.state.message}</p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
