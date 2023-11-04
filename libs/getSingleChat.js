export default async function getSingleChat(id) {
  const apiChats = process.env.NEXT_PUBLIC_CHATS;
  const response = await fetch(`${apiChats}/${id}`, {
    cache: "no-store",
  });
  const chat = await response.json();
  return chat;
}
