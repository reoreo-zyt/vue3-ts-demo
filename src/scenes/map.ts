/** 地图场景 */
export class MapScene extends Phaser.Scene {
  preload() {
    // 加载地图所需的纹理图集
    this.load.image('city', '/map/city.png');
    this.load.image('grass', '/map/grass.png');
    this.load.image('mountain', '/map/mountain.png');
    this.load.image('tree', '/map/tree.png');
    this.load.image('water', '/map/water.png');
    // 加载 json
    this.load.tilemapTiledJSON('map', '/json/sanguo.json');
  }

  create() {
    // 加载 Tilemap
    const map = this.add.tilemap('map');
    // 加载 Tileset
    map.addTilesetImage('city');
    map.addTilesetImage('grass');
    map.addTilesetImage('mountain');
    map.addTilesetImage('tree');
    map.addTilesetImage('water');
    // 创建图层
    map.createLayer('WuWei/QiLianShan', ['mountain']);
    map.createLayer('WuWei/BeiShan', ['mountain']);
    map.createLayer('WuWei/City', ['city']);
  }
}
