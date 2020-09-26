const mother = { name: 'Ilona', age: 55, drive: false }
const father = { name: 'Sandor Istvan', age: 64, drive: true }
const me = {
  name: 'Sandor',
  parents: [mother, father],
  childOf: function () {
    return (
      this.parents.map((parent) => parent.name).join(' & ') || 'parents unknown'
    )
  }
}
console.log(me.childOf())

module.exports = [me, mother, father]
