declare module '*.module.css'
declare module '*.module.scss'
// and so on for whatever flavor of css you're using
declare module '*.module.less' {
  const resource: { [key: string]: string }
  export = resource
}
