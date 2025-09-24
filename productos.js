const productos = [
    {
        nombre: "Perfume Imitaciones",
        descripcion: "Una fragancia delicada con notas de jazmín y rosas, ideal para el día a día.",
        imagen: "imagenes_absoluto/perfumes_imitaciones.jpg",
        aromas: {
                 masculinos: [
                            "Invictus (Paco Rabanne)",
                            "Black Xs Afro (Paco Rabanne)",
                            "One Million (Paco Rabanne)",
                            "Pure XS (Paco Rabanne)",
                            "Creed aventus",
                            "E-Man (Thierry Mugler)",
                            "Boss (Hugo Boss)",
                            "Terre (Hermes)",
                            "One CK (unisex)",
                            "212 Sexy (Carolina Herrera)",
                            "Sauvage (Dior)",
                            "Spicebomb (Viktor&Rolf)"
                             ],
                 femeninos: [
                            "Good Girl (Carolina Herrera)",
                            "La Vie Est Belle (Lancôme)",
                            "Olympēa (Paco Rabanne)",
                            "Cher. (Maria Cher Nro. 19)",
                            "Scandal (Jean Paul Gaultier)",
                            "Black Opium (YSL)",
                            "One (ck) (unisex)",
                            "L’Ingerdit (Givenchy)",
                            "Pure Xs (Paco Rabanne)",
                            "Angel (Thierry Mugler)",
                            "NiNa (NiNa Ricci)"
                            ]
             },
    },
    {
        nombre: "Mohai",
        descripcion: "Un aroma profundo y misterioso con toques de sándalo y cedro, perfecto para la noche.",
        imagen: "imagenes_absoluto/mohai.jpg",
        aromas: ["No aplica"]
    },
    {
        nombre: "Difusores",
        descripcion: "Frescura y energía con esencias de limón y bergamota, ideal para cualquier ocasión.",
        imagen: "imagenes_absoluto/difusores.jpg",
        aromas: ["Limón, Naranja, Naranja pimienta, Vainicoco, Fresias, Corona (perfume de vainilla), Ralph (perf notas de flores blancas), Lavanda, Rosas con jazmín, Cedrón, Manzana con Canela, Sándalo clásico, Coniglio símil, Tilo, Durazno con Maracuyá, Verbena, Blue seduction simil, Nag champa, Te verde"]
    },
    {
        nombre: "Aceites Esenciales",
        descripcion: "Puros y naturales, perfectos para aromaterapia y bienestar.",
        imagen: "imagenes_absoluto/aceites_esenciales.jpg",
        aromas: ["Limón, Naranja, Naranja pimienta, Vainicoco, Fresias, Corona (perfume de vainilla), Ralph (perf notas de flores blancas), Lavanda, Rosas con jazmín natural, Rosas con madera Oud, Cedrón, Manzana con Canela, Sándalo clásico, Coniglio símil, Tilo, Durazno con Maracuyá, Verbena, Blue seduction simil, Nag champa, Te verde, Wanama símil, Kossiuko símil, Maria cher símil, Patchouli, Incienso, Ruda, Opium, Mirra, Chándal (sándalo cítrico), Flower símil, Hugo Boss símil, Revlon Simil"]
    },
    {
        nombre: "Bálsamos Naturales",
        descripcion: "Hidratación profunda con ingredientes orgánicos.",
        imagen: "imagenes_absoluto/balsamos_naturales.jpg",
        aromas: [
            "ARMONIA",
            "  - Incienso: Limpieza de Energía y Protección",
            "  - Sándalo: Atrae el Éxito la Abundancia y Prosperidad",
            "  - Mirra: Protector, muy usado en meditación y Sanación.",
            "  - Ruda: para la Envidia",
            "RELAX - PLENITUD",
            "  - Lavanda: combate Ansiedad, Stress e Insomnio.",
            "  - Geranio: Regenerador celular, equilibrio emocional.",
            "  - Tea Tree: Antiséptico, Analgésico y Desinflamatorio",
            "REVITAL",
            "  - Romero: compone afecciones musculares y dolores de articulaciones",
            "  - Menta: Combate el cansancio físico y mental.",
            "  - Limón: Favorece la Concentración y creatividad (recomendado para el estudio)",
            "  - Eucalipto: Gran Vigorizante, activa la circulación y Renueva Energías"
        ]
    },
    {
        nombre: "Porta Sahumerios de Cocina",
        descripcion: "Diseño único para tu espacio culinario.",
        imagen: "imagenes_absoluto/cocina_porta_sahumerios.jpg",
        aromas: ["No aplica"]
    },
    {
        nombre: "Difusores para Auto",
        descripcion: "Mantén tu coche fresco con tus aromas favoritos.",
        imagen: "imagenes_absoluto/difusotes_auto.jpg",
        aromas: ["Limón, Naranja, Naranja pimienta, Vainicoco, Fresias, Corona (perfume de vainilla), Ralph (perf notas de flores blancas), Lavanda, Rosas con jazmín, Cedrón, Manzana con Canela, Sándalo clásico, Coniglio símil, Tilo, Durazno con Maracuyá, Verbena, Blue seduction simil, Nag champa, Te verde"]
    },
    {
        nombre: "Perfumes Textiles",
        descripcion: "Refresca tus prendas y ambientes con un toque especial.",
        imagen: "imagenes_absoluto/perfumes_textiles_spray.jpg",
        aromas: ["Limón, Vainilla coco, Ariel (notas del jabón en polvo con suavizante vívere), Hugo Boss (perfume de hombre notas cítricas), Ralph (notas florales perfume de mujer), Kosiuko (perfume de la marca base ananá), Coniglio (perfume infantil), Nag Champa, Wanama (notas de melón fresco), Flores de Tilo, Maria Cher (nro 19 notas cítricas), blue seduction (perfume de antonio banderas), OUD ROSAS (madera con rosas) simil dolores barreiro, Ángel (perfume de la marca de Thierry Mugler), Flower símil perfume de kenzo"]
    },
    {
        nombre: "Porta Sahumerios",
        descripcion: "Diseños variados para tus momentos de relajación.",
        imagen: "imagenes_absoluto/porta_sahumerios.jpg",
        aromas: ["Sirven para ambos sahumerios"]
    },
    {
        nombre: "Réplica Salamandra Orelli",
        descripcion: "Una pieza de arte única para tu hogar.",
        imagen: "imagenes_absoluto/replica_salamandra_orelli.jpg",
        aromas: ["No aplica"]
    },
    {
        nombre: "Sahumador de Cerámica",
        descripcion: "Ideal para tus rituales de limpieza energética.",
        imagen: "imagenes_absoluto/sahumador_ceramica.jpg",
        aromas: ["No aplica"]
    },
    {
        nombre: "Sahumerios",
        descripcion: "Variedad de aromas para crear ambientes únicos.",
        imagen: "imagenes_absoluto/sahumerios.jpg",
        aromas: ["Wanama, Duraz/Maracuyá, Ralph F, Cedrón, Puma, B. Seduction, Coniglio, Angel, M. Cher., Oud Rosas, Vai Corona, Kossiuko, Citronela"]
    },
    {
        nombre: "Sahumerios Tibetanos",
        descripcion: "Tradición y misticismo en cada varilla.",
        imagen: "imagenes_absoluto/sahumeros_tibetanos.jpg",
        aromas: ["Wanama, Duraz/Maracuyá, Ralph F, Cedrón, Puma, B. Seduction, Coniglio, Angel, M. Cher., Oud Rosas, Vai Corona, Kossiuko, Citronela"]
    },
    {
        nombre: "Salamandra Artesanal",
        descripcion: "Hecha a mano con detalles que encantan.",
        imagen: "imagenes_absoluto/salamndra_artesanal.jpg",
        aromas: ["No aplica"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productCardsContainer = document.querySelector('.product-cards');
    const modal = document.getElementById('aromaModal');
    const modalTitle = document.getElementById('modalTitle');
    const aromaList = document.getElementById('aromaList');
    const closeModal = document.querySelector('.close-button');

    if (productCardsContainer) {
        productCardsContainer.innerHTML = ''; // Limpiar el contenido existente

        productos.forEach(producto => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <button class="view-aromas-button" data-product-name="${producto.nombre}" data-aromas='${JSON.stringify(producto.aromas)}'>Ver Aromas</button>
            `;
            productCardsContainer.appendChild(card);
        });

        // Event listener para los botones "Ver Aromas"
        productCardsContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('view-aromas-button')) {
                const productName = event.target.dataset.productName;
                const aromas = JSON.parse(event.target.dataset.aromas);

                modalTitle.textContent = `Aromas de ${productName}`;
                aromaList.innerHTML = ''; // Limpiar lista anterior

                if (aromas && typeof aromas === 'object' && !Array.isArray(aromas)) {
                    // Si aromas es un objeto con masculinos y femeninos
                    if (aromas.masculinos && aromas.masculinos.length > 0) {
                        const h4Masculinos = document.createElement('h4');
                        h4Masculinos.textContent = "Aromas Masculinos:";
                        aromaList.appendChild(h4Masculinos);
                        aromas.masculinos.forEach(aroma => {
                            const li = document.createElement('li');
                            li.textContent = aroma;
                            aromaList.appendChild(li);
                        });
                    }
                    if (aromas.femeninos && aromas.femeninos.length > 0) {
                        const h4Femeninos = document.createElement('h4');
                        h4Femeninos.textContent = "Aromas Femeninos:";
                        aromaList.appendChild(h4Femeninos);
                        aromas.femeninos.forEach(aroma => {
                            const li = document.createElement('li');
                            li.textContent = aroma;
                            aromaList.appendChild(li);
                        });
                    }
                    if ((!aromas.masculinos || aromas.masculinos.length === 0) && (!aromas.femeninos || aromas.femeninos.length === 0)) {
                        const li = document.createElement('li');
                        li.textContent = "No hay aromas específicos para este producto.";
                        aromaList.appendChild(li);
                    }
                } else if (aromas && Array.isArray(aromas) && aromas.length > 0 && aromas[0] !== "No aplica") {
                    // Si aromas es un array simple
                    aromas.forEach(aroma => {
                        const li = document.createElement('li');
                        li.textContent = aroma;
                        aromaList.appendChild(li);
                    });
                } else {
                    const li = document.createElement('li');
                    li.textContent = "No hay aromas específicos para este producto.";
                    aromaList.appendChild(li);
                }
                modal.style.display = 'block';
            }
        });
    }

    // Event listener para cerrar el modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Cerrar el modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});