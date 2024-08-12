<template>
    <!-- header -->
    <header ref="headerRef" id="header">
        <div class="inner flex flex_between flex_a_center">
            <h1 class="logo text_bold">GY.</h1>
            <nav id="nav">
                <ul class="flex">
                    <li v-for="(result, index) in nav1" :key="result"
                        :ref="(el) => navItemsRefs[index] = el"
                        :class="['depth01', `depth_${result}`, `depth01_${index}`]">
                        <a @click.prevent="handleClick(index+1)" href="">{{ fnToUpperCase(result) }}</a>
                    </li>
                </ul>
            </nav>
            <a href="https://github.com/gayeongbusiness24/gayeongbusiness24.github.io/tree/master" class="icon_github" 
            title="포트폴리오 깃허브 주소" target="_blank"></a>
        </div>
    </header>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, onMounted } from 'vue'
const headerRef = ref(null)
const props = defineProps({ // eslint-disable-line no-unused-vars
    nav1: Array,
    activeIndex: Number,
})
const emit = defineEmits(['scrollToSection, headerHeightChanged'])
const navItemsRefs = ref([])
const handleClick = (index) => {
    emit('scrollToSection', index)
}
watch(() => props.activeIndex, (newIndex) => {
    navItemsRefs.value.forEach((item, index) => {
        if (item) {
            if (index === newIndex) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        }
    })
}, { immediate: true })

// 대문자
function fnToUpperCase(param){
    return param.toUpperCase();
}

onMounted(() => {
  const height = headerRef.value ? headerRef.value.offsetHeight : 0
  emit('headerHeightChanged', height)
})

</script>