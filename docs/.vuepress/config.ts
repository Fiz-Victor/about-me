import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
    base: '/',
    locales: {
        '/': {
            lang: 'English',
            title: "Pheqor",
            description: "About me",
        },
        '/zh-CN/': {
            lang: '中文',
            title: "Pheqor",
            description: "我是谁..?",
        },
    },
    head: [
        ['link', { rel: 'icon', href: 'https://cravatar.cn/avatar/949b4b017cd9c5b03ec65cfc715c17ec?s=64' }]
    ],
    theme: defaultTheme(
        {
            navbar: [
                { text: 'About', link: '/about/' }
            ],
        }
    ),
});