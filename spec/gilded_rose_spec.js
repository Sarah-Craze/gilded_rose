const { Shop, Item } = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {
  let gildedRose;

  beforeEach(function() {
    gildedRose = new Shop();
  });

  it("should decrease quality by 1 for normal items", function() {
    const item = new Item("Normal Item", 5, 10);
    gildedRose.items.push(item);

    gildedRose.updateQuality();

    expect(item.quality).toEqual(9);
  });

  it("should decrease sellIn by 1 for all items except Sulfuras", function() {
    const item = new Item("Normal Item", 5, 10);
    gildedRose.items.push(item);

    gildedRose.updateQuality();

    expect(item.sellIn).toEqual(4);
  });

  // Ajoutez d'autres tests ici pour couvrir toutes les règles spécifiées.
});