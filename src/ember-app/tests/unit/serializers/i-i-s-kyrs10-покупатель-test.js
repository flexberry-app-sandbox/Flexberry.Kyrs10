import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrs10-покупатель', 'Unit | Serializer | i-i-s-kyrs10-покупатель', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kyrs10-покупатель',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kyrs10-статус',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
