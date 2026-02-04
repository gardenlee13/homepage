import Image from "next/image"

export function StorySection() {
  return (
    <section id="story" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/hero-myanmar.jpg"
                alt="미얀마 음식 문화"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent p-6 text-background hidden md:block">
              <p className="font-serif text-3xl font-bold">15+</p>
              <p className="text-sm mt-1">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              미얀마에서 한국으로,
              <br />
              전통의 맛을 잇다
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                2010년, 미얀마 출신 창업자가 한국에서 고향의 맛을 그리워하며 
                시작한 작은 식품점. 그것이 Golden Myanmar Foods의 시작이었습니다.
              </p>
              <p>
                처음에는 미얀마 교민들을 위한 소규모 식품점이었지만, 
                점차 한국인들에게도 미얀마 음식의 독특하고 깊은 맛이 
                알려지기 시작했습니다. 발효 찻잎의 향긋함, 모힝가의 
                진한 풍미는 많은 사람들의 입맛을 사로잡았습니다.
              </p>
              <p>
                오늘날 Golden Myanmar Foods는 미얀마 전통 식품의 
                세계화를 선도하며, 더 많은 사람들이 미얀마의 맛을 
                경험할 수 있도록 끊임없이 노력하고 있습니다.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-border pt-8">
              <div>
                <p className="font-serif text-2xl font-bold text-foreground">HACCP</p>
                <p className="text-sm text-muted-foreground mt-1">인증 획득</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-foreground">ISO 22000</p>
                <p className="text-sm text-muted-foreground mt-1">품질 인증</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-foreground">할랄</p>
                <p className="text-sm text-muted-foreground mt-1">인증 제품</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
