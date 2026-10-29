/* =========================================================
   لقطون — Laqtoon
   كل المحتوى اللي يتبدل موجود هنا فوق (الفيديوهات، الخدمات، النصوص)
   ========================================================= */

/* ---------- الشوريل السينمائي (أول قسم في الصفحة) ----------
   preview: مقطع قصير بدون صوت يخدم في الخلفية
   video:   الشوريل الكامل بالصوت (يتفتح لما تضغط "شاهد الشوريل كامل") */
const SHOWREEL = { video: "media/showreel.mp4", preview: "media/showreel-loop.mp4", poster: "media/showreel.jpg" };

/* ---------- الأعمال ----------
   الأصليات في مجلد videos — والنسخ المضغوطة للموقع في مجلد media.
   video:   الفيديو الكامل (ملف، أو رابط تيك توك / إنستغرام / يوتيوب / فيميو)
   preview: مقطع 6 ثواني بدون صوت يخدم على الكرت
   poster:  صورة الغلاف
   desc:    وصف المشروع (اختياري) — اكتبه انت، فاضي = ما يظهرش */
const WORKS = [
  { category: "reels",     title: { ar: "ريلز 01", en: "Reel 01" },           video: "media/reel-1.mp4",      preview: "media/reel-1-preview.mp4",      poster: "media/reel-1.jpg",      vertical: true },
  { category: "reels",     title: { ar: "ريلز 02", en: "Reel 02" },           video: "media/reel-2.mp4",      preview: "media/reel-2-preview.mp4",      poster: "media/reel-2.jpg",      vertical: true },
  { category: "reels",     title: { ar: "ريلز 03", en: "Reel 03" },           video: "media/reel-3.mp4",      preview: "media/reel-3-preview.mp4",      poster: "media/reel-3.jpg",      vertical: true },
  { category: "cinematic", title: { ar: "سينمائي 01", en: "Cinematic 01" },   video: "media/cinematic-1.mp4", preview: "media/cinematic-1-preview.mp4", poster: "media/cinematic-1.jpg", vertical: true },
  { category: "cinematic", title: { ar: "سينمائي 02", en: "Cinematic 02" },   video: "media/cinematic-2.mp4", preview: "media/cinematic-2-preview.mp4", poster: "media/cinematic-2.jpg", vertical: true },
  { category: "cinematic", title: { ar: "سينمائي 03", en: "Cinematic 03" },   video: "media/cinematic-3.mp4", preview: "media/cinematic-3-preview.mp4", poster: "media/cinematic-3.jpg", vertical: true },
  { category: "commercial", title: { ar: "إعلان ريكسونا", en: "Rexona Commercial" },         video: "media/commercial.mp4",  preview: "media/commercial-preview.mp4",  poster: "media/commercial-cover.jpg", vertical: true,
    client: "Rexona",
    desc: { ar: "إعلان لشركة ريكسونا (Rexona) — مونتاج لقطون.", en: "A commercial for Rexona, edited by Laqtoon." } },

  /* موشن جرافيك — الأصليات في D:\me\motion-lab، والنسخ المضغوطة media/motion-*
     spec: true = تصميم تجريبي (مش شغل طلبته الشركة) — تظهر عليه علامة Spec */
  { category: "motion", title: { ar: "Adex — إعلان التطبيق", en: "Adex — App ad" },               video: "media/motion-adex.mp4",      preview: "media/motion-adex-preview.mp4",      poster: "media/motion-adex.jpg" },
  { category: "motion", title: { ar: "Mega Store — إعلان التطبيق", en: "Mega Store — App ad" },   video: "media/motion-megastore.mp4", preview: "media/motion-megastore-preview.mp4", poster: "media/motion-megastore.jpg" },
  { category: "motion", title: { ar: "البيك", en: "ALBAIK" }, spec: true,                         video: "media/motion-albaik.mp4",    preview: "media/motion-albaik-preview.mp4",    poster: "media/motion-albaik.jpg" },
  { category: "motion", title: { ar: "ChatGPT بالعربي", en: "ChatGPT in Arabic" }, spec: true,    video: "media/motion-chatgpt.mp4",   preview: "media/motion-chatgpt-preview.mp4",   poster: "media/motion-chatgpt.jpg" },
  { category: "motion", title: { ar: "لقطون — لوحة الأفكار", en: "Laqtoon — Idea board" },       video: "media/motion-board.mp4",     preview: "media/motion-board-preview.mp4",     poster: "media/motion-board.jpg" },
  { category: "motion", title: { ar: "لقطون — ستايل Apple", en: "Laqtoon — Apple-style UI" },    video: "media/motion-apple.mp4",     preview: "media/motion-apple-preview.mp4",     poster: "media/motion-apple.jpg", vertical: true },
];

/* ---------- الخدمات (نفس ترتيب الأقسام في الأعمال) ----------
   cover: الكرت ياخذ غلافه ومعاينته من المشروع اللي ترتيبه هذا في WORKS */
const SERVICES = [
  { id: "reels", cover: 0,
    ar: ["مونتاج ريلز", "محتوى قصير احترافي لريلز إنستغرام، تيك توك، ويوتيوب شورتس — إيقاع سريع يشد من أول ثانية."],
    en: ["Reels Editing", "Professional short-form content for Instagram Reels, TikTok and YouTube Shorts — fast pacing that hooks from the first second."] },
  { id: "cinematic", cover: 3,
    ar: ["مونتاج سينمائي", "سرد سينمائي، جو، تصميم صوت، تلوين، ولقطات متقنة تعطي فيديوك إحساس الأفلام."],
    en: ["Cinematic Editing", "Cinematic storytelling, atmosphere, sound design, color grading and polished visual sequences."] },
  { id: "commercial", cover: 6,
    ar: ["مونتاج إعلانات", "فيديوهات ترويجية وإعلانية توصل رسالة واضحة وتخدم أهدافك التسويقية."],
    en: ["Commercial & Ad Editing", "Promotional and advertising videos that communicate a clear message and support your marketing goals."] },
  { id: "motion", cover: 12,
    ar: ["موشن جرافيك", "إعلانات تطبيقات، تحريك لوقو، وفيديوهات موشن بحركة ناعمة وصوت مدروس."],
    en: ["Motion Graphics", "App ads, logo animations and motion videos with smooth movement and crafted sound."] },
];

const STEPS = [
  { ar: ["الرؤية", "تبعتلي فكرتك والهدف من الفيديو."],         en: ["Brief", "You share your idea and goals."] },
  { ar: ["التخطيط", "نتفقوا على الستايل، المدة، والسعر."],      en: ["Plan", "We agree on style, length and price."] },
  { ar: ["المونتاج", "نخدم على الفيديو ونبعتلك نسخة أولى."],    en: ["Edit", "I edit and send you a first cut."] },
  { ar: ["التسليم", "تعديلاتك، وبعدها التسليم بأعلى جودة."],    en: ["Deliver", "Your revisions, then final high-quality export."] },
];

/* ---------- النصوص ---------- */
const I18N = {
  ar: {
    "brand": "لقطون",
    "nav.work": "أعمالي", "nav.services": "الخدمات", "nav.about": "من أنا", "nav.contact": "تواصل",
    "cta.short": "ابدأ مشروعك",
    "hero.tag": "الشوريل السينمائي",
    "hero.title": 'كل لقطة<br><span class="accent">تحكي قصة.</span>',
    "hero.lead": "مختارات من شغلي في المونتاج السينمائي — قصة، جو، صوت، وتلوين.",
    "hero.play": "شاهد الشوريل كامل", "hero.services": "خدماتي",
    "stats.years": "سنين خبرة", "stats.projects": "مشروع منجز", "stats.clients": "عميل",
    "services.eyebrow": "الخدمات", "services.title": "أربع خدمات، ستايل واحد",
    "services.explore": "شوف الأعمال",
    "work.eyebrow": "البورتفوليو", "work.title": "أعمالي",
    "work.all": "الكل", "work.projects": n => n === 1 ? "مشروع واحد" : `${n} مشاريع`,
    "work.featured": "مشروع مميز",
    "work.spec": "Spec", "work.specTitle": "تصميم تجريبي — مش شغل طلبته الشركة",
    "work.more": n => `شوف الكل (${n})`, "work.less": "عرض أقل",
    "work.featuredText": "فيديو إعلاني من مونتاج لقطون.",
    "work.watchAd": "شاهد الإعلان", "work.orderAd": "اطلب إعلان لمشروعك",
    "process.eyebrow": "طريقة الشغل", "process.title": "من الفكرة للتسليم في 4 خطوات",
    "about.eyebrow": "من أنا", "about.title": "مونتير شغوف بالتفاصيل",
    "about.stills": "لقطات من أعمالي السينمائية",
    "about.text": "أنا لقطون، مونتير بخبرة 4 سنين في مونتاج الريلز والفيديوهات السينمائية والإعلانات. خدمت مع أكثر من 25 عميل ونفذت أكثر من 200 مشروع. هدفي إن كل فيديو يطلع بإيقاع يشد، وصورة نظيفة، وقصة توصل للناس.",
    "contact.eyebrow": "تواصل", "contact.title": "عندك فيديو يحتاج لمسة؟",
    "contact.lead": "ابعتلي فكرتك وخلينا نحكوا على التفاصيل والسعر.",
    "contact.whatsapp": "راسلني على واتساب",
    "footer.made": "صُنع بشغف ✦ كل لقطة تحكي قصة",
    "modal.soon": "الفيديو حيكون هنا قريباً 🎬",
  },
  en: {
    "brand": "Laqtoon",
    "nav.work": "Work", "nav.services": "Services", "nav.about": "About", "nav.contact": "Contact",
    "cta.short": "Start a project",
    "hero.tag": "Cinematic Showreel",
    "hero.title": 'Every shot<br><span class="accent">tells a story.</span>',
    "hero.lead": "A selection of my cinematic editing — story, atmosphere, sound and color.",
    "hero.play": "Watch full showreel", "hero.services": "My services",
    "stats.years": "Years of experience", "stats.projects": "Projects delivered", "stats.clients": "Clients",
    "services.eyebrow": "Services", "services.title": "Four services, one signature style",
    "services.explore": "Explore work",
    "work.eyebrow": "Portfolio", "work.title": "Selected work",
    "work.all": "All", "work.projects": n => n === 1 ? "1 project" : `${n} projects`,
    "work.featured": "Featured project",
    "work.spec": "Spec", "work.specTitle": "Spec work — not commissioned by the brand",
    "work.more": n => `Show all (${n})`, "work.less": "Show less",
    "work.featuredText": "An advertising video edited by Laqtoon.",
    "work.watchAd": "Watch the ad", "work.orderAd": "Get an ad for your brand",
    "process.eyebrow": "Process", "process.title": "From idea to delivery in 4 steps",
    "about.eyebrow": "About", "about.title": "An editor obsessed with details",
    "about.stills": "Stills from my cinematic work",
    "about.text": "I'm Laqtoon, a video editor with 4 years of experience in reels, cinematic edits and commercials. I've worked with 25+ clients and delivered 200+ projects. My goal: every video has a gripping rhythm, a clean look, and a story that connects.",
    "contact.eyebrow": "Contact", "contact.title": "Got a video that needs magic?",
    "contact.lead": "Send me your idea and let's talk details and pricing.",
    "contact.whatsapp": "Message me on WhatsApp",
    "footer.made": "Made with passion ✦ Every shot tells a story",
    "modal.soon": "Video coming soon 🎬",
  },
};

/* =========================================================
   المنطق — ما تحتاجش تبدل حاجة تحت هذا السطر
   ========================================================= */
let lang = "ar";
let activeFilter = "all";
let motionExpanded = false;
const MOTION_LIMIT = 6;
try { lang = localStorage.getItem("laqtoon-lang") || "ar"; } catch (e) {}

const $ = (s, el = document) => el.querySelector(s);
const t = k => I18N[lang][k];
const PLAY_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
const ARROW = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
/* متصفحات التطبيقات (تيك توك، إنستغرام، فيسبوك، سناب) تفتح أي فيديو يشتغل وحده في شاشة كاملة،
   فيها ما نشغلوش حتى فيديو تلقائياً — الزبون يضغط ويتفرج بالصوت والجودة الكاملة */
const inAppBrowser = /musical_ly|trill_|TikTok|Bytedance|Instagram|FBAN|FBAV|FB_IAB|Snapchat/i.test(navigator.userAgent);
let noAutoplay = reduceMotion || inAppBrowser;
try { if (sessionStorage.getItem("laqtoon-no-autoplay")) noAutoplay = true; } catch (e) {}
const canHover = window.matchMedia("(hover: hover)").matches;
const ORDER = SERVICES.map(s => s.id);
const serviceName = id => SERVICES.find(s => s.id === id)[lang][0];

/* --- تحليل رابط الفيديو --- */
function parseVideo(src) {
  if (!src) return null;
  let m = src.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/) || src.match(/^([\w-]{11})$/);
  if (m) return { type: "youtube", id: m[1] };
  m = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (m) return { type: "vimeo", id: m[1] };
  m = src.match(/tiktok\.com\/.*\/video\/(\d+)/);
  if (m) return { type: "tiktok", id: m[1], vertical: true };
  m = src.match(/instagram\.com\/(?:[\w.]+\/)?(?:reel|reels|p)\/([\w-]+)/);
  if (m) return { type: "instagram", id: m[1], vertical: true };
  return { type: "file", src };
}

/* غلاف + معاينة (تشتغل لما تعدي الماوس، أو لما يبان الكرت في الموبايل) */
function mediaHTML(w) {
  const poster = w.poster ? `<img src="${w.poster}" alt="" loading="lazy" decoding="async">` : "";
  const preview = w.preview ? `<video muted loop playsinline webkit-playsinline disablepictureinpicture preload="none" data-src="${w.preview}"></video>` : "";
  return poster + preview;
}

/* --- الترجمة --- */
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = t(el.dataset.i18n); if (typeof v === "string") el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const v = t(el.dataset.i18nHtml); if (v) el.innerHTML = v;
  });
  $("#langToggle").textContent = lang === "ar" ? "EN" : "ع";
  renderServices(); renderFilters(); renderWork(); renderSteps();
}

/* --- الخدمات --- */
function renderServices() {
  $("#servicesList").innerHTML = SERVICES.map(s => {
    const cover = WORKS[s.cover];
    const count = WORKS.filter(w => w.category === s.id).length;
    return `
      <a class="svc reveal" href="#work/${s.id}" data-preview>
        <div class="svc__media">${cover ? mediaHTML(cover) : ""}
          <span class="chip chip--dark">${t("work.projects")(count)}</span>
        </div>
        <div class="svc__body">
          <h3>${s[lang][0]}</h3>
          <p>${s[lang][1]}</p>
          <span class="svc__cta">${t("services.explore")} ${ARROW}</span>
        </div>
      </a>`;
  }).join("");
  observeReveal(); observePreviews();
}

/* --- الأعمال --- */
function renderFilters() {
  const tabs = [["all", t("work.all")], ...ORDER.map(id => [id, serviceName(id)])];
  $("#filters").innerHTML = tabs.map(([k, label]) =>
    `<button class="filter${k === activeFilter ? " is-active" : ""}" data-filter="${k}" role="tab" aria-selected="${k === activeFilter}">${label}</button>`
  ).join("");
}

function videoCard(w, wide) {
  const i = WORKS.indexOf(w);
  const cls = "vcard" + (wide ? " vcard--wide" : "") + (wide && w.vertical ? " vcard--fit" : "");
  const spec = w.spec ? `<span class="chip chip--dark vcard__chip" title="${t("work.specTitle")}">${t("work.spec")}</span>` : "";
  return `
    <article class="${cls}" data-index="${i}" data-preview tabindex="0" role="button" aria-label="${w.title[lang]}">
      ${mediaHTML(w)}${spec}
      <div class="vcard__play"><span>${PLAY_ICON}</span></div>
      <h4 class="vcard__title">${w.title[lang]}</h4>
    </article>`;
}

function featuredBlock(w) {
  const i = WORKS.indexOf(w);
  const desc = (w.desc && w.desc[lang]) || t("work.featuredText");
  return `
    <div class="feature">
      <div class="feature__media vcard" data-index="${i}" data-preview tabindex="0" role="button" aria-label="${w.title[lang]}">
        ${mediaHTML(w)}
        <div class="vcard__play is-visible"><span>${PLAY_ICON}</span></div>
      </div>
      <div class="feature__body">
        <span class="chip chip--accent">${t("work.featured")}</span>
        <span class="feature__kicker">${serviceName(w.category)}</span>
        <h3 class="feature__title">${w.client || w.title[lang]}</h3>
        <p>${desc}</p>
        <div class="feature__cta">
          <button type="button" class="btn btn--light" data-play="${i}">${PLAY_ICON}<span>${t("work.watchAd")}</span></button>
          <a href="#contact" class="btn btn--glass">${t("work.orderAd")}</a>
        </div>
      </div>
    </div>`;
}

function renderWork() {
  const ids = activeFilter === "all" ? ORDER : [activeFilter];
  $("#workGroups").innerHTML = ids.map(id => {
    const items = WORKS.filter(w => w.category === id);
    if (!items.length) return "";
    const s = SERVICES.find(x => x.id === id);
    let body;
    if (items.length === 1) body = featuredBlock(items[0]);
    else if (id === "motion") {
      /* الموشن أفقي في أغلبه — كروت عريضة، وأول 6 بس لين يضغط "شوف الكل" */
      const shown = motionExpanded || activeFilter === "motion" ? items : items.slice(0, MOTION_LIMIT);
      const more = items.length > MOTION_LIMIT && activeFilter !== "motion"
        ? `<button type="button" class="btn btn--ghost work-more" data-more>${motionExpanded ? t("work.less") : t("work.more")(items.length)}</button>` : "";
      body = `<div class="vgrid vgrid--wide">${shown.map(w => videoCard(w, true)).join("")}</div>${more}`;
    }
    else body = `<div class="vgrid">${items.map(w => videoCard(w)).join("")}</div>`;
    return `
      <div class="work-group" id="group-${id}">
        <div class="work-group__head">
          <h3>${s[lang][0]}</h3>
          <span class="work-group__count">${t("work.projects")(items.length)}</span>
        </div>
        ${body}
      </div>`;
  }).join("");
  observePreviews();
}

function renderSteps() {
  $("#stepsList").innerHTML = STEPS.map(s => `
    <li class="step reveal"><h3>${s[lang][0]}</h3><p>${s[lang][1]}</p></li>`).join("");
  observeReveal();
}

function setFilter(f, scroll) {
  activeFilter = ORDER.includes(f) ? f : "all";
  renderFilters(); renderWork();
  if (scroll) $("#work").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}

/* --- معاينات الفيديو --- */
function playPreview(el) {
  const v = el.querySelector("video[data-src]"); if (!v || noAutoplay) return;
  if (!v.src) v.src = v.dataset.src;
  v.play().then(() => el.classList.add("is-playing")).catch(() => {});
}
function stopPreview(el) {
  const v = el.querySelector("video[data-src]"); if (!v) return;
  v.pause(); el.classList.remove("is-playing");
}

/* المعاينات تخدم بس بالماوس (كمبيوتر). في الموبايل الكروت تعرض الغلاف، والزبون يضغط ويتفرج —
   لأن بعض متصفحات التطبيقات (زي تيك توك) تفتح أي فيديو يخدم وحده في شاشة كاملة */
function observePreviews() {}
if (canHover) {
  document.addEventListener("mouseover", e => {
    const el = e.target.closest("[data-preview]"); if (el && !el.contains(e.relatedTarget)) playPreview(el);
  });
  document.addEventListener("mouseout", e => {
    const el = e.target.closest("[data-preview]"); if (el && !el.contains(e.relatedTarget)) stopPreview(el);
  });
}

/* --- نافذة الفيديو --- */
function openVideo(src, vertical) {
  const v = parseVideo(src);
  let html;
  if (!v) html = `<div class="modal__empty">${t("modal.soon")}</div>`;
  else if (v.type === "youtube") html = `<iframe src="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0" allow="autoplay; fullscreen; encrypted-media" allowfullscreen></iframe>`;
  else if (v.type === "vimeo") html = `<iframe src="https://player.vimeo.com/video/${v.id}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  else if (v.type === "tiktok") html = `<iframe src="https://www.tiktok.com/embed/v2/${v.id}" allow="autoplay; fullscreen; encrypted-media" allowfullscreen></iframe>`;
  else if (v.type === "instagram") html = `<iframe src="https://www.instagram.com/reel/${v.id}/embed" allowfullscreen scrolling="no"></iframe>`;
  else html = `<video src="${v.src}" controls autoplay playsinline></video>`;
  $("#modalFrame").innerHTML = html;
  // الفيديوهات الطولية (ريلز/تيك توك) تتعرض بالطول
  const vid = $("#modalFrame video");
  const setVertical = on => $("#modal").classList.toggle("is-vertical", on);
  setVertical(!!(vertical || (v && v.vertical)));
  if (vid) vid.addEventListener("loadedmetadata", () => setVertical(vid.videoHeight > vid.videoWidth));
  $("#modal").classList.add("is-open");
  $("#modal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  heroVideo.pause();
  $(".modal__close").focus();
}

function closeVideo() {
  if (!$("#modal").classList.contains("is-open")) return;
  $("#modal").classList.remove("is-open");
  $("#modal").setAttribute("aria-hidden", "true");
  $("#modalFrame").innerHTML = "";
  document.body.style.overflow = "";
  if (heroVisible) startHero();
}
const openWork = i => openVideo(WORKS[i].video, WORKS[i].vertical);

/* --- ظهور العناصر مع السكرول --- */
const io = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    }), { threshold: 0.15 })
  : null;
function observeReveal() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => io ? io.observe(el) : el.classList.add("is-visible"));
}

/* --- الشوريل في الخلفية: يخدم بس لما يكون ظاهر --- */
const heroVideo = $("#heroVideo");
let heroVisible = true;
function startHero() {
  if (noAutoplay) return;
  if (!heroVideo.src) heroVideo.src = SHOWREEL.preview;
  heroVideo.play().then(() => { if (heroVideo.webkitDisplayingFullscreen) blockAutoplay(); }).catch(() => {});
}

/* حماية: لو المتصفح حاول يفتح الشوريل في شاشة كاملة وحده، نسكروا الشاشة الكاملة
   ونرجعوا لصورة الغلاف، وما نشغلوش حتى فيديو تلقائياً بعدها */
function blockAutoplay() {
  noAutoplay = true;
  try { sessionStorage.setItem("laqtoon-no-autoplay", "1"); } catch (e) {}
  try { heroVideo.webkitExitFullscreen && heroVideo.webkitExitFullscreen(); } catch (e) {}
  try { if (document.fullscreenElement === heroVideo) document.exitFullscreen(); } catch (e) {}
  heroVideo.pause();
  heroVideo.removeAttribute("src");
  heroVideo.load();
}
heroVideo.addEventListener("webkitbeginfullscreen", blockAutoplay);
heroVideo.addEventListener("enterpictureinpicture", blockAutoplay);
["fullscreenchange", "webkitfullscreenchange"].forEach(ev => document.addEventListener(ev, () => {
  const fs = document.fullscreenElement || document.webkitFullscreenElement;
  if (fs === heroVideo) blockAutoplay();
}));
if ("IntersectionObserver" in window) {
  new IntersectionObserver(([e]) => {
    heroVisible = e.isIntersecting;
    heroVisible && !$("#modal").classList.contains("is-open") ? startHero() : heroVideo.pause();
  }, { threshold: 0.2 }).observe($("#showreel"));
} else startHero();
$("#playReel").addEventListener("click", () => openVideo(SHOWREEL.video, false));

/* --- الأحداث --- */
$("#langToggle").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  try { localStorage.setItem("laqtoon-lang", lang); } catch (e) {}
  applyLang();
});

$("#filters").addEventListener("click", e => {
  const b = e.target.closest("[data-filter]"); if (!b) return;
  history.replaceState(null, "", b.dataset.filter === "all" ? "#work" : `#work/${b.dataset.filter}`);
  setFilter(b.dataset.filter, false);
});

$("#workGroups").addEventListener("click", e => {
  if (e.target.closest("[data-more]")) {
    motionExpanded = !motionExpanded; renderWork();
    if (!motionExpanded) $("#group-motion").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    return;
  }
  const b = e.target.closest("[data-play]"); if (b) return openWork(b.dataset.play);
  const c = e.target.closest("[data-index]"); if (c) openWork(c.dataset.index);
});
$("#workGroups").addEventListener("keydown", e => {
  const c = e.target.closest("[data-index]");
  if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openWork(c.dataset.index); }
});

/* روابط الخدمات (#work/reels ...) — تخدم حتى مع زر الرجوع في المتصفح */
function handleHash() {
  const m = location.hash.match(/^#work\/(\w+)/);
  if (m) setFilter(m[1], true);
}
window.addEventListener("hashchange", handleHash);

document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeVideo));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeVideo(); });

const menuBtn = $("#menuToggle"), nav = $("#nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => {
  if (e.target.tagName === "A") { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); }
});

/* هيدر + تمييز القسم الحالي في القائمة */
const header = $("#header");
const sections = ["services", "work", "about", "contact"].map(id => document.getElementById(id));
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
  const y = window.scrollY + window.innerHeight / 3;
  let current = "";
  sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
  nav.querySelectorAll("a").forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + current));
}, { passive: true });

$("#year").textContent = new Date().getFullYear();
applyLang();
handleHash();
