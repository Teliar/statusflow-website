/* ==========================================================================
   StatusFlow Website Scripts
   - Bilingual Translations (EN / RU)
   - Interactive Live App & Discord Mockup Sync
   - Live Activity Elapsed Timer
   ========================================================================== */

const translations = {
  en: {
    nav_features: "Features",
    nav_showcase: "Preview",
    nav_how: "How it Works",
    nav_download: "Download",
    nav_cta: "Download",

    hero_badge: "StatusFlow v1.0 is now live",
    hero_title_1: "Custom Discord Presence,",
    hero_title_2: "made effortless.",
    hero_subtitle: "Display custom images directly from your PC, write custom text, and track your activity in Discord without bot setups, tokens, or developer portals.",
    hero_btn_download: "Download for Windows",
    hero_btn_explore: "Live Preview",
    spec_free: "100% Free & Portable",
    spec_no_token: "Zero Dev Portal Setup",

    tag_preview: "Interactive Preview",
    preview_title: "How StatusFlow looks in action",
    preview_desc: "A clean, distraction-free desktop client on your PC that syncs directly to your Discord profile in real time.",

    sf_image_label: "IMAGE",
    sf_pick_photo: "📁 Choose images / GIF",
    sf_ready_text: "Ready!",
    sf_name_label: "NAME",
    placeholder_name: "Name...",
    default_status_name: "Night Vibes",
    sf_desc_label: "DESCRIPTION",
    placeholder_desc: "Description...",
    default_status_desc: "Listening to Lo-Fi",
    sf_bottom_status: "Online in Discord • 01:11 elapsed",
    sf_btn_save: "Update",
    sf_btn_stop: "Stop",
    arrow_caption: "Instant Sync",

    discord_watching: "WATCHING",

    stat_1_label: "Portal Setup",
    stat_1_sub: "Works immediately without bots",
    stat_2_label: "RAM Usage",
    stat_2_sub: "Extremely lightweight client",
    stat_3_label: "Direct PC Upload",
    stat_3_sub: "Fast image sync to Discord CDN",
    stat_4_label: "Free & Safe",
    stat_4_sub: "No ads, no tokens needed",

    tag_features: "Engineered for Simplicity",
    features_title: "Everything you need, nothing you don't",
    features_desc: "Built with modern developer tools to deliver the fastest and cleanest Discord status experience.",

    feat_1_title: "Direct Photo & GIF Upload",
    feat_1_desc: "Choose any photo or animated GIF right from your PC, or paste directly from clipboard with Ctrl+V (including Win+Shift+S screenshots). StatusFlow prepares everything automatically in seconds.",
    flow_step_1: "Photo / GIF / Ctrl+V",
    flow_step_2: "Discord Proxy",
    flow_step_3: "Live on Profile",
    feat_2_title: "System Tray & Background Running",
    feat_2_desc: "Close the window anytime — StatusFlow continues running quietly in your Windows tray. Right-click the SF icon to pause, restore, or quit.",
    feat_theme_title: "Dark & Light Themes",
    feat_theme_desc: "Switch between a sleek Dark mode and a clean Light theme in the settings menu with instant on-the-fly switching.",
    feat_3_title: "Windows Autostart",
    feat_3_desc: "Enable launch on Windows boot with a single toggle in settings. Your custom status will be online the moment you turn on your PC.",
    feat_4_title: "Bilingual: English & Русский",
    feat_4_desc: "Seamless support for English and Russian. Dynamic language switching and full hotkey support (Ctrl+C, Ctrl+V, Ctrl+A).",
    feat_5_title: "Direct Discord Connection",
    feat_5_desc: "Instant status synchronization directly with your local Discord client. Zero bot setup, zero account tokens needed, and lightning-fast updates.",
    tech_sync: "Instant Sync",
    tech_safe: "No Bots or Tokens",
    tech_clip: "Clipboard Paste",
    tech_auto: "Windows Autostart",
    tech_tray: "System Tray",
    tech_exe: "Standalone .exe",

    tag_how: "Quick Start",
    how_title: "Get online in under 30 seconds",
    step_1_title: "Download & Launch",
    step_1_desc: "Grab the single `StatusFlow.exe` file. No installer, no Python setup, no CMD windows — it just launches.",
    step_2_title: "Pick Photo / GIF & Text",
    step_2_desc: "Click \"Choose images / GIF\" or paste any image directly with Ctrl+V from clipboard (including Win+Shift+S screenshots), then type your Name and Description.",
    step_3_title: "Click Start",
    step_3_desc: "Hit the green Start button. Your Discord profile immediately displays your new custom status!",

    dl_tag: "Latest Release",
    dl_title: "Ready to customize your Discord presence?",
    dl_desc: "Download StatusFlow for Windows today. Free, open-source, and portable.",
    dl_btn_text: "Download StatusFlow.exe",

    footer_tagline: "The effortless custom Discord presence app for Windows.",
    footer_product: "Product",
    footer_links: "Quick Links",
    footer_direct_dl: "Direct .exe Download",
    footer_disclaimer: "StatusFlow is not affiliated with or endorsed by Discord Inc."
  },
  ru: {
    nav_features: "Возможности",
    nav_showcase: "Превью",
    nav_how: "Как это работает",
    nav_download: "Скачать",
    nav_cta: "Скачать",

    hero_badge: "Релиз StatusFlow v1.0 уже доступен",
    hero_title_1: "Кастомный статус Discord,",
    hero_title_2: "без лишних сложностей.",
    hero_subtitle: "Устанавливай любые фото прямо с компьютера, пиши свое название и описание в Discord без создания ботов, токенов и портала разработчиков.",
    hero_btn_download: "Скачать для Windows",
    hero_btn_explore: "Интерактивное превью",
    spec_free: "100% Бесплатно и Portable",
    spec_no_token: "Без настроек Dev Portal",

    tag_preview: "Интерактивное превью",
    preview_title: "Как StatusFlow выглядит в действии",
    preview_desc: "Удобная программа для твоего ПК, которая моментально транслирует статус в профиль Discord.",

    sf_image_label: "КАРТИНКА",
    sf_pick_photo: "📁 Выбрать фото / GIF",
    sf_ready_text: "Готово!",
    sf_name_label: "НАЗВАНИЕ",
    placeholder_name: "Название...",
    default_status_name: "Ночной вайб",
    sf_desc_label: "ОПИСАНИЕ",
    placeholder_desc: "Описание...",
    default_status_desc: "Слушает Lo-Fi",
    sf_bottom_status: "В сети в Discord • 01:11 прошло",
    sf_btn_save: "Обновить",
    sf_btn_stop: "Стоп",
    arrow_caption: "Синхронизация",

    discord_watching: "СМОТРИТ",

    stat_1_label: "Без регистрации ботов",
    stat_1_sub: "Работает сразу из коробки",
    stat_2_label: "Потребление ОЗУ",
    stat_2_sub: "Меньше 80 МБ в фоне",
    stat_3_label: "Фото и GIF с ПК",
    stat_3_sub: "Быстрый хостинг на CDN Discord",
    stat_4_label: "Безопасно и чисто",
    stat_4_sub: "Без рекламы и скрытых подписок",

    tag_features: "Создано для удобства",
    features_title: "Все нужные фичи, ничего лишнего",
    features_desc: "Собрано на современных технологиях для максимальной скорости и стабильности.",

    feat_1_title: "Загрузка фото, GIF и буфер обмена",
    feat_1_desc: "Выбирайте любые фото или анимированные GIF с диска, либо вставляйте картинку прямо из буфера через Ctrl+V (включая скриншоты Win+Shift+S). StatusFlow мгновенно подготовит изображение для Discord.",
    flow_step_1: "Фото / GIF / Ctrl+V",
    flow_step_2: "Discord Прокси",
    flow_step_3: "Статус в профиле",
    feat_2_title: "Работа в трее (System Tray)",
    feat_2_desc: "Закрывай окно на крестик в любой момент — программа тихо работает в трее возле часов. Правый клик по иконке позволяет остановить активность, открыть окно или выйти.",
    feat_theme_title: "Тёмная и Светлая темы",
    feat_theme_desc: "Удобное переключение между тёмной и светлой темами в меню настроек в один клик без перезапуска.",
    feat_3_title: "Автозагрузка при старте ПК",
    feat_3_desc: "Включай запуск вместе с Windows в один клик в меню настроек. Твой статус будет появляться автоматически при включении компьютера.",
    feat_4_title: "Два языка: English и Русский",
    feat_4_desc: "Полноценный билингвальный интерфейс, динамическое переключение и поддержка горячих клавиш (Ctrl+C, Ctrl+V, Ctrl+A).",
    feat_5_title: "Прямое подключение к Discord",
    feat_5_desc: "Мгновенная передача статуса напрямую в запущенный Discord на ПК. Без ботов, без токенов от аккаунта и без ограничений по скорости.",
    tech_sync: "Мгновенная синхронизация",
    tech_safe: "Без ботов и токенов",
    tech_clip: "Вставка из буфера",
    tech_auto: "Автозапуск",
    tech_tray: "Работа в трее",
    tech_exe: "Один .exe файл",

    tag_how: "Быстрый старт",
    how_title: "Запуск меньше чем за 30 секунд",
    step_1_title: "Скачай и запусти",
    step_1_desc: "Один файл `StatusFlow.exe`. Никаких установщиков и консольных окон — просто два клика.",
    step_2_title: "Выбери фото / GIF и текст",
    step_2_desc: "Нажми «Выбрать фото / GIF» или вставь картинку прямо из буфера через Ctrl+V (включая скриншоты Win+Shift+S), введи Название и Описание.",
    step_3_title: "Нажми Старт",
    step_3_desc: "Нажми зелёную кнопку «Старт». Твой профиль в Discord моментально преобразится!",

    dl_tag: "Свежий релиз",
    dl_title: "Готов обновить свой Discord статус?",
    dl_desc: "Скачай StatusFlow для Windows прямо сейчас. Бесплатно, надежно и удобно.",
    dl_btn_text: "Скачать StatusFlow.exe",

    footer_tagline: "Удобная программа для кастомного статуса Discord на Windows.",
    footer_product: "Продукт",
    footer_links: "Быстрые ссылки",
    footer_direct_dl: "Прямая ссылка на .exe",
    footer_disclaimer: "StatusFlow не связан с компанией Discord Inc."
  }
};

let currentLanguage = localStorage.getItem("statusflow_lang") || "en";

// Interactive Mockup Elements
const nameInput = document.getElementById("sf-name-input");
const descInput = document.getElementById("sf-desc-input");
const dcName = document.getElementById("dc-display-name");
const dcDesc = document.getElementById("dc-display-desc");

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("statusflow_lang", lang);
  
  const dict = translations[lang] || translations.en;
  
  // Update segmented buttons active state
  document.querySelectorAll(".lang-seg-btn").forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  
  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update input placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update default mockup values if not manually edited by user
  const nInput = nameInput || document.getElementById("sf-name-input");
  const dInput = descInput || document.getElementById("sf-desc-input");
  const dName = dcName || document.getElementById("dc-display-name");
  const dDesc = dcDesc || document.getElementById("dc-display-desc");

  if (nInput && dName && !nInput.dataset.userEdited) {
    nInput.value = dict.default_status_name;
    dName.textContent = dict.default_status_name;
  }
  if (dInput && dDesc && !dInput.dataset.userEdited) {
    dInput.value = dict.default_status_desc;
    dDesc.textContent = dict.default_status_desc;
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Language switcher click events
document.querySelectorAll(".lang-seg-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    if (lang && lang !== currentLanguage) {
      setLanguage(lang);
    }
  });
});

if (nameInput && dcName) {
  nameInput.addEventListener("input", (e) => {
    nameInput.dataset.userEdited = "true";
    const fallback = translations[currentLanguage]?.default_status_name || "Night Vibes";
    dcName.textContent = e.target.value.trim() || fallback;
  });
}

if (descInput && dcDesc) {
  descInput.addEventListener("input", (e) => {
    descInput.dataset.userEdited = "true";
    const fallback = translations[currentLanguage]?.default_status_desc || "Listening to Lo-Fi";
    dcDesc.textContent = e.target.value.trim() || fallback;
  });
}

// Preset photo carousel for interactive "Pick Photo" button (local crisp assets)
const sampleImages = [
  "assets/preview-1.png",
  "assets/preview-2.png",
  "assets/preview-3.png"
];
let currentImgIndex = 0;

const uploadBtn = document.getElementById("interactive-upload-btn");
const sfImg = document.getElementById("sf-preview-img");
const dcImg = document.getElementById("dc-preview-thumb");

if (uploadBtn && sfImg && dcImg) {
  uploadBtn.addEventListener("click", () => {
    currentImgIndex = (currentImgIndex + 1) % sampleImages.length;
    const newSrc = sampleImages[currentImgIndex];
    sfImg.src = newSrc;
    dcImg.src = newSrc;

    // Pulse effect
    sfImg.style.transform = "scale(0.92)";
    setTimeout(() => {
      sfImg.style.transform = "scale(1)";
    }, 150);
  });
}

// Interactive Start / Stop buttons in mockup
let isMockupActive = true;
let secondsPassed = 71; // start at 01:11
const mockBtnStart = document.getElementById("mock-btn-start");
const mockBtnStop = document.getElementById("mock-btn-stop");
const sfStatusLabel = document.getElementById("sf-status-label");
const sfLiveDot = document.querySelector(".sf-live-dot");
const dcActivityBlock = document.querySelector(".discord-activity-block");
const timerElement = document.getElementById("discord-elapsed-time");

function updateTimer() {
  if (!isMockupActive) return;
  secondsPassed++;
  const mins = Math.floor(secondsPassed / 60).toString().padStart(2, "0");
  const secs = (secondsPassed % 60).toString().padStart(2, "0");
  const elapsedWord = currentLanguage === "ru" ? "прошло" : "elapsed";
  if (timerElement) {
    timerElement.textContent = `${mins}:${secs} ${elapsedWord}`;
  }
  if (sfStatusLabel && isMockupActive) {
    const statusPrefix = currentLanguage === "ru" ? "В сети в Discord •" : "Online in Discord •";
    sfStatusLabel.textContent = `${statusPrefix} ${mins}:${secs} ${elapsedWord}`;
  }
}
setInterval(updateTimer, 1000);

if (mockBtnStop) {
  mockBtnStop.addEventListener("click", () => {
    isMockupActive = false;
    if (sfStatusLabel) {
      sfStatusLabel.textContent = currentLanguage === "ru" ? "Готов к запуску" : "Ready to launch";
      sfStatusLabel.style.color = "#8e8e93";
    }
    if (sfLiveDot) {
      sfLiveDot.style.color = "#8e8e93";
      sfLiveDot.style.boxShadow = "none";
    }
    if (mockBtnStart) {
      mockBtnStart.textContent = currentLanguage === "ru" ? "Старт" : "Start";
    }
    if (dcActivityBlock) {
      dcActivityBlock.style.opacity = "0.35";
      dcActivityBlock.style.filter = "grayscale(0.8)";
    }
  });
}

if (mockBtnStart) {
  mockBtnStart.addEventListener("click", () => {
    isMockupActive = true;
    secondsPassed = 0;
    if (sfLiveDot) {
      sfLiveDot.style.color = "#4fae66";
      sfLiveDot.style.boxShadow = "0 0 6px rgba(79, 174, 102, 0.6)";
    }
    if (sfStatusLabel) {
      sfStatusLabel.style.color = "#4fae66";
    }
    if (dcActivityBlock) {
      dcActivityBlock.style.opacity = "1";
      dcActivityBlock.style.filter = "none";
    }
    const savedText = currentLanguage === "ru" ? "Обновлено ✓" : "Saved ✓";
    const updateText = currentLanguage === "ru" ? "Обновить" : "Update";
    mockBtnStart.textContent = savedText;
    setTimeout(() => {
      if (isMockupActive) {
        mockBtnStart.textContent = updateText;
      }
    }, 1200);
  });
}

// Smooth Camera Move to Download Section
document.querySelectorAll('a[href="#download"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById('download');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

// Initialize with default or saved language
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLanguage);
});
