import { ImageResponse } from "next/og";
export const alt = "Luis Felipe Tech — Sites, agendamentos e sistemas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b1629",
        color: "#f3f7ff",
        padding: "68px 76px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <span
          style={{
            background: "#8dceff",
            color: "#0b1629",
            padding: "8px 18px",
            borderRadius: 14,
            fontSize: 42,
            fontWeight: 700,
          }}
        >
          lf.
        </span>
        <span style={{ fontSize: 24 }}>Luis Felipe Tech</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 80,
          lineHeight: 1.08,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        <span>Seu negócio, uma versão</span>
        <span style={{ color: "#8dceff" }}>mais digital.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#b8c9e0",
        }}
      >
        <span>Sites · Agendamentos · Sistemas · Dashboards</span>
        <span>Campinas, SP</span>
      </div>
    </div>,
    size,
  );
}
