//Darkmode
const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeBtn.innerHTML = "Light Mode";
}

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
		
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeBtn.innerHTML = "Light Mode";

        } else {
			
            localStorage.setItem("darkMode", "disabled");
            darkModeBtn.innerHTML = "Dark Mode";
        }
    });

    //hover event
    darkModeBtn.addEventListener("mouseover", function () {
        darkModeBtn.style.backgroundColor = "black";
        darkModeBtn.style.color = "white";
        darkModeBtn.style.transform = "scale(1.05)";
    });

    darkModeBtn.addEventListener("mouseout", function () {
        darkModeBtn.style.backgroundColor = "white";
        darkModeBtn.style.color = "black";
        darkModeBtn.style.transform = "scale(1)";
    });
}

//Package button switching Tab interface
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const package1 = document.getElementById("package1");
const package2 = document.getElementById("package2");
const package3 = document.getElementById("package3");

const bookList = document.querySelector(".BOOK UL");

if(bookList){

    const slider = document.createElement("div");
    slider.classList.add("slider");
    bookList.appendChild(slider);

    function moveSlider(btn){
        slider.style.width = btn.offsetWidth + "px";
        slider.style.height = btn.offsetHeight + "px";
        slider.style.left = btn.offsetLeft + "px";
        slider.style.top = btn.offsetTop + "px";
    }

    function showPackage(img, btn){

        package1.style.display = "none";
        package2.style.display = "none";
        package3.style.display = "none";

        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");

        img.style.display = "block";
        btn.classList.add("active");

        moveSlider(btn);
    }

    if(btn1){
        btn1.onclick = function(){
            showPackage(package1, btn1);
        }

    //Show first button as default
        showPackage(package1, btn1);
    }

    if(btn2){
        btn2.onclick = function(){
            showPackage(package2, btn2);
        }
    }

    if(btn3){
		btn3.onclick = function(){
            showPackage(package3, btn3);
        }
    }

}

//Form Validation
const form = document.getElementById("bookingform");

if(form){

    form.addEventListener("submit", function(event){

        event.preventDefault();

        let fullname = document.getElementById("fullname").value;
        let nationality = document.getElementById("nationality").value;
        let passport = document.getElementById("passport").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let travelers = document.getElementById("travelers").value;
        let date = document.getElementById("date").value;
        let message = document.getElementById("message");

        if(fullname == "" || nationality == "" || passport == "" ||
           phone == "" || email == "" || travelers == "" || date == ""){
            message.innerHTML = "Please fill in all required fields.";
            message.style.color = "red";
            return;
        }

        else if(!email.includes("@")){
            message.innerHTML = "Please enter a valid email address.";
            message.style.color = "red";
            return;
        }

        else if(phone.length < 8){
            message.innerHTML = "Please enter a valid phone number.";
            message.style.color = "red";
            return;
        }

        else if(travelers <= 0){
            message.innerHTML = "Number of travelers must be at least 1.";
            message.style.color = "red";
            return;
        }

//modal popout
        else{
		const modal = document.getElementById("bookingModal");

		if(modal){
        modal.style.display = "flex";
			}
		}
    });
}

//instant response message
const feedbackForm = document.getElementById("feedbackForm");

if(feedbackForm){
    feedbackForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name = document.getElementById("feedbackName").value;
        const email = document.getElementById("feedbackEmail").value;
        const message = document.getElementById("feedbackMessage").value;

        const feedbackResponse =
        document.getElementById("feedbackResponse");


        if(name == "" || email == "" || message == ""){
            feedbackResponse.innerHTML =
            "Please fill in all fields.";
            feedbackResponse.style.color = "red";
        }

        else{
            feedbackResponse.innerHTML =
            "Thank you for your feedback! We appreciate your message.";
            feedbackResponse.style.color = "green";
            feedbackForm.reset();
        }
    });
}