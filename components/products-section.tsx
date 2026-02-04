import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const products = [
  {
    id: 1,
    name: "모힝가",
    description: "미얀마 국민 음식, 진한 생선 육수의 쌀국수",
    image: "/images/mohinga.jpg",
    category: "면류",
  },
  {
    id: 2,
    name: "라펫톡",
    description: "발효 찻잎으로 만든 전통 샐러드",
    image: "/images/tea-leaf-salad.jpg",
    category: "샐러드",
  },
  {
    id: 3,
    name: "샨 누들",
    description: "샨 지역의 담백한 쌀국수",
    image: "/images/shan-noodles.jpg",
    category: "면류",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Our Products
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              대표 제품 소개
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            미얀마의 다양한 전통 음식을 간편하게 즐길 수 있도록 
            정성을 다해 만들었습니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden bg-card"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/20" />
                <button
                  className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 opacity-0 transition-opacity group-hover:opacity-100"
                  aria-label={`${product.name} 자세히 보기`}
                >
                  <Plus className="h-5 w-5 text-foreground" />
                </button>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
          >
            전체 제품 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
