import Link from 'next/link'
import directus from '../lib/directus'
import { readItems, readItem } from '@directus/sdk'
import { notFound } from 'next/navigation'
// async function getTags () {
//   return directus.request(readItems('tags'))
// }

//import { formatRelativeTime } from '../utils/format-relative-time'
async function getTags () {
  try {
    const tags = await directus.request(
      readItems('project', {
        fields: ['id', 'name', 'sort', 'date_created'],
        sort: ['sort']
        // limit: 99
      }),
      {
        next: { revalidate: 7 }
      }
    )

    console.log(tags)
    return tags
  } catch (error) {
    notFound('Error fetching data Mr Hamza :', error)
  }
}

export default async function TagsComponent () {
  const tags = await getTags()
  console.log(tags)
  // const [tags, setTags] = useState(null)
  // useEffect(() => {
  //   async function fetchData () {
  //     const result = await directus.items('tags').readMany({
  //       fields: ['*.*']
  //       // sort: '-publish_date'
  //     })

  //     console.log(result)
  //     setTags(result)
  //   }

  //   fetchData()
  // }, [])

  // const response = await directus.items('tags').readByQuery({
  //   fields: ['*.*']
  //   // sort: '-publish_date'
  // })
  // console.log(response)

  // const formattedTags = response.data.map(tags => {
  //   return {
  //     ...tags
  //     // publish_date: formatRelativeTime(new Date(article.publish_date))
  //   }
  // })

  return (
    <>
      <div>
        <h3 className='h3-tag pt-5'>Projects</h3>
        <ul className='tagg'>
          {tags &&
            tags.map(tag => (
              <li key={tag?.id} className='li-tag'>
                <Link className='a-tag' href={`/services/projects/${tag?.id}`}>
                  {tag?.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

// Tags.propTypes = {
//   tags: propTypes.object
// }

/* <li className='li-tag'>
  <Link className='a-tag' href='/#'>
    Vilas
  </Link>
</li>
<li className='li-tag'>
  <Link className='a-tag' href='/#'>
    Ofices
  </Link>
</li>
<li className='li-tag'>
  <Link className='a-tag' href='/#'>
    House
  </Link>
</li>
<li className='li-tag'>
  <Link className='a-tag' href='/#'>
    Companiess
  </Link>
</li>
<li className='li-tag'>
  <Link className='a-tag' href='/#'>
    Offices
  </Link>
</li>
<li className='li-tag'>
  <Link className='a-tag' href='/#'>
    Vilas
  </Link>
</li>
<li className='li-tag'>
  <Link className='a-tag' href='/#'>
    House
  </Link>
</li> */
