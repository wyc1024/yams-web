import { ref } from 'vue'
// import {createStore} from 'vuex'

// export default createStore({
//     state: {
//         tagsList: [],
//         collapse: false
//     },
//     mutations: {
//         delTagsItem(state, data) {
//             state
//                 .tagsList
//                 .splice(data.index, 1);
//         },
//         setTagsItem(state, data) {
//             state
//                 .tagsList
//                 .push(data)
//         },
//         clearTags(state) {
//             state.tagsList = []
//         },
//         closeTagsOther(state, data) {
//             state.tagsList = data;
//         },
//         closeCurrentTag(state, data) {
//             for (let i = 0, len = state.tagsList.length; i < len; i++) {
//                 const item = state.tagsList[i];
//                 if (item.path === data.$route.fullPath) {
//                     if (i < len - 1) {
//                         data
//                             .$router
//                             .push(state.tagsList[i + 1].path);
//                     } else if (i > 0) {
//                         data
//                             .$router
//                             .push(state.tagsList[i - 1].path);
//                     } else {
//                         data
//                             .$router
//                             .push("/");
//                     }
//                     state
//                         .tagsList
//                         .splice(i, 1);
//                     break;
//                 }
//             }
//         },
//         // 侧边栏折叠
//         handleCollapse(state, data) {
//             state.collapse = data;
//         }
//     },
//     actions: {},
//     modules: {}
// })

const tagsList = ref([])
const collapse = ref(false)

export default {
    state: {
        tagsList,
        collapse,
    },
    delTagsItem(data) {
        tagsList.value.splice(data.index, 1);
    },
    setTagsItem(data) {
        tagsList.value.push(data)
    },
    clearTags() {
        tagsList.value.splice(0)
    },
    closeTagsOther(data) {
        tagsList.value = data;
    },
    closeCurrentTag(data) {
        for (let i = 0, len = tagsList.value.length; i < len; i++) {
            const item = tagsList.value[i];
            if (item.path === data.$route.fullPath) {
                if (i < len - 1) {
                    data
                        .$router
                        .push(tagsList.value[i + 1].path);
                } else if (i > 0) {
                    data
                        .$router
                        .push(tagsList.value[i - 1].path);
                } else {
                    data
                        .$router
                        .push("/");
                }
                tagsList.value.splice(i, 1);
                break;
            }
        }
    },
    // 侧边栏折叠
    handleCollapse(data) {
        collapse.value = data;
    }

}