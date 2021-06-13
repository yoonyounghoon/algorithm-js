// 노드와 트리 구현

class Node {
  constructor(data) {
    this.data = data; // 노드의 데이터
    this.children = []; // 자식들의 정보(주소)를 담을 배열
  }

  add(data) {
    this.children.push(new Node(data)); // 자식 노드를 생성하고 바로 배열에 저장
  }

  remove(data) {
    this.children = this.children.filter((child) => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
console.log(t);
