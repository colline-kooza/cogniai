export default async function getChats() {
  const response = await fetch("http://localhost:3000/api/chats", {
    cache: "no-store",
  });
  const chats = await response.json();
  return chats;
}
