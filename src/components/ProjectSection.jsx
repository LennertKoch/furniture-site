import { useEffect, useState } from "react";

function ProjectSection({
  variant = "featureTop",
  label,
  title,
  text,
  topImage,
  bottomLeftImage,
  bottomRightImage,
  leftImage,
  desktopTopImage,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectLabelStyle = {
    fontSize: "11px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "10px",
  };

  const projectTitleStyle = {
    fontFamily: '"EB Garamond", serif',
    fontWeight: 400,
    fontSize: "40px",
    margin: "0 0 12px",
    letterSpacing: "-0.01em",
  };

  const projectBodyStyle = {
    fontFamily: '"EB Garamond", serif',
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "1.7",
    letterSpacing: "0.01em",
    margin: 0,
  };

  const mobileLabelStyle = {
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#8a837d",
    marginBottom: "10px",
  };

  const mobileTitleStyle = {
    fontFamily: '"EB Garamond", serif',
    fontWeight: 400,
    fontSize: "30px",
    lineHeight: "1.05",
    letterSpacing: "-0.01em",
    color: "#3a342f",
    margin: "0 0 14px",
  };

  const mobileBodyStyle = {
    fontFamily: '"EB Garamond", serif',
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "1.72",
    letterSpacing: "0.01em",
    color: "#4a433d",
    margin: 0,
  };

  const renderMobileProject = () => (
    <div
      style={{
        display: "grid",
        gap: "16px",
        paddingBottom: "32px",
      }}
    >
      <div
        style={{
          padding: "0 6px 14px",
          maxWidth: "88%",
        }}
      >
        <div style={mobileLabelStyle}>{label}</div>
        <h2 style={mobileTitleStyle}>{title}</h2>
        <p style={mobileBodyStyle}>{text}</p>
      </div>

      <div
        style={{
          overflow: "hidden",
          border: "1px solid #e5e2dc",
          borderRadius: "16px",
          background: "#f8f6f1",
        }}
      >
        <img
          src={topImage}
          alt={title}
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            border: "1px solid #e5e2dc",
            borderRadius: "16px",
            background: "#f8f6f1",
          }}
        >
          <img
            src={bottomLeftImage}
            alt={title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>

        <div
          style={{
            overflow: "hidden",
            border: "1px solid #e5e2dc",
            borderRadius: "16px",
            background: "#f8f6f1",
          }}
        >
          <img
            src={bottomRightImage}
            alt={title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section
      style={{
        padding: isMobile ? "48px 20px" : "96px 24px",
        borderTop: "1px solid #e5e2dc",
        background: "#f8f6f1",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {isMobile ? (
          renderMobileProject()
        ) : (
          <>
            {variant === "featureTop" && (
              <div
                style={{
                  display: "grid",
                  gap: "22px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    border: "2px solid #e5e2dc",
                    borderRadius: "16px",
                    background: "#f8f6f1",
                  }}
                >
                  <img
                    src={topImage}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "448px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: "24px",
                      bottom: "24px",
                      maxWidth: "260px",
                      color: "#f5f1ea",
                    }}
                  >
                    <div
                      style={{
                        ...projectLabelStyle,
                        opacity: 0.85,
                      }}
                    >
                      {label}
                    </div>

                    <h2 style={projectTitleStyle}>{title}</h2>

                    <p
                      style={{
                        ...projectBodyStyle,
                        opacity: 0.9,
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      border: "2px solid #e5e2dc",
                      borderRadius: "16px",
                      background: "#f8f6f1",
                    }}
                  >
                    <img
                      src={bottomLeftImage}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "288px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      overflow: "hidden",
                      border: "2px solid #e5e2dc",
                      borderRadius: "16px",
                      background: "#f8f6f1",
                    }}
                  >
                    <img
                      src={bottomRightImage}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "288px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {variant === "leftFeature" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.35fr 0.65fr",
                  border: "2px solid #e5e2dc",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#f8f6f1",
                  height: "min(85vh, 820px)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRight: "2px solid #e5e2dc",
                  }}
                >
                  <img
                    src={topImage}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      background: "#f8f6f1",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: "32px",
                      bottom: "32px",
                      maxWidth: "220px",
                      color: "#f5f1ea",
                    }}
                  >
                    <div
                      style={{
                        ...projectLabelStyle,
                        opacity: 0.85,
                      }}
                    >
                      {label}
                    </div>

                    <h2 style={projectTitleStyle}>{title}</h2>

                    <p
                      style={{
                        ...projectBodyStyle,
                        opacity: 0.9,
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "60% 40%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      borderBottom: "2px solid #e5e2dc",
                    }}
                  >
                    <img
                      src={bottomLeftImage}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  <div style={{ overflow: "hidden" }}>
                    <img
                      src={bottomRightImage}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {variant === "rightFeature" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.08fr 0.92fr",
                  border: "2px solid #e5e2dc",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#f8f6f1",
                  height: "min(85vh, 820px)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    borderRight: "2px solid #e5e2dc",
                  }}
                >
                  <img
                    src={bottomRightImage}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: "24px",
                      bottom: "24px",
                      maxWidth: "240px",
                      color: "#f5f1ea",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        ...projectLabelStyle,
                        opacity: 0.85,
                      }}
                    >
                      {label}
                    </div>

                    <h2 style={projectTitleStyle}>{title}</h2>

                    <p
                      style={{
                        ...projectBodyStyle,
                        opacity: 0.9,
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "58% 42%",
                    height: "100%",
                    minHeight: 0,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderBottom: "2px solid #e5e2dc",
                    }}
                  >
                    <img
                      src={topImage}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  <div style={{ overflow: "hidden" }}>
                    <img
                      src={bottomLeftImage}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {variant === "rightFeatureYushoku" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.08fr 0.92fr",
                  border: "2px solid #e5e2dc",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#f8f6f1",
                  height: "min(85vh, 820px)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    borderRight: "2px solid #e5e2dc",
                  }}
                >
                  <img
                    src={bottomRightImage}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top left, rgba(0,0,0,0.42), rgba(0,0,0,0.06) 60%)",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: "24px",
                      bottom: "24px",
                      maxWidth: "240px",
                      color: "#eae6df",
                      zIndex: 2,
                      textShadow: "0 1px 2px rgba(0,0,0,0.22)",
                    }}
                  >
                    <div
                      style={{
                        ...projectLabelStyle,
                        opacity: 0.9,
                      }}
                    >
                      {label}
                    </div>

                    <h2 style={projectTitleStyle}>{title}</h2>

                    <p
                      style={{
                        ...projectBodyStyle,
                        opacity: 0.95,
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "58% 42%",
                    height: "100%",
                    minHeight: 0,
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      borderBottom: "2px solid #e5e2dc",
                    }}
                  >
                    <img
                      src={topImage}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  <div style={{ overflow: "hidden" }}>
                    <img
                      src={bottomLeftImage}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {variant === "leftFeatureGetabako" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 0.6fr",
                  border: "2px solid #e5e2dc",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#f8f6f1",
                  height: "min(85vh, 820px)",
                  minHeight: 0,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    minHeight: 0,
                    borderRight: "2px solid #e5e2dc",
                  }}
                >
                  <img
                    src={bottomRightImage}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom right, rgba(0,0,0,0.28), rgba(0,0,0,0.04) 60%)",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: "24px",
                      bottom: "24px",
                      maxWidth: "300px",
                      color: "#eae6df",
                      zIndex: 2,
                      textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div
                      style={{
                        ...projectLabelStyle,
                        opacity: 0.9,
                      }}
                    >
                      {label}
                    </div>

                    <h2 style={projectTitleStyle}>{title}</h2>

                    <p
                      style={{
                        ...projectBodyStyle,
                        opacity: 0.95,
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "1fr 1fr",
                    height: "100%",
                    minHeight: 0,
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      borderBottom: "2px solid #e5e2dc",
                      minHeight: 0,
                    }}
                  >
                    <img
                      src={topImage}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      overflow: "hidden",
                      minHeight: 0,
                    }}
                  >
                    <img
                      src={bottomLeftImage}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {variant === "koffie" && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.85fr 1.15fr",
                  border: "2px solid #e5e2dc",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#f8f6f1",
                  height: "min(88vh, 840px)",
                }}
              >
                <div
  style={{
    position: "relative",
    height: "100%",
    overflow: "hidden",
    borderRight: "2px solid #e5e2dc",
  }}
>
  <img
    src={leftImage || topImage}
    alt={title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "left center",
      transform: "scale(1.18)",
      display: "block",
    }}
  />

  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
  "linear-gradient(to top, rgba(20,18,16,0.58), rgba(20,18,16,0.28) 42%, rgba(20,18,16,0.08) 72%, transparent)",
      pointerEvents: "none",
    }}
  />

    <div
    style={{
      position: "absolute",
      left: "36px",
      bottom: "140px",
      maxWidth: "320px",
      color: "#f5f1ea",
      paddingRight: "8px",
      textShadow: "0 2px 10px rgba(0,0,0,0.22)",
    }}
  >
    <div
      style={{
        ...projectLabelStyle,
        opacity: 0.9,
      }}
    >
      {label}
    </div>

    <h2 style={projectTitleStyle}>{title}</h2>

    <p
      style={{
        ...projectBodyStyle,
        opacity: 0.95,
      }}
    >
      {text}
    </p>
  </div>
</div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "44% 56%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      borderBottom: "2px solid #e5e2dc",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={desktopTopImage || topImage}
                      alt={title}
                      style={{
  width: "100%",
  height: "100%",
  objectFit: "cover",
transform: "scale(1.04)",
  objectPosition: "center",
  display: "block",
  background: "#f8f6f1",
  padding: "8px 0 0",
  filter: "contrast(0.96) saturate(0.95)",
}}
                      />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        borderRight: "2px solid #e5e2dc",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={bottomLeftImage}
                        alt={title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          display: "block",
                        }}
                      />
                    </div>

                    <div style={{ overflow: "hidden" }}>
                      <img
                        src={bottomRightImage}
                        alt={title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          display: "block",
                          filter: "contrast(0.96) saturate(0.95)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default ProjectSection;