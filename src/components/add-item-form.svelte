<script>
  let name = '';
  let quantity = '';
  let description = '';

  function addItem() {
    // Handle adding item
  }
</script>

<form on:submit|preventDefault={addItem}>
  <label>
    Name:
    <input type="text" bind:value={name} required>
  </label>
  <label>
    Quantity:
    <input type="number" bind:value={quantity} required>
  </label>
  <label>
    Description:
    <textarea bind:value={description} required></textarea>
  </label>
  <button type="submit">Add Item</button>
</form>
