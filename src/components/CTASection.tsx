import { motion } from 'framer-motion'
import { MessageCircle, Mail, ArrowRight, TrendingUp, Check, Download } from 'lucide-react'
import { useState } from 'react'

const EMAIL = 'gestao.frotaba@gmail.com'

export function CTASection() {
  const [copied, setCopied] = useState(false)

  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 mb-8">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transformando operações em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              resultados mensuráveis
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Pronto para otimizar suas operações logísticas? Vamos conversar sobre como
            posso contribuir para a eficiência da sua empresa.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">R$ 150k</p>
              <p className="text-sm text-slate-500">Economia Total Acumulada</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">-6%</p>
              <p className="text-sm text-slate-500">Redução consumo</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">4</p>
              <p className="text-sm text-slate-500">Unidades transformadas</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <motion.a
              href="https://wa.me/5571999929935"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              Fale no WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href={`mailto:${EMAIL}`}
              onClick={handleEmailClick}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-emerald-400" />
                  E-mail Copiado!
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Enviar E-mail
                </>
              )}
            </motion.a>
            <motion.a
              href="/Curriculo_Cleber_(2026).pdf"
              download="Curriculo_Cleber_2026.pdf"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Baixar Curriculo
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-slate-900 py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Cleber Nascimento. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/5571999929935"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
