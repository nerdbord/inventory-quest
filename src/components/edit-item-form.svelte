<script>
  export let name;
  export let quantity;
  export let description;

  function editItem() {
    // Handle editing item
  }
</script>

<form on:submit|preventDefault={editItem}>
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
  <button type="submit">Edit Item</button>
</form>
