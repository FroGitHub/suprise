var times = 0;
const texts = [
    {txt: "Мурк", answer: "Мявк"},
    {txt: "З днем закоханииииих!", answer: "Моє коханнячко:3"},
    {txt: "Нашо той день Святого Валентина", answer: "Коли з тобою кожен день - день закоханих!"},
    {txt: "Місяць твого дня народження описує тебе", answer: "ти 10 з 10 :В"},
    {txt: "Хочу тебе потіскати", answer: "за твої наймиліші щічки:3"},

    {txt: "Хочу зробити тобі кусь", answer: "за твої щічкі... за попу тозє іхіхі"},
    {txt: "Твої губки манять мене цьомати їх", answer: "A деякі полизяти їх іххіхі"},
    {txt: "Хоцууууу тебе розцьомати", answer: "Цьомікіііііі цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом-цьом :******************************"},
    {txt: "Моє улюблене хобі", answer: "проводити з тобою час"},
    {txt: "Сумую за тобою", answer: "мені не вистачає тебе поляд :("},

    {txt: "Хочу відчути твої дотики знову, хоч на секунду", answer: "а якщо можна на 10 :3"},
    {txt: "Хочу хтивить з тобою 10 секунд", answer: "ракетою, а інші 4 години ночі пальчиками і язичком :Р"},
    {txt: "Ти найкраща в світі", answer: "Описати я не можу простими словами, миле личко, гарнюня киця, найяскравіша зівонька із золотими луцками, талановита малювака і з хтивінькою, проведений з тобою час це скарб моїх спогадів, кожен твій дотик це драгоцінний діамант зі скарбу"},
    {txt: "Кожен ранок, день, вечір і ніч", answer: "хочу провести з тобою"},  
    {txt: "Рибонька моя", answer: "віртуально обіймаю тебе, цьомаю, глажу... не можу дочекатися коли зможу знову це робити відчуваючи твої дотики"},  
    
    {txt: "Скільки всього ще хочу написати", answer: "але уже і так багато хвхв"},  
    {txt: "Чекаю нашу наступну зустріч", answer: "щоб потім не відпускати один одного:>"},  
    {txt: "Дуже-дуже-дуже-дуже-дуже-дуже-дуже-дуже-дуже-дуже-дуже-дуже", answer: "сильно тебе кохаю!!!:*"}
];

function changeColor(element) {
    const txt = element.querySelector('.txt');
    const answer = element.querySelector('.answer');

    if (element.style.backgroundColor === 'rgb(110, 149, 255)') {  // rgb(110, 149, 255) — це #6E95FF
        element.style.transition = 'none';
        element.style.backgroundColor = '';  // Змінюємо на початковий колір
        element.style.width = '450px';
        element.style.height = '300px';
        txt.style.color = '';
        answer.style.opacity = '';
        txt.style.transition = 'none';
        answer.style.transition = 'none';
        txt.style.fontSize = '20px'; 
        answer.style.fontSize = '18px';  

        times += 1;
    } else {
        txt.style.transition = '';
        answer.style.transition = '';
        element.style.transition = '';
        element.style.backgroundColor = '#6E95FF'; 
        element.style.width = '400px';
        element.style.height = '250px';

        txt.style.color = '#475886';
        setTimeout(() => {
            answer.style.opacity = 1;
        }, 2000);
        txt.style.fontSize = '17px';  
        answer.style.fontSize = '15px';  
    }

    // Оновлюємо текст
    if (times >= 1 && times <= 18) {
        const {txt, answer} = texts[times - 1];
        const txtElement = element.querySelector('.txt');
        const answerElement = element.querySelector('.answer');
        txtElement.innerText = txt;
        answerElement.innerText = answer;
    }

}
