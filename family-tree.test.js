const { describe, test } = require('jest')
const familyTree = require('./familyTree')

describe('Family Tree', function () {
  test('I am in my family tree', function () {
    const me = familyTree[0]
    expect(me.name).toEqual('Sandor')
  })
})
