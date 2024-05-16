import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FlowerProvider } from "@stackhouseos/flower-react";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FlowerProvider>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#d11218",
              colorPrimaryHover: "#df595d",
              colorTextDisabled: "#FFFFFF",
              defaultColor: "#000",
              algorithm: true,
              borderRadius: 30,
              colorLink: "#FFFFFF",
              colorText: "#FFFFFF",
              colorLinkHover: "#d11218",
              fontSize: 16,
            },
            Input: {
              colorPrimary: "#eb2f96",
              algorithm: true, // Enable algorithm
            },
            Steps: {
              colorFillContent: "#FFF",
              colorText: "#FFF !important",
              colorTextLabel: "#d11218",
            },
          },
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </FlowerProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
