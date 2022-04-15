/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
function checked(event){    
    const ch = event.currentTarget;  
    const check = ch.querySelector('.checkbox');
    opac(ch.dataset.questionId);
    check.src = 'images/checked.png';
    ch.classList.remove('opacita');
    ch.classList.add('coloresfondo');

    if(ch.dataset.questionId === 'one'){
        q1 = ch.dataset.choiceId;
    }
    if(ch.dataset.questionId === 'two'){
        q2 = ch.dataset.choiceId;
    }
    if(ch.dataset.questionId === 'three'){
        q3 = ch.dataset.choiceId;
        endQuiz();
    }
    
}

function opac(questionId){
    const allBoxes = document.querySelectorAll('.choice-grid div');
    for(const box of allBoxes){
        if(box.dataset.questionId === questionId){
            box.classList.add('opacita');
            const check = box.querySelector('.checkbox');
            check.src = 'images/unchecked.png';
            box.classList.remove('coloresfondo');
        }
    }

}

function endQuiz(){
    let p1 = 0;
    let p2 = 0;
    
    if(q1 === q2 || q1 === q3){
        p1++;
    }
    if(q2 === q3 ){
        p2++;
    }
    if(p2 > p1){
        for(let i in RESULTS_MAP){
            if(i === q3){
                const title = document.createElement('h1');
                const contents = document.createElement('p');
                title.textContent = RESULTS_MAP[i].title;
                contents.textContent = RESULTS_MAP[i].contents;
                const container = document.querySelector('#result');
                container.appendChild(title);
                container.appendChild(contents);
                const button = document.querySelector('#button');
                button.addEventListener('click', onButton);
                button.classList.remove('hidden');
            }
        }     
    }else{
        for(let i in RESULTS_MAP){
            if(i === q1){
                const title = document.createElement('h1');
                const contents = document.createElement('p');
                title.textContent = RESULTS_MAP[i].title;
                contents.textContent = RESULTS_MAP[i].contents;
                const container = document.querySelector('#result');
                container.appendChild(title);
                container.appendChild(contents);
                const button = document.querySelector('#button');
                button.addEventListener('click', onButton);
                button.classList.remove('hidden');
            }
        }
    }

    const img_check = document.querySelectorAll('.choice-grid div');  
    for(const imgs of img_check){
        imgs.removeEventListener('click', checked);
    }
}

function onButton(){
    const allBoxes = document.querySelectorAll('.choice-grid div');

    for(const box of allBoxes){
        box.classList.remove('opacita');
        const check = box.querySelector('.checkbox');
        check.src = 'images/unchecked.png';
        box.classList.remove('coloresfondo');
            
        box.addEventListener('click', checked);
        const res = document.querySelector('#result');
        res.innerHTML = '';
        const butt = document.querySelector('#button');
        butt.classList.add('hidden');
    } 
}

let q1 = null;
let q2 = null;
let q3 = null;

const img_check = document.querySelectorAll('.choice-grid div');    
for(const imgs of img_check){
    imgs.addEventListener('click', checked);
}

