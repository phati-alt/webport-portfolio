/* ⚠ MOCKUP CONTENT — placeholder copy, not verified fact.
   Written from what each screenshot appears to show, so the modal has
   something real-shaped to render. Roles, years, clients, platforms and
   EVERY NUMBER below are invented and need replacing with what actually
   happened before this goes anywhere near a client or an employer.

   Unlike the case folders next to this one, this file is NOT generated —
   there is no CSV behind it. Edit it directly.

   Fields mirror content/cases.csv so the modal reads like a short case
   page: summary is the standfirst, then problem / process (+ quote) /
   solution, and two stats. One entry per image in assets/, keyed by the
   file's base name, with the same fields in en and th. */
window.MORE_PROJECTS = {
  'project-1': {
    en: {
      category: 'Facility Management',
      title: 'Work order templates for a maintenance platform',
      summary: 'Build a work order once, dispatch it to any asset — and let the technician in the field open the same structure the planner set up at a desk.',
      role: 'UX/UI Designer',
      year: '2023',
      platform: 'Web + iOS',
      problem: 'Every work order was being written from scratch, so the same recurring inspection was described differently by whoever happened to raise it. Reporting across sites was guesswork, because no two records used the same fields.',
      process: 'I mapped the orders teams actually repeated, and found most collapsed into a handful of shapes. That became a template: a form, a category and a checklist saved once, then reused wherever it applied. The mobile view was designed against the same location and asset tree rather than a simplified copy of it.',
      quote: 'Most of what looked like a hundred different jobs turned out to be six, repeated.',
      solution: 'Planners assemble templates on the web app; technicians open them in the field with the structure intact. Because both surfaces read the same tree, nothing has to be re-learned when work moves from planning to the floor.',
      stat1: '6 templates',
      stat1Label: 'Covered most recurring work',
      stat2: 'Web + iOS',
      stat2Label: 'One shared asset structure'
    },
    th: {
      category: 'ระบบบริหารอาคาร',
      title: 'เทมเพลตใบสั่งงานสำหรับแพลตฟอร์มงานซ่อมบำรุง',
      summary: 'สร้างใบสั่งงานครั้งเดียว ใช้กับอุปกรณ์ตัวไหนก็ได้ และช่างที่หน้างานเห็นโครงสร้างเดียวกับที่ผู้วางแผนตั้งไว้',
      role: 'UX/UI Designer',
      year: '2566',
      platform: 'เว็บ + iOS',
      problem: 'ใบสั่งงานทุกใบถูกเขียนขึ้นใหม่ทุกครั้ง งานตรวจรอบเดิม ๆ จึงถูกอธิบายไม่เหมือนกันแล้วแต่คนที่เปิดงาน การทำรายงานข้ามไซต์กลายเป็นการเดา เพราะไม่มีสองรายการไหนใช้ฟิลด์ชุดเดียวกัน',
      process: 'ผมไล่ดูใบสั่งงานที่ทีมทำซ้ำจริง ๆ แล้วพบว่าส่วนใหญ่ยุบลงเหลือไม่กี่รูปแบบ นั่นกลายเป็นเทมเพลต — ฟอร์ม หมวดหมู่ และเช็กลิสต์ที่บันทึกไว้ครั้งเดียว แล้วนำไปใช้ซ้ำได้ทุกที่ที่เกี่ยวข้อง ส่วนหน้าจอมือถือออกแบบบนโครงสร้างสถานที่และอุปกรณ์ชุดเดียวกัน ไม่ใช่เวอร์ชันย่อ',
      quote: 'สิ่งที่ดูเหมือนงานร้อยแบบ จริง ๆ แล้วคืองานหกแบบที่ทำซ้ำ',
      solution: 'ผู้วางแผนประกอบเทมเพลตบนเว็บ ช่างเปิดใช้ที่หน้างานโดยโครงสร้างยังครบ เพราะทั้งสองฝั่งอ่านโครงสร้างเดียวกัน จึงไม่ต้องเรียนรู้ใหม่เมื่องานย้ายจากการวางแผนไปสู่หน้างาน',
      stat1: '6 เทมเพลต',
      stat1Label: 'ครอบคลุมงานที่ทำซ้ำเกือบทั้งหมด',
      stat2: 'เว็บ + iOS',
      stat2Label: 'ใช้โครงสร้างอุปกรณ์ร่วมกัน'
    }
  },

  'project-2': {
    en: {
      category: 'IoT Monitoring',
      title: 'Gateway and device alerting dashboard',
      summary: 'One operations view for a fleet of gateways and sensors, readable from a control-room monitor and still usable on a tablet mid-walkthrough.',
      role: 'UX/UI Designer',
      year: '2023',
      platform: 'Web, tablet, mobile',
      problem: 'Alerts arrived as a flat list with no indication of severity or which device raised them, so triage meant opening records one at a time to find out whether anything mattered.',
      process: 'I put the counts that answer "is anything wrong right now" at the top, and rebuilt the alert row to carry its device, threshold and timestamp inline. For smaller screens the columns drop by priority instead of reflowing into cards, because a card list cannot be scanned the way a table can.',
      quote: 'A table you can scan beats a card list you have to read.',
      solution: 'The same layout holds on a control-room monitor, a tablet on a walkthrough and a phone, without a separate mobile design to keep in sync.',
      stat1: '3 breakpoints',
      stat1Label: 'One layout, no separate mobile build',
      stat2: 'Inline detail',
      stat2Label: 'Device and threshold on the alert row'
    },
    th: {
      category: 'ระบบติดตาม IoT',
      title: 'แดชบอร์ดแจ้งเตือนเกตเวย์และอุปกรณ์',
      summary: 'หน้าจอเดียวสำหรับดูแลเกตเวย์และเซนเซอร์จำนวนมาก อ่านได้จากจอห้องควบคุม และยังใช้บนแท็บเล็ตตอนเดินตรวจได้',
      role: 'UX/UI Designer',
      year: '2566',
      platform: 'เว็บ, แท็บเล็ต, มือถือ',
      problem: 'การแจ้งเตือนมาเป็นรายการเรียงยาวโดยไม่บอกระดับความรุนแรงหรืออุปกรณ์ต้นทาง การคัดกรองจึงต้องเปิดดูทีละรายการเพื่อดูว่าเรื่องไหนสำคัญจริง',
      process: 'ผมย้ายตัวเลขที่ตอบคำถาม "ตอนนี้มีอะไรผิดปกติไหม" ขึ้นไปบนสุด และออกแบบแถวแจ้งเตือนใหม่ให้บอกอุปกรณ์ ค่าเกณฑ์ และเวลาในแถวเดียว ส่วนจอเล็กจะตัดคอลัมน์ตามลำดับความสำคัญ แทนที่จะยุบเป็นการ์ด เพราะการ์ดกวาดตาอ่านไม่ได้เหมือนตาราง',
      quote: 'ตารางที่กวาดตาอ่านได้ ดีกว่าการ์ดที่ต้องไล่อ่านทีละใบ',
      solution: 'เลย์เอาต์ชุดเดียวใช้ได้ทั้งบนจอห้องควบคุม แท็บเล็ตตอนเดินตรวจ และมือถือ โดยไม่ต้องมีดีไซน์มือถือแยกให้ต้องคอยดูแลให้ตรงกัน',
      stat1: '3 Breakpoint',
      stat1Label: 'เลย์เอาต์เดียว ไม่ต้องทำมือถือแยก',
      stat2: 'ข้อมูลในแถว',
      stat2Label: 'อุปกรณ์และค่าเกณฑ์อยู่ในแถวแจ้งเตือน'
    }
  },

  'project-3': {
    en: {
      category: 'Government Service',
      title: 'Permit application system for the Royal Forest Department',
      summary: 'A multi-step permit workflow where each requirement is its own reviewable section, so an officer can see at a glance what is still missing.',
      role: 'UX/UI Designer',
      year: '2023',
      platform: 'Web',
      problem: 'A permit arrived as one long submission that had to be read end to end before anyone could tell whether it was complete, and location was typed in as coordinates — the single most common reason an application came back rejected.',
      process: 'I broke the application into sections that can each be reviewed and returned on their own, and replaced the coordinate field with a map. Applicants place a point; officers see the same point rather than a number they have to trust.',
      quote: 'Nobody should have to read a whole application to find the one field that is wrong.',
      solution: 'Reviewers work section by section and send back only the part that needs fixing, instead of returning the whole submission with a note attached.',
      stat1: 'Map input',
      stat1Label: 'Replaced typed coordinates',
      stat2: 'Section review',
      stat2Label: 'Return one part, not the whole form'
    },
    th: {
      category: 'บริการภาครัฐ',
      title: 'ระบบยื่นคำขออนุญาตของกรมป่าไม้',
      summary: 'ระบบยื่นคำขอแบบหลายขั้นตอน ที่แยกแต่ละข้อกำหนดเป็นส่วนตรวจได้อิสระ เจ้าหน้าที่จึงเห็นได้ทันทีว่ายังขาดอะไร',
      role: 'UX/UI Designer',
      year: '2566',
      platform: 'เว็บ',
      problem: 'คำขอมาเป็นเอกสารยาวชุดเดียวที่ต้องอ่านตั้งแต่ต้นจนจบก่อนจะรู้ว่าครบหรือไม่ และตำแหน่งที่ตั้งต้องพิมพ์เป็นพิกัดเอง ซึ่งเป็นสาเหตุอันดับหนึ่งที่ทำให้คำขอถูกตีกลับ',
      process: 'ผมแยกคำขอออกเป็นส่วน ๆ ที่ตรวจและส่งกลับได้ทีละส่วน และเปลี่ยนช่องกรอกพิกัดเป็นแผนที่ ผู้ยื่นปักหมุด เจ้าหน้าที่เห็นหมุดเดียวกัน ไม่ใช่ตัวเลขที่ต้องเชื่อว่าถูก',
      quote: 'ไม่ควรมีใครต้องอ่านคำขอทั้งฉบับ เพียงเพื่อหาช่องเดียวที่กรอกผิด',
      solution: 'เจ้าหน้าที่ตรวจทีละส่วนและส่งกลับเฉพาะส่วนที่ต้องแก้ แทนที่จะตีกลับทั้งฉบับพร้อมหมายเหตุแนบท้าย',
      stat1: 'เลือกจากแผนที่',
      stat1Label: 'แทนการพิมพ์พิกัดเอง',
      stat2: 'ตรวจรายส่วน',
      stat2Label: 'ส่งกลับเฉพาะส่วนที่ต้องแก้'
    }
  },

  'project-4': {
    en: {
      category: 'Environmental Dashboard',
      title: 'Water quality monitoring for Airports of Thailand',
      summary: 'Three headline numbers above the detail, so the daily check is one glance rather than a report to read.',
      role: 'UX/UI Designer',
      year: '2022',
      platform: 'Web',
      problem: 'Water-treatment readings from across airport facilities were published as full tables. Answering "is anything out of spec today" meant reading every row, every morning.',
      process: 'I separated the daily question from the underlying data: total readings, in-spec ratio and units needing attention as three figures at the top, with the tables kept underneath for when someone needs to look closer.',
      quote: 'The question every morning was never "what are all the numbers".',
      solution: 'The morning check became a glance at three figures. The tables stayed exactly as complete as before, just no longer the first thing anyone had to deal with.',
      stat1: '3 figures',
      stat1Label: 'Answer the daily check at a glance',
      stat2: 'Full tables',
      stat2Label: 'Kept underneath, nothing removed'
    },
    th: {
      category: 'แดชบอร์ดสิ่งแวดล้อม',
      title: 'ระบบติดตามคุณภาพน้ำ ท่าอากาศยานไทย (AOT)',
      summary: 'ตัวเลขสำคัญสามค่าอยู่เหนือรายละเอียด การตรวจประจำวันจึงใช้การมองครั้งเดียว ไม่ต้องไล่อ่านรายงาน',
      role: 'UX/UI Designer',
      year: '2565',
      platform: 'เว็บ',
      problem: 'ค่าที่วัดได้จากระบบบำบัดน้ำทั่วพื้นที่ท่าอากาศยานถูกแสดงเป็นตารางเต็ม การจะตอบว่า "วันนี้มีค่าไหนหลุดเกณฑ์ไหม" ต้องไล่อ่านทุกแถว ทุกเช้า',
      process: 'ผมแยกคำถามประจำวันออกจากข้อมูลดิบ — จำนวนการตรวจวัด สัดส่วนที่อยู่ในเกณฑ์ และจุดที่ต้องเข้าดูแล เป็นตัวเลขสามค่าไว้ด้านบน ส่วนตารางยังอยู่ด้านล่างสำหรับตอนที่ต้องดูละเอียด',
      quote: 'คำถามทุกเช้าไม่เคยเป็น "ตัวเลขทั้งหมดเป็นเท่าไร"',
      solution: 'การตรวจตอนเช้าเหลือแค่มองตัวเลขสามค่า ส่วนตารางยังครบเหมือนเดิมทุกประการ เพียงแต่ไม่ใช่สิ่งแรกที่ทุกคนต้องเจออีกต่อไป',
      stat1: '3 ตัวเลข',
      stat1Label: 'ตอบการตรวจประจำวันในครั้งเดียว',
      stat2: 'ตารางเต็ม',
      stat2Label: 'ยังอยู่ด้านล่าง ไม่ได้ตัดอะไรทิ้ง'
    }
  },

  'project-5': {
    en: {
      category: 'Health App',
      title: 'Vaccination and health record companion',
      summary: 'A record list a parent can scan without opening anything, because each card carries its own status colour.',
      role: 'UI Designer',
      year: '2022',
      platform: 'iOS + Android',
      problem: 'Vaccination history was a plain chronological list. Whether a dose was upcoming, done or overdue only became clear after tapping into the record.',
      process: 'I moved status onto the card itself as colour and label, and ordered the list by what needs attention next rather than strictly by date.',
      quote: 'People open this app to ask one question: what is due next.',
      solution: 'The list answers the question on its own. Opening a record became something you do to see detail, not to find out where you stand.',
      stat1: 'At a glance',
      stat1Label: 'Status on the card, not behind a tap',
      stat2: 'Sorted by due',
      stat2Label: 'Not strictly chronological'
    },
    th: {
      category: 'แอปสุขภาพ',
      title: 'แอปบันทึกวัคซีนและประวัติสุขภาพ',
      summary: 'รายการที่ผู้ปกครองกวาดตาดูได้เลยโดยไม่ต้องกดเข้าไป เพราะการ์ดแต่ละใบมีสีบอกสถานะในตัว',
      role: 'UI Designer',
      year: '2565',
      platform: 'iOS + Android',
      problem: 'ประวัติการฉีดวัคซีนเป็นรายการเรียงตามวันที่ธรรมดา จะรู้ว่าเข็มไหนถึงกำหนด ฉีดแล้ว หรือเลยกำหนด ต้องกดเข้าไปดูในรายการก่อน',
      process: 'ผมย้ายสถานะขึ้นมาไว้บนการ์ดในรูปของสีและป้ายกำกับ และเรียงรายการตามสิ่งที่ต้องจัดการก่อน แทนที่จะเรียงตามวันที่อย่างเดียว',
      quote: 'คนเปิดแอปนี้ขึ้นมาถามคำถามเดียว — รายการถัดไปคืออะไร',
      solution: 'รายการตอบคำถามนั้นได้ด้วยตัวเอง การกดเข้าไปดูกลายเป็นเรื่องของการดูรายละเอียด ไม่ใช่การหาว่าตอนนี้อยู่ตรงไหนแล้ว',
      stat1: 'เห็นในครั้งเดียว',
      stat1Label: 'สถานะอยู่บนการ์ด ไม่ได้ซ่อนหลังการกด',
      stat2: 'เรียงตามกำหนด',
      stat2Label: 'ไม่ได้เรียงตามวันที่อย่างเดียว'
    }
  },

  'project-6': {
    en: {
      category: 'Procurement App',
      title: 'Purchase request tracking on mobile',
      summary: 'Requester, department, PO number and time on one card — the four things people were actually searching for.',
      role: 'UX/UI Designer',
      year: '2024',
      platform: 'iOS + Android',
      problem: 'The mobile list mirrored the desktop table column for column, so the fields people scanned for were spread across a row that never fit, and filters sat behind a menu.',
      process: 'I watched what people searched by and cut the card down to those four fields. Filters moved to the top of the list, because narrowing is the first action on this screen every single time.',
      quote: 'Filtering was not a feature here — it was step one, every time.',
      solution: 'A card that carries what people look for, and filters where the hand already is. Everything else moved into the detail view where there is room for it.',
      stat1: '4 fields',
      stat1Label: 'What people actually searched by',
      stat2: 'Filters first',
      stat2Label: 'Top of the list, not behind a menu'
    },
    th: {
      category: 'แอปงานจัดซื้อ',
      title: 'ติดตามคำขอจัดซื้อบนมือถือ',
      summary: 'ผู้ขอ หน่วยงาน เลขที่ PO และเวลา อยู่ในการ์ดเดียว — สี่อย่างที่คนค้นหาจริง ๆ',
      role: 'UX/UI Designer',
      year: '2567',
      platform: 'iOS + Android',
      problem: 'รายการบนมือถือลอกคอลัมน์มาจากตารางบนเดสก์ท็อปทั้งชุด ฟิลด์ที่คนกวาดตาหาจึงกระจายอยู่ในแถวที่ไม่เคยแสดงได้ครบ และตัวกรองก็ถูกซ่อนอยู่ในเมนู',
      process: 'ผมดูว่าคนค้นหาด้วยอะไรจริง ๆ แล้วตัดการ์ดให้เหลือสี่ฟิลด์นั้น ส่วนตัวกรองย้ายขึ้นมาบนสุดของรายการ เพราะการกรองคือสิ่งแรกที่ทุกคนทำในหน้านี้ ทุกครั้ง',
      quote: 'การกรองไม่ใช่ฟีเจอร์เสริมในหน้านี้ — มันคือขั้นตอนแรก ทุกครั้ง',
      solution: 'การ์ดที่มีสิ่งที่คนมองหา และตัวกรองอยู่ตรงที่มืออยู่แล้ว ส่วนข้อมูลที่เหลือย้ายไปหน้ารายละเอียดซึ่งมีพื้นที่พอ',
      stat1: '4 ฟิลด์',
      stat1Label: 'สิ่งที่คนใช้ค้นหาจริง',
      stat2: 'ตัวกรองมาก่อน',
      stat2Label: 'อยู่บนสุด ไม่ได้ซ่อนในเมนู'
    }
  },

  'project-7': {
    en: {
      category: 'Lifestyle App',
      title: 'Num Eiang — Chinese auspicious date calendar',
      summary: 'A red-and-gold almanac language, kept ornamental enough to feel right and plain enough to still read a date.',
      role: 'UI Designer',
      year: '2022',
      platform: 'iOS + Android',
      problem: 'Traditional almanac layouts are dense with ornament, and early drafts inherited enough of it that the date itself — the reason anyone opens a calendar — stopped being the first thing you saw.',
      process: 'I kept the red-and-gold palette and the motifs, but confined them to backgrounds and headers so type could stay plain where it carries information. The auspicious-date picker moved to its own tab rather than layering onto the calendar.',
      quote: 'Keep the ornament. Just not on top of the date.',
      solution: 'The home screen reads as a calendar first and an almanac second, and picking an auspicious date is a deliberate trip to its own tab instead of a second layer competing for the same screen.',
      stat1: '2 surfaces',
      stat1Label: 'Calendar and picker kept separate',
      stat2: 'Ornament framed',
      stat2Label: 'Backgrounds and headers only'
    },
    th: {
      category: 'แอปไลฟ์สไตล์',
      title: 'นำเอียง — ปฏิทินฤกษ์มงคลจีน',
      summary: 'ภาษาภาพแบบปฏิทินจีนโทนแดง-ทอง ที่ยังมีลวดลายพอให้ได้อารมณ์ แต่เรียบพอที่จะอ่านวันที่ออก',
      role: 'UI Designer',
      year: '2565',
      platform: 'iOS + Android',
      problem: 'ปฏิทินจีนแบบดั้งเดิมมีลวดลายหนาแน่น และแบบร่างช่วงแรกรับมาเยอะพอที่ทำให้ "วันที่" ซึ่งเป็นเหตุผลที่คนเปิดปฏิทิน ไม่ใช่สิ่งแรกที่ตาเห็นอีกต่อไป',
      process: 'ผมเก็บโทนแดง-ทองและลวดลายไว้ แต่จำกัดให้อยู่แค่พื้นหลังและหัวข้อ เพื่อให้ตัวอักษรส่วนที่ทำหน้าที่ให้ข้อมูลยังเรียบอยู่ ส่วนหน้าเลือกฤกษ์ย้ายไปเป็นแท็บของตัวเอง แทนที่จะซ้อนทับลงบนปฏิทิน',
      quote: 'เก็บลวดลายไว้ได้ แค่อย่าวางทับบนวันที่',
      solution: 'หน้าแรกอ่านได้ว่าเป็นปฏิทินก่อน แล้วค่อยเป็นปฏิทินฤกษ์ และการเลือกฤกษ์กลายเป็นการตั้งใจไปที่แท็บของมัน ไม่ใช่อีกชั้นที่มาแย่งพื้นที่หน้าจอเดียวกัน',
      stat1: '2 หน้าจอ',
      stat1Label: 'แยกปฏิทินกับหน้าเลือกฤกษ์',
      stat2: 'คุมลวดลาย',
      stat2Label: 'อยู่แค่พื้นหลังและหัวข้อ'
    }
  }
};
