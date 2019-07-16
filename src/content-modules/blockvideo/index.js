import React from 'react'

export default function BlockVideo({ video }) {
  return (
    <section>
          <video className="hero" playinline autoPlay muted>
            <source src={video.file.url} type="video/mp4" />
          </video>
    </section>
  );
}
