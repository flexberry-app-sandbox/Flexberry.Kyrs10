import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrs10-билетная-касса', 'Unit | Model | i-i-s-kyrs10-билетная-касса', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kyrs10-билетная-касса',
    'model:i-i-s-kyrs10-возврат-билета',
    'model:i-i-s-kyrs10-перевозчик1',
    'model:i-i-s-kyrs10-покуп-или-возв-б',
    'model:i-i-s-kyrs10-покупатель',
    'model:i-i-s-kyrs10-покупка-билета',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
