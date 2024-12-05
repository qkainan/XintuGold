import {defineStore} from 'pinia';
import {ref} from 'vue';
import {getItemAPI} from '@/apis/layout.js';

export const useLayoutStore = defineStore('layoutStore', () => {
    const goldQuoteList = ref([]); // 存储金句列表
    const time = ref(0); // 存储次数

    const fetchGoldQuote = async () => {
        try {
            const res = await getItemAPI();
            goldQuoteList.value = res.data.goldQuoteList;
            time.value = res.data.time || 0;
        } catch (error) {
            console.error('Error fetching gold quotes:', error);
        }
    };

    // 你还可以添加一个方法来初始化数据获取，或者在组件中手动调用 fetchGoldQuote
    // 例如，你可以在这里自动调用它，当 store 被创建时：
    // fetchGoldQuote(); // 注意：这通常不是最佳实践，因为它会在每次组件重新渲染时都调用。最好在组件的 onMounted 钩子中调用。

    return { goldQuoteList, time, fetchGoldQuote };
});