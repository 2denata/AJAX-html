![label](https://img.shields.io/badge/Javascript-orange?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

# Asynchronous Web using AJAX
This project is a website that showcases various musical instruments, utilizing AJAX to dynamically load data without needing to refresh the page. AJAX (Asynchronous JavaScript and XML) allows for asynchronous data retrieval from the server, enabling users to view and filter products seamlessly without interruption.

AJAX is used in this project to fetch musical instrument data from a JSON file (data/data-alat.json) and display it on the webpage without reloading the entire page. With AJAX, content changes such as filtering based on instrument type can be performed quickly and efficiently, only updating the relevant parts of the page.

# How AJAX Enhances User Experience

![ajax](https://github.com/user-attachments/assets/ffd30f1d-0d8b-4c48-848b-ed61693451e9)

- **No Full Page Reloads**: With AJAX, users can interact with the website—such as filtering or searching for products—without the page needing to reload completely. This leads to a smoother and faster browsing experience.
- **Dynamic Content Loading**: AJAX enables the website to load new content, such as different instrument categories, directly into the page without disrupting the user’s session.
- **Efficient Data Handling**: By using AJAX, the website only requests the necessary data from the server, reducing bandwidth usage and improving performance.

# Example AJAX Implementation
Here is an example of how AJAX is used to retrieve and display musical instrument data:
```javascript
function tampilSemuaAlat() {
    $.getJSON('data/data-alat.json', function (data) {
        let alat = data.alat;
        
        $('#product-list').empty();

        $.each(alat, function (i, data) {
            $('#product-list').append(`<div class="col-md-4 d-flex align-items-stretch">
                <div class="card my-2">
                  <img class="card-img-top" src="img/` + data.gambar + `">
                  <div class="card-body">
                    <h5 class="card-title">` + data.nama + `</h5>
                    <p class="card-text">` + data.deskripsi + `</p>
                    <h5 class="card-title">Rp. ` + data.harga.toLocaleString('id-ID') + `</h5>
                    <hr>
                    <a href="#" class="btn btn-primary">Beli Sekarang</a>
                  </div>
                </div>
              </div>`);
        });
    });
}

tampilSemuaAlat();
```
In the code above, AJAX is used with jQuery to retrieve data from data/data-tools.json. The results are then processed and displayed dynamically in the #product-list element without reloading the page.

# Filtering Products with AJAX
Users can also filter musical instruments by type. Here is an example of how AJAX is used to reload the displayed products based on the selected filter:
```javascript
$('.dropdown-item').on('click', function () {
    $('.dropdown-item').removeClass('active');
    $(this).addClass('active');

    let jenisAlat = $(this).html();

    if (jenisAlat == 'All') {
        tampilSemuaAlat();
        return;
    }

    $.getJSON('data/data-alat.json', function (data) {
        let alat = data.alat;
        let content = '';
        $.each(alat, function (i, data) {
            if (data.jenis == jenisAlat.toLowerCase()) {
                content += `<div class="col-md-4 d-flex align-items-stretch">
                    <div class="card my-2">
                    <img class="card-img-top" src="img/` + data.gambar + `">
                    <div class="card-body">
                        <h5 class="card-title">` + data.nama + `</h5>
                        <p class="card-text">` + data.deskripsi + `</p>
                        <h5 class="card-title">Rp. ` + data.harga.toLocaleString('id-ID') + `</h5>
                        <hr>
                        <a href="#" class="btn btn-primary">Beli Sekarang</a>
                    </div>
                    </div>
                </div>`;
            }
        });

        $('#product-list').html(content);
    });
});
```
This code shows how AJAX is used to retrieve data that matches the filters selected by the user and update the page content without reloading the entire page.
