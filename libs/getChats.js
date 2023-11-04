export default async function getChats(userId) {
  const apiChats = process.env.NEXT_PUBLIC_CHATS;
  const response = await fetch(`${apiChats}?userId=${userId}`, {
    cache: "no-store",
  });
  const chats = await response.json();
  return chats;
}
