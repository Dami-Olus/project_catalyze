import { orphanage1, orphanage2, orphanage3, orphanage4, orphanage5 } from "../assets";

const menu = [
  { id: "/", link: "Home" },
  { id: "about", link: "About" },
  { id: "segments", link: "Segments" },
  { id: "solutions", link: "Solutions" },
  { id: "initiatives", link: "Initiatives" },
  { id: "contact", link: "Contact" },
];

const faq = [
  {
    question: "How do I make my donation?",
    answer: "Simply click on the Donate Now button on the page and you will be directed to our secure payment platform"
  },
  {
    question: "What currencies can I donate in",
    answer: "You can donate in NGN or USD. Simply click on the Donate Now button on the page and you will be directed to our secure payment platform"
  },
  {
    question: "Can I donate cost of a component?",
    answer: "Yes, you can donate for any component of your choice. Components and cost are outlined under Project. Simply click on the Donate Now button on the page and you will be directed to our secure payment platform"
  },
  {
    question: "How do I know which orphanage has a critical need for your solution?",
    answer: "We work in partnership with ASOHON (Association of Orphanage and Homes Operators in Nigeria) to ensure that only credible and qualified homes are selected based on the criticality need."
  },
  {
    question: "How do I monitor progress of my chosen project?",
    answer: " Update on each project is posted on our website real time to keep you posted"
  },
  {
    question: "Do you have a fund tracker?",
    answer: "Yes. Update on each project is posted on our website real time to keep you updated"
  }
]

const projects = [
  {
    image:orphanage5,
    name: "Streams of Mercy and Love for Humanity Center",
    location: 'Alagbado, Lagos',
    numberOfChildren: '15+',
    status: "Fully funded",
    summary: "The Orphanage caters to children between the age of 2 - 13 years. The kids go to school i Alagbado with some living on site and others residing with caregivers under their supervision to maximise the live-in space onsite.",
    details: {
      solarPanel: "4 x 200W",
      inverter: "1.5kVA",
      battery: "2 x 150AH"
    },
    progress: 1,
    Testimonial: 'We are very grateful for the support we have received from Gridcrux. We were having very serious issues with availability and electricity tarriff when they came on board. Like an answered prayer, Grid Crux called and it was taken care of at absolutely no cost to us. The kids are happy as they can watch TV, study at night and sleep well.'
  },
  {
    image:orphanage1,
    name: "Compassionate Orphanage",
    location: 'LASU-Isheri Expressway, Lagos',
    numberOfChildren: '30+',
    status: "active",
    summary: "Compassionate Outreach is a non-profit organization based in Lagos. They provide shelter, care, vocational training, counseling, and psychosocial support to orphans, homeless youth, and people living with HIV/AIDS. Their goal is to demonstrate compassionate love and establish a village with a large shelter and vocational outlet.",
    details: {
      solarPanel: "4 x 200W",
      inverter: "8kVA",
      battery: "10 x 200AH"
    },
    progress: 0
  },
  {
    image:orphanage2,
    name: "Child life line",
    location: 'Ikorodu, Lagos',
    numberOfChildren: '20',
    status: "active",
    summary: "Child Life-Line (CLL) is a non-profit organization supported by voluntary donations. They focus on aiding children living on the streets of Lagos, aiming to reunite them with family and provide education or vocational training. CLL operates a reception center in Gbagada, offering meals, shower facilities, counseling, and family tracing. In Ikorodu, their residential home helps boys through education and care until family reunification or completion of their chosen studies. They strive to enhance children's lives, ensuring they experience the joy and laughter every child deserves.",
    details: {
      solarPanel: "4 x 200W",
      inverter: "8kVA",
      battery: "10 x 200AH"
    },
    progress: 0
  },
  {
    image:orphanage3,
    name: "Optimal Children Home",
    location: 'Magodo Isheri',
    numberOfChildren: '20+',
    status: "active",
    summary: "Optimal Children Homes (The Home) is dedicated to caring for abandoned children, orphans, and the homeless. Our primary goal is to provide a nurturing environment that offers the benefits of a loving home and family. We ensure these children have access to essentials such as clothing, nutritious meals, and education. Our mission is to raise them with integrity and high moral values, empowering them to become exceptional contributors to society. The Home is registered and authorized by the Lagos State Government, and we diligently care for newborns and toddlers who have been abandoned under various circumstances. Some of these children require regular medical attention, as well as emotional and psychological support, alongside balanced nutrition.",
    details: {
      solarPanel: "4 x 200W",
      inverter: "8kVA",
      battery: "10 x 200AH"
    },
    progress: 0
  },
  {
    image:orphanage4,
    name: "Love Home Orphanage",
    location: 'Magodo, Lagos',
    numberOfChildren: '20+',
    status: "active",
    summary: "Love Home Orphanage, established in 2005, provides a safe haven for abused and abandoned children. They offer shelter, care, education, and medical support, preserving the children's dignity while nurturing their potential. The foundation strives for quality education, with several graduates and ongoing vocational training. Donations and partnerships are encouraged to support these vulnerable children and make a positive impact on society.",
    details: {
      solarPanel: "4 x 200W",
      inverter: "8kVA",
      battery: "10 x 200AH"
    },
    progress: 0
  },
  {
    image:orphanage5,
    name: "Arrows of God Orphanage",
    location: 'Ajah, Lagos',
    numberOfChildren: '20+',
    status: "active",
    summary: "Founded on 3rd of March, 2020 is a home where children who have been affected with poverty, suffering",
    details: {
      solarPanel: "4 x 200W",
      inverter: "8kVA",
      battery: "10 x 200AH"
    },
    progress: 0
  },
  {
    image:orphanage5,
    name: "Beautiful gate",
    location: 'Iba Ojo,Lagos',
    numberOfChildren: '15+',
    status: "Accepting funding",
    summary:"Beautiful Gate Orphanage Homes is a government approved home which takes care of the Orphans, Abandoned, Special need children (with disabilities ranging from Autism, Cerebral paulsy etc). A storey building located in Ojo, Lagos State, it provides shelter, education, nutrition and healthcare to about 30 children on site",
    details: {
      solarPanel: "4 x 200W",
      inverter: "2.5kVA",
      battery: "2 x 200AH"
    },
    progress: 0
  },
  {
    image:orphanage5,
    name: "Hope for All Africa",
    location: 'Ajao Estate,Lagos',
    numberOfChildren: '16',
    status: "Accepting funding",
    summary:"Hope for All Africa Orphanage is dedicated in the provision of care and protection for orphans and abused children. We minister about the physical, emotional and spiritual needs of the orphans and also counsel them; giving them hope and a future.They provide ccounselling sessions for the abused children under their care to help them psychologically, mentally, giving them hope and helping them overcome their fears. Also making them feel better about themselves. They also rehabilitate abused children.They go a step further to provide educational support and skill acquisition to enhance talent and developmental growth.",
    details: {
      solarPanel: "4 x 200W",
      inverter: "1.5kVA",
      battery: "2 x 150AH"
    },
    progress: 0
  },
]

export { menu, faq, projects };
