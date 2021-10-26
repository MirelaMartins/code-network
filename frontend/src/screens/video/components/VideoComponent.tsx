import React from 'react'
// 'http://192.168.15.13:4000/api/upload/7fea670fd64912fa06dd42911ff4cc3e'
const VideoComponent: React.FC = () => {
  return (
    <video width="650" controls muted >
      <source src="http://localhost:4000/api/upload/7fea670fd64912fa06dd42911ff4cc3e" ></source>
    </video>
  )
}

export default VideoComponent
