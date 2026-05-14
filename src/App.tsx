/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, BadgeCheck, Layers, Wrench, Snowflake, Cpu, Route, Box, Settings, ChevronRight, ChevronsLeftRight, BookOpen, ShieldCheck, ClipboardCheck, GraduationCap } from "lucide-react";

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-surface/95 backdrop-blur-md border-b-2 border-surface-container-high shadow-[inset_1px_1px_0px_#393939]">
        <div className="text-2xl font-black tracking-tighter text-primary-container italic cursor-pointer">
          <a href="#inicio">IRON_LINK</a>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="font-headline uppercase tracking-widest text-sm font-bold text-outline hover:text-white transition-colors duration-300" href="#enfoque">ENFOQUE</a>
          <a className="font-headline uppercase tracking-widest text-sm font-bold text-outline hover:text-white transition-colors duration-300" href="#modulos">MÓDULOS</a>
          <a className="font-headline uppercase tracking-widest text-sm font-bold text-outline hover:text-white transition-colors duration-300" href="#hoja-de-ruta">HOJA DE RUTA</a>
          <a className="font-headline uppercase tracking-widest text-sm font-bold text-outline hover:text-white transition-colors duration-300" href="#herramientas">HERRAMIENTAS</a>
        </nav>
        <div className="flex items-center gap-6">
          <button className="bg-primary-container text-on-primary-container px-4 py-2 font-headline font-bold text-xs tracking-tighter uppercase shadow-[1px_1px_0px_white] active:scale-95 duration-100 ease-in-out cursor-pointer">
            VER REPOSITORIO
          </button>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="inicio" className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden border-b-4 border-surface-container-high">
          <div className="absolute inset-0 z-0 bg-surface">
            <img 
              alt="Cinematic Simulation View" 
              className="w-full h-full object-cover grayscale opacity-30" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7hd-HTV4Xr9JECAm9FcbSVOiAEkMj9OMOSfCuDkHoyTmFUvMn_Zbvjl6llnRBDZQOHy6QpWIXuKxxPWOhpYlLAzh5CH9up6rflcJwnGQyWd-XiP3d0PZjXexg-5_V3tcyCJIWitoq2OLcfr6hpTC7vOchNHJM5NYQ2RO3jfEuwi4kKRjgaxIOdWZSRIShV98kJhjIh3-BZE-LYF6UIj0nQ8GZhItnR3DThPT_S8h2BwJsIsRA-5RZF3PoQrw0vDenQw0e88Etz1E"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent"></div>
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
                  <div className="text-[10px] font-mono text-outline uppercase tracking-widest">OBJETOS ACTIVOS</div>
                  <div className="text-4xl font-headline font-bold text-primary-fixed-dim">1,204</div>
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-outline uppercase tracking-widest">FPS PROMEDIO (TEST)</div>
                  <div className="text-4xl font-headline font-bold text-primary-fixed-dim">58.4</div>
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-outline uppercase tracking-widest">TIEMPO DESARROLLO</div>
                  <div className="text-4xl font-headline font-bold text-primary-fixed-dim">8 MESES</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid: Staggered Bento */}
        <section id="enfoque" className="py-24 bg-surface px-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <h2 className="font-headline text-5xl font-bold uppercase tracking-tight">ENFOQUE <span className="text-primary-container italic">EDUCATIVO</span></h2>
              <p className="font-mono text-xs text-outline max-w-xs text-right hidden sm:block">MÓDULO_DE_INSTRUCCIÓN: ENTRENAMIENTO_V1.0</p>
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

        {/* Comparison Slider Section */}
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
            
            <div className="w-full md:w-2/3 relative h-[300px] sm:h-[400px] lg:h-[500px] bg-surface-container rounded-lg overflow-hidden neomorphic-out group cursor-ew-resize">
              <div className="absolute inset-0">
                <img 
                  alt="Standard Mesh View" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCafWzq8vtbJNZ3s7FauINKNmA2bC4SKds0KSVjKXpsVzeG3ZObRsFabgIeuMPqlqXSHWOfENuSEiGHRzvmx5xUCljoyfZO6rsQVj9HWQfODbu1pdCwcnmdoAi2dHqaHZ_eCm4P88gRP7SmyPeg042eSK6LEyXtC6V2RjZIo2S2ba7wkPlf5n3NkatdIQCaCbOaU9POKmOFySlP3CQG7fjyBwiLC22qbTnDpxr1vihAFF9xEpW_s9mbny_CQvXxJlcWgP0ymma8egI"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-1 font-mono text-xs text-white">ZONA_DE_MANIOBRA</div>
              </div>
              
              <div className="absolute inset-0 w-1/2 border-r-4 border-primary-container overflow-hidden bg-surface">
                <img 
                  alt="Dynamic Terrain View" 
                  className="absolute inset-0 w-[200%] h-[100%] max-w-none object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvXzXjizOYkxOOgRHc7QYFYsHgcgaFyICAuqdDG6aqCqqxJU78KWXyLoPH1k1CGvU5iKonVOKdBTSROLAnOJgoWLLzjbXW3RNskwYmgSkkhQ30IHQqezrpP4QiHl3wYkWLCG2AMQQe7qNlwt10oXotJdnOizGWpmcHSUZTZj8tYXqauCanKJ4v0KrRhuYyiNWqCygPntuDxdOs6hsx0lp-t-oYAHqN5LAbnJqWFynfZGJ_K0R1VxUqrlZr8we-bQFJ3HnsmvpTC_Q" 
                />
                <div className="absolute bottom-4 left-4 bg-primary-container px-4 py-1 font-mono text-xs text-on-primary-container font-bold">ZONA_DE_EXCAVACIÓN</div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary-container text-on-primary-container flex items-center justify-center rounded-full shadow-xl">
                <ChevronsLeftRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        </section>

        {/* System Specs & Roadmap */}
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
                  <span className="text-outline text-xs uppercase">PROCESADOR</span>
                  <span className="text-sm font-bold text-on-surface">i3-8100 / R3 3200G</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-surface-container-low neomorphic-in group hover:bg-surface-container-high transition-colors">
                  <span className="text-outline text-xs uppercase">MEMORIA</span>
                  <span className="text-sm font-bold text-on-surface">8GB DDR4</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-surface-container-low neomorphic-in group hover:bg-surface-container-high transition-colors">
                  <span className="text-outline text-xs uppercase">GRÁFICOS</span>
                  <span className="text-sm font-bold text-on-surface">GTX 1060 / RX 580 (4GB)</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-surface-container-low neomorphic-in group hover:bg-surface-container-high transition-colors">
                  <span className="text-outline text-xs uppercase">ALMACENAMIENTO</span>
                  <span className="text-sm font-bold text-on-surface">15GB SSD/HDD</span>
                </div>
              </div>
              <div className="mt-8 p-6 border-l-2 border-primary-container bg-surface-container-highest/30">
                <p className="text-xs text-outline leading-relaxed italic">Al ser un proyecto estudiantil enfocado en la educación, hemos optimizado el entorno para funcionar fluidamente en los laboratorios de computación de cualquier instituto técnico, sin requerir hardware de alta gama.</p>
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
                  <h4 className="font-headline text-xl font-bold uppercase">MÓDULO DE FAMLIRIZACIÓN</h4>
                  <p className="text-on-surface-variant text-sm mt-2">Implementación de controles de conducción base y reconocimiento guiado de los paneles de operación en cabina.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 top-0 w-5 h-5 bg-surface-container-high rounded-full border-4 border-surface"></div>
                  <div className="font-mono text-outline font-bold mb-2">FASE 02 (EN PROGRESO)</div>
                  <h4 className="font-headline text-xl font-bold uppercase">MÓDULOS DE OBRA</h4>
                  <p className="text-on-surface-variant text-sm mt-2">Creación de lecciones guiadas de traslado, carga de camiones volquete y nivelación de terrenos estructurados.</p>
                </div>
                
                <div className="relative opacity-50">
                  <div className="absolute -left-10 top-0 w-5 h-5 bg-surface-container-high rounded-full border-4 border-surface"></div>
                  <div className="font-mono text-outline font-bold mb-2">FASE 03 (PLANIFICADA)</div>
                  <h4 className="font-headline text-xl font-bold uppercase">SISTEMA DE EVALUACIÓN</h4>
                  <p className="text-on-surface-variant text-sm mt-2">Integración de un sistema de métricas que penaliza faltas de seguridad y evalúa objetivamente la destreza del aprendiz.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Landmarks & PBR Viewer */}
        <section id="modulos" className="py-24 bg-surface-container px-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 3D PBR Module */}
            <div className="bg-surface-container-highest p-12 neomorphic-out relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 opacity-10">
                <Box className="w-[12rem] h-[12rem]" strokeWidth={0.5} />
              </div>
              <h3 className="font-headline text-4xl font-bold mb-4 italic tracking-tight">RECONOCIMIENTO DE PIEZAS</h3>
              <p className="text-on-surface-variant mb-8 max-w-sm">Inspecciona herramientas y componentes clave. Parte del aprendizaje es comprender el mantenimiento preventivo y la identificación de partes críticas.</p>
              
              <div className="aspect-video bg-black flex items-center justify-center relative neomorphic-in group overflow-hidden">
                <img 
                  alt="PBR Asset Detail" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYQ9P2UMgKWACdmklQOOYqvjoCr6nY2hQEwJCrJXnlXQ3gN2uGrsKFh0JsPcdkrXB6S3kHA3eccNBopqXcvypJ3nljPm_14iBuPtfxc3_x_H-1qzFgwJl-kGiejuKx46WuxormSJEFgS9O8-aGOjCwJrIrh4cBT3i0gfjdFRbiHuj83XPIxsuQnBtRSQS05DAwFqaLcP0bpf6VKNWMhSuhaRvaGS9kYQLjanYOloTkSJLCPYi7E9mTjktd_2TSVxqpcD2Q3J9eWFs"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="px-2 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold">PIEZA</div>
                  <div className="px-2 py-1 bg-surface-bright text-white text-[10px] font-bold">DESGASTE</div>
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
                  <span className="font-mono text-2xl font-bold text-outline group-hover:text-primary-container">01</span>
                  <div className="flex-1">
                    <div className="font-headline font-bold uppercase text-sm sm:text-base">ZONA DE MANIOBRAS LIBRES</div>
                    <div className="text-[10px] font-mono text-outline">CONDUCCIÓN Y TACTO BÁSICO | SIN OBSTÁCULOS</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-outline group-hover:text-primary-container shrink-0" />
                </div>

                <div className="flex items-center gap-6 p-4 border-b border-outline-variant hover:bg-surface-bright transition-colors cursor-pointer group">
                  <span className="font-mono text-2xl font-bold text-outline group-hover:text-primary-container">02</span>
                  <div className="flex-1">
                    <div className="font-headline font-bold uppercase text-sm sm:text-base">ZONA DE CARGA LIMITADA</div>
                    <div className="text-[10px] font-mono text-outline">OPERACIÓN DE BRAZO | CONTROL DEL PERÍMETRO</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-outline group-hover:text-primary-container shrink-0" />
                </div>

                <div className="flex items-center gap-6 p-4 border-b border-outline-variant hover:bg-surface-bright transition-colors cursor-pointer group">
                  <span className="font-mono text-2xl font-bold text-outline group-hover:text-primary-container">03</span>
                  <div className="flex-1">
                    <div className="font-headline font-bold uppercase text-sm sm:text-base">CIRCUITO DE EXAMEN FINAL</div>
                    <div className="text-[10px] font-mono text-outline">EVALUACIÓN INTEGRAL | PROTOCOLOS ESTRICTOS</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-outline group-hover:text-primary-container shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands: Asymmetric Cards */}
        <section id="herramientas" className="py-24 bg-surface overflow-hidden">
          <div className="px-8 container mx-auto">
            <h2 className="font-headline text-2xl font-bold uppercase tracking-widest mb-12 border-l-4 border-primary-container pl-4">HERRAMIENTAS UTILIZADAS</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="h-32 bg-surface-container-high flex items-center justify-center neomorphic-out grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
                <span className="font-headline font-black text-xl lg:text-2xl text-primary-container transition-colors">UNITY 3D</span>
              </div>
              <div className="h-32 bg-surface-container-high flex items-center justify-center neomorphic-out grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
                <span className="font-headline font-black text-xl lg:text-2xl text-primary-container transition-colors">BLENDER</span>
              </div>
              <div className="h-32 bg-surface-container-high flex items-center justify-center neomorphic-out grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
                <span className="font-headline font-black text-xl lg:text-2xl text-primary-container transition-colors">C# / .NET</span>
              </div>
              <div className="h-32 bg-surface-container-high flex items-center justify-center neomorphic-out grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
                <span className="font-headline font-black text-xl lg:text-2xl text-primary-container transition-colors">GITHUB</span>
              </div>
              <div className="h-32 bg-surface-container-high flex items-center justify-center neomorphic-out grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
                <span className="font-headline font-black text-xl lg:text-2xl text-center text-primary-container transition-colors">VISUAL<br/>STUDIO</span>
              </div>
              <div className="h-32 bg-surface-container-high flex items-center justify-center neomorphic-out grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
                <span className="font-headline font-black text-xl lg:text-2xl text-primary-container transition-colors">SUBSTANCE</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-10 flex flex-col items-center gap-4 bg-[#0A0A0A] border-t-4 border-[#2A2A2A]">
        <div className="flex gap-8 mb-4">
          <a className="font-mono text-[10px] tracking-tight uppercase text-[#444444] hover:text-primary-container transition-colors" href="#">VER GITHUB</a>
          <a className="font-mono text-[10px] tracking-tight uppercase text-[#444444] hover:text-primary-container transition-colors" href="#">DOCUMENTACIÓN</a>
          <a className="font-mono text-[10px] tracking-tight uppercase text-[#444444] hover:text-primary-container transition-colors" href="#">CONTACTO EQUIPO</a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="font-mono text-[10px] tracking-tight uppercase text-[#444444]">© 2024 EQUIPO DESARROLLADOR ESTUDIANTIL</div>
          <div className="w-12 h-px bg-surface-bright"></div>
          <div className="text-[8px] font-mono text-outline/30 uppercase text-center">SISTEMA_COMPILADO: V0.8.2 // PROYECTO UNIVERSITARIO SIN FINES DE LUCRO</div>
        </div>
      </footer>
    </div>
  );
}
