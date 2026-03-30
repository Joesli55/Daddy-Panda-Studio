import { useState } from 'react';
import { content, Language } from '../content';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LegalNotice() {
  const [lang, setLang] = useState<Language>('es');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F0] font-sans selection:bg-[#7CFF2B] selection:text-[#050505]">
      <Header lang={lang} setLang={setLang} t={t} />
      
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold mb-8 text-[#7CFF2B]">Aviso Legal</h1>
        
        <div className="space-y-6 text-[#D9D9D2] font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Datos Identificativos</h2>
            <p>
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), a continuación se reflejan los siguientes datos:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Titular:</strong> [TU NOMBRE COMPLETO O NOMBRE DE EMPRESA]</li>
              <li><strong>NIF/CIF:</strong> [TU NIF O CIF]</li>
              <li><strong>Domicilio:</strong> [TU DIRECCIÓN COMPLETA, EJ: Calle Falsa 123, Lloret de Mar, España]</li>
              <li><strong>Correo electrónico:</strong> info@daddypandastudio.com</li>
              <li><strong>Teléfono:</strong> +34 633 655 887</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Usuarios</h2>
            <p>
              El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Uso del Portal</h2>
            <p>
              daddypandastudio.com proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Daddy Panda Studio o a sus licenciantes a los que el USUARIO pueda tener acceso.
            </p>
            <p className="mt-2">
              El USUARIO asume la responsabilidad del uso del portal. El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que Daddy Panda Studio ofrece a través de su portal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Propiedad Intelectual e Industrial</h2>
            <p>
              Daddy Panda Studio por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).
            </p>
            <p className="mt-2">
              Todos los derechos reservados. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Daddy Panda Studio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Exclusión de Garantías y Responsabilidad</h2>
            <p>
              Daddy Panda Studio no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Modificaciones</h2>
            <p>
              Daddy Panda Studio se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Legislación Aplicable y Jurisdicción</h2>
            <p>
              La relación entre Daddy Panda Studio y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad correspondiente al domicilio del titular.
            </p>
          </section>
        </div>
      </main>

      <Footer t={t} lang={lang} setLang={setLang} />
    </div>
  );
}
