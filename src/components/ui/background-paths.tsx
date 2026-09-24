"use client";

/**
 * Pure CSS animated SVG paths — no Framer Motion, no rAF, no JS timers.
 * Uses CSS animation with will-change:opacity so the browser composites
 * these on their own GPU layer and never repaints the page on scroll.
 */
export function BackgroundPaths() {
  // Static path shapes — pre-computed, no runtime math
  const left = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-425 -183C-425 -183 -357 222 107 349C571 476 639 881 639 881",
    "M-470 -177C-470 -177 -402 228 62 355C526 482 594 887 594 887",
    "M-515 -171C-515 -171 -447 234 17 361C481 488 549 893 549 893",
    "M-560 -165C-560 -165 -492 240 -28 367C436 494 504 899 504 899",
    "M-605 -159C-605 -159 -537 246 -73 373C391 500 459 905 459 905",
    "M-650 -153C-650 -153 -582 252 -118 379C346 506 414 911 414 911",
    "M-695 -147C-695 -147 -627 258 -163 385C301 512 369 917 369 917",
  ];
  const right = [
    "M380 -189C380 -189 312 216 -152 343C-616 470 -684 875 -684 875",
    "M425 -183C425 -183 357 222 -107 349C-571 476 -639 881 -639 881",
    "M470 -177C470 -177 402 228 -62 355C-526 482 -594 887 -594 887",
    "M515 -171C515 -171 447 234 -17 361C-481 488 -549 893 -549 893",
    "M560 -165C560 -165 492 240 28 367C-436 494 -504 899 -504 899",
    "M605 -159C605 -159 537 246 73 373C-391 500 -459 905 -459 905",
    "M650 -153C650 -153 582 252 118 379C-346 506 -414 911 -414 911",
    "M695 -147C695 -147 627 258 163 385C-301 512 -369 917 -369 917",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <style>{`
        @keyframes tsn-path-pulse {
          0%, 100% { opacity: var(--op-lo); }
          50%       { opacity: var(--op-hi); }
        }
        .tsn-path {
          animation: tsn-path-pulse var(--dur, 6s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
          will-change: opacity;
        }
      `}</style>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {left.map((d, i) => (
          <path
            key={`l${i}`}
            d={d}
            stroke="#CA8A04"
            strokeWidth={0.4 + i * 0.05}
            className="tsn-path"
            style={{
              "--op-lo": String(0.02 + i * 0.008),
              "--op-hi": String(0.06 + i * 0.01),
              "--dur": `${5 + i * 0.9}s`,
              "--delay": `${i * 0.35}s`,
            } as React.CSSProperties}
          />
        ))}
        {right.map((d, i) => (
          <path
            key={`r${i}`}
            d={d}
            stroke="#CA8A04"
            strokeWidth={0.4 + i * 0.05}
            className="tsn-path"
            style={{
              "--op-lo": String(0.02 + i * 0.008),
              "--op-hi": String(0.06 + i * 0.01),
              "--dur": `${5.5 + i * 0.9}s`,
              "--delay": `${0.2 + i * 0.35}s`,
            } as React.CSSProperties}
          />
        ))}
      </svg>
    </div>
  );
}
