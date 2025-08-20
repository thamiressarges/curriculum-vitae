function mostrarPagina(pagina){
    const secao = document.getElementById('conteudo')
    let conteudo = '';

    switch(pagina){
        case 'inicio':
            conteudo = `

                <h2>Inicio</h2>

                <p>Bem-vindo ao meu currículo profissional. Sou uma desenvolvedora web full stack com experiência em projetos de desenvolvimento web.</p>
                <p>Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente.</p>
            `;
            break;
        case 'experiencias':
            conteudo = `
                <h2>Experiência Profissional</h2>
                <h3>Desenvolvedora Web Full Stack</h3>
                <p><strong>Empresa XYZ</strong> - 2018 até o presente</p>
                <ul>
                    <li>Desenvolvimento e manutenção de sistemas web utilizando tecnologias como HTML, CSS, JavaScript, Node.js e MongoDB.</li>
                    <li>Colaboração em equipe para o desenvolvimento de novos recursos e funcionalidades.</li>
                    <li>Participação em reuniões de planejamento e revisão de código.</li>
                </ul>
            `;
            break;

        case 'educacao':
            conteudo = `
                <h2>Educação</h2>
                <h3>Bacharelado em Ciência da Computação</h3>
                <p><strong>Universidade ABC</strong> - Conclusão em 2017</p>
                <ul>
                    <li>Principais disciplinas: Programação, Algoritmos e Estrutura de Dados, Banco de Dados, Redes de Computadores.</li>
                    <li>Participação em projetos de pesquisa e extensão relacionados à área de desenvolvimento de software.</li>
                </ul>
            `;
            break;
        
        case 'habilidades':
            conteudo = `
                <h2>Habilidades</h2>
                <ul>
                    <li>HTML5, CSS3, JavaScript</li>
                    <li>Node.js, Express.js</li>
                    <li>React, Vue.js</li>
                    <li>MongoDB, MySQL</li>
                    <li>Git, GitHub</li>
                    <li>Metodologias Ágeis (Scrum, Kanban)</li>
                </ul>
            `;
            break;

        default:
            conteudo = `<h2>Página não encontrada</h2>`
            break;
        
    }
    secao.innerHTML = conteudo;
}

mostrarPagina('inicio')