(() => {
  const contactsArr = [];
  let contactsCount = 0;
  let clientsArr = [];

  const getDate = (dateVal) => {
    const date = new Date(dateVal);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (day < 10) {
      day = `0${day}`;
    }

    if (month < 10) {
      month = `0${month}`;
    }

    if (hours < 10) {
      hours = `0${hours}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return {
      day,
      month,
      year,
      hours,
      minutes,
    };
  };

  const iconsObj = {
    vk: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
    xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16
      16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942
      12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546
      10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432
      11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698
      10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543
      9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577
      11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606
      10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291
      6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205
      5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726
      5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391
      7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734
      7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847
      5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985
      5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951
      4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464
      7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908
      7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358
      5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424
      5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832
      5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838
      7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058
      8.86523Z"/></svg>`,
    fb: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
    xmlns="http://www.w3.org/2000/svg"><g opacity="0.7">
      <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976
      6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399
      3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999
      5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331
      15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643
      12.4 0 7.99999 0Z"/></g></svg>`,
    phone: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.7"><circle cx="8" cy="8" r="8"/>
      <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556
      9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222
      5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111
      5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889
      4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12
      9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/></g></svg>`,
    mail: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16
      3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4
      5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2
      11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375
      11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32
      6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576
      8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z"/></svg>`,
    another: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16
      3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3
      5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3
      8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8
      7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355
      10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z"/></svg>`,
  };

  const modal = document.querySelector('.modal');
  // Открытие модального окна
  const openModal = () => {
    modal.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  };

  // Закрытие модального окна
  const closeModal = () => {
    modal.classList.remove('modal-open');
    if (document.querySelector('.modal-form')) {
      document.querySelector('.modal-form').remove();
    }
    document.body.style.overflow = '';
    contactsArr.splice(0);
    contactsCount = 0;
  };

  const inputInFocus = (input) => {
    input.addEventListener('input', () => {
      if (input.value !== '') {
        input.nextElementSibling.classList.add('in-focus');
      } else {
        input.nextElementSibling.classList.remove('in-focus');
      }
    });
  };

  // Меняется тип инпута в зависимости от выбранного пользователем типа контакта
  const setTypeInput = (target, input) => {
    if (!input.value) {
      if (target === 'Доп. телефон') {
        input.setAttribute('type', 'number');
      } else if (target === 'Email') {
        input.setAttribute('type', 'email');
      } else {
        input.setAttribute('type', 'text');
      }
    }
  };

  // Создание поля для контакта клиента
  const createCLientContact = () => {
    const contactVal = document.createElement('div');
    const contactField = document.createElement('div');
    const contactType = document.createElement('div');
    const contactNameBtn = document.createElement('button');
    const contactList = document.createElement('ul');
    const contactPhone = document.createElement('li');
    const contactVk = document.createElement('li');
    const contactFb = document.createElement('li');
    const contactEmail = document.createElement('li');
    const contactOther = document.createElement('li');
    const contactInput = document.createElement('input');
    const contactDeleteBtn = document.createElement('button');
    contactDeleteBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682
    12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2
    8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646
    8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6
    6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z"/></svg>`;
    const contactDeleteTooltip = document.createElement('span');

    contactVal.classList.add('contact-val');
    contactField.classList.add('contact-field');
    contactDeleteTooltip.classList.add('contact-delete-tooltip', 'site-tooltip');
    contactType.classList.add('contact-type');
    contactNameBtn.classList.add('btn-reset', 'contact-name');
    contactList.classList.add('contact-list');
    contactPhone.classList.add('contact-item');
    contactVk.classList.add('contact-item');
    contactFb.classList.add('contact-item');
    contactEmail.classList.add('contact-item');
    contactOther.classList.add('contact-item');
    contactInput.classList.add('contact-input');
    contactDeleteBtn.classList.add('btn-reset', 'contact-delete');
    contactDeleteBtn.setAttribute('type', 'button');
    contactNameBtn.setAttribute('type', 'button');
    contactNameBtn.innerHTML = `<span>Телефон</span> <svg width="10" height="6" viewBox="0 0 10 6"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.494999 0.689971C0.249999 0.934971 0.249999 1.32997 0.494999
    1.57497L4.65 5.72997C4.845 5.92497 5.16 5.92497 5.355 5.72997L9.51 1.57497C9.755
    1.32997 9.755 0.93497 9.51 0.68997C9.265 0.44497 8.87 0.44497 8.625 0.68997L5
    4.30997L1.375 0.684972C1.135 0.444972 0.734999 0.444971 0.494999 0.689971Z"
    fill="#9873FF"/></svg>`;
    contactDeleteTooltip.textContent = 'Удалить контакт';
    contactPhone.textContent = 'Доп. телефон';
    contactVk.textContent = 'Vk';
    contactEmail.textContent = 'Email';
    contactFb.textContent = 'Facebook';
    contactOther.textContent = 'Другое';
    contactInput.placeholder = 'Введите данные контакта';
    contactInput.type = 'number';

    contactDeleteBtn.append(contactDeleteTooltip);
    contactVal.append(contactType, contactInput, contactDeleteBtn);
    contactType.append(contactNameBtn, contactList);
    contactList.append(contactPhone, contactEmail, contactVk, contactFb, contactOther);
    contactField.append(contactType, contactVal);

    const toggleClass = () => {
      contactList.classList.toggle('open');
      contactNameBtn.classList.toggle('toggle');
    };

    contactNameBtn.addEventListener('click', () => {
      toggleClass();
    });

    contactList.addEventListener('click', (e) => {
      const target = e.target.textContent;
      setTypeInput(target, contactInput);
      contactNameBtn.querySelector('span').textContent = target;
      toggleClass();
    });

    contactDeleteBtn.addEventListener('click', () => {
      const btnID = contactDeleteBtn.dataset.id;
      contactsArr.forEach((obj, i) => {
        if (obj.id === btnID) {
          contactsArr.splice(i, 1);
        }
      });
      contactField.remove();
      contactsCount--;
      if (contactsCount < 10) {
        document.querySelector('.add-contact-btn').style = 'display:block';
      }
    });

    return {
      contactField,
      contactDeleteBtn,
      contactNameBtn,
      contactInput,
    };
  };

  // Добавления нового клиента
  const createClientModalTemplate = (title) => {
    const modalInner = document.querySelector('.modal-inner');
    const clientField = document.createElement('div');
    const modalTitle = document.createElement('h2');
    const clientId = document.createElement('span');
    const clientForm = document.createElement('form');
    const labelSurname = document.createElement('label');
    const clientInputSurname = document.createElement('input');
    const placeholderSurname = document.createElement('span');
    const requiredMarkName = document.createElement('span');
    const requiredMarkSurname = document.createElement('span');
    const labelName = document.createElement('label');
    const clientInputName = document.createElement('input');
    const placeholderName = document.createElement('span');
    const labelLastname = document.createElement('label');
    const clientInputLastname = document.createElement('input');
    const placeholderLastname = document.createElement('span');
    const contactsField = document.createElement('div');
    const addContactsBtn = document.createElement('button');
    const buttonSubmit = document.createElement('button');
    const buttonCansel = document.createElement('button');
    const alertText = document.createElement('p');

    clientForm.classList.add('modal-form');
    clientField.classList.add('modal-form-inner');
    modalTitle.classList.add('modal-title');
    clientId.classList.add('client-id');
    modalTitle.textContent = title;
    labelSurname.classList.add('modal-label');
    labelName.classList.add('modal-label');
    labelLastname.classList.add('modal-label');
    clientInputSurname.classList.add('modal-input');
    clientInputSurname.setAttribute('type', 'text');
    clientInputSurname.setAttribute('name', 'surname');
    placeholderSurname.classList.add('modal-input-placeholder');
    placeholderName.classList.add('modal-input-placeholder');
    placeholderLastname.classList.add('modal-input-placeholder');
    placeholderSurname.textContent = 'Фамилия';
    clientInputName.classList.add('modal-input');
    clientInputName.setAttribute('type', 'text');
    clientInputName.setAttribute('name', 'name');
    placeholderName.textContent = 'Имя';
    requiredMarkName.classList.add('firm-color-text');
    requiredMarkName.textContent = '*';
    requiredMarkSurname.classList.add('firm-color-text');
    requiredMarkSurname.textContent = '*';
    clientInputLastname.classList.add('modal-input');
    clientInputLastname.setAttribute('type', 'text');
    clientInputLastname.setAttribute('name', 'lastname');
    placeholderLastname.textContent = 'Отчество';
    buttonSubmit.classList.add('btn-reset', 'modal-submit');
    buttonSubmit.setAttribute('type', 'submit');
    buttonSubmit.textContent = 'Сохранить';
    buttonCansel.classList.add('btn-reset', 'modal-cansel');
    buttonCansel.setAttribute('type', 'button');
    buttonCansel.textContent = 'Отмена';
    contactsField.classList.add('modal-add-contact');
    addContactsBtn.classList.add('btn-reset', 'add-contact-btn');
    addContactsBtn.setAttribute('type', 'button');
    addContactsBtn.textContent = 'Добавить контакт';
    alertText.classList.add('modal-alert');

    placeholderSurname.append(requiredMarkSurname);
    placeholderName.append(requiredMarkName);
    labelSurname.append(clientInputSurname, placeholderSurname);
    labelName.append(clientInputName, placeholderName);
    labelLastname.append(clientInputLastname, placeholderLastname);
    clientForm.append(clientField, contactsField, alertText, buttonSubmit, buttonCansel);
    modalInner.append(clientForm);
    clientField.append(modalTitle, clientId, labelSurname, labelName, labelLastname);
    contactsField.append(addContactsBtn);

    inputInFocus(clientInputName);
    inputInFocus(clientInputSurname);
    inputInFocus(clientInputLastname);

    addContactsBtn.addEventListener('click', () => {
      contactsCount++;
      const contactObj = {};
      const clientContact = createCLientContact();
      const id = `id${Math.random().toString(16).slice(2)}`;
      clientContact.contactDeleteBtn.setAttribute('data-id', `${id}`);
      contactObj.id = id;
      contactsField.prepend(clientContact.contactField);
      contactsArr.unshift(contactObj);
      if (contactsCount >= 10) {
        addContactsBtn.style = 'display:none';
      }
    });

    modal.addEventListener('click', (e) => {
      const { target } = e;
      if (target.classList.contains('modal')) {
        clientForm.remove();
        closeModal();
      }
    });

    clientForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (clientInputName.value === '') {
        clientInputName.style = 'border-bottom: 1px solid var(--color-red)';
        clientInputName.placeholder = 'Поле обязательно к заполнению';
      } else {
        clientInputName.style = 'border-bottom: 1px solid var(--color-grey)';
        clientInputName.placeholder = '';
      }

      if (clientInputSurname.value === '') {
        clientInputSurname.style = 'border-bottom: 1px solid var(--color-red)';
        clientInputSurname.placeholder = 'Поле обязательно к заполнению';
      } else {
        clientInputSurname.style = 'border-bottom: 1px solid var(--color-grey)';
        clientInputSurname.placeholder = '';
      }
    });

    return {
      clientForm,
      clientInputName,
      clientInputSurname,
      clientInputLastname,
      addContactsBtn,
      clientId,
      buttonCansel,
      buttonSubmit,
      labelName,
      labelSurname,
      labelLastname,
      alertText,
    };
  };

  const checkDataType = (stringType) => {
    let icon;
    let hrefpath;
    if (stringType === 'Телефон' || stringType === 'Доп. телефон') {
      icon = iconsObj.phone;
      hrefpath = 'tel:';
    } else if (stringType === 'Email') {
      icon = iconsObj.mail;
      hrefpath = 'mailto:';
    } else if (stringType === 'Vk') {
      icon = iconsObj.vk;
      hrefpath = 'https://vk.com/';
    } else if (stringType === 'Facebook') {
      icon = iconsObj.fb;
      hrefpath = 'https://facebook.com/';
    } else {
      icon = iconsObj.another;
      hrefpath = 'https://google.com/';
    }

    return { icon, hrefpath };
  };

  // Создание контакта клиента
  const createClientContacts = (object) => {
    const contactData = checkDataType(object.type);
    const contactLink = document.createElement('a');
    const contactooltip = document.createElement('span');
    contactLink.classList.add('contact-link');
    contactooltip.classList.add('contact-tooltip', 'site-tooltip');
    contactooltip.innerHTML = `${object.type}: ${object.value}`;
    contactLink.innerHTML = contactData.icon;
    contactLink.setAttribute('href', `${contactData.hrefpath}${object.value}`);
    contactLink.append(contactooltip);

    return { contactLink };
  };

  // Вывод контактов клиента для изменения
  const editClientContacts = (obj, container) => {
    const editContacts = createCLientContact();
    editContacts.contactInput.setAttribute('type', 'text');
    editContacts.contactNameBtn.querySelector('span').textContent = obj.type;
    editContacts.contactInput.value = obj.value;
    setTypeInput(editContacts.contactNameBtn, editContacts.contactInput);
    container.prepend(editContacts.contactField);

    return editContacts;
  };

  const modalPreloader = document.querySelector('.modal-preloader-wrapper');
  const sendClientData = async (modalType, url, method) => {
    const contactValues = document.querySelectorAll('.contact-input');
    contactValues.forEach((item, i) => {
      if (item.value) {
        item.classList.remove('is-empty');
        contactsArr[i].value = item.value;
      } else {
        item.classList.add('is-empty');
      }
    });

    const contactTypes = document.querySelectorAll('.contact-name');
    contactTypes.forEach((item, i) => {
      contactsArr[i].type = item.querySelector('span').textContent;
    });

    const response = await fetch(url, {
      headers: { 'Content-Type': 'aplication/json' },
      method,
      body: JSON.stringify({
        name: modalType.clientInputName.value.trim(),
        surname: modalType.clientInputSurname.value.trim(),
        lastName: modalType.clientInputLastname.value.trim(),
        contacts: [...contactsArr],
      }),
    });

    if (response.status === 422) {
      const result = await response.json();
      result.errors.forEach((item) => {
        const { message } = item;
        modalType.alertText.textContent = message;
      });
    } else {
      modalPreloader.classList.add('preloader-open');
      setTimeout(() => {
        modalPreloader.classList.remove('preloader-open');
        createClientRow();
        closeModal();
      }, 1500);
    }
  };

  // Поиск клиента по id
  const getClientById = (arr, id) => {
    let client;
    arr.forEach((item) => {
      if (item.id === id) {
        client = item;
      }
    });

    return client;
  };

  // Удаление клиента
  const deleteClient = (trigger, event, id) => {
    trigger.addEventListener(event, async () => {
      const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'DELETE',
      });
      if (response.status === 422) {
        const result = await response.json();
        result.errors.forEach((item) => {
          const { message } = item;
          document.querySelector('.modal-alert').textContent = message;
        });
      } else {
        modalPreloader.classList.add('preloader-open');
        setTimeout(() => {
          modalPreloader.classList.remove('preloader-open');
          createClientRow();
          closeModal();
        }, 1500);
      }
    });
  };

  // Создание элементов строки клиента в таблице
  const createClientRowElements = (obj, id) => {
    const clientsContainer = document.getElementById('clients-table');
    const clientRow = document.createElement('tr');
    const clientId = document.createElement('td');
    const clientFullName = document.createElement('td');
    const clientAddData = document.createElement('td');
    const clientAddTime = document.createElement('span');
    const clientEditData = document.createElement('td');
    const clientEditTime = document.createElement('span');
    const clientContacts = document.createElement('td');
    const clientActions = document.createElement('td');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    editBtn.setAttribute('data-edit', `${id}`);
    editBtn.innerHTML = `<svg width="13" height="13" viewBox="0 0 13 13"
    fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10.5V13H2.5L9.87333 5.62662L7.37333 3.12662L0 10.5ZM11.8067
      3.69329C12.0667 3.43329 12.0667 3.01329 11.8067 2.75329L10.2467
      1.19329C9.98667 0.933291 9.56667 0.933291 9.30667 1.19329L8.08667
      2.41329L10.5867 4.91329L11.8067 3.69329Z" fill="#9873FF"/></svg> Изменить`;
    deleteBtn.setAttribute('data-delete', `${id}`);
    deleteBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12"
    fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318
      12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354
      3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6
      10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154
      9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D"/></svg> Удалить`;
    clientRow.classList.add('client-row');
    clientId.classList.add('grey-text');
    editBtn.classList.add('btn-reset', 'btn-edit');
    deleteBtn.classList.add('btn-reset', 'btn-delete');
    clientAddTime.classList.add('grey-text', 'add-time');
    clientEditTime.classList.add('grey-text', 'edit-time');
    clientContacts.classList.add('contacts-field');

    const addDate = getDate(obj.createdAt);
    const updatedDate = getDate(obj.updatedAt);

    clientId.textContent = `${obj.id}`;
    clientFullName.textContent = `${obj.surname} ${obj.name} ${obj.lastName}`;
    clientAddData.textContent = `${addDate.day}.${addDate.month}.${addDate.year}`;
    clientAddTime.textContent = `${addDate.hours}:${addDate.minutes}`;
    clientEditData.textContent = `${updatedDate.day}.${updatedDate.month}.${updatedDate.year}`;
    clientEditTime.textContent = `${updatedDate.hours}:${updatedDate.minutes}`;

    if (obj.contacts.length !== 0) {
      for (let i = 0; i < obj.contacts.length; i++) {
        const clientContactsItem = createClientContacts(obj.contacts[i]);
        clientContacts.append(clientContactsItem.contactLink);
      }
    }

    editBtn.addEventListener('click', async () => {
      openModal();
      const clientID = editBtn.dataset.edit;
      const editClientModal = createClientModalTemplate('Изменить данные');
      editClientModal.buttonCansel.textContent = 'Удалить клиента';
      editClientModal.buttonCansel.classList.add('modal-delete');
      const editClient = getClientById(clientsArr, clientID);

      editClientModal.clientInputSurname.value = editClient.surname;
      editClientModal.clientInputName.value = editClient.name;
      editClientModal.clientInputLastname.value = editClient.lastName;

      editClientModal.clientInputSurname.nextElementSibling.classList.add('in-focus');
      editClientModal.clientInputName.nextElementSibling.classList.add('in-focus');
      editClientModal.clientInputLastname.nextElementSibling.classList.add('in-focus');
      editClientModal.clientId.textContent = `ID: ${clientID}`;
      const editContactsField = document.querySelector('.modal-add-contact');

      for (let i = 0; i < editClient.contacts.length; i++) {
        const editContactID = `id${Math.random().toString(16).slice(2)}`;
        const editContacts = editClientContacts(editClient.contacts[i], editContactsField);
        editContacts.contactDeleteBtn.dataset.id = editContactID;
        const editContactsObj = { id: editContactID };
        contactsArr.unshift(editContactsObj);
        contactsCount = editClient.contacts.length;
      }

      editClientModal.clientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sendClientData(editClientModal, `http://localhost:3000/api/clients/${clientID}`, 'PATCH');
      });

      deleteClient(editClientModal.buttonCansel, 'click', clientID);
    });

    deleteBtn.addEventListener('click', () => {
      const btnID = deleteBtn.dataset.delete;
      openModal();
      const deleteClientModal = createClientModalTemplate('Удалить клиента');
      deleteClientModal.clientForm.classList.add('delete-client-form');
      deleteClientModal.labelName.remove();
      deleteClientModal.labelSurname.remove();
      deleteClientModal.labelLastname.remove();
      deleteClientModal.addContactsBtn.remove();
      deleteClientModal.clientId.classList.add('modal-delete-text');
      deleteClientModal.clientId.classList.remove('client-id');
      deleteClientModal.clientId.textContent = 'Вы действительно хотите удалить данного клиента?';
      deleteClientModal.buttonSubmit.textContent = 'Удалить';

      deleteClient(deleteClientModal.clientForm, 'submit', btnID);
    });

    clientAddData.append(clientAddTime);
    clientEditData.append(clientEditTime);
    clientActions.append(editBtn, deleteBtn);
    clientRow.append(clientId, clientFullName, clientAddData,
      clientEditData, clientContacts, clientActions);
    clientsContainer.append(clientRow);
  };

  // Закрытие модального окна по клику на кнопку закрытия
  const modalCloseBtn = document.querySelector('.close-btn');
  modalCloseBtn.addEventListener('click', () => {
    closeModal();
  });

  // Методы сортировки клиентов
  const sortArrayMap = {
    sortById: (array) => {
      array.sort((a, b) => (a.id > b.id ? 1 : -1));
    },

    sortByIdReverse: (array) => {
      array.sort((a, b) => (a.id < b.id ? 1 : -1));
    },

    sortByFullname: (array) => {
      array.sort((a, b) => (a.fullName > b.fullName ? 1 : -1));
    },

    sortByFullnameReverse: (array) => {
      array.sort((a, b) => (a.fullName < b.fullName ? 1 : -1));
    },

    sortByDate: (array) => {
      array.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
    },

    sortByDateReverse: (array) => {
      array.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    },

    sortByEditDate: (array) => {
      array.sort((a, b) => (a.updatedAt > b.updatedAt ? 1 : -1));
    },

    sortByEditDateReverse: (array) => {
      array.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
    },
  };

  // Техническая функция возвращения метода сортировки клиентов
  const sortMethod = (str) => {
    let method;
    if (str === 'id') {
      method = 'sortById';
    } if (str === 'id-reverse') {
      method = 'sortByIdReverse';
    } else if (str === 'name') {
      method = 'sortByFullname';
    } else if (str === 'name-reverse') {
      method = 'sortByFullnameReverse';
    } else if (str === 'date') {
      method = 'sortByDate';
    } else if (str === 'date-reverse') {
      method = 'sortByDateReverse';
    } else if (str === 'edit-date-reverse') {
      method = 'sortByEditDateReverse';
    } else if (str === 'edit-date') {
      method = 'sortByEditDate';
    }

    return method;
  };

  // Отрисовка таблицы
  const renderTable = (array) => {
    document.getElementById('clients-table').innerHTML = '';
    for (let i = 0; i < array.length; i++) {
      createClientRowElements(array[i], array[i].id);
    }
  };

  // Добавление клиента в таблицу
  const createClientRow = async () => {
    const response = await fetch('http://localhost:3000/api/clients');
    const remoteData = await response.json();
    clientsArr = [...remoteData];
    remoteData.forEach((item, i) => {
      clientsArr[i].fullName = `${item.surname} ${item.name} ${item.lastName}`;
    });

    sortArrayMap.sortById(clientsArr);
    renderTable(clientsArr);
  };

  // Добавление нового клиента
  const addNewClient = () => {
    openModal();
    const addClient = createClientModalTemplate('Новый клиент');
    addClient.clientForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sendClientData(addClient, 'http://localhost:3000/api/clients', 'POST');
    });
  };

  // Сортировка клиентов в таблице взависимости от выбранной категории
  const sortClients = () => {
    const sortBtns = document.querySelectorAll('.sort-btn');
    sortBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const sortArr = [...clientsArr];
        btn.classList.toggle('reverse');
        let sortIndicator = btn.dataset.sort;

        if (btn.classList.contains('reverse')) {
          sortIndicator = `${sortIndicator}-reverse`;
        }

        sortArrayMap[sortMethod(sortIndicator)](sortArr);
        renderTable(sortArr);
      });
    });
  };

  // Поиск клиентов из таблицы
  const searchClients = () => {
    const searchInput = document.querySelector('.header-input');
    const headrForm = document.querySelector('.header-form');
    headrForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    let timeout;

    searchInput.addEventListener('input', () => {
      clearTimeout(timeout);
      const searchArr = [];
      clientsArr.forEach((item) => {
        if (item.fullName.includes(searchInput.value)) {
          searchArr.push(item);
        }
      });
      timeout = setTimeout(() => {
        renderTable(searchArr);
      }, 300);
    });
  };
  document.addEventListener('DOMContentLoaded', () => {
    const addClientBtn = document.querySelector('.add-client-btn');
    addClientBtn.addEventListener('click', addNewClient);
    closeModal();
    createClientRow();
    sortClients();
    searchClients();
  });
})();
