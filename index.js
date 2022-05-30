const app = document.querySelector('#app')
const loginBtn = document.querySelector('#loginBtn')
const loginAnimateList = [
    { transform: 'scale(0.99)' },
]
function clickAnimate(e) {
    [span, icon] = this.children
    e.preventDefault();
    this.animate(loginAnimateList, 100)
    span.innerHTML = '登录中'
    icon.style.display = 'inline-block'
    setTimeout(() => {
        span.innerHTML = '登录'
        icon.style.display = 'none'
    }, 2000)

}
loginBtn.addEventListener('click', clickAnimate)
function mouseoverListener() {
    let [x, y] = getComputedStyle(app).backgroundPosition.split(' ')
    app.style.backgroundPosition = getComputedStyle(app).backgroundPosition
    const startY = 72
    return (e) => {
        let { screenY } = e
        let moveY = (screenY - startY) / 100
        let final = [x, `${parseInt(y) + moveY}px`].join(' ')
        app.style.backgroundPosition = final
    }
}
const mouseOpitons = {
    passive: true,
    capture: true,
}
app.addEventListener('mousemove', mouseoverListener())
