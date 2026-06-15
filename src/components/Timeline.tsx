import { motion } from 'framer-motion'
import { Briefcase, TrendingUp, Award, Users } from 'lucide-react'

const timelineData = [
  {
    year: '2016',
    title: 'Supervisor / Coordenador',
    location: 'CDD Salvador',
    description: 'Início da trajetória na Ghisolfi, coordenando operações do centro de distribuição.',
    icon: Briefcase,
    color: '#475569'
  },
  {
    year: '2021',
    title: 'Coordenador Regional de Frota',
    location: 'Regional Nordeste',
    description: 'Expansão para gestão regional do Nordeste, implementando padrões de eficiência em múltiplas unidades.',
    icon: TrendingUp,
    color: '#1E40AF'
  },
  {
    year: '2022',
    title: 'Gerente Operacional',
    location: 'Camacari',
    description: 'Liderança na correção de TML e gestão de crise operacional, revertendo unidade crítica.',
    icon: Award,
    color: '#16A34A'
  },
  {
    year: '2023-2026',
    title: 'Gerente Regional de Frota',
    location: 'Regional Nordeste',
    description: 'Padronização das operações do Nordeste, implementando metodologia DPO em 4 unidades.',
    icon: Users,
    color: '#1E40AF'
  }
]

const mobileTimelineData = [...timelineData].reverse()

export function Timeline() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            ASCENSÃO E RESULTADOS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Trajetória na Ghisolfi Operações
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Uma decada de evolucao continua e resultados comprovados
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal (oldest to newest left to right) */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-slate-300 via-blue-400 to-emerald-400 rounded-full" />

          <div className="grid grid-cols-4 gap-4">
            {timelineData.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Year Badge */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-slate-200">
                      <span className="text-sm font-bold text-slate-700">{item.year}</span>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-lg border-4" style={{ borderColor: item.color }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>

                  {/* Content Card */}
                  <div className="mt-32 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-3">{item.location}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile Timeline - Vertical (newest first = most recent at top) */}
        <div className="lg:hidden relative">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-6 w-1 bg-gradient-to-b from-emerald-400 via-blue-400 to-slate-300 rounded-full" />

          <div className="space-y-8 pl-16">
            {mobileTimelineData.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Icon Circle */}
                  <div className="absolute -left-10 top-4 w-6 h-6 rounded-full flex items-center justify-center bg-white shadow-lg border-2" style={{ borderColor: item.color }}>
                    <Icon className="w-3 h-3" style={{ color: item.color }} />
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-xl p-5 shadow-md border border-slate-100">
                    <div className="inline-block bg-slate-100 rounded-full px-3 py-1 text-xs font-semibold text-slate-700 mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">{item.location}</p>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
