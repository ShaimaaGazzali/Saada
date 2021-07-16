
let schools = [{ name: "school1", value: 1 }, { name: "school2", value: 2 }, { name: "school3", value: 3 }];

function setSchools(event) {
    debugger
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

const $form = $('#application')

$form.on('submit', submitHandler)

function submitHandler(e) {
    e.preventDefault()

    $.ajax({
        url: '/addUserFormSubmit',
        type: 'POST',
        data: $form.serialize()
    }).done(response => {
        console.log(response)
    })
}