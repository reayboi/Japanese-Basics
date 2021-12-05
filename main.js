function check(){
	
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question1.value;
	var question3 = document.quiz.question1.value;
	var correct = 0;
	
	if (question1 == "foreign words") {
		corect++;
}
	if (question2 == "Japanese words") {
		correct++;
}
	if(question3 == "Some Japanese words") {
	correct++;
}	
	document.getElementById("after submit").style.visibility = "visibility";
	document.getElementById("number correct").innerHTML = "You got " + correct + " correct.";
}}