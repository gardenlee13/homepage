import Link from "next/link"

const footerLinks = {
  company: [
    { name: "회사소개", href: "#about" },
    { name: "연혁", href: "#story" },
    { name: "인증현황", href: "#" },
    { name: "오시는 길", href: "#contact" },
  ],
  products: [
    { name: "면류", href: "#products" },
    { name: "소스류", href: "#products" },
    { name: "샐러드", href: "#products" },
    { name: "간편식", href: "#products" },
  ],
  support: [
    { name: "자주 묻는 질문", href: "#" },
    { name: "대량 주문 문의", href: "#contact" },
    { name: "유통 파트너십", href: "#contact" },
    { name: "채용 정보", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                Golden Myanmar
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              정통 미얀마 맛의 향연.
              <br />
              신선한 재료와 전통 레시피로
              <br />
              만든 미얀마 식품을 만나보세요.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              회사 정보
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              제품 카테고리
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              고객 지원
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">
              © 2024 Golden Myanmar Foods Co., Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                개인정보처리방침
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
