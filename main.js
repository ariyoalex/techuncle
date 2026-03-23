/* =========================================
   DATA
========================================= */
const PROJECTS = [
    { id: 'hotel', name: 'Abeam Marriott HMS', role: 'Full-Stack Developer', short: 'Hotel Management System, bookings, billing, staff', icon: 'fa-solid fa-hotel', gradient: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', desc: 'A full-featured Hotel Management System for Abeam Marriott Hotel. Covers room bookings, guest management, billing, housekeeping workflows, and management reporting with a secure admin dashboard.', tags: ['PHP', 'MySQL', 'Dashboard', 'Hospitality'], link: null },
    { id: 'hajj', name: 'HajjandUmrah.ng', role: 'Lead Developer and Architect', short: 'Travel booking web app with full admin console', icon: 'fa-solid fa-mosque', gradient: 'linear-gradient(135deg,#065f46,#34d399)', desc: 'Complete Hajj and Umrah travel booking platform with customer-facing site and full admin dashboard for managing pilgrim bookings, payments, travel packages, and agent operations.', tags: ['PHP', 'JavaScript', 'Web App', 'Admin Portal'], link: 'https://hajjandumrah.ng' },
    { id: 'tryvva', name: 'Tryvva', role: 'Founder and Lead Developer', short: 'AI-powered debt management platform', icon: 'fa-solid fa-robot', gradient: 'linear-gradient(135deg,#6d28d9,#a78bfa)', desc: 'An intelligent AI-powered debt management platform that automates collections workflows, analyzes borrower behavior using machine learning, and delivers improved recovery rates.', tags: ['AI', 'Python', 'LLM', 'FinTech', 'PostgreSQL'], link: null },
    { id: 'cofie', name: 'COFIE Portal', role: 'ICT Director, Connak Foundation', short: '11,000+ applicants onboarded with full e-learning platform', icon: 'fa-solid fa-graduation-cap', gradient: 'linear-gradient(135deg,#b45309,#fb923c)', desc: "Built end-to-end for Connak Foundation's entrepreneurship program. The portal handled 11,000+ applicant registrations and a full-featured e-learning platform delivering content to participants.", tags: ['PHP', 'MySQL', 'EdTech', 'NGO', 'LMS'], link: null },
    { id: 'vendors', name: 'Vendors Only', role: 'Full-Stack Developer, WeGoHostU', short: 'Nigeria-wide business listing and vendor marketplace', icon: 'fa-solid fa-store', gradient: 'linear-gradient(135deg,#1d4ed8,#4f8cff)', desc: 'A business listing and vendor marketplace platform connecting consumers to sellers across Nigeria. Vendors list services and products while buyers discover and contact them.', tags: ['PHP', 'MySQL', 'Marketplace', 'Nigeria'], link: 'https://vendorsonly.com.ng' },
    { id: 'lbs', name: 'LBS Impact Platform', role: 'Lead Developer, Ritedev Technologies', short: 'Lagos Business School impact showcase website', icon: 'fa-solid fa-building-columns', gradient: 'linear-gradient(135deg,#9d174d,#f472b6)', desc: "A professional institutional web platform for Lagos Business School's social impact division showcasing programs, initiatives, and outcomes with clean UX.", tags: ['WordPress', 'PHP', 'Institutional', 'UX'], link: 'https://lbsimpact.org' },
    { id: 'bades', name: 'Bades Group LLC', role: 'Lead Developer', short: 'US company operations platform and admin console', icon: 'fa-solid fa-flag', gradient: 'linear-gradient(135deg,#065f46,#10b981)', desc: 'Full web platform and admin console for a US-based business. The system centralizes operational management, user accounts, and reporting, accessible remotely.', tags: ['PHP', 'JavaScript', 'Enterprise', 'USA'], link: null },
    { id: 'ogunjobi', name: 'Ogunjobi Tech Hub', role: 'IT Engineer and Developer', short: 'Tech hub with NIN verification and ID card portal', icon: 'fa-solid fa-microchip', gradient: 'linear-gradient(135deg,#1e3a5f,#4f8cff)', desc: 'Built the full web platform and student enrollment portal. Integrated NIN API for real-time identity verification and designed an in-house ID card production portal.', tags: ['PHP', 'NIN API', 'Enrollment', 'ID System'], link: 'https://ogunjobitechhub.com' },
];

const BLOG = [{
        id: 1,
        cat: 'Tech and Dev',
        title: 'Why I Always Recommend PHP for Rapid Enterprise Development',
        excerpt: 'After 12+ years building for NGOs, hotels, fintechs and everything in between, here is why PHP stays in my toolkit.',
        gradient: 'linear-gradient(135deg,#1d4ed8,#3b82f6)',
        icon: 'fa-solid fa-code',
        readTime: '6 min',
        date: 'Mar 2025',
        body: `<p>I have built systems for hotels, fintech companies, NGOs, government-adjacent programs, and everything in between. And across all of it, PHP keeps showing up, not because it is perfect, but because it is <strong>practical</strong>.</p>
<h3>Speed to Production</h3>
<p>When a client needs a working product in three weeks, not three months, PHP with a solid framework lets you move fast without sacrificing structure. Laravel especially has matured into one of the cleanest developer experiences in any language ecosystem.</p>
<h3>The Hosting Reality in Africa</h3>
<p>Here in Nigeria, most clients are using shared hosting on cPanel. PHP runs natively everywhere. You do not have to fight infrastructure just to deploy.</p>
<h3>It Scales When You Need It To</h3>
<p>We ran the COFIE entrepreneurship portal on PHP  it onboarded 11,000+ applicants without falling over. Proper database indexing, caching, and connection pooling do more than the language choice itself.</p>
<h3>The Real Point</h3>
<p>Technology choice should serve the project, not the developer's ego. Use what solves the problem reliably. PHP solves a lot of problems, reliably, affordably, and fast. That is why it stays in my toolkit.</p>`
    },
    {
        id: 2,
        cat: 'Leadership',
        title: 'What Training 700+ Students Taught Me About Communication',
        excerpt: 'The biggest skill I developed from teaching was not writing better code. It was learning to explain things I take for granted.',
        gradient: 'linear-gradient(135deg,#6d28d9,#a78bfa)',
        icon: 'fa-solid fa-chalkboard-user',
        readTime: '8 min',
        date: 'Jan 2025',
        body: `<p>When you have been writing code for a decade, you stop seeing the invisible walls that stop beginners from understanding. You forget what it felt like to not know why a semicolon matters, or how a loop actually runs in the machine's head.</p>
<h3>Teaching Forces Clarity</h3>
<p>Training over 700 students at Connak Foundation forced me to rebuild my mental models from scratch. I had to find analogies that worked for people from every background, farmers, marketers, school leavers, graduates. Not one explanation works for everyone.</p>
<h3>The Curse of Knowledge</h3>
<p>There is a psychological concept called the curse of knowledge. Once you know something deeply, it is nearly impossible to imagine not knowing it. Good teachers fight this curse every day. The best engineers do too.</p>
<h3>What Changed in My Technical Work</h3>
<p>After years of teaching, I write better documentation. My API designs are more intuitive. My code reviews are more empathetic. I explain the why, not just the what.</p>
<p>If you get a chance to teach, take it. You will come out a stronger engineer and a more patient human being.</p>`
    },
    {
        id: 3,
        cat: 'FinTech',
        title: 'Building for Multiple Continents: Lessons from traQpay',
        excerpt: 'When your users are in Lagos, Sao Paulo, Jakarta, and Toronto simultaneously, architecture decisions take on a different weight.',
        gradient: 'linear-gradient(135deg,#065f46,#34d399)',
        icon: 'fa-solid fa-globe',
        readTime: '7 min',
        date: 'Nov 2024',
        body: `<p>At traQpay, I lead the technical architecture for a FinTech platform serving clients across Asia, North America, Africa, and Latin America. That means your system has to work reliably across wildly different regulatory environments, connectivity conditions, and user expectations simultaneously.</p>
<h3>Regulation is Not Optional</h3>
<p>What is acceptable data handling in one country can be a regulatory violation in another. Our team had to build compliance checks directly into the architecture, not bolt them on as an afterthought.</p>
<h3>Latency is a UX Problem</h3>
<p>A payment system that takes 8 seconds in Lagos because your servers are all in Virginia is a broken product, even if it technically works. We invested heavily in edge infrastructure and smart routing.</p>
<h3>The Lesson</h3>
<p>Global products are humbling. They force you to question assumptions you did not know you were making. Build with that humility from day one.</p>`
    },
    {
        id: 4,
        cat: 'Career',
        title: 'From ICT Director to CTO: How I Grew Without a Traditional Tech Path',
        excerpt: 'I did not follow the standard route. No big tech internship, no Silicon Valley path. Here is what the journey actually looked like.',
        gradient: 'linear-gradient(135deg,#b45309,#fb923c)',
        icon: 'fa-solid fa-arrow-trend-up',
        readTime: '5 min',
        date: 'Aug 2024',
        body: `<p>People sometimes assume my career followed a neat progression, junior developer, senior developer, lead, CTO. It did not. My path went through an NGO, a startup in Abia State, a relocation to Kwara State, remote work for a Japanese company, and eventually leading technology for a global fintech.</p>
<h3>Starting Where I Was</h3>
<p>I started at Connak Foundation as ICT Director, not because I had a polished CV, but because I showed up and built things. I built their website, their scholarship management system, their logistics tools. I made myself indispensable by solving real problems.</p>
<h3>The Power of Versatility</h3>
<p>Because I could not afford to specialize early, I became strong across multiple domains. Frontend, backend, servers, networks, product management, people management. That breadth became my biggest asset in leadership roles.</p>
<h3>What I Would Tell Younger Me</h3>
<ul>
  <li>Build real things, not just tutorials.</li>
  <li>Learn to communicate your work  writing and speaking matter as much as code.</li>
  <li>Your network in Nigeria is your biggest career accelerator. Protect it.</li>
  <li>Do not wait until you feel ready. You will never feel ready.</li>
</ul>`
    },
];

const GALLERY_FOLDERS = [{
        name: 'Work and Projects',
        count: 6,
        colors: ['#1d4ed8', '#065f46', '#6d28d9', '#b45309'],
        icon: 'fa-solid fa-laptop-code',
        photos: [
            { g: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', icon: 'fa-solid fa-hotel', cap: 'Abeam Marriott HMS, Admin Dashboard' },
            { g: 'linear-gradient(135deg,#065f46,#34d399)', icon: 'fa-solid fa-mosque', cap: 'HajjandUmrah.ng, Booking Platform' },
            { g: 'linear-gradient(135deg,#6d28d9,#a78bfa)', icon: 'fa-solid fa-robot', cap: 'Tryvva, AI Dashboard Interface' },
            { g: 'linear-gradient(135deg,#b45309,#fb923c)', icon: 'fa-solid fa-graduation-cap', cap: 'COFIE Portal, Applicant Dashboard' },
            { g: 'linear-gradient(135deg,#1e3a5f,#4f8cff)', icon: 'fa-solid fa-microchip', cap: 'Ogunjobi Tech Hub, Web Platform' },
            { g: 'linear-gradient(135deg,#9d174d,#f472b6)', icon: 'fa-solid fa-building-columns', cap: 'LBS Impact, Institutional Website' },
        ]
    },
    {
        name: 'Teaching and Training',
        count: 5,
        colors: ['#ea580c', '#1d4ed8', '#059669', '#6d28d9'],
        icon: 'fa-solid fa-chalkboard-user',
        photos: [
            { g: 'linear-gradient(135deg,#b45309,#fb923c)', icon: 'fa-solid fa-users', cap: '700+ students trained at Connak Foundation' },
            { g: 'linear-gradient(135deg,#1d4ed8,#4f8cff)', icon: 'fa-solid fa-chalkboard-user', cap: 'Software engineering hands-on session' },
            { g: 'linear-gradient(135deg,#065f46,#10b981)', icon: 'fa-solid fa-certificate', cap: 'Graduate batch, Skill acquisition program' },
            { g: 'linear-gradient(135deg,#9d174d,#f472b6)', icon: 'fa-solid fa-laptop', cap: 'Practical coding session, Ilorin' },
            { g: 'linear-gradient(135deg,#6d28d9,#a78bfa)', icon: 'fa-solid fa-award', cap: 'COFIE Entrepreneurship Program launch' },
        ]
    },
    {
        name: 'Tech and Community',
        count: 4,
        colors: ['#1e3a5f', '#065f46', '#7f1d1d', '#b45309'],
        icon: 'fa-solid fa-people-group',
        photos: [
            { g: 'linear-gradient(135deg,#1e3a5f,#4f8cff)', icon: 'fa-solid fa-people-group', cap: 'Tech community meetup, Ilorin' },
            { g: 'linear-gradient(135deg,#065f46,#34d399)', icon: 'fa-solid fa-handshake', cap: 'Partnership signing, Ritedev Technologies' },
            { g: 'linear-gradient(135deg,#7f1d1d,#ef4444)', icon: 'fa-solid fa-microphone', cap: 'Speaking at a tech event' },
            { g: 'linear-gradient(135deg,#b45309,#fb923c)', icon: 'fa-solid fa-building', cap: 'Ogunjobi Tech Hub, Office setup' },
        ]
    },
];

/* =========================================
   LOCK / UNLOCK  (session-based: survives reload, clears on tab close)
========================================= */
function unlockDesktop() {
    sessionStorage.setItem('techuncle-unlocked', '1');
    const ld = document.getElementById('lock-desktop');
    ld.classList.add('unlocking');
    setTimeout(() => {
        ld.style.display = 'none';
        document.getElementById('desktop-shell').style.display = 'flex';
        initDesktop();
    }, 450);
}

function unlockPhone() {
    sessionStorage.setItem('techuncle-unlocked', '1');
    const lp = document.getElementById('lock-phone');
    lp.classList.add('unlocking');
    setTimeout(() => {
        lp.style.display = 'none';
        document.getElementById('phone-shell').style.display = 'flex';
        initPhone();
    }, 380);
}

function lockDesktop() {
    sessionStorage.removeItem('techuncle-unlocked');
    document.getElementById('desktop-shell').style.display = 'none';
    const ld = document.getElementById('lock-desktop');
    ld.classList.remove('unlocking');
    ld.style.display = 'flex';
}

function lockPhone() {
    sessionStorage.removeItem('techuncle-unlocked');
    document.getElementById('phone-shell').style.display = 'none';
    const lp = document.getElementById('lock-phone');
    lp.classList.remove('unlocking');
    lp.style.display = 'flex';
}

function initShells() {
    const alreadyUnlocked = sessionStorage.getItem('techuncle-unlocked') === '1';
    const isDesktop = window.innerWidth >= 900;

    if (alreadyUnlocked) {
        // Skip lock screen entirely on reload
        document.getElementById('lock-desktop').style.display = 'none';
        document.getElementById('lock-phone').style.display = 'none';
        if (isDesktop) {
            document.getElementById('desktop-shell').style.display = 'flex';
            initDesktop();
        } else {
            document.getElementById('phone-shell').style.display = 'flex';
            initPhone();
        }
    } else {
        // First visit: show lock screen for the correct device
        if (isDesktop) {
            document.getElementById('lock-desktop').style.display = 'flex';
            document.getElementById('lock-phone').style.display = 'none';
        } else {
            document.getElementById('lock-phone').style.display = 'flex';
            document.getElementById('lock-desktop').style.display = 'none';
        }
    }
}

function initDesktop() {
    // Render about content immediately when shell becomes visible
    document.getElementById('desktop-content').innerHTML = buildAbout(true);
    document.getElementById('win-title').textContent = 'About Me  Techuncle';
    const firstItem = document.querySelector('.sb-item');
    if (firstItem) firstItem.classList.add('active');
}

function initPhone() {
    // Phone home screen is static HTML, nothing to render
}

/* =========================================
   CONTENT BUILDERS
========================================= */
function buildAbout(d) {
    if (d) return `
    <div class="d-hero">
      <div class="d-av-wrap">
        <img class="d-av-img" src="https://avatars.githubusercontent.com/u/25614557?v=4"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" alt="Alex"/>
        <div class="d-av-fb" style="display:none;">A</div>
        <div class="d-av-online"></div>
      </div>
      <div>
        <div class="d-name">Alex M. Ariyo</div>
        <div class="d-role">Technical Leader · Software Architect · CTO</div>
        <div class="d-loc"><i class="fa-solid fa-location-dot"></i> Ilorin, Kwara State, Nigeria · Open to Remote</div>
        <div class="tags" style="margin-top:12px;">
          <span class="tag">Fintech</span><span class="tag g">EdTech</span>
          <span class="tag p">AI/ML</span><span class="tag o">Cloud</span>
        </div>
      </div>
    </div>
    <p style="font-size:14px;color:var(--muted);line-height:1.9;margin-bottom:24px;max-width:640px;">
      Seasoned Technical Leader and Software Architect with <strong style="color:var(--text);">12+ years</strong> of experience building and scaling high-impact digital products across fintech, NGO, education, and enterprise sectors. Proven track record leading cross-functional engineering teams, designing secure and scalable systems, and delivering technology that drives measurable business growth.
    </p>
    <div class="d-stats">
      <div class="stat-box"><div class="stat-num">12+</div><div class="stat-lbl">Years Experience</div></div>
      <div class="stat-box"><div class="stat-num" style="color:var(--green);">700+</div><div class="stat-lbl">Students Trained</div></div>
      <div class="stat-box"><div class="stat-num" style="color:var(--accent2);">11k+</div><div class="stat-lbl">Platform Users</div></div>
      <div class="stat-box"><div class="stat-num" style="color:var(--orange);">8+</div><div class="stat-lbl">Companies Served</div></div>
    </div>
    ${buildContact()}`;

    return `
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
      <div style="position:relative;flex-shrink:0;">
        <img src="https://avatars.githubusercontent.com/u/25614557?v=4"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          style="width:64px;height:64px;border-radius:18px;object-fit:cover;border:2px solid #2563eb;display:block;" alt="Alex"/>
        <div style="display:none;width:64px;height:64px;border-radius:18px;background:linear-gradient(135deg,#2563eb,#7c3aed);align-items:center;justify-content:center;font-family:var(--font-head);font-size:22px;font-weight:700;color:#fff;border:2px solid #2563eb;">A</div>
        <div style="position:absolute;bottom:1px;right:1px;width:11px;height:11px;border-radius:50%;background:#22c55e;border:2px solid #0d0d11;"></div>
      </div>
      <div>
        <div style="font-family:var(--font-head);font-size:21px;font-weight:700;color:#f0f0f5;line-height:1.2;">Alex M. Ariyo</div>
        <div style="font-size:12px;color:#4f8cff;font-weight:500;margin-top:3px;">Technical Leader · CTO</div>
        <div style="font-size:11px;color:#8888a0;margin-top:2px;display:flex;align-items:center;gap:4px;"><i class="fa-solid fa-location-dot"></i> Ilorin, Kwara State</div>
      </div>
    </div>
    <p style="font-size:13px;color:#8888a0;line-height:1.8;margin-bottom:18px;">Seasoned Technical Leader and Software Architect with 12+ years building high-impact digital products across fintech, NGO, education, and enterprise sectors.</p>
    <div class="stats-row">
      <div class="stat-box"><div class="stat-num">12+</div><div class="stat-lbl">Years Exp</div></div>
      <div class="stat-box"><div class="stat-num" style="color:#34d399;">700+</div><div class="stat-lbl">Students</div></div>
      <div class="stat-box"><div class="stat-num" style="color:#a78bfa;">11k+</div><div class="stat-lbl">Users</div></div>
    </div>
    <div class="tags" style="margin-top:12px;">
      <span class="tag">Fintech</span><span class="tag g">EdTech</span><span class="tag p">AI/ML</span>
    </div>`;
}

function buildExperience() {
    const jobs = [{
            co: 'traQpay',
            role: 'Chief Technical Officer',
            dates: 'Feb 2024 to Present',
            loc: 'Remote',
            tags: ['AI', 'FinTech'],
            b: ['Led architecture of FinTech and AI solutions across Asia, Africa, North America and Latin America', 'Designed secure scalable transaction and loyalty systems for enterprise clients', 'Built and led distributed engineering teams across multiple time zones']
        },
        {
            co: 'WeGoHostU Web and App Services',
            role: 'Chief Technical Officer',
            dates: 'April 2017 to 2024',
            loc: 'Osogbo, Nigeria',
            tags: ['7 Years'],
            b: ['Built Hotel Management System (Abeam Marriott), POS for Club Rebel, Zeus Club web app', 'Delivered HajjandUmrah.ng with full admin dashboard', 'Reduced development timelines 30% via Agile and automation']
        },
        {
            co: 'Ogunjobi Tech Hub',
            role: 'IT Engineer and Tutor',
            dates: '2025 to Present',
            loc: 'Ilorin',
            tags: [],
            b: ['Built web platform and enrollment portal with NIN API verification', 'Designed in-house ID card production portal', 'Delivering hands-on software engineering training']
        },
        {
            co: 'Ritedev Technologies',
            role: 'Senior Full-Stack Engineer',
            dates: 'Dec 2012 to Present',
            loc: 'Remote',
            tags: [],
            b: ['Built polarbearbrands.com.gh, Ghana e-commerce platform', 'Developed platform for TRYCEED AFRICA NGO', 'Built AKH-Tracada Abuja platform and Hustle and Buzzle social growth tool']
        },
        {
            co: 'Connak Foundation',
            role: 'Program Manager to ICT Director',
            dates: 'Feb 2018 to Dec 2022',
            loc: 'Full-Time',
            tags: ['NGO', 'EdTech'],
            b: ['Trained 700+ students in software engineering', 'Built COFIE portal, 11,000+ applicants onboarded', 'Managed programs across 9 LGAs: job creation, healthcare, education']
        },
        {
            co: 'Traq',
            role: 'Product Manager',
            dates: 'Dec 2022 to Jan 2024',
            loc: 'Remote, Japan',
            tags: ['Japan'],
            b: ['Led debt collection software development', 'Integrated omni-channel payments and analytics', 'Managed seamless system migrations']
        },
    ];
    return jobs.map(j => `
    <div class="card">
      <div class="c-co">${j.co}</div>
      <div class="c-role">${j.role}</div>
      <div class="c-date"><i class="fa-regular fa-calendar"></i> ${j.dates} · ${j.loc}</div>
      <div class="c-body"><ul>${j.b.map(b => `<li>${b}</li>`).join('')}</ul></div>
      ${j.tags.length ? `<div class="tags" style="margin-top:10px;">${j.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
    </div>`).join('');
}

function buildProjects(phone) {
    if (phone) return PROJECTS.map(p => `
    <div class="pj-phone" onclick='openModal(${JSON.stringify(p).replace(/'/g,"&#39;")})'>
      <div class="pj-phone-ic" style="background:${p.gradient};"><i class="${p.icon}" style="color:#fff;"></i></div>
      <div style="flex:1;min-width:0;">
        <div class="pj-phone-name">${p.name}</div>
        <div class="pj-phone-short">${p.short}</div>
      </div>
      <i class="fa-solid fa-chevron-right" style="color:#8888a0;font-size:12px;flex-shrink:0;"></i>
    </div>`).join('');
    return `
    <div class="eyebrow">Selected Work</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:18px;">Click any card for full details.</p>
    <div class="proj-grid">
      ${PROJECTS.map(p => `
        <div class="pj-card" onclick='openModal(${JSON.stringify(p).replace(/'/g,"&#39;")})'>
          <div class="pj-thumb" style="background:${p.gradient};">
            <i class="${p.icon}" style="font-size:38px;color:rgba(255,255,255,.85);"></i>
          </div>
          <div class="pj-info">
            <div class="pj-name">${p.name}</div>
            <div class="pj-short">${p.short}</div>
          </div>
        </div>`).join('')}
    </div>`;
}

function buildSkills() {
    const groups = [
        ['Languages and Frameworks', ['PHP', 'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'HTML/CSS', 'React', 'Angular', 'Bootstrap', 'Tailwind CSS']],
        ['Databases and Cloud', ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes']],
        ['AI and Data', ['TensorFlow', 'PyTorch', 'LLM Integration', 'AI Solutions', 'Big Data', 'Power BI', 'Tableau']],
        ['Tools and Platforms', ['Figma', 'CorelDraw', 'WordPress', 'Postman', 'GitHub', 'cPanel', 'Sentry', 'FreeRADIUS']],
        ['Payments and APIs', ['Payment Gateways', 'REST APIs', 'NIN API', 'Omni-channel Payments']],
        ['Product and Leadership', ['Agile/Kanban', 'PRINCE2', 'PMP', 'Six Sigma', 'ITIL', 'Team Mentorship']],
    ];
    return groups.map(([t, c]) => `
    <div class="sg">
      <div class="sg-title">${t}</div>
      <div>${c.map(x => `<span class="chip">${x}</span>`).join('')}</div>
    </div>`).join('');
}

function buildCerts() {
    return [
        ['fa-solid fa-shield-halved', 'GIAC GCISP', 'Cyber Security Professional'],
        ['fa-solid fa-globe', 'Certified Internet Webmaster (CIW)', 'Web Developer'],
        ['fa-solid fa-robot', 'Building with AI', 'Saylor Academy, CS205'],
        ['fa-solid fa-lock', 'Information Security', 'Saylor Academy, CS406'],
        ['fa-brands fa-bitcoin', 'Bitcoin for Developers', 'Saylor Academy, CS120'],
        ['fa-solid fa-boxes-stacked', 'Product Management', 'SimpliLearn'],
        ['fa-solid fa-code', 'Responsive Web Design', 'freeCodeCamp'],
    ].map(([icon, name, iss]) => `
    <div class="cert-card">
      <div class="cert-ic"><i class="${icon}"></i></div>
      <div>
        <div style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:2px;">${name}</div>
        <div style="font-size:11px;color:var(--muted);">${iss}</div>
      </div>
    </div>`).join('');
}

function buildEducation() {
    return `
    <div class="card">
      <div class="c-co">The Federal Polytechnic, Offa</div>
      <div class="c-role">Higher National Diploma, Mass Communication</div>
      <div class="c-date"><i class="fa-regular fa-calendar"></i> Graduated August 2019</div>
    </div>
    <div class="card">
      <div class="c-co">National Youth Service Corps (NYSC)</div>
      <div class="c-role">Abia State</div>
      <div class="c-date"><i class="fa-regular fa-calendar"></i> November 2020</div>
    </div>`;
}

function buildContact() {
    const items = [
        { href: 'mailto:lxndrbrain@gmail.com', icon: 'fa-solid fa-envelope', bg: 'rgba(37,99,235,.11)', ic: 'var(--accent)', lbl: 'Email', val: 'lxndrbrain@gmail.com' },
        { href: 'https://wa.me/2348142256444', icon: 'fa-brands fa-whatsapp', bg: 'rgba(34,197,94,.11)', ic: '#22c55e', lbl: 'WhatsApp', val: '+234 814 225 6444' },
        { href: 'tel:+2349037390542', icon: 'fa-solid fa-phone', bg: 'rgba(5,150,105,.11)', ic: 'var(--green)', lbl: 'Phone', val: '+234 903 739 0542' },
        { href: 'https://linkedin.com/in/ariyo-ai', icon: 'fa-brands fa-linkedin', bg: 'rgba(37,99,235,.11)', ic: 'var(--accent)', lbl: 'LinkedIn', val: 'linkedin.com/in/ariyo-ai' },
        { href: 'https://github.com/alexariyo', icon: 'fa-brands fa-github', bg: 'rgba(0,0,0,.07)', ic: 'var(--text)', lbl: 'GitHub', val: 'github.com/alexariyo' },
    ];
    return items.map(c => `
    <a class="ct-item" href="${c.href}" target="_blank">
      <div class="ct-ic" style="background:${c.bg};"><i class="${c.icon}" style="color:${c.ic};"></i></div>
      <div><div class="ct-lbl">${c.lbl}</div><div class="ct-val">${c.val}</div></div>
      <i class="fa-solid fa-arrow-up-right-from-square" style="color:var(--muted);font-size:11px;margin-left:auto;"></i>
    </a>`).join('') +
        `<div style="margin-top:12px;background:rgba(37,99,235,.06);border:1px solid rgba(37,99,235,.14);border-radius:12px;padding:14px;font-size:13px;color:var(--muted);line-height:1.7;">
      <i class="fa-solid fa-location-dot" style="color:var(--accent);margin-right:6px;"></i>
      Ilorin, Kwara State, Nigeria · Open to relocation and remote worldwide
    </div>`;
}

function buildGames() {
    return `
    <div class="games-ph">
      <i class="fa-solid fa-gamepad gi"></i>
      <h3>Games Arcade</h3>
      <p>This space is reserved for upcoming interactive games. Check back soon.</p>
      <span class="games-badge"><i class="fa-solid fa-clock" style="margin-right:5px;"></i>Coming Soon</span>
    </div>`;
}

/* =========================================
   BLOG
========================================= */
function buildBlogDesktop() {
    return `
    <div class="eyebrow">Articles and Thoughts</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:20px;">Writing about tech, leadership, building in Africa, and lessons from the field.</p>
    <div id="blog-list-d" class="blog-grid">
      ${BLOG.map(b => `
        <div class="blog-card" onclick="openBlogDesktop(${b.id})">
          <div class="blog-cover" style="background:${b.gradient};">
            <i class="${b.icon}" style="font-size:44px;color:rgba(255,255,255,.8);"></i>
            <div class="blog-cover-tag">${b.cat}</div>
          </div>
          <div class="blog-card-body">
            <div class="blog-cat">${b.cat}</div>
            <div class="blog-title-card">${b.title}</div>
            <div class="blog-excerpt">${b.excerpt}</div>
            <div class="blog-meta"><i class="fa-regular fa-clock"></i> ${b.readTime} read · ${b.date}</div>
          </div>
        </div>`).join('')}
    </div>
    <div id="blog-reader-d" style="display:none;"></div>`;
}

function openBlogDesktop(id) {
    const b = BLOG.find(x => x.id === id);
    document.getElementById('blog-list-d').style.display = 'none';
    const r = document.getElementById('blog-reader-d');
    r.style.display = 'block';
    r.innerHTML = `
    <button class="blog-back-btn" onclick="closeBlogDesktop()"><i class="fa-solid fa-arrow-left"></i> All Posts</button>
    <div class="blog-article-cover" style="background:${b.gradient};">
      <i class="${b.icon}" style="font-size:70px;color:rgba(255,255,255,.85);"></i>
    </div>
    <div class="blog-article-cat">${b.cat}</div>
    <div class="blog-article-title">${b.title}</div>
    <div class="blog-article-meta">
      <span><i class="fa-regular fa-clock"></i> ${b.readTime} read</span>
      <span><i class="fa-regular fa-calendar"></i> ${b.date}</span>
    </div>
    <div class="blog-article-body">${b.body}</div>`;
}

function closeBlogDesktop() {
    document.getElementById('blog-list-d').style.display = 'grid';
    document.getElementById('blog-reader-d').style.display = 'none';
}

function buildBlogPhone() {
    return BLOG.map(b => `
    <div class="blog-phone-card" onclick="openBlogPhone(${b.id})">
      <div class="blog-phone-cover" style="background:${b.gradient};">
        <i class="${b.icon}" style="font-size:36px;color:rgba(255,255,255,.85);"></i>
      </div>
      <div class="blog-phone-body">
        <div class="blog-phone-cat">${b.cat}</div>
        <div class="blog-phone-title">${b.title}</div>
        <div class="blog-phone-excerpt">${b.excerpt}</div>
        <div class="blog-phone-meta"><i class="fa-regular fa-clock"></i> ${b.readTime} · ${b.date}</div>
      </div>
    </div>`).join('');
}

function openBlogPhone(id) {
    const b = BLOG.find(x => x.id === id);
    const view = document.getElementById('ph-app-view');
    document.getElementById('ph-app-title').textContent = b.title.substring(0, 28) + '...';
    document.getElementById('ph-app-body').innerHTML = `
    <button class="blog-back-btn" onclick="oa('blog')" style="color:#4f8cff;"><i class="fa-solid fa-arrow-left"></i> Blog</button>
    <div style="width:100%;height:160px;border-radius:14px;background:${b.gradient};display:flex;align-items:center;justify-content:center;margin-bottom:18px;">
      <i class="${b.icon}" style="font-size:52px;color:rgba(255,255,255,.85);"></i>
    </div>
    <div style="font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#4f8cff;margin-bottom:6px;">${b.cat}</div>
    <div style="font-family:var(--font-head);font-size:20px;font-weight:700;color:#f0f0f5;line-height:1.3;margin-bottom:10px;">${b.title}</div>
    <div style="display:flex;gap:14px;font-size:11px;color:#8888a0;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,.08);">
      <span><i class="fa-regular fa-clock"></i> ${b.readTime}</span>
      <span><i class="fa-regular fa-calendar"></i> ${b.date}</span>
    </div>
    <div style="font-size:13px;color:#8888a0;line-height:1.9;">
      ${b.body.replace(/<h3>/g,'<h3 style="font-family:var(--font-head);font-size:15px;font-weight:700;color:#f0f0f5;margin:20px 0 8px;">')
              .replace(/<p>/g,'<p style="margin-bottom:14px;">')
              .replace(/<ul>/g,'<ul style="margin:0 0 14px 18px;">')
              .replace(/<li>/g,'<li style="margin-bottom:6px;">')}
    </div>`;
    view.classList.add('active');
    view.scrollTop = 0;
}

/* =========================================
   GALLERY
========================================= */
function buildGalleryDesktop() {
    return `
    <div class="eyebrow">Photo Gallery</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:20px;">Click a folder to view photos.</p>
    <div id="gal-folders" class="gallery-desktop">
      ${GALLERY_FOLDERS.map((f, fi) => `
        <div class="gallery-folder" onclick="openGalleryFolder(${fi})">
          <div class="gf-preview">
            ${f.colors.map(c => `<div class="gf-preview-item" style="background:${c};"><i class="${f.icon}" style="color:rgba(255,255,255,.5);font-size:16px;"></i></div>`).join('')}
          </div>
          <div class="gf-name">${f.name}</div>
          <div class="gf-count">${f.count} items</div>
        </div>`).join('')}
    </div>
    <div id="gal-photos" style="display:none;"></div>`;
}

function openGalleryFolder(fi) {
    const f = GALLERY_FOLDERS[fi];
    document.getElementById('gal-folders').style.display = 'none';
    const gp = document.getElementById('gal-photos');
    gp.style.display = 'block';
    gp.innerHTML = `
    <button class="blog-back-btn" onclick="closeGalleryFolder()"><i class="fa-solid fa-arrow-left"></i> All Albums</button>
    <div style="font-family:var(--font-head);font-size:20px;font-weight:700;color:var(--text);margin-bottom:16px;">${f.name}</div>
    <div class="gallery-photos">
      ${f.photos.map((p, pi) => `
        <div class="gp-item" onclick="openLightbox(${fi},${pi})">
          <div class="gp-item-inner" style="background:${p.g};">
            <i class="${p.icon}" style="color:rgba(255,255,255,.75);"></i>
          </div>
        </div>`).join('')}
    </div>`;
}

function closeGalleryFolder() {
    document.getElementById('gal-folders').style.display = 'grid';
    document.getElementById('gal-photos').style.display = 'none';
}

function buildGalleryPhone() {
    const allPhotos = GALLERY_FOLDERS.flatMap((f, fi) => f.photos.map((p, pi) => ({ ...p, fi, pi })));
    return `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin:-18px;">
      ${allPhotos.map(p => `
        <div style="aspect-ratio:1;background:${p.g};display:flex;align-items:center;justify-content:center;cursor:pointer;transition:opacity .2s;"
          onclick="openLightbox(${p.fi},${p.pi})"
          onmouseenter="this.style.opacity='.8'" onmouseleave="this.style.opacity='1'">
          <i class="${p.icon}" style="font-size:28px;color:rgba(255,255,255,.75);"></i>
        </div>`).join('')}
    </div>`;
}

function openLightbox(fi, pi) {
    const p = GALLERY_FOLDERS[fi].photos[pi];
    document.getElementById('lb-img').innerHTML = `
    <div style="width:100%;height:400px;background:${p.g};border-radius:16px;display:flex;align-items:center;justify-content:center;">
      <i class="${p.icon}" style="font-size:90px;color:rgba(255,255,255,.8);"></i>
    </div>`;
    document.getElementById('lb-cap').textContent = p.cap;
    document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
}

/* =========================================
   PANEL MAP + NAVIGATION
========================================= */
const PANELS = {
    about: { title: 'About Me', d: () => buildAbout(true), p: () => buildAbout(false) },
    experience: { title: 'Experience', d: buildExperience, p: buildExperience },
    projects: { title: 'Projects', d: () => buildProjects(false), p: () => buildProjects(true) },
    skills: { title: 'Skills', d: buildSkills, p: buildSkills },
    certs: { title: 'Certifications', d: buildCerts, p: buildCerts },
    education: { title: 'Education', d: buildEducation, p: buildEducation },
    contact: { title: 'Contact', d: buildContact, p: buildContact },
    games: { title: 'Games Arcade', d: buildGames, p: buildGames },
    blog: { title: 'Blog', d: buildBlogDesktop, p: buildBlogPhone },
    gallery: { title: 'Gallery', d: buildGalleryDesktop, p: buildGalleryPhone },
};

function sp(el, key) {
    document.querySelectorAll('.sb-item').forEach(d => d.classList.remove('active'));
    if (el) el.classList.add('active');
    document.getElementById('win-title').textContent = PANELS[key].title + '  Techuncle';
    document.getElementById('desktop-content').innerHTML = PANELS[key].d();
    document.querySelectorAll('.taskbar-app').forEach(t => t.classList.remove('ta-active'));
}

function oa(key) {
    const view = document.getElementById('ph-app-view');
    document.getElementById('ph-app-title').textContent = PANELS[key].title;
    document.getElementById('ph-app-body').innerHTML = PANELS[key].p();
    view.classList.add('active');
    view.scrollTop = 0;
}

function closeApp() { document.getElementById('ph-app-view').classList.remove('active'); }

function goHome() { closeApp(); }

/* =========================================
   PROJECT MODAL
========================================= */
function openModal(p) {
    document.getElementById('modal-img-area').innerHTML = `
    <div class="modal-img-w" style="background:${p.gradient};">
      <i class="${p.icon}" style="font-size:60px;color:rgba(255,255,255,.85);"></i>
    </div>`;
    document.getElementById('modal-title').textContent = p.name;
    document.getElementById('modal-role').textContent = p.role;
    document.getElementById('modal-desc').textContent = p.desc;
    document.getElementById('modal-tags').innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('modal-link-area').innerHTML = p.link ?
        `<a class="modal-link" href="${p.link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Site</a>` :
        `<span style="font-size:12px;color:var(--muted);"><i class="fa-solid fa-lock" style="margin-right:5px;"></i>Private / Internal Project</span>`;
    document.getElementById('proj-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('proj-modal').classList.remove('open');
    document.body.style.overflow = '';
}

function handleModalBg(e) {
    if (e.target === document.getElementById('proj-modal')) closeModal();
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
        closeLightbox();
    }
});

/* =========================================
   THEME
========================================= */
function setTheme(mode) {
    const resolved = mode === 'system' ?
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') :
        mode;
    document.documentElement.setAttribute('data-theme', resolved);
    localStorage.setItem('techuncle-theme', mode);

    ['light', 'dark', 'system'].forEach(m => {
        const d = document.getElementById('tb-' + m);
        if (d) d.classList.toggle('active', m === mode);
        const p = document.getElementById('ptb-' + m);
        if (p) {
            p.style.background = m === mode ? 'var(--accent)' : 'rgba(255,255,255,.06)';
            p.style.color = m === mode ? '#fff' : '#8888a0';
        }
    });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (localStorage.getItem('techuncle-theme') === 'system') setTheme('system');
});

/* =========================================
   CLOCK
========================================= */
function tick() {
    const now = new Date();
    const t12 = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const t24 = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const mths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const ds = days[now.getDay()] + ', ' + mths[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();

    ['os-clock', 'phone-time', 'lp-time'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t12;
    });
    const bt = document.getElementById('lp-bigtime');
    if (bt) bt.textContent = t24;
    const lt = document.getElementById('ld-time');
    if (lt) lt.textContent = t24;
    ['ld-date', 'lp-date'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = ds;
    });
}

tick();
setInterval(tick, 10000);

/* =========================================
   INIT  runs on page load
========================================= */
const savedTheme = localStorage.getItem('techuncle-theme') || 'light';
setTheme(savedTheme);
initShells();