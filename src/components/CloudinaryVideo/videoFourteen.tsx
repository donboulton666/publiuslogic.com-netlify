import * as React from 'react'
import { useRef } from 'react'
import { AdvancedVideo, lazyload } from '@cloudinary/react'
// @ts-ignore
import { CloudinaryVideo } from '@cloudinary/url-gen'
// @ts-ignore
import { videoCodec } from '@cloudinary/url-gen/actions/transcode'
// @ts-ignore
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec'
import VideoWrapper from './wrapper'

const VideoFourteen = () => {
  const vid = new CloudinaryVideo('videos/Why_Does_Israel_Weaponize_Pornography_Against_Palestinians_', {
    cloudName: 'mansbooks',
  })
  const videoEl = useRef(null)
  const sources = [
    {
      type: 'mp4',
      codecs: ['avc1.4d002a'],
      transcode: videoCodec(auto()),
    },
    {
      type: 'webm',
      codecs: ['vp8', 'vorbis'],
      transcode: videoCodec(vp9()),
    },
  ]

  return (
    <>
      <VideoWrapper>
        <AdvancedVideo
          cldVid={vid}
          sources={sources}
          className="w-full bg-transparent"
          ref={videoEl}
          controls
          autoPlay
          loop
          plugins={[lazyload()]}
        />
      </VideoWrapper>
    </>
  )
}

export default VideoFourteen
