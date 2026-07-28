// ============ Work Section: Project Data ============
// Add a new project by pushing one object onto this array — the Work grid
// (index.html #workGrid) renders from this list automatically, in both
// languages and through the category filter. No HTML edits needed.
//
// Fields:
//   slug      unique id, used for the case study URL: work/<slug>.html
//   category  "mobile" | "web" | "design-system" — must match a data-filter
//             button in index.html's .filter-row
//   image     path to a thumbnail image (assets/work/<slug>/thumb.jpg),
//             or null to fall back to the placeholder wireframe art.
//             Recommended: 800x600 (4:3), .webp or .jpg, < 200KB.
//   title     { en, th }
//   desc      { en, th } — one sentence, shown on the card
//   link      case study page, e.g. "work/<slug>.html". Point it at an
//             external URL (Figma/Behance) instead if you don't want a
//             dedicated page for this project.

const PROJECTS = [
  {
    slug: "finza",
    category: "mobile",
    image: null,
    title: { en: "Finza — Fintech Mobile App", th: "Finza — แอปการเงินส่วนบุคคล" },
    desc: {
      en: "Redesigning a personal finance app to simplify budgeting and boost daily engagement.",
      th: "รีดีไซน์แอปการเงินส่วนบุคคลให้วางแผนงบประมาณง่ายขึ้น และเพิ่มการใช้งานประจำวัน"
    },
    link: "work/finza.html"
  },
  {
    slug: "orbit",
    category: "web",
    image: null,
    title: { en: "Orbit — E-commerce Dashboard", th: "Orbit — แดชบอร์ดอีคอมเมิร์ซ" },
    desc: {
      en: "An analytics dashboard that helps sellers track performance at a glance.",
      th: "แดชบอร์ดวิเคราะห์ข้อมูลที่ช่วยให้ผู้ขายติดตามผลการดำเนินงานได้ในหน้าจอเดียว"
    },
    link: "work/orbit.html"
  },
  {
    slug: "lumen",
    category: "design-system",
    image: null,
    title: { en: "Lumen — Design System", th: "Lumen — Design System" },
    desc: {
      en: "A unified component library scaling design consistency across five product teams.",
      th: "ไลบรารีคอมโพเนนต์รวมศูนย์ที่ช่วยรักษาความสอดคล้องของดีไซน์ในทีมโปรดักต์ทั้ง 5 ทีม"
    },
    link: "work/lumen.html"
  },
  {
    slug: "wanderly",
    category: "mobile",
    image: null,
    title: { en: "Wanderly — Travel Booking App", th: "Wanderly — แอปจองทริปท่องเที่ยว" },
    desc: {
      en: "Simplifying trip planning with a delightful, story-driven booking flow.",
      th: "ทำให้การวางแผนทริปง่ายขึ้นด้วยขั้นตอนการจองที่สนุกและมีเรื่องราว"
    },
    link: "work/wanderly.html"
  },
  {
    slug: "vitalis",
    category: "web",
    image: null,
    title: { en: "Vitalis — Healthcare Portal", th: "Vitalis — พอร์ทัลด้านสุขภาพ" },
    desc: {
      en: "Making patient records and appointments accessible for every age group.",
      th: "ทำให้ประวัติผู้ป่วยและการนัดหมายเข้าถึงได้ง่ายสำหรับผู้ใช้ทุกช่วงวัย"
    },
    link: "work/vitalis.html"
  },
  {
    slug: "nomly",
    category: "mobile",
    image: null,
    title: { en: "Nomly — Food Delivery App", th: "Nomly — แอปสั่งอาหารเดลิเวอรี่" },
    desc: {
      en: "Reducing checkout drop-off with a streamlined ordering experience.",
      th: "ลดอัตราการทิ้งตะกร้าด้วยขั้นตอนการสั่งซื้อที่กระชับขึ้น"
    },
    link: "work/nomly.html"
  }
];
