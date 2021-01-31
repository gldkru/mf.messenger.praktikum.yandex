export const template = `
<div class="auth-form">
  <header class="auth-form__header">
    <h1>Регистрация</h1>
  </header>
  <form action="#" method="POST" name="asyncForm">
    <ul class="props-list">
      <li class="props-list__li">
        <label for="first_name" class="props-list__edit-label">Имя</label>
        <input id="first_name" name="first_name" type="text" class="props-list__edit" value="" placeholder="Введите" />
      </li>
      <li class="props-list__li">
        <label for="second_name" class="props-list__edit-label">Фамилия</label>
        <input id="second_name" name="second_name" type="text" class="props-list__edit" value="" placeholder="Введите" />
      </li>
      <li class="props-list__li">
        <label for="phone" class="props-list__edit-label">Телефон</label>
        <input id="phone" name="phone" type="tel" class="props-list__edit" value="" placeholder="Введите" />
      </li>
      <li class="props-list__li">
        <label for="login" class="props-list__edit-label">Логин</label>
        <input id="login" name="login" type="text" class="props-list__edit" value="" placeholder="Введите" />
      </li>
      <li class="props-list__li">
        <label for="email" class="props-list__edit-label">Почта</label>
        <input id="email" name="email" type="email" class="props-list__edit" value="" placeholder="Введите" />
      </li>
      <li class="props-list__li">
        <label for="password" class="props-list__edit-label">Пароль</label>
        <input id="password" name="password" type="password" class="props-list__edit" value="" placeholder="Введите" />
      </li>
    </ul>

    <button type="submit" id="submit-form" class="btn btn_block btn_lg btn_padding">Зарегистрироваться</button>
    <br />
    <a href="/" class="btn btn_link">Войти</a>
  </form>
</div>
`;
//# sourceMappingURL=template.js.map