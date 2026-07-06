import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { TiltedCards } from '@/components/TiltedCards'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn
        className="relative -mx-6 overflow-hidden rounded-4xl border border-white/8 px-6 py-20 shadow-[0_30px_70px_rgba(15,15,16,0.22)] sm:mx-0 sm:py-32 md:px-12"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 88% 10%, rgba(233,168,124,0.16) 0%, transparent 55%), linear-gradient(165deg, #18181B 0%, #0E0E10 100%)',
        }}
      >
        <TiltedCards tone="dark" />
        <div className="relative mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Working on something interesting?
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Say hei
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Where I work from
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
