import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';

const ComentariosClientes = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Qué Dicen Nuestros
        <span className="text-coral-red"> Clientes?</span>
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Escuche historias genuinas de nuestros clientes satisfechos sobre sus
        experiencias excepcionales con nosotros.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default ComentariosClientes;
