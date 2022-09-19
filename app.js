// console.log(data);

let cards = [...data];
const sectionCenter = document.querySelector('.section-center');

const displayCards = () => {
  sectionCenter.innerHTML = cards
    .map(({ title, image, link }) => {
      return `<a href="${link}" target="_blank" class="project"
          ><img src="${image}" alt="${title}" loading="lazy" />
          <footer><h4>${title}</h4></footer></a
        >`;
    })
    .join('');
};

displayCards();

let newCards = [...newData];

// console.log(newCards);
const sectionCenter1 = document.querySelector('.section-center1');

const newDisplayCards = () => {
  sectionCenter1.innerHTML = newCards
    .map(({ link, image, title }) => {
      return `<a href="${link}" target="_blank" class="project"
          ><img src="${image}" alt="${title}" loading="lazy" />
          <footer><h4>${title}</h4></footer></a
        >`;
    })
    .join('');
};

newDisplayCards();
