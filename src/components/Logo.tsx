import clsx from 'clsx'
import Link from 'next/link'

export function Logomark({
  invert = false,
  filled = false,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect width="32" height="32" rx="6" className="fill-neutral-950" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        className="fill-white"
        style={{
          fontSize: '16px',
          fontFamily: 'Mona Sans, sans-serif',
          fontWeight: 700,
          letterSpacing: '-0.5px',
        }}
      >
        BV
      </text>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx('flex items-center gap-x-2', className)}
      {...props}
    >
      <Logomark className="h-8 w-8" invert={invert} />
      <span
        className={clsx(
          'font-display text-xl font-semibold tracking-tight',
          invert ? 'text-white' : 'text-neutral-950',
        )}
      >
        Boe Ventures
      </span>
    </div>
  )
}
