const urlParams = new URLSearchParams(window.location.search);

const name = urlParams.get('ꦤꦩ');
function ceklogin(){
    const hasNameParam = urlParams.has('ꦤꦩ');
    if(!hasNameParam) {
        document.location.href = `../index.html`;
    }else{
        alert('Login Berhasil!')
        document.querySelector('#name-param').innerHTML = name;
    }
};
ceklogin();

const logout_btn = document.querySelectorAll('.logout-btn');
for (const element of logout_btn) {
    element.addEventListener('click', function(){
        let timerInterval;
        Swal.fire({
            title: "Wait....",
            html: "I will Logout in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                window.location.href = './index.html';
            }
        });
    })
}
document.querySelector('#toggle').addEventListener('change', function(){
    // console.log(this.checked);
    if(!this.checked){
        return document.querySelector('html').classList.remove('dark');
    }else{
        return document.querySelector('html').classList.add('dark');
    }
});
const write_text = document.querySelectorAll('.write-text');
for(const e of write_text){
    e.addEventListener('click', ()=>{
        document.querySelector('#input-query').value = e.getAttribute('value')
    })
}

api = 'https://api.nyxs.pw/ai/gemini-advance?text=';
let index = 0;
document.querySelector('#submit-btn').addEventListener('click', ()=>{
    let query = document.querySelector('#input-query').value;
    if(query === ''){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Kamu belum menuliskan apapun!",
        });
    }else{
        fetch(`${api}${query}`)
            .then((response) =>{
                if (!response.ok){
                    console.error(response.statusText);
                };
                return response.json();
            }).then(async(Response) =>{
                // console.log(Response.result);
                if(index === 0){
                    document.querySelector('#main').innerHTML = await fragment(query,Response.result);
                    index++
                }else{
                    await document.querySelector('.loading').classList.add('hidden')
                    document.querySelector('#main').innerHTML += await fragment(query,Response.result);
                }
            }
        )
        document.querySelector('#main').innerHTML += loading_fragment();
        // query = '';
    }
})

function fragment(ask,answer){
    return `<div class="chat chat-start">
                <div class="chat-bubble">
                    ${ask}
                </div>
            </div>
            <div class="chat chat-end">
                <div class="chat-bubble">
                    ${answer}
                </div>
            </div>`
}
function loading_fragment(){
    return `<span class="loading loading-dots loading-lg text-center mx-auto dark:text-white"></span>`;
}