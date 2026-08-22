/* GENERATED FILE - do not edit by hand.
   Source of truth is content/cases.csv; regenerate with:
     powershell -ExecutionPolicy Bypass -File tools/build-cases.ps1
   Edits made directly here are lost on the next run. */
window.CASE_DATA = {
  en: {
    category: "Mobile App",
    title: "EV Charger — find a charge before the battery decides",
    summary: "A charging app where the map answers the only question that matters at 12% battery: which of these will actually work when I get there?",
    coverAlt: "EV charging app screens — service home, car setup, station map and station list",
    role: "UX/UI Designer",
    timeline: "2023 — 4 months",
    platform: "iOS & Android",
    tools: "Figma, Prototyping",
    problem1: "Drivers did not need more stations on a map — they needed to know which ones were free, fast enough, and compatible with their connector. Existing apps showed all three as small print behind a tap.",
    problem2: "Charging decisions get made under stress, often while driving. Anything that required careful reading was going to be misread.",
    process1: "I mapped the decision as it actually happens: a driver has a battery percentage, a rough destination, and about ten seconds. That budget ruled out browsing. The map had to pre-filter to compatible connectors by default, and lead with time-to-charge rather than distance alone.",
    quote: "A driver has a battery percentage, a destination, and about ten seconds. That budget ruled out browsing.",
    solution1: "Connector type is captured once during setup and silently filters every list afterwards, so the map only ever shows chargers that fit the car. Each station leads with power output and travel time, and the booking flow keeps confirmation to a single screen.",
    caption1: "Service home — charging, stations and history in one place",
    caption2: "One-time car and connector setup filters everything after it",
    caption3: "Station list leads with power output and travel time",
    results1: "Prototype testing focused on a single measure: could a driver pick a viable station without zooming in or opening a detail page.",
    stat1: "10s",
    stat1Label: "Target decision time",
    stat2: "1 screen",
    stat2Label: "Booking confirmation",
    stat3: "Auto",
    stat3Label: "Connector filtering by default",
    nextTitle: "DR.in for Doctor"
  },

  th: {
    category: "แอปมือถือ",
    title: "EV Charger — หาที่ชาร์จให้ทันก่อนแบตจะหมด",
    summary: "แอปหาสถานีชาร์จที่ตอบคำถามเดียวที่สำคัญตอนแบตเหลือ 12% — สถานีไหนที่ไปถึงแล้วใช้ได้จริง",
    coverAlt: "หน้าจอแอปชาร์จรถ EV — หน้าบริการ ตั้งค่ารถ แผนที่สถานี และรายการสถานี",
    role: "UX/UI Designer",
    timeline: "2566 — 4 เดือน",
    platform: "iOS และ Android",
    tools: "Figma, Prototyping",
    problem1: "ผู้ขับไม่ได้ต้องการสถานีบนแผนที่เพิ่ม เขาต้องการรู้ว่าสถานีไหนว่าง เร็วพอ และหัวชาร์จตรงกับรถของเขา แต่แอปที่มีอยู่เอาข้อมูลทั้งสามอย่างไปซ่อนเป็นตัวเล็ก ๆ หลังการกดหนึ่งครั้ง",
    problem2: "การตัดสินใจเรื่องชาร์จเกิดขึ้นตอนกดดัน และบ่อยครั้งเกิดขึ้นระหว่างขับรถ อะไรที่ต้องอ่านละเอียดย่อมถูกอ่านผิด",
    process1: "ผมแมปการตัดสินใจตามที่มันเกิดขึ้นจริง — ผู้ขับมีเปอร์เซ็นต์แบต มีจุดหมายคร่าว ๆ และมีเวลาราวสิบวินาที งบเวลาเท่านี้ตัดการไล่ดูออกไปเลย แผนที่จึงต้องกรองเฉพาะหัวชาร์จที่ใช้ได้ไว้ตั้งแต่แรก และขึ้นเวลาไปถึงเป็นข้อมูลแรกแทนที่จะบอกแค่ระยะทาง",
    quote: "ผู้ขับมีเปอร์เซ็นต์แบต มีจุดหมาย และมีเวลาราวสิบวินาที งบเวลาเท่านี้ตัดการไล่ดูออกไปเลย",
    solution1: "ประเภทหัวชาร์จถูกถามครั้งเดียวตอนตั้งค่า แล้วกรองทุกรายการหลังจากนั้นให้เงียบ ๆ แผนที่จึงแสดงเฉพาะที่ชาร์จที่ใช้กับรถคันนั้นได้ แต่ละสถานีขึ้นกำลังไฟและเวลาเดินทางเป็นข้อมูลแรก และขั้นตอนการจองจบการยืนยันในหน้าจอเดียว",
    caption1: "หน้าบริการ — ชาร์จ สถานี และประวัติ รวมอยู่ที่เดียว",
    caption2: "ตั้งค่ารถและหัวชาร์จครั้งเดียว กรองทุกอย่างหลังจากนั้น",
    caption3: "รายการสถานีขึ้นกำลังไฟและเวลาเดินทางก่อน",
    results1: "การทดสอบต้นแบบโฟกัสที่ตัวชี้วัดเดียว — ผู้ขับเลือกสถานีที่ใช้ได้จริงโดยไม่ต้องซูมเข้าหรือเปิดหน้ารายละเอียดได้ไหม",
    stat1: "10 วิ",
    stat1Label: "เวลาตัดสินใจที่ตั้งเป้า",
    stat2: "1 หน้าจอ",
    stat2Label: "ยืนยันการจอง",
    stat3: "อัตโนมัติ",
    stat3Label: "กรองหัวชาร์จให้ตั้งแต่แรก",
    nextTitle: "DR.in for Doctor"
  }
};
