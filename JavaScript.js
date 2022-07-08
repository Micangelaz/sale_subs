let count1 = 1, count2 = 1;
let count3 = 10, count4 = 1, count5 = 1;
let count6 = 1;
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById('btn7');
  button.addEventListener("click", myFunc1);
  count1++;
});

document.addEventListener("DOMContentLoaded", function () {
  const button1 = document.getElementById('btn8');
  button1.addEventListener("click", myFunc2);
  count2++;
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById('btn9');
  button.addEventListener("click", myFunc3);
  count3++;
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById('btn10');
  button.addEventListener("click", myFunc4);
  count4++;
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById('btn11');
  button.addEventListener("click", myFunc5);
  count5++;
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById('btn__lang__footer');
  button.addEventListener("click", function () {
    count6++;
    const list = document.getElementById('language__list__footer');
    if (count6 % 2 === 0) {
      list.style.display = 'block';
    }
    else {
      if (count6 % 2 !== 0) {
        list.style.display = 'none';
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById('menu__lang');
  button.addEventListener("click", function () {
    count6++;
    const list = document.getElementById('language__list__header');
    if (count6 % 2 === 0) {
      list.style.display = 'block';
    }
    else {
      if (count6 % 2 !== 0) {
        list.style.display = 'none';
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById('language__list__header');
  const list1 = document.getElementById('header__lang__content');
  const list2 = document.getElementById('language__name__footer');

  const button = document.getElementById('English__header');
  const button1 = document.getElementById('Ukraine__header');
  const button2 = document.getElementById('Russian__header');

  button.addEventListener("click", function () {
    list1.textContent = 'EN';
    list2.textContent = 'EN';
    list.style.display = 'none';
  });

  button1.addEventListener("click", function () {
    list1.textContent = 'UK';
    list2.textContent = 'UK';
    list.style.display = 'none';
  });

  button2.addEventListener("click", function () {
    list1.textContent = 'RU';
    list2.textContent = 'RU';
    list.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById('language__list__footer');
  const list1 = document.getElementById('language__name__footer');
  const list2 = document.getElementById('header__lang__content');

  const button = document.getElementById('English__footer');
  const button1 = document.getElementById('Ukraine__footer');
  const button2 = document.getElementById('Russian__footer');

  button.addEventListener("click", function () {
    list1.textContent = 'EN';
    list2.textContent = 'EN';
    list.style.display = 'none';
  });

  button1.addEventListener("click", function () {
    list1.textContent = 'UK';
    list2.textContent = 'UK';
    list.style.display = 'none';
  });

  button2.addEventListener("click", function () {
    list1.textContent = 'RU';
    list2.textContent = 'RU';
    list.style.display = 'none';
  });
});

function myFunc1() {
  if (count2 % 2 === 0) {
    const button = document.getElementById('btn7');
    button.style.color = 'white';
    button.style.backgroundColor = '#1749B3';
    const button1 = document.getElementById('btn8');
    button1.style.color = 'black';
    button1.style.backgroundColor = '#ECF3FB';
  }
  else {
    const button = document.getElementById('btn7');
    button.style.color = 'white';
    button.style.backgroundColor = '#1749B3';
  }
}

function myFunc2() {
  if (count1 % 2 === 0) {
    const button = document.getElementById('btn7');
    button.style.color = 'black';
    button.style.backgroundColor = '#ECF3FB';
    const button1 = document.getElementById('btn8');
    button1.style.color = 'white';
    button1.style.backgroundColor = '#1749B3';
  }
  else {
    const button1 = document.getElementById('btn8');
    button1.style.color = 'white';
    button1.style.backgroundColor = '#1749B3';
  }
}

function myFunc3() {
  if (count4 % 2 === 0 || count5 % 2 === 0) {
    const button = document.getElementById('btn9');
    button.style.color = 'white';
    button.style.backgroundColor = ' #1749B3';

    const button1 = document.getElementById('btn10');
    button1.style.backgroundColor = '#333333';
    button1.style.color = 'white';

    const button2 = document.getElementById('btn11');
    button2.style.backgroundColor = '#333333';
    button2.style.color = 'white';
  }
  else {
    const button = document.getElementById('btn9');
    button.style.color = 'white';
    button.style.backgroundColor = '#1749B3';
  }
}

function myFunc4() {
  if (count3 % 2 === 0 || count5 % 2 === 0) {
    const button = document.getElementById('btn10');
    button.style.backgroundColor = ' #1749B3';
    button.style.color = 'white';

    const button1 = document.getElementById('btn9');
    button1.style.backgroundColor = '#333333';
    button1.style.color = 'white';

    const button2 = document.getElementById('btn11');
    button2.style.backgroundColor = '#333333';
    button2.style.color = 'white';
  }
  else {
    const button = document.getElementById('btn10');
    button.style.color = 'white';
    button.style.backgroundColor = '#1749B3';
  }
}

function myFunc5() {
  if (count3 % 2 === 0 || count4 % 2 === 0) {
    const button = document.getElementById('btn11');
    button.style.backgroundColor = ' #1749B3';
    button.style.color = 'white';

    const button1 = document.getElementById('btn9');
    button1.style.backgroundColor = '#333333';
    button1.style.color = 'white';

    const button2 = document.getElementById('btn10');
    button2.style.backgroundColor = '#333333';
    button2.style.color = 'white';
  }
  else {
    const button = document.getElementById('btn11');
    button.style.color = 'white';
    button.style.backgroundColor = '#1749B3';
  }
}