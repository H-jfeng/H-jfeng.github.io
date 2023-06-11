// 存数据
// name：命名 data：数据
function saveData(name, data) {
  localStorage.setItem(name, JSON.stringify({ time: Date.now(), data: data }));
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
  let d = JSON.parse(localStorage.getItem(name));
  // 过期或有错误返回 0 否则返回数据
  if (d) {
    let t = Date.now() - d.time;
    if (t < time * 60 * 1000 && t > -1) return d.data;
  }
  return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
  let data = loadData("blogbg", 1440);
  if (data) changeBg(data, 1);
  else localStorage.removeItem("blogbg");
} catch (error) {
  localStorage.removeItem("blogbg");
}

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
  let bg = document.getElementById("web_bg");
  if (s.charAt(0) == "#") {
    bg.style.backgroundColor = s;
    bg.style.backgroundImage = "none";
  } else bg.style.backgroundImage = s;
  if (!flag) {
    saveData("blogbg", s);
  }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = "";

function createWinbox() {
  let div = document.createElement("div");
  document.body.appendChild(div);
  winbox = WinBox({
    id: "changeBgBox",
    index: 999,
    title: "切换背景",
    x: "center",
    y: "center",
    minwidth: "300px",
    height: "60%",
    background: "#9796f0",
    onmaximize: () => {
      div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>`;
    },
    onrestore: () => {
      div.innerHTML = "";
    },
  });
  winResize();
  window.addEventListener("resize", winResize);

  // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
  winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/09/ou9420JE.jpg)" class="imgbox" onclick="changeBg('url(https\://img1.imgtp.com/2023/06/09/ou9420JE.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/08/BdN8FgAS.jpg)" class="imgbox" onclick="changeBg('url(https\://img1.imgtp.com/2023/06/08/BdN8FgAS.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/09/tuqZmDZh.jpg)" class="imgbox" onclick="changeBg('url(https\://img1.imgtp.com/2023/06/09/tuqZmDZh.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/09/RI9seeKq.jpg)" class="imgbox" onclick="changeBg('url(https\://img1.imgtp.com/2023/06/09/RI9seeKq.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/09/Wo9CQqYE.jpg)" class="imgbox" onclick="changeBg('url(https\://img1.imgtp.com/2023/06/09/Wo9CQqYE.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/09/ZEInDBva.jpg)" class="imgbox" onclick="changeBg('url(https\://img1.imgtp.com/2023/06/09/ZEInDBva.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/09/tmMlvToq.jpg)" class="imgbox" onclick="changeBg('url(https\://img1.imgtp.com/2023/06/09/tmMlvToq.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/09/EAea4FOc.jpg)" class="imgbox" onclick="changeBg('url(https\://img1.imgtp.com/2023/06/09/EAea4FOc.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/09/SJ3XjZF3.jpg)" class="imgbox" onclick="changeBg('url(https\://img1.imgtp.com/2023/06/09/SJ3XjZF3.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/09/E6DwYGic.jpg)" class="imgbox" onclick="changeBg('url(https\://img1.imgtp.com/2023/06/09/E6DwYGic.jpg)')"></a>
    </div>
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #544a7d, #ffd452)" onclick="changeBg('linear-gradient(to right, #544a7d, #ffd452)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)" onclick="changeBg('linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to left, #654ea3, #eaafc8)" onclick="changeBg('linear-gradient(to left, #654ea3, #eaafc8)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)" onclick="changeBg('linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #8360c3, #2ebf91)" onclick="changeBg('linear-gradient(to top, #8360c3, #2ebf91)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #108dc7, #ef8e38)" onclick="changeBg('linear-gradient(to top, #108dc7, #ef8e38)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)" onclick="changeBg('linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #f2709c, #ff9472)" onclick="changeBg('linear-gradient(to top, #f2709c, #ff9472)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #ddd6f3, #faaca8)" onclick="changeBg('linear-gradient(to top, #ddd6f3, #faaca8)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ecb1b1" onclick="changeBg('#ecb1b1')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #d3ebac" onclick="changeBg('#d3ebac')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ace9ce" onclick="changeBg('#ace9ce')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #c1ebea" onclick="changeBg('#c1ebea')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #dee7f1" onclick="changeBg('#dee7f1')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #e9e3f2" onclick="changeBg('#e9e3f2')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #f7eff5" onclick="changeBg('#f7eff5')"></a>  
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ddd6f3" onclick="changeBg('#ddd6f3')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #9796f0" onclick="changeBg('#9796f0')"></a>
    </div>
`;
}

// 适应窗口大小
function winResize() {
  let box = document.querySelector("#changeBgBox");
  if (!box || box.classList.contains("min") || box.classList.contains("max"))
    return; // 2023-02-10更新
  var offsetWid = document.documentElement.clientWidth;
  if (offsetWid <= 768) {
    winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
  } else {
    winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
  }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
  if (document.querySelector("#changeBgBox")) winbox.toggleClass("hide");
  else createWinbox();
}


var biliBannerIndex = Math.floor(Math.random() * 3);
var $biliBannerParentsEl = document.getElementById("page-header");
//- 创建脚本节点
var biliBannerScript = document.createElement("script");
biliBannerScript.type = "text/javascript";
console.info(biliBannerIndex);
if (biliBannerIndex === 0) {
  //- autumn
  $biliBannerParentsEl.insertAdjacentHTML(
    "beforeend",
    `
      <div class="bili-banner">
        <div class="animated-banner">
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg1.png" data-height="360" data-width="9666" height="180" width="4833" style="transform: scale(1) translate(0px, -15px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg2.png" data-height="360" data-width="9666" height="180" width="4833" style="transform: scale(1) translate(1100px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg3.png" data-height="360" data-width="3523" height="162" width="1585" style="transform: scale(1) translate(675px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg4.png" data-height="360" data-width="2938" height="176" width="1439" style="transform: scale(1) translate(-637px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg5.png" data-height="139" data-width="556" height="62" width="250" style="transform: scale(1) translate(607.5px, 45px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p4.png" data-height="302" data-width="734" height="84" width="205" style="transform: scale(1) translate(252px, 36.4px) rotate(0deg); opacity: 0;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg6.png" data-height="180" data-width="1757" height="125" width="1229" style="transform: scale(1) translate(112px, 25px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg7.png" data-height="116" data-width="1757" height="81" width="1229" style="transform: scale(1) translate(-350px, 49px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p2.png" data-height="346" data-width="497" height="138" width="198" style="transform: scale(1) translate(-240px, 16px) rotate(0deg); opacity: 0;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p1.png" data-height="256" data-width="146" height="102" width="58" style="transform: scale(1) translate(-340px, 32px) rotate(0deg); opacity: 0;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/t1.png" data-height="254" data-width="602" height="114" width="270" style="transform: scale(1) translate(-90px, 13.5px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg8.png" data-height="360" data-width="4277" height="180" width="2138" style="transform: scale(1) translate(100px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p3.png" data-height="327" data-width="933" height="147" width="419" style="transform: scale(1) translate(216px, 13.5px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/t3.png" data-height="353" data-width="740" height="211" width="444" style="transform: scale(1) translate(2100px, 0px) rotate(0deg); filter: blur(2px); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/t2.png" data-height="360" data-width="1916" height="180" width="958" style="transform: scale(1) translate(-1000px, 0px) rotate(0deg); filter: blur(1px); opacity: 1;"/></div>
            <canvas id="springCanvas" width="1519" height="155" style="position: absolute; top: 0px; left: 0px;width: 100%;"></canvas>
        </div>
      </div>
      <link rel="stylesheet", href="/css/biliBg/spring/s
    `
  );

  //- 插入js节点
  biliBannerScript.src =
    "https://npm.elemecdn.com/anzhiyu-blog@2.1.7/js/biliBg/autumn/autumn.js";
  $biliBannerParentsEl.appendChild(biliBannerScript);
} else if (biliBannerIndex === 1) {
  //- spring
  $biliBannerParentsEl.insertAdjacentHTML(
    "beforeend",
    `
      <div class="bili-banner">
        <div class="animated-banner">
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg1.png" data-height="360" data-width="9666" height="180" width="4833" style="transform: scale(1) translate(0px, -15px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg2.png" data-height="360" data-width="9666" height="180" width="4833" style="transform: scale(1) translate(1100px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg3.png" data-height="360" data-width="3523" height="162" width="1585" style="transform: scale(1) translate(675px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg4.png" data-height="360" data-width="2938" height="176" width="1439" style="transform: scale(1) translate(-637px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg5.png" data-height="139" data-width="556" height="62" width="250" style="transform: scale(1) translate(607.5px, 45px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p4.png" data-height="302" data-width="734" height="84" width="205" style="transform: scale(1) translate(252px, 36.4px) rotate(0deg); opacity: 0;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg6.png" data-height="180" data-width="1757" height="125" width="1229" style="transform: scale(1) translate(112px, 25px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg7.png" data-height="116" data-width="1757" height="81" width="1229" style="transform: scale(1) translate(-350px, 49px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p2.png" data-height="346" data-width="497" height="138" width="198" style="transform: scale(1) translate(-240px, 16px) rotate(0deg); opacity: 0;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p1.png" data-height="256" data-width="146" height="102" width="58" style="transform: scale(1) translate(-340px, 32px) rotate(0deg); opacity: 0;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/t1.png" data-height="254" data-width="602" height="114" width="270" style="transform: scale(1) translate(-90px, 13.5px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg8.png" data-height="360" data-width="4277" height="180" width="2138" style="transform: scale(1) translate(100px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p3.png" data-height="327" data-width="933" height="147" width="419" style="transform: scale(1) translate(216px, 13.5px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/t3.png" data-height="353" data-width="740" height="211" width="444" style="transform: scale(1) translate(2100px, 0px) rotate(0deg); filter: blur(2px); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/t2.png" data-height="360" data-width="1916" height="180" width="958" style="transform: scale(1) translate(-1000px, 0px) rotate(0deg); filter: blur(1px); opacity: 1;"/></div>
            <canvas id="springCanvas" width="1519" height="155" style="position: absolute; top: 0px; left: 0px;width: 100%;"></canvas>
        </div>
      </div>
      <link rel="stylesheet", href="/css/biliBg/spring/spring.css" />
    `
  );

  //- 插入js节点
   biliBannerScript.src =
     "https://npm.elemecdn.com/anzhiyu-blog@2.1.7/js/biliBg/autumn/autumn.js";
   $biliBannerParentsEl.appendChild(biliBannerScript);
} else if (biliBannerIndex === 2) {
  //- winter
  $biliBannerParentsEl.insertAdjacentHTML(
    "beforeend",
    `
      <div class="bili-banner">
        <div class="animated-banner">
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg1.png" data-height="360" data-width="9666" height="180" width="4833" style="transform: scale(1) translate(0px, -15px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg2.png" data-height="360" data-width="9666" height="180" width="4833" style="transform: scale(1) translate(1100px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg3.png" data-height="360" data-width="3523" height="162" width="1585" style="transform: scale(1) translate(675px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg4.png" data-height="360" data-width="2938" height="176" width="1439" style="transform: scale(1) translate(-637px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg5.png" data-height="139" data-width="556" height="62" width="250" style="transform: scale(1) translate(607.5px, 45px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p4.png" data-height="302" data-width="734" height="84" width="205" style="transform: scale(1) translate(252px, 36.4px) rotate(0deg); opacity: 0;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg6.png" data-height="180" data-width="1757" height="125" width="1229" style="transform: scale(1) translate(112px, 25px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg7.png" data-height="116" data-width="1757" height="81" width="1229" style="transform: scale(1) translate(-350px, 49px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p2.png" data-height="346" data-width="497" height="138" width="198" style="transform: scale(1) translate(-240px, 16px) rotate(0deg); opacity: 0;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p1.png" data-height="256" data-width="146" height="102" width="58" style="transform: scale(1) translate(-340px, 32px) rotate(0deg); opacity: 0;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/t1.png" data-height="254" data-width="602" height="114" width="270" style="transform: scale(1) translate(-90px, 13.5px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/bg8.png" data-height="360" data-width="4277" height="180" width="2138" style="transform: scale(1) translate(100px, 0px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/p3.png" data-height="327" data-width="933" height="147" width="419" style="transform: scale(1) translate(216px, 13.5px) rotate(0deg); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/t3.png" data-height="353" data-width="740" height="211" width="444" style="transform: scale(1) translate(2100px, 0px) rotate(0deg); filter: blur(2px); opacity: 1;"/></div>
            <div class="layer"><img src="https://npm.elemecdn.com/anzhiyu-blog@2.1.7/img/banner/spring/t2.png" data-height="360" data-width="1916" height="180" width="958" style="transform: scale(1) translate(-1000px, 0px) rotate(0deg); filter: blur(1px); opacity: 1;"/></div>
            <canvas id="springCanvas" width="1519" height="155" style="position: absolute; top: 0px; left: 0px;width: 100%;"></canvas>
        </div>
      </div>
      <link rel="stylesheet", href="/css/biliBg/spring/s
    `
  );

  //- 插入js节点
   biliBannerScript.src =
     "https://npm.elemecdn.com/anzhiyu-blog@2.1.7/js/biliBg/autumn/autumn.js";
   $biliBannerParentsEl.appendChild(biliBannerScript);
}
