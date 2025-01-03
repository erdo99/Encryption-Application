"use client";
import ReactPlayer from 'react-player';

export default function MyVideoPage() {
    return (
      <div>
        <ReactPlayer
          url="/videos/myvideo.mp4"
          width="640" // veya istediğiniz sabit genişlik
          height="360" // veya istediğiniz sabit yükseklik
          controls={true}
          muted={true} // Sesin başlangıçta kapalı olması için
          playing={false} // Video başlangıçta oynatılmaması için
        />
      </div>
    );
  }