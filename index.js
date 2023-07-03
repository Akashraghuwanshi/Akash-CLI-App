var readlineSync=require('readline-sync');
var username=readlineSync.question("May I know your name please?\n");
console.log("Hi "+username+" Play a Quiz ");
var score=0;
function play(question,answer)
{
    var useranswer=readlineSync.question(question);
   if(useranswer.toUpperCase()==answer.toUpperCase()){
    console.log("Right");
    score++;
    }
   else{
    console.log("Wrong");
    }

}
var q1={
    question:"\n1.What is my last name?\n",
    answer:"raghuwanshi"
}
var q2={
    question:"\n1.Which is my favorite  city?\n",
    answer:"bhopal"
}
var q3={
    question:"\n1.Which bike do I have?\n",
    answer:"pulsar"
}
var question=[q1,q2,q3];
for(var i=0;i<question.length;i++){
    play(question[i].question,question[i].answer)
    console.log("Your score is "+score);
}

 console.log("Your final score is "+score);
  console.log("Thanks for attempting the quiz ");

