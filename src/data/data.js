import {
    IconArrowBigUpLine,
    IconBrandInstagram,
    IconCurrencyDollar,
    IconHeartbeat,
    IconRocket,
    IconShieldCheck,
    IconUsersGroup,
} from "@tabler/icons-react";

import {
    Activity,
    Book,
    Briefcase,
    CheckCircle,
    CheckSquare,
    Clock,
    Cloud,
    CloudIcon,
    Code,
    CodeIcon,
    Cpu,
    Database,
    DollarSign,
    DollarSignIcon,
    FileClock,
    FileText,
    Film,
    Globe,
    Grid,
    Headphones,
    Layout,
    LayoutTemplate,
    Lock,
    Mail,
    Package,
    Paintbrush,
    PaintbrushIcon,
    Palette,
    PenTool,
    PieChart,
    Printer,
    RefreshCwIcon,
    Repeat,
    Rocket,
    Search,
    Server,
    ServerIcon,
    Shield,
    ShieldIcon,
    ShoppingBag,
    Smartphone,
    SmartphoneIcon,
    Star,
    Target,
    TestTube2,
    TestTubeIcon,
    TrendingUp,
    UserPlus,
    Users,
    Video,
    Zap,
} from 'lucide-react';

// ===== MAIN SERVICES DATA =====
export const servicesData = [
    {
        id: 1,
        title: "App Development",
        description: "From concept to launch, we build native and cross-platform mobile applications for iOS and Android. Our apps combine intuitive UX with robust functionality to engage users and drive business growth.",
        width: "sm:col-span-1",
        image: "/assets/app_development.svg",
        link: "/app-development"
    },
    {
        id: 2,
        title: "Web Development",
        description: "We create responsive, high-performance websites tailored to your business needs. Our full-stack development services include front-end design, back-end architecture, and seamless integrations to deliver exceptional digital experiences.",
        image: "/assets/web_development.svg",
        link: "/web-development"
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "Comprehensive digital strategies including SEO, PPC, social media, and content marketing. We help businesses increase visibility, generate leads, and maximize ROI through data-driven campaigns.",
        image: "/assets/digital_marketing.svg",
        link: "/digital-marketing"
    },
    {
        id: 4,
        title: "UI/UX Design",
        description: "Our design team crafts visually stunning and user-friendly interfaces that enhance engagement. We focus on creating intuitive user journeys that convert visitors into loyal customers.",
        width: "sm:col-span-1",
        image: "/assets/ui_ux.svg",
        link: "/ui-ux-design"
    },
    {
        id: 5,
        title: "Custom Software",
        description: "Tailored solutions designed to streamline your business operations. Our bespoke software development addresses unique challenges with scalable, secure, and efficient systems.",
        image: "/assets/custom_software.svg",
        link: "/custom-software"
    },
    {
        id: 6,
        title: "Graphic Design",
        description: "Compelling visual branding that tells your story. From logos to marketing materials, we create designs that establish brand identity and resonate with your target audience.",
        width: "sm:col-span-1",
        image: "/assets/graphic_design.svg",
        link: "/graphic-design"
    }
];

// ===== WHY CHOOSE US DATA =====
export const whyUsData = [
    {
        lottie: "/assets/lottie/handoff.lottie",
        title: "Proven Partnership Framework",
        desc: "Strategic collaborations that drive digital growth",
        icon: "handshake",
        color: "from-blue-500 to-blue-700"
    },
    {
        lottie: "/assets/lottie/service.lottie",
        title: "Tailored Digital Solutions",
        desc: "Custom-built strategies for unique business needs",
        icon: "settings",
        color: "from-purple-500 to-purple-700"
    },
    {
        lottie: "/assets/lottie/expertise.lottie",
        title: "Full-Cycle Expertise",
        desc: "End-to-end digital transformation capabilities",
        icon: "award",
        color: "from-green-500 to-green-700"
    },
    {
        lottie: "/assets/lottie/strategies.lottie",
        title: "Scalable Growth Strategies",
        desc: "Data-driven approaches for measurable outcomes",
        icon: "bar-chart-2",
        color: "from-red-500 to-red-700"
    }
];

// ===== CLIENT FEEDBACK DATA =====
export const feedbackData = [
    {
        id: 1,
        // name: "Mr.Gaurav Pokharna",
        role: "Virasat Heritage Resort",
        location: "Rajasthan, India",
        rating: 5,
        text: "Working with the team at CreativeWebPro has been a wonderful experience. They truly understood the heritage and soul of our resort and brought it to life online. The website they created for Virsat Heritage Resort not only looks beautiful but is also easy to use for our guests. Their team was responsive, respectful of our traditions, and delivered everything on time. Highly recommended!",
        avatar: "/assets/virasat.svg"
    },
    {
        id: 2,
        // name: "Mr. Lalwani",
        role: "Team Pooja house",
        location: "Rajasthan, India",
        rating: 4,
        text: "The team at CreativeWebPro really understood our vision. They crafted a website that beautifully reflects the elegance and quality of Aranyam Doors. It was a smooth and professional experience from start to finish. We're genuinely happy with the result.",
        avatar: "/assets/aranyam.svg"
    },
    {
        id: 3,
        // name: "Mr. Kalya",
        role: "Satguru Cake Material",
        location: "Rajasthan, India",
        rating: 5,
        text: "CreativeWebPro turned our idea into a fully functional online store with ease. They made it simple for our customers to browse and order cake materials online. The team was supportive, quick to respond, and truly understood our needs. We're really happy with the outcome!",
        avatar: "/assets/satguru.svg"
    }
];

// ===== ABOUT FEATURES DATA =====
export const aboutFeatures = [
    {
        icon: "briefcase",
        title: "Full-Service Digital Solutions",
        description: "Comprehensive services from web/app development to digital marketing and branding - all under one roof.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: "lightbulb",
        title: "Strategic & Creative Approach",
        description: "We combine innovative design with strategic thinking to create solutions that resonate with your audience.",
        color: "bg-purple-100 text-purple-600"
    },
    {
        icon: "bar-chart-2",
        title: "Data-Driven Results",
        description: "We track, analyze and optimize to ensure your digital presence delivers maximum impact.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: "users",
        title: "Your Trusted Partner",
        description: "More than just a vendor - we're committed to your long-term success in the digital landscape.",
        color: "bg-purple-100 text-purple-600"
    }
];

// ===== NAVIGATION & FOOTER DATA =====
export const footerLinks = {
    services: [
        { name: "Web Development", link: "/web-development" },
        { name: "App Development", link: "/app-development" },
        { name: "UI/UX Design", link: "/ui-ux-design" },
        { name: "Digital Marketing", link: "/digital-marketing" }
    ],
    company: [
        { name: "About Us", link: "/#about" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Blog", link: "https://blogs.creativewebpro.in" },
        { name: "Contact", link: "/contact" }
    ],
    contact: {
        address: "G-25, Shree sankalp complex, Riico Industrial Area, Bhilwara, Rajasthan 311001",
        email: "info@creativewebpro.in",
        phone: "+91 97728 59772"
    },
    social: [
        { icon: "facebook", link: "https://www.facebook.com/people/Creativewebpro/61561189738606/" },
        { icon: "instagram", link: "https://www.instagram.com/creativewebpro.in/" },
        { icon: "linkedin", link: "https://www.linkedin.com/company/creative-web-pro/" }
    ]
};

export const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Services", link: "/#services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
];

// ===== PORTFOLIO DATA =====
export const portfolio_tags = [
    'all',
    'web development',
    'healthcare & medical industry',
    'e-commerce',
    'hospitality & food industry',
    'technology & saas solutions',
    'real estate & property management'
];

export const portfolio = [
    {
        name: "AyurBalance",
        image: "/portfolio/ayurbalance.webp",
        url: "https://www.ayurbalance.us",
        tags: "web development"
    },
    {
        name: "Doors Aranyam",
        image: "/portfolio/doorsaranyam.webp",
        url: "https://doorsaranyam.com/",
        tags: "web development"
    },
    {
        name: "Jim Corbett Bookings",
        image: "/portfolio/jimcorbettbookings.webp",
        url: "https://jimcorbettbookings.in/",
        tags: "web development"
    },
    {
        name: "Ritcher",
        image: "/portfolio/ritcher.webp",
        url: "https://ritcher.in/",
        tags: "web development"
    },
    {
        name: "Enabl Life",
        image: "/portfolio/enabllife.webp",
        url: "https://enabllife.com/",
        tags: "web development"
    },
    {
        name: "Creative Corner BV",
        image: "/portfolio/creativecornerbv.webp",
        url: "https://creativecornerbv.com/",
        tags: "web development"
    },
    {
        name: "Urja Ghar",
        image: "/portfolio/urjaghar.webp",
        url: "https://urjaghar.com/",
        tags: "web development"
    },
    {
        name: "Debock",
        image: "/portfolio/debock.webp",
        url: "https://debock.in/",
        tags: "web development"
    },
    {
        name: "Albelee",
        image: "/portfolio/albelee.webp",
        url: "https://albelee.com/",
        tags: "e-commerce"
    },
    {
        name: "Sabai Innovations",
        image: "/portfolio/sabaiinnovations.webp",
        url: "https://sabaiinnovations.com/",
        tags: "healthcare & medical industry"
    },
    {
        name: "Mysha Health World",
        image: "/portfolio/myshahealthworld.webp",
        url: "https://myshahealthworld.com/",
        tags: "healthcare & medical industry"
    },
    {
        name: "Ck Birla Hospitals",
        image: "/portfolio/ckbirlahospitals.webp",
        url: "https://ckbirlahospitals.com/",
        tags: "healthcare & medical industry"
    },
    {
        name: "Cks Hospitals",
        image: "/portfolio/ckshospitals.webp",
        url: "https://ckshospitals.com/",
        tags: "healthcare & medical industry"
    },
    {
        name: "Whimsical Exhibits",
        image: "/portfolio/whimsicalexhibits.webp",
        url: "https://whimsicalexhibits.eu/",
        tags: "technology & saas solutions"
    },
    {
        name: "Orchestra Party",
        image: "/portfolio/orchestraparty.webp",
        url: "https://www.orchestraparty.com/",
        tags: "hospitality & food industry"
    },
    {
        name: "The Colonial Restaurant",
        image: "/portfolio/thecolonialrestaurant.webp",
        url: "https://www.thecolonialrestaurant.com.au/",
        tags: "hospitality & food industry"
    },
    {
        name: "PropSteps",
        image: "/portfolio/propsteps.webp",
        url: "https://www.propsteps.com/",
        tags: "real estate & property management"
    },
    {
        name: "Duroflex World",
        image: "/portfolio/duroflexworld.webp",
        url: "https://www.duroflexworld.com/",
        tags: "e-commerce"
    },
    {
        name: "Pirohee",
        image: "/portfolio/pirohee.webp",
        url: "https://pirohee.com/",
        tags: "e-commerce"
    },
    {
        name: "Maaesa Clothing",
        image: "/portfolio/maaesaclothing.webp",
        url: "https://www.maaesaclothing.com/",
        tags: "web development"
    },
    {
        name: "Turtle",
        image: "/portfolio/turtle.webp",
        url: "https://www.turtle.in/",
        tags: "web development"
    },
];

// ===== UI/UX SERVICES DATA =====
export const ui_ux_services = [
    {
        title: "UX Research & Strategy",
        description: "User interviews, surveys, journey mapping, persona creation, competitor analysis, UX audits",
        icon: <TestTube2 className="w-6 h-6" />
    },
    {
        title: "Experience & Interaction Design",
        description: "User flows, wireframes (low/high fidelity), information architecture, UX storytelling",
        icon: <LayoutTemplate className="w-6 h-6" />
    },
    {
        title: "UI Visual Design",
        description: "High-fidelity designs, brand-aligned interfaces, modern and responsive layouts, dark/light mode design",
        icon: <Paintbrush className="w-6 h-6" />
    },
    {
        title: "Interactive Prototyping",
        description: "Clickable prototypes, interactive demos, feedback collection, user testing before development",
        icon: <Rocket className="w-6 h-6" />
    },
    {
        title: "Design Systems",
        description: "Scalable UI component libraries, style guides, consistent patterns for faster future development",
        icon: <CheckCircle className="w-6 h-6" />
    },
    {
        title: "Mobile & Responsive Design",
        description: "Mobile-first strategies, tablet optimization, cross-platform compatibility",
        icon: <Users className="w-6 h-6" />
    },
];

export const ui_ux_processSteps = [
    {
        title: "Increased User Engagement",
        icon: <IconUsersGroup className="w-6 h-6" />,
    },
    {
        title: "Higher Conversion Rates",
        icon: <IconCurrencyDollar className="w-6 h-6" />,
    },
    {
        title: "Faster Time to Market",
        icon: <IconRocket className="w-6 h-6" />,
    },
    {
        title: "Reduced Rework",
        icon: <IconShieldCheck className="w-6 h-6" />,
    },
    {
        title: "Stronger Brand Loyalty",
        icon: <IconHeartbeat className="w-6 h-6" />,
    },
    {
        title: "Continuous Improvement",
        icon: <IconArrowBigUpLine className="w-6 h-6" />,
    },
];

export const ui_ux_benefitsList = [
    {
        title: "User-Centric Approach",
        description: "Every design decision is rooted in real user needs and business goals.",
        icon: <Users className="w-8 h-8 text-background" />
    },
    {
        title: "Pixel-Perfect Execution",
        description: "From micro-interactions to large screens, we deliver stunning visual detail.",
        icon: <Paintbrush className="w-8 h-8 text-background" />
    },
    {
        title: "Business Impact Focus",
        description: "Better engagement, increased retention, faster product adoption",
        icon: <Rocket className="w-8 h-8 text-background" />
    },
];

// ===== APP DEVELOPMENT SERVICES DATA =====
export const app_services = [
    {
        title: "Custom Mobile Apps",
        icon: <SmartphoneIcon />,
        details: [
            "Tailored apps for iOS, Android",
            "Cross-platform solutions (Flutter, React Native)",
            "Progressive Web Apps (PWAs)",
            "IoT & Wearable app integration"
        ]
    },
    {
        title: "Enterprise App Development",
        icon: <ShieldIcon />,
        details: [
            "Scalable enterprise solutions",
            "Role-based access control",
            "ERP/CRM system integration",
            "HIPAA/GDPR compliant development"
        ]
    },
    {
        title: "UI/UX Design for Apps",
        icon: <PaintbrushIcon />,
        details: [
            "User-centered interface design",
            "Interactive prototypes",
            "Motion design & micro-interactions",
            "Accessibility compliance (WCAG)"
        ]
    },
    {
        title: "App Backend Development",
        icon: <ServerIcon />,
        details: [
            "Node.js/Python/Java backend",
            "REST/GraphQL API development",
            "Database architecture (SQL/NoSQL)",
            "Real-time synchronization"
        ]
    },
    {
        title: "App Testing & QA",
        icon: <TestTubeIcon />,
        details: [
            "Automated testing suites",
            "Performance benchmarking",
            "Security penetration testing",
            "Device compatibility testing"
        ]
    },
    {
        title: "App Re-engineering",
        icon: <RefreshCwIcon />,
        details: [
            "Legacy app modernization",
            "Performance optimization",
            "Cloud migration services",
            "Feature augmentation"
        ]
    }
];

export const resultsList = [
    {
        title: "Faster time to market with agile development",
        icon: <FileClock className="w-6 h-6" />
    },
    {
        title: "30-50% higher user retention rates",
        icon: <Activity className="w-6 h-6" />
    },
    {
        title: "Seamless cross-platform performance",
        icon: <Smartphone className="w-6 h-6" />
    },
    {
        title: "4.8+ average app store ratings",
        icon: <Star className="w-6 h-6" />
    },
    {
        title: "Enterprise-grade security compliance",
        icon: <Shield className="w-6 h-6" />
    },
    {
        title: "Scalable infrastructure supporting 1M+ users",
        icon: <Server className="w-6 h-6" />
    },
];

export const app_benefitsList = [
    {
        title: "Full-Cycle Development",
        icon: <CodeIcon className="w-8 h-8 text-background" />,
        description: "End-to-end services from concept to deployment and ongoing support"
    },
    {
        title: "Cross-Platform Expertise",
        icon: <SmartphoneIcon className="w-8 h-8 text-background" />,
        description: "Native and hybrid development for iOS, Android & web platforms"
    },
    {
        title: "Agile Methodology",
        icon: <RefreshCwIcon className="w-8 h-8 text-background" />,
        description: "Two-week sprints with continuous integration and demo deliveries"
    },
    {
        title: "Security First",
        icon: <ShieldIcon className="w-8 h-8 text-background" />,
        description: "OWASP compliance, data encryption, and regular security audits"
    },
    {
        title: "Scalable Architecture",
        icon: <CloudIcon className="w-8 h-8 text-background" />,
        description: "Future-proof solutions with microservices and cloud readiness"
    },
    {
        title: "UX-Centric Approach",
        icon: <PaintbrushIcon className="w-8 h-8 text-background" />,
        description: "User testing and analytics-driven interface optimizations"
    }
];

// ===== WEB DEVELOPMENT SERVICES DATA =====
export const web_services = [
    {
        title: "Custom Website Development",
        icon: <Globe className="w-6 h-6" />,
        details: [
            "Modern tech stacks (MERN, MEAN, LAMP, JAMstack)",
            "Responsive & mobile-first design",
            "SEO-optimized architecture",
            "Custom functionality development"
        ]
    },
    {
        title: "Web App Development",
        icon: <Code className="w-6 h-6" />,
        details: [
            "Complex web-based platforms",
            "API integration & cloud services",
            "Real-time features & dashboards",
            "Enterprise-grade solutions"
        ]
    },
    {
        title: "eCommerce Development",
        icon: <ShoppingBag className="w-6 h-6" />,
        details: [
            "Shopify, WooCommerce, Magento",
            "Payment gateway integration",
            "Inventory management systems",
            "PCI-DSS compliant solutions"
        ]
    },
    {
        title: "CMS Development",
        icon: <Layout className="w-6 h-6" />,
        details: [
            "WordPress & headless CMS",
            "Custom content workflows",
            "Multi-language support",
            "Role-based access control"
        ]
    },
    {
        title: "Website Optimization",
        icon: <Zap className="w-6 h-6" />,
        details: [
            "Core Web Vitals optimization",
            "Technical SEO improvements",
            "Code refactoring & modernization",
            "Security hardening"
        ]
    },
    {
        title: "Web Maintenance",
        icon: <PenTool className="w-6 h-6" />,
        details: [
            "24/7 performance monitoring",
            "Regular security updates",
            "Backup & disaster recovery",
            "Content updates & support"
        ]
    }
];

export const web_benefitsList = [
    {
        title: "Custom-Built Solutions",
        icon: <Code className="w-6 h-6 text-background" />,
        description: "No templates; every line of code is tailored to your goals"
    },
    {
        title: "Performance Optimized",
        icon: <Zap className="w-6 h-6 text-background" />,
        description: "Fast-loading sites with excellent Core Web Vitals scores"
    },
    {
        title: "SEO-Friendly",
        icon: <Search className="w-6 h-6 text-background" />,
        description: "Built with search engines in mind for better visibility"
    },
    {
        title: "Secure & Reliable",
        icon: <Shield className="w-6 h-6 text-background" />,
        description: "Robust security measures and 99.9% uptime guarantees"
    },
    {
        title: "Scalable Infrastructure",
        icon: <Server className="w-6 h-6 text-background" />,
        description: "Solutions that grow with your business needs"
    },
    {
        title: "Ongoing Support",
        icon: <Headphones className="w-6 h-6 text-background" />,
        description: "Dedicated maintenance and technical assistance"
    }
];

// ===== DIGITAL MARKETING SERVICES DATA =====
export const digitalMarketing_services = [
    {
        title: "Search Engine Optimization (SEO)",
        icon: <Search className="w-6 h-6" />,
        description: "On-page, off-page, technical SEO, keyword research, and strategic link building"
    },
    {
        title: "Performance Marketing",
        icon: <DollarSign className="w-6 h-6" />,
        description: "Google Ads, Meta Ads, LinkedIn campaigns, and programmatic advertising"
    },
    {
        title: "Social Media Marketing",
        icon: <Users className="w-6 h-6" />,
        description: "Content strategy, community management, and influencer collaborations"
    },
    {
        title: "Email & CRM Marketing",
        icon: <Mail className="w-6 h-6" />,
        description: "Automated drip campaigns, segmentation, and lifecycle marketing"
    },
    {
        title: "Content Marketing",
        icon: <FileText className="w-6 h-6" />,
        description: "Blogs, whitepapers, case studies, and conversion-focused landing pages"
    },
    {
        title: "Video Marketing",
        icon: <Video className="w-6 h-6" />,
        description: "Social shorts, explainer videos, and branded motion content"
    }
];

export const digitalMarketing_benefitsList = [
    {
        title: "Performance-Driven",
        icon: <Target className="w-6 h-6 text-background" />,
        description: "Focus on real business metrics: ROI, CAC, and conversions"
    },
    {
        title: "Data-Backed Strategy",
        icon: <PieChart className="w-6 h-6 text-background" />,
        description: "AI-powered analytics and continuous optimization"
    },
    {
        title: "Creative Excellence",
        icon: <Activity className="w-6 h-6 text-background" />,
        description: "Impactful visuals combined with conversion-focused copy"
    },
    {
        title: "Omnichannel Expertise",
        icon: <TrendingUp className="w-6 h-6 text-background" />,
        description: "Seamless integration across all digital platforms"
    },
    {
        title: "Transparent Reporting",
        icon: <Search className="w-6 h-6 text-background" />,
        description: "Real-time dashboards and bi-weekly performance reviews"
    },
    {
        title: "Full-Service Execution",
        icon: <Users className="w-6 h-6 text-background" />,
        description: "From strategy to creative to analytics - all in-house"
    }
];

// ===== CUSTOM SOFTWARE SERVICES DATA =====
export const custom_software_services = [
    {
        title: "Enterprise Software",
        icon: <Briefcase className="w-6 h-6" />,
        details: [
            "Custom HR & finance systems",
            "Inventory management tools",
            "Supply chain optimization",
            "Role-based access control"
        ]
    },
    {
        title: "SaaS Development",
        icon: <Cloud className="w-6 h-6" />,
        details: [
            "Multi-tenant architecture",
            "Subscription billing systems",
            "Cloud-native applications",
            "Scalable microservices"
        ]
    },
    {
        title: "Business Automation",
        icon: <Repeat className="w-6 h-6" />,
        details: [
            "Workflow automation engines",
            "Custom CRM/ERP solutions",
            "Data pipeline automation",
            "AI-powered process optimization"
        ]
    },
    {
        title: "API Development",
        icon: <Cpu className="w-6 h-6" />,
        details: [
            "REST/GraphQL API design",
            "Third-party integrations",
            "Microservice architecture",
            "API security & governance"
        ]
    },
    {
        title: "Cloud Applications",
        icon: <Database className="w-6 h-6" />,
        details: [
            "AWS/Azure/GCP development",
            "Serverless architecture",
            "Containerized solutions",
            "Cloud migration services"
        ]
    },
    {
        title: "AI-Powered Tools",
        icon: <Grid className="w-6 h-6" />,
        details: [
            "Machine learning integration",
            "Natural language processing",
            "Predictive analytics",
            "Computer vision solutions"
        ]
    }
];

export const custom_software_benefitsList = [
    {
        title: "Business-First Approach",
        icon: <Target className="w-6 h-6 text-background" />,
        description: "Solutions aligned with your specific operational needs and goals"
    },
    {
        title: "Scalable Architecture",
        icon: <TrendingUp className="w-6 h-6 text-background" />,
        description: "Future-proof systems designed for growth and evolution"
    },
    {
        title: "Agile Delivery",
        icon: <Repeat className="w-6 h-6 text-background" />,
        description: "Rapid prototyping and iterative development process"
    },
    {
        title: "Security First",
        icon: <Shield className="w-6 h-6 text-background" />,
        description: "Enterprise-grade security protocols and compliance"
    },
    {
        title: "Full Ownership",
        icon: <Lock className="w-6 h-6 text-background" />,
        description: "Complete IP rights and source code access"
    },
    {
        title: "Ongoing Support",
        icon: <Package className="w-6 h-6 text-background" />,
        description: "Maintenance, updates, and feature enhancements"
    }
];

export const custom_software_resultsList = [
    {
        title: "40-60% operational cost reduction",
        icon: <DollarSignIcon className="w-6 h-6" />
    },
    {
        title: "3-5x faster deployment cycles",
        icon: <Clock className="w-6 h-6" />
    },
    {
        title: "99.9% system uptime guarantee",
        icon: <Activity className="w-6 h-6" />
    },
    {
        title: "Scalable to 1M+ users",
        icon: <UserPlus className="w-6 h-6" />
    },
    {
        title: "Enterprise-grade security",
        icon: <Shield className="w-6 h-6" />
    },
    {
        title: "24/7 technical support",
        icon: <Headphones className="w-6 h-6" />
    }
];


// ===== GRAPHIC DESIGN SERVICES DATA =====
export const GraphicDesign_services = [
    {
        title: "Brand Identity Design",
        icon: <Palette className="w-6 h-6" />,
        description: "Logos, typography, color palettes, and complete brand style guides"
    },
    {
        title: "Social Media Creatives",
        icon: <IconBrandInstagram className="w-6 h-6" />,
        description: "Scroll-stopping posts, stories, banners, and templates for all platforms"
    },
    {
        title: "Print Design",
        icon: <Printer className="w-6 h-6" />,
        description: "Business cards, brochures, flyers, and product packaging design"
    },
    {
        title: "Presentation Design",
        icon: <Layout className="w-6 h-6" />,
        description: "Professional pitch decks, investor presentations, and report formatting"
    },
    {
        title: "Motion Graphics",
        icon: <Film className="w-6 h-6" />,
        description: "Animated intros, explainer videos, and social media animations"
    },
    {
        title: "Infographic Design",
        icon: <PieChart className="w-6 h-6" />,
        description: "Data visualization and complex information made visually engaging"
    }
];

export const GraphicDesign_benefitsList = [
    {
        title: "Strategic Visuals",
        icon: <CheckSquare className="w-6 h-6 text-background" />,
        description: "Designs that balance aesthetics with clear business objectives"
    },
    {
        title: "Brand Consistency",
        icon: <Palette className="w-6 h-6 text-background" />,
        description: "Full alignment with existing brand guidelines and identity"
    },
    {
        title: "Multi-Format Expertise",
        icon: <Layout className="w-6 h-6 text-background" />,
        description: "Optimized designs for print, web, mobile, and social media"
    },
    {
        title: "Fast Turnaround",
        icon: <Film className="w-6 h-6 text-background" />,
        description: "Quick revisions and same-day delivery for urgent requests"
    },
    {
        title: "Premium Quality",
        icon: <Book className="w-6 h-6 text-background" />,
        description: "300dpi print-ready files and web-optimized digital assets"
    },
    {
        title: "Full Ownership",
        icon: <Printer className="w-6 h-6 text-background" />,
        description: "Complete source files and commercial usage rights"
    }
];