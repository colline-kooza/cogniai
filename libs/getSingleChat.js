export default async function getSingleChat(id) {
  const response = await fetch(`http://localhost:3000/api/chats/${id}`, {
    cache: "no-store",
  });
  const chat = await response.json();
  return chat;
}
