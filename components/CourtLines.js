// Signature visual element: a badminton court drawn to real proportions.
//
// Official doubles court = 13.40 m long x 6.10 m wide. Drawn here at 60 px per metre:
//   - outer rectangle .......... doubles sidelines + back boundary lines
//   - singles sidelines ........ 0.46 m inside the doubles sidelines
//   - net ...................... across the middle (centre of the length)
//   - short service lines ...... 1.98 m each side of the net
//   - doubles long service lines 0.76 m inside each back boundary
//   - centre lines ............. run from short service line to back boundary only

export default function CourtLines({ variant = "bg", className = "" }) {
  const stroke = "#d7f900";

  if (variant === "divider") {
    return (
      <svg
        className={`court-divider ${className}`}
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="0" y1="20" x2="1200" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <line x1="600" y1="6" x2="600" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      </svg>
    );
  }

  const S = 60; // px per metre
  const L = 13.4 * S; // 804 – court length
  const W = 6.1 * S; // 366 – court width
  const x0 = (900 - L) / 2; // 48
  const y0 = (500 - W) / 2; // 67
  const x1 = x0 + L;
  const y1 = y0 + W;
  const mid = x0 + L / 2; // net position
  const midY = y0 + W / 2; // centre line

  const singlesInset = 0.46 * S;
  const shortService = 1.98 * S;
  const longServiceDoubles = 0.76 * S;

  const line = { stroke, strokeWidth: 1.5, strokeLinecap: "square" };

  return (
    <svg
      className={className}
      viewBox="0 0 900 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer boundary (doubles sidelines + back boundary lines) */}
      <rect x={x0} y={y0} width={L} height={W} {...line} strokeOpacity="0.4" />

      {/* Singles sidelines */}
      <line x1={x0} y1={y0 + singlesInset} x2={x1} y2={y0 + singlesInset} {...line} strokeOpacity="0.28" />
      <line x1={x0} y1={y1 - singlesInset} x2={x1} y2={y1 - singlesInset} {...line} strokeOpacity="0.28" />

      {/* Short service lines (1.98 m from the net) */}
      <line x1={mid - shortService} y1={y0} x2={mid - shortService} y2={y1} {...line} strokeOpacity="0.28" />
      <line x1={mid + shortService} y1={y0} x2={mid + shortService} y2={y1} {...line} strokeOpacity="0.28" />

      {/* Doubles long service lines (0.76 m inside the back boundary) */}
      <line x1={x0 + longServiceDoubles} y1={y0} x2={x0 + longServiceDoubles} y2={y1} {...line} strokeOpacity="0.2" />
      <line x1={x1 - longServiceDoubles} y1={y0} x2={x1 - longServiceDoubles} y2={y1} {...line} strokeOpacity="0.2" />

      {/* Centre lines: short service line -> back boundary, each side of the net */}
      <line x1={x0} y1={midY} x2={mid - shortService} y2={midY} {...line} strokeOpacity="0.28" />
      <line x1={mid + shortService} y1={midY} x2={x1} y2={midY} {...line} strokeOpacity="0.28" />

      {/* Net (extends slightly past the sidelines to show the posts) */}
      <line x1={mid} y1={y0 - 10} x2={mid} y2={y1 + 10} stroke={stroke} strokeWidth="2.5" strokeOpacity="0.5" strokeDasharray="4 4" />
    </svg>
  );
}
