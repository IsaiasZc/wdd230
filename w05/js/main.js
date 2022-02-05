const prueba1 = document.querySelector('a');
prueba1.textContent = 'a ver perrito';
prueba1.href = 'https://www.facebook.com';

const sect = document.querySelector('section');
const para = document.createElement('p');

para.textContent = 'I like playing video games';

sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara);

linkPara.remove();