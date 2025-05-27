import type { Project } from "../types";

const projects: Project[] = [
  {
    id: 1,
    title: "Portafolio Personal",
    imageUrl: "https://example.com/portafolio.png",
    description: "Sitio web personal para mostrar mis proyectos y habilidades.",
    pageUrl: "https://miportafolio.com",
    codeUrl: "https://github.com/usuario/portafolio",
  },
  {
    id: 2,
    title: "Tienda Online",
    imageUrl: "https://example.com/tienda.png",
    description:
      "Aplicación de comercio electrónico con carrito de compras y pasarela de pago.",
    pageUrl: "https://mitienda.com",
    codeUrl: "https://github.com/usuario/tienda-online",
  },
  {
    id: 3,
    title: "Blog de Tecnología",
    imageUrl: "https://example.com/blog.png",
    description:
      "Blog para compartir artículos sobre programación y tecnología.",
    pageUrl: "https://blogtecnologia.com",
    codeUrl: "https://github.com/usuario/blog-tecnologia",
  },
];

export default projects;
