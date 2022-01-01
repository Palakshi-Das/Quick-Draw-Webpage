var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yD9sruouY/model.json" , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{ 
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_count").innerHTML = "Detected Dog = "+dog+        " Detected Cat = "+cat+     " Detected Cow ="+cow+       " Detected Roar = "+lion;
        document.getElementById("result_count").style.color = "rgb(" + random_number_r +","+ random_number_g +","+ random_number_b +")";

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r +","+ random_number_g +","+ random_number_b +")";

        img = document.getElementById("animal_images");
        if(results[0].lable == "Barking"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog + 1;
        }

        else if(results[0].label == "Meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1;
        }

        else if(results[0].label == "Roar"){
            img.src = "https://i.pinimg.com/originals/5e/0f/02/5e0f02142a9a47095ebc1f16266d9459.gif";
            lion = lion + 1;
        }

        else if(results[0].label == "Mooing"){
            img.src = "https://img1.picmix.com/output/stamp/normal/9/0/9/6/1766909_6ffa7.gif";
            cow = cow + 1;
        }

        else{
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }
    }
}