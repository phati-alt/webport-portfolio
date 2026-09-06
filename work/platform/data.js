/* HAND-WRITTEN — this case is excluded from the generated pipeline
   (see tools/build-cases.ps1's $customSlugs and css/insight-panels.css).
   It is NOT touched by that script, so it is safe to edit directly.

   Shape matches every generated data.js on purpose — window.CASE_DATA
   = { en: {...}, th: {...} }, read by js/i18n.js through
   data-i18n-case — so the language toggle and every other bit of
   shared JS work here with no special-casing. Content is the same
   real material the case had in content/cases.csv before this
   redesign (git history, slug platform) — reorganised into the
   Insight Panel layout, not rewritten. Key names mostly carry over
   from the sheet's own (prob1Title, ps1Title, fwOld1, bi1Name,
   reflect1Title, ut1Role...) since there was no reason to invent new
   ones for concepts the sheet already named clearly. */
window.CASE_DATA = {
  en: {
    category: "Product Platform",
    title: "Construction Management Platform",
    summary: "A SaaS platform that puts everything a construction project needs in one place - documents, schedule, inspections and a project-wide dashboard - so owners, engineers, architects and contractors plan from the same picture.",
    coverAlt: "Construction management platform shown on laptop, tablet and phone",

    role: "UX/UI Designer, Design System Lead",
    timeline: "2023 - present",
    platform: "Sitearound CM — SaaS, web + mobile",
    tools: "Figma, Design Tokens, Shadcn UI, Tailwind CSS",
    team: "PO · Consultant, Frontend & Backend Dev",
    client: "Ananda · Gulf Energy · CHPP",

    contextText: "Sitearound CM is a cloud SaaS platform for running construction projects, connecting project owners, engineers, architects and contractors in one system. It covers document control (RFI and submittals), scheduling, quality inspection and work orders, and a project-wide dashboard. I worked alongside the PO, consultants and the dev team, gathering requirements from enterprise clients to extend the business model.",

    problemIntro: "The platform served the people furthest from the site, and almost no one else.",
    prob1Title: "A dashboard built for one audience",
    prob1Text: "Fixed, and aimed at executives who already read data fluently. Engineers and architects could not filter it down to what their own work needed.",
    prob2Title: "No room to customise",
    prob2Text: "Widgets could not be added, removed or reordered, so every role opened the same fixed view regardless of what they did with it.",
    prob3Title: "A design system that would not bend",
    prob3Text: "Ant Design allowed limited theming, its components were hard to modify, its tokens were inflexible, and it made every handover harder than it needed to be.",

    ut1Role: "Executives", ut1Need: "Read the project-wide picture well, and were served by it.", ut1Ok: "yes",
    ut2Role: "Engineers", ut2Need: "Needed the data that belonged to their own site work.", ut2Ok: "no",
    ut3Role: "Architects", ut3Need: "Could not filter down to the information that related to their own drawings.", ut3Ok: "no",

    processText: "I audited what Ant Design could and could not be made to do, then rebuilt the design system on Shadcn UI and Tailwind CSS - modular components, tokens we controlled ourselves, and runtime theming through CSS variables. The move ran in five steps: evaluate, decide, restructure, tokenize, and only then build the custom dashboard on top of it.",
    quote: "Short term it cost a rebuild. Long term it bought tokens we control, a handover that lands first time, and theming we can still extend.",

    fwOldLabel: "Ant Design — before",
    fwOld1: "Theme colour only adjustable within fixed limits",
    fwOld2: "UI components hard to modify",
    fwOld3: "Rigid token model",
    fwOld4: "No support for dynamic theming",
    fwOld5: "Slow, error-prone handover to developers",
    fwNewLabel: "Shadcn UI + Tailwind CSS — after",
    fwNew1: "Theme colour system we control end to end",
    fwNew2: "Modular UI components",
    fwNew3: "Design tokens defined by us",
    fwNew4: "Dynamic theming at runtime",
    fwNew5: "Handover developers can read directly",
    fwTradeShort: "A slower first release — every component had to be rebuilt rather than configured.",
    fwTradeLong: "Tokens we own, a handover that lands first time, and theming that can keep being extended instead of worked around.",

    ps1Title: "Assess", ps1Text: "Assess the problem and the existing design",
    ps2Title: "Decide", ps2Text: "Choose Shadcn + Tailwind",
    ps3Title: "Rebuild", ps3Text: "Build the new design system",
    ps4Title: "Tokenize", ps4Text: "Establish the design token system",
    ps5Title: "Ship", ps5Text: "Custom Dashboard delivered",

    solutionIntro: "People build their own dashboard - adding, removing and arranging widgets around the work they actually do - and can share a preset as a template for the rest of their team, so a new site does not start from a blank screen. Under it sits the rebuilt system: modular components, controlled tokens, and dynamic theming that carries per-user customisation, brand colour and dark or light mode.",
    sol1Title: "Custom Dashboard", sol1Text: "People build their own view - adding, removing and arranging widgets around the work their role actually does.",
    sol2Title: "Preset Sharing", sol2Text: "Share a dashboard template with the team, so the data and settings match how the work is really run.",
    sol3Title: "Design System Rebuild", sol3Text: "Rebuilt on Shadcn UI and Tailwind CSS for flexibility, modular components and design tokens that hold.",
    sol4Title: "Dynamic Theming", sol4Text: "Runtime theming, per-user customisation, brand colour and dark or light, all through CSS variables.",

    showcase1Caption: "Custom dashboard - widgets added, removed and arranged per role",
    showcase2Caption: "Design tokens and component variants in the rebuilt system",
    showcase3Caption: "Dynamic theming: brand colour and dark or light, through CSS variables",

    resultsText: "Design moved faster and landed more accurately, and the custom dashboard became the feature sales led with - it closed three enterprise accounts: Ananda Development, Gulf Energy and CHPP.",
    stat1: "+60%", stat1Label: "UI design speed",
    stat2: "+85%", stat2Label: "Dev handoff accuracy",
    stat3: "+90%", stat3Label: "Component reusability",
    stat4: "3", stat4Label: "Enterprise accounts closed",

    bi1Name: "Ananda Development", bi1Type: "Mobile application",
    bi2Name: "Gulf Energy", bi2Type: "UX/UI",
    bi3Name: "CHPP", bi3Type: "Dashboard",

    testimonialQuote: "The custom dashboard is what closed our largest enterprise accounts. It answered what those clients kept asking for - data for my role, arranged my way - and sales and consulting could see plainly that this was the strong selling point.",
    testimonialName: "Sales & Consultant team",
    testimonialRole: "Sitearound CM — Enterprise Division",

    reflect1Title: "Design system architecture", reflect1Text: "A flexible structure that is easy to adjust, and cuts the cost of changing the system later.",
    reflect2Title: "Modular components", reflect2Text: "Components that compose and adjust on their own, without disturbing the structure around them.",
    reflect3Title: "Variables and theming", reflect3Text: "Managing variables, theme colour and component variants once the system is genuinely large.",
    reflect4Title: "Less time spent in handover", reflect4Text: "A design system that says the same thing to UI design, the product owner and the developers.",

    nextTitle: "EV Charger",
    dataStatus: "real"
  },

  th: {
    category: "แพลตฟอร์มผลิตภัณฑ์",
    title: "แพลตฟอร์มบริหารงานก่อสร้าง",
    summary: "แพลตฟอร์มที่รวมเครื่องมือบริหารจัดการงานก่อสร้างไว้ในที่เดียว ช่วยวางแผนขั้นตอนการทำงานตั้งแต่เริ่มโครงการจนจบ พร้อมบริหารต้นทุน ระยะเวลา และคุณภาพงาน",
    coverAlt: "แพลตฟอร์มบริหารงานก่อสร้างบนแล็ปท็อป แท็บเล็ต และมือถือ",

    role: "UX/UI Designer, Design System Lead",
    timeline: "2566 - ปัจจุบัน",
    platform: "Sitearound CM — SaaS, เว็บ + มือถือ",
    tools: "Figma, Design Tokens, Shadcn UI, Tailwind CSS",
    team: "PO · Consultant, Frontend & Backend Dev",
    client: "Ananda · Gulf Energy · CHPP",

    contextText: "Sitearound CM คือแพลตฟอร์มบริหารจัดการงานก่อสร้างแบบ SaaS บนคลาวด์ เชื่อมโยงเจ้าของโครงการ วิศวกร สถาปนิก และผู้รับเหมาไว้ในระบบเดียว ครอบคลุมการจัดการเอกสาร (RFI/Submittal) การบริหารเวลา (Schedule) การตรวจสอบคุณภาพ (Inspection & Work Order) และ Dashboard ภาพรวมโครงการ ทำงานร่วมกับ PO, Consultant และ Dev Team พร้อมเก็บ Requirements จากลูกค้า Enterprise เพื่อขยาย Business Model อย่างลึกซึ้ง",

    problemIntro: "แพลตฟอร์มตอบโจทย์คนที่อยู่ไกลหน้างานที่สุด และแทบไม่ตอบโจทย์ใครอีกเลย",
    prob1Title: "Dashboard ไม่ตอบโจทย์ผู้ใช้งานหน้างาน",
    prob1Text: "Dashboard เดิมออกแบบตายตัวสำหรับผู้บริหารที่เข้าใจ Data อยู่แล้ว แต่วิศวกรและสถาปนิกไม่สามารถกรองข้อมูลให้เหมาะกับหน้างานได้",
    prob2Title: "ขาด Flexibility ในการ Customization",
    prob2Text: "ผู้ใช้ไม่สามารถเพิ่ม ลบ หรือจัดเรียง Widget ข้อมูลได้เอง ทำให้ทุกคนเห็นข้อมูลชุดเดิมโดยไม่ตรงกับหน้าที่",
    prob3Title: "Design System เดิม (Ant Design) ไม่รองรับ",
    prob3Text: "Framework ที่ปรับแต่ง Theme ได้จำกัด แก้ไข Component ยาก ระบบ Token ไม่ยืดหยุ่น และสื่อสารกับ Developer ได้ยาก",

    ut1Role: "ผู้บริหาร", ut1Need: "เข้าใจข้อมูลภาพรวมได้ดี", ut1Ok: "yes",
    ut2Role: "วิศวกร", ut2Need: "ต้องการข้อมูลเฉพาะหน้างาน", ut2Ok: "no",
    ut3Role: "สถาปนิก", ut3Need: "กรองข้อมูลที่เกี่ยวข้องกับงานตัวเองไม่ได้", ut3Ok: "no",

    processText: "ผมประเมินว่า Ant Design ทำอะไรได้และดัดให้ทำอะไรไม่ได้บ้าง แล้วรื้อ Design System ใหม่บน Shadcn UI และ Tailwind CSS - Component แบบ Modular, Token ที่เราคุมเองได้ และ Runtime Theming ผ่าน CSS Variables ทั้งหมดเดินเป็นห้าขั้น: ประเมิน ตัดสินใจ วางโครง Tokenize แล้วจึงต่อยอดเป็น Custom Dashboard",
    quote: "ระยะสั้นแลกด้วยการรื้อใหม่ ระยะยาวได้ Token ที่คุมเองได้ การส่งงานที่จบในรอบเดียว และ Theme ที่ยังต่อยอดได้",

    fwOldLabel: "Ant Design — เดิม",
    fwOld1: "ปรับ Theme Color ได้จำกัด",
    fwOld2: "แก้ไข UI Component ได้ยาก",
    fwOld3: "ระบบ Token ไม่ยืดหยุ่น",
    fwOld4: "ไม่รองรับ Dynamic Theme",
    fwOld5: "สื่อสารกับ Developer ได้ยาก",
    fwNewLabel: "Shadcn UI + Tailwind CSS — ใหม่",
    fwNew1: "ระบบ Theme Color ที่ยืดหยุ่นสูง",
    fwNew2: "UI Component แบบ Modular",
    fwNew3: "Design Token ที่ควบคุมเองได้",
    fwNew4: "รองรับ Dynamic Theme",
    fwNew5: "สื่อสารกับ Dev ได้ชัดเจน",
    fwTradeShort: "ออกช้าลงในรอบแรก เพราะต้องรื้อสร้าง Component ใหม่ทั้งหมด ไม่ใช่แค่ตั้งค่า",
    fwTradeLong: "ได้ Token ที่เป็นของเราเอง ส่งงานจบในรอบเดียว และ Theme ที่ต่อยอดต่อได้เรื่อย ๆ แทนที่จะต้องหาทางเลี่ยง",

    ps1Title: "ประเมิน", ps1Text: "ประเมินปัญหาและ Design เดิม",
    ps2Title: "ตัดสินใจ", ps2Text: "เลือก Shadcn + Tailwind",
    ps3Title: "รื้อสร้าง", ps3Text: "สร้าง Design System ใหม่",
    ps4Title: "Tokenize", ps4Text: "สร้างระบบ Design Tokens",
    ps5Title: "ส่งมอบ", ps5Text: "Custom Dashboard สำเร็จ",

    solutionIntro: "ผู้ใช้ประกอบ Dashboard ของตัวเองได้ - เพิ่ม ลบ จัดเรียง Widget รอบงานที่ทำจริง และแชร์ Preset เป็นเทมเพลตให้คนอื่นในทีมได้ ไซต์งานใหม่จึงไม่ต้องเริ่มจากหน้าจอเปล่า ข้างใต้คือระบบที่รื้อใหม่ทั้งหมด: Component แบบ Modular, Token ที่ควบคุมได้ และ Dynamic Theming ที่รองรับการปรับแต่งรายคน สีแบรนด์ และโหมดสว่างหรือมืด",
    sol1Title: "Custom Dashboard", sol1Text: "ให้ผู้ใช้สร้างมุมมองข้อมูลของตัวเองได้ เพิ่ม ลบ และจัดเรียง Widget ตามบทบาทหน้างาน",
    sol2Title: "Preset Sharing", sol2Text: "แชร์ Dashboard Template ให้ทีมได้ เพื่อให้ข้อมูลและการตั้งค่าสอดคล้องกับงานจริง",
    sol3Title: "Design System Rebuild", sol3Text: "รื้อสร้าง Design System ใหม่ด้วย Shadcn UI + Tailwind CSS เพื่อความยืดหยุ่น, Modular Components และ Design Tokens ที่แม่นยำ",
    sol4Title: "Dynamic Theming", sol4Text: "รองรับ Runtime Theming, Per-User Customization, Brand Color และ Dark/Light Theme ด้วยระบบ CSS Variables",

    showcase1Caption: "Custom Dashboard - เพิ่ม ลบ และจัดเรียง Widget ตามบทบาท",
    showcase2Caption: "Design Token และ Component Variant ในระบบที่รื้อใหม่",
    showcase3Caption: "Dynamic Theming: สีแบรนด์และโหมดสว่าง/มืด ผ่าน CSS Variables",

    resultsText: "งานออกแบบเดินเร็วขึ้นและส่งงานได้แม่นขึ้น ส่วน Custom Dashboard กลายเป็นฟีเจอร์ที่ทีมขายใช้นำเสนอเป็นตัวชูโรง และปิดลูกค้า Enterprise ได้สามราย: Ananda Development, Gulf Energy และ CHPP",
    stat1: "+60%", stat1Label: "ความเร็วในการออกแบบ UI",
    stat2: "+85%", stat2Label: "ความแม่นยำในการส่งงานให้ Dev",
    stat3: "+90%", stat3Label: "การนำ Component กลับมาใช้ซ้ำ",
    stat4: "3", stat4Label: "ดีล Enterprise ที่ปิดได้",

    bi1Name: "Ananda Development", bi1Type: "Mobile Application",
    bi2Name: "Gulf Energy", bi2Type: "UX/UI",
    bi3Name: "CHPP", bi3Type: "Dashboard",

    testimonialQuote: "ฟีเจอร์ Custom Dashboard ช่วยให้ปิดการขายกับลูกค้า Enterprise รายใหญ่ได้สำเร็จ เพราะตอบโจทย์ความต้องการข้อมูลตามบทบาทและการปรับแต่งส่วนตัวได้จริง ทีม Sales และ Consultant เห็นได้ชัดว่าคือจุดขายที่แข็งแรง",
    testimonialName: "ทีม Sales & Consultant",
    testimonialRole: "Sitearound CM — Enterprise Division",

    reflect1Title: "พัฒนา Architecture ของ Design System", reflect1Text: "โครงสร้างยืดหยุ่นปรับแต่งง่าย ลดภาระในการแก้ไขระบบ",
    reflect2Title: "ออกแบบ Component แบบ Modular", reflect2Text: "UI Components ประกอบและปรับแต่งได้ ลดผลกระทบต่อโครงสร้างรวม",
    reflect3Title: "บริหาร Variables & Theme อย่างมืออาชีพ", reflect3Text: "เทคนิคขั้นสูงในการจัดการ Variables, Theme Color และ Component Variants ในระดับใหญ่",
    reflect4Title: "ลดเวลาทำงานร่วมกัน", reflect4Text: "Design System ที่สื่อสารตรงกันทั้ง UI Design, Product Owner และ Developer",

    nextTitle: "แอปชาร์จรถ EV",
    dataStatus: "real"
  }
};
