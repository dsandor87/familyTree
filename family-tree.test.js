const familyTree = require('./familyTree')

describe('Family Tree', function () {
  test('I am in my family tree', function () {
    const me = familyTree[0]
    expect(me.name).toEqual('Sandor')
  })

  test('My mother is also there', function () {
    const mother = familyTree[1]
    expect(mother.name).toEqual('Ilona')
  })

  test('My mum is in the tree', function () {
    const me = familyTree[0]
    const mum = me.parents[0]
    expect(mum.name).toEqual('Ilona')
  })
  test('My father is in the tree', function () {
    const me = familyTree[0]
    const father = me.parents[1]
    expect(father.name).toEqual('Sandor Istvan')
  })
  test('My parents ', function () {
    const me = familyTree[0]
    expect(me.childOf()).toEqual('Ilona & Sandor Istvan')
  })
  test('My mother age ', function () {
    const me = familyTree[0]
    const mother = me.parents[0]
    expect(mother.age).toEqual(55)
  })
  test('My mother driving skill info  ', function () {
    const me = familyTree[0]
    const mother = me.parents[0]
    expect(mother.drive).toEqual(false)
  })
  test('My father driving skill info  ', function () {
    const me = familyTree[0]
    const father = me.parents[1]
    expect(father.drive).toEqual(true)
  })
})
