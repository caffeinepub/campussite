// Single source of truth for all site branding and contact information
export const siteConfig = {
  name: "Pinnacle Institute of Technology & Science",
  shortName: "PITS",
  tagline: "Excellence in Education, Innovation in Practice",
  
  contact: {
    phone: "+1 (555) 123-4567",
    alternatePhone: "+1 (555) 123-4568",
    email: "info@pinnacle-its.edu",
    admissionsEmail: "admissions@pinnacle-its.edu",
  },
  
  address: {
    street: "2500 Innovation Drive",
    city: "Tech Valley",
    state: "California",
    zip: "94025",
    country: "United States",
  },
  
  social: {
    facebook: "https://facebook.com/pinnacle-its",
    twitter: "https://twitter.com/pinnacle_its",
    linkedin: "https://linkedin.com/school/pinnacle-its",
    instagram: "https://instagram.com/pinnacle_its",
    youtube: "https://youtube.com/@pinnacle-its",
  },
  
  mapLink: "https://maps.google.com/?q=2500+Innovation+Drive+Tech+Valley+CA+94025",
} as const;
