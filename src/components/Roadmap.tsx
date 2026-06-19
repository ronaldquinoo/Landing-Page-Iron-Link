import { Cpu, Route } from "lucide-react";

export default function Roadmap() {
  return (
    <section id="hoja-de-ruta" className="py-24 bg-surface px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* System Specs */}
        <div className="md:col-span-5">
          <h3 className="font-headline text-3xl font-bold mb-8 flex items-center gap-4">
            <Cpu className="text-primary-container w-8 h-8" />
            ESPECIFICACIONES
          </h3>
          <div className="space-y-4 font-mono">
            <div className="flex justify-between items-center p-4 bg-surface-container-low neomorphic-in group hover:bg-surface-container-high transition-colors">
              <span className="text-on-surface-variant font-bold text-xs uppercase">PROCESADOR</span>
              <span className="text-sm font-bold text-on-surface">i3-8100 / R3 3200G</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-surface-container-low neomorphic-in group hover:bg-surface-container-high transition-colors">
              <span className="text-on-surface-variant font-bold text-xs uppercase">MEMORIA</span>
              <span className="text-sm font-bold text-on-surface">8GB DDR4</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-surface-container-low neomorphic-in group hover:bg-surface-container-high transition-colors">
              <span className="text-on-surface-variant font-bold text-xs uppercase">GRÁFICOS</span>
              <span className="text-sm font-bold text-on-surface">GTX 1060 / RX 580 (4GB)</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-surface-container-low neomorphic-in group hover:bg-surface-container-high transition-colors">
              <span className="text-on-surface-variant font-bold text-xs uppercase">ALMACENAMIENTO</span>
              <span className="text-sm font-bold text-on-surface">15GB SSD/HDD</span>
            </div>
          </div>
          <div className="mt-8 p-6 border-l-2 border-primary-container bg-surface-container-highest/30">
            <p className="text-xs text-on-surface-variant font-medium leading-relaxed italic">Al ser un proyecto estudiantil enfocado en la educación, hemos optimizado el entorno para funcionar fluidamente en los laboratorios de computación de cualquier instituto técnico, sin requerir hardware de alta gama.</p>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="md:col-span-7">
          <h3 className="font-headline text-3xl font-bold mb-8 flex items-center gap-4">
            <Route className="text-primary-container w-8 h-8" />
            HOJA DE RUTA
          </h3>
          <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-surface-container-high">
            <div className="relative">
              <div className="absolute -left-10 top-0 w-5 h-5 bg-primary-container rounded-full border-4 border-surface outline outline-2 outline-primary-container"></div>
              <div className="font-mono text-primary-container font-bold mb-2">FASE 01 (COMPLETADA)</div>
              <h4 className="font-headline text-xl font-bold uppercase">MÓDULO DE INTERACCIÓN</h4>
              <p className="text-on-surface-variant text-sm mt-2">Implementación de la mecánica de interacción con piezas y reconocimiento de componentes en la estación de trabajo.</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 top-0 w-5 h-5 bg-surface-container-high rounded-full border-4 border-surface"></div>
              <div className="font-mono text-on-surface-variant font-bold mb-2">FASE 02 (EN PROGRESO)</div>
              <h4 className="font-headline text-xl font-bold uppercase">SISTEMA DE GUÍA Y PASOS</h4>
              <p className="text-on-surface-variant text-sm mt-2">Creación de lecciones guiadas utilizando piezas fantasma, animaciones e instrucciones visuales para facilitar el armado.</p>
            </div>
            
            <div className="relative opacity-70">
              <div className="absolute -left-10 top-0 w-5 h-5 bg-surface-container-high rounded-full border-4 border-surface"></div>
              <div className="font-mono text-on-surface-variant font-bold mb-2">FASE 03 (PLANIFICADA)</div>
              <h4 className="font-headline text-xl font-bold uppercase">MÉTRICAS Y CRONÓMETRO</h4>
              <p className="text-on-surface-variant text-sm mt-2">Integración del sistema de métricas para registrar la precisión del armado y medir el tiempo utilizado en cada paso.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
