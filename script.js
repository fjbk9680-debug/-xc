// 预设的账号和密码
const presetUser = {
    username: 'admin',
    password: '123456'
};

// 获取表单和消息元素
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

// 表单提交事件
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止表单默认提交行为

    // 获取输入的账号和密码
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 验证账号密码
    if (username === presetUser.username && password === presetUser.password) {
        message.textContent = '登录成功！';
        message.className = 'message success';
        // 可在这里添加登录成功后的操作，比如跳转到首页
        // window.location.href = 'index.html';
    } else {
        message.textContent = '账号或密码错误！';
        message.className = 'message error';
    }
});
