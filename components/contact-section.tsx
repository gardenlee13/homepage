"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-background/60 mb-4">
              Contact Us
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              문의하기
            </h2>
            <p className="mt-6 text-background/80 leading-relaxed">
              제품에 대한 문의, 대량 주문, 유통 파트너십 등 
              무엇이든 문의해 주세요. 빠른 시일 내에 답변 드리겠습니다.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">주소</p>
                  <p className="mt-1 text-background/70">
                    서울특별시 영등포구 양평동 123-45
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">전화</p>
                  <p className="mt-1 text-background/70">02-1234-5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">이메일</p>
                  <p className="mt-1 text-background/70">info@goldenmyanmar.co.kr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">영업시간</p>
                  <p className="mt-1 text-background/70">
                    평일 09:00 - 18:00 (토, 일, 공휴일 휴무)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    이름
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background"
                    placeholder="홍길동"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    연락처
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  이메일
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  문의 내용
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background min-h-[150px]"
                  placeholder="문의하실 내용을 입력해 주세요."
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                문의 보내기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
