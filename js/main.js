// To Top button
let toTop = document.getElementById("toTop");
window.onscroll = () => { (window.scrollY >= 300) ? toTop.style.right="1rem" : toTop.style.right='-100px' };
toTop.onclick = () => { window.scrollTo({ top: 0, behavior: "smooth", }) };

// gallery filter
let switcher = document.querySelectorAll(".portfolio .pf-content ul li");
let myImgs = [...document.querySelectorAll(".portfolio .img-cat img")];
switcher.forEach((li) => {
    li.addEventListener("click", function () {
        switcher.forEach((e) => {
            e.classList.remove("active")
        });
        li.classList.add("active");
        myImgs.forEach((img) => {
            img.style.display = 'none';
        })
        document.querySelectorAll(this.dataset.cat).forEach((e) => {
            e.style.display = 'block';
        })
    })
})