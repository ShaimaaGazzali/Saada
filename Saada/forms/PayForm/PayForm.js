
$ = jQuery.noConflict();

$(document).ready(function () {
    fillNeighborhoods()
    fillLevels()
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
            el.textContent = opt;
            el.value = opt;
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
}

function uploadFile() {
    let formData = new FormData();
    formData.append("image", fileupload.files[0]);
    return new Promise((resolve, reject) => {
        fetch('https://www.saadabus.com/api/paymentForms/upload', {
            method: "POST",
            body: formData,
        }).then(response => {
            resolve(response.json());
        });
    });
}

function save(event) { 
    const $form = $('#payForm')
    uploadFile().then(
        function (value) {
            if ($('#payForm')[0].checkValidity() && value.key != undefined) {

                const url =  "https://saada-files.fra1.digitaloceanspaces.com/" + value.key;
                
                $.ajax({
                    url: 'https://www.saadabus.com/api/paymentForms?url='+url,
                    type: 'POST',
                    data: $form.serialize()
                }).done(response => {
                    console.log(response)
                })
            }
            else {
                alert('يجب ملئ الفورم بشكل صحيح');
            }
        }).catch(err => console.log(err));
}

function openForm(){
    window.location.replace("https://www.saadabus.com/forms/application1/application1.html");

}