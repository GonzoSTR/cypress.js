describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нашел кнопку войти и нажал

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })

   it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // ввели верный пароль
        cy.get('#loginButton').click(); // нашел кнопку войти и нажал
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })

   it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт

        cy.get('#mail').type('german@dolnikovv.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нашел кнопку войти и нажал
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })

   it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт

        cy.get('#forgotEmailButton').click(); // нашли кнопку забыли пароль и нажали

        cy.get('#mailForgot').type('german@dolnikovsad.ru'); // ввели любую почту
        cy.get('#restoreEmailButton').click(); // нажать кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяем после отправки кода вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть кнопка крестика и она видна пользователю
    })

   it('Проверка что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт

        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нашел кнопку войти и нажал

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что получаю сообщение об ошибке
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })

   it('Проверка успешного приведения к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нашел кнопку войти и нажал

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
    })
})
