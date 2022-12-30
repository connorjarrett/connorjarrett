/**
  README Generator
  Base code from Stanley Lim
  https://github.com/Spiderpig86/Spiderpig86/blob/master/index.js
**/

// Get all modules
const md = require('markdown-it')({
    html: true,
    linkify: true,
    breaks: true
});
const mdEmoji = require('markdown-it-emoji');
const fs = require('fs');
md.use(mdEmoji);

// Sections
// Title
const title = generateTitle(2, `Hey there, I'm ${generateLink("Connor", "https://www.connorjarrett.com/")} :wave:`)
const subtitle = "I'm a full stack website developer based in the UK. I am working on building my brand and just generally enjoying myself."

// Badges
const badgeConfigs = [
    {
        name: "Website",
        badgeText: "connorjarrett.com",
        labelBgColor: "f7f016",
        logoBgColor: "f7f016",
        logoColor: "black",
        logo: "Google-Chrome",
        link: "https://www.connorjarrett.com/"
    },
    {
        name: "Twitter",
        badgeText: "@ConnorJrt",
        labelBgColor: "1DA1F2",
        logoBgColor: "1DA1F2",
        logoColor: "white",
        logo: "Twitter",
        link: "https://twitter.com/ConnorJrt"
    },
    {
        name: "Github",
        badgeText: "conjardev",
        labelBgColor: "e8e8e8",
        logoBgColor: "e8e8e8",
        logoColor: "black",
        logo: "GitHub",
        link: "https://github.com/conjardev"
    }
]
const badges = badgeConfigs.reduce((result, config) => result + ' ' + generateBadge(config), '');

const gifURL = "https://ubistatic19-a.akamaihd.net/resource/en-us/game/watchdogs/watchdogs/wd_hw_drones_security-drone_550_ncsa.gif"
const gif = `<img align='right' src='${gifURL}' />`

// Fun facts
const funFactsTitle = generateTitle(2, ":zap: Some facts about me")

const factsData = {
    "workingOn":["Cade","https://cade.dev"],
    "learningAbout":["SEO"]
}

const factsConfig = [
    `🔭 I'm current working on <b>${generateLink(factsData["workingOn"][0],factsData["workingOn"][1])}</b>`,
    `🤔 Learning about <b>${factsData["learningAbout"][0]}</b>`,
    `💻 Check out ${generateLink("my website", "https://connorjarrett.com")}`,
    `:octocat: My projexts are available on ${generateLink("GitHub", "https://github.com/conjardev")}`,
    `💬 Feel free to ${generateLink("drop a message", "https://connorjarrett.com#contact")}`,
    `🎉 Fun Fact: My favourite video game is Watch_Dogs 2`
]
const facts = factsConfig.reduce((result, fact) => result + `\n - ${fact}`, '');

// Tools
const toolsTitle = generateTitle(2, "Tools I use")
const toolsIconSize = 25;
const toolsConfig = [
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        alt: 'VSCode'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        alt: 'PHP'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        alt: 'MySQL'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        alt: 'JavaScript'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        alt: 'HTML'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
        alt: 'Apache 2'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
        alt: 'jQuery'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        alt: 'Python'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
        alt: 'Adobe Illustrator'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg',
        alt: 'FileZilla'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg',
        alt: 'Putty'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        alt: 'GitHub'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        alt: 'CSS'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        alt: 'C#'
    },
    {
        src: 'https://simpleicons.org/icons/notion.svg',
        alt: 'Notion'
    }
]
const tools = toolsConfig.reduce((result, toolConfig) => result + '\n' + generateIcon(toolConfig, toolsIconSize), '');

// Stats
const languages = `<img src="https://github-readme-stats.vercel.app/api/top-langs?username=conjardev&theme=dark&layout=compact&hide_border=true&bg_color=22272e" alt="conjardev" />`;
const stats = `<img src="https://github-readme-stats.vercel.app/api?username=conjardev&show_icons=true&theme=dark&hide_border=true&bg_color=22272e" alt="conjardev" />`;
const contribution = `<img src="https://ghchart.rshah.org/conjardev" alt="conjardev" />`;
const vistors = `![visitors](https://visitor-badge.glitch.me/badge?page_id=conjardev.conjardev)`;

// Footer
const footer = `🏆 Many thanks to [Stanley Lim](https://github.com/Spiderpig86), whose [readme](https://github.com/Spiderpig86/Spiderpig86) and [code](https://github.com/Spiderpig86/Spiderpig86/blob/master/index.js) I used elements from.`
const learn = `${generateLink("Learn more", "https://github.com/conjardev/conjardev/blob/main/info.md")} about how I made this`

// Compile sections into content
const content = `${title}\n
${subtitle}\n
${badges}\n
${gif}\n
${funFactsTitle}\n
${facts}\n
${toolsTitle}\n
<p align="left">\n
    ${tools}\n
</p>\n
<p align="left">\n
${languages}\n
${stats}\n
${contribution}\n
</p>\n
${vistors}\n\n
${footer}\n
${learn}
\n --- \n
<p align="center">Made with &hearts; by <a href="https://connorjarrett.com">Connor Jarrett</a></p>
`

// Final parse & write to file
const markdownContent = md.render(content);

fs.writeFile('README.md', markdownContent, (err) => {
    if (err) {
        return console.error(err);
    }
    console.info(`Writing to README.md`);
});

// Functions
function generateBadge(badgeConfig) {
    return `[![${badgeConfig.name} Badge](https://img.shields.io/badge/-${badgeConfig.badgeText}-${badgeConfig.labelBgColor}?style=flat-square&labelColor=${badgeConfig.logoBgColor}&logo=${badgeConfig.logo}&logoColor=${badgeConfig.logoColor}&link=${badgeConfig.link})](${badgeConfig.link})`;
}

function generateIcon(iconConfig, toolsIconSize) {
    return `<img src="${iconConfig.src}" alt="${iconConfig.alt}" width="${toolsIconSize}" height="${toolsIconSize}" />`;
}

function generateTitle(size, title) {
    return `${'#'.repeat(size)} ${title}`;
}

function generateLink(label, link) {
    return `[${label}](${link})`;
}