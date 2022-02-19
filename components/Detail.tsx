import { Chapter, Manga } from '../types'
import DetailOverview from './DetailOverview'
import { Row, Col } from 'antd'
import classes from './detail.module.less'

function Detail() {
  const chapters: Chapter[] = Array.from({ length: 10 }).map((_, i) => ({ id: i + 1, title: `Chapter ${i + 1}` }))

  const manga: Manga = {
    id: 1,
    title: 'Kasane',
    author: 'Kodansha',
    chapters,
    tags: ['18+', 'new', 'trending', 'bestseller', 'manga'],
    cover: require('../assets/images/cover.png').default.src,
    reads: 74483,
    likes: 15863,
    genres: ['Horror', 'Psychological', 'Seinen'],
    summary:
      "Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. Howe...",
    type: 'Drama'
  }

  return (
    <div className={classes.container}>
      <Row gutter={32}>
        <Col lg={15} xl={16}>
          <DetailOverview manga={manga}></DetailOverview>
        </Col>
        <Col lg={9} xl={8}></Col>
      </Row>
    </div>
  )
}

export default Detail
