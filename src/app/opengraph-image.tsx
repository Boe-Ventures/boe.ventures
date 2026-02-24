import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: '#0a0a0a',
          padding: '80px',
        }}
      >
        {/* BV logomark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 64,
            height: 64,
            background: '#ffffff',
            borderRadius: 12,
            marginBottom: 40,
          }}
        >
          <span
            style={{
              color: '#0a0a0a',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: '-1px',
              lineHeight: 1,
            }}
          >
            BV
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#ffffff',
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: '-2px',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Boe Ventures
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#a3a3a3',
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: '-0.5px',
            lineHeight: 1.4,
          }}
        >
          Building products at the intersection of AI and everyday life.
        </div>
      </div>
    ),
    { ...size },
  )
}
