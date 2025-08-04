const optionA = document.querySelector('.optionA');
const optionB = document.querySelector('.optionB');
const optionC = document.querySelector('.optionC');
const optionD = document.querySelector('.optionD');

const optiona = document.querySelector('.js-optionA');
const optionb = document.querySelector('.js-optionB');
const optionc = document.querySelector('.js-optionC');
const optiond = document.querySelector('.js-optionD');
const ans_section = document.querySelector('.ans-section');
const quesions = document.querySelector('.questions');
const js_question = document.querySelector('.js-question');

const questions = [
    {
        question: "1 + 1 is what?",
        options: {
            A: "A) 2",
            B: "B) 3",
            C: "C) 4",
            D: "D) 5",
            correct() {
                return this.A;
            }
        },
    },
    {
        question: "Capital of France?",
        options: {
            A: "A) Berlin",
            B: "B) Paris",
            C: "C) Rome",
            D: "D) Madrid",
            correct() {
                return this.B;
            }
        },
    },
    {
        question: "What is 3 + 3?",
        options: {
            A: "A) 5",
            B: "B) 6",
            C: "C) 7",
            D: "D) 8",
            correct() {
                return this.B;
            }
        }
    },
    // {
    //     question: "What is a rat?",
    //     options: {
    //         A: "A) A dog",
    //         B: "B) animal",
    //         C: "C) rat",
    //         D: "D) brat",
    //         correct() {
    //             return this.C;
    //         }
    //     }
    // },
    // {
    //     question: "What is 5 * 5?",
    //     options: {
    //         A: "A) 25",
    //         B: "B) 6",
    //         C: "C) 7",
    //         D: "D) 8",
    //         correct() {
    //             return this.A;
    //         }
    //     }
    // },
    // {
    //     question: "What is 6 * 6?",
    //     options: {
    //         A: "A) 5",
    //         B: "B) 36",
    //         C: "C) 7",
    //         D: "D) 8",
    //         correct() {
    //             return this.B;
    //         }
    //     }
    // },
    // {
    //     question: "What is 25 / 5?",
    //     options: {
    //         A: "A) 5",
    //         B: "B) 6",
    //         C: "C) 7",
    //         D: "D) 8",
    //         correct() {
    //             return this.A;
    //         }
    //     }
    // },
];

let currentQuestionIndex = 0;

console.log(questions[0].question);
console.log(questions[0].options.correct());

function inText() {
    js_question.innerText = questions[currentQuestionIndex].question;
    optiona.innerText = questions[currentQuestionIndex].options.A;
    optionb.innerText = questions[currentQuestionIndex].options.B;
    optionc.innerText = questions[currentQuestionIndex].options.C;
    optiond.innerText = questions[currentQuestionIndex].options.D;
}
inText();

optionA.addEventListener('click', () => handleA(optiona, optionA));
optionB.addEventListener('click', () => handleA(optionb, optionB));
optionC.addEventListener('click', () => handleA(optionc, optionC));
optionD.addEventListener('click', () => handleA(optiond, optionD));

// Note: para is for optiona, div is for optionA. Big letter, small letter there is a difference.
function handleA(para, div) {
    if (para.innerText === questions[currentQuestionIndex].options.correct()){
        div.style.background = 'green';
    } else {
        div.style.background = 'red';
    }
    
    setTimeout(() => {
        if (!(para.innerText === questions[currentQuestionIndex].options.correct())) {
            alert('u rong fool');
        }
        div.style.background = '';
    }, 1000);

    recurse();
}

function recurse() {
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex > (questions.length - 1)) {
            currentQuestionIndex = 0;
        }

        inText();
    }, 2000);

}

console.log(questions.length);