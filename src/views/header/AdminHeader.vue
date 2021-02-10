<template>
    <a-layout-header :class="[headerTheme, 'admin-header']">
        <div :class="['']"></div>
    </a-layout-header>
</template>

<script>
export default {
    name: 'AdminHeader',
    components: {},
    props: ['collapsed', 'menuData'],
    data() {
        return {};
    },
};
</script>

<style lang="less" scoped>
@import 'index';
</style>
