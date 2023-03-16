import cardImg from '../../images/Cover.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function BigCard() {

    const [videos, setVideos] = useState([]);

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
            "X-RapidAPI-Key": "9a1415f26cmshdb16db78cfd4330p155a7cjsn29e5eedb9562",
        },
    };

    useEffect(() => {
        fetch(`https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50`, options)
            .then((response) => response.json())
            .then((response) => {
                setVideos(response.items);
                console.log(response.items)
            })
            .catch((err) => console.error(err));
    }, []);


    return (

        videos.splice(7, 7).map((video, index) => (
            <Link to={`/singlepages/${video.id.videoId}`}>
                <li key={video.id.videoId} style={{ width: 400 }} className="relative">
                    <img style={{ width: 400 }} className='rounded-xl' src={video.snippet.thumbnails.medium.url} />
                    <span className="vaqt absolute top-48 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">{video.snippet.publishTime.substring(11, 16)}</span>
                    <h3 key={index + 1} className="font-medium">{video.snippet.channelTitle}</h3>
                    <div className="flex justify-between">
                        <span className='text-xs text-slate-400'>34k views  ·  5 months ago</span>
                        <span className='text-xs text-right text-slate-400'>Gussie French</span>
                    </div>
                </li>
            </Link>
        ))
    )
}





export default BigCard;