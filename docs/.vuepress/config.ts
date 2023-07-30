import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    lang: 'en-US',
    title: "OnlyRain233",
    description: "About me",
    head: [
        ['link', { rel: 'icon', href: 'https://2.gravatar.com/avatar/949b4b017cd9c5b03ec65cfc715c17ec?s=250' }]
    ],
    theme: hopeTheme(
        {
            navbar: [
                { text: 'About', children: ['/about/'] }
            ],
        },
        {
            // 主题行为选项 (可选)
        },
    ),
});