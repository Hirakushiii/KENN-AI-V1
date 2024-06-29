const submit_btn = document.querySelector('#btn-kirim');

document.querySelector('#input-query').addEventListener("keydown", function(event) {
    nama = document.querySelector('#input-query').value;
    if (event.keyCode === 13 || event.key === "Enter") {
        submit_btn.click();
    }
});

submit_btn.addEventListener('click', async () =>{
    nama = document.querySelector('#input-query').value;
    if(nama === ''){
        return await Swal.fire({
            title: "Opps..",
            text: "Kamu belum menuliskan nama!",
            icon: "error"
        });
    }else{
        window.location.href = `./app/index.html?ꦤꦩ=${nama}`;
    }
})