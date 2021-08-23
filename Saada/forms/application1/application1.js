
$ = jQuery.noConflict();
$(document).ready(function () {
    // console.log('this is run on page load');
    fillNeighborhoods();
    fillLevels();
});

function fillNeighborhoods() {
    let neighborhoods = [];
    $.ajax({
        url: 'https://www.saadabus.com/api/lockups/neighborhoods',
        type: 'Get'
    }).done(response => {
        neighborhoods = response
        var select = document.getElementById("selectNeighborhood");
        for (var i = 0; i < neighborhoods.length; i++) {
            var opt = neighborhoods[i];
            var el = document.createElement("option");
            el.textContent = opt.name;
            el.value = opt.value;
            select.appendChild(el);
        }
    })
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

    setSchools(1);
}

function setSchools(event) {
    var select = document.getElementById('selectNeighborhood');
    var value = select.options[select.selectedIndex]?.value;
    if (value == undefined) {
        value = 1;
    }
    let data = 'level=' + event + '&neighborhood=' + value

    $.ajax({
        url: 'https://www.saadabus.com/api/lockups/schools',
        type: 'Get',
        data: data
    }).done(response => {
        let schools = response
        var select = document.getElementById("selectSchool");
        for (i = select.length - 1; i >= 0; i--) {
            select.remove(i);
        }

        for (var i = 0; i < schools.length; i++) {
            var opt = schools[i];
            var el = document.createElement("option");
            el.textContent = opt;
            select.appendChild(el);
        }
    })
}


function save(e) {
    const $form = $('#application')
    //let data = $form.serialize()
    // $form.on('submit', submitHandler)
    // e.preventDefault()
    $.ajax({
        url: 'https://www.saadabus.com/api/RegistrationForms',
        type: 'POST',
        data: $form.serialize()
    }).done(response => {
        console.log(response)
    })
}
