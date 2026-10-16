// فيديوهات تعريف المنتجات — ملفات فيديو حقيقية مصوّرة داخل معرض ARSH ENGINEERING.
// لكل منتج فيديو خاص به، مع نقاط زمنية تُظهر المواصفة لحظة ذكرها في التعليق الصوتي.
// كل قيمة هنا مأخوذة حرفياً من الكتالوج/الداتاشيت الرسمي للمنتج — ممنوع إضافة أي قيمة غير موثقة.
// لإضافة فيديو منتج جديد: ارفع ملف mp4 إلى src/assets/showroom/<id>.mp4 وصورة البوستر <id>.jpg، ثم أضف مدخلاً هنا بنفس معرف المنتج.

import deyeVideo from "@/assets/showroom/deye-sun-3-6k-sg04lp1.mp4.asset.json";
import deyePoster from "@/assets/showroom/deye-sun-3-6k-sg04lp1.jpg";
import deye12kVideo from "@/assets/showroom/deye-sun-7-6-12k-sg02lp1.mp4.asset.json";
import deye12kPoster from "@/assets/showroom/deye-sun-7-6-12k-sg02lp1.jpg";
import deye20kVideo from "@/assets/showroom/deye-sun-14-20k-sg05lp3.mp4.asset.json";
import deye20kPoster from "@/assets/showroom/deye-sun-14-20k-sg05lp3.jpg";
import deye50kVideo from "@/assets/showroom/deye-sun-29-9-50k-sg01hp3.mp4.asset.json";
import deye50kPoster from "@/assets/showroom/deye-sun-29-9-50k-sg01hp3.jpg";
import deye80kVideo from "@/assets/showroom/deye-sun-60-80k-sg02hp3.mp4.asset.json";
import deye80kPoster from "@/assets/showroom/deye-sun-60-80k-sg02hp3.jpg";

/** بطاقة مواصفة تظهر على الفيديو من الثانية `at` حتى `until`. */
export type VideoCue = { at: number; until: number; label: string; value: string };

export type ProductVideo = {
  src: string;
  poster: string;
  cues: VideoCue[];
};

export const PRODUCT_VIDEOS: Record<string, ProductVideo> = {
  "deye-sun-3-6k-sg04lp1": {
    src: deyeVideo.url,
    poster: deyePoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "3 – 6 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Single Phase Hybrid" },
      { at: 5.4, until: 7.4, label: "جهد البطارية", value: "48 Vdc" },
      { at: 7.4, until: 10, label: "أقصى كفاءة تحويل", value: "97.6%" },
    ],
  },
  "deye-sun-7-6-12k-sg02lp1": {
    src: deye12kVideo.url,
    poster: deye12kPoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "7.6 – 12 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Single Phase Hybrid" },
      { at: 5.4, until: 7.4, label: "جهد البطارية", value: "40–60 V" },
      { at: 7.4, until: 10, label: "أقصى كفاءة", value: "97.6%" },
    ],
  },
  "deye-sun-14-20k-sg05lp3": {
    src: deye20kVideo.url,
    poster: deye20kPoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "14 – 20 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Three Phase Hybrid — 3L+N+PE" },
      { at: 5.4, until: 7.4, label: "أقصى جهد PV", value: "800 V" },
      { at: 7.4, until: 10, label: "أقصى كفاءة", value: "97.6%" },
    ],
  },
  "deye-sun-29-9-50k-sg01hp3": {
    src: deye50kVideo.url,
    poster: deye50kPoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "29.9 – 50 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Three Phase — 3L/N/PE" },
      { at: 5.4, until: 7.4, label: "جهد البطارية", value: "160–800 V" },
      { at: 7.4, until: 10, label: "أقصى كفاءة", value: "97.60%" },
    ],
  },
  "deye-sun-60-80k-sg02hp3": {
    src: deye80kVideo.url,
    poster: deye80kPoster,
    cues: [
      { at: 0.5, until: 3.2, label: "القدرة المقننة", value: "60 – 80 kW" },
      { at: 3.2, until: 5.4, label: "نوع النظام", value: "Three Phase Hybrid — 3L+N+PE" },
      { at: 5.4, until: 7.4, label: "جهد البطارية", value: "160–1000 V" },
      { at: 7.4, until: 10, label: "أقصى كفاءة", value: "97.60%" },
    ],
  },
};

/** الفيديوهات التعريفية أُزيلت بطلب المستخدم؛ صفحات المنتجات تعرض المواصفات مباشرة. */
export function getProductVideo(_productId: string): ProductVideo | null {
  void PRODUCT_VIDEOS;
  return null;
}

/** ينطق الوحدات والرموز الهندسية بالعربية حتى يقرأها التعليق الصوتي سليمة. */
function spokenValue(raw: string) {
  return raw
    .replace(/(\d)\s*~\s*(\d)/g, "$1 إلى $2")
    .replace(/(\d)\s*[–-]\s*(\d)/g, "$1 إلى $2")
    .replace(/>\s*/g, "أكثر من ")
    .replace(/([\d.,]+)\s*\+/g, "أكثر من $1")
    .replace(/\bkWh\b/gi, "كيلو واط ساعة")
    .replace(/\bWh\b/gi, "واط ساعة")
    .replace(/\bkW\b/g, "كيلو واط")
    .replace(/\bW\b/g, "واط")
    .replace(/\bAh\b/gi, "أمبير ساعة")
    .replace(/\bVdc\b/gi, "فولت تيار مستمر")
    .replace(/\bV\b/g, "فولت")
    .replace(/°\s*C/g, "درجة مئوية")
    .replace(/%/g, " بالمئة")
    .replace(/\bSingle Phase Hybrid\b/gi, "هجين أحادي الطور")
    .replace(/\bSingle Phase\b/gi, "أحادي الطور")
    .replace(/\bThree Phase\b/gi, "ثلاثي الأطوار")
    .replace(/\bHybrid\b/gi, "هجين")
    .replace(/\bLiFePO4\b/gi, "ليثيوم فوسفات الحديد")
    .replace(/\bN-Type TOPCon\b/gi, "خلايا توبكون من النوع إن")
    .replace(/\bPmax\b/gi, "")
    .replace(/زجاج\s*[-–]?\s*زجاج/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** أسماء العلامات كما تُنطق بالعربية في التعليق الصوتي. */
function spokenName(raw: string) {
  return spokenValue(
    raw
      .replace(/\bSuntech\b/gi, "سن تك")
      .replace(/\bDeye\b/gi, "داي")
      .replace(/\bSolis\b/gi, "سوليس")
      .replace(/\bLi-?Power\b/gi, "لي باور")
      .replace(/\bPylontech\b/gi, "بايلونتك")
      .replace(/\bHiTHIUM\b/gi, "هاي ثيوم")
      .replace(/\bHeroEE\b/gi, "هيرو إي إي")
      .replace(/\bMaxPower\b/gi, "ماكس باور")
      .replace(/\bNeoPower\b/gi, "نيو باور")
      .replace(/\bPowerCube\b/gi, "باور كيوب")
      .replace(/\bFidus Battery Plus\b/gi, "فيدوس باتري بلس")
      .replace(/\bSplit Phase\b/gi, "طور مجزّأ")
      .replace(/[()]/g, " ")
      .replace(/\s*\/\s*/g, " ")
  );
}

/**
 * صيغة الموديل المناسبة للنطق: نُبسّط الرموز الطويلة والمتعددة إلى وصف سلسلة مفهوم،
 * ونحتفظ بالموديلات القصيرة فقط. القيمة null تعني: لا يُنطق الموديل إطلاقاً.
 * النصوص المكتوبة في الكتالوج والبطاقات تبقى بالرموز الرسمية الكاملة دون تغيير.
 */
const SPOKEN_MODELS: Array<{ match: RegExp; spoken: string | null }> = [
  { match: /^STP595S/i, spoken: "سلسلة إس تي بي 595" },
  { match: /^STP720S/i, spoken: "سلسلة إس تي بي 720" },
  { match: /SG04LP1/i, spoken: "سلسلة إس جي 04" },
  { match: /SG02LP1/i, spoken: "سلسلة إس جي 02" },
  { match: /SG05LP3/i, spoken: "سلسلة إس جي 05 ثلاثية الطور" },
  { match: /SG01HP3/i, spoken: "سلسلة إس جي 01 عالية الجهد" },
  { match: /SG02HP3/i, spoken: "سلسلة إس جي 02 عالية الجهد" },
  { match: /^S6-EH2P/i, spoken: "سلسلة إس 6 إي إتش 2 بي" },
  { match: /^S6-EH3P/i, spoken: "سلسلة إس 6 إي إتش 3 بي" },
  { match: /^2012EMH/i, spoken: "موديل 2012" },
  { match: /^BZ4024/i, spoken: "موديل بي زد 4024" },
  { match: /^BZ6248/i, spoken: "موديل بي زد 6248" },
  { match: /^RV12100/i, spoken: "موديل آر في 12100" },
  { match: /^RV12200/i, spoken: "موديل آر في 12200" },
  { match: /^NeoPower/i, spoken: "موديل نيو باور 4 الجيل الثاني" },
  { match: /^FB-L-16/i, spoken: "سلسلة إف بي إل 16" },
  { match: /^PowerCube-M5A/i, spoken: "سلسلة باور كيوب إم 5 إيه" },
  { match: /^PowerCube-M1C/i, spoken: "سلسلة باور كيوب إم 1 سي" },
  { match: /^HeroEE MaxPower/i, spoken: null },
  { match: /^A300-HY/i, spoken: "أوبتيموس إيه 300 هايبرد" },
  { match: /LEGEND\s*112C/i, spoken: "ليجند 112 سي" },
  { match: /LEGEND\s*112S/i, spoken: "ليجند 112 إس" },
  { match: /^L260-HY/i, spoken: "أوبتيموس إل 260 هايبرد" },
  { match: /^UF5000/i, spoken: "موديل يو إف 5000" },
];

/** الموديل بصيغة منطوقة سلسة، أو null إذا كان من الأفضل عدم نطقه. */
function spokenModel(model: string) {
  const hit = SPOKEN_MODELS.find((m) => m.match.test(model.trim()));
  if (hit) return hit.spoken;
  // موديل غير معروف: ننطقه فقط إذا كان قصيراً وبلا رموز مزدحمة.
  const clean = model.trim();
  if (clean.length <= 12 && !/[/()+–]/.test(clean)) return `موديل ${clean}`;
  return null;
}

/** كلمة نوع المنتج كما تُنطق. */
const KIND_WORD: Record<string, string> = {
  panels: "لوح شمسي",
  inverters: "إنفرتر",
  batteries: "بطارية ليثيوم",
  storage: "نظام تخزين طاقة",
};

/** هل تدل المواصفة على القدرة/السعة؟ نحذفها من النطق لأنها ذُكرت مرة واحدة في المقدمة. */
function isPowerCue(label: string) {
  return /قدرة|سعة|الطاقة|Pmax/i.test(label);
}

/**
 * التعليق المصاحب للفيديو — مختصر جداً: جملة واحدة تجمع النوع والعلامة والموديل
 * والقدرة (مرة واحدة فقط)، ثم أهم مواصفتين فقط كما تظهر على الشاشة.
 * الفائدة العملية ولمن يناسب المنتج تُنطق بعد نهاية الفيديو.
 */
export function videoIntroNarration(
  p: { brand: string; model: string; power: string; category: string },
  video: ProductVideo,
) {
  const kind = KIND_WORD[p.category] ?? "منتج";
  const brand = spokenName(p.brand);
  const model = spokenModel(p.model);
  const power = spokenValue(p.power);
  const powerWord = p.category === "batteries" || p.category === "storage" ? "بسعة" : "بقدرة";
  const head = `${kind} ${brand}${model ? ` ${model}` : ""}، ${powerWord} ${power}`;
  // نطق مختصر: النوع والاسم والقدرة فقط؛ المواصفات تظهر مكتوبة على الفيديو.
  void video;
  return `${head}.`;
}

/**
 * التعليق بعد نهاية الفيديو — مكمّل لا مكرِّر: جملة أو جملتان عن الفائدة العملية
 * وأين يُركّب ولمن يناسب، بلا أي رقم أو قدرة سبق ذكرها في الفيديو.
 */
export function afterVideoNarration(p: {
  uses?: string[];
  suitableFor?: string;
  features?: string[];
}) {
  // جملتان قصيرتان فقط: الاستخدام الأبرز، ثم ميزة واحدة — بلا أرقام أو رموز أو أقواس.
  const clean = (s: string) =>
    s.replace(/\([^)]*\)/g, "").split(/[،.]/)[0]!
      .replace(/[\d٠-٩%]+/g, "").replace(/[A-Za-z+\-/]+/g, "")
      .replace(/\s+(حتى|بجهد|بقدرة|بسعة|و)\s*$/g, "").replace(/\s{2,}/g, " ").trim();
  const words = (s: string) => s.split(" ").length;
  const use = (p.uses ?? []).map(clean).find((u) => u.length > 4 && words(u) <= 8) ?? "";
  const feature = (p.features ?? []).filter((f) => !/[\d٠-٩A-Za-z×:]/.test(f.split(/[،.]/)[0]!)).map(clean).find((f) => f.length > 6 && words(f) <= 7) ?? "";
  // جملة واحدة قصيرة فقط.
  if (use) return `مناسب لـ ${use}.`;
  return feature ? `من أبرز مزاياه: ${feature}.` : "";
}


/** نص التعليق الصوتي العربي لفيديو المنتج: الاسم ثم أهم المواصفات كما في الكتالوج. */
export function videoNarration(title: string, video: ProductVideo) {
  const [rawName, rawModel] = title.split("—").map((p) => p.trim());
  const name = spokenName(rawName ?? "");
  const model = rawModel ? spokenModel(rawModel) : null;
  const head = model ? `${name}، ${model}.` : `${name}.`;
  const specs = video.cues
    .map((c) => `${c.label.replace(/\bPmax\b/gi, "").trim()} ${spokenValue(c.value)}`)
    .join("، ");
  return `${head} ${specs}.`;
}

