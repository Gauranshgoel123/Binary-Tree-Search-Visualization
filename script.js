class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;

            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}

function buildTree() {
    const inputNumbers = document.getElementById('inputNumbers').value;
    const numbersArray = inputNumbers.split(',').map(Number);

    const tree = new BinarySearchTree();
    numbersArray.forEach(number => tree.insert(number));

    const treeContainer = document.getElementById('treeContainer');
    treeContainer.innerHTML = ''; // Clear previous tree

    displayTree(tree.root, treeContainer);
}

function displayTree(node, container) {
    if (node) {
        const nodeElement = document.createElement('div');
        nodeElement.className = 'node';
        nodeElement.textContent = node.value;

        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'children';

        if (node.left) {
            const leftContainer = document.createElement('div');
            leftContainer.className = 'left';
            displayTree(node.left, leftContainer);
            childrenContainer.appendChild(leftContainer);
        }

        if (node.right) {
            const rightContainer = document.createElement('div');
            rightContainer.className = 'right';
            displayTree(node.right, rightContainer);
            childrenContainer.appendChild(rightContainer);
        }

        nodeElement.appendChild(childrenContainer);
        container.appendChild(nodeElement);
    }
}
