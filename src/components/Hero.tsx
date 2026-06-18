import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden border-b-4 border-surface-container-high">
      <div className="absolute inset-0 z-0 bg-surface">
        <img 
          alt="Cinematic Simulation View" 
          className="w-full h-full object-cover opacity-20 mix-blend-multiply" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7hd-HTV4Xr9JECAm9FcbSVOiAEkMj9OMOSfCuDkHoyTmFUvMn_Zbvjl6llnRBDZQOHy6QpWIXuKxxPWOhpYlLAzh5CH9up6rflcJwnGQyWd-XiP3d0PZjXexg-5_V3tcyCJIWitoq2OLcfr6hpTC7vOchNHJM5NYQ2RO3jfEuwi4kKRjgaxIOdWZSRIShV98kJhjIh3-BZE-LYF6UIj0nQ8GZhItnR3DThPT_S8h2BwJsIsRA-5RZF3PoQrw0vDenQw0e88Etz1E"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-8 z-10 grid grid-cols-1 md:grid-cols-10 gap-12">
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center gap-4 text-primary-container">
            <span className="h-px w-12 bg-primary-container"></span>
            <span className="font-mono text-xs tracking-[0.3em] uppercase">SIMULADOR_EDUCATIVO // UNITY_V2022</span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none italic">
            IRON <span className="text-primary-container">LINK</span>
          </h1>
          <p className="max-w-2xl text-lg text-on-surface-variant font-light leading-relaxed">
            Un simulador interactivo enfocado en el aprendizaje y la instrucción de maquinaria pesada. Proyecto estudiantil diseñado en Unity para enseñar operación de vehículos y protocolos de seguridad en construcción.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary-container text-on-primary-container px-8 py-4 font-headline font-black text-xl tracking-widest uppercase neomorphic-out flex items-center gap-3 active:scale-95 transition-transform cursor-pointer">
              DESCARGAR DEMO
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-outline-variant text-on-surface bg-surface-container-high px-8 py-4 font-headline font-bold text-xl tracking-widest uppercase hover:bg-surface-bright transition-colors cursor-pointer">
              VER_CÓDIGO
            </button>
          </div>
        </div>
        <div className="md:col-span-3 hidden md:flex flex-col justify-end border-l border-outline-variant/20 pl-8 pb-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-on-surface-variant font-bold uppercase tracking-widest drop-shadow-sm">OBJETOS ACTIVOS</div>
              <div className="text-4xl font-headline font-bold text-on-surface drop-shadow-md">1,204</div>
            </div>
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-on-surface-variant font-bold uppercase tracking-widest drop-shadow-sm">FPS PROMEDIO (TEST)</div>
              <div className="text-4xl font-headline font-bold text-on-surface drop-shadow-md">58.4</div>
            </div>
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-on-surface-variant font-bold uppercase tracking-widest drop-shadow-sm">TIEMPO DESARROLLO</div>
              <div className="text-4xl font-headline font-bold text-on-surface drop-shadow-md">8 MESES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
