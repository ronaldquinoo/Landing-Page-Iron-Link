import { useState, useRef, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { ChevronsLeftRight } from "lucide-react";
import baseImage from '../images/image_2.jpeg';
import overlayImage from '../images/image_7.jpeg';

export default function ComparisonSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (e: ReactMouseEvent | ReactTouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as ReactMouseEvent).clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <section id="aprendizaje" className="py-24 bg-surface-container-lowest border-y-4 border-surface-container-high overflow-hidden">
      <div className="container mx-auto px-8 flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/3 space-y-6">
          <div className="inline-block px-3 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold font-mono uppercase">Puente Metodológico</div>
          <h2 className="font-headline text-4xl font-bold tracking-tight">APRENDIZAJE<br/><span className="text-primary-container">SIN RIESGOS</span></h2>
          <p className="text-on-surface-variant leading-relaxed">El simulador permite a los estudiantes comprender las dinámicas de obra, carga y el espacio perimetral en un entorno virtual tolerante a fallos, mucho antes de manipular maquinaria real.</p>
          <div className="p-4 bg-surface-container-high border-l-4 border-primary-container italic font-mono text-sm">
            "Ideal para automatizar la memoria muscular y aprender los protocolos en un entorno controlado." - Asesor de Ingeniería
          </div>
        </div>
        
        <div 
          ref={sliderRef}
          onMouseMove={handleSliderMove}
          onTouchMove={handleSliderMove}
          className="w-full md:w-2/3 relative h-[300px] sm:h-[400px] lg:h-[500px] bg-surface-container rounded-lg overflow-hidden neomorphic-out group cursor-ew-resize select-none touch-none"
        >
          {/* Imagen Base (Fondo) */}
          <div className="absolute inset-0">
            <img 
              loading="lazy"
              alt="Standard Mesh View" 
              className="w-full h-full object-cover pointer-events-none" 
              src={baseImage}
            />
            <div className="absolute bottom-4 right-4 bg-surface/90 px-4 py-1 font-mono text-xs text-on-surface font-bold pointer-events-none">ZONA_DE_MANIOBRA</div>
          </div>
          
          {/* Imagen Superpuesta (Recortada por sliderPos) */}
          <div 
            className="absolute inset-0 bg-surface pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img 
              loading="lazy"
              alt="Dynamic Terrain View" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
              src={overlayImage} 
            />
            <div className="absolute bottom-4 left-4 bg-primary-container px-4 py-1 font-mono text-xs text-on-primary-container font-bold pointer-events-none">ZONA_DE_EXCAVACIÓN</div>
          </div>

          {/* Línea divisoria */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-primary-container pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          ></div>

          {/* Botón Central del Slider */}
          <div 
            className="absolute top-1/2 w-12 h-12 bg-primary-container text-on-primary-container flex items-center justify-center rounded-full shadow-xl pointer-events-none transition-transform duration-75"
            style={{ left: `${sliderPos}%`, transform: `translate(-50%, -50%)` }}
          >
            <ChevronsLeftRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
