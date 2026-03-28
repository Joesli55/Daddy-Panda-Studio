import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Download, User, Mail, Instagram, CheckCircle } from 'lucide-react';

export default function QRPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Guardar en Firebase
      await addDoc(collection(db, 'contact_downloads'), {
        name: formData.name,
        email: formData.email,
        instagram: formData.instagram || '',
        downloadedAt: serverTimestamp()
      });

      setIsSuccess(true);

      // Descargar el archivo vCard
      // Asumimos que el archivo se llama "contacto.vcf" y está en la carpeta public
      const link = document.createElement('a');
      link.href = '/contacto.vcf';
      link.download = 'DaddyPanda.vcf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      console.error('Error saving contact info:', err);
      setError('Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F0] font-sans flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#7CFF2B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="text-[#7CFF2B] w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Descargar Contacto</h1>
          <p className="text-white/60">
            Déjanos tus datos para descargar la tarjeta de contacto de Daddy Panda.
          </p>
        </div>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-500 w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">¡Gracias!</h2>
            <p className="text-white/60 mb-6">
              La descarga de la tarjeta de contacto ha comenzado.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            >
              Volver al inicio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-1">Nombre *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-white/40" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-black/50 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#7CFF2B] focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1">Email *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-white/40" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-black/50 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#7CFF2B] focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-white/60 mb-1">Instagram (Opcional)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Instagram className="h-5 w-5 text-white/40" />
                </div>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-black/50 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#7CFF2B] focus:border-transparent transition-all"
                  placeholder="@tu_usuario"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 mt-4 bg-[#7CFF2B] hover:bg-[#6AE020] text-black font-bold rounded-xl transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Procesando...' : 'Descargar Contacto'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
