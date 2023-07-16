const Enum_Projects = {
    "Conversor-de-Medidas":  "Conversor-de-Medidas",
    "HackatonStartSe": "HackatonStartSe",
    "IgniteLab-02": "IgniteLab-02",
    "Memory-Game": "Memory-Game",
    "PianoWebEsp8266": "PianoWebEsp8266"
};
 
const Enum_DataProjects = {
    "Conversor-de-Medidas": {
        srcImg: 'img/_conversorDeMedidas.png',
        alt: 'Imagem do projeto de conversor de medidas',
        title: 'Conversor de unidades de medidas',
        description: 'Projeto feito com REACTJS e css para estiização, tem o intuito de ajudar com as temidas conversôes de unidades, temidas ou esquecidas haha.',
        link: 'https://conversor-de-medidas-matheus-pontes.vercel.app/'
    },
    "HackatonStartSe": {
        srcImg: 'img/_hacktonStarteSe.png',
        alt: 'Hackaton StartSe, banner principal sobre educação financeira',
        title: 'HacktonStartSe/Educação financeira',
        description: 'Projeto feito com HTML/CSS/JS, onde participei junto a outros 4 integrantes em um grupo de um hackaton pré-curso startSe.',
        link: 'https://matheus-pontes.github.io/HackatonStartSe/'
    },
    "IgniteLab-02": {
        srcImg: 'https://user-images.githubusercontent.com/62751571/177222299-688ee8df-1c97-475f-a390-c170b31ffdca.png',
        alt: 'Tela de inscrição do event plataforme',
        title: 'Event plataform - Ignite Lab 02',
        description: 'Projeto realizado em uma semana de evento da empresa Rocketseat chamado IgniteLab 02, com umas tecnologias ReactJS + TailwindCss para mais detalhes acesse meu repositório abaixo. Fiz algumas adaptoções em relação ao projeto original como, responsividade e tela de login.',
        link: ''
    },
    "Memory-Game": {
        srcImg: 'img/_memoryGameCard.png',
        alt: 'projeto, jogo da memoria, tela inicial de login',
        title: 'Jogo da memória',
        description: 'Este é um jogo feito com HTML/CSS/JS, com uma tela de login e depois de logar voçê vai para tela do jogo e se diverti.',
        link: 'https://memory-game10.vercel.app/'
    },
    "PianoWebEsp8266": {
        srcImg: 'img/_pianoWEB.png',
        alt: 'Tela onde tem um piano que se comunica com um microcontrolador',
        title: 'PianoWEB - ESP8266',
        description: 'Projeto realizado com HTML/CSS/JS - NodejS e C++(para microcontroladores). Onde, é simulado um piano a partir do clique em teclas especificas no teclado do computador e saindo o som no BUZZER ligado a um ESP8266(semelhante a um arduino, só que sendo possível conectar a internet). ',
        link: 'https://github.com/Matheus-Pontes/PianoWebEsp8266'
    },
}

async function getDataGithubAPI() {
    const data = await fetch('https://api.github.com/users/Matheus-Pontes/repos').then(response => response.json())
    const projects = data.filter(item => item.name == Enum_Projects[item.name]);

    buildProjectCard(projects);
}

function buildProjectCard(projects) {
    const $projetosCards = document.querySelector('.projetosCards');

    projects.forEach(project => {
        $projetosCards.innerHTML += 
        `<div class="card">
            <figure class="figura-card">
                <img src="${Enum_DataProjects[project.name].srcImg}" alt="${Enum_DataProjects[project.name].alt}">
            </figure>
            <div class="titulo-card">
                <h3>${Enum_DataProjects[project.name].title}</h3>
            </div>
            <div class="descricao">
                <p>${Enum_DataProjects[project.name].description}</p> 
            </div>
            <div class="buttons">
                ${Enum_DataProjects[project.name].link ? `<a href="${Enum_DataProjects[project.name].link}" target="_blank" class="acesso-projeto">Acessar projeto</a>` : ''}
                
                <a href="${project.url}" target="_blank" class="acesso-repositorio">Repositório</a>
            </div>
        </div>`
        ;
    });


    controlCarousel();
}

getDataGithubAPI();

function controlCarousel() {
    const projetosCarousel = document.querySelector(".projetosCards");
    const cardCarouselWidth = projetosCarousel.querySelector(".card").clientWidth;
    
    const actionControlCarousel = {
        next() {
            projetosCarousel.scrollLeft += cardCarouselWidth;
        },
        prev() {
            projetosCarousel.scrollLeft -= cardCarouselWidth;
        }
    };

    document.querySelector(".slide-projetos").addEventListener("click", function(e) {
        if(!e.target.matches('[data-action]')) 
            return;

        const action = e.target.dataset.action;
        actionControlCarousel[action]();
    });
}
