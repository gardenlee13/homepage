import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-myanmar.jpg"
          alt="미얀마 전통 음식"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-background/80">
          Since 2010
        </p>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          정통 미얀마 맛의 향연
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/90 text-pretty">
          신선한 재료와 전통 레시피로 만든 미얀마 식품으로
          <br className="hidden sm:block" />
          진정한 동남아시아의 맛을 경험하세요
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 px-8"
          >
            제품 보러가기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-background/50 text-background hover:bg-background/10 px-8 bg-transparent"
          >
            회사 소개
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-background/60">
            Scroll
          </span>
          <div className="h-12 w-px bg-background/30" />
        </div>
      </div>
    </section>
  )
}
