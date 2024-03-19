import BlogPage from "@/components/blog";
import { Metadata } from "next";

export default function Blog() {
  return (
    <main>
      <BlogPage />
    </main>
  );
}

export const metadata: Metadata = {
  title: "We Gamers | وبلاگ",
  keywords: "وبلاگ اخبار بازی های wegamers",
  robots: "index, follow",
  description:
    "ما گیمر ها ( we gamers ) یک پلتفرم گیمینگ هست که در جهت پیشرفت و توسعه جامعه گیمری و اطلاع رسانی اخبار گیم به کاربران و تشکلیل جمع های دوستانه در بین گیمر ها درست شده است",
};
