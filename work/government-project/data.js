/* GENERATED FILE - do not edit by hand.
   Source of truth is content/cases.csv; regenerate with:
     powershell -ExecutionPolicy Bypass -File tools/build-cases.ps1
   Edits made directly here are lost on the next run. */
window.CASE_DATA = {
  en: {
    category: "Government Platform",
    title: "Groundwater monitoring for a government agency",
    summary: "A nationwide sensor network reported into spreadsheets nobody could read in time. I turned it into one status dashboard field teams actually open.",
    coverAlt: "Government groundwater monitoring dashboard shown on laptop and desktop",
    role: "Lead UX/UI Designer",
    timeline: "2023 — 6 months",
    platform: "Responsive web",
    tools: "Figma, Apache ECharts",
    problem1: "Water-level readings arrived from hundreds of wells across the country, but they landed in exported spreadsheets that took a full day to compile. By the time anyone spotted an anomaly, the situation on the ground had already moved on.",
    problem2: "The people who needed the data most were field officers, not analysts. Any interface that assumed comfort with pivot tables was going to be abandoned within a week.",
    process1: "I ran requirement sessions directly with the Product Owner and the agency's project managers, then sat with three field officers while they did their weekly reporting. Watching them work surfaced the real constraint: they were not looking for insight, they were looking for exceptions. That reframed the whole layout — status first, detail on demand.",
    quote: "They were not looking for insight. They were looking for exceptions.",
    solution1: "The dashboard opens on a single map of station status, colour-coded to a threshold the agency already used in their paper process, so nothing new had to be learned. Drilling into a station reveals its history as a chart rather than a table, and anything outside the normal band is called out before the user has to go looking for it.",
    caption1: "Station overview — exceptions surfaced before detail",
    caption2: "Per-station history, charted rather than tabulated",
    caption3: "Threshold states reuse the agency's existing paper colour codes",
    results1: "Tested with twelve field officers across two rounds. The second round held up with participants who had never seen the first version, which mattered more to me than the headline number.",
    stat1: "+30%",
    stat1Label: "Task completion rate (n=12)",
    stat2: "1 day →︎ live",
    stat2Label: "Reporting lag removed",
    stat3: "12",
    stat3Label: "Officers in usability testing",
    nextTitle: "Construction & facility management platform"
  },

  th: {
    category: "แพลตฟอร์มภาครัฐ",
    title: "ระบบติดตามน้ำบาดาลสำหรับหน่วยงานรัฐ",
    summary: "เครือข่ายเซนเซอร์ทั่วประเทศส่งข้อมูลลงไฟล์ตารางที่ไม่มีใครอ่านทัน ผมเปลี่ยนมันให้เป็นแดชบอร์ดสถานะหน้าเดียวที่ทีมภาคสนามเปิดใช้จริง",
    coverAlt: "แดชบอร์ดติดตามน้ำบาดาลของหน่วยงานรัฐ แสดงบนโน้ตบุ๊กและเดสก์ท็อป",
    role: "Lead UX/UI Designer",
    timeline: "2566 — 6 เดือน",
    platform: "เว็บ Responsive",
    tools: "Figma, Apache ECharts",
    problem1: "ค่าระดับน้ำถูกส่งมาจากบ่อหลายร้อยจุดทั่วประเทศ แต่ไปจบที่ไฟล์ตารางที่ต้องใช้เวลารวบรวมเป็นวัน กว่าจะมีคนเห็นความผิดปกติ สถานการณ์หน้างานก็เปลี่ยนไปแล้ว",
    problem2: "คนที่ต้องใช้ข้อมูลมากที่สุดคือเจ้าหน้าที่ภาคสนาม ไม่ใช่นักวิเคราะห์ อินเทอร์เฟซที่คิดว่าผู้ใช้ถนัด Pivot Table จะถูกเลิกใช้ภายในสัปดาห์เดียว",
    process1: "ผมเก็บความต้องการร่วมกับ Product Owner และ Project Manager ของหน่วยงานโดยตรง แล้วไปนั่งดูเจ้าหน้าที่ภาคสนาม 3 คนทำรายงานประจำสัปดาห์ การได้ดูเขาทำงานจริงทำให้เห็นข้อจำกัดที่แท้จริง — เขาไม่ได้ตามหา insight เขาตามหาสิ่งผิดปกติ นั่นเปลี่ยนการวางเลย์เอาต์ทั้งหมด ให้สถานะมาก่อน รายละเอียดตามทีหลัง",
    quote: "เขาไม่ได้ตามหา insight เขาตามหาสิ่งผิดปกติ",
    solution1: "แดชบอร์ดเปิดมาเจอแผนที่สถานะสถานีหน้าเดียว ใช้รหัสสีเดียวกับเกณฑ์ที่หน่วยงานใช้ในกระบวนการกระดาษอยู่แล้ว ผู้ใช้จึงไม่ต้องเรียนรู้อะไรใหม่ พอกดเข้าไปดูรายสถานี ประวัติจะแสดงเป็นกราฟแทนตาราง และค่าที่หลุดช่วงปกติจะถูกชูขึ้นมาให้เห็นก่อนที่ผู้ใช้จะต้องไปไล่หาเอง",
    caption1: "ภาพรวมสถานี — ชูสิ่งผิดปกติขึ้นมาก่อนรายละเอียด",
    caption2: "ประวัติรายสถานี แสดงเป็นกราฟแทนตาราง",
    caption3: "สถานะตามเกณฑ์ ใช้รหัสสีเดิมจากกระบวนการกระดาษของหน่วยงาน",
    results1: "ทดสอบกับเจ้าหน้าที่ภาคสนาม 12 คน สองรอบ รอบที่สองยังได้ผลดีกับผู้เข้าร่วมที่ไม่เคยเห็นเวอร์ชันแรกมาก่อน ซึ่งสำหรับผมสำคัญกว่าตัวเลขพาดหัวเสียอีก",
    stat1: "+30%",
    stat1Label: "อัตราความสำเร็จของงาน (n=12)",
    stat2: "1 วัน →︎ เรียลไทม์",
    stat2Label: "ตัดความล่าช้าของรายงาน",
    stat3: "12",
    stat3Label: "เจ้าหน้าที่ที่ร่วมทดสอบ",
    nextTitle: "แพลตฟอร์มบริหารงานก่อสร้างและอาคาร"
  }
};
