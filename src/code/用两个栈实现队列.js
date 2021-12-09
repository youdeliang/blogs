class Queue {
  constructor() {
    this.stackA = []
    this.stackB = []
  }
  appendTail(value) {
    this.stackA.push(value)
  }
  deleteHead() {
    if (this.stackB.length) { 
      return this.stackB.pop()
    } else {
      while(this.stackA.length) {
        this.stackB.push(this.stackA.pop())
      }
      if (this.stackB.length) {
        return this.stackB.pop()
      } else {
        reture -1
      }
    }
  }
}