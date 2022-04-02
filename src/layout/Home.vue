<template>
    <div class="about">
        <v-header />
        <v-sidebar />
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <v-tags></v-tags>
            <div class="content">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
                <!-- <el-backtop target=".content"></el-backtop> -->
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from "vue";
import vHeader from "../layout/Header.vue";
import vSidebar from "../layout/Sidebar.vue";
import vTags from "../layout/Tags.vue";
import store from '@/store';

export default {
    components: {
        vHeader,
        vSidebar,
        vTags,
    },
    setup() {
        const tagsList = computed(() =>
            store.state.tagsList.value.map((item) => item.name)
        );
        const collapse = computed(() => store.state.collapse.value);
        return {
            tagsList,
            collapse,
        };
    },
};
</script>
