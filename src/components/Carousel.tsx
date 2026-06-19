import image1 from '../images/image_1.jpeg';
import image2 from '../images/image_2.jpeg';
import image3 from '../images/image_3.jpeg';
import image4 from '../images/image_4.jpeg';

const images = [image1, image2, image3, image4];

export default function Carousel() {
  return (
    <section className="py-12 bg-surface-container border-y-4 border-surface-container-high overflow-hidden">
      <div className="relative flex w-full py-4 group">
        <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex gap-4">
              {images.map((imgSrc, idx) => (
                <div key={`${arrayIndex}-${idx}`} className="w-[85vw] md:w-[45vw] lg:w-[30vw] h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-[4px_4px_16px_#bae6fd,-4px_-4px_16px_#ffffff] border-4 border-surface flex-shrink-0">
                  <img loading="lazy" src={imgSrc} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt={`Simulador view ${idx + 1}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
