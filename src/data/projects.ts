export type Project = {
    id: string | number;
    title: string;
    category: string;
    year: string;
    image: string;
    videoUrl?: string;
    description: string;
    details: string;
    specs: string[];
  };
  
  export const projectsData: Project[] = [
    // --- SHOWREELS ---
    {
      id: 'commercial-showreel',
      title: 'Commercial Showreel',
      category: 'Commercial',
      year: '2024',
      image: '/projects/commercial-showreel.jpg', // Качи снимка (thumbnail) в public/projects/
      videoUrl: 'https://player.vimeo.com/video/1044296666',
      description: 'Highlights of commercial and high-end advertising projects.',
      details: 'A dynamic fast-paced compilation showcasing the best editing, VFX, and storytelling techniques across various premium commercial brands.',
      specs: ['DaVinci Resolve', 'Premiere Pro', 'Commercial']
    },
    {
      id: 'corporate-showreel',
      title: 'Corporate Reel',
      category: 'Corporate',
      year: '2024',
      image: '/projects/corporate-reel.jpg',
      videoUrl: 'https://player.vimeo.com/video/1044296625',
      description: 'A dedicated showcase of elite corporate and B2B productions.',
      details: 'Focusing on clean, impactful corporate narratives, brand identity videos, and internal global communications.',
      specs: ['DaVinci Resolve', 'Corporate Branding']
    },
  
    // --- COMMERCIALS & CAMPAIGNS ---
    {
      id: 'discover-aya',
      title: 'Discover Aya',
      category: 'Commercial',
      year: '2025',
      image: '/projects/discover-aya.jpg',
      videoUrl: 'https://player.vimeo.com/video/1207724142?h=3d81b37ab7',
      description: 'High-end commercial presentation.',
      details: 'Advanced post-production and color grading for a premium brand narrative.',
      specs: ['Commercial', 'VFX', 'Color Grading']
    },
    {
      id: 'visa-premium',
      title: 'Visa Premium Campaign',
      category: 'Commercial',
      year: '2024',
      image: '/projects/visa-premium.jpg',
      videoUrl: 'https://www.youtube.com/embed/sM-cBkQU3io',
      description: 'National television campaign for Visa Premium.',
      details: 'Fast-paced editing and premium aesthetic color grading tailored for top-tier broadcast and digital distribution.',
      specs: ['Broadcast', 'DaVinci Resolve']
    },
    {
      id: 'national-team-jerseys',
      title: 'Bulgarian National Team New Jerseys 2026',
      category: 'Commercial',
      year: '2026',
      image: '/projects/national-team.jpg',
      videoUrl: 'https://www.youtube.com/embed/1dCSzds0tvY',
      description: 'Official kit launch campaign for the Bulgarian National Football Team.',
      details: 'High-energy sports editing featuring dynamic transitions, intense sound design, and modern visual effects.',
      specs: ['Sports', 'Dynamic Editing', 'Sound Design']
    },
    {
      id: 'maserati-showroom',
      title: 'Maserati New Showroom Launch',
      category: 'Commercial',
      year: '2024',
      image: '/projects/maserati.jpg',
      videoUrl: 'https://www.youtube.com/embed/WI4UeLDRW1A',
      description: 'Luxury automotive showroom presentation.',
      details: 'Sleek, elegant, and high-contrast editing to emphasize the luxury and prestige of the Maserati brand.',
      specs: ['Automotive', 'Luxury', 'Color Grading']
    },
    {
      id: 'egt-digital',
      title: 'EGT Digital - Designed to Perform',
      category: 'Corporate',
      year: '2024',
      image: '/projects/egt-digital.jpg',
      videoUrl: 'https://player.vimeo.com/video/990854823',
      description: 'Tech-focused brand presentation for EGT Digital.',
      details: 'Corporate showcase highlighting performance, tech infrastructure, and digital innovation with modern motion graphics.',
      specs: ['Corporate', 'Tech', 'Motion Graphics']
    },
    {
      id: 'maxobg',
      title: 'Maxo.bg',
      category: 'Commercial',
      year: '2024',
      image: '/projects/maxobg.jpg',
      videoUrl: 'https://player.vimeo.com/video/1147231960',
      description: 'Fast-paced commercial for the financial sector.',
      details: 'Engaging consumer-focused advertisement with crisp editing and dynamic pacing.',
      specs: ['Commercial', 'Broadcast']
    },
    {
      id: 'milano-group',
      title: 'Milano Group',
      category: 'Commercial',
      year: '2023',
      image: '/projects/milano-group.jpg',
      videoUrl: 'https://player.vimeo.com/video/863596059',
      description: 'Fashion and lifestyle commercial.',
      details: 'Stylish and rhythm-driven editing sequence focusing on luxury apparel and lifestyle aesthetics.',
      specs: ['Fashion', 'Lifestyle']
    },
  
    // --- CINEMA & TV (TRAILERS) ---
    {
      id: 'cinema-city-summer-2025',
      title: 'Cinema City Summer Trailers Recap',
      category: 'Cinema & TV',
      year: '2025',
      image: '/projects/cinema-city.jpg',
      videoUrl: 'https://www.youtube.com/embed/aKCavUDQHRs',
      description: 'Epic summer blockbuster trailer compilation.',
      details: 'Masterful trailer editing synchronizing explosive blockbuster visuals with a massive cinematic score.',
      specs: ['Trailer', 'Cinematic', 'Audio Sync']
    },
    {
      id: 'cinema-city-halloween-2024',
      title: 'Cinema City Halloween 2024',
      category: 'Cinema & TV',
      year: '2024',
      image: '/projects/cc-halloween.jpg',
      videoUrl: 'https://www.youtube.com/embed/zufsigBywcE',
      description: 'Theatrical Halloween promo campaign.',
      details: 'Tension-building editing techniques, jump-cuts, and horror-themed sound design.',
      specs: ['Trailer', 'Horror', 'Sound Design']
    },
    {
      id: 'comic-con-2023',
      title: 'Comic-Con Bulgaria Trailer',
      category: 'Cinema & TV',
      year: '2023',
      image: '/projects/comic-con.jpg',
      videoUrl: 'https://www.youtube.com/embed/GIu0tIbWGmY',
      description: 'Official event trailer for Aniventure Comic-Con.',
      details: 'Action-packed event promo highlighting cosplay, gaming, and pop culture.',
      specs: ['Event Promo', 'Dynamic']
    },
  
    // --- DOCUMENTARY & CORPORATE NARRATIVES ---
    {
      id: 'gender-power-africa',
      title: 'Gender Power in Africa',
      category: 'Documentary',
      year: '2024',
      image: '/projects/africa-doc.jpg',
      videoUrl: 'https://www.youtube.com/embed/AOkQoIwZuEE',
      description: 'Documentary analysis of imbalances shaping women\'s lives.',
      details: 'Sensitive, narrative-driven editing focusing on impactful interviews and authentic b-roll storytelling.',
      specs: ['Documentary', 'Storytelling']
    },
    {
      id: 'harmonia',
      title: 'HARMONIA City Resilience in Action',
      category: 'Corporate',
      year: '2024',
      image: '/projects/harmonia.jpg',
      videoUrl: 'https://www.youtube.com/embed/POJyYqtoAWE',
      description: 'European project documentary and corporate presentation.',
      details: 'Informative narrative structure explaining complex urban resilience concepts through engaging visuals.',
      specs: ['Corporate', 'Educational']
    },
    {
      id: 'project-harmony',
      title: 'Project Harmony',
      category: 'Corporate',
      year: '2024',
      image: '/projects/project-harmony.jpg',
      videoUrl: 'https://www.youtube.com/embed/zIfz91k90Cg',
      description: 'Corporate social responsibility feature.',
      details: 'Long-form corporate storytelling detailing the impact and implementation of the project.',
      specs: ['Corporate', 'Interview Setup']
    },
    {
      id: 'lukoil',
      title: 'Lukoil Neftohim Burgas',
      category: 'Corporate',
      year: '2024',
      image: '/projects/lukoil.jpg',
      videoUrl: 'https://player.vimeo.com/video/1027583825',
      description: 'Industrial corporate overview.',
      details: 'Heavy industrial videography editing, combining drone shots and technical processes into a cohesive brand story.',
      specs: ['Industrial', 'Corporate']
    }
  ];