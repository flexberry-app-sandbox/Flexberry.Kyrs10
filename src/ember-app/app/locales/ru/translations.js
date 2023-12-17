import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKyrs10БилетнаяКассаLForm from './forms/i-i-s-kyrs10-билетная-касса-l';
import IISKyrs10Перевозчик1LForm from './forms/i-i-s-kyrs10-перевозчик1-l';
import IISKyrs10ПокупИлиВозвБLForm from './forms/i-i-s-kyrs10-покуп-или-возв-б-l';
import IISKyrs10ПокупательLForm from './forms/i-i-s-kyrs10-покупатель-l';
import IISKyrs10БилетнаяКассаEForm from './forms/i-i-s-kyrs10-билетная-касса-e';
import IISKyrs10Перевозчик1EForm from './forms/i-i-s-kyrs10-перевозчик1-e';
import IISKyrs10ПокупИлиВозвБEForm from './forms/i-i-s-kyrs10-покуп-или-возв-б-e';
import IISKyrs10ПокупательEForm from './forms/i-i-s-kyrs10-покупатель-e';
import IISKyrs10БилетнаяКассаModel from './models/i-i-s-kyrs10-билетная-касса';
import IISKyrs10ВозвратБилетаModel from './models/i-i-s-kyrs10-возврат-билета';
import IISKyrs10Перевозчик1Model from './models/i-i-s-kyrs10-перевозчик1';
import IISKyrs10ПокупИлиВозвБModel from './models/i-i-s-kyrs10-покуп-или-возв-б';
import IISKyrs10ПокупательModel from './models/i-i-s-kyrs10-покупатель';
import IISKyrs10ПокупкаБилетаModel from './models/i-i-s-kyrs10-покупка-билета';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kyrs10-билетная-касса': IISKyrs10БилетнаяКассаModel,
    'i-i-s-kyrs10-возврат-билета': IISKyrs10ВозвратБилетаModel,
    'i-i-s-kyrs10-перевозчик1': IISKyrs10Перевозчик1Model,
    'i-i-s-kyrs10-покуп-или-возв-б': IISKyrs10ПокупИлиВозвБModel,
    'i-i-s-kyrs10-покупатель': IISKyrs10ПокупательModel,
    'i-i-s-kyrs10-покупка-билета': IISKyrs10ПокупкаБилетаModel
  },

  'application-name': 'Kyrs10',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kyrs10',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kyrs10',
          title: 'Kyrs10'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        kyrs10: {
          caption: 'Kyrs10',
          title: 'Kyrs10',
          'i-i-s-kyrs10-покуп-или-возв-б-l': {
            caption: 'Покупка или возврат билета',
            title: ''
          },
          'i-i-s-kyrs10-перевозчик1-l': {
            caption: 'Перевозчик',
            title: ''
          },
          'i-i-s-kyrs10-билетная-касса-l': {
            caption: 'Билетная касса',
            title: ''
          },
          'i-i-s-kyrs10-покупатель-l': {
            caption: 'Покупатель',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kyrs10-билетная-касса-l': IISKyrs10БилетнаяКассаLForm,
    'i-i-s-kyrs10-перевозчик1-l': IISKyrs10Перевозчик1LForm,
    'i-i-s-kyrs10-покуп-или-возв-б-l': IISKyrs10ПокупИлиВозвБLForm,
    'i-i-s-kyrs10-покупатель-l': IISKyrs10ПокупательLForm,
    'i-i-s-kyrs10-билетная-касса-e': IISKyrs10БилетнаяКассаEForm,
    'i-i-s-kyrs10-перевозчик1-e': IISKyrs10Перевозчик1EForm,
    'i-i-s-kyrs10-покуп-или-возв-б-e': IISKyrs10ПокупИлиВозвБEForm,
    'i-i-s-kyrs10-покупатель-e': IISKyrs10ПокупательEForm
  },

});

export default translations;
