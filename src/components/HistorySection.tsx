import { motion } from 'framer-motion'
import { Building2, GraduationCap, Calendar, BookOpen } from 'lucide-react'

const previousExperiences = [
  {
    company: 'Schincariol',
    role: 'Operações Logísticas',
    period: 'Anterior a 2016'
  },
  {
    company: 'Citelum',
    role: 'Gestão Operacional',
    period: 'Anterior a 2016'
  },
  {
    company: 'Unidas',
    role: 'Gestão de Frotas',
    period: 'Anterior a 2016'
  },
  {
    company: 'Pronto Express',
    role: 'Coordenação Logística',
    period: 'Anterior a 2016'
  }
]

export function HistorySection() {
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
            HISTÓRICO E QUALIFICAÇÕES
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Base Profissional Sólida
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Fundamentos construídos em empresas de referência no mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Previous Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Experiências Anteriores</h3>
            </div>
            <div className="space-y-4">
              {previousExperiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1">{exp.company}</h4>
                  <p className="text-sm text-slate-600">{exp.role}</p>
                  <p className="text-xs text-slate-400 mt-1">{exp.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              Formação
            </h3>

            {/* Education Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">Administração de Empresas</h4>
              <p className="text-sm text-slate-600 mb-2">Faculdade UNIME</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="w-4 h-4" />
                <span>6 Semestres Concluídos</span>
              </div>
            </div>

            {/* CNH Card */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold mb-2">CNH Categoria AD</h4>
                  <p className="text-sm text-slate-400 mb-4">Exerce Atividade Remunerada</p>
                </div>
                <div className="flex gap-2">
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-sm">
                    AD
                  </div>
                  <div className="bg-emerald-600 text-white px-3 py-2 rounded-lg font-bold text-sm">
                    EAR
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Complementary Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Cursos Complementares</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="text-slate-700">Gestão de Pessoas</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="text-slate-700">Logística Operacional</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="text-slate-700">Excel Avançado (Tabelas Dinâmicas, Gráficos, Dashboards)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="text-slate-700">Monitoramento e Rastreamento (Sitrack, Veltec)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="text-slate-700">Power BI</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="text-slate-700">Inteligências Artificiais Cotidianas</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="text-slate-700">Prolog (Gestão de Pneus e Checklist)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="text-slate-700">Freigttech (Custos e Remuneração)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="text-slate-700">Rodopar (Gestão e Manutenção)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="text-slate-700">Totvs Protheus (Gestao Financeira)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
