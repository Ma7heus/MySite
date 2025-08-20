import "./ui/global.css";
import React from "react";
import Head from "./head";
import { GlobalContextProvider } from "./Context/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <div>
        <GlobalContextProvider>{children}</GlobalContextProvider>
        </div>
      </body>
    </html>
  );
}
