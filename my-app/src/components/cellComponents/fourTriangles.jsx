// src/components/CellComponents/FourTriangles.jsx
import React from "react";
import { COLORS } from "../../utils/constants";

export default function FourTriangles({ colors }) {
  return (
    <>
      {/* Top triangle */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: COLORS[colors.color1],
          clipPath: "polygon(0 0, 100% 0, 50% 50%)"
        }}
      />
      {/* Bottom triangle */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: COLORS[colors.color2],
          clipPath: "polygon(0 100%, 100% 100%, 50% 50%)"
        }}
      />
      {/* Left triangle */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: COLORS[colors.color3],
          clipPath: "polygon(0 0, 0 100%, 50% 50%)"
        }}
      />
      {/* Right triangle */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: COLORS[colors.color4],
          clipPath: "polygon(100% 0, 100% 100%, 50% 50%)"
        }}
      />
    </>
  );
}
