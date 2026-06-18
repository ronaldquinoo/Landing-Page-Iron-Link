export default function Carousel() {
  return (
    <section className="py-12 bg-surface-container border-y-4 border-surface-container-high overflow-hidden">
      <div className="relative flex w-full py-4 group">
        <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex gap-4">
              {/* Aquí puedes cambiar las imágenes del carrusel. 
                  Cada bloque representa una imagen en la galería. */}
              
              {/* IMAGEN 1: Vista general del simulador */}
              <div className="w-[85vw] md:w-[45vw] lg:w-[30vw] h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-[4px_4px_16px_#bae6fd,-4px_-4px_16px_#ffffff] border-4 border-surface flex-shrink-0">
                <img loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7hd-HTV4Xr9JECAm9FcbSVOiAEkMj9OMOSfCuDkHoyTmFUvMn_Zbvjl6llnRBDZQOHy6QpWIXuKxxPWOhpYlLAzh5CH9up6rflcJwnGQyWd-XiP3d0PZjXexg-5_V3tcyCJIWitoq2OLcfr6hpTC7vOchNHJM5NYQ2RO3jfEuwi4kKRjgaxIOdWZSRIShV98kJhjIh3-BZE-LYF6UIj0nQ8GZhItnR3DThPT_S8h2BwJsIsRA-5RZF3PoQrw0vDenQw0e88Etz1E" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Simulador view 1" />
              </div>

              {/* IMAGEN 2: Vista de maquinaria en operación */}
              <div className="w-[85vw] md:w-[45vw] lg:w-[30vw] h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-[4px_4px_16px_#bae6fd,-4px_-4px_16px_#ffffff] border-4 border-surface flex-shrink-0">
                <img loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCafWzq8vtbJNZ3s7FauINKNmA2bC4SKds0KSVjKXpsVzeG3ZObRsFabgIeuMPqlqXSHWOfENuSEiGHRzvmx5xUCljoyfZO6rsQVj9HWQfODbu1pdCwcnmdoAi2dHqaHZ_eCm4P88gRP7SmyPeg042eSK6LEyXtC6V2RjZIo2S2ba7wkPlf5n3NkatdIQCaCbOaU9POKmOFySlP3CQG7fjyBwiLC22qbTnDpxr1vihAFF9xEpW_s9mbny_CQvXxJlcWgP0ymma8egI" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Simulador view 2" />
              </div>

              {/* IMAGEN 3: Cabina interior u otra perspectiva */}
              <div className="w-[85vw] md:w-[45vw] lg:w-[30vw] h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-[4px_4px_16px_#bae6fd,-4px_-4px_16px_#ffffff] border-4 border-surface flex-shrink-0">
                <img loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvXzXjizOYkxOOgRHc7QYFYsHgcgaFyICAuqdDG6aqCqqxJU78KWXyLoPH1k1CGvU5iKonVOKdBTSROLAnOJgoWLLzjbXW3RNskwYmgSkkhQ30IHQqezrpP4QiHl3wYkWLCG2AMQQe7qNlwt10oXotJdnOizGWpmcHSUZTZj8tYXqauCanKJ4v0KrRhuYyiNWqCygPntuDxdOs6hsx0lp-t-oYAHqN5LAbnJqWFynfZGJ_K0R1VxUqrlZr8we-bQFJ3HnsmvpTC_Q" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Simulador view 3" />
              </div>

              {/* IMAGEN 4: Detalles o entorno */}
              <div className="w-[85vw] md:w-[45vw] lg:w-[30vw] h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-[4px_4px_16px_#bae6fd,-4px_-4px_16px_#ffffff] border-4 border-surface flex-shrink-0">
                <img loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYQ9P2UMgKWACdmklQOOYqvjoCr6nY2hQEwJCrJXnlXQ3gN2uGrsKFh0JsPcdkrXB6S3kHA3eccNBopqXcvypJ3nljPm_14iBuPtfxc3_x_H-1qzFgwJl-kGiejuKx46WuxormSJEFgS9O8-aGOjCwJrIrh4cBT3i0gfjdFRbiHuj83XPIxsuQnBtRSQS05DAwFqaLcP0bpf6VKNWMhSuhaRvaGS9kYQLjanYOloTkSJLCPYi7E9mTjktd_2TSVxqpcD2Q3J9eWFs" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Simulador view 4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
