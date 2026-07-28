// ============ i18n: EN / TH ============
const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.work": "Work",
    "nav.skills": "Skills",
    "nav.process": "Process",
    "nav.contact": "Contact",

    "hero.eyebrow": "Available for freelance work",
    "hero.title": "Turning complex systems into <span class=\"highlight\">experiences people trust.</span>",
    "hero.desc": "Hi, I'm Mick Yuttana Pati — a UX/UI Designer focused on simplifying complex systems into intuitive, trustworthy digital experiences.",
    "hero.ctaWork": "View My Work",
    "hero.ctaTalk": "Let's Talk",
    "hero.stat1": "Years Experience",
    "hero.stat2": "Faster Design Cycles",
    "hero.stat3": "Projects Delivered",

    "about.badgeLabel": "Years of<br>Experience",
    "about.eyebrow": "About Me",
    "about.title": "I turn complex problems into simple, beautiful interfaces.",
    "about.text1": "UX/UI Designer with 3+ years specializing in enterprise IoT and government platforms. I turn complex sensor data and operational workflows into interfaces that non-technical users can actually use.",
    "about.text2": "My Computer Science background lets me collaborate with engineers in their own language — and ship design systems that hold up at scale.",
    "about.list1": "User-Centered Design Process",
    "about.list2": "Cross-Platform Design Systems",
    "about.list3": "Data-Informed Design Decisions",
    "about.resumeBtn": "Download Resume",

    "experience.eyebrow": "Career",
    "experience.title": "Work Experience",
    "experience.desc": "A timeline of roles where I've shipped real products, systems, and design processes.",

    "experience.job1.role": "UX/UI Designer",
    "experience.job1.company": "Swift Dynamics Co., Ltd.",
    "experience.job1.date": "Nov 2022 – Present",
    "experience.job1.group1.title": "Product Architecture & Design Systems",
    "experience.job1.group1.bullet1": "Led end-to-end UX/UI design for a construction and facility management platform, taking it from paper-based workflows to a fully digital ecosystem used across web and mobile.",
    "experience.job1.group1.bullet2": "Built and maintained a centralized Design System with Figma Variables, Tokens, and Auto-layout — reducing design-to-dev revision rounds from ~4 to 1–2 per feature and keeping UI consistent across 5+ product modules.",
    "experience.job1.group1.bullet3": "Integrated AI tools (Claude, Gemini) into the design workflow for research synthesis, first-draft user flows, and documentation — cutting the discovery phase on new features from ~2 weeks to 8–9 days.",
    "experience.job1.group2.title": "Data-Driven IoT & Custom Dashboards",
    "experience.job1.group2.bullet1": "Designed monitoring dashboards for industrial IoT sensor data using Apache ECharts, helping operations teams identify system anomalies roughly 40% faster during pilot testing.",
    "experience.job1.group2.bullet2": "Partnered with frontend engineers to spec and review component behavior in React, Ant Design, and Tailwind CSS — making sure dense data views stayed performant and didn't break under real sensor load.",
    "experience.job1.group3.title": "Stakeholder Collaboration & Government Solutions",
    "experience.job1.group3.bullet1": "Ran requirement-gathering sessions directly with Product Owners and Project Managers, translating high-level business goals into user flows and high-fidelity wireframes for large-scale government projects.",
    "experience.job1.group3.bullet2": "Designed a unified status-tracking dashboard for a government client, prioritizing accessibility and plain-language UI for users across age groups and technical literacy — achieving a 30% lift in task completion rate during usability testing (n=12).",
    "experience.job1.group3.bullet3": "Presented design decisions and trade-offs to cross-functional stakeholders (PM, PO, engineering leads, client representatives) on a weekly basis.",

    "experience.job2.role": "UI Designer",
    "experience.job2.company": "Yes Web Design Studio Co., Ltd.",
    "experience.job2.date": "Apr 2022 – Aug 2022",
    "experience.job2.bullet1": "Designed high-fidelity UI for 3+ WordPress websites in Figma, customizing ThemeForest templates to match each client's brand and content needs.",
    "experience.job2.bullet2": "Built reusable component libraries and site maps that cut design time on follow-up projects, while keeping visual consistency across the studio's deliverables.",

    "experience.job3.role": "UI Designer (Internship)",
    "experience.job3.company": "Online Asset Co., Ltd.",
    "experience.job3.date": "Nov 2021 – Mar 2022",
    "experience.job3.bullet1": "Designed the full mobile UI for DR.in (medical app) in Adobe XD — from wireframes to high-fidelity prototypes — and shipped responsive front-end pages for SUSCO.co.th using HTML, CSS, and JavaScript.",

    "skills.eyebrow": "What I Do",
    "skills.title": "Skills & Tools",
    "skills.desc": "A blend of design strategy, research methods, and the tools I use every day to bring ideas to life.",
    "skills.card1.title": "Design Strategy",
    "skills.card1.desc": "Scalable Design Systems (Tokens/Variables), Information Architecture, Service Blueprinting, Product Roadmap Alignment.",
    "skills.card2.title": "UX Research",
    "skills.card2.desc": "Usability Testing, User Persona Mapping, User Flows, Site Maps, A/B Testing.",
    "skills.card3.title": "Development",
    "skills.card3.desc": "React, Ant Design, shadcn/ui, Tailwind CSS, Apache ECharts, Design-to-Code Handover.",
    "skills.card4.title": "AI Productivity",
    "skills.card4.desc": "Claude, Gemini, ChatGPT, Google Stitch — for research synthesis, prompt engineering, and rapid prototyping.",
    "skills.card5.title": "Design Tools",
    "skills.card5.desc": "Figma (Advanced), FigJam, Adobe XD.",
    "skills.card6.title": "Collaboration",
    "skills.card6.desc": "Jira, Miro, Slack.",

    "work.eyebrow": "Selected Work",
    "work.title": "Featured Projects",
    "work.desc": "A few case studies that show how I approach problems from research to final UI.",
    "work.filterAll": "All",
    "work.filterMobile": "Mobile App",
    "work.filterWeb": "Web App",
    "work.filterDesignSystem": "Design System",
    "work.viewCaseStudy": "View Case Study →",
    "work.card1.title": "Finza — Fintech Mobile App",
    "work.card1.desc": "Redesigning a personal finance app to simplify budgeting and boost daily engagement.",
    "work.card2.title": "Orbit — E-commerce Dashboard",
    "work.card2.desc": "An analytics dashboard that helps sellers track performance at a glance.",
    "work.card3.title": "Lumen — Design System",
    "work.card3.desc": "A unified component library scaling design consistency across five product teams.",
    "work.card4.title": "Wanderly — Travel Booking App",
    "work.card4.desc": "Simplifying trip planning with a delightful, story-driven booking flow.",
    "work.card5.title": "Vitalis — Healthcare Portal",
    "work.card5.desc": "Making patient records and appointments accessible for every age group.",
    "work.card6.title": "Nomly — Food Delivery App",
    "work.card6.desc": "Reducing checkout drop-off with a streamlined ordering experience.",

    "process.eyebrow": "How I Work",
    "process.title": "My Design Process",
    "process.desc": "A structured yet flexible process that keeps users at the center of every decision.",
    "process.step1.title": "Discover",
    "process.step1.desc": "Understand the business goals, users, and constraints through research and stakeholder interviews.",
    "process.step2.title": "Define",
    "process.step2.desc": "Synthesize findings into clear problem statements, user flows, and information architecture.",
    "process.step3.title": "Design",
    "process.step3.desc": "Explore wireframes and visual concepts, then refine into high-fidelity, testable prototypes.",
    "process.step4.title": "Deliver",
    "process.step4.desc": "Test with real users, iterate, and hand off polished, developer-ready designs.",

    "contact.eyebrow": "Get In Touch",
    "contact.title": "Let's create something great together.",
    "contact.desc": "Have a project in mind or just want to say hi? My inbox is always open.",

    "form.labelName": "Name",
    "form.labelEmail": "Email",
    "form.labelSubject": "Subject",
    "form.labelMessage": "Message",
    "form.placeholderName": "Your name",
    "form.placeholderEmail": "you@example.com",
    "form.placeholderSubject": "Project inquiry",
    "form.placeholderMessage": "Tell me about your project...",
    "form.sendBtn": "Send Message",
    "form.successNote": "Thanks for reaching out! I'll get back to you within 1-2 business days.",

    "footer.tagline": "UX/UI Designer based in Bangkok, Thailand.",
    "footer.rights": "All rights reserved.",

    "misc.resumeAlert": "Resume placeholder — replace this link with your actual PDF resume."
  },

  th: {
    "nav.home": "หน้าแรก",
    "nav.about": "เกี่ยวกับ",
    "nav.experience": "ประสบการณ์",
    "nav.work": "ผลงาน",
    "nav.skills": "ทักษะ",
    "nav.process": "กระบวนการ",
    "nav.contact": "ติดต่อ",

    "hero.eyebrow": "พร้อมรับงานฟรีแลนซ์",
    "hero.title": "เปลี่ยนระบบที่ซับซ้อน ให้เป็น<span class=\"highlight\">ประสบการณ์ที่ผู้ใช้ไว้วางใจ</span>",
    "hero.desc": "สวัสดีครับ ผมมิค ยุทธนา พาที — UX/UI Designer ที่เน้นแปลงระบบซับซ้อนให้กลายเป็นประสบการณ์ดิจิทัลที่ใช้งานง่ายและน่าเชื่อถือ",
    "hero.ctaWork": "ดูผลงานของผม",
    "hero.ctaTalk": "พูดคุยกัน",
    "hero.stat1": "ปีประสบการณ์",
    "hero.stat2": "รอบการออกแบบที่เร็วขึ้น",
    "hero.stat3": "โปรเจกต์ที่ส่งมอบ",

    "about.badgeLabel": "ปีของ<br>ประสบการณ์",
    "about.eyebrow": "เกี่ยวกับผม",
    "about.title": "ผมเปลี่ยนปัญหาที่ซับซ้อน ให้กลายเป็นอินเทอร์เฟซที่เรียบง่ายและสวยงาม",
    "about.text1": "UX/UI Designer ที่มีประสบการณ์กว่า 3 ปี เชี่ยวชาญด้าน Enterprise IoT และแพลตฟอร์มภาครัฐ ผมเปลี่ยนข้อมูลเซนเซอร์ที่ซับซ้อนและขั้นตอนการทำงานให้กลายเป็นอินเทอร์เฟซที่ผู้ใช้ทั่วไปใช้งานได้จริง",
    "about.text2": "พื้นฐานด้าน Computer Science ทำให้ผมสื่อสารกับวิศวกรได้ในภาษาเดียวกัน และส่งมอบ Design System ที่รองรับการขยายตัวได้จริง",
    "about.list1": "กระบวนการออกแบบที่ยึดผู้ใช้เป็นศูนย์กลาง",
    "about.list2": "Design System ที่ใช้ได้ทุกแพลตฟอร์ม",
    "about.list3": "ตัดสินใจออกแบบโดยอ้างอิงข้อมูล",
    "about.resumeBtn": "ดาวน์โหลดเรซูเม่",

    "experience.eyebrow": "เส้นทางอาชีพ",
    "experience.title": "ประสบการณ์การทำงาน",
    "experience.desc": "ไทม์ไลน์ตำแหน่งงานที่ผมได้ลงมือสร้างจริง ทั้งโปรดักต์ ระบบ และกระบวนการออกแบบ",

    "experience.job1.role": "UX/UI Designer",
    "experience.job1.company": "Swift Dynamics Co., Ltd.",
    "experience.job1.date": "พ.ย. 2022 – ปัจจุบัน",
    "experience.job1.group1.title": "สถาปัตยกรรมโปรดักต์และ Design Systems",
    "experience.job1.group1.bullet1": "นำการออกแบบ UX/UI แบบ end-to-end ให้แพลตฟอร์มบริหารงานก่อสร้างและการจัดการอาคาร เปลี่ยนจากขั้นตอนกระดาษให้กลายเป็นระบบดิจิทัลเต็มรูปแบบทั้งบนเว็บและมือถือ",
    "experience.job1.group1.bullet2": "สร้างและดูแล Design System ส่วนกลางด้วย Figma Variables, Tokens และ Auto-layout — ลดรอบการแก้ไขระหว่างดีไซน์กับเดฟจากประมาณ 4 รอบ เหลือ 1–2 รอบต่อฟีเจอร์ และรักษาความสอดคล้องของ UI ในโปรดักต์กว่า 5 โมดูล",
    "experience.job1.group1.bullet3": "นำเครื่องมือ AI (Claude, Gemini) มาใช้ในขั้นตอนออกแบบ สำหรับสังเคราะห์งานวิจัย ร่าง User Flow เบื้องต้น และจัดทำเอกสาร — ลดระยะเวลาขั้นตอน Discovery ของฟีเจอร์ใหม่จากประมาณ 2 สัปดาห์ เหลือ 8–9 วัน",
    "experience.job1.group2.title": "แดชบอร์ด IoT และข้อมูลเชิงลึก",
    "experience.job1.group2.bullet1": "ออกแบบแดชบอร์ดตรวจสอบข้อมูลเซนเซอร์ IoT ในโรงงานอุตสาหกรรมด้วย Apache ECharts ช่วยให้ทีมปฏิบัติการตรวจพบความผิดปกติของระบบได้เร็วขึ้นราว 40% ระหว่างช่วงทดสอบนำร่อง",
    "experience.job1.group2.bullet2": "ทำงานร่วมกับทีม Frontend เพื่อกำหนดสเปกและรีวิวพฤติกรรมคอมโพเนนต์ใน React, Ant Design และ Tailwind CSS — มั่นใจว่าหน้าจอที่มีข้อมูลหนาแน่นยังคงประสิทธิภาพดีและไม่พังเมื่อรับโหลดข้อมูลเซนเซอร์จริง",
    "experience.job1.group3.title": "การประสานงานผู้มีส่วนได้ส่วนเสียและโปรเจกต์ภาครัฐ",
    "experience.job1.group3.bullet1": "จัดประชุมเก็บความต้องการโดยตรงกับ Product Owner และ Project Manager แปลงเป้าหมายทางธุรกิจระดับสูงให้เป็น User Flow และ Wireframe ความละเอียดสูงสำหรับโปรเจกต์ภาครัฐขนาดใหญ่",
    "experience.job1.group3.bullet2": "ออกแบบแดชบอร์ดติดตามสถานะแบบรวมศูนย์ให้ลูกค้าภาครัฐ โดยให้ความสำคัญกับ Accessibility และภาษาที่เข้าใจง่ายสำหรับผู้ใช้ทุกช่วงวัยและระดับความคุ้นเคยด้านเทคโนโลยี — ผลลัพธ์คือ Task Completion Rate เพิ่มขึ้น 30% จากการทำ Usability Testing (n=12)",
    "experience.job1.group3.bullet3": "นำเสนอการตัดสินใจด้านดีไซน์และข้อแลกเปลี่ยนต่างๆ ให้ผู้มีส่วนได้ส่วนเสียข้ามทีม (PM, PO, หัวหน้าทีมวิศวกรรม, ตัวแทนลูกค้า) เป็นประจำทุกสัปดาห์",

    "experience.job2.role": "UI Designer",
    "experience.job2.company": "Yes Web Design Studio Co., Ltd.",
    "experience.job2.date": "เม.ย. 2022 – ส.ค. 2022",
    "experience.job2.bullet1": "ออกแบบ UI ความละเอียดสูงให้เว็บไซต์ WordPress กว่า 3 เว็บไซต์ด้วย Figma ปรับแต่งเทมเพลตจาก ThemeForest ให้ตรงกับแบรนด์และเนื้อหาของลูกค้าแต่ละราย",
    "experience.job2.bullet2": "สร้างไลบรารีคอมโพเนนต์ที่นำกลับมาใช้ซ้ำได้และ Site Map ที่ช่วยลดเวลาออกแบบในโปรเจกต์ต่อเนื่อง พร้อมรักษาความสอดคล้องของภาพลักษณ์ในงานส่งมอบของสตูดิโอ",

    "experience.job3.role": "UI Designer (Internship)",
    "experience.job3.company": "Online Asset Co., Ltd.",
    "experience.job3.date": "พ.ย. 2021 – มี.ค. 2022",
    "experience.job3.bullet1": "ออกแบบ UI มือถือทั้งหมดให้แอป DR.in (แอปการแพทย์) ด้วย Adobe XD ตั้งแต่ Wireframe จนถึง Prototype ความละเอียดสูง และพัฒนาหน้าเว็บ Responsive ให้ SUSCO.co.th ด้วย HTML, CSS และ JavaScript",

    "skills.eyebrow": "สิ่งที่ผมทำ",
    "skills.title": "ทักษะและเครื่องมือ",
    "skills.desc": "ผสมผสานกลยุทธ์การออกแบบ วิธีวิจัย และเครื่องมือที่ผมใช้ทุกวันเพื่อสร้างไอเดียให้เป็นจริง",
    "skills.card1.title": "กลยุทธ์การออกแบบ",
    "skills.card1.desc": "Design System ที่ขยายตัวได้ (Tokens/Variables), Information Architecture, Service Blueprinting, การวางแผน Product Roadmap",
    "skills.card2.title": "UX Research",
    "skills.card2.desc": "Usability Testing, การทำ User Persona, User Flows, Site Maps, A/B Testing",
    "skills.card3.title": "Development",
    "skills.card3.desc": "React, Ant Design, shadcn/ui, Tailwind CSS, Apache ECharts, การส่งมอบงานจาก Design สู่ Code",
    "skills.card4.title": "AI Productivity",
    "skills.card4.desc": "Claude, Gemini, ChatGPT, Google Stitch — ใช้สังเคราะห์งานวิจัย, Prompt Engineering และทำ Prototype อย่างรวดเร็ว",
    "skills.card5.title": "เครื่องมือออกแบบ",
    "skills.card5.desc": "Figma (ระดับสูง), FigJam, Adobe XD",
    "skills.card6.title": "การทำงานร่วมกัน",
    "skills.card6.desc": "Jira, Miro, Slack",

    "work.eyebrow": "ผลงานคัดสรร",
    "work.title": "โปรเจกต์เด่น",
    "work.desc": "ตัวอย่าง Case Study ที่แสดงแนวทางการทำงานของผม ตั้งแต่การวิจัยจนถึง UI สุดท้าย",
    "work.filterAll": "ทั้งหมด",
    "work.filterMobile": "แอปมือถือ",
    "work.filterWeb": "เว็บแอป",
    "work.filterDesignSystem": "Design System",
    "work.viewCaseStudy": "ดู Case Study →",
    "work.card1.title": "Finza — แอปการเงินส่วนบุคคล",
    "work.card1.desc": "รีดีไซน์แอปการเงินส่วนบุคคลให้วางแผนงบประมาณง่ายขึ้น และเพิ่มการใช้งานประจำวัน",
    "work.card2.title": "Orbit — แดชบอร์ดอีคอมเมิร์ซ",
    "work.card2.desc": "แดชบอร์ดวิเคราะห์ข้อมูลที่ช่วยให้ผู้ขายติดตามผลการดำเนินงานได้ในหน้าจอเดียว",
    "work.card3.title": "Lumen — Design System",
    "work.card3.desc": "ไลบรารีคอมโพเนนต์รวมศูนย์ที่ช่วยรักษาความสอดคล้องของดีไซน์ในทีมโปรดักต์ทั้ง 5 ทีม",
    "work.card4.title": "Wanderly — แอปจองทริปท่องเที่ยว",
    "work.card4.desc": "ทำให้การวางแผนทริปง่ายขึ้นด้วยขั้นตอนการจองที่สนุกและมีเรื่องราว",
    "work.card5.title": "Vitalis — พอร์ทัลด้านสุขภาพ",
    "work.card5.desc": "ทำให้ประวัติผู้ป่วยและการนัดหมายเข้าถึงได้ง่ายสำหรับผู้ใช้ทุกช่วงวัย",
    "work.card6.title": "Nomly — แอปสั่งอาหารเดลิเวอรี่",
    "work.card6.desc": "ลดอัตราการทิ้งตะกร้าด้วยขั้นตอนการสั่งซื้อที่กระชับขึ้น",

    "process.eyebrow": "วิธีการทำงานของผม",
    "process.title": "กระบวนการออกแบบของผม",
    "process.desc": "กระบวนการที่มีโครงสร้างชัดเจนแต่ยืดหยุ่น โดยยึดผู้ใช้เป็นศูนย์กลางในทุกการตัดสินใจ",
    "process.step1.title": "ค้นหา",
    "process.step1.desc": "ทำความเข้าใจเป้าหมายทางธุรกิจ ผู้ใช้ และข้อจำกัด ผ่านการวิจัยและสัมภาษณ์ผู้มีส่วนได้ส่วนเสีย",
    "process.step2.title": "นิยามปัญหา",
    "process.step2.desc": "สังเคราะห์ผลการวิจัยให้เป็นโจทย์ที่ชัดเจน, User Flow และ Information Architecture",
    "process.step3.title": "ออกแบบ",
    "process.step3.desc": "สำรวจ Wireframe และแนวคิดภาพ แล้วพัฒนาเป็น Prototype ความละเอียดสูงที่พร้อมทดสอบ",
    "process.step4.title": "ส่งมอบ",
    "process.step4.desc": "ทดสอบกับผู้ใช้จริง ปรับปรุงซ้ำ และส่งมอบงานออกแบบที่พร้อมสำหรับนักพัฒนา",

    "contact.eyebrow": "ติดต่อผม",
    "contact.title": "มาสร้างสรรค์สิ่งดี ๆ ไปด้วยกัน",
    "contact.desc": "มีโปรเจกต์ในใจ หรือแค่อยากทักทาย? กล่องข้อความของผมเปิดรับเสมอ",

    "form.labelName": "ชื่อ",
    "form.labelEmail": "อีเมล",
    "form.labelSubject": "หัวข้อ",
    "form.labelMessage": "ข้อความ",
    "form.placeholderName": "ชื่อของคุณ",
    "form.placeholderEmail": "you@example.com",
    "form.placeholderSubject": "สอบถามเกี่ยวกับโปรเจกต์",
    "form.placeholderMessage": "เล่าเกี่ยวกับโปรเจกต์ของคุณ...",
    "form.sendBtn": "ส่งข้อความ",
    "form.successNote": "ขอบคุณที่ติดต่อมาครับ! ผมจะตอบกลับภายใน 1-2 วันทำการ",

    "footer.tagline": "UX/UI Designer ประจำกรุงเทพฯ ประเทศไทย",
    "footer.rights": "สงวนลิขสิทธิ์",

    "misc.resumeAlert": "นี่คือลิงก์ตัวอย่าง — กรุณาเปลี่ยนเป็นลิงก์ไฟล์เรซูเม่ PDF จริงของคุณ"
  }
};

const langToggle = document.getElementById('langToggle');
const langCurrent = document.getElementById('langCurrent');
const htmlRoot = document.documentElement;

function getLang() {
  return localStorage.getItem('lang') || 'en';
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value === undefined) return;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = dict[key];
    if (value !== undefined) el.setAttribute('placeholder', value);
  });

  langCurrent.textContent = lang.toUpperCase();
  htmlRoot.setAttribute('lang', lang === 'th' ? 'th' : 'en');

  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

applyLanguage(getLang());

langToggle.addEventListener('click', () => {
  const nextLang = getLang() === 'en' ? 'th' : 'en';
  localStorage.setItem('lang', nextLang);
  applyLanguage(nextLang);
});
