<template>
  <canvas ref="_can" :width="width" :height="height"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const _can = ref(null)
const { width, height } = $myProp.stage
const { cellSize } = $myProp
onMounted(() => {
  const ctx = _can.value.getContext('2d')
  ctx.strokeStyle = 'rgba(255,255,255,0.05)'
  ctx.fillStyle = 'rgba(255,255,255,0.05)'
  for (let x = 0; x < width; x += cellSize) {
    for (let y = 0; y < height; y += cellSize) {
      ctx.fillRect(x - 1, y - 1, 2, 2)
    }
  }
})
</script>
