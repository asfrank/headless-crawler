const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://image.baidu.com');
    console.log('go to https://image.baidu.com');
    await page.setViewport({
        width: 1920,
        height: 1080
    });
    console.log('reset viewport');
    await page.focus('#kw');
    await page.keyboard.sendCharacter('狗');
    await page.click('.s_btn');
    console.log('go to search list');
    page.on('load', () => {
        console.log('page load done, start fetch...');
        
    });
    
})();