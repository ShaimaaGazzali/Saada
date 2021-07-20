
$ = jQuery.noConflict();
$(document).ready(function(){
   // console.log('this is run on page load');
   fillNeighborhoods();
   fillLevels();
   fillSchools();

});

function fillNeighborhoods() {
    let neighborhoods = [{ name: "الصفا", value: 1 }, { name: "المروة", value: 2 }, { name: "الربوة", value: 3 }
,{ name: "أخرى:", value: 4 }];
    var select = document.getElementById("selectNeighborhood");
    for (var i = 0; i < neighborhoods.length; i++) {
        var opt = neighborhoods[i];
        var el = document.createElement("option");
        el.textContent = opt.name;
        el.value = opt.value;
        select.appendChild(el);
    }
}

function fillLevels() {
    let levels = [{ name: "جامعة", value: 1 }, { name: "مدرسة", value: 2 }];
    var select = document.getElementById("selectLevel");
    for (var i = 0; i < levels.length; i++) {
        var opt = levels[i];
        var el = document.createElement("option");
        el.textContent = opt.name;
        el.value = opt.value;
        select.appendChild(el);
    }
}

function fillSchools() {
    let schools =  [{ name: "school1", value: 1 }, { name: "school3", value: 3 }];
    var select = document.getElementById("selectSchool");
    for (var i = 0; i < schools.length; i++) {
        var opt = schools[i];
        var el = document.createElement("option");
        el.textContent = opt.name;
        el.value = opt.value;
        select.appendChild(el);
    }
}

function setSchools(event) {
    let schools = [{ name: "school1", value: 1 }, { name: "school2", value: 2 }, { name: "school3", value: 3 }];

    var select = document.getElementById("selectSchool");
    for (i = select.length - 1; i >= 0; i--) {
        select.remove(i);
    }
    
    if (event == 1) {
        document.getElementById("schoolLabel").textContent = "اسم الجامعة او الكلية *";
        schools = [{ name: "school1", value: 1 }, { name: "school3", value: 3 }];
    } else {
        document.getElementById("schoolLabel").textContent = "اسم المدرسة *";
        schools = [{ name: "school2", value: 2 }, { name: "school3", value: 3 }];
    }

    for (var i = 0; i < schools.length; i++) {
        var opt = schools[i];
        var el = document.createElement("option");
        el.textContent = opt.name;
        el.value = opt.value;
        select.appendChild(el);
    }

}


function save(e) {
const $form = $('#application')
//let data = $form.serialize()
    // $form.on('submit', submitHandler)
    // e.preventDefault()
    $.ajax({
        url: 'http://localhost:3000/api/RegistrationForms',
        type: 'POST',
        data: $form.serialize()
    }).done(response => {
        console.log(response)
    })
}
