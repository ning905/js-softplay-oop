// TODO: Write your class in this file
class SoftPlay {
  constructor(numAdults = 0, numChildren = 0, childrenPerAdult = 1, maxOccupancy) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.childrenPerAdult = childrenPerAdult

    if (maxOccupancy) {
      this.maxOccupancy = maxOccupancy
    } else {
      this.maxOccupancy = Infinity
    }
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }

  enter(numAdults, numChildren) {
    if (numChildren <= numAdults) {
      const totalAdults = this.numAdults + numAdults
      const totalChildren = this.numChildren + numChildren

      if (this.maxOccupancy >= totalAdults + totalChildren &&
        this.childrenPerAdult < totalAdults / totalChildren) {
        this.numAdults = totalAdults
        this.numChildren = totalChildren
        return true
      }
    }
    return false
  }

  leave(numAdults, numChildren) {
    const remainingAdults = this.numAdults - numAdults
    const remainingChildren = this.numChildren - numChildren
    if (numAdults >= numChildren &&
      remainingChildren >= 0 &&
      remainingAdults >= 0 &&
      remainingAdults >= remainingChildren &&
      this.childrenPerAdult < remainingAdults / remainingChildren) {
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