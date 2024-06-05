import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Inputs from "@/components/Inputs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={`${styles.main}`}>
        <Inputs />
      </div>
    </>
  );
}
