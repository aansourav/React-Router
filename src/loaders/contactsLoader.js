import { getContact, getContacts } from '../contacts'

export async function contactsLoader ({ request }) {
  const url = new URL(request.url)
  const q = url.searchParams.get('q')
  const contacts = await getContacts(q)
  return { contacts, q }
}

export async function contactLoader ({ params }) {
  const contact = await getContact(params.contactId)
  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found'
    })
  }

  return { contact }
}
