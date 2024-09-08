let inventory = [
  { id: 1, name: 'Item 1', quantity: 10, description: 'Description for item 1' },
  { id: 2, name: 'Item 2', quantity: 5, description: 'Description for item 2' }
];

export function get() {
  return {
    body: inventory
  };
}

export function post({ request }) {
  const newItem = request.body;
  inventory.push(newItem);
  return {
    body: newItem
  };
}

export function del({ request }) {
  const { id } = request.body;
  inventory = inventory.filter(item => item.id !== id);
  return {
    body: { success: true }
  };
}
