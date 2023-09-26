import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';

const OfertasEspeciales = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          height={687}
          width={773}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Zapatos En
          <span className="text-coral-red"> Ofertas</span>
          <span className="text-coral-red"> Especiales </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Nuestro calzado meticulosamente elaborado, que garantiza comodidad y
          estilo de primer nivel, está diseñado para mejorar su experiencia,
          brindándole calidad inigualable, innovación y un toque de elegancia.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Nuestra dedicación al detalle y la excelencia garantiza su
          satisfacción con nuestros productos y servicios. Estamos comprometidos
          a brindarle la mejor experiencia de compra y un servicio al cliente
          excepcional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Comprar" iconURL={arrowRight} />
          <Button
            label="Leer Mas"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default OfertasEspeciales;
