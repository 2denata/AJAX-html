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
        })
    });
}

tampilSemuaAlat();

// untuk manipulasi DOM dropdown filter alat
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
})



