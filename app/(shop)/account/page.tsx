export default function page() {
  async function onAction(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    console.log("name : " + name);
    console.log("email : " + email);
  }
  return (
    <main>
      {/*Server Actions*/}
      <form action={onAction}>
        <label htmlFor="name">name: </label>
        <input id="name" name="name" />
        <br />
        <label htmlFor="email">email: </label>
        <input id="email" name="email" />
        <br />
        <button type="submit">Server Action</button>
        <br />
      </form>
    </main>
  );
}
