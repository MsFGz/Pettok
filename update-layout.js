const fs = require('fs');
const path = '/Users/gazybe/Documents/黑客松/抖音宠物/src/components/FeedmeCard.vue';
let content = fs.readFileSync(path, 'utf-8');

// 1. Shift overlay down
content = content.replace(
  /\.feedme-card-overlay {[\s\S]*?align-items: center; \/\* 垂直居中整个卡片 \*\/[\s\S]*?padding: 10px 0;[\s\S]*?box-sizing: border-box;\n}/,
  `.feedme-card-overlay {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top, #362c24 0%, #120e0b 100%); 
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 改为顶部对齐，通过 padding 往下移 */
  z-index: 999;
  color: #fff;
  padding: 80px 0 20px 0; /* 顶部留出 80px 的高度，不遮挡抖音顶栏 */
  box-sizing: border-box;
}`
);

// 2. Adjust .diet-body HTML layout
const oldDietHtml = `          <div v-else-if="currentSlide === 1" class="module-card" key="m1">
            <div class="module-body diet-body">
              <div class="stats">
                <div class="stat-box">
                  <div class="stat-num">23</div>
                  <div class="stat-label">已看视频</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num">47<span class="unit"> 分钟</span></div>
                  <div class="stat-label">观看时长</div>
                </div>
              </div>
              <div class="bar">
                <div class="seg-junk"></div>
                <div class="seg-neutral"></div>
                <div class="seg-good"></div>
              </div>
              <div class="legend">
                <span class="legend-junk">垃圾 <span class="num">60%</span></span>
                <span class="legend-neutral">中性 <span class="num">25%</span></span>
                <span class="legend-good">营养 <span class="num">15%</span></span>
              </div>
              <div class="top-cat">
                <span>今日最爱刷</span>
                <span class="tag">搞笑段子</span>
              </div>
              <div class="top3">
                <div class="top3-title">📊 分类 TOP 3</div>
                <div class="top3-item">
                  <span class="top3-label">· 搞笑段子</span>
                  <div class="top3-bar" style="--w: 61%;"></div>
                  <span class="top3-count">14条</span>
                </div>
                <div class="top3-item">
                  <span class="top3-label">· 美食探店</span>
                  <div class="top3-bar" style="--w: 26%;"></div>
                  <span class="top3-count">6条</span>
                </div>
                <div class="top3-item">
                  <span class="top3-label">· 治愈萌宠</span>
                  <div class="top3-bar" style="--w: 13%;"></div>
                  <span class="top3-count">3条</span>
                </div>
              </div>
              <div class="insight-grid">
                <div class="insight-box">
                  <div class="k">最常出现情绪</div>
                  <div class="v">轻松解压</div>
                </div>
                <div class="insight-box">
                  <div class="k">连续刷最多</div>
                  <div class="v">搞笑段子 5 条</div>
                </div>
                <div class="insight-box">
                  <div class="k">最久停留</div>
                  <div class="v">猫咪视频 12 秒</div>
                </div>
                <div class="insight-box">
                  <div class="k">营养缺口</div>
                  <div class="v">知识 / 风景类偏少</div>
                </div>
              </div>
              <div class="compare">⚠️ 比昨天多看 31 分钟，今晚状态更容易“吃撑”</div>
            </div>
          </div>`;

const newDietHtml = `          <div v-else-if="currentSlide === 1" class="module-card" key="m1">
            <div class="module-body diet-body">
              <!-- 区块1：基础数据与进度 -->
              <div class="diet-section">
                <div class="stats">
                  <div class="stat-box">
                    <div class="stat-num">23</div>
                    <div class="stat-label">已看视频</div>
                  </div>
                  <div class="stat-box">
                    <div class="stat-num">47<span class="unit"> 分钟</span></div>
                    <div class="stat-label">观看时长</div>
                  </div>
                </div>
                <div class="bar">
                  <div class="seg-junk"></div>
                  <div class="seg-neutral"></div>
                  <div class="seg-good"></div>
                </div>
                <div class="legend">
                  <span class="legend-junk">垃圾 <span class="num">60%</span></span>
                  <span class="legend-neutral">中性 <span class="num">25%</span></span>
                  <span class="legend-good">营养 <span class="num">15%</span></span>
                </div>
              </div>

              <!-- 区块2：分类排行 -->
              <div class="diet-section">
                <div class="top-cat-inline">
                  <span>最爱刷</span>
                  <span class="tag">搞笑段子</span>
                </div>
                <div class="top3-list">
                  <div class="top3-item">
                    <span class="top3-label">搞笑段子</span>
                    <div class="top3-bar" style="--w: 61%;"></div>
                    <span class="top3-count">14条</span>
                  </div>
                  <div class="top3-item">
                    <span class="top3-label">美食探店</span>
                    <div class="top3-bar" style="--w: 26%;"></div>
                    <span class="top3-count">6条</span>
                  </div>
                  <div class="top3-item">
                    <span class="top3-label">治愈萌宠</span>
                    <div class="top3-bar" style="--w: 13%;"></div>
                    <span class="top3-count">3条</span>
                  </div>
                </div>
              </div>

              <!-- 区块3：深度洞察 -->
              <div class="insight-grid">
                <div class="insight-box">
                  <div class="k">最常情绪</div>
                  <div class="v">轻松解压</div>
                </div>
                <div class="insight-box">
                  <div class="k">连续刷最多</div>
                  <div class="v">搞笑段子 5条</div>
                </div>
                <div class="insight-box">
                  <div class="k">最久停留</div>
                  <div class="v">猫咪视频 12秒</div>
                </div>
                <div class="insight-box">
                  <div class="k">营养缺口</div>
                  <div class="v">知识/风景偏少</div>
                </div>
              </div>

              <div class="compare">⚠️ 比昨天多看 31 分钟，更容易“吃撑”</div>
            </div>
          </div>`;

content = content.replace(oldDietHtml, newDietHtml);

// 3. Adjust CSS for .diet-body
const oldDietCss = content.match(/\.diet-body \{[\s\S]*?\.compare \{[\s\S]*?\}\n\}/)[0];

const newDietCss = `.diet-body {
  padding: 12px 14px !important;
  color: #fff;
  gap: 8px;

  .diet-section {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    padding: 10px 12px;
  }

  .stats {
    display: flex; gap: 8px; margin-bottom: 8px;
  }
  .stat-box {
    flex: 1;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 8px 10px;
    display: flex; flex-direction: column; align-items: center;
  }
  .stat-num {
    color: #fcd34d; font-size: 20px; font-weight: 800;
    .unit { font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.7); }
  }
  .stat-label {
    color: rgba(255,255,255,0.8);
    font-size: 11px; letter-spacing: 0.5px;
    margin-top: 2px;
  }
  .bar {
    width: 100%; height: 6px;
    border-radius: 3px; overflow: hidden;
    display: flex; background: rgba(255, 255, 255, 0.1);
    margin: 6px 0 4px 0;
  }
  .bar > div { height: 100%; }
  .seg-junk { background: linear-gradient(90deg, #fb7185, #fda4af); width: 60%; }
  .seg-neutral { background: linear-gradient(90deg, #fbbf24, #fcd34d); width: 25%; }
  .seg-good { background: linear-gradient(90deg, #fde68a, #f59e0b); width: 15%; }
  .legend {
    display: flex; justify-content: space-between;
    font-size: 11px; color: rgba(255,255,255,0.7);
  }
  .legend .num { font-weight: 700; }
  .legend-junk .num { color: #fda4af; }
  .legend-neutral .num { color: #fcd34d; }
  .legend-good .num { color: #fde68a; }

  .top-cat-inline {
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 6px; margin-bottom: 6px;
    color: rgba(255,255,255,0.9); font-size: 12px; font-weight: 700;
  }
  .top-cat-inline .tag { color: #fda4af; }
  .top3-list {
    display: flex; flex-direction: column; gap: 4px;
  }
  .top3-item {
    display: flex; align-items: center; gap: 8px;
    font-size: 11px;
  }
  .top3-label { color: rgba(255,255,255,0.8); flex-shrink: 0; width: 55px; }
  .top3-bar {
    flex: 1; height: 4px; border-radius: 2px;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }
  .top3-bar::after {
    content: '';
    position: absolute;
    inset: 0;
    width: var(--w, 0%);
    background: rgba(239, 68, 68, 0.6);
    border-radius: 2px;
  }
  .top3-count { color: rgba(255,255,255,0.6); font-size: 10px; flex-shrink: 0; width: 25px; text-align: right; }
  
  .insight-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }
  .insight-box {
    padding: 6px 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .insight-box .k {
    color: rgba(255,255,255,0.6);
    font-size: 10px;
    margin-bottom: 2px;
  }
  .insight-box .v {
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.3;
  }
  .compare {
    padding: 8px;
    background: rgba(245, 158, 11, 0.15);
    border: 1px solid rgba(245, 158, 11, 0.3);
    border-radius: 8px;
    color: #fcd34d;
    font-size: 11px;
    text-align: center;
    font-weight: 600;
  }
}`;

content = content.replace(oldDietCss, newDietCss);
fs.writeFileSync(path, content, 'utf-8');
console.log('Layout updated');
