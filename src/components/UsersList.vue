<script setup>
import { UserApi } from '@/api/User';
import InfiniteScroll from '@/components/InfiniteScroll';
import UserCard from '@/components/UserCard';

/**
 * The list of fetched users
 * @type {Ref<User[]>}
 */
const users = ref([]);
const pageSize = 30;
let page = ref(0);
let isLoading = ref(false);

const fetchUsers = async () => {
  if (isLoading.value) return;
  try {
    isLoading.value = true;
    const result = await UserApi.fetchAll({ page: page.value, size: pageSize });
    if (result.length === 0) return;
    users.value.push(...result);
    page.value++;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const onEndReached = () => {
  if (isLoading.value) return;
  fetchUsers();
};

fetchUsers();
</script>

<template>
  <InfiniteScroll tag="ul" :is-loading="isLoading" @end-reached="onEndReached">
    <li v-for="user in users" :key="user.id">
      <UserCard :user="user"/>
    </li>
  </InfiniteScroll>
</template>
