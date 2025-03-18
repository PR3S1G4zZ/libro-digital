document.addEventListener('DOMContentLoaded', () => {
    const memories = [
        {
            title: "Primer Encuentro Digital",
            date: "2024",
            description: "Ayudándote con errores a través de AnyDesk",
            color: "rose"
        },
        {
            title: "La Antioqueñidad",
            date: "2024",
            description: "Un día lleno de dulzura y belleza",
            color: "teal"
        },
        {
            title: "Momentos ICFES",
            date: "2024",
            description: "Aquellos almuerzos llenos de palabras no dichas",
            color: "blue"
        }
    ];

    function createMemoryCard(memory) {
        const memoryElement = document.createElement('div');
        memoryElement.className = 'memory-card hover:-translate-y-2 transition-transform duration-300 bg-white rounded-xl p-6 shadow-lg border border-gray-100';
        memoryElement.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="w-16 h-16 rounded-full bg-${memory.color}-100 flex items-center justify-center">
                    <span class="text-${memory.color}-600 font-semibold">${memory.date}</span>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-gray-800">${memory.title}</h3>
                    <p class="text-gray-600">${memory.description}</p>
                </div>
            </div>
        `;
        return memoryElement;
    }

    // Función para animar la aparición de elementos
    function initializeAnimations() {
        const observerOptions = {
            root: null,
            threshold: 0.1,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('opacity-0');
                }
            });
        }, observerOptions);

        // Observar elementos con animación
        document.querySelectorAll('.animate-fade-in').forEach(element => {
            element.classList.add('opacity-0', 'transition-opacity', 'duration-700');
            observer.observe(element);
        });
    }

    // Función para inicializar la carta
    function initializeLetter() {
        const letterContent = document.querySelector('.letter-content');
        if (letterContent) {
            letterContent.querySelectorAll('p').forEach((p, index) => {
                p.style.animationDelay = `${index * 0.2}s`;
                p.classList.add('animate-fade-in');
            });
        }
    }

    // Función para manejar el scroll suave dentro de la carta
    function initializeSmoothScroll() {
        const letterContent = document.querySelector('.letter-content');
        if (letterContent) {
            letterContent.style.height = '100%';
            letterContent.style.overflowY = 'auto';
            letterContent.style.scrollBehavior = 'smooth';
        }
    }

    // Definir el array de razones al inicio
    const reasons = [
        { text: "Tu sonrisa ilumina mis días más oscuros.", icon: "✨" },
        { text: "La forma en que tus ojos brillan al hablar de tus sueños.", icon: "👀" },
        { text: "Tu pasión por aprender y mejorar cada día.", icon: "📚" },
        { text: "La manera en que me apoyas en mis proyectos.", icon: "💪" },
        { text: "Tu dulzura al tratar a los demás.", icon: "🌸" },
        { text: "La calidez de tu voz que me reconforta siempre.", icon: "🎵" },
        { text: "Tu capacidad para ver lo mejor en cada situación.", icon: "🌟" },
        { text: "La sinceridad con la que compartes tus sentimientos.", icon: "💝" },
        { text: "Tu risa contagiosa que alegra cualquier ambiente.", icon: "😊" },
        { text: "La forma en que me haces sentir comprendido y valorado.", icon: "🤗" },
        { text: "Tu fuerza para superar cualquier obstáculo.", icon: "💪" },
        { text: "La paciencia que demuestras en momentos difíciles.", icon: "🙏" },
        { text: "Tu creatividad que inspira mis ideas.", icon: "🎨" },
        { text: "El detalle en cada gesto de cariño que tienes.", icon: "💖" },
        { text: "La pasión con la que vives cada experiencia.", icon: "🔥" },
        { text: "Tu honestidad que me llena de confianza.", icon: "🤝" },
        { text: "La sensibilidad con la que percibes mis emociones.", icon: "💕" },
        { text: "Tu dedicación en cuidar a los que amas.", icon: "❤️" },
        { text: "La tranquilidad que irradias y me envuelve.", icon: "🌅" },
        { text: "Tu capacidad para encontrar belleza en lo cotidiano.", icon: "🌺" },
        { text: "La forma en que transformas lo simple en especial.", icon: "✨" },
        { text: "Tu generosidad al compartir lo que tienes.", icon: "🎁" },
        { text: "La inspiración que me brindas para ser mejor cada día.", icon: "⭐" },
        { text: "Tu habilidad para hacerme reír en cualquier situación.", icon: "😄" },
        { text: "La ternura de tus abrazos que me hacen sentir seguro.", icon: "🤗" },
        { text: "Tu mirada llena de complicidad y amor.", icon: "👀" },
        { text: "La manera en que te preocupas por mi bienestar.", icon: "💝" },
        { text: "Tu valentía para afrontar tus miedos.", icon: "🦁" },
        { text: "La dedicación que pones en cada pequeño detalle.", icon: "🎯" },
        { text: "Tu energía positiva que contagia a los demás.", icon: "⚡" },
        { text: "La forma en que celebras mis logros sin envidia.", icon: "🎉" },
        { text: "Tu capacidad para ver el lado bueno de la vida.", icon: "🌈" },
        { text: "La fortaleza que demuestras en cada desafío.", icon: "💪" },
        { text: "Tu autenticidad que te hace única.", icon: "💎" },
        { text: "La pasión con la que amas a los demás.", icon: "❤️" },
        { text: "Tu inteligencia y curiosidad que me enseñan siempre algo nuevo.", icon: "🧠" },
        { text: "La manera en que disfrutas cada instante de la vida.", icon: "🌟" },
        { text: "Tu optimismo, que ilumina hasta el día más gris.", icon: "☀️" },
        { text: "La forma en que te preocupas por los detalles de mi día.", icon: "📝" },
        { text: "Tu humildad a pesar de tus grandes logros.", icon: "🙏" },
        { text: "La entrega con la que amas sin reservas.", icon: "💗" },
        { text: "Tu habilidad para transformar el dolor en aprendizaje.", icon: "🦋" },
        { text: "La calma que transmites en medio del caos.", icon: "🕊️" },
        { text: "Tu forma de soñar y hacer de esos sueños una realidad.", icon: "✨" },
        { text: "La dedicación que pones en cada relación que construyes.", icon: "🤝" },
        { text: "Tu capacidad para perdonar y seguir adelante.", icon: "🕊️" },
        { text: "La forma en que me haces sentir importante y especial.", icon: "👑" },
        { text: "Tu bondad, que se refleja en cada palabra y acción.", icon: "🌟" },
        { text: "La manera en que luchas por lo que crees.", icon: "⚔️" },
        { text: "Tu sonrisa sincera, que derrite cualquier tristeza.", icon: "😊" },
        { text: "La pasión con la que abrazas cada nuevo reto.", icon: "🎯" },
        { text: "Tu apoyo incondicional en los momentos de incertidumbre.", icon: "🤝" },
        { text: "La manera en que encuentras soluciones en medio de problemas.", icon: "💡" },
        { text: "Tu fidelidad, que nutre nuestra relación día a día.", icon: "💘" },
        { text: "La sensibilidad que demuestras hacia la naturaleza y el mundo.", icon: "🌍" },
        { text: "Tu creatividad, que transforma lo cotidiano en extraordinario.", icon: "🎨" },
        { text: "La forma en que me das fuerzas cuando flaqueo.", icon: "💪" },
        { text: "Tu espíritu aventurero que me invita a explorar el mundo.", icon: "🌎" },
        { text: "La ternura con la que cuidas los detalles de la vida.", icon: "🌸" },
        { text: "Tu risa, que es la melodía que alegra mi corazón.", icon: "🎵" },
        { text: "La forma en que transformas cualquier espacio en un hogar.", icon: "🏠" },
        { text: "Tu capacidad para ver lo invisible y darle valor.", icon: "👁️" },
        { text: "La pasión con la que defiendes tus convicciones.", icon: "🛡️" },
        { text: "Tu empatía, que te permite sentir lo que yo siento.", icon: "💕" },
        { text: "La forma en que me animas a seguir mis sueños.", icon: "🌠" },
        { text: "Tu constancia en perseguir lo que amas.", icon: "🎯" },
        { text: "La dulzura de tus palabras, que siempre me reconfortan.", icon: "🍯" },
        { text: "Tu habilidad para hacerme ver la belleza en los pequeños detalles.", icon: "🔍" },
        { text: "La manera en que conviertes cada día en una nueva oportunidad.", icon: "🌅" },
        { text: "Tu dedicación para aprender de cada experiencia.", icon: "📚" },
        { text: "La luz de tu mirada, que ilumina mi camino.", icon: "✨" },
        { text: "Tu sentido del humor, que hace todo más llevadero.", icon: "😄" },
        { text: "La forma en que te preocupas por los demás.", icon: "💝" },
        { text: "Tu capacidad para hacerme sentir en casa, sin importar dónde esté.", icon: "🏡" },
        { text: "La pasión con la que trabajas por tus metas.", icon: "🎯" },
        { text: "Tu honestidad, que me enseña a ser auténtico.", icon: "💎" },
        { text: "La forma en que abrazas la vida con todo tu ser.", icon: "🌟" },
        { text: "Tu habilidad para encontrar soluciones creativas a los problemas.", icon: "💡" },
        { text: "La ternura de tu alma, que se refleja en cada gesto.", icon: "🌸" },
        { text: "Tu capacidad para transformar un día común en una aventura.", icon: "🌈" },
        { text: "La forma en que me haces soñar y volar alto.", icon: "🦋" },
        { text: "Tu apoyo, que es mi ancla en tiempos de tormenta.", icon: "⚓" },
        { text: "La pasión con la que compartes tus logros y alegrías.", icon: "🎉" },
        { text: "Tu mirada llena de esperanza y fe en el futuro.", icon: "🌠" },
        { text: "La manera en que me impulsas a superar mis límites.", icon: "🚀" },
        { text: "Tu generosidad, que no conoce barreras.", icon: "🎁" },
        { text: "La forma en que respetas y valoras cada detalle de la vida.", icon: "🌺" },
        { text: "Tu capacidad para transformar las lágrimas en sonrisas.", icon: "😊" },
        { text: "La manera en que me enseñas a ver la vida con nuevos ojos.", icon: "👀" },
        { text: "Tu compromiso con quienes amas, sin condiciones.", icon: "❤️" },
        { text: "La forma en que tu presencia llena de paz mi corazón.", icon: "🕊️" },
        { text: "Tu valentía para ser tú misma sin miedo al juicio.", icon: "👑" },
        { text: "La forma en que abrazas cada cambio y aprendizaje.", icon: "🦋" },
        { text: "Tu capacidad para convertir las dificultades en oportunidades.", icon: "✨" },
        { text: "La forma en que me haces sentir que todo es posible.", icon: "🌟" },
        { text: "Tu pasión por la vida, que me contagia de ilusión.", icon: "✨" },
        { text: "La forma en que haces de cada momento algo memorable.", icon: "📸" },
        { text: "Tu disposición para dar sin esperar nada a cambio.", icon: "🎁" },
        { text: "La manera en que construyes sueños en cada palabra.", icon: "💫" },
        { text: "Tu amor incondicional, que me enseña el verdadero significado de la felicidad.", icon: "💑" }
    ];

    function createReasonCard(reason, index) {
        return `
            <div class="reason-card bg-white rounded-lg p-4 shadow-sm hover:shadow-md border-l-4 border-rose-400">
                <div class="flex items-start gap-3">
                    <span class="text-xl text-rose-600 font-serif min-w-[2rem] font-bold">${(index + 1).toString().padStart(2, '0')}</span>
                    <p class="text-gray-700 flex-1">${reason.text}</p>
                    <span class="text-2xl">${reason.icon}</span>
                </div>
            </div>
        `;
    }

    function initializeReasons() {
        console.log('Inicializando razones...');
        const leftContainer = document.querySelector('.reasons-left .grid');
        const rightContainer = document.querySelector('.reasons-right .grid');

        if (!leftContainer || !rightContainer) {
            console.error('No se encontraron los contenedores para las razones');
            return;
        }

        console.log('Contenedores encontrados, agregando razones...');

        // Limpiar los contenedores
        leftContainer.innerHTML = '';
        rightContainer.innerHTML = '';

        // Agregar las razones
        reasons.forEach((reason, index) => {
            const card = createReasonCard(reason, index);
            if (index < 50) {
                leftContainer.insertAdjacentHTML('beforeend', card);
            } else {
                rightContainer.insertAdjacentHTML('beforeend', card);
            }
        });

        console.log('Razones agregadas correctamente');
    }

    // Definir el array de imágenes con sus fechas y descripciones
    const images = [
        {
            src: "img/IMG_20241118_142114.jpg",
            date: "18 de Noviembre, 2024",
            description: "Momentos en el colegio"
        },
        {
            src: "img/IMG_20241118_142348.jpg",
            date: "18 de Noviembre, 2024",
            description: "Selfies juntos"
        },
        {
            src: "img/IMG_20241118_150444.jpg",
            date: "18 de Noviembre, 2024",
            description: "Recuerdos escolares"
        },
        {
            src: "img/IMG_20241121_152539.jpg",
            date: "21 de Noviembre, 2024",
            description: "Día especial"
        },
        {
            src: "img/IMG_20241128_094807.jpg",
            date: "28 de Noviembre, 2024",
            description: "Graduación"
        },
        {
            src: "img/IMG_20241223_191428.jpg",
            date: "23 de Diciembre, 2024",
            description: "Noche de luces"
        },
        {
            src: "img/IMG_20241223_200244.jpg",
            date: "23 de Diciembre, 2024",
            description: "Momentos mágicos"
        },
        {
            src: "img/IMG_20241223_200251.jpg",
            date: "23 de Diciembre, 2024",
            description: "Bajo las luces"
        },
        {
            src: "img/IMG_20241223_203837.jpg",
            date: "23 de Diciembre, 2024",
            description: "Entre fuentes de colores"
        }
    ];

    function initializePhotos() {
        const photosContainer = document.querySelector('#photos-page .memories-grid');
        if (!photosContainer) {
            console.error('No se encontró el contenedor de fotos');
            return;
        }

        photosContainer.innerHTML = '';

        images.forEach((image, index) => {
            const photoCard = `
                <div class="memory-photo-card">
                    <img src="${image.src}" 
                         alt="Recuerdo ${index + 1}" 
                         class="memory-image">
                    <div class="photo-date">
                        ${image.date}
                    </div>
                </div>
            `;
            photosContainer.insertAdjacentHTML('beforeend', photoCard);
        });
    }

    const songs = [
        {
            title: "Nombre de la canción",
            artist: "Artista",
            memory: "Un recuerdo especial relacionado con esta canción..."
        }
        // Puedes agregar más canciones aquí
    ];

    function initialize() {
        initializeAnimations();
        initializeLetter();
        initializeSmoothScroll();
        initializeReasons();
        initializePhotos();

        // Agregar memorias al timeline
        const timelineContainer = document.querySelector('.timeline');
        if (timelineContainer) {
            memories.forEach(memory => {
                timelineContainer.appendChild(createMemoryCard(memory));
            });
        }
    }

    // Llamar a initialize
    initialize();

    // Función para mostrar razón aleatoria
    function showRandomReason() {
        const randomIndex = Math.floor(Math.random() * reasons.length);
        const randomReason = reasons[randomIndex];
        
        const toast = document.createElement('div');
        toast.className = `fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg 
                         transform translate-y-full opacity-0 transition-all duration-500`;
        toast.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="text-2xl">${randomReason.icon}</span>
                <p class="text-gray-700">${randomReason.text}</p>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Mostrar toast
        setTimeout(() => {
            toast.classList.remove('translate-y-full', 'opacity-0');
        }, 100);
        
        // Ocultar toast
        setTimeout(() => {
            toast.classList.add('translate-y-full', 'opacity-0');
            setTimeout(() => toast.remove(), 500);
        }, 5000);
    }

    // Mostrar una razón aleatoria cada cierto tiempo
    setInterval(showRandomReason, 30000); // Cada 30 segundos

    function initializeLetterPage() {
        const letterContent = document.querySelector('.letter-content');
        const paragraphs = letterContent.querySelectorAll('p');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        paragraphs.forEach(p => observer.observe(p));
    }

    initializeLetterPage();
}); 