class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      // Les objets "Sulfuras" sont légendaires et n'ont pas de date de péremption ni de changement de qualité.
      if (item.name === 'Sulfuras, Hand of Ragnaros') {
        continue;
      }

      // Mise à jour de la qualité en fonction des règles spécifiées pour chaque type d'objet
      if (item.name === 'Aged Brie') {
        item.quality = Math.min(item.quality + 1, 50);
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn <= 0) {
          item.quality = 0;
        } else if (item.sellIn <= 5) {
          item.quality = Math.min(item.quality + 3, 50);
        } else if (item.sellIn <= 10) {
          item.quality = Math.min(item.quality + 2, 50);
        } else {
          item.quality = Math.min(item.quality + 1, 50);
        }
      } else if (item.name.startsWith('Conjured')) {
        item.quality = Math.max(item.quality - 2, 0);
      } else {
        item.quality = Math.max(item.quality - 1, 0);
      }

      // La qualité diminue deux fois plus rapidement une fois la date de péremption passée.
      if (item.sellIn <= 0 && item.name !== 'Aged Brie') {
        if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.quality = Math.max(item.quality - 1, 0);
          }
        }
      }

      // La date de péremption diminue pour tous les objets sauf "Sulfuras".
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn--;
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
};
