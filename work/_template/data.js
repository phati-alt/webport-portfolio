/* Copy for THIS case study only, EN + TH.
   Referenced from index.html via data-i18n-case="<key>" (and
   data-i18n-case-alt="<key>" for image alt text).

   Site-wide copy — nav, footer, and the generic section labels like
   "The Problem" / "Role" / "Next project" — is NOT here. That lives in
   js/i18n.js and is shared by every page; don't duplicate it.

   Keys with no matching element are simply unused, and elements whose key
   is missing here keep whatever is hardcoded in index.html, so a
   half-filled file degrades to the HTML fallback rather than blank text. */
window.CASE_DATA = {
  en: {
    category:   "[Category]",
    title:      "[Project Name]",
    summary:    "[One-sentence summary of the project.]",
    coverAlt:   "[Describe the cover image for screen readers]",

    role:       "[Role]",
    timeline:   "[Timeline]",
    platform:   "[Platform]",
    tools:      "[Tools]",

    problem1:   "[What was broken or missing before this project?]",
    problem2:   "[Any constraint worth mentioning — timeline, technical, stakeholder.]",
    process1:   "[Research, discovery, key decisions along the way.]",
    quote:      "[The one line worth pulling out of the section above.]",
    solution1:  "[Describe the final design and why it works.]",
    caption1:   "[Caption for this screen]",
    caption2:   "[Caption for this screen]",
    caption3:   "[Caption for this screen]",
    results1:   "[Summary of the outcome/impact.]",

    stat1: "[XX%]", stat1Label: "[What this measures]",
    stat2: "[XX%]", stat2Label: "[What this measures]",
    stat3: "[XX%]", stat3Label: "[What this measures]",

    nextTitle:  "[Next Project Name]"
  },

  th: {
    category:   "[หมวดหมู่]",
    title:      "[ชื่อโปรเจกต์]",
    summary:    "[สรุปโปรเจกต์หนึ่งประโยค]",
    coverAlt:   "[คำอธิบายรูปหน้าปกสำหรับ screen reader]",

    role:       "[บทบาท]",
    timeline:   "[ระยะเวลา]",
    platform:   "[แพลตฟอร์ม]",
    tools:      "[เครื่องมือ]",

    problem1:   "[ก่อนหน้าโปรเจกต์นี้มีปัญหาอะไร]",
    problem2:   "[ข้อจำกัดที่ควรพูดถึง — เวลา เทคนิค หรือผู้มีส่วนได้ส่วนเสีย]",
    process1:   "[งานวิจัย การค้นหา และการตัดสินใจสำคัญระหว่างทาง]",
    quote:      "[ประโยคเดียวที่ควรดึงออกมาจากย่อหน้าด้านบน]",
    solution1:  "[อธิบายงานออกแบบสุดท้ายและเหตุผลที่มันได้ผล]",
    caption1:   "[คำอธิบายภาพ]",
    caption2:   "[คำอธิบายภาพ]",
    caption3:   "[คำอธิบายภาพ]",
    results1:   "[สรุปผลลัพธ์ที่เกิดขึ้น]",

    stat1: "[XX%]", stat1Label: "[ตัวชี้วัด]",
    stat2: "[XX%]", stat2Label: "[ตัวชี้วัด]",
    stat3: "[XX%]", stat3Label: "[ตัวชี้วัด]",

    nextTitle:  "[ชื่อโปรเจกต์ถัดไป]"
  }
};
