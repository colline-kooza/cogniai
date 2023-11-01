export default async function getChats(userId) {
  const response = await fetch(
    `http://localhost:3000/api/chats?userId=${userId}`,
    {
      cache: "no-store",
    }
  );
  const chats = await response.json();
  console.log(chats);
  return chats;
}
