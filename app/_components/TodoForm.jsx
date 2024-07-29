export default function TodoForm() {
  return (
    <>
      <form>
        <label htmlFor="addItem">Add Item</label>
        <input type="text" name="addItem" id="addItem" placeholder="Item 1" autoComplete="off" required/>
        <button type="submit">Add</button>
      </form>
    </>
  )
}
