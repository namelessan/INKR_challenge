import { Manga } from '../types'
import classes from './detailOverview.module.less'
import { ShareAltOutlined, MoreOutlined, ReadOutlined, LikeOutlined } from '@ant-design/icons'
import { thousandize } from '../utils'
import { Tag, Button } from 'antd'

function Overview({ manga }) {
  return (
    <div className={classes.overview}>
      <div className={classes.overview__cover}>
        <img src={manga.cover} alt="mange cover" />
      </div>
      <div className={classes.overview__content}>
        <h1 className={classes.overview__content__header}>
          <span>{manga.title}</span>
          <span className={classes.overview__content__header__button}>
            <span className={classes['button-share']}>
              <ShareAltOutlined />
            </span>
            <span className={classes['button-more']}>
              <MoreOutlined />
            </span>
          </span>
        </h1>
        <div className={classes.overview__content__author}>{`By ${manga.author}`}</div>
        <div className={classes.overview__content__type}>{`${manga.type} * ${manga.chapters.length} chapters`}</div>
        <div className={classes.overview__content__interaction}>
          <span className={classes['interaction-read']}>
            <ReadOutlined /> {thousandize(manga.reads)}
          </span>
          <span className={classes['interaction-like']}>
            <LikeOutlined /> {thousandize(manga.likes)}
          </span>
        </div>
        <div className={classes.overview__content__tag}>
          {manga.tags.map((tag: string, i: number) => (
            <Tag key={i} className={classes.overview__content__tag__item}>
              {tag}
            </Tag>
          ))}
        </div>
        <Button className={classes.overview__content__button}>Read First Chapter for FREE</Button>
      </div>
    </div>
  )
}

export default Overview
