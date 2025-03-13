import {Ad} from "../types/ad";

export default function Adrenderer({type, impressions, clicks, ctr, url, description, headline}: Ad) {
    return (
        <div data-testid={type + "-adrenderer"} className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
            <div className="relative h-60 overflow-hidden">
                {type === "text" && <div className="absolute top-[50%] transform -translate-y-1/2 px-4 w-full">
                    <h3 className="text-2xl mb-3"><strong>{headline}</strong></h3>
                    <p className="">{description}</p>
                </div>}
                {type === "image" && <div>
                    <img className="absolute w-full h-full object-cover" src={url} alt=""/>
                </div>}
                {type === "video" && <div>
                    <video className="absolute w-full h-full object-cover" controls muted autoPlay>
                        <source src={url} type="video/mp4"/>
                    </video>
                </div>}
                <div className="absolute top-2 left-2 bg-gray-200 rounded-md py-0.5 px-1.5 text-xs capitalize"><strong>{type}</strong></div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 border-t-1 border-gray-200">
                <div>
                    <div className="text-xs">Impressions</div>
                    <div><strong>{impressions}</strong></div>
                </div>
                <div>
                    <div className="text-xs">Clicks</div>
                    <div><strong>{clicks}</strong></div>
                </div>
                <div>
                    <div className="text-xs">CTR</div>
                    <div><strong>{ctr.toFixed(2)}%</strong></div>
                </div>
            </div>
            <br/>
        </div>
    )
}