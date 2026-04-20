<template>
  <div class="max-w-md w-full mx-auto">
    <!-- 头像 + 简介 -->
    <div class="flex flex-col items-center mb-8">
      <img
        src="../assets/avatar.jpg"
        alt="头像"
        class="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg mb-4"
      />
      <p class="text-gray-600 dark:text-gray-400 text-center">请开始您的灵感记录</p>
    </div>

    <!-- 创建的LinkButton组件修饰a标签 -->
    <div class="flex flex-col gap-3 border border-gray-200 px-5 py-4 rounded-2xl">
      <div class="flex flex-col gap-2">
        <span>Question 1 :你是谁？</span>
        <input type="text" class="border px-2 py-1 rounded border-black" />
        <span>Question 2 :你的灵感来源？</span>
        <input type="text" class="border border-black" />
        <span>Question 3 :请详细讲解一下你的来源？</span>
        <input type="text" class="border border-black" />
        <span>Question 4 :你需要什么帮助？</span>
        <input type="text" class="border border-black" />
      </div>
      <button class="border px-4 py-2 rounded mx-auto block">commit</button>
      <div class="flex justify-center">
        <button class="border px-4 py-2 rounded hover:bg-gray-200 transition">Commit</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
