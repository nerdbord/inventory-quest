<script>
  export let name;
  export let quantity;
  export let description;
</script>

<div class="inventory-item">
  <h2>{name}</h2>
  <p>Quantity: {quantity}</p>
  <p>{description}</p>
</div>
