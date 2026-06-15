import { motion } from 'framer-motion'
import { MessageCircle, Mail, CheckCircle2, Check, Download } from 'lucide-react'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const EMAIL = 'gestao.frotaba@gmail.com'

export function HeroSection() {
  const [copied, setCopied] = useState(false)

  const handleEmailClick = async (e: React.MouseEvent) => {
    const mailtoOpened = window.open(`mailto:${EMAIL}`, '_self')
    if (!mailtoOpened) {
      e.preventDefault()
      try {
        await navigator.clipboard.writeText(EMAIL)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch {
        const textArea = document.createElement('textarea')
        textArea.value = EMAIL
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content - 60% */}
          <motion.div
            className="flex-1 w-full lg:w-3/5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag */}
            <motion.div
              {...fadeInUp}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              LÍDER EM OPERAÇÕES LOGÍSTICAS E GESTÃO DE FROTAS
            </motion.div>

            {/* Title */}
            <motion.h1
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-4"
            >
              CLEBER<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">NASCIMENTO</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-xl lg:text-2xl text-slate-700 font-medium mb-6"
            >
              Especialista Sênior em Gestão de Operações, Frotas e Transformação de Unidades Críticas
            </motion.p>

            {/* Description */}
            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
            >
              Profissional com 47 anos de idade, especialista na metodologia Ambev (DPO),
              focado em reversão de unidades críticas e eficiência de custos.
            </motion.p>

            {/* Checkmarks */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                '10 anos na Ghisolfi',
                'R$ 150 mil acumulados',
                'Especialista DPO'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <a
                href="https://wa.me/5571999929935"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30"
              >
                <MessageCircle className="w-5 h-5" />
                Fale no WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                onClick={handleEmailClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-blue-700 font-semibold rounded-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-300"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-500" />
                    E-mail Copiado!
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Enviar E-mail
                  </>
                )}
              </a>
              <a
                href="/Curriculo_Cleber_(2026).pdf"
                download="Curriculo_Cleber_2026.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all duration-300 border-2 border-slate-200 hover:border-slate-300"
              >
                <Download className="w-5 h-5" />
                Baixar Curriculo
              </a>
            </motion.div>
          </motion.div>

          {/* Image - 40% */}
          <motion.div
            className="flex-1 w-full lg:w-2/5 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-3xl blur-3xl" />

            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-1">
              <div className="rounded-[20px] overflow-hidden bg-white">
                <img
                  src="/image.png"
                  alt="Cleber Nascimento"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -right-4 top-1/4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
            >
              <p className="text-xs text-slate-500 mb-1">Experiência</p>
              <p className="text-2xl font-bold text-blue-700">10+ anos</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
