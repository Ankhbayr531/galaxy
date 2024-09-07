var galaxies = [
    'url("https://images.nightcafe.studio/jobs/YhZ7i8rjTjKZUnkkwuJr/YhZ7i8rjTjKZUnkkwuJr--1--bupes.jpg?tr=w-1600,c-at_max")',
    'url("https://static.vecteezy.com/system/resources/previews/028/829/708/non_2x/nebula-galaxy-background-with-purple-blue-outer-space-cosmos-clouds-and-beautiful-universe-night-stars-ai-generative-free-photo.jpg")',
    'url("https://wallpapers.com/images/hd/galaxy-planet-on8g4p6ccowlwn8i.jpg")',
    'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06ddd246-6c9d-43e4-a170-cf8bfa893b62/dgmuey6-07e2e069-11bb-4c25-8e19-c381c8775085.jpg/v1/fill/w_1280,h_721,q_75,strp/wallpaper_galaxy_hd_gorgeous_by_rebelsfantasyworld_dgmuey6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA2ZGRkMjQ2LTZjOWQtNDNlNC1hMTcwLWNmOGJmYTg5M2I2MlwvZGdtdWV5Ni0wN2UyZTA2OS0xMWJiLTRjMjUtOGUxOS1jMzgxYzg3NzUwODUuanBnIiwiaGVpZ2h0IjoiPD03MjEiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8wNmRkZDI0Ni02YzlkLTQzZTQtYTE3MC1jZjhiZmE4OTNiNjJcL3JlYmVsc2ZhbnRhc3l3b3JsZC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.DsG8ou_ongLD0B__tVdXprj6-V6zhIE0EtYVYduTxe8")',
    'url("https://cdn.esahubble.org/archives/images/screen/opo0501a.jpg")'
];
var i = -1;
var body = document.getElementsByTagName('body')[0];
var up;
var autoBtn = document.querySelector('.autoBtn');
var stopBtn = document.querySelector('.stopBtn');
var i1 = document.getElementsByTagName('button')[0];

function changeGalaxy() {
    mode();
}

function galaxyBack() {
    if (i <= 0) {
        i = galaxies.length;
    }
    i--;
    body.style.backgroundImage = galaxies[i];
    i1.innerText = `Galaxy ${i + 1}`;
}

function auto() {
    mode();
    up = setTimeout(auto, 2000);
    autoBtn.disabled = true;
    if(autoBtn.disabled = true){
        stopBtn.disabled = false;
    }
}

function stop() {
    clearTimeout(up);
    stopBtn.disabled = true;
    if(stopBtn.disabled = true){
        autoBtn.disabled = false;
    }
}

function mode() {
    i++;
    body.style.backgroundImage = galaxies[i];
    i1.innerText = `Galaxy ${i + 1}`;
    if (i >= galaxies.length - 1) {
        i = -1;
    }
}