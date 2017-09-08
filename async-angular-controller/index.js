/* eslint-disable no-console */
import axios from 'axios';

const $http = params => axios(params);

const mail = {};

const replaceField = data => console.log(data);

mail.chooseTemplate = async () => {
  let res = '';
  res = await mail.getTemplateHtml();
  res = await mail.setTemplate(res);
};

mail.getTemplateHtml = () =>
new Promise((resolve, reject) => {
  $http({
    method: 'GET',
    url: `templates/mail${mail.emailRecord.template}.html`,
    headers: { 'Content-Type': 'text/html' },
  })
  .then((response) => {
    console.log('getTemplateHtml!!');
    resolve(response.data);
  })
  .catch((error) => {
    reject(error.message);
  });
});

mail.setTemplate = templateData =>
new Promise((resolve) => {
  console.log('setTemplate!!');

  mail.showMail = replaceField(templateData);
  resolve();
});

const ghub = {};

ghub.getUser = () =>  axios.get('https://api.github.com/users/tobiahrex');
ghub.getRepo = username => axios.get(`https://api.github.com/repos/${username}/nj2jp`);

ghub.chooseUser = async () => {
  let res = '';
  console.time('getuser');
  res = await ghub.getUser();
  console.timeEnd('getuser');
  // console.log('user results: ', res.data);
  console.log('waited');
  console.time('getRepo');
  res = await ghub.getRepo(res.data.login);
  console.timeEnd('getRepo');
  // console.log('repo results: ', res.data);

  // console.log('result: ', res.data);
};

ghub.chooseUser()
.then(console.log)
.catch(console.log);
