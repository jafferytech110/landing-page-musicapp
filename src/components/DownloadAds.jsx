import React from 'react'

const DownloadAds = () => {
    const downloadImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div className="download">
        <div className="download_images flex space-x-2">
            <img src={require("../img/App Store.png")} alt="apple store icon" className={downloadImgStyle}/>
            <img src={require("../img/Google Play.png")} alt="android store icon" className={downloadImgStyle}/>
        </div>
    </div>
    )
}

export default DownloadAds