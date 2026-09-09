<script setup lang="ts">
import { computed } from 'vue'
import { createPaperTexture } from '../styles/textures/crumpled-paper'

const props = defineProps<{
  seed?: number
}>()

const instanceSeed = Math.floor(Math.random() * 4294967296)
const texture = computed(() => createPaperTexture(props.seed ?? instanceSeed))
</script>

<template>
  <div class="boulit-paper" :style="{ '--boulit-paper-texture': texture }">
    <slot />
  </div>
</template>

<style scoped>
.boulit-paper {
  position: relative;
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  border: 1px solid #e1dbce;
  border-radius: 2px;
  background:
    var(--boulit-paper-texture) center / 100% 100% no-repeat,
    repeating-linear-gradient(0deg, transparent 0 1.45rem, rgba(100, 123, 149, 0.1) 1.45rem 1.5rem),
    linear-gradient(155deg, #fffefb, #f7f3e9);
  box-shadow: inset 0 0 1.5rem rgba(96, 85, 63, 0.035),
    1px 3px 5px rgba(36, 43, 48, 0.08),
    5px 12px 20px rgba(36, 43, 48, 0.12);
  color: var(--boulit-ink);
  font-family: "Patrick Hand", cursive;
  transform: rotate(1deg);
}

.boulit-paper::after {
  content: "";
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 1.35rem;
  height: 1.35rem;
  background: linear-gradient(135deg, #e6dfd1 49%, var(--boulit-surface) 51%);
  pointer-events: none;
}

.boulit-paper::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: -0.85rem;
  left: 50%;
  width: 7.5rem;
  height: 1.9rem;
  background:
    repeating-linear-gradient(0deg, transparent 0 2px, rgba(255, 255, 255, 0.06) 2px 3px),
    repeating-linear-gradient(90deg, transparent 0 3px, rgba(0, 0, 0, 0.2) 3px 4px),
    #202020;
  clip-path: polygon(
    2% 0, 98% 0, 100% 12%, 98% 26%, 100% 42%, 98% 58%,
    100% 74%, 98% 88%, 100% 100%, 0 100%, 2% 84%, 0 68%,
    2% 52%, 0 36%, 2% 20%, 0 8%
  );
  transform: translateX(-50%) rotate(-5deg);
  pointer-events: none;
}
</style>
