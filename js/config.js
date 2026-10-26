/*
  BLOODLINK BLOG CONTENT CONFIG
  -----------------------------
  Add a new object to BLOODLINK_BLOGS to publish another article.
  Each article automatically appears on the home page and gets its own URL:
  blog.html?slug=your-unique-slug

  Keep slug unique and URL-friendly. Body supports safe, simple content blocks:
  { heading: "Heading", paragraphs: ["Paragraph one", "Paragraph two"] }
  { heading: "Checklist", bullets: ["Item one", "Item two"] }
  { callout: "A short highlighted note." }

  Replace image URLs with your own files, e.g. "assets/my-donation-photo.jpg".
  Optional per-article SEO fields: metaDescription: { en: "...", bn: "..." }, ogImage: "assets/cover.jpg".
*/
window.BLOODLINK_BLOG_CONFIG = {
  siteName: "BloodLink Blog",
  siteUrl: "https://suchock.github.io",
  ogImage: "https://suchock.github.io/assets/bloodlink-logo.png",
  googleAnalyticsId: "G-XXXXXXXXXX",
  reportEmail: "bloodlink@example.com",
  defaultLanguage: "en",
  blogs: [
    {
      slug: "first-time-blood-donation",
      category: { en: "Donor Guide", bn: "দাতা নির্দেশিকা" },
      date: "2026-10-20",
      readMinutes: 4,
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=85",
      imageAlt: { en: "Blood donation collection bag", bn: "রক্ত সংগ্রহের ব্যাগ" },
      title: { en: "Your First Blood Donation: What to Expect", bn: "প্রথমবার রক্তদান: কী আশা করবেন" },
      excerpt: {
        en: "A calm, practical guide to preparing for a donation and knowing what happens at the centre.",
        bn: "রক্তদানের আগে প্রস্তুতি এবং কেন্দ্রে কী হয়—তার সহজ ও ব্যবহারিক নির্দেশিকা।"
      },
      body: {
        en: [
          { heading: "Before you go", paragraphs: ["Get a good night's sleep, eat a balanced meal, and drink water before your appointment. Bring identification if your donation centre requires it.", "Eligibility depends on your age, weight, health, medicines, recent travel, and local rules. The donation team will ask questions and check whether it is safe for you to donate."] },
          { heading: "At the donation centre", paragraphs: ["A trained team member will register you, ask confidential health questions, and perform basic checks. If you are eligible, the collection itself usually takes only a short time; the full visit takes longer.", "Tell the staff if you feel nervous, have fainted before, or feel unwell. You can ask questions at any point."] },
          { heading: "After donating", bullets: ["Rest for the time recommended by staff and have the provided snack or drink.", "Drink extra fluids and avoid strenuous exercise for the rest of the day, following your centre's advice.", "If you feel dizzy, sit or lie down and tell staff immediately."] },
          { callout: "Never hide a health concern to donate. Honest answers help protect both you and the person receiving blood." },
          { heading: "One last thing", paragraphs: ["Blood donation rules vary by country and donation service. Follow the guidance of your local blood centre and healthcare professionals."] }
        ],
        bn: [
          { heading: "যাওয়ার আগে", paragraphs: ["ভালোভাবে ঘুমান, পুষ্টিকর খাবার খান এবং যাওয়ার আগে পর্যাপ্ত পানি পান করুন। আপনার রক্তদান কেন্দ্র পরিচয়পত্র চাইলে সঙ্গে নিন।", "বয়স, ওজন, স্বাস্থ্য, ওষুধ, সাম্প্রতিক ভ্রমণ এবং স্থানীয় নিয়মের ওপর রক্তদানের যোগ্যতা নির্ভর করে। নিরাপদ কি না তা জানতে কর্মীরা কিছু প্রশ্ন করবেন ও প্রাথমিক পরীক্ষা করবেন।"] },
          { heading: "রক্তদান কেন্দ্রে", paragraphs: ["প্রশিক্ষিত কর্মী নিবন্ধন করবেন, স্বাস্থ্যসংক্রান্ত কিছু ব্যক্তিগত প্রশ্ন করবেন এবং প্রাথমিক পরীক্ষা করবেন। যোগ্য হলে রক্ত সংগ্রহের কাজটি সাধারণত অল্প সময়ে হয়, তবে পুরো প্রক্রিয়ায় বেশি সময় লাগতে পারে।", "ভয় লাগলে, আগে অজ্ঞান হয়ে থাকলে বা অসুস্থ বোধ করলে কর্মীদের জানান। যেকোনো সময় প্রশ্ন করতে পারেন।"] },
          { heading: "রক্তদানের পরে", bullets: ["কর্মীদের নির্দেশ অনুযায়ী বিশ্রাম নিন এবং দেওয়া হালকা খাবার বা পানীয় গ্রহণ করুন।", "অতিরিক্ত তরল পান করুন এবং কেন্দ্রের পরামর্শ অনুযায়ী দিনের বাকি সময় ভারী ব্যায়াম এড়িয়ে চলুন।", "মাথা ঘুরলে বসে বা শুয়ে পড়ুন এবং সঙ্গে সঙ্গে কর্মীদের জানান।"] },
          { callout: "রক্তদানের জন্য কখনো স্বাস্থ্যসংক্রান্ত তথ্য গোপন করবেন না। সঠিক তথ্য আপনার ও রক্তগ্রহীতার নিরাপত্তায় সাহায্য করে।" },
          { heading: "মনে রাখুন", paragraphs: ["দেশ ও রক্তদান সেবাভেদে নিয়ম আলাদা হতে পারে। আপনার এলাকার রক্তদান কেন্দ্র এবং স্বাস্থ্যকর্মীর নির্দেশনা অনুসরণ করুন।"] }
        ]
      }
    },
    {
      slug: "blood-groups-basics",
      category: { en: "Blood Basics", bn: "রক্তের মৌলিক তথ্য" },
      date: "2026-10-14",
      readMinutes: 5,
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85",
      imageAlt: { en: "Medical laboratory equipment", bn: "চিকিৎসা পরীক্ষাগারের সরঞ্জাম" },
      title: { en: "Blood Groups Explained: A, B, AB, O and Rh", bn: "রক্তের গ্রুপ: A, B, AB, O এবং Rh" },
      excerpt: {
        en: "Understand the ABO and Rh systems, and why hospitals test compatibility before transfusion.",
        bn: "ABO ও Rh পদ্ধতি এবং রক্ত দেওয়ার আগে সামঞ্জস্য পরীক্ষা কেন জরুরি—জেনে নিন।"
      },
      body: {
        en: [
          { heading: "The ABO system", paragraphs: ["The main ABO blood groups are A, B, AB, and O. They are based on particular markers, called antigens, on red blood cells."] },
          { heading: "What does the plus or minus mean?", paragraphs: ["The positive or negative sign usually refers to the Rh(D) factor. For example, A positive and A negative are both group A, but they differ in Rh status."] },
          { heading: "Why compatibility matters", paragraphs: ["A transfusion service checks the patient's blood group and performs compatibility testing, often including a crossmatch. The correct choice depends on the component being transfused and the patient's clinical situation.", "A simple online chart should never be used to decide a real transfusion. Hospital laboratory staff and clinicians determine the appropriate blood component."] },
          { callout: "In an emergency, follow the treating hospital's protocol. Never arrange or administer a transfusion based only on a blog post." },
          { heading: "Can I find out my blood group?", paragraphs: ["A qualified laboratory or healthcare service can test your blood group. Do not assume your type from a family member's type or from an unverified online result."] }
        ],
        bn: [
          { heading: "ABO পদ্ধতি", paragraphs: ["ABO পদ্ধতিতে প্রধান রক্তের গ্রুপ হলো A, B, AB এবং O। লোহিত রক্তকণিকার গায়ে থাকা নির্দিষ্ট অ্যান্টিজেনের ভিত্তিতে এগুলো নির্ধারিত হয়।"] },
          { heading: "পজিটিভ বা নেগেটিভের অর্থ কী?", paragraphs: ["রক্তের গ্রুপের সঙ্গে থাকা পজিটিভ বা নেগেটিভ চিহ্ন সাধারণত Rh(D) ফ্যাক্টর বোঝায়। যেমন A positive ও A negative—দুটিই A গ্রুপ, তবে Rh অবস্থা আলাদা।"] },
          { heading: "সামঞ্জস্য কেন গুরুত্বপূর্ণ", paragraphs: ["রক্ত দেওয়ার আগে হাসপাতালের রক্তসঞ্চালন বিভাগ রোগীর গ্রুপ পরীক্ষা করে এবং প্রয়োজনীয় সামঞ্জস্য পরীক্ষা করে। কোন রক্তের উপাদান দেওয়া হবে, তা রোগীর অবস্থা ও চিকিৎসার ওপর নির্ভর করে।", "বাস্তব রক্তসঞ্চালনের সিদ্ধান্ত নিতে শুধু অনলাইন চার্ট ব্যবহার করবেন না। উপযুক্ত রক্তের উপাদান চিকিৎসক ও পরীক্ষাগারের কর্মীরা নির্ধারণ করেন।"] },
          { callout: "জরুরি অবস্থায় হাসপাতালের নিয়ম অনুসরণ করুন। শুধু ব্লগ পড়ে রক্তসঞ্চালনের ব্যবস্থা বা সিদ্ধান্ত নেবেন না।" },
          { heading: "নিজের রক্তের গ্রুপ জানবেন কীভাবে?", paragraphs: ["যোগ্য পরীক্ষাগার বা স্বাস্থ্যসেবা কেন্দ্রে রক্ত পরীক্ষা করিয়ে নিজের গ্রুপ জানুন। পরিবারের কারও গ্রুপ বা অনির্ভরযোগ্য অনলাইন তথ্য দেখে নিজের গ্রুপ অনুমান করবেন না।"] }
        ]
      }
    },
    {
  slug: "safe-blood-donation-interval",
  category: { en: "Donor Guide", bn: "রক্তদানের নির্দেশিকা" },
  date: "2026-10-26",
  readMinutes: 4,
  image: "assets/blood-donation-interval.jpg",
  imageAlt: {
    en: "A calendar marking the safe interval between blood donations",
    bn: "রক্তদানের নিরাপদ ব্যবধান চিহ্নিত করা একটি ক্যালেন্ডার"
  },
  title: {
    en: "3 Months or 4 Months? How Long Should You Wait Before Donating Blood Again?",
    bn: "৩ মাস নাকি ৪ মাস? কতদিন পর আবার রক্তদান করা নিরাপদ?"
  },
  excerpt: {
    en: "Discover the WHO recommended intervals between blood donations for men and women, along with key health considerations and preparation steps.",
    bn: "পুরুষ ও নারীদের জন্য WHO-এর সুপারিশকৃত রক্তদানের নিরাপদ ব্যবধান এবং গুরুত্বপূর্ণ স্বাস্থ্যগত বিষয়গুলো জেনে নিন।"
  },
  metaDescription: {
    en: "Learn the WHO guidelines on blood donation intervals, potential health impacts of frequent donations, and essential preparation steps.",
    bn: "রক্তদানের ব্যবধান সম্পর্কিত বিশ্ব স্বাস্থ্য সংস্থার (WHO) নির্দেশিকা, ঘন ঘন রক্তদানের প্রভাব এবং প্রয়োজনীয় প্রস্তুতি সম্পর্কে জানুন।"
  },
  ogImage: "https://YOUR-SITE-URL/assets/blood-donation-interval.jpg",
  body: {
    en: [
      {
        heading: "Understanding Donation Intervals",
        paragraphs: [
          "One common question about blood donation is how long a person should wait before donating blood again. Some people believe that three months is enough, while others think everyone must wait four months. So, what does the World Health Organization (WHO) say about this?",
          "According to the WHO guideline 'Blood Donor Selection: Guidelines on Assessing Donor Suitability for Blood Donation', the minimum interval between whole blood donations is 12 weeks (about 3 months) for men and 16 weeks (about 4 months) for women.",
          "However, these are minimum intervals. Simply waiting for the recommended period does not automatically mean someone is fit to donate blood. The donor's health and haemoglobin level must also be checked."
        ]
      },
      {
        heading: "Health Considerations of Frequent Donation",
        paragraphs: [
          "Donating blood too frequently without following proper guidelines may lead to health problems. A systematic review published in 2026 found that donating blood at shorter intervals may lower haemoglobin and ferritin levels.",
          "Some studies also reported fatigue, dizziness, and temporary deferral from blood donation due to low haemoglobin levels. However, the certainty of the evidence from these studies was limited."
        ]
      },
      {
        heading: "Key Preparation Steps Before Donating",
        bullets: [
          "Get enough rest and eat your usual meals.",
          "Drink plenty of water.",
          "Get a health check and have your haemoglobin level checked.",
          "If you feel unwell or have a medical condition, postpone your donation and seek medical advice.",
          "Follow the recommended donation intervals and the advice of your blood bank or a blood transfusion specialist."
        ]
      },
      {
        callout: "Protecting the donor's health is just as important as donating blood. Following the recommended intervals and completing the necessary health checks helps protect both the donor and the recipient."
      }
    ],
    bn: [
      {
        heading: "রক্তদানের নিরাপদ সময়সীমা ও ব্যবধান",
        paragraphs: [
          "রক্তদান সম্পর্কিত অত্যন্ত স্বাভাবিক একটি প্রশ্ন হলো, একবার রক্ত দেওয়ার কতদিন পর আবার দেওয়া যায়? কেউ মনে করেন তিন মাস যথেষ্ট, কেউ বলেন সবার জন্য চার মাস অপেক্ষা করতে হবে। এ বিষয়ে বিশ্ব স্বাস্থ্য সংস্থার (WHO) নির্দেশনা কী, তা জেনে নেওয়া যাক।",
          "WHO-এর 'Blood Donor Selection: Guidelines on Assessing Donor Suitability for Blood Donation' অনুযায়ী, রক্তদানের ন্যূনতম ব্যবধান হওয়া উচিত পুরুষদের জন্য ১২ সপ্তাহ (প্রায় তিন মাস) এবং নারীদের জন্য ১৬ সপ্তাহ (প্রায় চার মাস) হওয়া উচিত।",
          "তবে এটি ন্যূনতম ব্যবধান। এই সময় পার হলেই কেউ রক্তদানের উপযুক্ত হয়ে যান না। দাতার শারীরিক অবস্থা ও হিমোগ্লোবিনের মাত্রাও বিবেচনা করতে হয়।"
        ]
      },
      {
        heading: "ঘন ঘন রক্তদানের স্বাস্থ্যগত প্রভাব",
        paragraphs: [
          "স্বাস্থ্যবিধি অনুসরণ না করে ঘন ঘন রক্তদানের ফলে শারিরীক জটিলতার সৃষ্টি হতে পারে। ২০২৬ সালে প্রকাশিত একটি systematic review-তে দেখা গেছে, কম ব্যবধানে বারবার রক্তদান করলে হিমোগ্লোবিন ও ফেরিটিনের মাত্রা কমতে পারে।",
          "কিছু গবেষণায় ক্লান্তি ও মাথা ঘোরার মতো সমস্যা এবং হিমোগ্লোবিন কম থাকায় সাময়িকভাবে রক্তদানে অযোগ্য বলে বিবেচিত হওয়ার ঘটনাও পাওয়া গেছে। তবে এসব গবেষণার প্রমাণের নিশ্চয়তা সীমিত।"
        ]
      },
      {
        heading: "রক্তদানের আগে প্রয়োজনীয় প্রস্তুতি",
        bullets: [
          "পর্যাপ্ত বিশ্রাম নিন এবং স্বাভাবিক খাবার খান।",
          "পর্যাপ্ত পানি পান করুন।",
          "স্বাস্থ্য পরীক্ষা করান এবং হিমোগ্লোবিনের মাত্রা যাচাই করুন।",
          "অসুস্থ বোধ করলে বা চিকিৎসাগত সমস্যা থাকলে রক্তদান স্থগিত রেখে চিকিৎসকের পরামর্শ নিন।",
          "ব্যবধানের বিষয়ে ব্লাড ব্যাংক বা রক্ত পরিসঞ্চালন বিশেষজ্ঞের নির্দেশনা মেনে চলুন।"
        ]
      },
      {
        callout: "রক্তদাতার সুস্থতা রক্ষা করাও রক্তদানের মতোই গুরুত্বপূর্ণ। সঠিক ব্যবধান মেনে এবং স্বাস্থ্য পরীক্ষার পর রক্তদান করলে দাতা ও গ্রহীতা, উভয়ের নিরাপত্তা নিশ্চিত হয়।"
      }
    ]
  }
},
    {
      slug: "helping-a-blood-donor",
      category: { en: "Community", bn: "কমিউনিটি" },
      date: "2026-10-08",
      readMinutes: 3,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85",
      imageAlt: { en: "Healthcare professional in a clinical setting", bn: "চিকিৎসাকেন্দ্রে স্বাস্থ্যকর্মী" },
      title: { en: "How to Support Someone Who Needs Blood", bn: "কারও রক্তের প্রয়োজন হলে কীভাবে সাহায্য করবেন" },
      excerpt: {
        en: "Share accurate information, protect personal details, and coordinate safely with the hospital.",
        bn: "সঠিক তথ্য ছড়ান, ব্যক্তিগত তথ্য সুরক্ষিত রাখুন এবং হাসপাতালের সঙ্গে সমন্বয় করুন।"
      },
      body: {
        en: [
          { heading: "Confirm the request", paragraphs: ["Ask the patient's family or hospital for the exact blood component, group if known, hospital name, and contact person. Needs can change, so confirm the details before sharing a request."] },
          { heading: "Share responsibly", bullets: ["Share only information the patient or family has agreed to make public.", "Include a reliable contact and a clear time-sensitive request, but avoid posting identity documents or private medical records.", "Do not promise that a donor is suitable until the blood centre has screened them."] },
          { heading: "Coordinate with the hospital", paragraphs: ["Donors must meet the blood centre's eligibility rules and complete its screening process. The hospital or blood bank should guide the next steps and confirm whether donations are still needed."] },
          { callout: "Do not pay an unknown person for a promised donation or share verification codes, passwords, or banking details with anyone claiming to arrange blood." },
          { heading: "After the need is met", paragraphs: ["Update or remove old requests so people do not travel unnecessarily. Thank volunteers and share verified updates only."] }
        ],
        bn: [
          { heading: "অনুরোধটি নিশ্চিত করুন", paragraphs: ["রোগীর পরিবার বা হাসপাতাল থেকে প্রয়োজনীয় রক্তের উপাদান, জানা থাকলে গ্রুপ, হাসপাতালের নাম এবং যোগাযোগের ব্যক্তির তথ্য নিশ্চিত করুন। প্রয়োজন বদলাতে পারে, তাই অনুরোধ শেয়ার করার আগে তথ্য যাচাই করুন।"] },
          { heading: "দায়িত্বশীলভাবে শেয়ার করুন", bullets: ["রোগী বা পরিবার প্রকাশে সম্মতি দিয়েছেন—শুধু এমন তথ্য শেয়ার করুন।", "বিশ্বস্ত যোগাযোগের তথ্য ও সময়-সংবেদনশীল অনুরোধ দিন, তবে পরিচয়পত্র বা ব্যক্তিগত চিকিৎসার নথি প্রকাশ করবেন না।", "রক্তদান কেন্দ্র পরীক্ষা না করা পর্যন্ত কোনো দাতাকে উপযুক্ত বলে নিশ্চয়তা দেবেন না।"] },
          { heading: "হাসপাতালের সঙ্গে সমন্বয় করুন", paragraphs: ["দাতাকে রক্তদান কেন্দ্রের যোগ্যতার নিয়ম পূরণ করে পরীক্ষা সম্পন্ন করতে হবে। পরবর্তী পদক্ষেপ এবং রক্তের প্রয়োজন এখনও আছে কি না, হাসপাতাল বা ব্লাড ব্যাংক থেকে নিশ্চিত করুন।"] },
          { callout: "রক্তদানের প্রতিশ্রুতি দেওয়া অপরিচিত কাউকে টাকা দেবেন না। রক্তের ব্যবস্থা করার নামে কাউকে OTP, পাসওয়ার্ড বা ব্যাংক তথ্য দেবেন না।" },
          { heading: "প্রয়োজন মিটে গেলে", paragraphs: ["পুরোনো অনুরোধ আপডেট বা মুছে দিন, যাতে কেউ অপ্রয়োজনে যাতায়াত না করেন। স্বেচ্ছাসেবকদের ধন্যবাদ জানান এবং শুধু যাচাই করা তথ্য শেয়ার করুন।"] }
        ]
      }
    }
  ]
};
