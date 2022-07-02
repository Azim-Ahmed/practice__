const LANGUAGES = [
    {
        language: 'ar',
        name: '阿拉伯语',
    },
    {
        language: 'zh-TW',
        name: '中文（繁体）',
    },
    {
        language: 'zh-CN',
        name: '中文（简体）',
    },
    {
        language: 'de',
        name: '德语',
    },
    {
        language: 'en',
        name: '英语',
    },
    {
        language: 'fr',
        name: '法语',
    },
    {
        language: 'hi',
        name: '印地语',
    },
    {
        language: 'id',
        name: '印度尼西亚语',
    },
    {
        language: 'it',
        name: '意大利语',
    },
    {
        language: 'ja',
        name: '日语',
    },
    {
        language: 'km',
        name: '高棉语',
    },
    {
        language: 'ko',
        name: '韩语',
    },
    {
        language: 'ms',
        name: '马来语',
    },
    {
        language: 'pt',
        name: '葡萄牙语',
    },
    {
        language: 'ru',
        name: '俄语',
    },
    {
        language: 'es',
        name: '西班牙语',
    },
    {
        language: 'th',
        name: '泰文',
    },
    {
        language: 'tr',
        name: '土耳其语',
    },
    {
        language: 'vi',
        name: '越南语',
    },
]

export const LANGUAGE_OPTIONS = LANGUAGES.map(({ language, name }) => ({ value: language, label: name }))
