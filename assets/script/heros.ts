import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('heros')
export class heros extends Component {

  @property(Prefab)
  hero: Prefab | null = null;

  onLoad() {
    console.log(this.hero);
    const item = instantiate(this.hero);
    this.node.addChild(item);
    // for (let i = 0; i < this.items.length; ++i) {
    //   const item = instantiate(this.itemPrefab);
    //   const data = this.items[i];
    //   this.node.addChild(item);
    //   item.getComponent('ItemTemplate').init(data);
    // }
  }

  start() {

  }

  update(deltaTime: number) {

  }
}


