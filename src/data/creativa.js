import mainImage from "assets/images/creativa-main.png";

const creativa = {
    number: "02",
    id: "creativa",
    featured: true,
    skills: ["wordpress", "html", "css"],
    mainImage,
    websiteUrl: "https://creativadesign.co/",
    githubRepo: null,
    next: "migue-bruno",
    previous: "gabi-portfolio",
    en: {
        title: "Creativa Design Co.",
        about: ["Digital designer studio website.", "Fully responsive website with more than 5 internal pages."],
        technologies: ["Wordpress", "HTML5", "CSS3"]
    },
    es: {
        title: "Creativa Design Co.",
        about: [
            "Página web del estudio de diseñadora gráfica digital",
            "Totalmente adaptable a múltiples tamaños de pantallas y más de 5 páginas internas."
        ],
        technologies: ["Wordpress", "HTML5", "CSS3"]
    }
};

export default creativa;
