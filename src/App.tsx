import React, {useEffect, useState} from 'react';
import {fetchAds} from "./data/fetchAds";
import Adrenderer from "./components/Adrenderer";
import {Ad} from "./types/ad";

function App() {
    const [ads, setAds] = useState<Ad[]>([]);
    const [visibleAds, setVisibleAds] = useState<Ad[]>([]);

    useEffect(() => {
        fetchAds().then(ads => {
            setAds(ads)
            setVisibleAds(ads)
        });
    }, []);

    const filterAds = (filter: string) => {
        if (filter === "all") {
            setVisibleAds(ads)
        } else {
            setVisibleAds(ads.filter((ad) => ad.type === filter))
        }
    }

    const addSpaces = (num: number): string => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }


    const totalImpressions = () => {
        return addSpaces(visibleAds.reduce((sum, ad) => sum + ad.impressions, 0))
    }

    const totalClicks = () => {
        return addSpaces(visibleAds.reduce((sum, ad) => sum + ad.clicks, 0))
    }

    const averageCtr = () => {
        return (visibleAds.reduce((sum, ad) => sum + ad.ctr, 0) / visibleAds.length).toFixed(2);
    }
  return (
      <>
          <div className="mx-auto md:container px-4">
              <header className="flex items-center gap-4 pt-4 mb-8">
                  <h1 className="text-4xl flex-1"><strong>Add Performance Dashboard</strong></h1>
                  <div>
                      <select
                          className="bg-gray-100 rounded-sm py-1 px-3 shadow-md"
                          onChange={(e) => filterAds(e.target.value)}
                      >
                          <option value="all">All Ads</option>
                          <option value="image">Image</option>
                          <option value="text">Text</option>
                          <option value="video">Video</option>
                      </select>
                  </div>
              </header>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-100 rounded-xl p-4 shadow-md">
                      <div className="text-xs">Total Impressions</div>
                      <div className="text-3xl"><strong>{visibleAds.length ? totalImpressions() : "loading..."}</strong></div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4 shadow-md">
                      <div className="text-xs">Total Clicks</div>
                      <div className="text-3xl"><strong>{visibleAds.length ? totalClicks() : "loading..."}</strong></div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4 shadow-md">
                      <div className="text-xs">Average CTR</div>
                      <div className="text-3xl"><strong>{visibleAds.length ? averageCtr() : "loading..."}%</strong></div>
                  </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                  {visibleAds.map((ad) => (
                      <Adrenderer
                          key={ad.id}
                          id={ad.id}
                          type={ad.type}
                          impressions={ad.impressions}
                          clicks={ad.clicks}
                          ctr={ad.ctr}
                          url={ad.url}
                          headline={ad.headline}
                          description={ad.description}
                      />
                  ))}
              </div>
          </div>
      </>
  );
}

export default App;
