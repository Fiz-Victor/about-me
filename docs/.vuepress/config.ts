import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
    base: '/',
    locales: {
        '/': {
            lang: 'English',
            title: "OnlyRain233",
            description: "About me",
        },
        '/zh-CN/': {
            lang: '中文',
            title: "OnlyRain233",
            description: "关于我",
        },
    },
    head: [
        ['link', { rel: 'icon', href: 'https://2.gravatar.com/avatar/949b4b017cd9c5b03ec65cfc715c17ec?s=250' }]
    ],
    theme: defaultTheme(
        {
            navbar: [
                { text: 'About', link: '/about/' }
            ],
        }
    ),
});