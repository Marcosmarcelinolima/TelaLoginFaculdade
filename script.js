const pessoa = {
    nome: 'Paulo',
    idade: 33,
    cidade: 'Criciúma'
}

function getMsg(){
    const hora = new Date().getHours();

    if (hora < 12) {
        return 'Bom dia';
    } 
    
    if (hora < 18) {
        return 'Boa tarde';
    } 
    
    return 'Boa aula';
}

const greeting = document.getElementById('greeting');
greeting.textContent = `${getMsg()}, ${pessoa.nome}`;


/* Banners indicadores (Fácil) */
const indicadores = {
    tempo: '18h 45m',
    tarefas: 5,
    chats: 1
}

const cards = document.querySelectorAll('.card__group .card__title');

// ✅ Correto
for (let i=0; i<cards.length; i++){
    cards[i].textContent = indicadores[cards[i].id];
}


/* Aulas conluídas (Médio) */
const aulas = {
    front: 16,
    design: 82
}

const progress = document.querySelectorAll('.card__progress div');

progress[0].textContent = aulas.front + '%';
progress[0].style.width = aulas.front + '%';

progress[1].textContent = aulas.design + '%';
progress[1].style.width = aulas.design + '%';

/* botão exibir um alert('Alo!?') */
const buttons = document.querySelectorAll('.card__button');

buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        alert('Alô!? Botão ' + event.target.textContent);
    });
});


const card = document.querySelector('.card');
const novoCurso = card.cloneNode(true);

const badge = novoCurso.querySelector('.card__badge');
const title = novoCurso.querySelector('.card__title');
const description = novoCurso.querySelector('.card__description');
const progressBar = novoCurso.querySelector('.card__progress div');

badge.textContent = 'Em breve';
title.textContent = 'Back-end';
description.textContent = 'Aula 1 - Conceitos de desenvolvimento Back-end e Git + Gtihub';
progressBar.style.width = '0%';
progressBar.textContent = '0%';

document.querySelector('.dashboard__container').appendChild(novoCurso);

/* adicionar mais um curso */

/*         <div class="card">
            <div class="card__body">
                <span class="card__badge">Em progresso</span>
                <h3 class="card__title">
                    Front-end
                </h3>
                <p class="card__description">Aula 2 - Conceitos de desenvolvimento Front-end e Git + Gtihub</p>
                <div class="card__progress">
                    <div style="width: 65%;">65%</div>
                </div>
            </div>
           
            <button class="card__button">Retomar estudo</button>
        </div>*/




/* adicionar mais um card */
const modelo = document.querySelector('.card__group_cursos');
const novoCard = modelo.cloneNode(true);

const titulo = novoCard.querySelector('.card__badge');
const texto = novoCard.querySelector('.card__title');

titulo.textContent = 'Em progresso';
titulo.id = 'projetos';
texto.textContent = '0%';


document.querySelector('.card__group_cursos').appendChild(novoCard);

