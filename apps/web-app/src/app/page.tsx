import { useEffect } from "react";
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '2ah50nc7',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}

export async function createPost(post: Post) {
  const result = client.create(post)
  return result
}

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({ title })
  return result
}

const Categories = async () => {
  const categories = await client.fetch('*[_type == "category"]');

  return (
    <div>
      {categories.map(category => <div>{category.name}</div>)}
    </div>
  )

}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello world!
      <Categories />
    </main>
  );
}
