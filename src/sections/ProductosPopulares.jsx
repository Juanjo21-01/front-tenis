import ProductosPopularesCard from '../components/ProductosPopularesCard';
import { Productos } from '../constants';

const ProductosPopulares = () => {
  return (
    <section className="max-container max-sm:mt-12" id="Productos">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Nuestros <span className="text-coral-red">Productos</span> Populares
        </h2>
        <p className="lg:max-w-lg mt-2 text-slate-gray">
          Experimente la calidad y el estilo con nuestras selecciones
          solicitadas. Descubre un mundo de confort, diseño y valor.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {Productos.map((producto) => (
          <ProductosPopularesCard
            key={producto}
            imgURL={producto.imgURL}
            name={producto.name}
            price={producto.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductosPopulares;
