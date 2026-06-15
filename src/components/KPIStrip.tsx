import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Target, BarChart3, Settings } from 'lucide-react'

interface KPICardProps {
  icon: React.ReactNode
  label: string
  sublabel?: string
  value: string
  suffix?: string
  delay: number
}

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState('0')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ''))
      const prefix = value.match(/^[^\d]*/)?.[0] || ''
      const duration = 2000
      const startTime = Date.now()

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const current = numericValue * easeOut

        if (value.includes('.')) {
          setDisplayValue(`${prefix}${current.toFixed(2)}`)
        } else {
          setDisplayValue(`${prefix}${Math.floor(current).toLocaleString('pt-BR')}`)
        }

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setDisplayValue(value)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-3xl font-bold text-slate-900">
      {displayValue}{suffix && <span className="text-lg text-slate-500 ml-1">{suffix}</span>}
    </span>
  )
}

function KPICard({ icon, label, sublabel, value, suffix, delay }: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <AnimatedCounter value={value} suffix={suffix} />
      <p className="text-sm text-slate-500 mt-1">{label}</p>
      {sublabel && <p className="text-xs text-slate-400 mt-0.5">{sublabel}</p>}
    </motion.div>
  )
}

export function KPIStrip() {
  const kpis = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: 'Economia Total Acumulada',
      value: 'R$ 150.000',
      suffix: ''
    },
    {
      icon: <Target className="w-6 h-6" />,
      label: 'Redução de Consumo',
      value: '-6',
      suffix: '%'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      label: 'Motoristas por Caminhão (QLP)',
      sublabel: 'Otimização de alocação de motoristas',
      value: '1.08',
      suffix: ' -> 1.35'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      label: 'Operações Padronizadas',
      value: '4',
      suffix: ' Unidades'
    }
  ]

  return (
    <section className="py-12 bg-white relative z-20 -mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <KPICard
              key={index}
              icon={kpi.icon}
              label={kpi.label}
              sublabel={kpi.sublabel}
              value={kpi.value}
              suffix={kpi.suffix}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
