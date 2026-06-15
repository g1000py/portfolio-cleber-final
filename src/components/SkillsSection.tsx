import { motion } from 'framer-motion'
import { Users, Truck, Target, BarChart2, DollarSign, Radio, Navigation, PieChart, Bot, Layers, Cog } from 'lucide-react'

interface SkillItem {
  name: string
  level: number
  icon: React.ComponentType<{ className?: string }>
  badge?: string
}

const skills: SkillItem[] = [
  { name: 'Gestão de Pessoas', level: 95, icon: Users },
  { name: 'Logística Operacional', level: 98, icon: Truck },
  { name: 'Metodologia DPO', level: 100, icon: Target },
  { name: 'Excel', level: 90, icon: BarChart2, badge: 'Avançado' },
  { name: 'Gestão de Custos', level: 95, icon: DollarSign },
  { name: 'Veltec', level: 85, icon: Radio, badge: 'Telemetria · Gestão de Frota' },
  { name: 'Sitrack', level: 88, icon: Navigation, badge: 'Rastreamento · Telemetria' },
  { name: 'Power BI', level: 70, icon: PieChart, badge: 'Intermediário' },
  { name: 'Inteligências Artificiais Cotidianas', level: 75, icon: Bot },
  { name: 'Prolog', level: 80, icon: Cog, badge: 'Gestão de Pneus · Checklist' },
  { name: 'Freigttech', level: 80, icon: Layers, badge: 'Custos · Remuneração' },
  { name: 'Rodopar', level: 80, icon: Cog, badge: 'Gestão · Manutenção' },
  { name: 'Totvs Protheus', level: 75, icon: Layers, badge: 'Gestão Financeira' },
]

interface SkillBarProps {
  name: string
  level: number
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  delay: number
}

function SkillBar({ name, level, icon: Icon, badge, delay }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-5"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-blue-600 shrink-0" />
          <span className="font-medium text-slate-700 text-sm">{name}</span>
          {badge && (
            <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full">{badge}</span>
          )}
        </div>
        <span className="text-sm font-bold text-blue-600">{level}%</span>
      </div>
      <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
        />
      </div>
    </motion.div>
  )
}

const competencies = [
  'Gestão de Pessoas',
  'Logística Operacional',
  'Excel Avançado',
  'Tabelas Dinâmicas',
  'Dashboards Gerenciais',
  'Sitrack',
  'Veltec',
  'Power BI',
  'IA Cotidiana',
  'Prolog',
  'Freigttech',
  'Rodopar',
  'Totvs Protheus',
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            COMPETÊNCIAS TÉCNICAS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Dashboard de Habilidades
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expertise consolidada em gestão operacional e logística
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Skills Progress Bars */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                badge={skill.badge}
                delay={index * 0.08}
              />
            ))}
          </div>

          {/* Badges */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold text-slate-900 mb-6"
            >
              Competências dos Cursos
            </motion.h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {competencies.map((competency, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {competency}
                </motion.span>
              ))}
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white"
              >
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm opacity-90">Anos de Experiência</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 text-white"
              >
                <p className="text-4xl font-bold mb-1">4</p>
                <p className="text-sm opacity-90">Unidades Transformadas</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
