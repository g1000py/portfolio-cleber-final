import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  LabelList
} from 'recharts'
import { TrendingDown, Award, Users, Clock, AlertTriangle, MapPin } from 'lucide-react'

const efficiencyData = [
  { month: 'Jan', value: 100 },
  { month: 'Fev', value: 98.8 },
  { month: 'Mar', value: 97.5 },
  { month: 'Abr', value: 96.3 },
  { month: 'Mai', value: 95.1 },
  { month: 'Jun', value: 94 },
]

const qlpData = [
  { name: 'Antes', value: 1.08, label: '1,08' },
  { name: 'Depois', value: 1.35, label: '1,35' },
]

const dpoData = [
  { stage: 'Não Qualificado', progress: 25 },
  { stage: 'Qualificado', progress: 50 },
  { stage: 'Certificado', progress: 75 },
  { stage: 'Sustentável', progress: 100 },
]

const liberacaoData = [
  { month: 'Jan', value: 72 },
  { month: 'Fev', value: 58 },
  { month: 'Mar', value: 47 },
  { month: 'Abr', value: 39 },
  { month: 'Mai', value: 32 },
  { month: 'Jun', value: 27 },
]

const socorroData = [
  { month: 'Jan', value: 1.2 },
  { month: 'Fev', value: 0.98 },
  { month: 'Mar', value: 0.76 },
  { month: 'Abr', value: 0.63 },
  { month: 'Mai', value: 0.54 },
  { month: 'Jun', value: 0.49 },
]

const dpoReachData = [
  { city: 'Salvador', total: 153, caminhao: 140, van: 13, conjuntos: 0, empilhadeiras: 0 },
  { city: 'Estância', total: 104, caminhao: 0, van: 0, conjuntos: 83, empilhadeiras: 21 },
  { city: 'Camaçari', total: 96, caminhao: 32, van: 4, conjuntos: 60, empilhadeiras: 0 },
  { city: 'Aracaju', total: 37, caminhao: 28, van: 5, conjuntos: 0, empilhadeiras: 4 },
]

const DPO_MAX = 153

const CustomTooltip = ({ active, payload, label, unit }: {
  active?: boolean
  payload?: Array<{ value: number; name: string }>
  label?: string
  unit?: string
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-3">
        <p className="text-sm font-medium text-slate-900 mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm text-slate-600">
            {entry.value}{unit || ''}
          </p>
        ))}
      </div>
    )
  }
  return null
}

interface ChartCardProps {
  title: string
  subtitle: string
  description?: string
  icon: React.ReactNode
  highlight?: string
  highlightColor?: string
  badge?: React.ReactNode
  children: React.ReactNode
  delay: number
  tall?: boolean
}

function ChartCard({ title, subtitle, description, icon, highlight, highlightColor = 'text-emerald-600', badge, children, delay, tall }: ChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500">{subtitle}</p>
          </div>
        </div>
        {highlight && (
          <span className={`text-xl font-bold ${highlightColor} shrink-0`}>{highlight}</span>
        )}
      </div>
      {description && (
        <p className="text-xs text-slate-400 mb-3 pl-[52px]">{description}</p>
      )}
      {badge && <div className="mb-3">{badge}</div>}
      <div className={tall ? 'h-52' : 'h-40'}>{children}</div>
    </motion.div>
  )
}

function DPOProgressBar() {
  const currentStage = 3
  return (
    <div className="space-y-3 pt-1">
      {dpoData.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className={`w-4 h-4 rounded-full shrink-0 ${index <= currentStage ? 'bg-blue-600' : 'bg-slate-200'}`} />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700">{item.stage}</span>
              {index === currentStage && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">ATUAL</span>
              )}
            </div>
            <div className="h-2 bg-slate-100 rounded-full mt-1 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="h-full bg-blue-600 rounded-full"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="pt-1">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
          <Award className="w-4 h-4" />
          Selo DPO Conquistado
        </span>
      </div>
    </div>
  )
}

function DPOReachChart() {
  return (
    <div className="space-y-2.5">
      {dpoReachData.map((d) => (
        <div key={d.city} className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-600 w-16 shrink-0 text-right">{d.city}</span>
          <div className="flex-1 flex h-5 rounded-sm overflow-hidden">
            {d.caminhao > 0 && (
              <div
                className="bg-blue-700 transition-all"
                style={{ width: `${(d.caminhao / DPO_MAX) * 100}%` }}
                title={`Caminhão: ${d.caminhao}`}
              />
            )}
            {d.van > 0 && (
              <div
                className="bg-emerald-500"
                style={{ width: `${(d.van / DPO_MAX) * 100}%` }}
                title={`Van: ${d.van}`}
              />
            )}
            {d.conjuntos > 0 && (
              <div
                className="bg-amber-500"
                style={{ width: `${(d.conjuntos / DPO_MAX) * 100}%` }}
                title={`Conjuntos: ${d.conjuntos}`}
              />
            )}
            {d.empilhadeiras > 0 && (
              <div
                className="bg-red-400"
                style={{ width: `${(d.empilhadeiras / DPO_MAX) * 100}%` }}
                title={`Empilhadeiras: ${d.empilhadeiras}`}
              />
            )}
          </div>
          <span className="text-xs font-bold text-slate-700 w-8 shrink-0">{d.total}</span>
        </div>
      ))}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-2 border-t border-slate-100">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-blue-700 shrink-0" />
          <span className="text-xs text-slate-600">Caminhão</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-emerald-500 shrink-0" />
          <span className="text-xs text-slate-600">Van</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-amber-500 shrink-0" />
          <span className="text-xs text-slate-600">Conjuntos</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-red-400 shrink-0" />
          <span className="text-xs text-slate-600">Empilhadeiras</span>
        </div>
      </div>
    </div>
  )
}

export function TransformationCharts() {
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
            INDICADORES DE TRANSFORMAÇÃO
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Painel de Inteligência Operacional
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Resultados mensuráveis que demonstram o impacto direto na eficiência e redução de custos operacionais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chart 1 - Efficiency */}
          <ChartCard
            title="Índice de Eficiência"
            subtitle="Consumo de combustível"
            icon={<TrendingDown className="w-5 h-5" />}
            highlight="-6%"
            highlightColor="text-emerald-600"
            delay={0}
            tall
          >
            <div className="h-full flex flex-col gap-1">
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={efficiencyData} margin={{ top: 4, right: 8, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#94A3B8" />
                    <YAxis
                      tick={{ fontSize: 11 }}
                      stroke="#94A3B8"
                      domain={[90, 100]}
                      tickFormatter={(v) => `${v}%`}
                    />
                    <Tooltip content={<CustomTooltip unit="%" />} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#1E40AF"
                      strokeWidth={3}
                      dot={{ fill: '#1E40AF', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-slate-500 text-center leading-snug shrink-0">
                Redução de 6% no consumo = R$ 150.000 economizados (total acumulado)
              </p>
            </div>
          </ChartCard>

          {/* Chart 2 - QLP */}
          <ChartCard
            title="QLP — Quadro de Lotação por Posto"
            subtitle="Proporção de motoristas por caminhão"
            description="Um índice maior significa melhor cobertura: mais motoristas por caminhão garante folgas, reduz absenteísmo e turnover, e aumenta o volume entregue ao cliente. Após reunião estratégica, o cliente decidiu arcar com os custos desta mudança, reconhecendo o impacto positivo na operação."
            icon={<Users className="w-5 h-5" />}
            highlight="+25%"
            highlightColor="text-emerald-600"
            delay={0.1}
            tall
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={qlpData} margin={{ top: 4, right: 8, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="#94A3B8" />
                <YAxis
                  tick={{ fontSize: 11 }}
                  stroke="#94A3B8"
                  domain={[0.8, 1.5]}
                  tickFormatter={(v) => v.toFixed(2)}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={60}>
                  <LabelList
                    dataKey="label"
                    position="top"
                    style={{ fontSize: 12, fontWeight: 700, fill: '#1E40AF' }}
                  />
                  <Cell fill="#94A3B8" />
                  <Cell fill="#16A34A" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Chart 3 - DPO */}
          <ChartCard
            title="Evolução DPO"
            subtitle="Metodologia Ambev"
            icon={<TargetIcon className="w-5 h-5" />}
            delay={0.2}
            tall
          >
            <DPOProgressBar />
          </ChartCard>

          {/* Chart 4A - Tempo de Liberacao */}
          <ChartCard
            title="Tempo de Liberação de Veículos"
            subtitle="Agilidade na liberação da frota"
            icon={<Clock className="w-5 h-5" />}
            highlight="27 min"
            highlightColor="text-emerald-600"
            badge={
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                <span>&#10003;</span> Meta Superada
              </span>
            }
            delay={0.3}
            tall
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={liberacaoData} margin={{ top: 4, right: 8, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#94A3B8" />
                <YAxis
                  tick={{ fontSize: 11 }}
                  stroke="#94A3B8"
                  domain={[20, 80]}
                  tickFormatter={(v) => `${v}min`}
                />
                <Tooltip content={<CustomTooltip unit=" min" />} />
                <ReferenceLine
                  y={30}
                  stroke="#DC2626"
                  strokeDasharray="5 3"
                  label={{ value: 'Meta: 30min', position: 'insideTopRight', fontSize: 10, fill: '#DC2626' }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Liberacao"
                  stroke="#1E40AF"
                  strokeWidth={3}
                  dot={{ fill: '#1E40AF', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Chart 4B - Indice de Socorro em Rota */}
          <ChartCard
            title="Índice de Socorro em Rota"
            subtitle="Por quantidade de viagens realizadas"
            icon={<AlertTriangle className="w-5 h-5" />}
            highlight="0,49%"
            highlightColor="text-emerald-600"
            badge={
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                <span>&#10003;</span> Meta Superada
              </span>
            }
            delay={0.4}
            tall
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={socorroData} margin={{ top: 4, right: 8, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#94A3B8" />
                <YAxis
                  tick={{ fontSize: 11 }}
                  stroke="#94A3B8"
                  domain={[0, 1.4]}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<CustomTooltip unit="%" />} />
                <ReferenceLine
                  y={0.5}
                  stroke="#DC2626"
                  strokeDasharray="5 3"
                  label={{ value: 'Meta: ≤ 0,5%', position: 'insideTopRight', fontSize: 10, fill: '#DC2626' }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Socorro"
                  stroke="#1E40AF"
                  strokeWidth={3}
                  dot={{ fill: '#1E40AF', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Chart 5 - Alcance da Padronização DPO */}
          <ChartCard
            title="Alcance da Padronização DPO"
            subtitle="390 veículos em 4 unidades operando sob metodologia DPO Sustentável"
            icon={<MapPin className="w-5 h-5" />}
            highlight="390 veículos"
            highlightColor="text-blue-600"
            delay={0.5}
            tall
          >
            <DPOReachChart />
          </ChartCard>
        </div>
      </div>
    </section>
  )
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}
