<template>
  <div class="feedme-card-overlay">
    <div class="feedme-card" @click.stop>
      
      <div class="main-content">
        <div class="pet-container">
          <div class="pet-bg-circle"></div>
          <div class="pixel-cat"></div>
          <button class="chat-btn" @click="showChatModal = true">💬</button>
        </div>
        <h3 class="pet-name">你的Pettok <span style="font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.7); margin-left: 2px;">(正在学习 AI 中)</span></h3>
      </div>

      <!-- Tab 导航区 -->
      <div class="tabs-container">
        <div 
          v-for="(tab, index) in tabs" 
          :key="index"
          class="tab-item"
          :class="{ active: currentSlide === index }"
          @click="currentSlide = index"
        >
          {{ tab }}
        </div>
      </div>

      <!-- 模块展示区 (无横向滑动，用淡入淡出切换) -->
      <div class="module-display">
        <transition name="fade" mode="out-in">
          
          <!-- 模块1：今日饮食 -->
          <div v-if="currentSlide === 0" class="module-card" key="m0">
            <div class="module-body diet-body">
              <!-- 区块1：基础数据与进度合并 -->
              <div class="diet-section">
                <div class="stats-row">
                  <div class="stat-box">
                    <div class="stat-num">23</div>
                    <div class="stat-label">已看视频</div>
                  </div>
                  <div class="stat-box">
                    <div class="stat-num">47<span class="unit"> 分钟</span></div>
                    <div class="stat-label">观看时长</div>
                  </div>
                  <div class="stat-box">
                    <div class="stat-num" style="color: #4ade80; font-size: 14px; display: flex; align-items: center; justify-content: center; height: 23px;">硬核烧脑</div>
                    <div class="stat-label">最常情绪</div>
                  </div>
                </div>
                <div class="bar">
                  <div class="seg-junk" style="width: 15%; background: linear-gradient(90deg, #fb7185, #fda4af);"></div>
                  <div class="seg-neutral" style="width: 25%; background: linear-gradient(90deg, #fbbf24, #fcd34d);"></div>
                  <div class="seg-good" style="width: 60%; background: linear-gradient(90deg, #4ade80, #22c55e);"></div>
                </div>
                <div class="legend">
                  <span class="legend-junk">零食 <span class="num">15%</span></span>
                  <span class="legend-neutral">正餐 <span class="num">25%</span></span>
                  <span class="legend-good" style="color: #4ade80;">营养 <span class="num">60%</span></span>
                </div>
              </div>

              <!-- 区块2：深度洞察与分类排行的左右两列布局 -->
              <div class="diet-split">
                <div class="diet-section half">
                  <div class="top-cat-inline">
                    <span>分类占比</span>
                  </div>
                  <div class="top3-list">
                    <div class="top3-item">
                      <span class="top3-label">AI 科技</span>
                      <div class="top3-bar" style="--w: 61%; background: rgba(74, 222, 128, 0.2);"><div style="position: absolute; inset: 0; width: var(--w); background: rgba(74, 222, 128, 0.6); border-radius: 2px;"></div></div>
                      <span class="top3-count">14</span>
                    </div>
                    <div class="top3-item">
                      <span class="top3-label">搞笑段子</span>
                      <div class="top3-bar" style="--w: 18%; background: rgba(251, 191, 36, 0.2);"><div style="position: absolute; inset: 0; width: var(--w); background: rgba(251, 191, 36, 0.6); border-radius: 2px;"></div></div>
                      <span class="top3-count">4</span>
                    </div>
                    <div class="top3-item">
                      <span class="top3-label">治愈萌宠</span>
                      <div class="top3-bar" style="--w: 9%; background: rgba(251, 191, 36, 0.2);"><div style="position: absolute; inset: 0; width: var(--w); background: rgba(251, 191, 36, 0.6); border-radius: 2px;"></div></div>
                      <span class="top3-count">2</span>
                    </div>
                    <div class="top3-item">
                      <span class="top3-label">生活日常</span>
                      <div class="top3-bar" style="--w: 8%; background: rgba(251, 113, 133, 0.2);"><div style="position: absolute; inset: 0; width: var(--w); background: rgba(251, 113, 133, 0.6); border-radius: 2px;"></div></div>
                      <span class="top3-count">2</span>
                    </div>
                    <div class="top3-item">
                      <span class="top3-label">影视解说</span>
                      <div class="top3-bar" style="--w: 4%; background: rgba(251, 113, 133, 0.2);"><div style="position: absolute; inset: 0; width: var(--w); background: rgba(251, 113, 133, 0.6); border-radius: 2px;"></div></div>
                      <span class="top3-count">1</span>
                    </div>
                  </div>
                </div>

                <div class="diet-section half insights-col">
                  <div class="insight-item">
                    <div class="k">连续刷最多</div>
                    <div class="v">AI 编程 5条</div>
                  </div>
                  <div class="insight-item">
                    <div class="k">最久停留</div>
                    <div class="v">Claude 演示 112秒</div>
                  </div>
                  <div class="insight-item">
                    <div class="k">营养缺口</div>
                    <div class="v">放松/风景偏少</div>
                  </div>
                </div>
              </div>

              <div class="compare" style="background: rgba(74, 222, 128, 0.15); border: 1px solid rgba(74, 222, 128, 0.3); color: #4ade80;">✨ 比昨天多看 31 分钟知识，超级充实！</div>
            </div>
          </div>

          <!-- 模块2：今日来信 -->
          <div v-else-if="currentSlide === 1" class="module-card" key="m1">
            <div class="module-body letter-body">
              <div class="letter-item">
                <span class="label">至主人：</span>
                <span class="text">喵呜～主人！今天看你全神贯注看了好久 AI 编程的视频，虽然"食谱"有点太硬核了，但我陪你一起学习啦。<span class="read-more" @click="openLetter('owner')">查看详情 &gt;</span></span>
              </div>
              <div class="letter-item">
                <span class="label">食评：</span>
                <span class="text">唔…今天的食谱60%都是 Claude 和 AI 科技呢，好像在狂啃代码书呀，脑袋会不会有点累？<span class="read-more" @click="openLetter('diet')">查看详情 &gt;</span></span>
              </div>
              <div class="letter-item">
                <span class="label">自语：</span>
                <span class="text">呼噜呼噜～一直趴在你旁边看着屏幕上跳动的代码，不知道我这只小猫能不能帮你写几行呢？<span class="read-more" @click="openLetter('self')">查看详情 &gt;</span></span>
              </div>
            </div>
          </div>

          <!-- 模块3：来份食谱 -->
          <div v-else-if="currentSlide === 2" class="module-card" key="m2">
            <div class="module-body recipe-body">
              <div class="rec-item">
                <div class="rec-info-wrapper">
                  <div class="rec-icon" style="background-image:linear-gradient(135deg, rgba(180,150,90,0.3), rgba(80,55,25,0.45)), url('https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=300&q=80');">
                    <span class="shot-tag" style="background: rgba(239, 68, 68, 0.8);">萌宠</span>
                  </div>
                  <div class="rec-info">
                    <div class="rec-title">治愈系小猫合集 24 连击</div>
                    <div class="rec-attrs">
                      <span class="attr-negative">营养 -5</span>
                      <span class="attr-mood">情绪 +25</span>
                    </div>
                    <div class="rec-desc">#萌宠 · 给大脑放个假</div>
                  </div>
                </div>
                <button class="rec-btn">去观看</button>
              </div>
              <div class="rec-item">
                <div class="rec-info-wrapper">
                  <div class="rec-icon" style="background-image:linear-gradient(135deg, rgba(220,180,100,0.28), rgba(100,75,40,0.45)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80');">
                    <span class="shot-tag" style="background: rgba(59, 130, 246, 0.8);">风景</span>
                  </div>
                  <div class="rec-info">
                    <div class="rec-title">京都黄昏的鸭川一个人散步</div>
                    <div class="rec-attrs">
                      <span class="attr-nutrition">营养 +15</span>
                      <span class="attr-mood">情绪 +15</span>
                    </div>
                    <div class="rec-desc">#旅行风景 · 舒缓视觉疲劳</div>
                  </div>
                </div>
                <button class="rec-btn">去观看</button>
              </div>
              <div class="rec-item">
                <div class="rec-info-wrapper">
                  <div class="rec-icon" style="background-image:linear-gradient(135deg, rgba(180,140,70,0.28), rgba(80,55,25,0.45)), url('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=300&q=80');">
                    <span class="shot-tag" style="background: rgba(245, 158, 11, 0.8);">搞笑</span>
                  </div>
                  <div class="rec-info">
                    <div class="rec-title">年度沙雕名场面大盘点</div>
                    <div class="rec-attrs">
                      <span class="attr-negative">营养 -10</span>
                      <span class="attr-mood">情绪 +30</span>
                    </div>
                    <div class="rec-desc">#搞笑段子 · 开心最重要</div>
                  </div>
                </div>
                <button class="rec-btn">去观看</button>
              </div>
            </div>
          </div>

          <!-- 模块4：健康状态 -->
          <div v-else-if="currentSlide === 3" class="module-card" key="m3">
            <div class="module-body health-body">
              <div class="axis-row">
                <div class="axis-head">
                  <div class="axis-name">🍙 胖度</div>
                  <div class="axis-val">32<span class="axis-unit">/100</span><span class="delta up" style="color: #4ade80;">-16 ↓</span></div>
                </div>
                <div class="bar"><div class="fill" style="width:32%;background:linear-gradient(90deg, #60a5fa, #3b82f6);"></div></div>
              </div>
              
              <div class="axis-row">
                <div class="axis-head">
                  <div class="axis-name">☺ 情绪</div>
                  <div class="axis-val">65<span class="axis-unit">/100</span><span class="delta">-10 ↓</span></div>
                </div>
                <div class="bar"><div class="fill" style="width:65%;background:linear-gradient(90deg, #fcd34d, #fef3c7);"></div></div>
              </div>
              
              <div class="axis-row">
                <div class="axis-head">
                  <div class="axis-name">⚡ 活力</div>
                  <div class="axis-val">92<span class="axis-unit">/100</span><span class="delta up">+17 ↑</span></div>
                </div>
                <div class="bar"><div class="fill" style="width:92%;background:linear-gradient(90deg, #4ade80, #22c55e);"></div></div>
              </div>
              
              <div class="grade-row">
                <div class="grade-label">🌿 健康综合</div>
                <div class="grade-val">
                  <span class="grade-letter">S</span>
                  <span class="grade-trend" style="color: #4ade80;">↑</span>
                </div>
              </div>
              
              <div class="attribution">
                <div class="attribution-title">归因</div>
                <div class="attribution-item">· 胖度 ↓ 因 <span class="highlight">「碎片化娱乐适度减少」</span></div>
                <div class="attribution-item">· 情绪 ↓ 因 <span class="highlight">「高强度硬核学习消耗大」</span></div>
                <div class="attribution-item">· 活力 ↑ 因 <span class="highlight">「接触前沿AI知识 +17」</span></div>
              </div>
            </div>
          </div>

          <!-- 模块5：宠物圈 -->
          <div v-else-if="currentSlide === 4" class="module-card" key="m4">
            <div class="module-body friend-body">
              <div class="friend-entry">
                <div class="friend-avatar-wrap" @click="openImagePreview('/feedme_assets/pet-friend-1.png', '', 'rgba(0,0,0,0.2)')">
                  <img src="/feedme_assets/pet-friend-1.png" alt="小橘" />
                  <div class="online-dot"></div>
                </div>
                <div class="friend-meta">
                  <div class="name-row">
                    <span class="name">大橘为重</span>
                    <span class="user">@喵喵主人</span>
                  </div>
                  <div class="status-msg">刚看了一段萌宠视频 ✨</div>
                </div>
                <div class="friend-actions">
                  <button class="btn-icon liked" type="button">❤️ <span class="num">12</span></button>
                </div>
              </div>

              <div class="friend-entry">
                <div class="friend-avatar-wrap" @click="openImagePreview('/feedme_assets/pet-friend-3.png', '', 'rgba(0,0,0,0.2)')">
                  <img src="/feedme_assets/pet-friend-3.png" alt="胖橘球球" />
                  <div class="online-dot"></div>
                </div>
                <div class="friend-meta">
                  <div class="name-row">
                    <span class="name">胖橘球球</span>
                    <span class="user">@猫咪达人</span>
                  </div>
                  <div class="status-msg">正在狂刷美食视频 🍗</div>
                </div>
                <div class="friend-actions">
                  <button class="btn-icon liked" type="button">❤️ <span class="num">25</span></button>
                </div>
              </div>

              <div class="friend-entry">
                <div class="friend-avatar-wrap" style="background: rgba(255, 255, 255, 0.9);" @click="openImagePreview('/feedme_assets/pet-friend-fishing.png', 'object-fit: contain; transform: scale(1.1);', 'rgba(255, 255, 255, 0.9)')">
                  <img src="/feedme_assets/pet-friend-fishing.png" alt="钓鱼猫" style="object-fit: contain; transform: scale(1.1);"/>
                  <div class="online-dot"></div>
                </div>
                <div class="friend-meta">
                  <div class="name-row">
                    <span class="name">钓鱼大师</span>
                    <span class="user">@海王星</span>
                  </div>
                  <div class="status-msg">摸鱼中... 🐟</div>
                </div>
                <div class="friend-actions">
                  <button class="btn-icon" type="button">♡ <span class="num">8</span></button>
                </div>
              </div>
              
              <div class="friend-entry">
                <div class="friend-avatar-wrap" style="background: linear-gradient(135deg, #fde68a, #fcd34d);" @click="openImagePreview('/feedme_assets/cat/cat-traveling.png', 'object-fit: contain; transform: scale(1.3);', 'linear-gradient(135deg, #fde68a, #fcd34d)')">
                  <img src="/feedme_assets/cat/cat-traveling.png" alt="小旅" style="object-fit: contain; transform: scale(1.3);"/>
                </div>
                <div class="friend-meta">
                  <div class="name-row">
                    <span class="name">背包小旅</span>
                    <span class="user">@旅行猫奴</span>
                  </div>
                  <div class="status-msg">在看绝美的风景视频 🏔️</div>
                </div>
                <div class="friend-actions">
                  <button class="btn-icon" type="button">♡ <span class="num">7</span></button>
                </div>
              </div>

              <div class="friend-entry">
                <div class="friend-avatar-wrap" style="background: linear-gradient(135deg, #e2e8f0, #94a3b8);" @click="openImagePreview('/feedme_assets/cat/cat-thin-sad.png', 'object-fit: contain; transform: scale(1.3);', 'linear-gradient(135deg, #e2e8f0, #94a3b8)')">
                  <img src="/feedme_assets/cat/cat-thin-sad.png" alt="小愁" style="object-fit: contain; transform: scale(1.3);"/>
                </div>
                <div class="friend-meta">
                  <div class="name-row">
                    <span class="name">忧郁小愁</span>
                    <span class="user">@忧郁猫控</span>
                  </div>
                  <div class="status-msg">安静地听着音乐发呆 🎵</div>
                </div>
                <div class="friend-actions">
                  <button class="btn-icon" type="button">♡ <span class="num">3</span></button>
                </div>
              </div>
            </div>
          </div>

        </transition>
      </div>

      <!-- 详情弹窗 -->
      <transition name="fade">
        <div v-if="showLetterDetail" class="letter-modal-overlay" @click="showLetterDetail = false">
          <div class="letter-modal-content" @click.stop>
            <div class="modal-header">
              <h3>{{ letterData[currentLetterType].title }}</h3>
              <button class="close-btn" @click="showLetterDetail = false">✕</button>
            </div>
            <div class="modal-body">
              <p v-for="(p, i) in letterData[currentLetterType].paragraphs" :key="i">{{ p }}</p>
            </div>
          </div>
        </div>
      </transition>

      <!-- 图片放大预览弹窗 -->
      <transition name="fade">
        <div v-if="showImagePreview" class="image-preview-overlay" @click="showImagePreview = false">
          <div class="image-preview-container" :style="{ background: previewImageBg }" @click.stop>
            <img :src="previewImageSrc" :style="previewImageStyle" />
            <button class="btn-close-preview" @click="showImagePreview = false">✕</button>
          </div>
        </div>
      </transition>

      <!-- 聊天弹窗 -->
      <transition name="fade">
        <div v-if="showChatModal" class="chat-modal-overlay" @click="showChatModal = false" @touchstart.stop @mousedown.stop @pointerdown.stop>
          <div class="chat-modal" @click.stop @touchstart.stop @mousedown.stop @pointerdown.stop style="pointer-events: auto;">
            <div class="chat-header">
              <span class="chat-title">和 Pettok 聊天</span>
              <button class="btn-close" @click="showChatModal = false">✕</button>
            </div>
            <div class="chat-messages" ref="chatMessagesRef">
              <div v-for="(msg, i) in chatMessages" :key="i" :class="['chat-bubble', msg.role]">
                {{ msg.content }}
              </div>
            </div>
            <div class="chat-input-area">
              <input v-model="userInput" @keyup.enter="sendMessage" @touchstart.stop @mousedown.stop @pointerdown.stop @click.stop placeholder="跟 Pettok 说点什么..." />
              <button @click="sendMessage">发送</button>
            </div>
          </div>
        </div>
      </transition>

      <div class="bottom-hint">
        <span>⏫ 上滑继续看视频</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentSlide = ref(0)
const tabs = ['今日饮食', '今日来信', '来份食谱', '健康状态', '宠物圈']

const showLetterDetail = ref(false)
const currentLetterType = ref<'owner' | 'diet' | 'self'>('owner')

// 宠物圈图片预览状态
const showImagePreview = ref(false)
const previewImageSrc = ref('')
const previewImageStyle = ref('')
const previewImageBg = ref('')

// 聊天功能状态
const showChatModal = ref(false)
const userInput = ref('')
const chatMessagesRef = ref<HTMLElement | null>(null)
const chatMessages = ref([
  { role: 'pet', content: '喵呜～主人你终于来找我玩啦！有什么心事都可以跟我说哦 🐾' }
])

const sendMessage = () => {
  if (!userInput.value.trim()) return
  
  const text = userInput.value.trim()
  chatMessages.value.push({ role: 'user', content: text })
  userInput.value = ''
  
  // 滚动到底部
  setTimeout(() => {
    if (chatMessagesRef.value) {
      chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight
    }
  }, 50)

  // 模拟回复
  setTimeout(() => {
    let reply = '呼噜呼噜～听不懂但在陪你哦！✨'
    if (text.includes('喵')) {
      reply = '喵喵喵！我们是在对暗号吗？😸'
    } else if (text.includes('吃') || text.includes('饿')) {
      reply = '说到吃，我的小鱼干在哪里！🐟'
    } else if (text.includes('累') || text.includes('辛苦')) {
      reply = '主人辛苦啦！来，给你摸摸我的肚皮放松一下～☁️'
    } else if (text.includes('代码') || text.includes('AI') || text.includes('编程')) {
      reply = '你又在学那些难懂的东西啦？虽然本喵看不懂，但会一直为你加油的！💻🐾'
    } else {
      reply = '喵呜～虽然不知道主人在说什么，但是我会一直乖乖陪着你的！(ฅ•ω•ฅ)'
    }
    
    chatMessages.value.push({ role: 'pet', content: reply })
    
    setTimeout(() => {
      if (chatMessagesRef.value) {
        chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight
      }
    }, 50)
  }, 600)
}

const openImagePreview = (src: string, imgStyle = '', bgStyle = '') => {
  previewImageSrc.value = src
  previewImageStyle.value = imgStyle
  previewImageBg.value = bgStyle
  showImagePreview.value = true
}

const letterData = {
  owner: {
    title: '至主人',
    paragraphs: [
      '喵呜～主人！今天我又窝在你旁边看你刷了好久手机呐 🐱',
      '你一直在看那些叫什么 Claude、AI 编程的视频，眉头都皱起来了喵！虽然我也看不懂那些跳动的代码，但我知道你一定是在努力学习很厉害的东西 ✨😸',
      '不过这些硬核的知识太烧脑啦……连本喵看着都觉得头晕呢 ⭐',
      '好啦好啦～等一下我们一起挑一条轻松的萌宠视频，给大脑放个假，好不好呀？🐾 喵！'
    ]
  },
  diet: {
    title: '食评',
    paragraphs: [
      '唔…主人今天的食谱我悄悄统计过啦 📋',
      'AI 科技 61%、搞笑段子 26%、小萌宠 13%——这不就是"狂啃代码书"嘛！呼噜呼噜～你这样下去大脑会超载的哦 🐱😅',
      '我建议你呀，看完 3 条硬核的科技视频之后，主动去找一条搞笑类或者风景类的尝尝看～给脑袋换换口味 ✨',
      '这样既能学到新知识，又不会掉进"信息过载"的坑里～喵！🌟'
    ]
  },
  self: {
    title: '自语',
    paragraphs: [
      '呼噜呼噜～其实今天本喵也有点困困的了 💤😌',
      '你全神贯注看屏幕的时候，我一直趴在你旁边陪着你呀。看着你思考、看着你记录、看着你偶尔叹气……',
      '有时候我会偷偷想，要是我也能帮主人写几行那个叫代码的东西就好了 🐱',
      '不知道我做得够不够好……但我会一直在这里的喵！陪你一起学、一起进步。如果有一天你想停下来，我也陪你一起，安安静静地晒太阳 ☀️🐾'
    ]
  }
}

function openLetter(type: 'owner' | 'diet' | 'self') {
  currentLetterType.value = type
  showLetterDetail.value = true
}
</script>

<style scoped lang="less">
.feedme-card-overlay {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top, #362c24 0%, #120e0b 100%); 
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 改为顶部对齐，通过 padding 往下移 */
  z-index: 999;
  color: #fff;
  padding: 100px 0 20px 0; /* 顶部留出 100px 的高度，不遮挡抖音顶部，同时为下方留空间 */
  box-sizing: border-box;
}

.feedme-card {
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 800px; /* 限制最大高度防止在特别长的屏幕上被拉伸过度 */
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
    color: rgba(255,255,255,0.9);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 10px;
  }
}

  .main-content {
    border-radius: 12px;
    padding: 0 20px;
    text-align: center;
    margin-bottom: 4px; /* 进一步减小间距，为下方模块腾出空间 */

    .pet-container {
      height: 90px; /* 进一步缩小宠物容器以适应整体下移 */
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 4px;
      position: relative;
    }
    
    .pet-bg-circle {
      position: absolute;
      width: 76px; /* 缩小背景圈 */
      height: 76px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0) 100%);
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
      z-index: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .pixel-cat {
      width: 70px; /* 缩小宠物 */
      height: 70px;
      background-image: url('/zip-3/spritesheet.webp');
      background-size: 560px 700px; /* 适配缩小的比例 */
      background-position: 0 0;
      animation: cat-idle 2s steps(6) infinite; /* 将动画时长从 1s 改为 2s，放慢眨眼和动作速度 */
      position: relative;
      z-index: 1;
    }

    .chat-btn {
      position: absolute;
      left: 50%;
      bottom: 2px;
      transform: translateX(18px);
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.8);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      font-size: 13px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      transition: all 0.3s ease;
    }
    .chat-btn:hover, .chat-btn:active {
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
    }

  @keyframes cat-idle {
    from { background-position: 0 0; }
    to { background-position: -420px 0; }
  }

  .pet-name {
    margin: 2px 0 2px 0;
    font-size: 15px;
    color: #fff;
    text-align: center;
    font-weight: 600;
  }
}

/* Tab 导航区 */
.tabs-container {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 8px;
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
  padding: 12px; /* 进一步压缩内边距 */
  flex: 1;
  overflow: hidden; 
  font-size: 13px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.letter-body {
  gap: 12px;
  justify-content: center !important;
  .letter-item {
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,0.15);
    padding: 14px;
    border-radius: 12px;
    .label {
      color: #fcd34d;
      font-weight: 600;
      margin-bottom: 4px;
      font-size: 13px;
    }
    .text {
      line-height: 1.5;
      color: #fff;
      font-size: 12px;
    }
  }
}

.read-more {
  color: #fcd34d;
  font-size: 12px;
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

/* 图片预览弹窗样式 */
.image-preview-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-preview-container {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.image-preview-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.btn-close-preview {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
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

.grid-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  
  .stat-item {
    background: rgba(0, 0, 0, 0.15);
    padding: 8px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .full-width {
    grid-column: span 2;
  }
  .label {
    font-size: 11px;
    color: #a0b0a5;
    margin-bottom: 4px;
  }
  .value {
    font-size: 13px;
    color: #fff;
    font-weight: 500;
  }
  .highlight-red { color: #ff6b6b; }
}

.diet-body {
  padding: 12px 14px !important;
  color: #fff;
  gap: 8px;

  .diet-section {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    padding: 8px 10px;
  }

  .stats-row {
    display: flex; gap: 6px; margin-bottom: 6px;
  }
  .stat-box {
    flex: 1;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 6px 4px;
    display: flex; flex-direction: column; align-items: center;
  }
  .stat-num {
    color: #fcd34d; font-size: 18px; font-weight: 800;
    .unit { font-size: 10px; font-weight: 500; color: rgba(255,255,255,0.7); }
  }
  .stat-label {
    color: rgba(255,255,255,0.8);
    font-size: 10px; letter-spacing: 0.5px;
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
    font-size: 10px; color: rgba(255,255,255,0.7);
  }
  .legend .num { font-weight: 700; }
  .legend-junk .num { color: #fda4af; }
  .legend-neutral .num { color: #fcd34d; }
  .legend-good .num { color: #fde68a; }

  .diet-split {
    display: flex;
    gap: 8px;
  }
  .half {
    flex: 1;
    min-width: 0;
    padding: 8px !important;
  }

  .top-cat-inline {
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding-bottom: 4px; margin-bottom: 4px;
    color: rgba(255,255,255,0.9); font-size: 11px; font-weight: 700;
  }
  .top3-list {
    display: flex; flex-direction: column; gap: 6px;
  }
  .top3-item {
    display: flex; align-items: center; gap: 6px;
    font-size: 10px;
  }
  .top3-label { color: rgba(255,255,255,0.8); flex-shrink: 0; width: 45px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
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
  .top3-count { color: rgba(255,255,255,0.6); font-size: 9px; flex-shrink: 0; width: 16px; text-align: right; }
  
  .insights-col {
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: space-between;
  }
  .insight-item {
    padding: 4px 6px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .insight-item .k {
    color: rgba(255,255,255,0.6);
    font-size: 9px;
    margin-bottom: 2px;
  }
  .insight-item .v {
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.2;
  }
  .compare {
    padding: 6px;
    background: rgba(245, 158, 11, 0.15);
    border: 1px solid rgba(245, 158, 11, 0.3);
    border-radius: 8px;
    color: #fcd34d;
    font-size: 11px;
    text-align: center;
    font-weight: 600;
  }
}

.recipe-body {
  gap: 12px;
  .rec-item {
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 12px;
  }
  .rec-info-wrapper {
    display: flex;
    align-items: center;
    flex: 1;
    overflow: hidden;
  }
  .rec-icon {
    width: 52px;
    height: 52px;
    border-radius: 8px;
    flex-shrink: 0;
    background-size: cover;
    background-position: center;
    position: relative;
    border: 1px solid rgba(255,255,255,0.12);
    box-shadow: 0 6px 14px rgba(0,0,0,0.3);
    margin-right: 10px;
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
    padding: 2px 5px;
    border-radius: 999px;
    background: rgba(120, 53, 15, 0.8);
    color: #fef3c7;
    font-size: 9px;
    line-height: 1.3;
  }
  .rec-info {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .rec-title {
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rec-attrs {
    display: flex;
    gap: 10px;
    font-size: 11px;
    font-weight: 600;
  }
  .attr-nutrition { color: #f59e0b; }
  .attr-mood { color: #fcd34d; }
  .attr-negative { color: #ef4444; }
  .rec-desc {
    font-size: 11px;
    color: rgba(255,255,255,0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rec-btn {
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.25);
    color: #fff;
    padding: 5px 12px;
    border-radius: 14px;
    font-size: 11px;
    margin-left: 8px;
    cursor: pointer;
    font-weight: 600;
  }
}

.health-body {
  padding: 12px 14px !important;
  
  .axis-row {
    margin-bottom: 8px;
  }
  .axis-row:last-child { margin-bottom: 0; }
  .axis-head {
    display: flex; justify-content: space-between; align-items: baseline;
    margin-bottom: 4px;
  }
  .axis-name {
    color: #fff; font-size: 12px; font-weight: 700;
    display: flex; align-items: center; gap: 6px;
  }
  .axis-val {
    color: #fff; font-size: 15px; font-weight: 800;
  }
  .axis-unit {
    color: rgba(255,255,255,0.6); font-size: 10px; font-weight: 500;
  }
  .delta {
    color: #ef4444; font-size: 10px; font-weight: 700;
    margin-left: 6px;
  }
  .delta.up { color: #fcd34d; }
  
  .bar {
    width: 100%; height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px; overflow: hidden;
    position: relative;
  }
  .bar .fill {
    height: 100%;
    border-radius: 3px;
  }
  
  .grade-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 10px 12px;
    background: rgba(245, 158, 11, 0.15);
    border-radius: 10px;
    border: 1px solid rgba(245, 158, 11, 0.25);
    margin: 4px 0;
  }
  .grade-label {
    color: #fff; font-size: 12px; font-weight: 700;
    display: flex; align-items: center; gap: 6px;
  }
  .grade-val {
    display: flex; align-items: center; gap: 8px;
  }
  .grade-letter {
    color: #fcd34d; font-size: 20px; font-weight: 800;
  }
  .grade-trend {
    color: #f59e0b; font-size: 14px; font-weight: 700;
  }
  
  .attribution {
    padding: 10px 12px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
  .attribution-title {
    color: #fff;
    font-size: 11px; font-weight: 700;
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  }
  .attribution-item {
    color: rgba(255,255,255,0.8);
    font-size: 10px;
    line-height: 1.4;
    margin-bottom: 4px;
  }
  .attribution-item:last-child { margin-bottom: 0; }
  .attribution-item .highlight {
    color: #fcd34d; font-weight: 700;
  }
}

.friend-body {
  gap: 6px;
  padding: 8px 10px !important;
  justify-content: space-evenly;
  .friend-entry {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 10px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    transition: background 0.3s;
  }
  .friend-entry:active {
    background: rgba(255, 255, 255, 0.08);
  }
  .friend-avatar-wrap {
    position: relative;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  .friend-avatar-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .online-dot {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 8px;
    height: 8px;
    background: #4ade80;
    border: 2px solid #362c24;
    border-radius: 50%;
    z-index: 2;
  }
  /* Remove overflow hidden on wrap if we want dot outside */
  .friend-avatar-wrap {
    overflow: visible;
  }
  .friend-avatar-wrap img {
    border-radius: 10px;
  }
  .friend-meta {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .name-row {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 2px;
  }
  .name-row .name {
    color: rgba(255,255,255,0.95);
    font-size: 12px;
    font-weight: 600;
  }
  .name-row .user {
    color: rgba(255,255,255,0.4);
    font-size: 9px;
  }
  .status-msg {
    color: rgba(255,255,255,0.65);
    font-size: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .friend-actions {
    flex-shrink: 0;
  }
  .btn-icon {
    padding: 4px 8px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.6);
    font-size: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid transparent;
    cursor: pointer;
  }
  .btn-icon.liked {
    color: #ef4444;
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.2);
  }
}

/* 聊天弹窗样式 */
.chat-modal-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto; /* 确保遮罩层可以拦截点击 */
}

.chat-modal {
  width: 320px;
  height: 440px;
  background: rgba(40, 32, 26, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}
.chat-title { 
  color: #fff; 
  font-weight: 700; 
  font-size: 14px; 
}
.btn-close {
  background: none; border: none; color: rgba(255,255,255,0.5); font-size: 16px; cursor: pointer;
}

.chat-messages {
  flex: 1; 
  overflow-y: auto; 
  padding: 16px;
  display: flex; 
  flex-direction: column; 
  gap: 12px;
  
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 2px; }
}

.chat-bubble {
  max-width: 85%; 
  padding: 10px 14px; 
  border-radius: 14px; 
  font-size: 13px; 
  line-height: 1.4;
  word-break: break-word;
}
.chat-bubble.pet {
  align-self: flex-start; 
  background: rgba(255, 255, 255, 0.1); 
  color: #fff;
  border-bottom-left-radius: 4px;
}
.chat-bubble.user {
  align-self: flex-end; 
  background: rgba(74, 222, 128, 0.15); 
  color: #4ade80; 
  border: 1px solid rgba(74, 222, 128, 0.3);
  border-bottom-right-radius: 4px;
}

.chat-input-area {
  display: flex; 
  gap: 8px; 
  padding: 12px 16px; 
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0,0,0,0.2);
  pointer-events: auto; /* 确保输入区域可以接收点击事件 */
}
.chat-input-area input {
  flex: 1; 
  background: rgba(255,255,255,0.1); 
  border: 1px solid rgba(255,255,255,0.15); 
  border-radius: 18px;
  padding: 0 14px; 
  color: #fff; 
  font-size: 13px; 
  outline: none; 
  height: 36px;
  pointer-events: auto; /* 确保输入框可以被点击和聚焦 */
  user-select: auto;
  -webkit-user-select: auto;
}
.chat-input-area input::placeholder {
  color: rgba(255,255,255,0.4);
}
.chat-input-area button {
  background: #fcd34d; 
  color: #451a03; 
  border: none; 
  border-radius: 18px; 
  padding: 0 16px; 
  font-weight: 700; 
  font-size: 13px; 
  cursor: pointer; 
  height: 36px;
  transition: opacity 0.2s;
  pointer-events: auto; /* 确保按钮可以被点击 */
}
.chat-input-area button:active {
  opacity: 0.8;
}

.bottom-hint {
  text-align: center;
  font-size: 12px;
  color: rgba(255,255,255,0.6);
  padding-bottom: 12px;
  margin-top: 10px;
}
</style>
EOF