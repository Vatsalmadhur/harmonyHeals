import { Pause, Play } from "lucide-react";
import React, { useRef, useState } from "react";

const AudioCard = (props) => {
  const [isPlaying, setIsPlaying] = useState(false); // Track the play/pause state
  const audioRef = useRef(null); // Reference to the audio element

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the audio if it's currently playing
    } else {
      audioRef.current.play(); // Play the audio if it's currently paused
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };
  console.log(props.title);
  return (
    <div className={`w-[60vw] min-h-[50px] border-[1px] border-white flex items-center justify-evenly rounded-lg ${props.className} `}>
      <p className="text-white text-xl w-[60%] ">{props.title}</p>

      <audio ref={audioRef}
       src={`http://40.81.31.107:8083/${props.title}.mp3`}
       />

      {/* The audio file URL is just a random example, replace it with your desired audio URL */}

      <div>
        {/* Play/Pause Button */}
        <button onClick={handlePlayPause} className="text-white">
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>

      <p>Duration: {props.duration} min</p>
      {/* You can display the actual duration dynamically by using audioRef.current.duration */}
    </div>
  );
}

export default AudioCard;