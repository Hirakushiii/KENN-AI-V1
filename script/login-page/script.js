const submit_btn = document.querySelector('#btn-kirim');

document.querySelector('#input-query').addEventListener("keydown", function(event) {
    if (event.keyCode === 13 || event.key === "Enter") {
        submit_btn.click();
    }
});

submit_btn.addEventListener('click', () =>{
    nama = document.querySelector('#input-query').value;
    window.location.href = `./app/index.html?n=${nama}`;
})