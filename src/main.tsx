import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persister } from "./store";

import { BrowserRouter } from "react-router-dom";
import "./index.css";

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
