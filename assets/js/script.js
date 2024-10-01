let previusTitle = document.title;

window.addEventListener('blur', () => {
    previusTitle = document.title;
    document.title = "VUELVE!! 😱";
})

window.addEventListener('focus', () => {
    document.title = previusTitle;
})