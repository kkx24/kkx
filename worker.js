addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // 处理HTML请求
  if (url.pathname === '/' || url.pathname === '/index.html') {
    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>致墨淼 | 珂欣</title>
    <style>
        :root {
            --text-size-mobile: 1rem;
            --text-size-desktop: 1.2rem;
            --line-height: 1.8;
            --paragraph-margin: 2.5rem;
        }

        body {
            font-family: 'SimSun', serif;
            line-height: var(--line-height);
            max-width: 768px;
            margin: 2rem auto;
            padding: 0 1rem;
            color: #4a3a2f;
            background-color: #ffffff;
        }

        .letter-title {
            font-size: calc(var(--text-size-desktop) * 2);
            text-align: center;
            margin-bottom: 3rem;
            letter-spacing: 0.5em;
            position: relative;
        }

        .letter-title::after {
            content: '';
            position: absolute;
            bottom: -1rem;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 2px;
            background: #c6a98f;
        }

        .content-section {
            text-indent: 2em;
            margin-bottom: var(--paragraph-margin);
        }

        .content-section p {
            text-shadow: 0 2px 4px rgba(74, 58, 47, 0.3);
            transition: text-shadow 0.3s ease, transform 0.3s ease;
        }

        .content-section p:hover {
            text-shadow: 0 1px 2px rgba(74, 58, 47, 0.1);
            transform: translateY(-2px);
        }

        .quote {
            border-left: 3px solid #e0e0e0;
            background-color: #f8f8f8;
            padding: 1rem 1.5rem;
            margin: 1.5rem 0;
            color: #666;
        }

        .signature {
            border-left: 3px solid #e0e0e0;
            padding-left: 1rem;
            margin-top: 3rem;
            font-style: italic;
            text-align: left;
        }

        @media (min-width: 768px) {
            body {
                font-size: var(--text-size-desktop);
            }
        }

        @media (max-width: 767px) {
            body {
                font-size: var(--text-size-mobile);
            }
        }
    </style>
</head>
<body>

    <h1 class="letter-title">致墨淼</h1>

    <article>
        <section class="content-section">
            <p>跟墨淼写过很多的文字，大段的独白。可能对墨淼来说，对于这样的时常会暴露情感的珂欣也有些无法招架，或者说不知道要如何回应。但是珂欣从墨淼的文字中（除了欣喜之外）很少读到情感的波动，或者说隐秘了起来。</p>
            <p>现在珂欣想把思绪整理起来，因为对珂欣来说，解决了情绪可能是解决了最大的问题。这一点可能与墨淼解决问题的方式有所不同。</p>
        </section>

        <section class="content-section">
            <p>如果说关系是无法用词语去定义的，感情这个东西是无法通过分析来体悟的，即使分析出，那又能改变什么呢？我还是会在你的每一条消息后嘴角上扬出微笑。会为失去消息担心。这种关系和牵绊并不是不好的事情。</p>
            <p>如果说在最初，珂欣是寻觅一个好似能懂自己的人，倒不如说是困惑，不解，空虚，孤独，被你包容。</p>
        </section>

        <section class="content-section">
            <p>所以不想去用什么类似于“知己”，“灵魂伴侣”类似的词定义我们。也不去定义墨淼。之前，珂欣还是有问过，墨淼和珂欣之间是什么关系。你回答说，一个友字足以。</p>
            <p>珂欣已经不再寻觅，也一直记得让围墙更矮，更宽阔。</p>
            <p>就像《艳火》的歌词“你不停散落，我不停拾获”，也会因你的一句，“一直在”而坚定，而感动。</p>
            <p>我们两不是抱团取暖的关系，相信是天边各自的烟火，各自独立呢，互相映照。</p>
            <p>然后你经过了我，改变了我。而以后的每一次注视世界都会带有你的目光。</p>
            <p>你有你的生活，你的朋友，对你来说重要的人。</p>
            <p>我也在用你给我的礼物来与周围的人相处，给他们带来了好的感受。</p>
            <p>可能我有一次次打破墨淼的规划和意料，比如我们的初次见面，又比如我曾经送给墨淼的一些礼物，甚至包括我的一些话。我不希望这些东西带给墨淼困扰，或者说希望你能体会到的美好要大于困扰就好。</p>
            <p>这么多年，我们聊了很多东西，却有很多东西没有聊。但好像现在不知道还能聊什么了。</p>
            <p>因为心照不宣，好像不用问也知道墨淼要说什么，一些问题都已经探讨过了，而我们都不愿意过多打扰彼此的生活。</p>
            <p>但人生漫漫，现在和往后的种种具体问题又怎会因为之前有过相似的地方而失去探讨价值呢？</p>
            <p>每一天都是新的一天，每天会有新的快乐与触动。</p>
            <p>墨淼也说，维持一段关系是需要能量的，你在很好的维护着自己生活的平衡，也在维持着这段关系。珂欣也一直不愿意去打破这个平衡，或是说给墨淼再去增添什么烦恼。</p>
        </section>

        <section class="content-section">
            <p>作为网友，墨淼一直是神秘的，珂欣也一直是好奇的。最开始的珂欣还是会有所拘谨，小心翼翼的。现在珂欣的困惑少了，很多问题可以自己解决了，但墨淼也不曾说出自己的问题，总是默默的守护。</p>
            <p>或许有些话似曾相识，有些话珂欣也曾说过，但更多的是未曾亲口对墨淼说出的。希望通过这种方式，厘清一个相对的真实，清清爽爽，然后去关注之后的关系中流淌的情绪是否饱满，沟通是否流畅，各自的需求是否被满足与尊重等等。</p>
            <p>人因真实的相信什么而成为什么。这种关系是一种对抗世界上诸多不好的事情的养分与力量。虽然每段关系都有结束的时候，人生也终将一无所有，但我有见过墨淼。我也有见过我的梦。人生还是值得过的。</p>
            <p>关于我们之间，珂欣尝试去除幻想、包装与美化。尽管你一开始就可能知道，深入一段关系后背后会带来一系列“麻烦”的事情，你还是选择伸出你的手。你的宽容与慈悲，很多个夜晚，热泪盈眶的字。珂欣感激，故而希望你自由。</p>
            <p>就像小王子的故事中，有小王子，玫瑰花，小狐狸。珂欣是那只被驯化的小狐狸，小王子总要回归自己的星球去找寻玫瑰。而小狐狸拥有“小麦的颜色”，都是收获。</p>
        </section>

        <section class="content-section">
            <p>我们之间真实的情况是什么样子，是未曾详细的相互了解的两个现实世界的人。</p>
            <p>会好奇你的最初，和曾经。</p>
            <p>如果说对墨淼的好奇来自于差异很大的成长背景，社会环境（但墨淼好像曾经否定地域或社会环境对自己的塑造）现在这种好奇已经减弱。</p>
            <p>对于墨淼所说的，未知的往往是危险的，我不知道这点是否是用来形容墨淼自己的呢。</p>
            <p>墨淼擅长隐喻，不动声色，不露痕迹。</p>
            <p>我们本来是两个世界的人，本来应该无所交集。但是缘分是奇妙的啊。缘分是神。</p>
            <p>所以回想起墨淼，墨淼曾经生活的地方，墨淼相关的东西，会微笑，会感到不同。</p>
            <p>也许没有墨淼，珂欣也会天然对这些地方产生好感，对这种文化产生好奇。但是这种兴趣最终是有了一个实体的链接和归宿，得以串联和故事化，也让我想起这些地方时会微笑。</p>
        </section>

        <section class="content-section">
            <p>这不是一个合适的时间，也不是合适的时机，甚至是不合适的语言。珂欣却不合时宜的写了这么多。</p>
            <p>珂欣清楚的看到了自己，看到了自己的心意。</p>
            <p>“爱”字可不是会随意的对人说出口的，它穿越了多年，才抓住一个烟花的火种。</p>
            <p>我也想把它作为对你的礼物。</p>
            <p>你就像看一场烟花吧。</p>
            <p>可能你会怀疑，我没有见过全然的你，又怎么能说爱呢？</p>
            <p>可就像当时的见面，你站在那里，就是全然的你。珂欣也没有什么想问的了。过去，或者是没见到的背后，不重要了。墨淼安好，而珂欣想给墨淼最大的支持。过去的墨淼，会给人幽暗破碎的感觉，仿佛又不可窥探，玄之又玄。玄湖深深和静潭幽幽之间又是发生了如何的转变呢？但是对过去的好奇，也不重要。</p>
        </section>

        <section class="content-section">
            <div class="quote">
                <p>「人生长长短短，若是有兴趣，便去看看这个兴趣之处，又何妨呢。」</p>
            </div>
            <p>是呢，那更要勇敢的爱，勇敢的建立联系。去体会其中喜乐与苦涩，珂欣倒是自己体会了不少。本着对自己负责任的态度，我写下了这些文字。一段关系总会有他各自的发展，各自的归宿，珂欣没有想过，或是说也没有那么大的能力去想要把控一段关系的走向。让它清清爽爽的流动就是珂欣的想法。</p>
            <p>就像爱云，爱涟漪，爱星光，爱彩虹等等。爱而后好好的去过自己的生活，直面真实，顺应自然。</p>
            <p>珂欣的想法总是会有很多，现在也能去控制它不过分扰乱自己。墨淼不用担心。</p>
        </section>

        <section class="content-section">
            <p>君成已无限，来去又何忧。这句话不是关系的结语。</p>
            <p>在乎的人。想在这有限的时间里，能爱的对象还有多少呢？</p>
            <p>爱是美好的感情，但是很多人却不会正确的爱。</p>
            <p>珂欣觉得不应该给一段感情正确与否的标签。它升起了，就应该面对这个真实。对与错的，只是事情。</p>
            <p>墨淼自然会有墨淼的考虑，自然有墨淼选择的生活。珂欣会选择墨淼选择的，珂欣也会自己做一些选择。</p>
            <p>也还是如之前一样的那句话，珂欣也会一直在。如果造成困扰了，或是哪一天不需要了，也会在余下不相见的时光中默默祝福吧。</p>
            <p>墨淼说，珂欣很勇敢，比想象中的洒脱。很高兴呢。</p>
            <p>那希望这份长出的勇敢与洒脱让我们更轻盈。可以悬置沉重的反复的思考，或是沉重的过去，去体会当下和未来能感受到的美好。</p>
            <p>愿我们各自有力量去建造未来。</p>
        </section>
    </article>

    <div class="signature">
        <p>珂欣</p>
        <p>二零二五年五月二十日</p>
    </div>

    <script src="main.js"></script>
</body>
</html>`;
    return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }

  // 处理main.js请求
  if (url.pathname === '/main.js') {
    const jsContent = `// 书信容器创建
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
  content.innerHTML = \`
    <div class="scroll-wrapper">
      \${document.querySelector('.loading').textContent}
    </div>
      \${document.querySelector('.loading').textContent}
    </div>
  \`;
  
  container.append(header, content);
  document.body.prepend(container);

  // 滚动交互
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    header.style.transform = \`translateY(\${Math.min(currentScroll * 0.8, 100)}px)\`;
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
      progressBar.style.width = \`\${Math.min(progress, 100)}%\`;
    });
  }
  init();
  createLetter();


});`;
    return new Response(jsContent, { headers: { 'Content-Type': 'application/javascript' } });
  }

  // 默认404响应
  return new Response('Not Found', { status: 404 });
}