import { BookOpen, ShieldCheck, ClipboardCheck, GraduationCap } from "lucide-react";

export default function Features() {
  return (
    <section id="enfoque" className="py-24 bg-surface px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="font-headline text-5xl font-bold uppercase tracking-tight">ENFOQUE <span className="text-primary-container italic">EDUCATIVO</span></h2>
          <p className="font-mono text-xs text-on-surface-variant font-bold max-w-xs text-right hidden sm:block">MÓDULO_DE_INSTRUCCIÓN: ENTRENAMIENTO_V1.0</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Inspired Fleet */}
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-high p-8 relative overflow-hidden group neomorphic-out">
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
              <div>
                <GraduationCap className="text-primary-container w-10 h-10 mb-4" />
                <h3 className="font-headline text-3xl font-bold mb-4">CABINAS Y CONTROLES</h3>
                <p className="text-on-surface-variant leading-relaxed">Orientado a la instrucción y memoria muscular de los mandos. Diseñamos la interfaz y el comportamiento de la maquinaría para que el estudiante aprenda y practique la secuencia correcta operativa sin riesgos.</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-primary-container animate-pulse rounded-full"></div>
          </div>

          {/* Basic Terrain */}
          <div className="bg-surface-container-high p-8 neomorphic-out border-t-2 border-primary-container/20">
            <BookOpen className="text-primary-container w-8 h-8 mb-4" />
            <h3 className="font-headline text-xl font-bold mb-2">MÓDULOS DE LECCIONES</h3>
            <p className="text-xs text-on-surface-variant font-mono uppercase tracking-tighter">Secuencias paso a paso guiadas para aprender tareas específicas.</p>
          </div>

          {/* Interactive Cabs */}
          <div className="bg-surface-container-high p-8 neomorphic-out">
            <ShieldCheck className="text-primary-container w-8 h-8 mb-4" />
            <h3 className="font-headline text-xl font-bold mb-2">ENTORNO SEGURO</h3>
            <p className="text-xs text-on-surface-variant font-mono uppercase tracking-tighter">Práctica de maniobras críticas de obra sin riesgo de accidentes reales.</p>
          </div>

          {/* Atmospheric Cycle */}
          <div className="md:col-span-2 bg-surface-container-high p-8 flex flex-col md:flex-row gap-8 items-center neomorphic-out border-r-2 border-primary-container/20">
            <div className="flex-1">
              <ClipboardCheck className="text-primary-container w-8 h-8 mb-4" />
              <h3 className="font-headline text-2xl font-bold mb-2 uppercase italic">EVALUACIÓN Y MÉTRICAS</h3>
              <p className="text-on-surface-variant text-sm">Registro continuo del operario con puntos de penalización para medir la destreza y asimilación de la normativa de obra.</p>
            </div>
            <div className="w-full md:w-1/2 h-32 bg-surface-container-lowest neomorphic-in p-4 flex items-center justify-center">
              <div className="w-full space-y-2">
                <div className="flex justify-between font-mono text-[10px]"><span>PUNTUACIÓN DE EFICIENCIA</span><span>85%</span></div>
                <div className="h-1 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container w-[85%] segmented-progress"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
