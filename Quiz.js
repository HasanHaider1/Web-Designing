//Shuffle function is based on Randomized array sort from https://www.w3schools.com/js/js_array_sort.asp
function shuffle(list) {
    console.log("Inside shuffle function: ");
    list.sort( function(a, b){return 0.5 - Math.random()});

    return list;

};
// The main function

$(function() {


    var questions = getAllQuestions();

	var container = $("#questionContainer");

	console.log("Inside jQuery document.ready(). Total Questions: " + questions.length);


    var Questions = []; //This is the questionarray
    $("#quizBuilder").click(function() {
        console.log("Inside #quizBuilder.click ...");
        //window.alert("Implement #quizBuilder.click to Generate and Print Quiz Questions. See source file for further details.");

        // TODO: Get a random number of JavaScript Questions

        var num_JS = Math.ceil(Math.random()*19);

        // TODO: Get a random number of jQuery Questions

        var num_Jq = Math.ceil(Math.random()*12);

        // TODO: Create question elements (DIV){There was no need to do it right now since it can be done later} for each JavaScript question and push that into an array, shuffling (randomizing) answer order

        var array = [];

        for (var i= 0; i<num_JS;i++){

            var r_num = Math.ceil( Math.random() * 19 );

            while( array.includes(r_num) == true ){ //Array.includes() method taken from https://www.w3schools.com/jsref/jsref_includes_array.asp


                r_num = Math.ceil(Math.random()*19);

            }

            array.push(r_num);

            var Array1 = [];

            for (var x=0;x<questions[r_num].options.length;x++){

                Array1.push(questions[r_num].options[x].option);

            }

            var answer = Array1[0];

            Questions.push([questions[r_num].question,shuffle(Array1),answer]);

        }

		// TODO: Create question elements (DIV) {There was no need to do it right now since it can be done later} for each jQuery question and push that into the same array, shuffling (randomizing) answer order

        array = [];

        for (var j= 0; j < num_Jq; j++ ){

            var Options = []; //Options array

            r_num = Math.ceil( Math.random() * 32 );

            while( array.includes(r_num) == true ){

                r_num = Math.ceil( Math.random() * 32);

            }

            array.push( r_num );

            for (var y = 0; y < questions[r_num].options.length; y++ ){

                Options.push( questions[r_num].options[y].option );

            }

            var ans = Options[0];

            Questions.push( [ questions[r_num].question, shuffle(Options),ans ] );

        }

        console.log(Questions);

		// TODO: Shuffle the array so that the order of questions is randomized

        shuffle(Questions);

		// Empty container element so that previous questions are cleared

        container.empty();

		// TODO: Add questions from question elements array created above to container so that questions with answer options are displayed

        for (var i=0;i<Questions.length;i++){

            var DIV = document.createElement( 'div' );

            var optionVal = "";

            for (var x=0; x<Questions[i][1].length; x++ ){

                optionVal = optionVal + (x+1) +")" + Questions[i][1][x] + "<br>"
            }

            DIV.innerHTML = "<strong>"+(i+1)+")"+ Questions[i][0]+"</strong>"+"<br>"+optionVal+"<br>";

            var Container = document.getElementById( 'questionContainer' );

            Container.appendChild( DIV , );
        };

		// Call print() method, to print the page

        window.print();

    });

	$("#answerBuilder").click(function() {
		console.log("Inside #answerBuilder.click ...")
		//window.alert("Implement #quizBuilder.click to Generate and Print Quiz Questions. See source file for further details.");

		// TODO: Create question elements (DIV) for each question in questions array, include just the answer option (first one)

        document.createElement( 'div' );
		// Empty container element so that previous questions are cleared

		container.empty();

		// TODO: Add questions from question elements array created above to container so that questions with answers are displayed
        for (var i=0;i<Questions.length;i++){

            DIV = document.createElement( 'div' );

            var optionVal = "";

            for (var x=0;x<Questions[i][1].length;x++){

                if (Questions[i][1][x] === Questions[i][2]){

                    optionVal = optionVal + "<font color='red' size = 4>"+(x+1) +")" +Questions[i][1][x]+"</font>" + "<br>"

                }

                else{

                    optionVal = optionVal + (x+1) +")" +Questions[i][1][x] + "<br>"

                }
            }

            DIV.innerHTML = "<strong>"+(i+1)+")"+Questions[i][0]+"</strong>"+"<br>"+optionVal+"<br>";

            var Container = document.getElementById( 'questionContainer' );

            Container.appendChild( DIV, );
        };
		// Call print() method, to print the page
		window.print();
	});
});