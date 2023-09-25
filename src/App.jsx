import {
  Calidad,
  ComentariosClientes,
  Footer,
  Hero,
  OfertasEspeciales,
  ProductosPopulares,
  Servicios,
  Suscripciones,
} from './sections';
import Navegacion from './components/Navegacion';

function App() {
  return (
    <main className="relative">
      <Navegacion />

      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero/>
      </section>

      <section className="padding ">
        <ProductosPopulares />
      </section>

      <section className="padding ">
        <Calidad />
      </section>

      <section className="padding ">
        <Servicios />
      </section>

      <section className="padding ">
        <OfertasEspeciales />
      </section>

      <section className="bg-pale-blue padding ">
        <ComentariosClientes />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full ">
        <Suscripciones />
      </section>

      <section className="bg-black padding-x padding-t pb-8 ">
        <Footer />
      </section>
    </main>
  );
}

export default App;
