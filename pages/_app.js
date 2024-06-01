import "@/styles/globals.css";
import localFont from "next/font/local";

const KanitBlack = localFont({ src: "../public/fonts/Kanit-Medium.ttf" });
export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={KanitBlack.className}>
        <Component {...pageProps} />;
      </div>
    </>
  );
}
