import { useEffect, useState } from "react";
import ProjectSection from "./components/ProjectSection";
export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const sectionStyle = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: isMobile ? "0 20px" : "0 24px",
};

  const headingLabel = {
    fontSize: "12px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#8a837d",
    marginBottom: "12px",
  };

 const bodyText = {
  fontFamily: '"EB Garamond", serif',
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "1.75",
  letterSpacing: "0.01em",
  color: "#57534e",
  maxWidth: "560px",
  margin: "0 0 18px",
};

  const imageCard = {
    overflow: "hidden",
    borderRadius: "24px",
    background: "#f1f0ec",
  };

  const type = {
  label: {
    fontSize: "11px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#8a837d",
  },
  title: {
    fontFamily: '"EB Garamond", serif',
    fontWeight: 400,
    letterSpacing: "-0.01em",
  },
  subtitle: {
    fontSize: "12px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#6b645f",
  },

  // 🔥 UPDATED BODY STYLE (matches Koffie feel)
  body: {
    fontFamily: '"EB Garamond", serif',
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "1.7",
    letterSpacing: "0.01em",
    color: "#3f3a36",
    maxWidth: "560px",
    opacity: 0.9,
  },
};
const koffieImages = {
  desktop: {
    top: "/images/koffie_detail_2.webp",
    bottomLeft: "/images/koffie_detail_1.webp",
    bottomRight: "/images/koffie_detail_3.webp",
  },
  mobile: {
    top: "/images/koffie.webp",
    bottomLeft: "/images/koffie_detail_1.webp",
    bottomRight: "/images/koffie_detail_3.webp",
  },
};
  return (
    <div
      style={{
        background: "#f8f6f1",
        color: "#292524",
        fontFamily: '"Inter", sans-serif',
        scrollBehavior: "smooth",
      }}
    >
      <header
  style={{
    minHeight: "85vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "1px solid #e5e2dc",
  }}
>
  <div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",   // 👈 KEY CHANGE
    alignItems: isMobile ? "flex-start" : "center",
    justifyContent: "space-between",
    gap: isMobile ? "10px" : "0px",              // 👈 spacing between logo + nav
    padding: isMobile ? "18px 20px" : "20px 24px",
    fontSize: "13px",
    letterSpacing: isMobile ? "0.16em" : "0.18em",
    textTransform: "uppercase",
    color: "#8a837d",
    borderBottom: "1px solid #e5e2dc",
  }}
>
    <div>
      <img
        src="/images/logo.svg"
        alt="Koch Furniture Design"
        style={{
          height: isMobile ? "72px" : "104px",
          width: "auto",
          display: "block",
        }}
      />
    </div>

    <div
  style={{
    display: "flex",
    gap: isMobile ? "22px" : "28px",
    rowGap: "10px",
    flexWrap: "wrap",
  }}
>
      <a href="#portfolio" style={{ color: "inherit", textDecoration: "none" }}>
        Work
      </a>
      <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>
        About
      </a>
      <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>
        Contact
      </a>
    </div>
  </div>

  <div
  style={{
    height: isMobile ? "auto" : "calc(72vh - 120px)",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "0.8fr 1.2fr",
    gridTemplateRows: isMobile ? "auto auto" : "none",
    minHeight: 0,
  }}
>
    <div
  style={{
  position: "relative",
  overflow: "hidden",
  borderRight: isMobile ? "none" : "1px solid #e5e2dc",
  borderBottom: isMobile ? "1px solid #e5e2dc" : "none",
  minHeight: 0,
  height: isMobile ? "auto" : "auto",
  order: isMobile ? 2 : 1,
  display: "flex",
  flexDirection: isMobile ? "column" : "column",
  justifyContent: isMobile ? "flex-start" : "center",
  background: isMobile ? "transparent" : "#f5f3ee",
}}
  onMouseEnter={(e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1.04)";
  }}
  onMouseLeave={(e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1.01)";
  }}
>
  <img
  src="/images/home1.webp"
  alt="Furniture detail"
  style={{
    width: "100%",
    height: isMobile ? "320px" : "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
    filter: "saturate(0.78) brightness(0.92)",
    transform: "scale(1.01)",
    transition: "transform 0.45s ease",
  }}
/>

      <div
  style={{
    position: "absolute",
    inset: 0,
    background: isMobile
      ? "none"
      : "linear-gradient(to right, rgba(248,246,241,0.78), rgba(248,246,241,0.42) 42%, rgba(248,246,241,0.14) 72%, rgba(248,246,241,0.04) 100%)",
    pointerEvents: "none",
  }}
/>

      <div
  style={{
    position: isMobile ? "relative" : "absolute",
    left: isMobile ? "auto" : "64px",
    right: isMobile ? "auto" : "auto",
    bottom: isMobile ? "auto" : "96px",
    maxWidth: isMobile ? "100%" : "460px",
    color: "#2b2521",
    padding: isMobile ? "28px 20px 32px" : 0,
  }}
>
  <div
    style={{
      fontSize: "12px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "rgba(58,52,47,0.42)",
      marginBottom: "18px",
    }}
  >
          Bespoke Furniture
        </div>

        <h1
    style={{
      fontFamily: '"EB Garamond", serif',
      fontWeight: 400,
      fontSize: isMobile ? "36px" : "clamp(34px, 3.8vw, 58px)",
      lineHeight: "1.05",
      letterSpacing: "-0.005em",
      margin: "0 0 18px",
      maxWidth: isMobile ? "100%" : "390px",
      color: "#3a342f",
    }}
  >
  Crafted with care.<br />
  Defined by detail.
</h1>

        <p
  style={{
    fontFamily: '"EB Garamond", serif',
    fontSize: isMobile ? "17px" : "16px",
    lineHeight: "1.75",
    color: "#4e4741",
    maxWidth: isMobile ? "92%" : "380px",
    margin: "0 0 18px",
  }}
>
  Furniture designed and made with a focus on material, 
  structure and longevity.
</p>

        <div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "12px" : "14px",
    marginTop: isMobile ? "20px" : "0",
  }}
>
          <a
  href="#portfolio"
  onClick={(e) => {
    e.preventDefault();
    const el = document.getElementById("portfolio");
    if (!el) return;

    const start = window.scrollY;
    const offset = 40; // adjust this
const end = el.getBoundingClientRect().top + window.scrollY + offset;
    const duration = 900;
    let startTime = null;

    const easeInOut = (t) =>
      t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animate = (time) => {
  if (!startTime) startTime = time;
  const progress = Math.min((time - startTime) / duration, 1);
  const eased = easeInOut(progress);

  window.scrollTo(0, start + (end - start) * eased);

  const target = document.getElementById("portfolio");
  if (target) {
    if (progress > 0.72) {
      const localProgress = (progress - 0.72) / 0.28;
      target.style.opacity = String(0.78 + localProgress * 0.22);
      target.style.transform = `translateY(${8 - localProgress * 8}px)`;
    } else {
      target.style.opacity = "0.78";
      target.style.transform = "translateY(8px)";
    }
  }

  if (progress < 1) {
    requestAnimationFrame(animate);
  }
};

    requestAnimationFrame(animate);
  }}
  style={{
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: isMobile ? "100%" : "auto",
  background: "#2a2420",
  color: "#fff",
  textDecoration: "none",
  padding: isMobile ? "16px 20px" : "16px 24px 14px",
  borderRadius: "999px",
  fontSize: "12px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  transition: "all 0.2s ease",
}}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#3a332e";
    e.currentTarget.style.transform = "translateY(-1px)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#2a2420";
    e.currentTarget.style.transform = "translateY(0)";
  }}
>
  View Portfolio
</a>
          <a
  href="#contact"
  style={{
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: isMobile ? "100%" : "auto",
  background: "rgba(255,255,255,0.7)",
  color: "#292524",
  textDecoration: "none",
  padding: isMobile ? "16px 20px" : "16px 24px 14px",
  borderRadius: "999px",
  border: "1px solid #d6d3d1",
  fontSize: "12px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  backdropFilter: "blur(4px)",
  transition: "all 0.2s ease",
}}
  onMouseEnter={e => {
    e.currentTarget.style.background = "rgba(255,255,255,0.85)";
    e.currentTarget.style.borderColor = "#bfb8b0";
    e.currentTarget.style.transform = "translateY(-1px)";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.background = "rgba(255,255,255,0.65)";
    e.currentTarget.style.borderColor = "#d6d3d1";
    e.currentTarget.style.transform = "translateY(0)";
  }}
>
  Make an Enquiry
</a>
        </div>
      </div>
    </div>

    <div
  style={{
    overflow: "hidden",
    minHeight: 0,
    marginTop: isMobile ? 0 : 0,
    order: isMobile ? 1 : 2,
    display: isMobile ? "block" : "flex",
    alignItems: isMobile ? "stretch" : "flex-start",
    justifyContent: isMobile ? "stretch" : "center",
    background: "transparent",
  }}
  onMouseEnter={(e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1.02)";
  }}
  onMouseLeave={(e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1.0)";
  }}
>
      <img
  src="/images/yushoku/yushoku.webp"
  alt="Yushoku hero"
  style={{
    width: "100%",
    height: isMobile ? "36vh" : "100%",
    objectFit: "cover",
    objectPosition: isMobile ? "center 60%" : "50% 60%",
    display: "block",
    transform: "scale(1.02)",
    transition: "transform 0.6s ease",
  }}
/>
    </div>
  </div>

  <div
  style={{
    padding: isMobile ? "40px 20px 44px" : "20px 24px",
    fontSize: isMobile ? "11px" : "12px",
    letterSpacing: isMobile ? "0.16em" : "0.18em",
    textTransform: "uppercase",
    color: isMobile ? "#9a928a" : "#8a837d",
    borderTop: "1px solid #e5e2dc",
  }}
>
    Crafted for private clients, galleries and design-led retailers.
  </div>
</header>
    

      <main>
        
<div
  id="portfolio"
  style={{
    opacity: 1,
    transform: "translateY(0)",
    transition: "none",
  }}
>
  <ProjectSection
    variant="rightFeatureYushoku"
    label="01 / Dining Table / Commissioned"
    title="Yūshoku"
    text="Dining table in locally sourced hardwood, constructed using traditional joinery. The design emphasises proportion, stability, and the clarity of each structural connection."
    topImage="/images//yushoku/yushoku.webp"
    bottomLeftImage="/images//yushoku/yushoku_detail_2.webp"
    bottomRightImage="/images/yushoku/yushoku_detail_1.webp"
  />
</div>

<ProjectSection
  variant="rightFeature"
  label="02 / Desk / Commissioned"
  title="Kanryō"
  text="Desk in locally sourced hardwood, constructed using traditional joinery. The form is kept minimal, with a focus on proportion, working surface, and integrated cable management."
  topImage="/images/kanryo/kanryo.webp"
  bottomLeftImage="/images/kanryo/kanryo_detail_1.webp"
  bottomRightImage="/images/kanryo/kanryo_detail_2.webp"
/>

        <ProjectSection
  variant="koffie"
  label="03 / Coffee Table / Commissioned"
  title="Koffie"
  text="Japanese-inspired coffee table in locally sourced hardwood, constructed using traditional joinery. The form is kept minimal, with a focus on proportion, surface, and clean structural connections."
  topImage={isMobile ? "/images/koffie.webp" : "/images/koffie_detail_2.webp"}
  leftImage="/images/koffie_detail_2.webp"
  desktopTopImage="/images/koffie.webp"
  bottomLeftImage="/images/koffie_detail_1.webp"
  bottomRightImage="/images/koffie_detail_3.webp"
/>

        

        <ProjectSection
  variant="leftFeatureGetabako"
  label="04 / Hallway Storage Unit / Commissioned"
  title="Getabako"
  text="Modular hallway storage unit designed for everyday use and longevity. Constructed from locally sourced Scottish oak, combining open shelving with integrated drawer storage to balance visibility and containment."
  topImage="/images/getabako/getabako_detail_1.webp"
  bottomLeftImage="/images/getabako/getabako_detail_2.webp"
  bottomRightImage="/images/getabako/getabako.webp"
/>

        <section
  id="about"
  style={{
    padding: isMobile ? "72px 0 84px" : "112px 0 120px",
    borderTop: "1px solid #e5e2dc",
    background: "#f2efe8",
  }}
>
  <div
    style={{
      ...sectionStyle,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "0.95fr 1.05fr",
      gap: isMobile ? "28px" : "48px",
      alignItems: "start",
    }}
  >
    <div
      style={{
        ...imageCard,
        background: "#111",
        border: "1px solid #e5e2dc",
        maxWidth: isMobile ? "100%" : "none",
      }}
    >
      <img
        src="/images/portrait.webp"
        alt="Lennert Koch portrait"
        style={{
          width: "100%",
          height: isMobile ? "420px" : "auto",
          objectFit: "cover",
          objectPosition: isMobile ? "center 24%" : "center",
          display: "block",
          filter: "grayscale(100%) contrast(0.92) brightness(1.05)",
        }}
      />
    </div>

    <div
      style={{
        paddingTop: isMobile ? "0" : "8px",
        maxWidth: isMobile ? "90%" : "520px",
      }}
    >
      <div
        style={{
          ...headingLabel,
          marginBottom: isMobile ? "10px" : "12px",
        }}
      >
        About
      </div>

      <h2
        style={{
          fontFamily: '"EB Garamond", serif',
          fontWeight: 400,
          fontSize: isMobile ? "36px" : "44px",
          lineHeight: isMobile ? "1.02" : "1.05",
          letterSpacing: "-0.01em",
          color: "#3a342f",
          margin: "0 0 8px",
        }}
      >
        Lennert Koch
      </h2>

      <div
        style={{
          fontSize: isMobile ? "11px" : "12px",
          letterSpacing: isMobile ? "0.14em" : "0.16em",
          textTransform: "uppercase",
          color: "#9c948c",
          marginBottom: isMobile ? "20px" : "24px",
        }}
      >
        Furniture Designer &amp; Maker
      </div>

      <p
        style={{
          ...bodyText,
          maxWidth: isMobile ? "100%" : "560px",
          margin: isMobile ? "0 0 16px" : bodyText.margin,
        }}
      >
        I design and make furniture with a considered approach to materials, 
        construction, and longevity. My work draws on traditional joinery, with 
        an emphasis on precision, restraint, and proportion.
      </p>

      <p
        style={{
          ...bodyText,
          maxWidth: isMobile ? "100%" : "560px",
          margin: isMobile ? "0 0 16px" : bodyText.margin,
        }}
      >
        Each piece develops through direct engagement with the material—
        typically locally sourced hardwoods—allowing the timber to inform 
        both form and construction.
      </p>

      <p
        style={{
          ...bodyText,
          maxWidth: isMobile ? "100%" : "560px",
          margin: isMobile ? "0 0 16px" : bodyText.margin,
        }}
      >
        I am particularly interested in the relationship between 
        structure and surface: how joints resolve, how components meet, 
        and how objects age over time. The aim is to create work that is both 
        robust and visually quiet.
      </p>

      <div
        style={{
          paddingTop: isMobile ? "24px" : "32px",
          marginTop: isMobile ? "24px" : "32px",
          borderTop: "1px solid #d6d3d1",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "18px" : "24px",
          fontSize: "14px",
          maxWidth: isMobile ? "100%" : "none",
        }}
      >
        <div>
          <div
            style={{
              ...headingLabel,
              marginBottom: "8px",
              color: "#9c948c",
              fontSize: isMobile ? "11px" : headingLabel.fontSize,
              letterSpacing: isMobile ? "0.16em" : headingLabel.letterSpacing,
            }}
          >
            Email
          </div>
          <div>info@kochfurniture.com</div>
        </div>

        <div>
          <div
            style={{
              ...headingLabel,
              marginBottom: "8px",
              color: "#9c948c",
              fontSize: isMobile ? "11px" : headingLabel.fontSize,
              letterSpacing: isMobile ? "0.16em" : headingLabel.letterSpacing,
            }}
          >
            Instagram
          </div>
          <div>koch_furniture</div>
        </div>

        <div>
          <div
            style={{
              ...headingLabel,
              marginBottom: "8px",
              color: "#9c948c",
              fontSize: isMobile ? "11px" : headingLabel.fontSize,
              letterSpacing: isMobile ? "0.16em" : headingLabel.letterSpacing,
            }}
          >
            Location
          </div>
          <div>Edinburgh, Scotland</div>
        </div>

        <div>
          <div
            style={{
              ...headingLabel,
              marginBottom: "8px",
              color: "#9c948c",
              fontSize: isMobile ? "11px" : headingLabel.fontSize,
              letterSpacing: isMobile ? "0.16em" : headingLabel.letterSpacing,
            }}
          >
            Commissions
          </div>
          <div>Available on request</div>
        </div>
      </div>
    </div>
  </div>
</section>

        <section
  id="contact"
  style={{
    padding: isMobile ? "72px 0 88px" : "96px 0 120px",
    borderTop: "1px solid #e5e2dc",
    background: "#f8f6f1",
  }}
>
  <div
    style={{
      ...sectionStyle,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
      gap: isMobile ? "32px" : "48px",
      alignItems: "start",
    }}
  >
    <div style={{ maxWidth: isMobile ? "90%" : "none" }}>
      <div
        style={{
          ...headingLabel,
          marginBottom: isMobile ? "10px" : headingLabel.marginBottom,
        }}
      >
        Contact
      </div>

      <h2
        style={{
          fontFamily: '"EB Garamond", "Times New Roman", serif',
          fontWeight: 400,
          fontSize: isMobile ? "36px" : "48px",
          lineHeight: isMobile ? "1.04" : "1.08",
          letterSpacing: "-0.01em",
          margin: "0 0 18px",
          maxWidth: isMobile ? "100%" : "700px",
          color: "#3a342f",
        }}
      >
        Discuss a commission, collaboration or stockist enquiry.
      </h2>

      <p
        style={{
          ...bodyText,
          maxWidth: isMobile ? "100%" : "560px",
          margin: isMobile ? "0 0 18px" : bodyText.margin,
        }}
      >
        For bespoke commissions, gallery enquiries and retail
        partnerships, please get in touch. I welcome conversations around
        one-off pieces, small collections and made-to-measure work.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "18px" : "24px",
          paddingTop: isMobile ? "18px" : "20px",
          fontSize: "14px",
          maxWidth: isMobile ? "100%" : "none",
        }}
      >
        <div>
          <div
            style={{
              ...headingLabel,
              marginBottom: "8px",
              fontSize: isMobile ? "11px" : headingLabel.fontSize,
              letterSpacing: isMobile ? "0.16em" : headingLabel.letterSpacing,
            }}
          >
            Email
          </div>
          <div>Lennert.koch76@gmail.com</div>
        </div>

        <div>
          <div
            style={{
              ...headingLabel,
              marginBottom: "8px",
              fontSize: isMobile ? "11px" : headingLabel.fontSize,
              letterSpacing: isMobile ? "0.16em" : headingLabel.letterSpacing,
            }}
          >
            Instagram
          </div>
          <div>koch_furniture</div>
        </div>

        <div>
          <div
            style={{
              ...headingLabel,
              marginBottom: "8px",
              fontSize: isMobile ? "11px" : headingLabel.fontSize,
              letterSpacing: isMobile ? "0.16em" : headingLabel.letterSpacing,
            }}
          >
            Location
          </div>
          <div>Edinburgh, Scotland</div>
        </div>

        <div>
          <div
            style={{
              ...headingLabel,
              marginBottom: "8px",
              fontSize: isMobile ? "11px" : headingLabel.fontSize,
              letterSpacing: isMobile ? "0.16em" : headingLabel.letterSpacing,
            }}
          >
            Commissions
          </div>
          <div>Available on request</div>
        </div>
      </div>

      <form
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent!");
      e.target.reset();
    } else {
      alert("Something went wrong.");
    }
  }}
  style={{
    display: "grid",
    gap: isMobile ? "12px" : "16px",
    paddingTop: isMobile ? "24px" : "20px",
    maxWidth: isMobile ? "100%" : "560px",
  }}
>
  <input
    name="name"
    placeholder="Name"
    style={{
      borderRadius: "18px",
      border: "1px solid #e2ded8",
      background: "#fff",
      padding: isMobile ? "15px 16px" : "14px 16px",
      fontSize: "15px",
      fontFamily: '"Inter", sans-serif',
      outline: "none",
    }}
  />

  <input
    name="email"
    placeholder="Email"
    style={{
      borderRadius: "18px",
      border: "1px solid #e2ded8",
      background: "#fff",
      padding: isMobile ? "15px 16px" : "14px 16px",
      fontSize: "15px",
      fontFamily: '"Inter", sans-serif',
      outline: "none",
    }}
  />

  <textarea
    name="message"
    placeholder="Tell me about your project"
    style={{
      borderRadius: "16px",
      border: "1px solid #e2ded8",
      background: "#fff",
      padding: "14px 16px",
      fontSize: "15px",
      fontFamily: '"Inter", sans-serif',
      minHeight: isMobile ? "132px" : "140px",
      resize: "vertical",
      outline: "none",
    }}
  />

  <button
    type="submit"
    style={{
      width: isMobile ? "100%" : "fit-content",
      padding: isMobile ? "16px 22px" : "14px 24px",
      borderRadius: "999px",
      background: "#3f3a36",
      color: "#fff",
      border: "none",
      fontSize: "12px",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      cursor: "pointer",
    }}
  >
    Send Enquiry
  </button>
</form>
    </div>

    <div
      style={{
        ...imageCard,
        order: isMobile ? -1 : 0,
      }}
    >
      <img
        src="/images/workshop.webp"
        alt="Workshop detail"
        style={{
          width: "100%",
          height: isMobile ? "360px" : "512px",
          objectFit: "cover",
          objectPosition: isMobile ? "center 35%" : "center",
          display: "block",
        }}
      />
    </div>
  </div>
</section>
      </main>
    </div>
  );
}