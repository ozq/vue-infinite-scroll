<script setup>
/**
 * @type {Object}
 * @property {User} user - The user to be displayed
 */
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const fullName = computed(() => {
  const { title, first, last } = props.user.name;
  return [title, first, last].filter((value) => !!value).join(' ');
});

const avatarSrc = computed(() => props.user.picture.thumbnail);
</script>

<template>
  <div class="card">
    <img class="avatar" :src="avatarSrc" :alt="fullName"/>
    <div class="content">
      <strong>{{ fullName }}</strong>
      <a :href="`mailto:${user.email}`">{{ user.email }}</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  margin: 16px 0;
  background-color: var(--color-primary);
  border: 2px solid var(--color-accent);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 100%;
}
</style>
