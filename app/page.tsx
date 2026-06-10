"use client"

import Image from "next/image"
import { Beer, Music, Flame, Check, AlertCircle, CalendarHeart, CalendarClock, Ticket } from "lucide-react"

export default function Home() {
  const handleWhatsAppClick = (url: string) => {
    window.open(url, '_blank')
  }

  const btnAniversario = 'https://wa.me/5537999268046?text=Quero%20comemorar%20meu%20anivers%C3%A1rio%20no%20Nubuteco!'
  const btnReserva = 'https://wa.me/5537999427524?text=Quero%20saber%20mais%20sobre%20reserva%20de%20mesas!'
  const btnPresenca = 'https://centraldoseventos.com.br/openfood?vt=arraia'

  return (
    <div className="min-h-screen bg-[#F4DDC0] text-[#261D14] selection:bg-[#E79C1A] selection:text-[#261D14] overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-svh px-4 sm:px-6 pt-safe-top pb-16">
        <div className="w-full max-w-sm mx-auto text-center flex flex-col items-center">
          
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SEM-FUNDO-9ZvPZW9Bi29IYACeqOX5GJuqZTxoii.png"
            alt="NuButeco Logo"
            width={160}
            height={160}
            className="w-32 sm:w-40 h-auto mb-8"
            priority
            unoptimized
          />

          <div className="space-y-3 mb-8">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl text-[#831E16] leading-[1.1] tracking-wide font-serif text-balance"
            >
              Vem como quiser, sem cerimônia.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#533116] font-medium">
              A casa é sua.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={() => handleWhatsAppClick(btnPresenca)}
              className="group relative w-full min-h-[52px] py-3 px-4 bg-[#E79C1A] text-[#261D14] rounded-xl shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2 overflow-hidden touch-manipulation"
            >
              <Ticket className="w-5 h-5 flex-shrink-0" />
              <span className="font-semibold text-base sm:text-[17px]">Arraiá do Nubuteco</span>
            </button>

            <button
              onClick={() => handleWhatsAppClick(btnAniversario)}
              className="group relative w-full min-h-[52px] py-3 px-4 bg-[#E79C1A] text-[#261D14] rounded-xl shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2 overflow-hidden touch-manipulation"
            >
              <CalendarHeart className="w-5 h-5 flex-shrink-0" />
              <span className="font-semibold text-base sm:text-[17px]">Comemore seu aniversário</span>
            </button>

            <button
              onClick={() => handleWhatsAppClick(btnReserva)}
              className="group relative w-full min-h-[52px] py-3 px-4 bg-[#E79C1A] text-[#261D14] rounded-xl shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2 overflow-hidden touch-manipulation"
            >
              <CalendarClock className="w-5 h-5 flex-shrink-0" />
              <span className="font-semibold text-base sm:text-[17px]">Reserve sua mesa</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO EXPERIÊNCIA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-sm mx-auto">
          <h2 
            className="text-2xl sm:text-3xl text-center mb-8 text-[#831E16] font-serif"
          >
            A Experiência
          </h2>

          <div className="flex flex-col gap-3">
            <div className="bg-white/40 border border-[#A26B35]/20 p-4 sm:p-6 rounded-2xl flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#E79C1A]/20 flex items-center justify-center flex-shrink-0">
                <Music className="w-5 h-5 text-[#831E16]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[#261D14] font-semibold text-base sm:text-lg mb-0.5">Música ao vivo</h3>
                <p className="text-[#533116] text-sm leading-snug">O melhor do sertanejo e modão para embalar a noite.</p>
              </div>
            </div>

            <div className="bg-white/40 border border-[#A26B35]/20 p-4 sm:p-6 rounded-2xl flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#E79C1A]/20 flex items-center justify-center flex-shrink-0">
                <Beer className="w-5 h-5 text-[#831E16]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[#261D14] font-semibold text-base sm:text-lg mb-0.5">Clima de resenha</h3>
                <p className="text-[#533116] text-sm leading-snug">Cerveja gelada, amigos e boas histórias na mesa.</p>
              </div>
            </div>

            <div className="bg-white/40 border border-[#A26B35]/20 p-4 sm:p-6 rounded-2xl flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#E79C1A]/20 flex items-center justify-center flex-shrink-0">
                <Flame className="w-5 h-5 text-[#831E16]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[#261D14] font-semibold text-base sm:text-lg mb-0.5">Ambiente descontraído</h3>
                <p className="text-[#533116] text-sm leading-snug">Sinta-se em casa, sem frescura e com muita animação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO INFORMAÇÕES */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/30 border-y border-[#A26B35]/10">
        <div className="max-w-sm mx-auto">
          <h2 
            className="text-2xl sm:text-3xl text-center mb-8 text-[#831E16] font-serif"
          >
            Como Funciona
          </h2>

          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <div className="mt-0.5 w-6 h-6 rounded-full bg-[#E79C1A]/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-[#831E16]" strokeWidth={3} />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-[#261D14] text-[15px]">Sem venda antecipada</h4>
                <p className="text-sm text-[#533116] mt-0.5 leading-snug">Garantimos a entrada por ordem de chegada ou reserva.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-0.5 w-6 h-6 rounded-full bg-[#E79C1A]/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-[#831E16]" strokeWidth={3} />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-[#261D14] text-[15px]">Retire seu ingresso</h4>
                <p className="text-sm text-[#533116] mt-0.5 leading-snug">Retire seu ingresso gratuitamente pelo nosso Instagram para confirmar sua presença.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-0.5 w-6 h-6 rounded-full bg-[#E79C1A]/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-[#831E16]" strokeWidth={3} />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-[#261D14] text-[15px]">Pagamento na portaria</h4>
                <p className="text-sm text-[#533116] mt-0.5 leading-snug">Acerto prático e rápido diretamente na entrada do evento.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. SEÇÃO PREÇOS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-sm mx-auto">
          <h2 
            className="text-2xl sm:text-3xl text-center mb-6 text-[#831E16] font-serif"
          >
            Couvert
          </h2>

          <div className="bg-white/50 border border-[#A26B35]/20 rounded-2xl overflow-hidden">
            {[
              { time: "20h às 21h", price: "R$ 30" },
              { time: "21h às 22h", price: "R$ 40" },
              { time: "22h às 23h", price: "R$ 50" },
              { time: "23h às 1h", price: "R$ 60 (sob demanda)" }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-3.5 px-4 ${
                  index !== 4 ? 'border-b border-[#A26B35]/10' : ''
                }`}
              >
                <span className="text-sm sm:text-[15px] font-medium text-[#533116]">
                  {item.time}
                </span>
                <span 
                  className="text-lg sm:text-xl font-bold text-[#831E16] tracking-wide font-serif"
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALERTA */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="max-w-sm mx-auto">
          <div className="bg-[#831E16] text-[#F4DDC0] rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <AlertCircle className="w-7 h-7 text-[#E79C1A] flex-shrink-0" />
            <div className="min-w-0">
              <h4 className="font-semibold text-[15px] mb-0.5">Aviso Importante</h4>
              <p className="text-sm text-[#F4DDC0]/90 leading-snug">Sujeito à lotação máxima. Chegue cedo e evite filas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#261D14] border-t-4 border-[#831E16]">
        <div className="max-w-sm mx-auto text-center">
          <h2 
            className="text-2xl sm:text-[28px] md:text-[34px] mb-6 sm:mb-8 text-[#F4DDC0] leading-snug font-serif text-balance"
          >
            Aqui as modas não tem{' '}
            <span className="text-[#E79C1A]">hora pra acabar!</span>
          </h2>

          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={() => handleWhatsAppClick(btnPresenca)}
              className="w-full min-h-[52px] py-3 px-4 bg-[#E79C1A] text-[#261D14] rounded-xl active:scale-[0.98] transition-transform flex items-center justify-center gap-2 font-semibold text-base sm:text-[17px] touch-manipulation"
            >
              <Ticket className="w-5 h-5 flex-shrink-0" />
              <span>Arraiá do Nubuteco</span>
            </button>

            <button
              onClick={() => handleWhatsAppClick(btnAniversario)}
              className="w-full min-h-[52px] py-3 px-4 bg-[#E79C1A] text-[#261D14] rounded-xl active:scale-[0.98] transition-transform flex items-center justify-center gap-2 font-semibold text-base sm:text-[17px] touch-manipulation"
            >
              <CalendarHeart className="w-5 h-5 flex-shrink-0" />
              <span>Comemore seu aniversário</span>
            </button>

            <button
              onClick={() => handleWhatsAppClick(btnReserva)}
              className="w-full min-h-[52px] py-3 px-4 bg-[#E79C1A] text-[#261D14] rounded-xl active:scale-[0.98] transition-transform flex items-center justify-center gap-2 font-semibold text-base sm:text-[17px] touch-manipulation"
            >
              <CalendarClock className="w-5 h-5 flex-shrink-0" />
              <span>Reserve sua mesa</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 sm:py-8 bg-[#261D14] text-center px-4 sm:px-6 pb-safe-bottom">
        <p className="text-[#A26B35] text-xs font-medium">
          © {new Date().getFullYear()} NuButeco - Todos os direitos reservados.
        </p>
      </footer>
      
    </div>
  )
}
