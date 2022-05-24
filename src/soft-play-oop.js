// TODO: Write your class in this file
class SoftPlay {
  constructor(numAdults = 0, numChildren = 0) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }

  enter(numAdults, numChildren) {
    if (numChildren <= numAdults) {
      this.numAdults += numAdults
      this.numChildren += numChildren
      return true
    }
    return false
  }

  leave(numAdults, numChildren) {
    const remainingAdults = this.numAdults - numAdults
    const remainingChildren = this.numChildren - numChildren
    if (numAdults >= numChildren &&
      remainingChildren >= 0 &&
      remainingAdults >= 0 &&
      remainingAdults >= remainingChildren) {
      this.numAdults = remainingAdults
      this.numChildren = remainingChildren
      return true
    }
    return false
  }
}

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay
}