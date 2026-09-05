/* HAND-WRITTEN — this case is the one exception to the generated
   pipeline (see tools/build-cases.ps1's $customSlugs and this folder's
   case.css). Every other work/<slug>/data.js is overwritten from
   content/cases.csv on every build; this one is not touched by that
   script at all, so it is safe to edit directly.

   Shape matches every generated data.js on purpose — window.CASE_DATA
   = { en: {...}, th: {...} }, read by js/i18n.js through
   data-i18n-case — so the language toggle and every other bit of
   shared JS work here with no special-casing. Only the key NAMES
   differ, to match this page's own bespoke section markup instead of
   the shared template's. Content is the same real material the case
   had before this redesign (content/cases.csv history, slug
   government-project) — reorganised into a field-report layout, not
   rewritten. */
window.CASE_DATA = {
  en: {
    category: "Government Project",
    title: "Department of Groundwater Resources",
    summary: "Instant access to groundwater data for citizens and officials alike — the department's complex records, made readable anywhere, at any time.",
    coverAlt: "Groundwater data dashboard shown on a monitor and laptop",

    role: "UX/UI Designer, Design System Governance",
    timeline: "2023 — 6 months",
    platform: "Web — legacy system revamp",
    tools: "Figma, Design System, Interactive Prototype",
    client: "Department of Groundwater Resources, Ministry of Natural Resources and Environment",

    briefText: "The people using this every day are mid-career officials who have run the old system for years — so the brief was never only to modernise it. A legacy revamp carrying a great deal of data and pulling from several databases at once, for users whose existing habits were the real constraint.",
    primaryUsers: "Mid-career officials — daily system users",
    scope: "Legacy system revamp · Multi-database integration",

    findingsIntro: "Three things stood between the officials and the data they were responsible for.",
    find1Title: "A crowded, complicated interface",
    find1Text: "Fields and records were packed onto single screens, so finding anything meant reading everything. Each page cost real time just to work out.",
    find2Title: "A workflow that repeated itself",
    find2Text: "The same details had to be typed again on form after form. Nothing was carried across automatically, which cost time and invited mistakes.",
    find3Title: "Familiarity with the old system",
    find3Text: "People who knew the old screens by heart had every reason to resist new ones. Onboarding was the hard part, and habit was what it was up against.",

    fieldText: "I ran requirement sessions directly with the Product Owner and the agency's project managers, then sat with three field officers while they did their weekly reporting. Watching them work surfaced the real constraint: they were not looking for insight, they were looking for exceptions. That reframed the whole layout — status first, detail on demand.",
    quote: "The hard part was never the screens. It was earning the trust of people who already knew the old ones by heart.",

    compareBeforeLabel: "Before",
    compareBeforeCaption: "The original system — dense with fields on a single screen.",
    compareAfterLabel: "After",
    compareAfterCaption: "The same work, rebuilt around a clear hierarchy.",
    compareResultLabel: "Result",
    compareResultCaption: "Dashboard with map and charts, reading at a glance.",

    manifestIntro: "The work was as much about earning trust from people who already knew the old system as it was about redrawing screens — so every change had to be legible to someone who had been doing this for years.",
    item1Title: "Visual Hierarchy",
    item1Text: "Restructured dense fields into a clear hierarchy, so readability and navigation carry the page rather than the user's memory.",
    item2Title: "Accessible UI Design",
    item2Text: "A clean, current interface built for mid-career users, cutting cognitive load with visual cues that do not need explaining.",
    item3Title: "Interactive Prototype",
    item3Text: "Aligned the client and PM on a working prototype, closing requirement gaps before development started rather than after.",
    item4Title: "Design System Governance",
    item4Text: "Built and maintained the design system from the start, and directed the design team's work against it.",

    resultsText: "Time went back to the officials doing the work: less retyping, faster lookups, and far fewer requirements that had to be renegotiated once development was already underway.",
    stat1: "−60%", stat1Label: "Data entry time",
    stat2: "+75%", stat2Label: "Task speed",
    stat3: "+85%", stat3Label: "User satisfaction",
    stat4: "+80%", stat4Label: "Dev requirement accuracy",

    testimonialQuote: "The new system changed how we work entirely. Officials no longer re-enter the same information, and the screens are far cleaner and easier to follow. The design team genuinely understood our users' constraints, and it shows in the result.",
    testimonialName: "Director, Information Systems",
    testimonialRole: "Department of Groundwater Resources",

    nextTitle: "Construction Management Platform",
    dataStatus: "real"
  },

  th: {
    category: "โครงการภาครัฐ",
    title: "กรมทรัพยากรน้ำบาดาล",
    summary: "เปิดให้ประชาชนและเจ้าหน้าที่เข้าถึงข้อมูลน้ำบาดาลได้ทันที เปลี่ยนข้อมูลที่ซับซ้อนของกรมฯ ให้อ่านเข้าใจได้ทุกที่ทุกเวลา",
    coverAlt: "แดชบอร์ดข้อมูลน้ำบาดาลบนจอมอนิเตอร์และแล็ปท็อป",

    role: "UX/UI Designer, ดูแล Design System",
    timeline: "2566 — 6 เดือน",
    platform: "เว็บ — ปรับปรุงระบบเดิม",
    tools: "Figma, Design System, Interactive Prototype",
    client: "กรมทรัพยากรน้ำบาดาล กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม",

    briefText: "ผู้ใช้งานจริงคือเจ้าหน้าที่วัยกลางคนที่ใช้ระบบเดิมมานาน โจทย์จึงไม่ใช่แค่ทำให้ทันสมัยขึ้น เป็นการปรับปรุงระบบเดิมที่มีข้อมูลปริมาณมากและต้องเชื่อมหลายฐานข้อมูลเข้าด้วยกัน โดยมีความเคยชินของผู้ใช้เป็นข้อจำกัดที่แท้จริง",
    primaryUsers: "เจ้าหน้าที่วัยกลางคน ใช้งานระบบทุกวัน",
    scope: "ปรับปรุงระบบเดิม · เชื่อมหลายฐานข้อมูล",

    findingsIntro: "มีสามอย่างที่ขวางอยู่ระหว่างเจ้าหน้าที่กับข้อมูลที่พวกเขาต้องรับผิดชอบ",
    find1Title: "UI ที่ซับซ้อนและแออัด",
    find1Text: "ข้อมูลและฟีลด์จำนวนมากถูกยัดเยียดในหน้าเดียว ทำให้การค้นหาและการอ่านข้อมูลเป็นเรื่องยาก ผู้ใช้ต้องใช้เวลามากในการทำความเข้าใจแต่ละหน้าจอ",
    find2Title: "Workflow ที่ไม่มีประสิทธิภาพ",
    find2Text: "ผู้ใช้ต้องกรอกข้อมูลซ้ำ ๆ หลายครั้งในแต่ละฟอร์ม ระบบเดิมไม่รองรับการดึงข้อมูลอัตโนมัติ ทำให้เสียเวลาและเกิดข้อผิดพลาดสูง",
    find3Title: "ภาพลักษณ์ของระบบเก่า",
    find3Text: "ผู้ใช้ที่คุ้นชินกับระบบเดิมมีความต้านทานต่อการเปลี่ยนแปลง การ onboarding ระบบใหม่มีความท้าทายสูงจากนิสัยการใช้งานเดิม",

    fieldText: "ผมเก็บความต้องการร่วมกับ Product Owner และ Project Manager ของหน่วยงานโดยตรง แล้วไปนั่งดูเจ้าหน้าที่ภาคสนาม 3 คนทำรายงานประจำสัปดาห์ การได้ดูเขาทำงานจริงทำให้เห็นข้อจำกัดที่แท้จริง — เขาไม่ได้ตามหา insight เขาตามหาสิ่งผิดปกติ นั่นเปลี่ยนการวางเลย์เอาต์ทั้งหมด ให้สถานะมาก่อน รายละเอียดตามทีหลัง",
    quote: "ส่วนที่ยากไม่เคยเป็นหน้าจอ แต่คือการได้ความไว้ใจจากคนที่จำระบบเดิมได้ขึ้นใจ",

    compareBeforeLabel: "ก่อน",
    compareBeforeCaption: "ระบบเดิม — ฟีลด์แน่นอยู่ในหน้าจอเดียว",
    compareAfterLabel: "หลัง",
    compareAfterCaption: "งานเดิม จัดใหม่บนลำดับชั้นที่ชัดเจน",
    compareResultLabel: "ผลลัพธ์",
    compareResultCaption: "แดชบอร์ดพร้อมแผนที่และกราฟ อ่านได้ในครั้งเดียว",

    manifestIntro: "งานนี้เป็นเรื่องของการได้ความไว้ใจจากคนที่รู้จักระบบเดิมดีอยู่แล้ว พอ ๆ กับการออกแบบหน้าจอใหม่ ทุกการเปลี่ยนแปลงจึงต้องอ่านออกสำหรับคนที่ทำงานนี้มาหลายปี",
    item1Title: "Visual Hierarchy",
    item1Text: "Restructure ฟีลด์ข้อมูลที่ซับซ้อนให้เป็น Visual Hierarchy ที่ชัดเจน เน้น readability และ navigation ที่ seamless",
    item2Title: "Accessible UI Design",
    item2Text: "ออกแบบ UI ที่สะอาด ทันสมัย รองรับผู้ใช้วัยกลางคน ลด Cognitive Load ด้วย Visual Cues ที่ชัดเจน",
    item3Title: "Interactive Prototype",
    item3Text: "สร้าง Interactive Prototype เพื่อ align กับ Client และ PM ลด Requirement Discrepancy ก่อน Development",
    item4Title: "Design System Governance",
    item4Text: "สร้างและดูแล Design System ตั้งแต่เริ่มต้น บริหารและมอบหมายงานทีม Design อย่างมีประสิทธิภาพ",

    resultsText: "เวลากลับคืนสู่เจ้าหน้าที่ที่ทำงานจริง กรอกซ้ำน้อยลง ค้นหาเร็วขึ้น และ Requirement ที่ต้องกลับมาตกลงกันใหม่ระหว่างพัฒนาลดลงมาก",
    stat1: "−60%", stat1Label: "เวลากรอกข้อมูลซ้ำ",
    stat2: "+75%", stat2Label: "ความเร็วในการทำงาน",
    stat3: "+85%", stat3Label: "ความพึงพอใจของผู้ใช้",
    stat4: "+80%", stat4Label: "ความแม่นยำของ Requirement",

    testimonialQuote: "ระบบใหม่เปลี่ยนวิธีทำงานของเราไปโดยสิ้นเชิง เจ้าหน้าที่ไม่ต้องกรอกข้อมูลซ้ำซ้อนอีกต่อไป หน้าจอสะอาดและเข้าใจง่ายกว่าเดิมมาก ทีม Design เข้าใจข้อจำกัดของผู้ใช้จริง ๆ และสะท้อนออกมาในผลงานได้อย่างชัดเจน",
    testimonialName: "ผู้อำนวยการฝ่ายสารสนเทศ",
    testimonialRole: "กรมทรัพยากรน้ำบาดาล",

    nextTitle: "แพลตฟอร์มบริหารงานก่อสร้าง",
    dataStatus: "real"
  }
};
