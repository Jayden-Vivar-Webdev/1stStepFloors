import {
  faFileLines,
  faMapLocationDot,
  faCheckCircle,
  faUsers,
  faPhone,
  faEnvelope,
  faClock,
  faCalendar,
  faTruck,
  faLaptop,
  faShieldAlt,
  faCogs,
  faStar,
  faArrowRight,
  faGlobe,
  faInfoCircle,
  faShoppingCart,
  faLock,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
export const iconMap: Record<string, IconDefinition> = {
  "file-lines": faFileLines, // Documents, reports
  "map-location-dot": faMapLocationDot,
  faCheckCircle: faCheckCircle,
  users: faUsers, // Team / People
  phone: faPhone, // Contact / Call
  envelope: faEnvelope, // Email / Contact
  clock: faClock, // Hours / Timing
  calendar: faCalendar, // Events / Dates
  truck: faTruck, // Delivery / Logistics
  laptop: faLaptop, // IT / Services
  shield: faShieldAlt, // Security / Safety
  cogs: faCogs, // Settings / Operations
  star: faStar, // Rating / Featured
  "arrow-right": faArrowRight, // Links / CTA arrows
  globe: faGlobe, // Website / Global
  "info-circle": faInfoCircle, // Info / Details
  "shopping-cart": faShoppingCart, // Ecommerce / Store
  lock: faLock, // Privacy / Secure
  "chart-line": faChartLine, // Analytics / Stats
};
