/* HAND-WRITTEN — this case is excluded from the generated pipeline
   (see tools/build-cases.ps1's $customSlugs and css/insight-panels.css).
   It is NOT touched by that script, so it is safe to edit directly.

   Shape matches every generated data.js on purpose — window.CASE_DATA
   = { en: {...}, th: {...} }, read by js/i18n.js through
   data-i18n-case. Core content (problem/process/quote/solution/
   captions/results/stats) is the same real material this case had in
   content/cases.csv, now confirmed against a source file the user
   supplied (data-dashboard-iot-case-study.md) — dataStatus flipped
   from mockup to real to match, in both this file and the CSV row
   the homepage card reads.

   Four things below are new structure built FROM that same real
   material, not new facts: the four-layer problem breakdown, the
   five process steps, and the four decision cards all restate what
   problem1/process1/solution1 already said, split out rather than
   left in one paragraph, exactly as the source file's own note
   describes ("ไม่ได้แต่งตัวเลขหรือ fact ใหม่").

   reflect1-4 are the one exception: the source file's own note marks
   the whole Reflection section as suggested and drafted, not
   original ("ต้นฉบับยังไม่มี... ปรับคำได้ตามที่คุณคิดจริง") — kept
   here since it reads as genuine and non-fabricated, but it is a
   draft, not confirmed content, unlike everything above it. */
window.CASE_DATA = {
  en: {
    category: "Data Dashboard",
    title: "Custom IoT dashboards for industrial operations",
    summary: "Sensor data becomes useful the moment someone can tell normal from not-normal without training. That was the whole brief.",
    coverAlt: "Custom IoT monitoring dashboard with sensor charts and status panels",

    role: "UX/UI Designer",
    timeline: "2023 — ongoing",
    platform: "Responsive web",
    tools: "Figma, Apache ECharts, React",
    domain: "Industrial IoT / Operations Monitoring",

    problemIntro: "Industrial sensors produce a reading every few seconds, and the default way to show that is a line chart per sensor. Put forty of them on a screen and you have a wall of charts that operations teams stop reading by week two.",
    find1Title: "Data Layer", find1Text: "40+ sensors, each reading every few seconds — more volume than anyone can read raw and in time.",
    find2Title: "Display Layer", find2Text: "The default pattern is one chart per sensor. It does not scale as the sensor count grows.",
    find3Title: "Cognitive Layer", find3Text: "Telling a normal reading from an abnormal one took specialist knowledge — there was nothing to compare it against.",
    find4Title: "Process Layer", find4Text: "Anomalies were being caught during end-of-shift review rather than as they happened, which meant the response always started late.",

    processText: "I stopped treating the dashboard as a data display and started treating it as a triage tool. Working with the operations team, we agreed on what normal looks like per sensor class first — only then did the visual design follow, because now a chart had something to deviate from.",
    quote: "It stopped being a data display and became a triage tool. Everything else followed from that.",

    ps1Title: "Align with Ops Team", ps1Text: "Define what \"normal\" looks like per sensor class, together with the team who works the floor, before any UI work starts.",
    ps2Title: "Define Expected Bands", ps2Text: "Set the expected range per sensor class as the baseline everything else compares against.",
    ps3Title: "Reframe the Goal", ps3Text: "Shift from \"show all the data\" to \"help triage happen fast.\"",
    ps4Title: "Design Follows Logic", ps4Text: "Only design the visuals once the baseline exists, so a chart has something to deviate from.",
    ps5Title: "Pilot & Measure", ps5Text: "Test with the real operations team and measure against the previous process.",

    solutionIntro: "Each sensor renders against its own expected band rather than on a raw axis, so out-of-range reads as a shape, not a number to interpret. The layout ranks by exception rather than by sensor ID, which means a quiet shift shows an almost empty screen — deliberately.",

    dec1Title: "Expected band instead of a raw axis", dec1Why: "Turns reading numbers into reading a shape — out-of-range is visible at a glance, with nothing to calculate.",
    dec2Title: "Rank by exception, not sensor ID", dec2Why: "Lets the system do the prioritising instead of the person — whatever needs attention first is always on top.",
    dec3Title: "An empty screen when everything is normal is a feature, not a bug", dec3Why: "A deliberately empty state says \"nothing is wrong\" faster than a full screen of charts anyone would have to scan one by one.",
    dec4Title: "One visual grammar for overview and drill-down", dec4Why: "Nobody has to learn a new way to read the screen when they drill into a single sensor — cognitive load stays flat.",

    showcase1Caption: "Sensors plotted against their expected band, not a raw axis",
    showcase2Caption: "Layout ranks by exception, so a quiet shift looks quiet",
    showcase3Caption: "Drill-down keeps the same visual grammar as the overview",

    resultsText: "Measured during pilot testing with the operations team, comparing time-to-notice against their previous end-of-shift review process.",
    stat1: "~40%", stat1Label: "Faster anomaly identification",
    stat2: "Shift →︎ live", stat2Label: "Detection moved off end-of-shift",
    stat3: "40+", stat3Label: "Sensor streams per view",

    reflect1Title: "Reframing the Problem Comes Before Reframing the UI",
    reflect1Text: "Reframing from \"data display\" to \"triage tool\" was the turning point for the whole project — and it happened before Figma was even opened.",
    reflect2Title: "Domain Knowledge Isn't Optional Here",
    reflect2Text: "There was no way to define the expected band correctly without talking to the operations team first — the best design decision in this case came from them, not from a design system.",
    reflect3Title: "Sometimes the Best Screen Is an Empty One",
    reflect3Text: "Most dashboard work gets judged on how much data it can fit. This case was a reminder that sometimes an empty screen is the most valuable signal there is.",

    nextTitle: "JST Group",
    dataStatus: "real"
  },

  th: {
    category: "แดชบอร์ดข้อมูล",
    title: "แดชบอร์ด IoT สั่งทำสำหรับงานอุตสาหกรรม",
    summary: "ข้อมูลเซนเซอร์จะมีประโยชน์ทันทีที่คนดูแยกออกว่าอะไรปกติอะไรไม่ปกติ โดยไม่ต้องผ่านการอบรม โจทย์ทั้งหมดคือเท่านี้",
    coverAlt: "แดชบอร์ดตรวจสอบ IoT แบบสั่งทำ พร้อมกราฟเซนเซอร์และแผงสถานะ",

    role: "UX/UI Designer",
    timeline: "2566 — ถึงปัจจุบัน",
    platform: "เว็บ Responsive",
    tools: "Figma, Apache ECharts, React",
    domain: "Industrial IoT / Operations Monitoring",

    problemIntro: "เซนเซอร์ในโรงงานส่งค่าทุกไม่กี่วินาที และวิธีแสดงผลแบบมาตรฐานคือกราฟเส้นหนึ่งอันต่อหนึ่งเซนเซอร์ พอเอาสี่สิบอันมาวางบนหน้าจอเดียว มันกลายเป็นกำแพงกราฟที่ทีมปฏิบัติการเลิกอ่านตั้งแต่สัปดาห์ที่สอง",
    find1Title: "Data Layer", find1Text: "เซนเซอร์ 40+ ตัว ส่งค่าทุกไม่กี่วินาที — ปริมาณมากเกินกว่าจะอ่านค่าดิบได้ทันเวลา",
    find2Title: "Display Layer", find2Text: "รูปแบบมาตรฐานคือกราฟหนึ่งอันต่อหนึ่งเซนเซอร์ ซึ่ง scale ไม่ได้เมื่อจำนวนเซนเซอร์เพิ่มขึ้น",
    find3Title: "Cognitive Layer", find3Text: "การบอกว่าค่าไหนปกติหรือผิดปกติต้องใช้ความรู้เฉพาะทาง เพราะไม่มีอะไรให้เทียบ",
    find4Title: "Process Layer", find4Text: "ความผิดปกติถูกจับได้ตอนรีวิวท้ายกะ ไม่ใช่ตอนที่มันเกิด แปลว่าการตอบสนองเริ่มช้ากว่าที่ควรเสมอ",

    processText: "ผมเลิกมองแดชบอร์ดว่าเป็นที่แสดงข้อมูล แล้วเปลี่ยนมามองว่ามันคือเครื่องมือคัดกรอง ผมทำงานร่วมกับทีมปฏิบัติการเพื่อตกลงกันก่อนว่า 'ปกติ' ของเซนเซอร์แต่ละประเภทหน้าตาเป็นยังไง แล้วงานออกแบบภาพค่อยตามมาทีหลัง เพราะตอนนั้นกราฟถึงจะมีอะไรให้เบี่ยงเบนออกไป",
    quote: "มันเลิกเป็นที่แสดงข้อมูล แล้วกลายเป็นเครื่องมือคัดกรอง ทุกอย่างที่เหลือตามมาจากจุดนั้น",

    ps1Title: "ตกลงกับทีมปฏิบัติการ", ps1Text: "นิยาม 'ปกติ' ของเซนเซอร์แต่ละประเภทร่วมกับทีมหน้างานก่อนเริ่มออกแบบ UI",
    ps2Title: "กำหนดช่วงค่าปกติ", ps2Text: "ตั้งช่วงค่าที่ควรเป็นต่อประเภทเซนเซอร์ ให้เป็น baseline สำหรับเปรียบเทียบ",
    ps3Title: "ปรับกรอบเป้าหมาย", ps3Text: "เปลี่ยนจาก 'แสดงข้อมูลให้ครบ' เป็น 'ช่วยให้คัดกรองได้เร็ว'",
    ps4Title: "ออกแบบตามตรรกะ", ps4Text: "ออกแบบภาพหลังจากมี baseline แล้วเท่านั้น เพื่อให้กราฟมีสิ่งให้เบี่ยงเบนออกไป",
    ps5Title: "ทดสอบและวัดผล", ps5Text: "ทดสอบกับทีมปฏิบัติการจริง วัดผลเทียบกับกระบวนการเดิม",

    solutionIntro: "เซนเซอร์แต่ละตัวถูกวาดเทียบกับช่วงค่าที่ควรเป็นของตัวเอง แทนที่จะวาดบนแกนดิบ ค่าที่หลุดช่วงจึงอ่านได้จากรูปทรง ไม่ใช่ตัวเลขที่ต้องมาตีความ ส่วนการจัดเรียงใช้ความผิดปกติเป็นตัวจัดลำดับแทนรหัสเซนเซอร์ กะที่เงียบจึงเห็นหน้าจอที่แทบว่างเปล่า ซึ่งตั้งใจให้เป็นแบบนั้น",

    dec1Title: "ใช้ช่วงค่าที่ควรเป็น แทนแกนดิบ", dec1Why: "เปลี่ยนงานอ่านตัวเลขให้เป็นงานอ่านรูปทรง ค่าที่หลุดช่วงเห็นได้ทันทีโดยไม่ต้องคำนวณ",
    dec2Title: "จัดลำดับตามความผิดปกติ ไม่ใช่รหัสเซนเซอร์", dec2Why: "ให้ระบบจัดลำดับความสำคัญแทนคน สิ่งที่ต้องดูก่อนอยู่บนสุดเสมอ",
    dec3Title: "หน้าจอว่างเมื่อทุกอย่างปกติ คือ Feature ไม่ใช่ Bug", dec3Why: "Empty State ที่ตั้งใจออกแบบ บอกว่า 'ไม่มีอะไรผิดปกติ' ได้เร็วกว่าหน้าจอเต็มไปด้วยกราฟที่ต้องไล่ดูทีละอัน",
    dec4Title: "ภาษาภาพเดียวกันทั้งภาพรวมและเจาะลึก", dec4Why: "ไม่มีใครต้องเรียนรู้วิธีอ่านใหม่เมื่อเจาะลึกเข้าไปดูเซนเซอร์ตัวใดตัวหนึ่ง ภาระทางความคิดจึงไม่เพิ่มขึ้น",

    showcase1Caption: "เซนเซอร์วาดเทียบช่วงค่าที่ควรเป็น ไม่ใช่แกนดิบ",
    showcase2Caption: "จัดลำดับตามความผิดปกติ กะที่เงียบจึงดูเงียบ",
    showcase3Caption: "หน้าเจาะลึกใช้ภาษาภาพชุดเดียวกับหน้าภาพรวม",

    resultsText: "วัดผลระหว่างการทดสอบนำร่องกับทีมปฏิบัติการ โดยเทียบเวลาที่ใช้กว่าจะสังเกตเห็น กับกระบวนการรีวิวท้ายกะแบบเดิม",
    stat1: "~40%", stat1Label: "ตรวจพบความผิดปกติเร็วขึ้น",
    stat2: "ท้ายกะ →︎ เรียลไทม์", stat2Label: "ย้ายการตรวจจับออกจากท้ายกะ",
    stat3: "40+", stat3Label: "สตรีมเซนเซอร์ต่อหนึ่งหน้าจอ",

    reflect1Title: "การรีเฟรมปัญหาต้องมาก่อนการรีเฟรม UI",
    reflect1Text: "การเปลี่ยนกรอบคิดจาก 'data display' เป็น 'triage tool' คือจุดเปลี่ยนของทั้งโปรเจกต์ — และมันเกิดขึ้นก่อนที่จะแตะ Figma ด้วยซ้ำ",
    reflect2Title: "ความรู้เฉพาะทางไม่ใช่ตัวเลือก",
    reflect2Text: "ไม่มีทางกำหนด 'expected band' ได้ถูกต้องโดยไม่คุยกับทีมปฏิบัติงานก่อน — design decision ที่ดีที่สุดในเคสนี้มาจาก operations team ไม่ใช่จาก design system",
    reflect3Title: "บางครั้งหน้าจอที่ดีที่สุดคือหน้าจอที่ว่างเปล่า",
    reflect3Text: "งาน dashboard ส่วนใหญ่ถูกตัดสินจาก 'ใส่ข้อมูลได้เยอะแค่ไหน' แต่เคสนี้สอนว่าบางครั้งหน้าจอที่ว่างเปล่าคือสัญญาณที่มีค่าที่สุด",

    nextTitle: "JST Group",
    dataStatus: "real"
  }
};
