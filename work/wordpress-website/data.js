/* HAND-WRITTEN — this case is excluded from the generated pipeline
   (see tools/build-cases.ps1's $customSlugs and css/insight-panels.css).
   It is NOT touched by that script, so it is safe to edit directly.

   Shape matches every generated data.js on purpose — window.CASE_DATA
   = { en: {...}, th: {...} }, read by js/i18n.js through
   data-i18n-case. Content is the same real material this case had in
   content/cases.csv (git history, slug wordpress-website — the slug
   predates the JST rename and was kept so the URL didn't move) before
   this redesign — reorganised into the Insight Panel layout, not
   rewritten.

   No testimonialQuote here on purpose: the project was delivered as
   design and an interactive prototype and never entered development
   in the period covered, so there is no one on the other end to
   quote — inventing one would misrepresent it. Same reason stat1-4
   are shown as plain counts with no progress bars: pages/breakpoints/
   prototypes/headcount aren't percentages. */
window.CASE_DATA = {
  en: {
    category: "Website",
    title: "JST Group",
    summary: "A corporate website redesign with a recruitment section added - so a candidate can see the open roles and knows where to go, rather than hunting for the way in.",
    coverAlt: "JST Group website shown on desktop, tablet and mobile",

    role: "UX/UI Designer — solo, design and prototype",
    timeline: "Under 1 month",
    platform: "Corporate website — desktop, tablet, mobile",
    tools: "Figma",
    client: "JST Group",

    contextText: "A corporate site redesign covering four main pages across three breakpoints, plus an interactive prototype - designed end to end by one person inside a month. Delivered at the design and prototype stage; the project did not enter development during the period I was responsible for it.",

    problemIntro: "One site, two audiences who want opposite things — and a month to make both of them feel it was built for them.",
    prob1Title: "The Brief",
    prob1Text: "JST Group wanted their corporate site redesigned with a recruitment section added. Two things had to hold: the site had to read as a credible organisation, and a visitor had to see the open roles and know where to go to apply or leave their portfolio.",
    prob2Title: "The Constraint",
    prob2Text: "Four pages, three breakpoints and a prototype, designed alone in under a month. Deciding what to spend the time on was part of the design work, not something separate from it.",
    goalTitle: "The Goal",
    goalText: "Make the organisation read as credible, and make the way in obvious — for the client looking for a service and the candidate looking for a role alike, without either walking through the other's content.",

    processText: "The brief came in clear, and with a month and no one else on it, the leverage was in structure rather than exploration: separate the two audiences at navigation level, then build one set of patterns — section header, service card, statistic block, CTA band — and run every page off them. An interactive prototype came with the handover, because the brief was about where the entrances are, and that is a question static screens answer badly.",
    quote: "The brief was about entrances — where do I click. Static screens answer that badly; a prototype answers it in one session.",

    solutionIntro: "The site had to serve two people arriving for opposite reasons, inside a month, built by one person. Every decision below follows from those two facts.",
    sol1Title: "Two audiences, kept apart", sol1Text: "Corporate clients and job candidates arrive wanting different things. Their entrances are separated at navigation level, so neither has to walk through the other's content to reach their own.",
    sol2Title: "Jobs seen, not searched for", sol2Text: "Featured jobs sit on the homepage and the recruitment page with a filter, rather than behind a submenu. A candidate does not have to look for them.",
    sol3Title: "Two ways to apply", sol3Text: "Someone who found the right role and someone interested in the company but not in any listed role need different entrances. Having both means the second group is not lost.",
    sol4Title: "Credibility you can point at", sol4Text: "B2B trust is built from things that can be checked, so statistics, certifications, a client testimonial and the full service list sit where a visitor passes them.",
    sol5Title: "One pattern set, reused", sol5Text: "With under a month and no one else on it, every page runs off the same section header, service card, statistic block and CTA band. Consistency came from the system, and new pages cost less than the first one.",

    dec1Title: "Red, black and white", dec1Why: "Carried from JST's existing brand identity — direct and confident, which suits an industrial business.",
    dec2Title: "A hexagon motif", dec2Why: "One repeating shape across the site gives it something to be remembered by, and the geometry sits naturally beside engineering work.",
    dec3Title: "Photographs, not illustration", dec3Why: "HR and industrial businesses sell credibility. People at work photograph as real in a way drawings do not.",
    dec4Title: "Statistics set large", dec4Why: "A figure reads faster than a paragraph. Scale is communicated in seconds rather than sentences.",
    dec5Title: "A CTA band closing every page", dec5Why: "Nobody should reach the bottom of a page with nowhere to go next.",

    resultsText: "Delivered as design and an interactive prototype. The project did not go into development during the period I was responsible for it, so there are no production figures to report — the numbers below are the scope that was delivered.",
    stat1: "4", stat1Label: "Pages designed",
    stat2: "3", stat2Label: "Device breakpoints",
    stat3: "1", stat3Label: "Interactive prototype",
    stat4: "1", stat4Label: "Designer, end to end",

    showcase1Caption: "Homepage — hero, statistics, services, featured jobs and news",
    showcase2Caption: "Recruitment — services, HR solutions, process, testimonials and FAQ",
    showcase3Caption: "HR Solutions — the service list and what the organisation brings to it",
    showcase4Caption: "Job Search — filter by role, location and type, on tablet and mobile",

    reflect1Title: "A corporate site rarely has one audience", reflect1Text: "I had thought of corporate work as an organisation presenting itself. Adding recruitment showed that one site can owe something to two groups with nothing in common — and that this belongs in the structure, not in a later fix.",
    reflect2Title: "A prototype is a way of speaking", reflect2Text: "Letting people click through settled where do I press and what comes next in one session — far faster than describing it, and it is not a bonus deliverable.",
    reflect3Title: "Alone and on a deadline, choosing is the work", reflect3Text: "Four pages across three breakpoints in under a month forced an early decision about where the effort went. Investing in a reusable pattern set rather than designing each page separately is systems thinking before there is a design system to call it that.",
    reflect4Title: "Brand and usability both have to win", reflect4Text: "Clients in this space weigh how the company looks as heavily as how the site works. The job is finding where the two agree, not picking one.",

    nextTitle: "Department of Groundwater Resources",
    dataStatus: "real"
  },

  th: {
    category: "เว็บไซต์",
    title: "JST Group",
    summary: "รีดีไซน์เว็บไซต์องค์กร พร้อมเพิ่มส่วน Recruitment เข้ามา ให้ผู้สมัครเห็นตำแหน่งงานว่างและรู้ว่าต้องเข้าจุดไหน แทนที่จะต้องไล่หาทางเข้าเอง",
    coverAlt: "เว็บไซต์ JST Group บนเดสก์ท็อป แท็บเล็ต และมือถือ",

    role: "UX/UI Designer — ทำคนเดียว ทั้งออกแบบและ Prototype",
    timeline: "ภายใน 1 เดือน",
    platform: "เว็บไซต์องค์กร — เดสก์ท็อป แท็บเล็ต มือถือ",
    tools: "Figma",
    client: "JST Group",

    contextText: "รีดีไซน์เว็บไซต์องค์กร ครอบคลุม 4 หน้าหลัก บน 3 ขนาดหน้าจอ พร้อม Interactive Prototype ออกแบบทั้งหมดคนเดียวภายในหนึ่งเดือน ส่งมอบในขั้น Design และ Prototype โปรเจกต์ไม่ได้เข้าสู่ขั้นพัฒนาในช่วงที่ผมรับผิดชอบ",

    problemIntro: "เว็บเดียว ผู้ใช้สองกลุ่มที่ต้องการคนละอย่าง และมีเวลาหนึ่งเดือนให้ทั้งคู่รู้สึกว่าเว็บนี้ทำมาเพื่อเขา",
    prob1Title: "โจทย์",
    prob1Text: "JST Group ต้องการรีดีไซน์เว็บไซต์องค์กร โดยเพิ่มส่วน Recruitment เข้ามาใหม่ โจทย์หลักมีสองข้อ — เว็บต้องสื่อสารความน่าเชื่อถือขององค์กรได้ และผู้ใช้ต้องเห็นตำแหน่งงานที่ว่าง พร้อมรู้ว่าต้องเข้าจุดไหนหากจะสมัครงานหรือฝากผลงาน",
    prob2Title: "ข้อจำกัด",
    prob2Text: "4 หน้า 3 ขนาดหน้าจอ และ Prototype ออกแบบคนเดียวภายในไม่ถึงหนึ่งเดือน การตัดสินใจว่าจะลงแรงตรงไหนจึงเป็นส่วนหนึ่งของงานออกแบบ ไม่ใช่เรื่องแยกต่างหาก",
    goalTitle: "เป้าหมาย",
    goalText: "ทำให้องค์กรอ่านออกว่าน่าเชื่อถือ และทำให้ทางเข้าชัดเจน ทั้งสำหรับลูกค้าที่มองหาบริการ และผู้สมัครที่มองหาตำแหน่งงาน โดยไม่มีใครต้องเดินผ่านเนื้อหาของอีกฝ่าย",

    processText: "โจทย์จากลูกค้าชัดอยู่แล้ว และด้วยเวลาหนึ่งเดือนโดยไม่มีคนอื่นในทีม จุดที่ได้ผลที่สุดคือโครงสร้าง ไม่ใช่การทดลอง — แยกผู้ใช้สองกลุ่มตั้งแต่ระดับ Navigation แล้วสร้าง Pattern กลางชุดเดียว ทั้ง Section Header, Service Card, Statistic Block และ CTA Band แล้วให้ทุกหน้าเดินจากชุดนั้น พร้อมส่งมอบ Interactive Prototype ไปด้วย เพราะโจทย์คือเรื่องทางเข้าอยู่ตรงไหน ซึ่งเป็นคำถามที่ภาพนิ่งตอบได้ไม่ดี",
    quote: "โจทย์คือเรื่องทางเข้า — ต้องกดตรงไหน ภาพนิ่งตอบคำถามนี้ได้ไม่ดี แต่ Prototype ตอบได้จบในรอบเดียว",

    solutionIntro: "เว็บนี้ต้องรับใช้คนสองกลุ่มที่เข้ามาด้วยเหตุผลตรงข้ามกัน ภายในหนึ่งเดือน และสร้างโดยคนคนเดียว ทุกการตัดสินใจด้านล่างมาจากข้อเท็จจริงสองข้อนี้",
    sol1Title: "แยกผู้ใช้สองกลุ่มไม่ให้ทับกัน", sol1Text: "ลูกค้าองค์กรกับผู้สมัครงานเข้ามาด้วยเป้าหมายคนละอย่าง ทางเข้าของทั้งสองกลุ่มจึงถูกแยกตั้งแต่ระดับ Navigation ไม่มีใครต้องเดินผ่านเนื้อหาของอีกฝ่ายเพื่อไปถึงส่วนของตัวเอง",
    sol2Title: "เห็นตำแหน่งงาน ไม่ใช่ต้องไปหา", sol2Text: "Featured Jobs อยู่บนหน้าหลักและหน้า Recruitment พร้อมตัวกรอง แทนที่จะซ่อนไว้หลังเมนูย่อย ผู้สมัครจึงไม่ต้องค้นหา",
    sol3Title: "ทางเข้าสมัครงานสองแบบ", sol3Text: "คนที่เจอตำแหน่งตรงใจแล้ว กับคนที่สนใจองค์กรแต่ยังไม่มีตำแหน่งที่ตรง ต้องการทางเข้าคนละแบบ การมีทั้งสองทางทำให้ไม่เสียกลุ่มที่สองไป",
    sol4Title: "ความน่าเชื่อถือที่ชี้ให้ดูได้", sol4Text: "ความน่าเชื่อถือแบบ B2B สร้างจากสิ่งที่ตรวจสอบได้ ตัวเลของค์กร ใบรับรอง คำรับรองจากลูกค้า และรายการบริการทั้งหมด จึงวางอยู่ในจุดที่ผู้เข้าชมต้องผ่านสายตา",
    sol5Title: "ชุด Pattern เดียว ใช้ซ้ำทั้งเว็บ", sol5Text: "ด้วยเวลาไม่ถึงเดือนและไม่มีคนอื่นในทีม ทุกหน้าจึงเดินจาก Section Header, Service Card, Statistic Block และ CTA Band ชุดเดียวกัน ความสม่ำเสมอมาจากตัวระบบเอง และหน้าใหม่แต่ละหน้าใช้แรงน้อยกว่าหน้าแรก",

    dec1Title: "แดง ดำ ขาว", dec1Why: "ต่อยอดจาก Brand Identity เดิมของ JST ตรงไปตรงมาและมั่นใจ เหมาะกับธุรกิจสายอุตสาหกรรม",
    dec2Title: "ลวดลายหกเหลี่ยม", dec2Why: "รูปทรงเดียวที่ซ้ำทั้งเว็บ ทำให้มีภาพจำ และเรขาคณิตแบบนี้อยู่ข้างงานวิศวกรรมได้อย่างเป็นธรรมชาติ",
    dec3Title: "ภาพถ่ายจริง ไม่ใช่ภาพวาด", dec3Why: "ธุรกิจ HR และอุตสาหกรรมขายความน่าเชื่อถือ ภาพคนทำงานจริงให้ความรู้สึกจริงในแบบที่ภาพวาดให้ไม่ได้",
    dec4Title: "ตัวเลขตั้งขนาดใหญ่", dec4Why: "ตัวเลขอ่านเร็วกว่าย่อหน้า ขนาดขององค์กรจึงสื่อได้ในไม่กี่วินาที แทนที่จะต้องอ่านเป็นประโยค",
    dec5Title: "ปิดทุกหน้าด้วย CTA Band", dec5Why: "ไม่ควรมีใครเลื่อนถึงล่างสุดของหน้าแล้วไม่มีทางไปต่อ",

    resultsText: "ส่งมอบเป็นงานออกแบบและ Interactive Prototype โปรเจกต์ไม่ได้เข้าสู่ขั้นพัฒนาในช่วงที่ผมรับผิดชอบ จึงไม่มีตัวเลขจากการใช้งานจริงให้รายงาน ตัวเลขด้านล่างคือขอบเขตงานที่ส่งมอบ",
    stat1: "4", stat1Label: "หน้าที่ออกแบบ",
    stat2: "3", stat2Label: "ขนาดหน้าจอที่รองรับ",
    stat3: "1", stat3Label: "Interactive Prototype",
    stat4: "1", stat4Label: "ผู้ออกแบบ ตั้งแต่ต้นจนจบ",

    showcase1Caption: "หน้าหลัก — Hero ตัวเลของค์กร บริการ ตำแหน่งงานเด่น และข่าวสาร",
    showcase2Caption: "Recruitment — บริการ HR Solutions ขั้นตอน คำรับรอง และคำถามที่พบบ่อย",
    showcase3Caption: "HR Solutions — รายการบริการ และสิ่งที่องค์กรมีให้",
    showcase4Caption: "ค้นหางาน — กรองตามตำแหน่ง สถานที่ และประเภทงาน บนแท็บเล็ตและมือถือ",

    reflect1Title: "เว็บองค์กรมักมีผู้ใช้มากกว่าหนึ่งกลุ่ม", reflect1Text: "ผมเคยมองงานเว็บองค์กรว่าเป็นการนำเสนอองค์กรฝ่ายเดียว การมี Recruitment เข้ามาทำให้เห็นว่าเว็บเดียวอาจต้องรับใช้คนสองกลุ่มที่ไม่มีอะไรร่วมกันเลย และเรื่องนี้ควรอยู่ในโครงสร้าง ไม่ใช่มาแก้ทีหลัง",
    reflect2Title: "Prototype คือเครื่องมือสื่อสาร", reflect2Text: "การให้คนได้คลิกเล่นจริง ทำให้คำถามว่ากดตรงไหนและหน้าถัดไปเป็นยังไง จบได้ในรอบเดียว เร็วกว่าการอธิบายมาก และมันไม่ใช่ของแถม",
    reflect3Title: "ทำคนเดียวในเวลาจำกัด การเลือกคืองาน", reflect3Text: "4 หน้า 3 ขนาดจอ ในเวลาไม่ถึงเดือน บังคับให้ต้องตัดสินใจแต่เนิ่น ๆ ว่าจะลงแรงตรงไหน การลงทุนกับชุด Pattern ที่ใช้ซ้ำได้ แทนการออกแบบทีละหน้าแยกกัน คือการคิดเชิงระบบ ก่อนที่จะมีสิ่งที่เรียกว่า Design System เสียอีก",
    reflect4Title: "แบรนด์กับการใช้งานต้องได้ทั้งคู่", reflect4Text: "ลูกค้ากลุ่มนี้ให้น้ำหนักกับภาพลักษณ์ไม่น้อยกว่าการใช้งานง่าย งานคือการหาจุดที่ทั้งสองอย่างไปด้วยกันได้ ไม่ใช่การเลือกอย่างใดอย่างหนึ่ง",

    nextTitle: "กรมทรัพยากรน้ำบาดาล",
    dataStatus: "real"
  }
};
