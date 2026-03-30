import { useState } from 'react';
import { content, Language } from '../content';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<Language>('es');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F0] font-sans selection:bg-[#7CFF2B] selection:text-[#050505]">
      <Header lang={lang} setLang={setLang} t={t} />
      
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold mb-8 text-[#7CFF2B]">Política de Privacidad</h1>
        
        <div className="space-y-6 text-[#D9D9D2] font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Información al Usuario</h2>
            <p>
              <strong>Daddy Panda Studio</strong>, como Responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril, (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de protección de datos y garantía de los derechos digitales (LOPDGDD), trataremos sus datos tal y como reflejamos en la presente Política de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Identidad del Responsable</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Titular:</strong> [TU NOMBRE COMPLETO O NOMBRE DE EMPRESA]</li>
              <li><strong>NIF/CIF:</strong> [TU NIF O CIF]</li>
              <li><strong>Domicilio:</strong> [TU DIRECCIÓN COMPLETA, EJ: Calle Falsa 123, Lloret de Mar, España]</li>
              <li><strong>Correo electrónico:</strong> info@daddypandastudio.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Finalidad del Tratamiento</h2>
            <p>
              En Daddy Panda Studio tratamos la información que nos facilitan las personas interesadas con el fin de:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Atender y resolver las consultas o dudas enviadas a través de correo electrónico o WhatsApp.</li>
              <li>Gestionar la prestación de los servicios de consultoría botánica y asesoramiento en autocultivo.</li>
              <li>Analizar el tráfico y uso de la web mediante herramientas de analítica (Google Analytics) de forma anónima para mejorar la experiencia de usuario.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Legitimación del Tratamiento</h2>
            <p>
              La base legal para el tratamiento de sus datos es el <strong>consentimiento</strong> del interesado, que se otorga al contactar con nosotros mediante correo electrónico, WhatsApp o al navegar por nuestro sitio web (aceptando nuestra política de cookies/analítica).
            </p>
            <p className="mt-2">
              En caso de contratación de servicios, la base legal será la <strong>ejecución de un contrato</strong> o precontrato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Conservación de los Datos</h2>
            <p>
              Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o no se solicite su supresión por el interesado, y durante el plazo por el cual pudieran derivarse responsabilidades legales por los servicios prestados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Destinatarios de los Datos</h2>
            <p>
              Los datos no se cederán a terceros, salvo obligación legal. Sin embargo, para poder prestar los servicios estrictamente necesarios para el desarrollo de la actividad, compartimos datos con los siguientes prestadores bajo sus correspondientes condiciones de privacidad:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Hosting:</strong> Hostinger International Ltd.</li>
              <li><strong>Analítica Web:</strong> Google Analytics (Google LLC).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Derechos de los Usuarios</h2>
            <p>
              Cualquier persona tiene derecho a obtener confirmación sobre si en Daddy Panda Studio estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Solicitar el acceso a los datos personales relativos al interesado.</li>
              <li>Solicitar su rectificación o supresión.</li>
              <li>Solicitar la limitación de su tratamiento.</li>
              <li>Oponerse al tratamiento.</li>
              <li>Solicitar la portabilidad de los datos.</li>
            </ul>
            <p className="mt-4">
              Podrá ejercer estos derechos enviando un correo electrónico a <strong>info@daddypandastudio.com</strong>, adjuntando una copia de su DNI o documento equivalente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Cambios en la Política de Privacidad</h2>
            <p>
              Daddy Panda Studio se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria.
            </p>
          </section>
        </div>
      </main>

      <Footer t={t} lang={lang} setLang={setLang} />
    </div>
  );
}
