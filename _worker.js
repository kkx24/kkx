// 轻量级动态效果实现

// 鼠标悬停文字颜色渐变（作用于所有段落）
document.querySelectorAll('.content-section p').forEach(p => {
    p.style.transition = 'color 0.3s ease-in-out';
    p.addEventListener('mouseenter', () => {
        p.style.color = '#c6a98f'; // 暖色调渐变目标色
    });
    p.addEventListener('mouseleave', () => {
        p.style.color = '#4a3a2f'; // 恢复原文字颜色
    });
});

// 滚动时段落淡入动画（使用Intersection Observer）
const observerOptions = {
    rootMargin: '0px 0px -50px 0px', // 元素进入视口50px时触发
    threshold: 0.1
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
// 初始化时为所有内容段落添加观察
document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(section);
});

// 实时更新签名日期时间（显示当前时间）
function updateDateTime() {
    const now = new Date();
    const dateStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日`;
    const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    document.querySelector('.signature p:last-child').textContent = `${dateStr} ${timeStr}`;
}
updateDateTime(); // 初始加载
setInterval(updateDateTime, 60000); // 每分钟更新