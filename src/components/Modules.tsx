import { Box, Settings, ChevronRight } from "lucide-react";
import moduleImage from '../images/image_6.jpeg';

export default function Modules() {
  return (
    <section id="modulos" className="py-24 bg-surface-container px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* 3D PBR Module */}
        <div className="bg-surface-container-highest p-12 neomorphic-out relative overflow-hidden group">
          <div className="absolute -top-4 -right-4 opacity-10">
            <Box className="w-[12rem] h-[12rem]" strokeWidth={0.5} />
          </div>
          <h3 className="font-headline text-4xl font-bold mb-4 italic tracking-tight">MOVER, COLOCAR Y APRENDER</h3>
          <p className="text-on-surface-variant mb-8 max-w-sm">La mecánica central es sencilla: el jugador toma una pieza y la mueve hasta su ubicación correcta. Si la pieza está bien colocada, el sistema avanza al siguiente paso. Si no, la pieza regresa y el jugador puede intentarlo de nuevo.</p>
          
          <div className="aspect-video bg-surface-container-lowest flex items-center justify-center relative neomorphic-in group overflow-hidden rounded-xl">
            <img 
              loading="lazy"
              alt="Mecánica de Ensamblaje" 
              className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
              src={moduleImage}
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="px-2 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold shadow-md">PIEZA</div>
              <div className="px-2 py-1 bg-surface-container-highest text-on-surface text-[10px] font-bold shadow-md">UBICACIÓN</div>
            </div>
            <div className="absolute bottom-4 right-4 animate-[spin_4s_linear_infinite]">
              <Settings className="text-primary-container w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Interactive Landmarks */}
        <div className="bg-surface-container-highest p-12 neomorphic-out flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-4xl font-bold mb-4 italic tracking-tight">DESARROLLO DEL JUEGO</h3>
            <p className="text-on-surface-variant mb-8">Durante el desarrollo se diseñó cada elemento para que el jugador entienda qué está haciendo y por qué lo está haciendo, trabajando tres partes principales:</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-4 border-b border-outline-variant hover:bg-surface-bright transition-colors cursor-pointer group">
              <span className="font-mono text-2xl font-bold text-on-surface-variant/50 group-hover:text-primary-container">01</span>
              <div className="flex-1">
                <div className="font-headline font-bold uppercase text-sm sm:text-base">EL ENTORNO INDUSTRIAL</div>
                <div className="text-[10px] font-mono text-on-surface-variant font-bold">UN ESPACIO REAL CON MÁQUINAS, PLATAFORMAS Y HERRAMIENTAS DE FÁBRICA</div>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant/50 group-hover:text-primary-container shrink-0" />
            </div>

            <div className="flex items-center gap-6 p-4 border-b border-outline-variant hover:bg-surface-bright transition-colors cursor-pointer group">
              <span className="font-mono text-2xl font-bold text-on-surface-variant/50 group-hover:text-primary-container">02</span>
              <div className="flex-1">
                <div className="font-headline font-bold uppercase text-sm sm:text-base">SISTEMA DE INTERACCIÓN</div>
                <div className="text-[10px] font-mono text-on-surface-variant font-bold">MECÁNICA DE PRECISIÓN PARA MOVER Y COLOCAR CADA COMPONENTE EN SU LUGAR</div>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant/50 group-hover:text-primary-container shrink-0" />
            </div>

            <div className="flex items-center gap-6 p-4 border-b border-outline-variant hover:bg-surface-bright transition-colors cursor-pointer group">
              <span className="font-mono text-2xl font-bold text-on-surface-variant/50 group-hover:text-primary-container">03</span>
              <div className="flex-1">
                <div className="font-headline font-bold uppercase text-sm sm:text-base">LÓGICA DE ENTRENAMIENTO</div>
                <div className="text-[10px] font-mono text-on-surface-variant font-bold">SECUENCIA GUIADA CON PIEZAS FANTASMA Y RETROALIMENTACIÓN DE TIEMPO</div>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant/50 group-hover:text-primary-container shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
