// Node 구현
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((child) => child.data !== data);
  }
}

// Tree 구현
class Tree {
  constructor() {
    this.root = null;
  }

  // BFS, DFS 구현
  BFS(callbackFn) {
    if (this.root === null) return;

    const unvisitedQueue = [this.root];
    while (unvisitedQueue.length !== 0) {
      const current = unvisitedQueue.shift();
      unvisitedQueue.push(...current.children);
      callbackFn(current);
    }
  }

  DFS(callbackFn) {
    if (this.root === null) return;

    const unvisitedQueue = [this.root];

    while (unvisitedQueue.length !== 0) {
      const current = unvisitedQueue.shift();
      unvisitedQueue.unshift(...current.children);
      callbackFn(current);
    }
  }
}

const t = new Tree();
const lettersBFS = [];
const lettersDFS = [];
t.root = new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');
t.BFS((node) => lettersBFS.push(node.data));
t.DFS((node) => lettersDFS.push(node.data));
console.log(lettersBFS);
console.log(lettersDFS);
