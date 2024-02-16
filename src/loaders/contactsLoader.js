import { getContacts } from "../contacts";

export async function contactLoader() {
  const contacts = await getContacts();
  return { contacts };
}
