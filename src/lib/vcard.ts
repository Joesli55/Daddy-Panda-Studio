export const generateVCard = () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:González Moreno;Rubén;;;
FN:Daddy Panda Studio (Rubén González Moreno)
ORG:Daddy Panda Studio
TITLE:Asesor experto en autocultivo asistido y consultoría botánica privada
TEL;TYPE=WORK,VOICE:+34633655887
EMAIL;TYPE=WORK:info@daddypandastudio.com
URL:https://daddypandastudio.com
NOTE:Instagram: @daddypanda.r | Telegram: daddypanda.r
ADR;TYPE=WORK:;;;Lloret de Mar;;;Spain
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Daddy_Panda_Studio.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
