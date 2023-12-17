import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kyrs10.caption'),
          title: i18n.t('forms.application.sitemap.kyrs10.title'),
          children: [{
            link: 'i-i-s-kyrs10-покуп-или-возв-б-l',
            caption: i18n.t('forms.application.sitemap.kyrs10.i-i-s-kyrs10-покуп-или-возв-б-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs10.i-i-s-kyrs10-покуп-или-возв-б-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kyrs10-перевозчик1-l',
            caption: i18n.t('forms.application.sitemap.kyrs10.i-i-s-kyrs10-перевозчик1-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs10.i-i-s-kyrs10-перевозчик1-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kyrs10-билетная-касса-l',
            caption: i18n.t('forms.application.sitemap.kyrs10.i-i-s-kyrs10-билетная-касса-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs10.i-i-s-kyrs10-билетная-касса-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kyrs10-покупатель-l',
            caption: i18n.t('forms.application.sitemap.kyrs10.i-i-s-kyrs10-покупатель-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs10.i-i-s-kyrs10-покупатель-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})