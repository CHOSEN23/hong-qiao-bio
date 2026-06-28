// ════════════════════════════════════════════════════════════════════════
//  SITE CONTENT — this is the only file you need to edit the website text.
//
//  HOW TO EDIT
//  • Change the text inside the quotes:   name: 'Hong Qiao'
//  • Keep the quotes, colons, and commas — those are what keep it working.
//  • Lists live between [ ] brackets. To add an item, copy a whole block
//    (between { and },) and edit it. To remove one, delete that block.
//  • In the "body"/"intro"/"note"/"desc" fields you can use Markdown:
//        **bold text**        *italic text*        [link text](https://…)
//    Separate paragraphs with one blank line.
//
//  After you save, the open browser tab updates automatically.
// ════════════════════════════════════════════════════════════════════════

export interface NewsLink     { label: string; url: string; }
export interface Publication  {
  authors: string;
  title:   string;
  venue:   string;
  year:    number;
  link:    string;
  isLead:  boolean;          // true = Hong is first author / equal contributor
  preprint?: boolean;        // true = show a "PREPRINT" badge
  news?:   NewsLink[];       // optional press / news links
}
export interface AwardItem      { year: string; title: string; desc: string; link?: string; }
export interface ExperienceItem { role: string; org: string; period: string; desc: string; highlight?: boolean; orgLink?: string; }
export interface ResearchCard   { title: string; desc: string; image?: string; link?: string; }  // image = filename in research-figs/; link = paper URL

export const content = {

  // ── Top navigation ────────────────────────────────────────────────────
  nav: {
    brand: '乔宏 · Hong Qiao',
    // Each item also scrolls to the matching section below.
    items: ['About', 'Research', 'Publications', 'Awards', 'Experience', 'Contact'],
  },

  // ── Hero (the banner at the very top) ─────────────────────────────────
  hero: {
    eyebrow:     'HYBRID QUANTUM LAB · PEKING UNIVERSITY · INSTITUTE OF QUANTUM SCIENCE AND TECHNOLOGY',
    name:        'Hong Qiao',
    nameZh:      '乔宏',
    badge:       '',
    appointment: 'Assistant Professor, Peking University',
    education:   'PhD 2024, University of Chicago · B.S. 2019, Peking University',
    email:       'qiaohong@pku.edu.cn',
    scholarUrl:  'https://scholar.google.com/citations?user=yf8M9z4AAAAJ&hl=en',
  },

  // ── About section ─────────────────────────────────────────────────────
  about: {
    heading: 'About',
    // Whole bio. Blank line = new paragraph. Markdown allowed (see top).
    body: `I am an experimental physicist working at the frontier of **quantum acoustics**, **superconducting qubits**, and **hybrid quantum systems**. My research uses individual quanta of sound — *phonons* — as the primary carriers of quantum information, establishing a new paradigm for scalable quantum information processing built from mechanical systems coupled to superconducting circuits.

I recently started as an Assistant Professor at **Peking University**, where I will establish the **Hybrid Quantum Lab**. I completed my PhD at the [Cleland Lab](https://clelandlab.uchicago.edu/), University of Chicago (2024), where I explored a new platform for phonon-based quantum computing: a phonon beam splitter and the first demonstration of the acoustic version of the Hong–Ou–Mandel effect,  phonon phase gates and Mach-Zehnder interferometry, number-resolving phonon detection, and multi-phonon entanglement across seperate mechanical resonators. I did a brief postdoc in the [Quantum Device Group](https://quantumdevices.berkeley.edu/) at UC Berkeley, towards coupling silicon nanomechanics to merged-element transmons. Before my PhD, I studied at **Peking University** (B.S. in Physics, 2019) and conducted research with Prof. Qiongyi He and Prof. Heng Fan.`,
  },

  // ── Research section (the dark image band) ────────────────────────────
  research: {
    eyebrow: 'Research',
    // image = a filename in the research-figs/ folder. Swap a figure by
    // replacing that file (keep the same name), or point to a new file.
    cards: [
      {
        title: 'Macroscopic Quantum Physics',
        desc: `Testing how macroscopic mechanical motion obey quantum mechanics.
We realized a phonon beamsplitter fully integrated with superconducting qubits and use it to demonstrate Hong–Ou–Mandel interference of individual acoustic phonons.
(Science 2023)`,
        image: 'fundamental.jpg',
        link: 'https://www.science.org/doi/10.1126/science.adg8715',
      },      
      {
        title: 'Quantum Information Processing with Flying Phonons',
        desc: `A complete toolbox for Linear Mechanical Quantum Computing (LMQC) —
beam splitters, phase gates, and number-resolving detection —
the acoustic analog of linear optical quantum computing.
(Nature Physics 2025)`,
        image: 'qip.png',
        link: 'https://www.nature.com/articles/s41567-025-03027-z',
      },
      {
        title: 'Distributed Multi-phonon Entanglement',
        desc: `We deterministically entangled multiple phonons across two mechanical resonators
on separate substrates and reconstructed the multi-phonon entangled states
by full quantum state tomography.
(Nature Communications 2025)`,
        image: 'hybrid.jpg',
        link: 'https://www.nature.com/articles/s41467-025-56454-0',
      },
      {
        title: 'Quantum Random Access Memory (QRAM)',
        desc: `A hardware-efficient QRAM architecture in which a tree of transmon qubits
routes flying phonons to address quantum memory in superposition —
a key resource for quantum algorithms.
(Physical Review Letters 2025)`,
        image: 'qram.png',
        link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.210601',
      },
    ] as ResearchCard[],
  },

  // ── Publications section ──────────────────────────────────────────────
  publications: {
    heading: 'Publications',
    // Papers are grouped by year automatically. Newest year shows first.
    items: [
      {
        authors: 'M. Diego*, H. Qiao*, B. Kim, M. Ryu, S. Li, G. Andersson, M. Nomura, and A. N. Cleland',
        title:   'Gigahertz-frequency lamb wave resonator cavities on suspended lithium niobate for quantum acoustics',
        venue:   'arXiv:2601.13509',
        year:    2026,
        link:    'https://arxiv.org/abs/2601.13509',
        isLead:  true,
        preprint: true,
      },
      {
        authors: 'H. Qiao, Z. Wang, G. Andersson, A. Anferov, C. R. Conner, Y. J. Joshi, S. Li, J. M. Miller, X. Wu, H. Yan, L. Jiang, and A. N. Cleland',
        title:   'Acoustic phonon phase gates with number-resolving phonon detection',
        venue:   'Nature Physics, 21(11):1801–1805',
        year:    2025,
        link:    'https://www.nature.com/articles/s41567-025-03027-z',
        isLead:  true,
        news: [
          { label: 'Press Release', url: 'https://pme.uchicago.edu/news/tomorrows-quantum-computers-could-use-sound-not-light' },
        ],
      },
      {
        authors: 'M.-H. Chou*, H. Qiao*, H. Yan, G. Andersson, C. R. Conner, J. Grebel, Y. J. Joshi, J. M. Miller, R. G. Povey, X. Wu, and A. N. Cleland',
        title:   'Deterministic multi-phonon entanglement between two mechanical resonators on separate substrates',
        venue:   'Nature Communications, 16(1):1450',
        year:    2025,
        link:    'https://www.nature.com/articles/s41467-025-56454-0',
        isLead:  true,
        news: [
          { label: 'UChicago News', url: 'https://news.uchicago.edu/story/uchicago-scientists-make-major-advance-quantum-sound' },
        ],
      },
      {
        authors: 'Z. Wang*, H. Qiao*, A. N. Cleland, and L. Jiang',
        title:   'Quantum random access memory with transmon-controlled phonon routing',
        venue:   'Physical Review Letters, 134(21):210601',
        year:    2025,
        link:    'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.210601',
        isLead:  true,
        news: [
          { label: 'Phys.org',      url: 'https://phys.org/news/2025-06-quantum-random-access-memory-based.html' },
          { label: 'Press Release', url: 'https://pme.uchicago.edu/news/new-architecture-quantum-ram' },
        ],
      },
      {
        authors: 'H.-K. Lau, H. Qiao, A. A. Clerk, and T. Zhong',
        title:   'Efficient in situ generation of photon-memory entanglement in a nonlinear cavity',
        venue:   'Physical Review Letters, 134:053602',
        year:    2025,
        link:    'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.053602',
        isLead:  false,
      },
      {
        authors: 'X. Wu, H. Yan, G. Andersson, A. Anferov, M.-H. Chou, C. R. Conner, J. Grebel, Y. J. Joshi, S. Li, J. M. Miller, R. G. Povey, H. Qiao, and A. N. Cleland',
        title:   'Modular quantum processor with an all-to-all reconfigurable router',
        venue:   'Physical Review X, 14(4):041030',
        year:    2024,
        link:    'https://journals.aps.org/prx/abstract/10.1103/PhysRevX.14.041030',
        isLead:  false,
      },
      {
        authors: 'J. Grebel, H. Yan, M.-H. Chou, G. Andersson, C. R. Conner, Y. J. Joshi, J. M. Miller, R. G. Povey, H. Qiao, X. Wu, and A. N. Cleland',
        title:   'Bidirectional multiphoton communication between remote superconducting nodes',
        venue:   'Physical Review Letters, 132(4):047001',
        year:    2024,
        link:    'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.132.047001',
        isLead:  false,
      },
      {
        authors: 'H. Qiao, É. Dumur, G. Andersson, H. Yan, M.-H. Chou, J. Grebel, C. R. Conner, Y. J. Joshi, J. M. Miller, R. G. Povey, X. Wu, and A. N. Cleland',
        title:   'Splitting phonons: Building a platform for linear mechanical quantum computing',
        venue:   'Science, 380(6649):1030–1033',
        year:    2023,
        link:    'https://www.science.org/doi/10.1126/science.adg8715',
        isLead:  true,
        news: [
          { label: 'Nature Research Highlights', url: 'https://www.nature.com/articles/d41586-023-01896-z' },
          { label: 'Physics Magazine',           url: 'https://physics.aps.org/articles/v16/99' },
          { label: 'Press Release',              url: 'https://pme.uchicago.edu/news/researchers-split-phonons-or-sound-step-toward-new-type-quantum-computer' },
        ],
      },
      {
        authors: 'H. Qiao, Z.-H. Sun, F.-X. Sun, L.-Z. Mu, Q. He, and H. Fan',
        title:   'Diagonal entropy and topological phase transitions in extended Kitaev chains',
        venue:   'Annals of Physics, 411:167967',
        year:    2019,
        link:    'https://www.sciencedirect.com/science/article/pii/S0003491619302222',
        isLead:  true,
      },
    ] as Publication[],
    thesis: {
      label:  'PhD Thesis:',
      title:  'A New Platform for Hybrid Quantum Computing with Individual Quanta of Sound',
      url:    'https://knowledge.uchicago.edu/record/13961',
      suffix: ' — University of Chicago, 2024',
    },
  },

  note: '\\* denotes equal contribution. [See Google Scholar for full list →](https://scholar.google.com/citations?user=yf8M9z4AAAAJ&hl=en)',

  // ── Awards & Honors section ───────────────────────────────────────────
  awards: {
    heading: 'Awards & Honors',
    items: [
      {
        title: 'Boeing Quantum Creators Prize',
        year:  '2025',
        desc:  'Awarded by the Chicago Quantum Exchange; presented at the Chicago Quantum Summit, Convene Willis Tower, November 2025.',
        link:  'https://pme.uchicago.edu/news/quantum-sound-researcher-earns-boeing-quantum-creators-prize',
      },
      {
        title: 'NSF QISE-NET Fellow',
        year:  '2020',
        desc:  'Quantum Information Science and Engineering Network fellowship directed by David Awschalom and Evelyn Hu.',
        link:  'https://qisenet.uchicago.edu/',
      }
    ] as AwardItem[],
  },
  
  // ── Experience & Education section (the timeline) ─────────────────────
  experience: {
    heading: 'Experience & Education',
    // highlight: true  draws the entry in crimson (use for the current/incoming role).
    items: [
      {
        role:      'Assistant Professor',
        org:       'Institute of quantum science and technology, Peking University',
        orgLink:   'https://www.phy.pku.edu.cn/',
        period:    '2026.7 –',
        highlight: true,
        desc:      '',
      },
      {
        role:    'Postdoctoral Researcher',
        org:     'EECS, UC Berkeley — Sipahigil Lab',
        orgLink: 'https://quantumdevices.berkeley.edu/',
        period:  '2026',
        desc:    'Advisor: Prof. Alp Sipahigil. Coupling silicon nanomechanics to merged-element-transmon qubits for scalable hybrid quantum system.',
      },
      {
        role:    'Postdoctoral Researcher',
        org:     'University of Chicago — Cleland Lab',
        period:  '2025 – 2026',
        desc:    'Developing QRAM unit experimentally and working on TFLN quantum acoustics devices.',
      },
      {
        role:    'PhD in Quantum Science and Engineering',
        org:     'University of Chicago — Cleland Lab',
        orgLink: 'https://clelandlab.uchicago.edu/',
        period:  'Sep 2019 – Dec 2024',
        desc:    "Advisor: Prof. Andrew Cleland. (1) Designed and fabricated a phonon beam splitter — complete toolbox for Linear Mechanical Quantum Computing (LMQC). (2) First Hong–Ou–Mandel effect in a macroscopic mechanical quantum system. (3) Deterministic phonon phase gates with number-resolving detection. (4) Multi-phonon NOON state tomography in two mechanical resonators. (5) Theoretical study of QRAM via transmon-controlled phonon routing (with Liang Jiang's group). (6) Fabrication of suspended thin-film LiNbO₃ resonators (collaboration with UTokyo)",
      },
      {
        role:    'B.S. in Physics',
        org:     'School of Physics, Peking University',
        orgLink: 'https://www.phy.pku.edu.cn/',
        period:  'Sep 2015 – Jul 2019',
        desc:    'Undergrad research advisors: Prof. Qiongyi He, Prof. Heng Fan. Theoretical study of quantum entanglement and applications in condensed matter physics. ',
      },
    ] as ExperienceItem[],
  },

  // ── Contact section (crimson band at the bottom) ──────────────────────
  contact: {
    heading:    'Contact',
    email:      'qiaohong@pku.edu.cn',
    scholarUrl: 'https://scholar.google.com/citations?user=yf8M9z4AAAAJ&hl=en',
    labName:    'Hybrid Quantum Lab at Peking University',
    address: [
      'Institute of quantum science and technology,',
      'Peking University',
      'Beijing 100871, China',
    ],
    footerLeft:  '© 2026 Hong Qiao (乔宏) · Institute of Quantum Science and Technology, Peking University',
    footerRight: 'Hybrid Quantum Lab at Peking University',
  },

};
