import { MongoClient, ObjectId } from 'mongodb'
import fs from 'fs'

const envText = fs.readFileSync('.env', 'utf8')
const dbUrlLine = envText.split('\n').find(l => l.startsWith('DATABASE_URL='))
const url = dbUrlLine.slice('DATABASE_URL='.length).trim()

const client = new MongoClient(url)
await client.connect()
const db = client.db()

const mediaIds = new Set((await db.collection('media').find({}, { projection: { _id: 1 } }).toArray()).map(d => d._id.toString()))
console.log('Media docs count:', mediaIds.size)

const projects = await db.collection('projects').find({}).toArray()
console.log('Projects count:', projects.length)

for (const p of projects) {
  const orphaned = []
  for (const item of (p.images || [])) {
    const imgId = item.image ? item.image.toString() : null
    if (imgId && !mediaIds.has(imgId)) {
      orphaned.push(imgId)
    }
    if (!imgId) {
      orphaned.push('(empty/null image ref)')
    }
  }
  console.log(`Project "${p.title}" (${p._id}): ${p.images ? p.images.length : 0} image items, orphaned: ${JSON.stringify(orphaned)}`)
}

await client.close()
