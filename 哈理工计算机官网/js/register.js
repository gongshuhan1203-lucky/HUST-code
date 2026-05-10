let btn = document.getElementById('btn')

btn.onclick = () => {
    let name = document.getElementById('name').value
    let pwd = document.getElementById('pwd').value
    localStorage.setItem('lname', name)
    localStorage.setItem('lpwd', pwd)
    alert("注册成功，请登录")
    window.location.href = "./login.html";
}