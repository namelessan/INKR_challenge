export interface Manga {
  id: number
  title: string
  author: string
  chapters: Chapter[]
  tags: string[]
  cover: string
  reads: number
  likes: number
  genres: string[]
  summary: string
  type: string
}

export interface Comment {
  id: number
  content: string
  likes: number
  replies: number
  chapter: Chapter
}

export interface Chapter {
  id: number
  title: string
}
