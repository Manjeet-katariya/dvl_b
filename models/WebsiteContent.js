const mongoose = require('mongoose');

const StatSchema = new mongoose.Schema({
  val: {
    type: String,
    required: true,
    trim: true
  },
  label: {
    type: String,
    required: true,
    trim: true
  }
}, { _id: false });

const WebsiteContentSchema = new mongoose.Schema({
  home: {
    heroSubtitle: {
      type: String,
      default: 'Architecture & Interiors',
      trim: true
    },
    heroTitle: {
      type: String,
      default: 'Designing Spaces\n*That Inspire.*',
      trim: true
    },
    heroImage: {
      type: String,
      default: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90',
      trim: true
    },
    heroDescription: {
      type: String,
      default: 'We make architecture, interiors, and design that is innovative, refined, and remarkable.',
      trim: true
    },
    heroStats: {
      type: [StatSchema],
      default: [
        { val: '180', label: 'Projects Delivered' },
        { val: '8+', label: 'Years Experience' },
        { val: '100%', label: 'Client Satisfaction' }
      ]
    },
    ethosHeading: {
      type: String,
      default: 'We translate human aspirations into architectural realities, creating spaces that *inspire.*',
      trim: true
    },
    ethosLinkText: {
      type: String,
      default: 'Our Philosophy',
      trim: true
    },
    service1Title: {
      type: String,
      default: 'Residential',
      trim: true
    },
    service1Desc: {
      type: String,
      default: 'Bespoke living spaces that reflect your personality — from concept to a fully-styled sanctuary.',
      trim: true
    },
    service1Img: {
      type: String,
      default: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920',
      trim: true
    },
    service2Title: {
      type: String,
      default: 'Commercial',
      trim: true
    },
    service2Desc: {
      type: String,
      default: 'Dynamic environments that inspire productivity, impress clients, and embody your brand identity.',
      trim: true
    },
    service2Img: {
      type: String,
      default: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920',
      trim: true
    },
    service3Title: {
      type: String,
      default: 'Interior Designing',
      trim: true
    },
    service3Desc: {
      type: String,
      default: 'Bespoke indoors and furniture fit-outs crafted to represent your personal tastes.',
      trim: true
    },
    service3Img: {
      type: String,
      default: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920',
      trim: true
    },
    service4Title: {
      type: String,
      default: 'Hospitality',
      trim: true
    },
    service4Desc: {
      type: String,
      default: 'Immersive café, hotel, and restaurant designs that foster memorable guest experiences.',
      trim: true
    },
    service4Img: {
      type: String,
      default: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920',
      trim: true
    },
    service5Title: {
      type: String,
      default: 'Architecture & PMC',
      trim: true
    },
    service5Desc: {
      type: String,
      default: 'End-to-end project management, contractor coordination, and on-site quality supervision.',
      trim: true
    },
    service5Img: {
      type: String,
      default: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920',
      trim: true
    },
    service6Title: {
      type: String,
      default: 'Cost Estimation',
      trim: true
    },
    service6Desc: {
      type: String,
      default: 'Precision budgeting with transparent breakdowns. Know your numbers before the first brick is laid.',
      trim: true
    },
    service6Img: {
      type: String,
      default: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920',
      trim: true
    },
    philosophyHeading: {
      type: String,
      default: 'Turning Dreams into\n*Timeless Spaces.*',
      trim: true
    },
    philosophySubheading: {
      type: String,
      default: 'Every great space begins with a dream.',
      trim: true
    },
    philosophyDescription: {
      type: String,
      default: 'At D.V.L Architects, we work closely with our clients to understand not just what they want to build, but how they want to live. We believe exceptional architecture is deeply personal—it should reflect your identity, enhance your daily life, and remain beautiful for generations.',
      trim: true
    },
    philosophyQuote: {
      type: String,
      default: 'Our purpose is simple: to create spaces that inspire, comfort, and leave a lasting legacy.',
      trim: true
    },
    philosophyStat1Val: {
      type: String,
      default: '180+',
      trim: true
    },
    philosophyStat1Label: {
      type: String,
      default: 'Projects Delivered',
      trim: true
    },
    philosophyStat2Val: {
      type: String,
      default: '8+',
      trim: true
    },
    philosophyStat2Label: {
      type: String,
      default: 'Years Experience',
      trim: true
    },
    philosophyStat3Val: {
      type: String,
      default: '100%',
      trim: true
    },
    philosophyStat3Label: {
      type: String,
      default: 'Client Satisfaction',
      trim: true
    }
  },
  about: {
    heroHeading: {
      type: String,
      default: 'We design spaces\n*that outlast*\ntrends.',
      trim: true
    },
    heroDescription: {
      type: String,
      default: 'DVL Architects & Interiors is a full-service design studio based in Jaipur. We combine architectural rigour with interior sensibility to create spaces that are beautiful, functional, and built to last.',
      trim: true
    },
    heroImage: {
      type: String,
      default: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400',
      trim: true
    },
    heroStats: {
      type: [StatSchema],
      default: [
        { val: '180+', label: 'Projects Delivered' },
        { val: '8+', label: 'Years of Practice' }
      ]
    },
    ethosTitle1: {
      type: String,
      default: 'Design with Purpose.',
      trim: true
    },
    ethosTitle2: {
      type: String,
      default: 'Build with Integrity.',
      trim: true
    },
    ethosDescription1: {
      type: String,
      default: 'At D.V.L Architects, we believe exceptional architecture begins with clarity of thought, not excess of form. Every project is shaped by its purpose, its context, and the people who will experience it. We create spaces that are timeless, functional, and emotionally meaningful—where beauty is a natural outcome of thoughtful design.',
      trim: true
    },
    ethosDescription2: {
      type: String,
      default: 'Our process is built on collaboration, transparency, and meticulous attention to detail. From the first conversation to the final handover, we remain committed to delivering architecture that reflects your vision while exceeding expectations.',
      trim: true
    },
    pillar1Title: {
      type: String,
      default: 'Precision',
      trim: true
    },
    pillar1Desc: {
      type: String,
      default: 'Every material, dimension, and finish is deliberate. We leave nothing to chance.',
      trim: true
    },
    pillar2Title: {
      type: String,
      default: 'Permanence',
      trim: true
    },
    pillar2Desc: {
      type: String,
      default: 'We design for longevity — spaces that look as good in 20 years as on day one.',
      trim: true
    },
    pillar3Title: {
      type: String,
      default: 'Partnership',
      trim: true
    },
    pillar3Desc: {
      type: String,
      default: 'Your vision is the brief. We listen first, then create — together.',
      trim: true
    },
    value1Title: {
      type: String,
      default: 'Uncompromising Quality',
      trim: true
    },
    value1Desc: {
      type: String,
      default: 'We source only the finest materials and partner with master craftsmen. Every detail is an opportunity to exceed expectations.',
      trim: true
    },
    value2Title: {
      type: String,
      default: 'Sustainable Thinking',
      trim: true
    },
    value2Desc: {
      type: String,
      default: 'Beauty should not come at the cost of the environment. We integrate eco-conscious choices into every project decision.',
      trim: true
    },
    value3Title: {
      type: String,
      default: 'Collaborative Vision',
      trim: true
    },
    value3Desc: {
      type: String,
      default: 'Your aspirations are our blueprint. We maintain full transparency and work alongside you from concept to completion.',
      trim: true
    },
    journey1Year: {
      type: String,
      default: '2010',
      trim: true
    },
    journey1Title: {
      type: String,
      default: 'The Inception',
      trim: true
    },
    journey1Desc: {
      type: String,
      default: 'Founded with a vision to redefine interior spaces through thoughtful design and premium craftsmanship in Jaipur.',
      trim: true
    },
    journey2Year: {
      type: String,
      default: '2015',
      trim: true
    },
    journey2Title: {
      type: String,
      default: 'First Recognition',
      trim: true
    },
    journey2Desc: {
      type: String,
      default: 'Awarded the National Design Excellence Award for our groundbreaking work on the Horizon Residential Complex.',
      trim: true
    },
    journey3Year: {
      type: String,
      default: '2020',
      trim: true
    },
    journey3Title: {
      type: String,
      default: 'Expanding Horizons',
      trim: true
    },
    journey3Desc: {
      type: String,
      default: 'Scaled our studio to serve commercial clients across Rajasthan with end-to-end project management capabilities.',
      trim: true
    },
    journey4Year: {
      type: String,
      default: '2024',
      trim: true
    },
    journey4Title: {
      type: String,
      default: 'Sustainable Future',
      trim: true
    },
    journey4Desc: {
      type: String,
      default: 'Committed to integrating eco-friendly materials and sustainable practices into every new project we undertake.',
      trim: true
    }
  },
  services: {
    heroHeading: {
      type: String,
      default: 'What We\n*Create For You.*',
      trim: true
    },
    heroDescription: {
      type: String,
      default: 'End-to-end architectural and interior design services — from the first sketch to a curated handover.',
      trim: true
    },
    heroImage: {
      type: String,
      default: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920',
      trim: true
    },
    process1Title: {
      type: String,
      default: 'Listen & Discover',
      trim: true
    },
    process1Desc: {
      type: String,
      default: 'We immerse ourselves in your world — your aspirations, lifestyle, and spatial needs — before a single line is drawn.',
      trim: true
    },
    process2Title: {
      type: String,
      default: 'Design & Envision',
      trim: true
    },
    process2Desc: {
      type: String,
      default: 'Detailed floor plans, mood boards, material palettes, and photorealistic 3D renders bring your vision to life on screen.',
      trim: true
    },
    process3Title: {
      type: String,
      default: 'Build & Supervise',
      trim: true
    },
    process3Desc: {
      type: String,
      default: 'Our on-site team manages every contractor, material, and timeline to ensure flawless quality at every stage.',
      trim: true
    },
    process4Title: {
      type: String,
      default: 'Reveal & Celebrate',
      trim: true
    },
    process4Desc: {
      type: String,
      default: 'A curated final walkthrough of your completed space, styled to perfection, followed by our post-handover care.',
      trim: true
    },
    discipline1Tag: { type: String, default: 'Residential', trim: true },
    discipline1Title: { type: String, default: 'Homes Built Around You', trim: true },
    discipline1Desc: { type: String, default: 'We design homes that are deeply personal — where architecture meets lifestyle. From sprawling villas to compact urban apartments, every space is planned for beauty, function, and longevity.', trim: true },
    discipline1Feature1: { type: String, default: 'Custom Villa & Bungalow Design', trim: true },
    discipline1Feature2: { type: String, default: 'Kitchen & Bathroom Remodels', trim: true },
    discipline1Feature3: { type: String, default: 'Bedroom & Living Sanctuaries', trim: true },
    discipline1Feature4: { type: String, default: 'Lighting & Material Planning', trim: true },
    discipline1Img: { type: String, default: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900', trim: true },

    discipline2Tag: { type: String, default: 'Commercial', trim: true },
    discipline2Title: { type: String, default: 'Spaces That Mean Business', trim: true },
    discipline2Desc: { type: String, default: 'Your workspace is your brand made physical. We design offices, retail stores, and hospitality venues that communicate excellence and leave a lasting impression on every visitor.', trim: true },
    discipline2Feature1: { type: String, default: 'Corporate Office Strategy', trim: true },
    discipline2Feature2: { type: String, default: 'Retail & Showroom Design', trim: true },
    discipline2Feature3: { type: String, default: 'Hospitality & Restaurant Ambience', trim: true },
    discipline2Feature4: { type: String, default: 'Brand Identity Integration', trim: true },
    discipline2Img: { type: String, default: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900', trim: true },

    discipline3Tag: { type: String, default: 'Interior Designing', trim: true },
    discipline3Title: { type: String, default: 'Bespoke Indoors & Furniture', trim: true },
    discipline3Desc: { type: String, default: 'From space planning and material curation to custom furniture design, we create cohesive interiors that represent your personal tastes and functional requirements.', trim: true },
    discipline3Feature1: { type: String, default: 'Space Curation & Layouts', trim: true },
    discipline3Feature2: { type: String, default: 'Bespoke Furniture & Fit-outs', trim: true },
    discipline3Feature3: { type: String, default: 'Material & Paint Consulting', trim: true },
    discipline3Feature4: { type: String, default: 'Decorative Lighting & Accents', trim: true },
    discipline3Img: { type: String, default: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900', trim: true },

    discipline4Tag: { type: String, default: 'Hospitality', trim: true },
    discipline4Title: { type: String, default: 'Immersive Guest Experiences', trim: true },
    discipline4Desc: { type: String, default: 'We design hotels, resorts, cafés, and restaurants that foster memorable guest experiences through exceptional ambiance, clever spatial layouts, and durable luxury materials.', trim: true },
    discipline4Feature1: { type: String, default: 'Bespoke Restaurant & Café Layouts', trim: true },
    discipline4Feature2: { type: String, default: 'Lobby & Reception Styling', trim: true },
    discipline4Feature3: { type: String, default: 'Luxury Resort Masterplanning', trim: true },
    discipline4Feature4: { type: String, default: 'Guest Room & Suite Ergonomics', trim: true },
    discipline4Img: { type: String, default: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900', trim: true },

    discipline5Tag: { type: String, default: 'Architecture & PMC', trim: true },
    discipline5Title: { type: String, default: 'We Run the Site. You Rest.', trim: true },
    discipline5Desc: { type: String, default: 'Acting as your eyes and ears on-site, we coordinate every contractor, enforce timelines, audit quality, and protect your investment throughout the entire build.', trim: true },
    discipline5Feature1: { type: String, default: 'Contractor Coordination', trim: true },
    discipline5Feature2: { type: String, default: 'Timeline & Budget Control', trim: true },
    discipline5Feature3: { type: String, default: 'On-Site Quality Audits', trim: true },
    discipline5Feature4: { type: String, default: 'Risk & Compliance Management', trim: true },
    discipline5Img: { type: String, default: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900', trim: true },

    discipline6Tag: { type: String, default: 'Cost Estimation', trim: true },
    discipline6Title: { type: String, default: 'Know Every Number. Always.', trim: true },
    discipline6Desc: { type: String, default: 'No hidden costs. No budget shocks. We deliver detailed financial blueprints — material breakdowns, labour estimates, and contingency plans — so you commit with full confidence.', trim: true },
    discipline6Feature1: { type: String, default: 'Detailed Material Estimates', trim: true },
    discipline6Feature2: { type: String, default: 'Labour & Timeline Costing', trim: true },
    discipline6Feature3: { type: String, default: 'Budget Optimisation Reports', trim: true },
    discipline6Feature4: { type: String, default: 'Financial Feasibility Studies', trim: true },
    discipline6Img: { type: String, default: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=900', trim: true },

    why1Title: { type: String, default: 'End-to-End Ownership', trim: true },
    why1Desc: { type: String, default: "We don't just design — we manage the entire process from concept to handover, so you never have to chase contractors or worry about timelines.", trim: true },
    why2Title: { type: String, default: 'Transparent Pricing', trim: true },
    why2Desc: { type: String, default: 'Detailed cost estimates before work begins. No surprises, no hidden charges — just clarity at every stage of your project.', trim: true },
    why3Title: { type: String, default: 'Post-Handover Support', trim: true },
    why3Desc: { type: String, default: "Our relationship doesn't end at handover. We provide structural support and care for months after your space is delivered.", trim: true }
  },
  portfolio: {
    heroHeading: {
      type: String,
      default: 'Selected\n*Works.*',
      trim: true
    },
    heroDescription: {
      type: String,
      default: 'A curated collection of residential and commercial spaces designed to inspire and endure.',
      trim: true
    },
    heroImage: {
      type: String,
      default: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1920',
      trim: true
    }
  },
  calculator: {
    heroTag: {
      type: String,
      default: 'Cost Estimator',
      trim: true
    },
    heroHeading: {
      type: String,
      default: 'Know your budget\n*before you build.*',
      trim: true
    },
    heroDescription: {
      type: String,
      default: '3 steps · 2 minutes · Instant estimate sent to your email.',
      trim: true
    }
  },
  contact: {
    heroTag: {
      type: String,
      default: 'Get In Touch',
      trim: true
    },
    heroHeading: {
      type: String,
      default: 'Where Vision Meets\n*Architecture into life.*',
      trim: true
    },
    heroDescription: {
      type: String,
      default: "Great architecture starts with understanding your story. Share your ideas with us, and together we'll make spaces that are elegant, functional, and designed to stand the test of time.",
      trim: true
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('WebsiteContent', WebsiteContentSchema);
