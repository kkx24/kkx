// 书信容器创建
const createLetter = () => {
  const container = document.createElement('div');
  container.className = 'letter-container';
  
  // 标题容器
  const header = document.createElement('div');
  header.className = 'letter-header';
  header.innerHTML = '<h1>致墨淼</h1>';
  
  // 正文容器（横向滚动）
  const content = document.createElement('div');
  content.className = 'letter-content';
  content.innerHTML = `
    <div class="scroll-wrapper">
      ${document.querySelector('.loading').textContent}
    </div>
      ${document.querySelector('.loading').textContent}
    </div>
  `;
  
  container.append(header, content);
  document.body.prepend(container);

  // 滚动交互
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    header.style.transform = `translateY(${Math.min(currentScroll * 0.8, 100)}px)`;
    header.style.opacity = 1 - Math.min(currentScroll / 200, 1);
    content.style.opacity = Math.min(currentScroll / 100, 1);
  });
};

// 文档加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 段落悬停微动画
  const contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(section => {
    section.addEventListener('mouseover', () => {
      section.style.backgroundColor = 'rgba(255,255,255,0.3)';
    });
    section.addEventListener('mouseout', () => {
      section.style.backgroundColor = 'transparent';
    });
  });

  // 平滑滚动设置
  document.documentElement.style.scrollBehavior = 'smooth';

  // 移动端阅读进度提示（屏幕宽度小于768px时）
  if (window.innerWidth < 768) {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = 'position: fixed; bottom: 0; left: 0; height: 3px; background: #ff6b6b; z-index: 1000;';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    });
  }
  init();
  createLetter();


});