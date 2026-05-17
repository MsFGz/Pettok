<template>
  <div class="pet-cat-container">
    <div class="pixel-cat-avatar" :style="catStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'

const position = inject<any>('position', { value: { index: 0 } })

// 根据视频索引决定猫咪形象
// index < 3 表示卡片前面的视频（0, 1, 2），使用 zip-4 没帽子的透明描边小猫
// index >= 3 表示卡片本身及之后的视频，使用 zip-3 有帽子的小猫
const catStyle = computed(() => {
  const currentIndex = position.value?.index ?? 0
  if (currentIndex < 3) {
    return {
      backgroundImage: "url('/zip-4/cat_no_hat_transparent_outline_only.webp')"
    }
  } else {
    return {
      backgroundImage: "url('/zip-3/spritesheet.webp')"
    }
  }
})
</script>

<style scoped lang="less">
.pet-cat-container {
  position: absolute;
  /* Hover perfectly over the user avatar */
  top: -65px; 
  left: 50%;
  transform: translateX(-50%) translateZ(0);
  z-index: 10;
  /* We want to click the cat, so enable pointer events */
  pointer-events: auto;
  will-change: transform;
}

.pixel-cat-avatar {
  width: 70px;
  height: 70px;
  /* background-image is now controlled dynamically via inline style */
  background-size: 560px 700px; /* 8列 x 10行，每帧70x70 */
  background-position: 0 0;
  animation: avatar-cat-idle 2s steps(6) infinite; /* 同样将侧边栏小猫的动画放慢到 2s */
  cursor: pointer;
}

@keyframes avatar-cat-idle {
  from { background-position: 0 0; }
  to { background-position: -420px 0; }
}
</style>
