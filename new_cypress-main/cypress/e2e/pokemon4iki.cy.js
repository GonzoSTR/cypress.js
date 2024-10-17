describe('e2e автотест', function () {

   it('Покупка нового аватара для своего тренера', function () {
        cy.visit('https://pokemonbattle.ru/'); // переходим на сайт

        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввели верный логин
        cy.get('#password').type('USER_PASSWORD'); // ввели верный пароль
        cy.get('.auth__button').click({ force: true }); // нашел кнопку войти и нажал
        cy.wait(3000);
        cy.get('.header__container > .header__id').click({ force: true }); // перешел в свой профиль
        cy.wait(3000);
        cy.get('[href="/shop"]').click({ force: true }); // магазин
        cy.get('.available > button').first().click({ force: true }); // купить у 1 доступного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111'); // ввели номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); // вели дату
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввели cvc
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Roman Romanov'); // ввели имя
        cy.get('.pay-btn').click({ force: true }); // оплатить
        cy.get('#cardnumber').type('56456'); // ввели код из смс
        cy.get('.payment__submit-button').click({ force: true }); // отправляем код
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
    })
})