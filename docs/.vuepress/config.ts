import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
    base: '/',
    locales: {
        '/': {
            lang: 'English',
            title: "LLKawi",
            description: "About me",
        },
        '/zh-CN/': {
            lang: '中文',
            title: "卡威LLKawi",
            description: "Ciallo～(∠・ω< )⌒★！",
        },
    },
    head: [
        ['link', { rel: 'icon', href: 'https://cravatar.cn/avatar/949b4b017cd9c5b03ec65cfc715c17ec?s=64' }]
    ],
    theme: defaultTheme(
        {
            navbar: [
                { text: 'About', link: '/about/' },
                { text: 'Sponsor', link: '/sponsor/' }
            ],
        }
    ),
});