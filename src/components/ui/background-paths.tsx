"use client";

import { motion } from "framer-motion";

// Lightweight: 10 paths per side, opacity-only animation (no pathOffset = no flicker)
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    d: `M-${360 - i * 8 * position} -${180 + i * 7}C-${
      360 - i * 8 * position
    } -${180 + i * 7} -${290 - i * 8 * position} ${230 - i * 7} ${
      160 - i * 8 * position
    } ${350 - i * 7}C${620 - i * 8 * position} ${470 - i * 7} ${
      680 - i * 8 * position
    } ${880 - i * 7} ${680 - i * 8 * position} ${880 - i * 7}`,
    width: 0.5 + i * 0.04,
    baseOpacity: 0.03 + i * 0.018,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#CA8A04"
            strokeWidth={path.width}
            initial={{ opacity: 0 }}
            animate={{ opacity: [path.baseOpacity * 0.4, path.baseOpacity, path.baseOpacity * 0.4] }}
            transition={{
              duration: 5 + path.id * 1.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: path.id * 0.4,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
