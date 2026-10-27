(() => {
  const config = window.BLOODLINK_BLOG_CONFIG || { blogs: [], defaultLanguage: "en" };
  const blogs = window.BLOODLINK_BLOGS || config.blogs || [];
  const copy = {
    en: {
      menuSubtitle:"Donate Blood, Save Lives",home:"Home",allBlogs:"All blogs",about:"About BloodLink Blog",
      language:"Language: English / বাংলা",report:"Report a problem",share:"Share this website",
      menuNote:"Made to help people make informed choices.",tagline:"Donate Blood, Save Lives",
      heroNote:"Knowledge connects us. Every donation matters.",eyebrow:"THE BLOODLINK JOURNAL",
      heading:"Stories and knowledge that save lives.",intro:"Explore practical guides, donor stories, and reliable information about blood donation.",
      articles:"articles",searchPlaceholder:"Search blogs, topics, or keywords…",browse:"Browse by topic",
      freshReads:"FRESH READS",latest:"Latest articles",updated:"Helpful reads for every donor",
      noResults:"No articles found",noResultsText:"Try another keyword or choose a different topic.",reset:"Reset search",
      ourPurpose:"OUR PURPOSE",aboutTitle:"Small acts. Life-changing impact.",
      aboutText:"BloodLink Blog shares approachable information to help people understand blood donation and support their communities. It is educational content, not a substitute for advice from a qualified healthcare professional.",
      footerText:"Donate blood. Share knowledge. Save lives.",read:"Read article",back:"Back to all articles",
      keepReading:"KEEP READING",related:"Related articles",published:"Published",minRead:"min read",
      disclaimer:"Educational information only. Eligibility, donation procedures, and clinical decisions should be confirmed with a qualified healthcare professional or your local blood centre.",
      notFound:"Article not found",notFoundText:"This article may have moved or the link may be incorrect.",goHome:"Back to home",
      allTopics:"All topics",shareCopied:"Website link copied.",shareUnavailable:"Copy this link to share:"
    },
    bn: {
      menuSubtitle:"রক্ত দিন, জীবন বাঁচান",home:"হোম",allBlogs:"সব ব্লগ",about:"BloodLink Blog সম্পর্কে",
      language:"ভাষা: English / বাংলা",report:"সমস্যা জানান",share:"ওয়েবসাইট শেয়ার করুন",
      menuNote:"সচেতন সিদ্ধান্ত নিতে সাহায্য করার জন্য তৈরি।",tagline:"রক্ত দিন, জীবন বাঁচান",
      heroNote:"জ্ঞান আমাদের যুক্ত করে। প্রতিটি দান গুরুত্বপূর্ণ।",eyebrow:"ব্লাডলিংক জার্নাল",
      heading:"জীবন বাঁচায় এমন গল্প ও জ্ঞান।",intro:"রক্তদান সম্পর্কে ব্যবহারিক নির্দেশিকা, দাতাদের গল্প এবং নির্ভরযোগ্য তথ্য পড়ুন।",
      articles:"টি প্রবন্ধ",searchPlaceholder:"ব্লগ, বিষয় বা শব্দ খুঁজুন…",browse:"বিষয় অনুযায়ী দেখুন",
      freshReads:"নতুন লেখা",latest:"সাম্প্রতিক প্রবন্ধ",updated:"প্রতিটি রক্তদাতার জন্য সহায়ক তথ্য",
      noResults:"কোনো প্রবন্ধ পাওয়া যায়নি",noResultsText:"অন্য শব্দ লিখুন বা ভিন্ন বিষয় বেছে নিন।",reset:"সার্চ রিসেট করুন",
      ourPurpose:"আমাদের উদ্দেশ্য",aboutTitle:"ছোট উদ্যোগ, বড় প্রভাব।",
      aboutText:"রক্তদান বুঝতে এবং কমিউনিটিকে সহায়তা করতে BloodLink Blog সহজবোধ্য তথ্য প্রকাশ করে। এটি শিক্ষামূলক কনটেন্ট, যোগ্য স্বাস্থ্যকর্মীর পরামর্শের বিকল্প নয়।",
      footerText:"রক্ত দিন। জ্ঞান ছড়ান। জীবন বাঁচান।",read:"প্রবন্ধ পড়ুন",back:"সব প্রবন্ধে ফিরুন",
      keepReading:"আরও পড়ুন",related:"সম্পর্কিত প্রবন্ধ",published:"প্রকাশিত",minRead:"মিনিট পড়া",
      disclaimer:"শুধু শিক্ষামূলক তথ্য। রক্তদানের যোগ্যতা, পদ্ধতি ও চিকিৎসাসংক্রান্ত সিদ্ধান্ত যোগ্য স্বাস্থ্যকর্মী বা স্থানীয় রক্তদান কেন্দ্রের সঙ্গে নিশ্চিত করুন।",
      notFound:"প্রবন্ধ পাওয়া যায়নি",notFoundText:"প্রবন্ধটি সরানো হয়েছে অথবা লিংকে ভুল থাকতে পারে।",goHome:"হোমে ফিরুন",
      allTopics:"সব বিষয়",shareCopied:"ওয়েবসাইটের লিংক কপি হয়েছে।",shareUnavailable:"শেয়ার করতে এই লিংকটি কপি করুন:"
    }
  };
  let language = localStorage.getItem("bloodlinkBlogLanguage") || config.defaultLanguage || "en";
  if (!copy[language]) language = "en";
  let selectedTopic = "all";

  const t = key => (copy[language] && copy[language][key]) || copy.en[key] || key;
  const textOf = value => typeof value === "string" ? value : (value && (value[language] || value.en)) || "";
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const dateText = date => {
    const d = new Date(date + "T12:00:00");
    try { return new Intl.DateTimeFormat(language === "bn" ? "bn-BD" : "en-US", {day:"numeric",month:"short",year:"numeric"}).format(d); }
    catch { return date; }
  };
  const slugFromURL = () => new URLSearchParams(location.search).get("slug");
  const getBlog = slug => blogs.find(b => b.slug === slug);
  function setMeta(selector, attr, value) {
    let el = document.querySelector(selector);
    if (!el) { el = document.createElement("meta"); const [kind, key] = selector.match(/\[(name|property)="([^"]+)"\]/).slice(1); el.setAttribute(kind, key); document.head.appendChild(el); }
    el.setAttribute(attr, value);
  }
  function setSEO(title, description, image, canonical) {
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = canonical;
  }
  const absoluteURL = value => new URL(value || "assets/bloodlink-logo.png", (config.siteUrl || location.origin).replace(/\/$/, "") + "/").href;
  const categoryNames = () => [...new Set(blogs.map(b => textOf(b.category)))];
  const blogCard = blog => `
    <article class="blog-card">
      <a href="blog.html?slug=${encodeURIComponent(blog.slug)}" aria-label="${escapeHTML(textOf(blog.title))}">
        <img class="card-image" src="${escapeHTML(blog.image)}" alt="${escapeHTML(textOf(blog.imageAlt) || textOf(blog.title))}" loading="lazy" decoding="async" onerror="this.style.display='none'">
      </a>
      <div class="card-body">
        <div class="card-meta"><span class="category-label">${escapeHTML(textOf(blog.category))}</span><span>${escapeHTML(dateText(blog.date))}</span><span>· ${blog.readMinutes} ${escapeHTML(t("minRead"))}</span></div>
        <h3 class="card-title"><a href="blog.html?slug=${encodeURIComponent(blog.slug)}">${escapeHTML(textOf(blog.title))}</a></h3>
        <p class="card-excerpt">${escapeHTML(textOf(blog.excerpt))}</p>
        <a class="read-link" href="blog.html?slug=${encodeURIComponent(blog.slug)}">${escapeHTML(t("read"))} <span>→</span></a>
      </div>
    </article>`;

  function applyLanguage() {
    document.documentElement.lang = language === "bn" ? "bn" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (t(key)) el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
    document.querySelectorAll("[data-lang]").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === language));
    renderTopics();
    if (document.getElementById("blogGrid")) renderBlogList();
    if (document.getElementById("articleContent")) renderArticle();
  }

  function renderTopics() {
    const holder = document.getElementById("topicFilters");
    if (!holder) return;
    const topics = categoryNames();
    holder.innerHTML = `<button class="topic-chip ${selectedTopic === "all" ? "active" : ""}" data-topic="all">${escapeHTML(t("allTopics"))}</button>` +
      topics.map(topic => `<button class="topic-chip ${selectedTopic === topic ? "active" : ""}" data-topic="${escapeHTML(topic)}">${escapeHTML(topic)}</button>`).join("");
    holder.querySelectorAll("[data-topic]").forEach(btn => btn.addEventListener("click", () => {
      selectedTopic = btn.dataset.topic;
      renderTopics(); renderBlogList();
    }));
  }

  function renderBlogList() {
    const grid = document.getElementById("blogGrid");
    if (!grid) return;
    const input = document.getElementById("searchInput");
    const query = (input?.value || "").trim().toLocaleLowerCase();
    const visible = blogs.filter(blog => {
      const category = textOf(blog.category);
      const topicOK = selectedTopic === "all" || category === selectedTopic;
      const bodyText = Object.values(blog.body || {}).flat().map(block =>
        [block.heading || "", ...(block.paragraphs || []), ...(block.bullets || []), block.callout || ""].join(" ")
      ).join(" ");
      const searchable = [textOf(blog.title), textOf(blog.excerpt), category, blog.slug, textOf(blog.metaDescription), bodyText].join(" ").toLocaleLowerCase();
      return topicOK && (!query || searchable.includes(query));
    }).sort((a,b) => b.date.localeCompare(a.date));
    grid.innerHTML = visible.length ? visible.map(blogCard).join("") : "";
    grid.hidden = visible.length === 0;
    const empty = document.getElementById("emptyState");
    if (empty) empty.hidden = visible.length !== 0;
    const clear = document.getElementById("clearSearch");
    if (clear) clear.hidden = !input?.value;
  }

  function renderBody(blocks) {
    return (blocks || []).map(block => {
      if (block.callout) return `<div class="article-callout">${escapeHTML(block.callout)}</div>`;
      let html = block.heading ? `<h2>${escapeHTML(block.heading)}</h2>` : "";
      if (block.paragraphs) html += block.paragraphs.map(p => `<p>${escapeHTML(p)}</p>`).join("");
      if (block.bullets) html += `<ul>${block.bullets.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
      return html;
    }).join("");
  }

  function renderArticle() {
    const target = document.getElementById("articleContent");
    if (!target) return;
    const blog = getBlog(slugFromURL());
    if (!blog) {
      setSEO(`${t("notFound")} | BloodLink Blog`, t("notFoundText"), absoluteURL(config.ogImage), absoluteURL("404.html"));
      target.innerHTML = `<div class="not-found"><div class="about-symbol" style="margin:0 auto">滴</div><h1>${escapeHTML(t("notFound"))}</h1><p>${escapeHTML(t("notFoundText"))}</p><a class="button-primary" style="display:inline-block" href="index.html">${escapeHTML(t("goHome"))}</a></div>`;
      const related = document.getElementById("relatedGrid"); if (related) related.innerHTML = "";
      return;
    }
    const title = textOf(blog.title);
    const description = textOf(blog.metaDescription) || textOf(blog.excerpt) || `Read ${title} on BloodLink Blog.`;
    const articleURL = absoluteURL(`blog.html?slug=${encodeURIComponent(blog.slug)}`);
    setSEO(`${title} | BloodLink Blog`, description, absoluteURL(blog.ogImage || blog.image || config.ogImage), articleURL);
    const body = blog.body?.[language] || blog.body?.en || [];
    target.innerHTML = `
      <img class="article-hero-image" src="${escapeHTML(blog.image)}" alt="${escapeHTML(textOf(blog.imageAlt) || title)}" decoding="async" onerror="this.style.display='none'">
      <header class="article-header">
        <div class="card-meta"><span class="category-label">${escapeHTML(textOf(blog.category))}</span><span>${escapeHTML(t("published"))} ${escapeHTML(dateText(blog.date))}</span><span>· ${blog.readMinutes} ${escapeHTML(t("minRead"))}</span></div>
        <h1>${escapeHTML(title)}</h1>
        <p class="article-subtitle">${escapeHTML(textOf(blog.excerpt))}</p>
      </header>
      <article class="article-body">${renderBody(body)}<p class="article-disclaimer">${escapeHTML(t("disclaimer"))}</p></article>`;
    const related = document.getElementById("relatedGrid");
    if (related) related.innerHTML = blogs.filter(b => b.slug !== blog.slug && textOf(b.category) === textOf(blog.category)).concat(blogs.filter(b => b.slug !== blog.slug && textOf(b.category) !== textOf(blog.category))).slice(0,2).map(blogCard).join("");
  }

  function setLanguage(next) {
    language = next === "bn" ? "bn" : "en";
    try { localStorage.setItem("bloodlinkBlogLanguage", language); } catch {}
    applyLanguage();
  }

  function initMenu() {
    const toggle = document.getElementById("menuToggle"), close = document.getElementById("closeMenu");
    const scrim = document.getElementById("scrim");
    const setOpen = open => {
      document.body.classList.toggle("menu-open", open);
      toggle?.setAttribute("aria-expanded", String(open));
      document.getElementById("sideMenu")?.setAttribute("aria-hidden", String(!open));
    };
    toggle?.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
    close?.addEventListener("click", () => setOpen(false));
    scrim?.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
    document.getElementById("menuLanguage")?.addEventListener("click", () => setLanguage(language === "en" ? "bn" : "en"));
    document.getElementById("shareButton")?.addEventListener("click", async () => {
      const url = location.href;
      try {
        if (navigator.share) await navigator.share({ title: document.title, url });
        else if (navigator.clipboard) { await navigator.clipboard.writeText(url); alert(t("shareCopied")); }
        else prompt(t("shareUnavailable"), url);
      } catch (err) { if (err?.name !== "AbortError") prompt(t("shareUnavailable"), url); }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());
    document.querySelectorAll("[data-lang]").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
    document.getElementById("searchInput")?.addEventListener("input", renderBlogList);
    document.getElementById("searchInput")?.addEventListener("keydown", event => {
      if (event.key === "Escape") { event.currentTarget.value = ""; renderBlogList(); event.currentTarget.blur(); }
    });
    document.getElementById("clearSearch")?.addEventListener("click", () => { const input = document.getElementById("searchInput"); input.value = ""; renderBlogList(); input.focus(); });
    document.getElementById("resetSearch")?.addEventListener("click", () => {
      const input = document.getElementById("searchInput"); if (input) input.value = "";
      selectedTopic = "all"; renderTopics(); renderBlogList();
    });
    initMenu();
    if (document.getElementById("blogGrid")) {
      setSEO("BloodLink Blog | Donate Blood, Save Lives", "Explore practical blood donation guides, donor stories, and reliable blood health information from BloodLink Blog.", absoluteURL(config.ogImage), absoluteURL("index.html"));
    }
    applyLanguage();
  });
})();
