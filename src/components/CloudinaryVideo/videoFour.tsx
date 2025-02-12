import * as React from 'react'
import { useRef } from 'react'
import { AdvancedVideo, lazyload } from '@cloudinary/react'
// @ts-ignore
import { Cloudinary } from '@cloudinary/url-gen'
// @ts-ignore
import { scale } from "@cloudinary/url-gen/actions/resize";
// @ts-ignore
import { max } from "@cloudinary/url-gen/actions/roundCorners";
// @ts-ignore
import { videoCodec } from '@cloudinary/url-gen/actions/transcode'
// @ts-ignore
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec'
import VideoWrapper from './wrapper'

const VideoFour = () => {
  const videoEl = useRef(null)
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'mansbooks'
    }
  });
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

  const myVideo = cld.video('videos/hitler')
  myVideo
    .resize(scale().width(600))
    .roundCorners(max());

  return (
    <>
      <VideoWrapper>
        <AdvancedVideo
          cldVid={myVideo}
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

export default VideoFour
