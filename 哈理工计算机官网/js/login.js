let btn = document.getElementById('btn')

btn.onclick = () => {
    let name = document.getElementById('name').value
    let pwd = document.getElementById('pwd').value
    let name1 = localStorage.getItem('lname')
    let pwd1 = localStorage.getItem('lpwd')
    if (name == name1 && pwd == pwd1) {
        alert("登陆成功")
        window.location.href = "./index.html";
    } else if (name == name1 && pwd != pwd1) {
        alert('密码错误！')
    } else if (name != name1) {
        alert('未注册！')
        window.location.href = "./register.html"
    }
}