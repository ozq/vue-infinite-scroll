<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  isMuted: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['end-reached']);

const boundary = useTemplateRef('boundary');
let observer;

const startObserver = () => {
  observer = new IntersectionObserver((entries) => {
    if (props.isMuted) return;
    const entry = entries[0];
    if (entry.isIntersecting) {
      emits('end-reached');
    }
  });
  if (!(boundary.value instanceof HTMLElement)) {
    throw new Error('InfiniteScroll boundary element is not found');
  }
  observer.observe(boundary.value);
};

const stopObserver = () => observer.disconnect();

onMounted(() => startObserver());
onBeforeUnmount(() => stopObserver());
</script>

<template>
  <div class="wrapper">
    <component :is="tag">
      <slot></slot>
    </component>
    <div class="boundary" ref="boundary"></div>
    <div class="loader" v-if="props.isLoading">
      <slot name="loader">🛞</slot>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin {
  from {
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) rotate(360deg);
  }
}

.wrapper {
  position: relative;

  & ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
}

.boundary {
  height: 1px;
  width: 100%;
}

.loader {
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translate(-50%);
  font-size: 26px;
  animation: spin 2s linear infinite;
}
</style>
