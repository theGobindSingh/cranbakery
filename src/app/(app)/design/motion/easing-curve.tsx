interface EasingCurveProps {
  token: string;
  p1: [number, number];
  p2: [number, number];
}

const EasingCurve = ({ token, p1, p2 }: EasingCurveProps) => {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const d = `M0,100 C${x1},${100 - y1} ${x2},${100 - y2} 100,0`;

  return (
    <svg
      viewBox="0 0 100 100"
      className="size-24"
      aria-label={`${token} curve`}
    >
      <line
        x1="0"
        y1="100"
        x2="100"
        y2="100"
        stroke="var(--color-grey-300)"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="100"
        stroke="var(--color-grey-300)"
        strokeWidth="1"
      />
      <path
        d={d}
        fill="none"
        stroke="var(--color-primary-500)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default EasingCurve;
