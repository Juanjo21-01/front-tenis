import { arrowRight } from '../assets/icons';
import Button from '../components/Button';
import { Estadisticas, tenis } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';

const Hero = () => {
  //variable de estado
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="Inicio"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Nuestra Colección de Verano
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Lo Más Nuevo
          </span>
          <br />
          Tenis
          <span className="text-coral-red inline-block mt-3 ms-2">Nike</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Descubra las elegantes llegadas de Nike, la comodidad de calidad y la
          innovación para su vida activa.
        </p>

        <Button label="Comprar" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {Estadisticas.map((estadistica) => (
            <div key={estadistica.label}>
              <p className="text-4xl font-bold font-palanquin">
                {estadistica.value}
              </p>
              <p className="text-slate-gray leading-7 font-montserrat">
                {estadistica.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {tenis.map((item) => (
            <div key={item.thumbnail}>
              <ShoeCard
                imgURL={item}
                changeBigShoeImage={(tenis) => setBigShoeImage(tenis)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
