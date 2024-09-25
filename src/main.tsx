import "./styles/style.css";
import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import { AzkarState } from "./contexts/azkarContext.tsx";
import { SurahState } from "./contexts/surahContext.tsx";
import { HadithsState } from "./contexts/hadithsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AzkarState>
        <SurahState>
          <HadithsState>
            <App />
          </HadithsState>
        </SurahState>
      </AzkarState>
    </Provider>
  </React.StrictMode>
);
