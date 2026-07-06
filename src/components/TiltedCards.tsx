import clsx from 'clsx'

// Faint skewed card shapes scattered behind a section — the site's
// signature background motif (from the Claude design canvas exploration).
const positions = {
  right: [
    [58, 4],
    [74, 16],
    [90, 9],
    [62, 30],
    [80, 42],
    [46, 52],
    [88, 64],
  ],
  left: [
    [8, 8],
    [24, 26],
    [40, 6],
    [12, 48],
    [30, 62],
  ],
} as const

export function TiltedCards({
  tone = 'light',
  density = 'right',
  className,
}: {
  tone?: 'light' | 'dark'
  density?: 'left' | 'right'
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
    >
      {positions[density].map(([left, top], i) => (
        <div
          key={i}
          className={clsx(
            'absolute h-[150px] w-[120px] -rotate-2 -skew-x-[18deg] rounded-[14px] border',
            tone === 'dark'
              ? 'border-white/5 bg-white/4'
              : 'border-neutral-950/4 bg-neutral-950/3',
          )}
          style={{ left: `${left}%`, top: `${top}%` }}
        />
      ))}
    </div>
  )
}
