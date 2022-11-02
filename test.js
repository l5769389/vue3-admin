function f () {
  let a = 1
  try {
    return a
  } catch (e) {
    //
  } finally {
    a = 3
  }
}
const b = f()
console.log(b)
