<template>
  <div class="boulit-quote">
    <span class="boulit-quote__mark boulit-quote__mark--open" aria-hidden="true">&ldquo;</span>
    <p class="boulit-quote__text"><slot /></p>
    <span class="boulit-quote__mark boulit-quote__mark--close" aria-hidden="true">&rdquo;</span>
  </div>
</template>

<style scoped>
.boulit-quote {
  position: relative;
  padding: 1.1rem 2.6rem 1.1rem 2.8rem;
  border-left: 5px solid var(--boulit-accent);
  border-radius: 0 var(--boulit-radius) var(--boulit-radius) 0;
  background: var(--boulit-accent-soft);
  box-shadow: 0 2px 6px rgba(244, 81, 0, 0.08), 0 8px 24px rgba(244, 81, 0, 0.06);
}

.boulit-quote__mark {
  position: absolute;
  font-size: 3.5rem;
  line-height: 1;
  font-family: Georgia, "Times New Roman", serif;
  color: var(--boulit-accent);
  opacity: 0.55;
  pointer-events: none;
  user-select: none;
}

.boulit-quote__mark--open {
  top: -0.3rem;
  left: 0.45rem;
}

.boulit-quote__mark--close {
  right: 0.5rem;
  bottom: -1.55rem;
}

.boulit-quote__text {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 650;
  font-style: italic;
  line-height: 1.55;
  color: var(--boulit-ink);
}
</style>
