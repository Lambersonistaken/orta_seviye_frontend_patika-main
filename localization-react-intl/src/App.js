import "./App.css";
import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage, useIntl } from "react-intl";
function App() {
  const defaultLocale = localStorage.getItem("locale") || "tr-TR";
  console.log(defaultLocale);

  const messages = {
    "tr-TR": {
      title: "Merhaba Dünya {count} defa ",
      description: "Bu bir açıklamadır {count} defa",
    },
    "en-EN": {
      title: "Hello World {count} times ",
      description: "This is a description for {count} times",
    },
  };

  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" values={{ count: 3 }}></FormattedMessage>
        <p>
          <FormattedMessage
            id="description"
            values={{ count: 3 }}
          ></FormattedMessage>
        </p>

        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-EN")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
