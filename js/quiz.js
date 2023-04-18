
// function getResults{
//     largest = 0;
//     winner_stat =
//     userStats[winner] = userStats.array.forEach(function compare(stat){
//         if (stat > largest){
//             largest = stat
//             winner = userStats[]
//         }
//         return winner
//     });
//     return winner_stat
// }

$(document).ready(function(){
    console.log("ready")
    $(".quizContainer").hide()
    console.log("hide quiz")
    $("#quizStart").click(function(){
        console.log("open quiz")
        index = 1
        quizActive = true;	//True until last question is answered
        console.log(quizActive)
        if (quizActive == false){
            console.log(quizActive)
            $(".slide").removeClass('current')
            $(".quizContainer").hide()
            console.log("quiz closed")
            }
        console.log("quiz active")
        $(".quizContainer").show()
        $("#quizStart").hide()
        slide = ("#slide" + index)
        console.log(slide)
        $(".error").removeClass("display")
        choiceMade = false
        $(slide).addClass('current')
        $("#1 button").click(function(){
            console.log("question1 selection made")
            choiceMade = true
            console.log(choiceMade)
                var num = this.classList[0]
            console.log(num)
            userStats =	[
                0,	//She Who Became the Sun
                0, 	//A Snake Falls to Earth
                0, 	//Recitatif
                0, 	//Klara and the Sun
                0,  //The Collected Schizophrenias
                0, 	//Light From Uncommon Stars
                0, 	//You Made a Fool of Death with your Beauty
                0,  //Never Look Back
                0,  //Babel
                0,  //Braiding Sweetgrass
            ];
            console.log(userStats)
            console.log(index)
            if (num == "choice1"){
                userStats[0] = 2;
                userStats[1] = 2;
                userStats[2] = 2;
                userStats[3] = 2;
                userStats[4] = 0;
                userStats[5] = 2;
                userStats[6] = 2;
                userStats[7] = 2;
                userStats[8] = 2;
                userStats[9] = 0;
                console.log(userStats)
            }
            else if (num == "choice2"){
                userStats[0] = 0;
                userStats[1] = 0;
                userStats[2] = 0;
                userStats[3] = 0;
                userStats[4] = 2;
                userStats[5] = 0;
                userStats[6] = 0;
                userStats[7] = 0;
                userStats[8] = 0;
                userStats[9] = 2;
                console.log(userStats)
            }
            else if (num == "choice3"){
                userStats[0] = 2;
                userStats[1] = 2;
                userStats[2] = 2;
                userStats[3] = 2;
                userStats[4] = 1;
                userStats[5] = 2;
                userStats[6] = 2;
                userStats[7] = 2;
                userStats[8] = 2;
                userStats[9] = 1;
                console.log(userStats)
            }
            else if (num == "choice4"){
                userStats[0] = 1;
                userStats[1] = 1;
                userStats[2] = 1;
                userStats[3] = 1;
                userStats[4] = 2;
                userStats[5] = 1;
                userStats[6] = 1;
                userStats[7] = 1;
                userStats[8] = 1;
                userStats[9] = 2;
                console.log(userStats)
            }
            else if (num == "choice5"){
                userStats[0] = 1;
                userStats[1] = 1;
                userStats[2] = 1;
                userStats[3] = 1;
                userStats[4] = 1;
                userStats[5] = 1;
                userStats[6] = 1;
                userStats[7] = 1;
                userStats[8] = 1;
                userStats[9] = 1;
                console.log(userStats)
            }
        });
        $(".continue").click(function next(){
            console.log(choiceMade)
            if (choiceMade == false){
                console.log("nothing selected")
                $(".error").addClass("display")
                }
            else if (index == 6){
                console.log("quiz finished")
                $(slide).removeClass('current')
                largest = Math.max(...userStats)
                result = userStats.indexOf(largest)
                console.log()
                resultid = "#result" + String(result)
                final = $(resultid)[0]
                $(final).addClass("display")
                $("h1").html("Your recommendation:")
                console.log(final)
                $(".questions").hide()
                $(".restart").addClass("display")
                console.log("quiz closed")
                // $(".restart").click(function(){
                //     $(".quizClose").click()
                // })
                }
            else{
                console.log("next_question")
                console.log(index)
                $(slide).toggleClass('current')
                index += 1
                console.log(index)
                slide = ("#slide" + index)
                console.log(slide)
                console.log(userStats)
                $(".error").removeClass("display")
                console.log(choiceMade)
                $(slide).toggleClass('current')
                choiceMade = false
                console.log(choiceMade)}
        });

        $("#2 button").click(function(){
            choiceMade = true;
            console.log("question2 selection made")
            var num = this.classList[0]
            console.log(num)
            console.log(index)
            if (num == "choice1"){
                userStats[0] += 0;
                userStats[1] += 1;
                userStats[2] += 0;
                userStats[3] += 0;
                userStats[4] += 0;
                userStats[5] += 0;
                userStats[6] += 0;
                userStats[7] += 1;
                userStats[8] += 0;
                userStats[9] += 0;
                console.log(userStats)
            }
            if (num == "choice2"){
                userStats[0] += 1;
                userStats[1] += 0;
                userStats[2] += 1;
                userStats[3] += 1;
                userStats[4] += 1;
                userStats[5] += 1;
                userStats[6] += 1;
                userStats[7] += 0;
                userStats[8] += 1;
                userStats[9] += 1;
                console.log(userStats)
            }
            if (num == "choice3"){
                userStats[0] += 1;
                userStats[1] += 2;
                userStats[2] += 1;
                userStats[3] += 1;
                userStats[4] += 1;
                userStats[5] += 1;
                userStats[6] += 1;
                userStats[7] += 2;
                userStats[8] += 1;
                userStats[9] += 1;
                console.log(userStats)
            }
            if (num == "choice4"){
                userStats[0] += 2;
                userStats[1] += 1;
                userStats[2] += 2;
                userStats[3] += 2;
                userStats[4] += 2;
                userStats[5] += 2;
                userStats[6] += 2;
                userStats[7] += 1;
                userStats[8] += 2;
                userStats[9] += 2;
                console.log(userStats)
            }
            if (num == "choice5"){
                userStats[0] += 1;
                userStats[1] += 1;
                userStats[2] += 1;
                userStats[3] += 1;
                userStats[4] += 1;
                userStats[5] += 1;
                userStats[6] += 1;
                userStats[7] += 1;
                userStats[8] += 1;
                userStats[9] += 1;
                console.log(userStats)
            }
        });
            $("#3 button").click(function(){
                choiceMade = true
                console.log("question3 selection made")
                var num = this.classList[0]
                console.log(num)
                console.log(userStats)
                console.log(index)
                if (num == 'choice1'){
                    userStats[0] += 0;
                    userStats[1] += 0;
                    userStats[2] += 2;
                    userStats[3] += 0;
                    userStats[4] += 2;
                    userStats[5] += 0;
                    userStats[6] += 2;
                    userStats[7] += 0;
                    userStats[8] += 0;
                    userStats[9] += 2;
                    console.log(userStats)
                }
                if (num == "choice2"){
                    userStats[0] += 2;
                    userStats[1] += 2;
                    userStats[2] += 0;
                    userStats[3] += 2;
                    userStats[4] += 0;
                    userStats[5] += 2;
                    userStats[6] += 0;
                    userStats[7] += 2;
                    userStats[8] += 2;
                    userStats[9] += 0;
                    console.log(userStats)
                }
                if (num == "choice3"){
                    userStats[0] += 2;
                    userStats[1] += 1;
                    userStats[2] += 1;
                    userStats[3] += 2;
                    userStats[4] += 1;
                    userStats[5] += 2;
                    userStats[6] += 1;
                    userStats[7] += 1;
                    userStats[8] += 2;
                    userStats[9] += 1;
                    console.log(userStats)
                }
                if (num == "choice4"){
                    userStats[0] += 0;
                    userStats[1] += 0;
                    userStats[2] += 2;
                    userStats[3] += 0;
                    userStats[4] += 2;
                    userStats[5] += 0;
                    userStats[6] += 2;
                    userStats[7] += 0;
                    userStats[8] += 1;
                    userStats[9] += 2;
                    console.log(userStats)
                }
                if (num == "choice5"){
                    userStats[0] += 1;
                    userStats[1] += 1;
                    userStats[2] += 1;
                    userStats[3] += 1;
                    userStats[4] += 1;
                    userStats[5] += 1;
                    userStats[6] += 1;
                    userStats[7] += 1;
                    userStats[8] += 1;
                    userStats[9] += 1;
                    console.log(userStats)
                }
            });
                $("#4 button").click(function(){
                    choiceMade = true
                    console.log("question4 selection made")
                    var num = this.classList[0]
                    console.log(num)
                    console.log(userStats)
                    console.log(index)
                    if (num == 'choice1'){
                        userStats[0] += 2;
                        console.log(userStats)
                    }
                    if (num == "choice2"){
                        userStats[2] += 2;
                        console.log(userStats)
                    }
                    if (num == "choice3"){
                        userStats[3] += 2;
                        console.log(userStats)
                    }
                
                    if (num == "choice4"){
                        userStats[4] += 2;
                        console.log(userStats)
                    }
                    if (num == "choice5"){
                        userStats[5] += 2;
                        console.log(userStats)
                    }
            });
                    $("#5 button").click(function(){
                        choiceMade = true
                        console.log("question5 selection made")
                        var num = this.classList[0]
                        console.log(num)
                        console.log(userStats)
                        console.log(index)
                        if (num == 'choice1'){
                            userStats[6] += 2;
                            console.log(userStats)
                        }
                        if (num == "choice2"){
                            userStats[7] += 2;
                            console.log(userStats)
                        }
                        if (num == "choice3"){
                            userStats[9] += 2;
                            console.log(userStats)
                        }
                        if (num == "choice4"){
                            userStats[8] += 2;
                            console.log(userStats)
                        }
                        if (num == "choice5"){
                            userStats[1] += 2;
                            console.log(userStats)
                        }
                    })
                        $("#6 button").click(function(){
                            choiceMade = true
                            console.log("question6 selection made")
                            var num = this.classList[0]
                            console.log(num)
                            console.log(userStats)
                            console.log(index)
                            if (num == 'choice1'){
                                userStats[6] += 2;
                                userStats[7] += 2;
                                console.log(userStats)
                            }
                            if (num == "choice2"){
                                userStats[0] += 2;
                                userStats[5] += 2;
                                userStats[8] += 1;
                                console.log(userStats)
                            }
                            if (num == "choice3"){
                                userStats[0] += 2;
                                userStats[1] += 1;
                                userStats[2] += 1;
                                userStats[3] += 2;
                                userStats[4] += 1;
                                userStats[5] += 2;
                                userStats[6] += 1;
                                userStats[7] += 1;
                                userStats[8] += 2;
                                userStats[9] += 1;
                                console.log(userStats)
                            }
                            if (num == "choice4"){
                                userStats[0] += 1;
                                userStats[3] += 2;
                                userStats[4] += 2;
                                userStats[5] += 1;
                                userStats[6] += 1;
                                userStats[7] += 1;
                                console.log(userStats)
                            }
                            if (num == "choice5"){
                                userStats[0] += 1;
                                userStats[3] += 1;
                                userStats[9] += 2;
                                console.log(userStats)
                            }
        });
        $(".quizClose").click(function(){
            $(".slide").removeClass('current')
            $(".quizContainer").hide()
            $(".results").removeClass("display")
            $("h1").html("Take the quiz to get a book recommendation!")
            console.log("quiz closed")
            $("#quizStart").show()
        });
    });
});
