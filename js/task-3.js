const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


 const listContainer = document.querySelector('#gallery');
  
  const colectionEl = array => {
    return array.map(arr => {
      const listItem = document.createElement('li');
      const imgEl = document.createElement('img');
      imgEl.setAttribute('src', arr.url);
      imgEl.setAttribute('alt', arr.alt);
      listItem.append(imgEl);
      console.log(listItem);
      return listItem;
    });
  };
  
  listContainer.append(...colectionEl(images));