import { Box, Settings, ChevronRight } from "lucide-react";

export default function Modules() {
  return (
    <section id="modulos" className="py-24 bg-surface-container px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* 3D PBR Module */}
        <div className="bg-surface-container-highest p-12 neomorphic-out relative overflow-hidden group">
          <div className="absolute -top-4 -right-4 opacity-10">
            <Box className="w-[12rem] h-[12rem]" strokeWidth={0.5} />
          </div>
          <h3 className="font-headline text-4xl font-bold mb-4 italic tracking-tight">RECONOCIMIENTO DE PIEZAS</h3>
          <p className="text-on-surface-variant mb-8 max-w-sm">Inspecciona herramientas y componentes clave. Parte del aprendizaje es comprender el mantenimiento preventivo y la identificación de partes críticas.</p>
          
          <div className="aspect-video bg-surface-container-lowest flex items-center justify-center relative neomorphic-in group overflow-hidden rounded-xl">
            <img 
              loading="lazy"
              alt="PBR Asset Detail" 
              className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYQ9P2UMgKWACdmklQOOYqvjoCr6nY2hQEwJCrJXnlXQ3gN2uGrsKFh0JsPcdkrXB6S3kHA3eccNBopqXcvypJ3nljPm_14iBuPtfxc3_x_H-1qzFgwJl-kGiejuKx46WuxormSJEFgS9O8-aGOjCwJrIrh4cBT3i0gfjdFRbiHuj83XPIxsuQnBtRSQS05DAwFqaLcP0bpf6VKNWMhSuhaRvaGS9kYQLjanYOloTkSJLCPYi7E9mTjktd_2TSVxqpcD2Q3J9eWFs"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="px-2 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold shadow-md">PIEZA</div>
              <div className="px-2 py-1 bg-surface-container-highest text-on-surface text-[10px] font-bold shadow-md">DESGASTE</div>
            </div>
            <div className="absolute bottom-4 right-4 animate-[spin_4s_linear_infinite]">
              <Settings className="text-primary-container w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Interactive Landmarks */}
        <div className="bg-surface-container-highest p-12 neomorphic-out flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-4xl font-bold mb-4 italic tracking-tight">MÓDULOS DE PRÁCTICA</h3>
            <p className="text-on-surface-variant mb-8">Nuestros entornos están adaptados metódicamente a diferentes fases de instrucción teórica y práctica.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-4 border-b border-outline-variant hover:bg-surface-bright transition-colors cursor-pointer group">
              <span className="font-mono text-2xl font-bold text-on-surface-variant/50 group-hover:text-primary-container">01</span>
              <div className="flex-1">
                <div className="font-headline font-bold uppercase text-sm sm:text-base">ZONA DE MANIOBRAS LIBRES</div>
                <div className="text-[10px] font-mono text-on-surface-variant font-bold">CONDUCCIÓN Y TACTO BÁSICO | SIN OBSTÁCULOS</div>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant/50 group-hover:text-primary-container shrink-0" />
            </div>

            <div className="flex items-center gap-6 p-4 border-b border-outline-variant hover:bg-surface-bright transition-colors cursor-pointer group">
              <span className="font-mono text-2xl font-bold text-on-surface-variant/50 group-hover:text-primary-container">02</span>
              <div className="flex-1">
                <div className="font-headline font-bold uppercase text-sm sm:text-base">ZONA DE CARGA LIMITADA</div>
                <div className="text-[10px] font-mono text-on-surface-variant font-bold">OPERACIÓN DE BRAZO | CONTROL DEL PERÍMETRO</div>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant/50 group-hover:text-primary-container shrink-0" />
            </div>

            <div className="flex items-center gap-6 p-4 border-b border-outline-variant hover:bg-surface-bright transition-colors cursor-pointer group">
              <span className="font-mono text-2xl font-bold text-on-surface-variant/50 group-hover:text-primary-container">03</span>
              <div className="flex-1">
                <div className="font-headline font-bold uppercase text-sm sm:text-base">CIRCUITO DE EXAMEN FINAL</div>
                <div className="text-[10px] font-mono text-on-surface-variant font-bold">EVALUACIÓN INTEGRAL | PROTOCOLOS ESTRICTOS</div>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant/50 group-hover:text-primary-container shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
