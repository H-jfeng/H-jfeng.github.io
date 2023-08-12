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
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#9796f0;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/11/iCE0Qewy.jpg)" class="imgbox" onclick="changeBg('url(https://img1.imgtp.com/2023/06/11/iCE0Qewy.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/11/3OyleChr.png)" class="imgbox" onclick="changeBg('url(https://img1.imgtp.com/2023/06/11/3OyleChr.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/11/NQkhQKvl.jpg)" class="imgbox" onclick="changeBg('url(https://img1.imgtp.com/2023/06/11/NQkhQKvl.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/08/12/Wrg98cYH.png)" class="imgbox" onclick="changeBg('url(https://img1.imgtp.com/2023/08/12/Wrg98cYH.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/08/12/x1Hnbuyo.jpg)" class="imgbox" onclick="changeBg('url(https://img1.imgtp.com/2023/08/12/x1Hnbuyo.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/11/nU5jWw7L.png)" class="imgbox" onclick="changeBg('url(https://img1.imgtp.com/2023/06/11/nU5jWw7L.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/11/OB7CuJdL.png)" class="imgbox" onclick="changeBg('url(https://img1.imgtp.com/2023/06/11/OB7CuJdL.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/06/11/l9Tqu9iu.png)" class="imgbox" onclick="changeBg('url(https://img1.imgtp.com/2023/06/11/l9Tqu9iu.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/07/14/0vbeAP52.jpg)" class="imgbox" onclick="changeBg('url(https://img1.imgtp.com/2023/07/14/0vbeAP52.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img1.imgtp.com/2023/08/12/zikZjy81.jpg)" class="imgbox" onclick="changeBg('url(https://img1.imgtp.com/2023/08/12/zikZjy81.jpg)')"></a>
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
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #FA895F" onclick="changeBg('#FA895F')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #D43766" onclick="changeBg('#D43766')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #BD49EB" onclick="changeBg('#BD49EB')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F5D3EC" onclick="changeBg('#F5D3EC')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F59B9A" onclick="changeBg('#F59B9A')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #BA0900" onclick="changeBg('#BA0900')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #DDB7FF" onclick="changeBg('#DDB7FF')"></a>  
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ECC8F5" onclick="changeBg('#ECC8F5')"></a> 
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
