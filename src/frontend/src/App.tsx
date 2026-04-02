import { Award, ChevronRight, Globe, Menu, Search, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiX,
  SiYoutube,
} from "react-icons/si";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: string;
}

interface Activity {
  id: string;
  category: string;
  description: string;
  image: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: "original",
    name: "Energy Drink",
    description: "The original Red Bull Energy Drink. Vitalizes body and mind.",
    image: "/assets/generated/redbull-original-transparent.dim_400x600.png",
    tag: "250ml",
  },
  {
    id: "sugarfree",
    name: "Sugarfree",
    description: "Same wings, no sugar. The lighter version of Red Bull.",
    image: "/assets/generated/redbull-sugarfree-transparent.dim_400x600.png",
    tag: "250ml",
  },
  {
    id: "zero",
    name: "Zero",
    description: "Zero calories, zero sugar — pure unadulterated energy.",
    image: "/assets/generated/redbull-zero-transparent.dim_400x600.png",
    tag: "250ml",
  },
];

const activities: Activity[] = [
  {
    id: "extreme-sports",
    category: "Extreme Sports",
    description:
      "Push beyond limits with the world's greatest extreme sports athletes.",
    image: "/assets/generated/activity-extreme-sports.dim_600x400.jpg",
  },
  {
    id: "gaming",
    category: "Gaming",
    description:
      "Red Bull powers the world's top esports athletes and gaming events.",
    image: "/assets/generated/activity-gaming.dim_600x400.jpg",
  },
  {
    id: "music",
    category: "Music",
    description:
      "Feel the beat at Red Bull's world-class music festivals and events.",
    image: "/assets/generated/activity-music.dim_600x400.jpg",
  },
];

const stats = [
  { icon: Zap, value: "6.8B+", label: "Cans Sold" },
  { icon: Globe, value: "175+", label: "Countries" },
  { icon: Award, value: "30+", label: "Years of Wings" },
];

const navLinks = [
  "Energy Drinks",
  "Athletes",
  "Events",
  "Gaming",
  "Shop",
  "Discover",
];

// ─── RedBull Logo SVG ────────────────────────────────────────────────────────

function RedBullLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size * 2.2}
      height={size}
      viewBox="0 0 88 40"
      fill="none"
      role="img"
      aria-label="Red Bull"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Red Bull</title>
      {/* Bull silhouette left */}
      <g fill="oklch(0.49 0.22 25)">
        <ellipse cx="18" cy="22" rx="12" ry="8" />
        <ellipse cx="22" cy="16" rx="6" ry="5" />
        <path d="M14 13 Q10 7 7 10 Q9 13 13 14 Z" />
        <path d="M26 13 Q29 7 32 10 Q30 13 27 14 Z" />
        <rect x="10" y="28" width="3" height="8" rx="1.5" />
        <rect x="16" y="29" width="3" height="7" rx="1.5" />
        <rect x="21" y="29" width="3" height="7" rx="1.5" />
        <rect x="26" y="28" width="3" height="8" rx="1.5" />
        <path d="M6 20 Q3 17 5 15 Q7 18 9 20 Z" />
      </g>
      {/* Bull silhouette right (mirrored) */}
      <g fill="oklch(0.85 0.18 90)" transform="translate(88,0) scale(-1,1)">
        <ellipse cx="18" cy="22" rx="12" ry="8" />
        <ellipse cx="22" cy="16" rx="6" ry="5" />
        <path d="M14 13 Q10 7 7 10 Q9 13 13 14 Z" />
        <path d="M26 13 Q29 7 32 10 Q30 13 27 14 Z" />
        <rect x="10" y="28" width="3" height="8" rx="1.5" />
        <rect x="16" y="29" width="3" height="7" rx="1.5" />
        <rect x="21" y="29" width="3" height="7" rx="1.5" />
        <rect x="26" y="28" width="3" height="8" rx="1.5" />
        <path d="M6 20 Q3 17 5 15 Q7 18 9 20 Z" />
      </g>
    </svg>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-rb-navy shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-rb-navy/95 backdrop-blur-sm"
      }`}
      style={{ height: "72px" }}
    >
      <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 shrink-0"
          data-ocid="nav.link"
        >
          <RedBullLogo size={32} />
          <span
            className="text-foreground font-bold text-xl tracking-tight hidden sm:block"
            style={{
              fontFamily: "Oswald, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            RED BULL
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="/"
              className="nav-link pb-1"
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "14px",
                letterSpacing: "0.08em",
              }}
              data-ocid="nav.link"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden md:flex items-center gap-1.5 text-foreground/70 hover:text-foreground transition-colors text-sm"
            aria-label="Search"
            data-ocid="nav.search_input"
          >
            <Search size={16} />
            <span
              className="font-medium uppercase tracking-wider"
              style={{ fontSize: "13px" }}
            >
              Search
            </span>
          </button>

          <a
            href="/"
            className="bg-rb-red hover:bg-rb-red-dark text-white font-bold uppercase tracking-wider rounded-full px-5 py-2 text-xs transition-colors duration-200 shadow-glow hover:shadow-none"
            style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.1em" }}
            data-ocid="nav.primary_button"
          >
            Shop Now
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-rb-navy border-t border-border"
          >
            <nav className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  className="text-left text-foreground/80 hover:text-foreground font-medium uppercase tracking-wider text-sm py-2 px-0 transition-colors duration-200"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {link}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative w-full flex items-center overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "72px" }}
      data-ocid="hero.section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-background.dim_1920x1080.jpg')`,
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,15,30,0.82) 0%, rgba(0,15,30,0.65) 50%, rgba(0,15,30,0.3) 100%)",
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 110% 90% at 50% 50%, transparent 55%, rgba(0,8,20,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-12 py-20">
        <div className="max-w-[600px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-rb-red uppercase tracking-[0.25em] text-sm font-bold mb-4"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Energy Drink · Est. 1987
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-foreground uppercase leading-[0.95] font-black mb-6"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(56px, 8vw, 90px)",
              letterSpacing: "-0.01em",
              textShadow: "0 2px 32px rgba(0,0,0,0.5)",
            }}
          >
            Red Bull
            <br />
            Gives You
            <br />
            <span style={{ color: "oklch(0.49 0.22 25)" }}>Wings.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="text-foreground/70 uppercase tracking-[0.18em] text-base font-medium mb-10"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Energy Drink &nbsp;|&nbsp; Gives You Wings
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-rb-red hover:bg-rb-red-dark text-white font-bold uppercase tracking-widest rounded-lg px-7 py-3.5 text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                fontFamily: "Oswald, sans-serif",
                letterSpacing: "0.12em",
              }}
              data-ocid="hero.primary_button"
            >
              Discover the Red Bull World
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center border-2 border-foreground/70 hover:border-foreground text-foreground font-bold uppercase tracking-widest rounded-lg px-7 py-3.5 text-sm transition-all duration-200 hover:bg-foreground/10"
              style={{
                fontFamily: "Oswald, sans-serif",
                letterSpacing: "0.12em",
                background: "transparent",
              }}
              data-ocid="hero.secondary_button"
            >
              Explore Drinks
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-foreground/40 text-xs uppercase tracking-widest"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="w-0.5 h-8 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.49 0.22 25), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

// ─── Products Section ─────────────────────────────────────────────────────────

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col items-center text-center rounded-xl p-6 pt-0 group cursor-pointer"
      style={{
        background: "oklch(0.22 0.055 240)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
      data-ocid={`products.item.${index + 1}`}
    >
      {/* Can image */}
      <div
        className="relative flex items-end justify-center"
        style={{ height: "260px", width: "100%" }}
      >
        <motion.img
          src={product.image}
          alt={product.name}
          className="object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
          style={{
            maxHeight: "240px",
            maxWidth: "160px",
            filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.6))",
          }}
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className="mt-4 flex flex-col items-center gap-3">
        <span
          className="text-rb-muted text-xs uppercase tracking-[0.2em]"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          {product.tag}
        </span>
        <h3
          className="text-foreground text-2xl font-bold uppercase"
          style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}
        >
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px]">
          {product.description}
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-2 inline-flex items-center gap-2 border border-foreground/25 hover:border-foreground/60 text-foreground text-xs font-bold uppercase tracking-[0.15em] rounded-md px-6 py-2.5 transition-colors duration-200 hover:bg-foreground/5"
          style={{ fontFamily: "Oswald, sans-serif" }}
          data-ocid={`products.button.${index + 1}`}
        >
          Learn More <ChevronRight size={12} />
        </motion.a>
      </div>
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "oklch(0.17 0.046 240)" }}
      data-ocid="products.section"
    >
      {/* Energy splash glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 15% 60%, oklch(0.49 0.22 25 / 0.12) 0%, transparent 65%), radial-gradient(ellipse 60% 55% at 85% 40%, oklch(0.66 0.14 215 / 0.10) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-rb-red uppercase tracking-[0.25em] text-sm font-bold mb-3"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Our Range
          </p>
          <h2
            className="text-foreground uppercase font-black"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            Unleash the Energy
          </h2>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Section ────────────────────────────────────────────────────────────

function StatsSection() {
  return (
    <section
      className="w-full py-16"
      style={{ background: "oklch(0.49 0.22 25)" }}
      data-ocid="stats.section"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-foreground/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-8 py-4"
              data-ocid={`stats.item.${i + 1}`}
            >
              <stat.icon className="text-white/60 mb-3" size={28} />
              <span
                className="text-white font-black text-5xl leading-none mb-2"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-white/75 uppercase tracking-[0.2em] text-sm font-medium"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Activities Section ────────────────────────────────────────────────────────

function ActivityTile({
  activity,
  index,
}: { activity: Activity; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group cursor-pointer"
      data-ocid={`activities.item.${index + 1}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg aspect-video mb-5">
        <img
          src={activity.image}
          alt={activity.category}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Text */}
      <h3
        className="text-foreground uppercase font-bold text-xl mb-2"
        style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.06em" }}
      >
        {activity.category}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
        {activity.description}
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-1 text-rb-red hover:text-rb-red-dark font-semibold text-sm transition-colors duration-200"
        style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.06em" }}
        data-ocid={`activities.link.${index + 1}`}
      >
        Learn more <ChevronRight size={14} />
      </a>
    </motion.article>
  );
}

function ActivitiesSection() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.19 0.05 240)" }}
      data-ocid="activities.section"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p
            className="text-rb-blue uppercase tracking-[0.25em] text-sm font-bold mb-3"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            What We Do
          </p>
          <h2
            className="text-foreground uppercase font-black"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            Featured Activities
          </h2>
        </motion.div>

        {/* Tiles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {activities.map((activity, i) => (
            <ActivityTile key={activity.id} activity={activity} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: "oklch(0.14 0.04 240)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <RedBullLogo size={28} />
              <span
                className="text-foreground font-bold text-lg"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                RED BULL
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Red Bull Gives You Wings — the world's leading energy drink since
              1987.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-foreground uppercase text-sm font-bold tracking-[0.15em] mb-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Connect With Us
            </h4>
            <div className="flex gap-4 flex-wrap">
              {[
                { icon: SiFacebook, label: "Facebook" },
                { icon: SiInstagram, label: "Instagram" },
                { icon: SiX, label: "X" },
                { icon: SiYoutube, label: "YouTube" },
                { icon: SiTiktok, label: "TikTok" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="/"
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-ocid="footer.link"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-foreground uppercase text-sm font-bold tracking-[0.15em] mb-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                "Energy Drinks",
                "Athletes",
                "Events",
                "Gaming",
                "Music",
                "Motorsports",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                    data-ocid="footer.link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-foreground uppercase text-sm font-bold tracking-[0.15em] mb-5"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms of Use",
                "Imprint",
                "Cookie Policy",
                "Accessibility",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                    data-ocid="footer.link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            © {year} Red Bull GmbH. All Rights Reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with <span className="text-rb-red">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <StatsSection />
        <ActivitiesSection />
      </main>
      <Footer />
    </div>
  );
}
