const { SoftPlay } = require('../src/soft-play-oop.js')

describe("Soft Play OOP", () => {

  it("Initial state is empty", function () {
    let softPlay = new SoftPlay()
    expect(softPlay.occupancy()).toEqual({ adults: 0, children: 0 })
  })

  it("Single adult and child enter", function () {
    let softPlay = new SoftPlay()
    expect(softPlay.enter(1, 1)).toBeTrue()
    expect(softPlay.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it("Adult can leave when adults 2 and children 1", function () {
    let softPlay = new SoftPlay()
    softPlay.enter(2, 1)
    expect(softPlay.leave(1, 0)).toBeTrue()
    expect(softPlay.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it("Adult cannot leave when adults 1 and children 1", function () {
    let softPlay = new SoftPlay()
    softPlay.enter(1, 1)
    expect(softPlay.leave(1, 0)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it("More children cannot leave than are in the soft play center", function () {
    let softPlay = new SoftPlay()
    expect(softPlay.enter(1, 1)).toBeTrue()
    expect(softPlay.leave(1, 2)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it("Child cannot enter on own", function () {
    let softPlay = new SoftPlay()
    expect(softPlay.enter(0, 1)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({ adults: 0, children: 0 })
  })

  it("Child cannot leave on own", function () {
    let softPlay = new SoftPlay()
    softPlay.enter(1, 1)
    expect(softPlay.leave(0, 1)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it("Adult can leave with children", function () {
    let softPlay = new SoftPlay()
    softPlay.enter(2, 1)
    expect(softPlay.leave(2, 1)).toBeTrue()
    expect(softPlay.occupancy()).toEqual({ adults: 0, children: 0 })
  })

  it("5 adult and 4 children can enter when maximum occupancy is 10", function () {
    let softPlay = new SoftPlay()
    softPlay.maxOccupancy = 10
    expect(softPlay.enter(5, 4)).toBeTrue()
    expect(softPlay.occupancy()).toEqual({ adults: 5, children: 4 })
  })

  it("11 adult and 10 children can not enter when maximum occupancy is 20", function () {
    let softPlay = new SoftPlay()
    softPlay.maxOccupancy = 20
    expect(softPlay.enter(11, 10)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({ adults: 0, children: 0 })
  })
})