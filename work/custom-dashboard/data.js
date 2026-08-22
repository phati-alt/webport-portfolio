/* GENERATED FILE - do not edit by hand.
   Source of truth is content/cases.csv; regenerate with:
     powershell -ExecutionPolicy Bypass -File tools/build-cases.ps1
   Edits made directly here are lost on the next run. */
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
    problem1: "Industrial sensors produce a reading every few seconds, and the default way to show that is a line chart per sensor. Put forty of them on a screen and you have a wall of charts that operations teams stop reading by week two.",
    problem2: "Anomalies were being caught during end-of-shift review rather than as they happened, which meant the response always started late.",
    process1: "I stopped treating the dashboard as a data display and started treating it as a triage tool. Working with the operations team, we agreed on what normal looks like per sensor class first — only then did the visual design follow, because now a chart had something to deviate from.",
    quote: "It stopped being a data display and became a triage tool. Everything else followed from that.",
    solution1: "Each sensor renders against its own expected band rather than on a raw axis, so out-of-range reads as a shape, not a number to interpret. The layout ranks by exception rather than by sensor ID, which means a quiet shift shows an almost empty screen — deliberately.",
    caption1: "Sensors plotted against their expected band, not a raw axis",
    caption2: "Layout ranks by exception, so a quiet shift looks quiet",
    caption3: "Drill-down keeps the same visual grammar as the overview",
    results1: "Measured during pilot testing with the operations team, comparing time-to-notice against their previous end-of-shift review process.",
    stat1: "~40%",
    stat1Label: "Faster anomaly identification",
    stat2: "Shift →︎ live",
    stat2Label: "Detection moved off end-of-shift",
    stat3: "40+",
    stat3Label: "Sensor streams per view",
    nextTitle: "WordPress sites for client brands"
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
    problem1: "เซนเซอร์ในโรงงานส่งค่าทุกไม่กี่วินาที และวิธีแสดงผลแบบมาตรฐานคือกราฟเส้นหนึ่งอันต่อหนึ่งเซนเซอร์ พอเอาสี่สิบอันมาวางบนหน้าจอเดียว มันกลายเป็นกำแพงกราฟที่ทีมปฏิบัติการเลิกอ่านตั้งแต่สัปดาห์ที่สอง",
    problem2: "ความผิดปกติถูกจับได้ตอนรีวิวท้ายกะ ไม่ใช่ตอนที่มันเกิด แปลว่าการตอบสนองเริ่มช้ากว่าที่ควรเสมอ",
    process1: "ผมเลิกมองแดชบอร์ดว่าเป็นที่แสดงข้อมูล แล้วเปลี่ยนมามองว่ามันคือเครื่องมือคัดกรอง ผมทำงานร่วมกับทีมปฏิบัติการเพื่อตกลงกันก่อนว่า 'ปกติ' ของเซนเซอร์แต่ละประเภทหน้าตาเป็นยังไง แล้วงานออกแบบภาพค่อยตามมาทีหลัง เพราะตอนนั้นกราฟถึงจะมีอะไรให้เบี่ยงเบนออกไป",
    quote: "มันเลิกเป็นที่แสดงข้อมูล แล้วกลายเป็นเครื่องมือคัดกรอง ทุกอย่างที่เหลือตามมาจากจุดนั้น",
    solution1: "เซนเซอร์แต่ละตัวถูกวาดเทียบกับช่วงค่าที่ควรเป็นของตัวเอง แทนที่จะวาดบนแกนดิบ ค่าที่หลุดช่วงจึงอ่านได้จากรูปทรง ไม่ใช่ตัวเลขที่ต้องมาตีความ ส่วนการจัดเรียงใช้ความผิดปกติเป็นตัวจัดลำดับแทนรหัสเซนเซอร์ กะที่เงียบจึงเห็นหน้าจอที่แทบว่างเปล่า ซึ่งตั้งใจให้เป็นแบบนั้น",
    caption1: "เซนเซอร์วาดเทียบช่วงค่าที่ควรเป็น ไม่ใช่แกนดิบ",
    caption2: "จัดลำดับตามความผิดปกติ กะที่เงียบจึงดูเงียบ",
    caption3: "หน้าเจาะลึกใช้ภาษาภาพชุดเดียวกับหน้าภาพรวม",
    results1: "วัดผลระหว่างการทดสอบนำร่องกับทีมปฏิบัติการ โดยเทียบเวลาที่ใช้กว่าจะสังเกตเห็น กับกระบวนการรีวิวท้ายกะแบบเดิม",
    stat1: "~40%",
    stat1Label: "ตรวจพบความผิดปกติเร็วขึ้น",
    stat2: "ท้ายกะ →︎ เรียลไทม์",
    stat2Label: "ย้ายการตรวจจับออกจากท้ายกะ",
    stat3: "40+",
    stat3Label: "สตรีมเซนเซอร์ต่อหนึ่งหน้าจอ",
    nextTitle: "เว็บไซต์ WordPress ให้แบรนด์ลูกค้า"
  }
};
