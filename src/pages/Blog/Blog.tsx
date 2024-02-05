import { BlogIntro } from "../../components/BlogIntro/BlogIntro"
import { blogItems } from "../../data/data"
import { BlogCard } from "../../components/BlogCard/BlogCard"
import { IBlogItem } from "../../library/types"
import { Button } from "../../components/Button/Button"
import { useState } from "react"

const Blog = () => {
  const [count, setCount] = useState(6)
  const items = blogItems.slice(0, count)
  return (
    <main id="Blog">
      <section>
        <BlogIntro />
      </section>

      <section>
        <div className="container mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-7.5 lg:gap-18">
            {items.map((item: IBlogItem) =>
              <li key={ item.id }>
                <BlogCard { ...item } />
              </li>
            )}
            
          </ul>
          <div className="container flex justify-center mt-12.5 md:mt-20 mx-auto">
            <Button onClick={ () => setCount(count > 6 ? 6 : count + 6) } arrow>
              { count === 6 ? 'Load More' : 'Show Less'}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export { Blog }