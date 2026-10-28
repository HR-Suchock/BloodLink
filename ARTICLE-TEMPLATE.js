/*
BLOODLINK BLOG ARTICLE TEMPLATE
Copy the object below into the array in js/articles.js. Do not replace js/articles.js with this file.
After copying, change every example value and keep a comma between article objects.
*/
const ARTICLE_TEMPLATE = {
  slug: "replace-with-unique-lowercase-slug",
  category: { en: "Donor Guide", bn: "রক্তদানের নির্দেশিকা" },
  date: "2026-10-28",
  readMinutes: 4,
  image: "assets/your-article-image.jpg",
  imageAlt: { en: "Describe what the article image shows", bn: "ছবিতে কী দেখা যাচ্ছে তা বাংলায় লিখুন" },
  title: { en: "Write Your Article Title", bn: "আপনার প্রবন্ধের শিরোনাম লিখুন" },
  excerpt: { en: "Write a short summary for the article card.", bn: "প্রবন্ধের জন্য একটি সংক্ষিপ্ত সারাংশ লিখুন।" },
  metaDescription: { en: "Write a unique search description that accurately summarizes the article.", bn: "প্রবন্ধের সঠিক সারাংশ দিয়ে অনন্য সার্চ বিবরণ লিখুন।" },
  ogImage: "", // Optional: full public HTTPS URL for the share-preview image; blank uses the article image.
  body: {
    en: [
      { heading: "First section heading", paragraphs: ["Write your first paragraph here.", "Write a second paragraph here if needed."] },
      { heading: "Key points", bullets: ["First point", "Second point", "Third point"] },
      { callout: "Optional important note. Make sure health information is verified by a qualified professional." }
    ],
    bn: [
      { heading: "প্রথম অংশের শিরোনাম", paragraphs: ["এখানে প্রথম অনুচ্ছেদ লিখুন।", "প্রয়োজন হলে দ্বিতীয় অনুচ্ছেদ লিখুন।"] },
      { heading: "গুরুত্বপূর্ণ বিষয়", bullets: ["প্রথম বিষয়", "দ্বিতীয় বিষয়", "তৃতীয় বিষয়"] },
      { callout: "ঐচ্ছিক গুরুত্বপূর্ণ নোট। স্বাস্থ্যসংক্রান্ত তথ্য যোগ্য পেশাজীবীর মাধ্যমে যাচাই করুন।" }
    ]
  }
};
