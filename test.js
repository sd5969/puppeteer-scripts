// const URL = 'https://lab.pwc.com/';
const URL = 'https://login.pwc.com/login/?goto=https:%2F%2Flogin.pwc.com:443%2Fopenam%2Foauth2%2Fauthorize%3Fresponse_type%3Dcode%26state%3D11111%26client_id%3Durn%253Alab.pwc.com%26redirect_uri%3Dhttps%253A%252F%252Flab.pwc.com%252Fauthenticate%26scope%3Dopenid%2520email%2520phone%2520profile%2520cloudEmail%2520countrycode%2520PwCPPI%2520PwClos%2520uid%2520pwcPartyID%2520locality&realm=%2Fpwc';
const EMAIL = 'sanjit.dutta@pwc.com';

const puppeteer = require('puppeteer');
const dateFormat = require('dateformat');

(async () => {

  const browser = await puppeteer.launch({headless: false}); // default is true
  const page = await browser.newPage();
  await page.goto(URL, {waitUntil: 'networkidle0'});

  await page.keyboard.type(EMAIL);
  await page.keyboard.press('Enter');

  // wait 10s
  await page.waitFor(15000);

  await page.screenshot({
    path: 'screenshot.' + dateFormat(new Date(), 'yyyymmdd') + '.png'
  });

  await browser.close();

})();
