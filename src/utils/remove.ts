(value: any): void =>{
    const removeNode = (node: any, value: any): any => {
      if (!node) {
        return null;
      }
  
      if (value === node.value) {
        if (!node.left && !node.right) {
          return null;
        }
  
        if (!node.left) {
          return node.right;
        }
  
        if (!node.right) {
          return node.left;
        }
  
        let temp = node.right;
  
        while (temp.left) {
          temp = temp.left;
        }
  
        node.value = temp.value;
  
        node.right = removeNode(node.right, temp.value);
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };
  
  
   removeNode('root', value);
   
}
