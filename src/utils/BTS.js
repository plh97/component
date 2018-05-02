class Node {
  constructor({ data, parent }) {
    this.data = data;
    for (const a in data) {
      this[a] = data[a];
    }
    this.parent = parent;
  }
  show() {
    return this;
  }
}


class BTS {
  constructor() {
    this.root = null;
  }
  insert({ data }) {
    const n = new Node({ data });
    if (this.root === null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        const index = e => 1;
        current = current.children[index];
        if (current == null) {
          parent.children.push(n);
          break;
        }
      }
    }
  }
  inOrder(node) {
    if (!(node == null)) {
      this.inOrder(node.left);
      console.log(`${node.show()} `);
      this.inOrder(node.right);
    }
  }
  getTreeData({ data }) {
    data.forEach((arr) => {
      this.insert({ data: arr });
    });
    return data;
  }
}
const bts = new BTS();

export default bts;
