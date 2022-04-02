<template>
    <div>
        <el-button @click="click123()">Default</el-button>
    </div>
</template>

<script lang="jsx">
import useModal from "@/hooks/useModal";

export default {
    name: "dashboard",
    components: {},
    setup() {
        const myc = (context) => {
            console.log('context context', context)
            return <div style="width: 900px; max-height: 80vh;">
                <div style="color: red; width: 800px">按住头部移动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住左边距拖动！！！！！！！！！！！！！！！</div>
                <div style="color: red">按住右边距拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
                <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>

                <h2>Demonstrating the Box Model</h2>

                <p>The CSS box model is essentially a box that wraps around every HTML element. It consists of: borders, padding, margins, and the actual content.</p>

                <div style="background-color: lightgrey; width: 600px; border: 15px solid green; padding: 50px; margin: 20px;">This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                <el-button onClick={() => { context.emit(1); context.modal.close() }}>啊啊啊</el-button>
                <el-button onClick={() => { useModal({ title: 'asdsaddssda' }) }}>xcxczcxz</el-button>
            </div>
        }

        return {
            click123: async () => {
                const modelResult = await useModal({ default: myc, title: '我的窗口', footer: () => <el-button onClick={() => alert(1)}>heihei</el-button> }, { text: '我是扩展数据' }, { size: 'default' })
                console.log('modelResult', modelResult)
            },
        };
    },
};
</script>

<style scoped>
</style>
