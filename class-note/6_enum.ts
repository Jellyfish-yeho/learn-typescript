enum Shoes{
    Nike = '나이키',
    Adidas = '아디다스',
}

const myShoes = Shoes.Nike;
console.log(myShoes); //'나이키'

function askQuestion(answer: string){
    if(answer === 'yes'){
        console.log('correct')
    }
    if(answer === 'no'){
        console.log('wrong')
    }
}
askQuestion('예스');
askQuestion('y');
askQuestion('Yes');

enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion2(answer: Answer){
   if (answer === Answer.Yes) {
       console.log("correct");
   }
   if (answer === Answer.No) {
       console.log("wrong");
   }
}
// askQuestion2("Yes"); //error
askQuestion2(Answer.Yes);