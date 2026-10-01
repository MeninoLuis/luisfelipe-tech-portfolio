export const site = {
  name: "Luis Felipe Tech",
  url: "https://luisfelipe-tech.vercel.app",
  email: "contato.luisfelipetech@gmail.com",
  instagram: "https://www.instagram.com/luis.felipe.dev/",
  phone: "5519991070441",
};
export function whatsappUrl(
  message = "Olá, Luis! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.",
) {
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
}
