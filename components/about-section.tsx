export function AboutSection() {
  const values = [
    {
      number: "01",
      title: "전통의 계승",
      description:
        "미얀마 현지에서 전해 내려오는 정통 레시피를 바탕으로 진정한 미얀마의 맛을 재현합니다.",
    },
    {
      number: "02",
      title: "신선한 재료",
      description:
        "엄선된 최상급 재료만을 사용하여 건강하고 맛있는 식품을 제공합니다.",
    },
    {
      number: "03",
      title: "품질 관리",
      description:
        "HACCP 인증을 획득한 위생적인 시설에서 철저한 품질 관리를 진행합니다.",
    },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-4">
            About Us
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            미얀마의 맛을 전하는
            <br />
            Golden Myanmar Foods
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.number}
              className="group border border-border p-8 transition-all hover:border-foreground/30"
            >
              <span className="font-serif text-4xl font-light text-muted-foreground/50 group-hover:text-accent transition-colors">
                {value.number}
              </span>
              <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              전통과 혁신이 만나는 곳
            </h3>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Golden Myanmar Foods는 2010년 설립 이래 미얀마 전통 식품의 
              세계화를 위해 노력해왔습니다. 미얀마 현지의 전통 레시피를 
              바탕으로 한국인의 입맛에 맞게 재해석하여, 누구나 쉽게 즐길 수 
              있는 미얀마 식품을 선보이고 있습니다.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              엄격한 품질 관리와 위생적인 생산 환경을 통해 안전하고 맛있는 
              제품을 제공하며, 미얀마 음식 문화의 가치를 널리 알리는 데 
              앞장서고 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-secondary p-8">
              <span className="font-serif text-4xl font-bold text-foreground">15+</span>
              <p className="mt-2 text-sm text-muted-foreground">년의 역사</p>
            </div>
            <div className="bg-secondary p-8">
              <span className="font-serif text-4xl font-bold text-foreground">50+</span>
              <p className="mt-2 text-sm text-muted-foreground">제품 라인업</p>
            </div>
            <div className="bg-secondary p-8">
              <span className="font-serif text-4xl font-bold text-foreground">100+</span>
              <p className="mt-2 text-sm text-muted-foreground">파트너사</p>
            </div>
            <div className="bg-secondary p-8">
              <span className="font-serif text-4xl font-bold text-foreground">1M+</span>
              <p className="mt-2 text-sm text-muted-foreground">누적 판매</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
