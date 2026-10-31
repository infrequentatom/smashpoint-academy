/**
 * ============================================================
 *  SMASHPOINT ACADEMY — SITE CONTENT CONFIG
 * ============================================================
 * This is the ONLY file most people should need to edit.
 * Change text, phone numbers, timings, or locations here and
 * the whole site updates automatically.
 *
 * If you're asking an AI assistant to update the site, tell it:
 * "Edit site.config.js to change ___" and paste this file.
 * ============================================================
 */

module.exports = {
  academyName: "Smashpoint Badminton Academy",
  tagline: "Where Every Player Improves.",
  heroSubtext:
    "Structured badminton coaching for kids, beginners, intermediate players and adults.",

  // Shown as a small line under the hero subtext
  // Used for search-engine / social-share previews
  seoDescription:
    "Structured badminton coaching in Baner, Pune for kids, beginners, intermediate players and adults. Mon-Fri 4-8 PM, Sat 10 AM-12 PM, Sun 9-11 AM. Book 1 free trial session.",

  heroScheduleLine:
    "Badminton Coaching – Smash Badminton Club, Baner   |   1 Free Trial Session",

  coach: {
    name: "Utkarsh Wagh",
    // Coaching enquiries / bookings
    phone: "8149134429",
    // WhatsApp needs country code, no + or spaces
    whatsappNumber: "918149134429",
    // Court booking enquiries
    courtBookingPhone: "7620336582",
    courtBookingWhatsappNumber: "917620336582",
    bio: [
      "A badminton player with a passion for making badminton easier to learn.",
      "Having experienced the challenges of learning without structured coaching, Coach Utkarsh founded Smashpoint with one simple belief: every player deserves clear guidance, individual attention and a positive learning environment."
    ]
  },

  philosophy: {
    heading: "Our Philosophy",
    intro:
      "At Smashpoint, coaching isn't about feeding shuttles or simply completing drills. Every session is planned with a purpose.",
    points: [
      "Correct technique",
      "Efficient footwork",
      "Match awareness",
      "Fitness",
      "Confidence",
      "Respect on and off the court"
    ],
    closing:
      "Our aim isn't just to create better badminton players. It's to build confident, disciplined individuals who enjoy the game for life."
  },

  differentiators: [
    {
      title: "Personal Attention",
      description:
        "Small batches allow every player to receive individual feedback during every session."
    },
    {
      title: "Structured Coaching",
      description:
        "Every class follows a planned progression instead of random practice."
    },
    {
      title: "Consistent Coach",
      description:
        "Students are coached by the same coach, allowing continuous monitoring of progress."
    },
    {
      title: "Friendly Learning Environment",
      description: "Mistakes are part of learning. We explain. We demonstrate. We practise. We improve."
    },
    {
      title: "Progress Over Perfection",
      description:
        "Every player learns at a different pace. Our goal is continuous improvement."
    }
  ],

  programmes: [
    {
      name: "Group Coaching",
      detail: "Smash Badminton Club, Baner",
      note: "Structured group sessions"
    },
    {
      name: "One-to-One Coaching",
      detail: "Personalised sessions",
      note: "Available on Request"
    }
  ],

  whoCanJoin: ["Kids", "Beginners", "Intermediate Players", "Adults"],

  locations: [
    {
      name: "Smash Badminton Club — Baner",
      address:
        "Balewadi Rd, near Laxmi Mata Mandir, opposite Aashakiran Hospital / Union Bank, Dasar, Balewadi, Pune, Maharashtra 411045",
      mapQuery:
        "Balewadi Rd, near Laxmi Mata Mandir, opposite Aashakiran Hospital, Dasar, Balewadi, Pune, Maharashtra 411045"
    }
  ],

  timings: [
    { label: "Mon – Fri", value: "4 PM – 8 PM", note: "1-hour slots" },
    { label: "Saturday", value: "10 AM – 12 PM", note: "" },
    { label: "Sunday", value: "9 AM – 11 AM", note: "" }
  ],

  batchOptions: ["3 days a week", "5 days a week"],

  trial: {
    heading: "1 Free Trial Session",
    note: "Book in advance."
  },

  booking: {
    instruction: "Message us your Name & preferred Slot to book!"
  },

  feesNote: "Contact us for coaching plans.",

  // Photos & videos shown in the gallery section (files live in public/media/).
  // shape: "wide" (landscape) or "tall" (portrait). Keep videos under ~25 MB each.
  galleryHeading: "Life at Smashpoint",
  gallery: [
    { type: "image", src: "/media/admissions-flyer.jpg", width: 500, height: 741, alt: "Smashpoint Badminton Academy admissions open - batch timings and enquiry number" },
    { type: "video", src: "/media/training-landscape.mp4", poster: "/media/training-landscape-poster.jpg", width: 848, height: 478, alt: "Coaching session at Smash Badminton Club, Baner" },
    { type: "video", src: "/media/training-portrait.mp4", poster: "/media/training-portrait-poster.jpg", width: 478, height: 850, alt: "Training drill at Smash Badminton Club, Baner" }
  ]
};
