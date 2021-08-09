class Shelf {
  constructor(
    name,
    numItems,
    length,
    height,
    firstItem,
    secondItem,
    thirdItem
  ) {
    this.name = name;
    (this.numItems = numItems), (this.length = length);
    this.height = height;
    this.items = {
      item1: firstItem,
      item2: secondItem,
      item3: thirdItem,
    };
  }
  changeItems(first, second, third) {
    this.items = {
      item1: first,
      item2: second,
      item3: third,
    };
  }
  changeHeight(h) {
    this.height = h;
  }
}

export default Shelf;
