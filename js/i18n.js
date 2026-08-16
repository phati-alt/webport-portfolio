/* ============ i18n: EN / TH (studio edition) ============
   Self-contained — does not share state with the root site's js/i18n.js.
   Add a key here and reference it in the markup with data-i18n="key".
   Use data-i18n-html on the element when the value contains markup.        */

const translations = {
  en: {
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.process": "Process",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.eyebrow": "Available for freelance work",
    "hero.desc": "Hi, I'm Mick Yuttana — a UX/UI & Product Designer focused on simplifying complex systems into intuitive, trustworthy digital experiences.",
    "hero.ctaTalk": "Start a project",
    "hero.scroll": "Scroll down",
    "hero.scrollMarquee": "SCROLL DOWN • SCROLL DOWN • ",
    "hero.stat1": "Years Experience",
    "hero.stat2": "Faster Design Cycles",
    "hero.stat3": "Projects Delivered",
    "hero.stat4": "Task Completion Lift",

    "intro.pretitle": "Approach",
    "intro.text": "I design systems that people can actually trust. Strategy, interface, design systems, research, handover: five disciplines, one point of view. What we build together ends up in someone's working day — let's make that day better.",

    "work.eyebrow": "Cases",
    "work.title": "Results for products that hold up",
    "work.filterMobile": "Mobile App",
    "work.filterWeb": "Web App",
    "work.filterDesignSystem": "Design System",
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
    "work.moreProjects": "View more projects",

    "more.eyebrow": "More Projects",
    "more.title": "A few more things I've worked on",
    "more.desc": "Smaller projects and explorations that didn't get a full case study of their own.",

    "services.titleInline": "From strategy to handover",
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

    "about.eyebrow": "About me",
    "about.title": "I turn complex problems into simple, beautiful interfaces.",
    "about.text1": "UX/UI & Product Designer with 3+ years specializing in enterprise IoT and government platforms. I turn complex sensor data and operational workflows into interfaces that non-technical users can actually use.",
    "about.text2": "My Computer Science background lets me collaborate with engineers in their own language — and ship design systems that hold up at scale.",
    "about.list1": "User-Centered Design Process",
    "about.list2": "Cross-Platform Design Systems",
    "about.list3": "Data-Informed Design Decisions",
    "about.badgeLabel": "Years of<br>Experience",
    "about.resumeBtn": "Download Resume",

    "process.eyebrow": "How I work",
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
    "process.flow1": "Research uncovers the real problem worth solving",
    "process.flow2": "A sharp problem statement shapes what gets designed",
    "process.flow3": "Prototypes get tested before anything ships",
    "process.loop": "Feedback after launch often sends me back to Discover — the process rarely runs in a straight line.",

    "tools.pretitle": "Toolbox",

    "experience.eyebrow": "Career",
    "experience.title": "Work Experience",
    "experience.desc": "A timeline of roles where I've shipped real products, systems, and design processes.",
    "experience.job1.role": "UX/UI Designer",
    "experience.job1.company": "Swift Dynamics Co., Ltd.",
    "experience.job1.date": "Nov 2022 – Present",
    "experience.job1.group1.title": "Product Architecture & Design Systems",
    "experience.job1.group1.bullet1": "Led end-to-end UX/UI design for a construction and facility management platform, taking it from paper-based workflows to a fully digital ecosystem used across web and mobile.",
    "experience.job1.group1.bullet2": "Built and maintained a centralized Design System with Figma Variables, Tokens, and Auto-layout — reducing design-to-dev revision rounds from ~4 to 1–2 per feature.",
    "experience.job1.group1.bullet3": "Integrated AI tools (Claude, Gemini) into the design workflow — cutting the discovery phase on new features from ~2 weeks to 8–9 days.",
    "experience.job1.group2.title": "Data-Driven IoT & Custom Dashboards",
    "experience.job1.group2.bullet1": "Designed monitoring dashboards for industrial IoT sensor data using Apache ECharts, helping operations teams identify anomalies roughly 40% faster during pilot testing.",
    "experience.job1.group2.bullet2": "Partnered with frontend engineers to spec and review component behavior in React, Ant Design, and Tailwind CSS.",
    "experience.job1.group3.title": "Stakeholder Collaboration & Government Solutions",
    "experience.job1.group3.bullet1": "Ran requirement-gathering sessions directly with Product Owners and Project Managers for large-scale government projects.",
    "experience.job1.group3.bullet2": "Designed a unified status-tracking dashboard for a government client — a 30% lift in task completion rate during usability testing (n=12).",
    "experience.job1.group3.bullet3": "Presented design decisions and trade-offs to cross-functional stakeholders on a weekly basis.",
    "experience.job2.role": "UI Designer",
    "experience.job2.company": "Yes Web Design Studio Co., Ltd.",
    "experience.job2.date": "Apr 2022 – Aug 2022",
    "experience.job2.bullet1": "Designed high-fidelity UI for 3+ WordPress websites in Figma, customizing ThemeForest templates to match each client's brand.",
    "experience.job2.bullet2": "Built reusable component libraries and site maps that cut design time on follow-up projects.",
    "experience.job3.role": "UI Designer (Internship)",
    "experience.job3.company": "Online Asset Co., Ltd.",
    "experience.job3.date": "Nov 2021 – Mar 2022",
    "experience.job3.bullet1": "Designed the full mobile UI for DR.in (medical app) in Adobe XD and shipped responsive front-end pages for SUSCO.co.th.",

    "contact.eyebrow": "Get in touch",
    "contact.title": "Let's design your next product together.",
    "contact.desc": "Need a UX/UI or product designer for your next project<br>or just want to say hi? Email me directly below, I read and reply to every message myself.",
    "contact.wave": "👋 Say hi",

    "footer.tagline": "UX/UI & Product Designer based in Bangkok, Thailand.",
    "footer.nowPlaying": "Currently focused on",
    "footer.focusLine1": "Human-centered product design",
    "footer.focusLine2": "Design systems that scale",
    "footer.rights": "All rights reserved.",

    "misc.resumeAlert": "Resume placeholder — replace this link with your actual PDF resume.",

    "cs.meta.roleLabel": "Role",
    "cs.meta.timelineLabel": "Timeline",
    "cs.meta.platformLabel": "Platform",
    "cs.meta.toolsLabel": "Tools",
    "cs.overview.title": "The Problem",
    "cs.process.title": "Process",
    "cs.solution.title": "The Solution",
    "cs.results.title": "Results",
    "cs.next.label": "Next project",
    "cs.next.cta": "View case study",

    "a11y.switchLanguage": "Switch language",
    "a11y.toggleDarkMode": "Toggle dark mode",
    "a11y.menu": "Menu",
    "a11y.footerNav": "Footer"
  },

  th: {
    "nav.work": "ผลงาน",
    "nav.services": "บริการ",
    "nav.about": "เกี่ยวกับ",
    "nav.process": "กระบวนการ",
    "nav.experience": "ประสบการณ์",
    "nav.contact": "ติดต่อ",

    "hero.eyebrow": "พร้อมรับงานฟรีแลนซ์",
    "hero.desc": "สวัสดีครับ ผมมิค ยุทธนา — UX/UI & Product Designer ที่เน้นแปลงระบบซับซ้อนให้กลายเป็นประสบการณ์ดิจิทัลที่ใช้งานง่ายและน่าเชื่อถือ",
    "hero.ctaTalk": "เริ่มโปรเจกต์",
    "hero.scroll": "เลื่อนลง",
    "hero.scrollMarquee": "เลื่อนลง • เลื่อนลง • ",
    "hero.stat1": "ปีประสบการณ์",
    "hero.stat2": "รอบการออกแบบที่เร็วขึ้น",
    "hero.stat3": "โปรเจกต์ที่ส่งมอบ",
    "hero.stat4": "Task Completion ที่เพิ่มขึ้น",

    "intro.pretitle": "แนวทาง",
    "intro.text": "ผมออกแบบระบบที่ผู้ใช้ไว้วางใจได้จริง ทั้งกลยุทธ์ อินเทอร์เฟซ ดีไซน์ซิสเต็ม งานวิจัย และการส่งมอบ — ห้าด้าน แต่มุมมองเดียว สิ่งที่เราสร้างร่วมกันจะไปอยู่ในวันทำงานของใครสักคน มาทำให้วันนั้นดีขึ้นกันครับ",

    "work.eyebrow": "ผลงาน",
    "work.title": "ผลลัพธ์สำหรับโปรดักต์ที่ใช้งานได้จริง",
    "work.filterMobile": "แอปมือถือ",
    "work.filterWeb": "เว็บแอป",
    "work.filterDesignSystem": "Design System",
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
    "work.moreProjects": "ดูโปรเจกต์อื่นๆ",

    "more.eyebrow": "โปรเจกต์อื่นๆ",
    "more.title": "ผลงานอื่น ๆ ที่เคยทำ",
    "more.desc": "โปรเจกต์เล็ก ๆ และงานทดลองที่ยังไม่ได้ทำเป็น case study เต็มรูปแบบ",

    "services.titleInline": "ตั้งแต่กลยุทธ์จนถึงการส่งมอบ",
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

    "about.eyebrow": "เกี่ยวกับผม",
    "about.title": "ผมเปลี่ยนปัญหาที่ซับซ้อน ให้กลายเป็นอินเทอร์เฟซที่เรียบง่ายและสวยงาม",
    "about.text1": "UX/UI & Product Designer ที่มีประสบการณ์กว่า 3 ปี เชี่ยวชาญด้าน Enterprise IoT และแพลตฟอร์มภาครัฐ ผมเปลี่ยนข้อมูลเซนเซอร์ที่ซับซ้อนและขั้นตอนการทำงานให้กลายเป็นอินเทอร์เฟซที่ผู้ใช้ทั่วไปใช้งานได้จริง",
    "about.text2": "พื้นฐานด้าน Computer Science ทำให้ผมสื่อสารกับวิศวกรได้ในภาษาเดียวกัน และส่งมอบ Design System ที่รองรับการขยายตัวได้จริง",
    "about.list1": "กระบวนการออกแบบที่ยึดผู้ใช้เป็นศูนย์กลาง",
    "about.list2": "Design System ที่ใช้ได้ทุกแพลตฟอร์ม",
    "about.list3": "ตัดสินใจออกแบบโดยอ้างอิงข้อมูล",
    "about.badgeLabel": "ปีของ<br>ประสบการณ์",
    "about.resumeBtn": "ดาวน์โหลดเรซูเม่",

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
    "process.flow1": "งานวิจัยเผยให้เห็นปัญหาที่แท้จริงที่ควรแก้",
    "process.flow2": "โจทย์ที่ชัดเจนกำหนดทิศทางการออกแบบ",
    "process.flow3": "ต้นแบบผ่านการทดสอบก่อนส่งมอบทุกครั้ง",
    "process.loop": "ฟีดแบ็กหลังเปิดตัวมักพาผมย้อนกลับไปที่ Discover อีกครั้ง — กระบวนการนี้ไม่ใช่เส้นตรงเสมอไป",

    "tools.pretitle": "เครื่องมือที่ใช้",

    "experience.eyebrow": "เส้นทางอาชีพ",
    "experience.title": "ประสบการณ์การทำงาน",
    "experience.desc": "ไทม์ไลน์ตำแหน่งงานที่ผมได้ลงมือสร้างจริง ทั้งโปรดักต์ ระบบ และกระบวนการออกแบบ",
    "experience.job1.role": "UX/UI Designer",
    "experience.job1.company": "Swift Dynamics Co., Ltd.",
    "experience.job1.date": "พ.ย. 2022 – ปัจจุบัน",
    "experience.job1.group1.title": "สถาปัตยกรรมโปรดักต์และ Design Systems",
    "experience.job1.group1.bullet1": "นำการออกแบบ UX/UI แบบ end-to-end ให้แพลตฟอร์มบริหารงานก่อสร้างและการจัดการอาคาร เปลี่ยนจากขั้นตอนกระดาษให้กลายเป็นระบบดิจิทัลเต็มรูปแบบทั้งบนเว็บและมือถือ",
    "experience.job1.group1.bullet2": "สร้างและดูแล Design System ส่วนกลางด้วย Figma Variables, Tokens และ Auto-layout — ลดรอบการแก้ไขระหว่างดีไซน์กับเดฟจากประมาณ 4 รอบ เหลือ 1–2 รอบต่อฟีเจอร์",
    "experience.job1.group1.bullet3": "นำเครื่องมือ AI (Claude, Gemini) มาใช้ในขั้นตอนออกแบบ — ลดระยะเวลาขั้นตอน Discovery ของฟีเจอร์ใหม่จากประมาณ 2 สัปดาห์ เหลือ 8–9 วัน",
    "experience.job1.group2.title": "แดชบอร์ด IoT และข้อมูลเชิงลึก",
    "experience.job1.group2.bullet1": "ออกแบบแดชบอร์ดตรวจสอบข้อมูลเซนเซอร์ IoT ในโรงงานอุตสาหกรรมด้วย Apache ECharts ช่วยให้ทีมปฏิบัติการตรวจพบความผิดปกติได้เร็วขึ้นราว 40% ระหว่างช่วงทดสอบนำร่อง",
    "experience.job1.group2.bullet2": "ทำงานร่วมกับทีม Frontend เพื่อกำหนดสเปกและรีวิวพฤติกรรมคอมโพเนนต์ใน React, Ant Design และ Tailwind CSS",
    "experience.job1.group3.title": "การประสานงานผู้มีส่วนได้ส่วนเสียและโปรเจกต์ภาครัฐ",
    "experience.job1.group3.bullet1": "จัดประชุมเก็บความต้องการโดยตรงกับ Product Owner และ Project Manager สำหรับโปรเจกต์ภาครัฐขนาดใหญ่",
    "experience.job1.group3.bullet2": "ออกแบบแดชบอร์ดติดตามสถานะแบบรวมศูนย์ให้ลูกค้าภาครัฐ — Task Completion Rate เพิ่มขึ้น 30% จากการทำ Usability Testing (n=12)",
    "experience.job1.group3.bullet3": "นำเสนอการตัดสินใจด้านดีไซน์และข้อแลกเปลี่ยนให้ผู้มีส่วนได้ส่วนเสียข้ามทีมเป็นประจำทุกสัปดาห์",
    "experience.job2.role": "UI Designer",
    "experience.job2.company": "Yes Web Design Studio Co., Ltd.",
    "experience.job2.date": "เม.ย. 2022 – ส.ค. 2022",
    "experience.job2.bullet1": "ออกแบบ UI ความละเอียดสูงให้เว็บไซต์ WordPress กว่า 3 เว็บไซต์ด้วย Figma ปรับแต่งเทมเพลตจาก ThemeForest ให้ตรงกับแบรนด์ของลูกค้าแต่ละราย",
    "experience.job2.bullet2": "สร้างไลบรารีคอมโพเนนต์ที่นำกลับมาใช้ซ้ำได้และ Site Map ที่ช่วยลดเวลาออกแบบในโปรเจกต์ต่อเนื่อง",
    "experience.job3.role": "UI Designer (Internship)",
    "experience.job3.company": "Online Asset Co., Ltd.",
    "experience.job3.date": "พ.ย. 2021 – มี.ค. 2022",
    "experience.job3.bullet1": "ออกแบบ UI มือถือทั้งหมดให้แอป DR.in (แอปการแพทย์) ด้วย Adobe XD และพัฒนาหน้าเว็บ Responsive ให้ SUSCO.co.th",

    "contact.eyebrow": "ติดต่อผม",
    "contact.title": "มาออกแบบโปรดักต์ถัดไปด้วยกันครับ",
    "contact.desc": "กำลังมองหา UX/UI หรือ Product Designer สำหรับโปรเจกต์ถัดไป<br>หรือแค่อยากทักทาย? ส่งอีเมลมาหาผมได้เลยด้านล่างครับ ผมอ่านและตอบเองทุกข้อความ",
    "contact.wave": "👋 ทักทายกันครับ",

    "footer.tagline": "UX/UI & Product Designer ประจำกรุงเทพฯ ประเทศไทย",
    "footer.nowPlaying": "ตอนนี้กำลังโฟกัสกับ",
    "footer.focusLine1": "การออกแบบโปรดักต์ที่ยึดผู้ใช้เป็นศูนย์กลาง",
    "footer.focusLine2": "Design System ที่ขยายตัวได้จริง",
    "footer.rights": "สงวนลิขสิทธิ์",

    "misc.resumeAlert": "นี่คือลิงก์ตัวอย่าง — กรุณาเปลี่ยนเป็นลิงก์ไฟล์เรซูเม่ PDF จริงของคุณ",

    "cs.meta.roleLabel": "บทบาท",
    "cs.meta.timelineLabel": "ระยะเวลา",
    "cs.meta.platformLabel": "แพลตฟอร์ม",
    "cs.meta.toolsLabel": "เครื่องมือ",
    "cs.overview.title": "โจทย์ปัญหา",
    "cs.process.title": "กระบวนการทำงาน",
    "cs.solution.title": "ผลลัพธ์การออกแบบ",
    "cs.results.title": "ผลลัพธ์",
    "cs.next.label": "โปรเจกต์ถัดไป",
    "cs.next.cta": "ดู Case Study",

    "a11y.switchLanguage": "สลับภาษา",
    "a11y.toggleDarkMode": "สลับโหมดมืด",
    "a11y.menu": "เมนู",
    "a11y.footerNav": "ลิงก์ท้ายเว็บไซต์"
  }
};

const I18N = (() => {
  const toggle = document.getElementById('langToggle');
  const current = document.getElementById('langCurrent');
  const root = document.documentElement;

  const getLang = () => localStorage.getItem('studio-lang') || 'en';

  function t(key) {
    const dict = translations[getLang()] || translations.en;
    return dict[key] ?? translations.en[key];
  }

  function apply(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = dict[el.getAttribute('data-i18n')];
      if (value === undefined) return;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = value;
      else el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const value = dict[el.getAttribute('data-i18n-aria-label')];
      if (value !== undefined) el.setAttribute('aria-label', value);
    });

    if (current) current.textContent = lang.toUpperCase();
    root.setAttribute('lang', lang === 'th' ? 'th' : 'en');
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  apply(getLang());

  toggle?.addEventListener('click', () => {
    const next = getLang() === 'en' ? 'th' : 'en';
    localStorage.setItem('studio-lang', next);
    apply(next);
  });

  return { t, getLang, apply };
})();
