import "./style.css";
import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import { SurahState } from "./contexts/surahContext.tsx";
import { HadethState } from "./contexts/hadethContext.tsx";
import { AzkarState } from "./contexts/azkarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SurahState>
        <HadethState>
          <AzkarState>
            <App />
          </AzkarState>
        </HadethState>
      </SurahState>
    </Provider>
  </React.StrictMode>
);
