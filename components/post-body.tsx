import markdownStyles from './markdown-styles.module.css'
import Script from 'next/script'


type Props = {
  content: string
	strava: string
}

const PostBody = ({ content, strava }: Props) => {

  return (

    <div className="max-w-2xl mx-auto">
	    <div className="strava-embed-placeholder" data-embed-type="activity" data-embed-id={strava}></div><Script src="https://strava-embeds.com/embed.js" />
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}


export default PostBody
