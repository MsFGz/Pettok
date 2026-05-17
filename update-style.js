const fs = require('fs');
const path = '/Users/gazybe/Documents/黑客松/抖音宠物/src/components/FeedmeCard.vue';
let content = fs.readFileSync(path, 'utf-8');

const newStyle = `<style scoped lang="less">
.feedme-card-overlay {
  width: 100%;
  height: 100%;
  /* Warm dark, elegant and clean */
  background: radial-gradient(circle at top, #322b25 0%, #120f0d 100%); 
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  z-index: 999;
  color: #fff;
  padding: 10px 0; 
  box-sizing: border-box;
}

.feedme-card {
  width: 100%;
  max-width: 400px;
  height: 100%; 
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  position: relative;

  .title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    color: #fff;
  }
  .ai-tag {
    position: absolute;
    right: 20px;
    top: 0;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 10px;
  }
}

.main-content {
  border-radius: 12px;
  padding: 0 20px;
  text-align: center;
  margin-bottom: 12px;

  .pet-container {
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
    position: relative;
  }
  
  .pet-bg-circle {
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0) 100%);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .pixel-cat {
    width: 100px;
    height: 100px;
    background-image: url('/zip-3/spritesheet.webp');
    background-size: 800px 1000px; /* 8列 x 10行 */
    background-position: 0 0;
    animation: cat-idle 1s steps(6) infinite;
    position: relative;
    z-index: 1;
  }

  @keyframes cat-idle {
    from { background-position: 0 0; }
    to { background-position: -600px 0; }
  }

  .pet-name {
    margin: 6px 0 4px 0;
    font-size: 18px;
    color: #fff;
    text-align: center;
    font-weight: 600;
  }
  .pet-status {
    margin: 0 0 10px 0;
    font-size: 12px;
    color: rgba(255,255,255,0.6);
    text-align: center;
  }
}

/* Tab 导航区 */
.tabs-container {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 12px;
  padding: 0 16px;
  flex-wrap: nowrap;
}

.tab-item {
  color: rgba(255,255,255,0.6);
  font-size: 13px;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 20px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.tab-item.active {
  background: rgba(255,255,255,0.15);
  color: #fff;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255,255,255,0.1);
}

/* 模块展示区 */
.module-display {
  flex: 1;
  padding: 0 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0; 
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.module-card {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; 
}

/* Container for the translucent background */
.module-body, .letter-body, .grid-body, .recipe-body, .health-body, .friend-body, .diet-body {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  padding: 16px;
  flex: 1;
  overflow: hidden; 
  font-size: 13px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; /* Fill space beautifully */
}

.letter-body {
  gap: 16px;
  justify-content: center !important;
  .letter-item {
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,0.15);
    padding: 16px;
    border-radius: 12px;
    .label {
      color: #fcd34d;
      font-weight: 600;
      margin-bottom: 6px;
      font-size: 14px;
    }
    .text {
      line-height: 1.6;
      color: #fff;
      font-size: 13px;
    }
  }
}

.read-more {
  color: #fcd34d;
  font-size: 13px;
  margin-left: 6px;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.letter-modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.letter-modal-content {
  width: 100%;
  max-width: 320px;
  background: linear-gradient(160deg, rgba(40, 40, 40, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%);
  border: 1px solid rgba(245, 158, 11, 0.3);
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  border-radius: 16px;
  padding: 20px;
  color: #fff;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 12px;
  h3 {
    margin: 0;
    font-size: 18px;
    color: #fcd34d;
  }
  .close-btn {
    background: none;
    border: none;
    color: rgba(255,255,255,0.5);
    font-size: 20px;
    cursor: pointer;
  }
}

.modal-body {
  max-height: 300px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.6;
  color: #fff;
  padding-right: 4px;
  
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(245, 158, 11, 0.3); border-radius: 2px; }

  p {
    margin-top: 0;
    margin-bottom: 12px;
  }
  p:last-child {
    margin-bottom: 0;
  }
}

.diet-body {
  padding: 16px !important;
  color: #fff;
  gap: 10px;

  .stats {
    display: flex; gap: 12px; 
  }
  .stat-box {
    flex: 1;
    background: rgba(251, 191, 36, 0.15);
    border-radius: 12px;
    padding: 12px 16px;
  }
  .stat-num {
    color: #fcd34d; font-size: 22px; font-weight: 800;
    .unit { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.7); }
  }
  .stat-label {
    color: rgba(255,255,255,0.8);
    font-size: 12px; letter-spacing: 0.5px;
    margin-top: 4px;
  }
  .bar {
    width: 100%; height: 10px;
    border-radius: 5px; overflow: hidden;
    display: flex; background: rgba(255, 255, 255, 0.1);
    margin: 4px 0;
  }
  .bar > div { height: 100%; }
  .seg-junk { background: linear-gradient(90deg, #fb7185, #fda4af); width: 60%; }
  .seg-neutral { background: linear-gradient(90deg, #fbbf24, #fcd34d); width: 25%; }
  .seg-good { background: linear-gradient(90deg, #fde68a, #f59e0b); width: 15%; }
  .legend {
    display: flex; justify-content: space-between;
    font-size: 12px; color: rgba(255,255,255,0.7);
  }
  .legend .num { font-weight: 700; }
  .legend-junk .num { color: #fda4af; }
  .legend-neutral .num { color: #fcd34d; }
  .legend-good .num { color: #fde68a; }
  .top-cat {
    padding: 12px 16px;
    background: rgba(239, 68, 68, 0.15);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 12px;
    color: rgba(255,255,255,0.9); font-size: 13px;
    display: flex; justify-content: space-between; align-items: center;
  }
  .top-cat .tag { color: #fda4af; font-weight: 700; }
  .top3 {
    padding: 12px 16px;
    background: rgba(251, 191, 36, 0.1);
    border-radius: 12px;
  }
  .top3-title {
    color: #fcd34d;
    font-size: 13px; font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  }
  .top3-item {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 8px;
    font-size: 12px;
  }
  .top3-item:last-child { margin-bottom: 0; }
  .top3-label { color: rgba(255,255,255,0.8); flex-shrink: 0; width: 65px; }
  .top3-bar {
    flex: 1; height: 6px; border-radius: 3px;
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
    border-radius: 3px;
  }
  .top3-count { color: rgba(255,255,255,0.6); font-size: 11px; flex-shrink: 0; width: 30px; text-align: right; }
  .insight-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .insight-box {
    padding: 10px 12px;
    border-radius: 12px;
    background: rgba(251, 191, 36, 0.1);
    border: 1px solid rgba(251, 191, 36, 0.15);
  }
  .insight-box .k {
    color: rgba(255,255,255,0.6);
    font-size: 11px;
    margin-bottom: 6px;
  }
  .insight-box .v {
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.4;
  }
  .compare {
    padding: 12px;
    background: rgba(245, 158, 11, 0.2);
    border: 1px solid rgba(245, 158, 11, 0.4);
    border-radius: 10px;
    color: #fcd34d;
    font-size: 12px;
    text-align: center;
    font-weight: 600;
  }
}

.recipe-body {
  gap: 14px;
  .rec-item {
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    padding: 12px;
    border-radius: 12px;
  }
  .rec-info-wrapper {
    display: flex;
    align-items: center;
    flex: 1;
    overflow: hidden;
  }
  .rec-icon {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    flex-shrink: 0;
    background-size: cover;
    background-position: center;
    position: relative;
    border: 1px solid rgba(255,255,255,0.12);
    box-shadow: 0 6px 14px rgba(0,0,0,0.3);
    margin-right: 12px;
  }
  .rec-icon::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.3) 100%);
  }
  .shot-tag {
    position: absolute;
    left: 4px;
    bottom: 4px;
    z-index: 1;
    padding: 2px 6px;
    border-radius: 999px;
    background: rgba(120, 53, 15, 0.8);
    color: #fef3c7;
    font-size: 10px;
    line-height: 1.3;
  }
  .rec-info {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .rec-title {
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rec-attrs {
    display: flex;
    gap: 12px;
    font-size: 12px;
    font-weight: 600;
  }
  .attr-nutrition { color: #f59e0b; }
  .attr-mood { color: #fcd34d; }
  .attr-negative { color: #ef4444; }
  .rec-desc {
    font-size: 12px;
    color: rgba(255,255,255,0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rec-btn {
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.25);
    color: #fff;
    padding: 6px 14px;
    border-radius: 16px;
    font-size: 12px;
    margin-left: 10px;
    cursor: pointer;
    font-weight: 600;
  }
}

.health-body {
  padding: 20px 16px !important;
  
  .axis-row {
    margin-bottom: 16px;
  }
  .axis-row:last-child { margin-bottom: 0; }
  .axis-head {
    display: flex; justify-content: space-between; align-items: baseline;
    margin-bottom: 8px;
  }
  .axis-name {
    color: #fff; font-size: 14px; font-weight: 700;
    display: flex; align-items: center; gap: 6px;
  }
  .axis-val {
    color: #fff; font-size: 18px; font-weight: 800;
  }
  .axis-unit {
    color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 500;
  }
  .delta {
    color: #ef4444; font-size: 12px; font-weight: 700;
    margin-left: 8px;
  }
  .delta.up { color: #fcd34d; }
  
  .bar {
    width: 100%; height: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px; overflow: hidden;
    position: relative;
  }
  .bar .fill {
    height: 100%;
    border-radius: 5px;
  }
  
  .grade-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 14px 16px;
    background: rgba(245, 158, 11, 0.15);
    border-radius: 12px;
    border: 1px solid rgba(245, 158, 11, 0.25);
  }
  .grade-label {
    color: #fff; font-size: 14px; font-weight: 700;
    display: flex; align-items: center; gap: 6px;
  }
  .grade-val {
    display: flex; align-items: center; gap: 10px;
  }
  .grade-letter {
    color: #fcd34d; font-size: 24px; font-weight: 800;
  }
  .grade-trend {
    color: #f59e0b; font-size: 18px; font-weight: 700;
  }
  
  .attribution {
    padding: 16px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }
  .attribution-title {
    color: #fff;
    font-size: 13px; font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  }
  .attribution-item {
    color: rgba(255,255,255,0.8);
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 6px;
  }
  .attribution-item:last-child { margin-bottom: 0; }
  .attribution-item .highlight {
    color: #fcd34d; font-weight: 700;
  }
}

.friend-body {
  gap: 0;
  padding: 10px 16px !important;
  justify-content: space-between;
  .friend-entry {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .friend-entry:last-child {
    border-bottom: none;
  }
  .friend-avatar {
    width: 50px;
    height: 50px;
    border-radius: 14px;
    overflow: hidden;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
  }
  .friend-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .friend-meta {
    flex: 1;
    min-width: 0;
  }
  .friend-meta .name {
    color: #fff;
    font-size: 15px;
    font-weight: 600;
  }
  .friend-meta .user {
    color: rgba(255,255,255,0.6);
    font-size: 12px;
    margin-top: 4px;
  }
  .friend-actions {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
  }
  .friend-actions button {
    padding: 8px 12px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    gap: 4px;
    color: #fff;
  }
  .btn-like {
    background: rgba(239, 68, 68, 0.15);
    border-color: rgba(239, 68, 68, 0.3);
  }
  .btn-like.liked {
    background: rgba(239, 68, 68, 0.3);
    border-color: rgba(239, 68, 68, 0.5);
  }
  .btn-comment {
    background: rgba(59, 130, 246, 0.15);
    border-color: rgba(59, 130, 246, 0.3);
  }
}

.bottom-hint {
  text-align: center;
  font-size: 13px;
  color: rgba(255,255,255,0.6);
  padding-bottom: 16px;
  margin-top: 12px;
}
</style>`;

content = content.replace(/<style scoped lang="less">[\s\S]*?<\/style>/, newStyle);
fs.writeFileSync(path, content, 'utf-8');
console.log('Style updated successfully.');
