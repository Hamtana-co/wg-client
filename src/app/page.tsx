import HomePage from "@/components/home";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <link rel="canonicial" href="https://wegamers.ir/about-us" />
      <HomePage />
    </>
  );
}

export const metadata: Metadata = {
  title: "We Gamers | کامیونیتی | اخبار | بازی",
  keywords: "گیمر بازی گیمینگ",
  robots: "index, follow",
  description:
    "ما گیمر ها ( we gamers ) یک پلتفرم گیمینگ هست که در جهت پیشرفت و توسعه جامعه گیمری و اطلاع رسانی اخبار گیم به کاربران و تشکلیل جمع های دوستانه در بین گیمر ها درست شده است",
};
