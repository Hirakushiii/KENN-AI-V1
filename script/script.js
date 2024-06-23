const urlParams = new URLSearchParams(window.location.search);

const name = urlParams.get('n');
function ceklogin(){
    const hasNameParam = urlParams.has('n');
    if(!hasNameParam) {
        document.location.href = `../index.html`;
    }else{
        alert('Login Berhasil!')
        document.querySelector('#name-param').innerHTML = name;
    }
};
ceklogin();

api = 'https://api.nyxs.pw/ai/gemini-advance?text=';

document.querySelector('#toggle').addEventListener('change', function(){
    // console.log(this.checked);
    if(!this.checked){
        return document.querySelector('html').classList.remove('dark');
    }else{
        return document.querySelector('html').classList.add('dark');
    }
});