import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
const HitmaszBanner = ({ hitmaszBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{hitmaszBanner.smallText}</p>
        <h3>{hitmaszBanner.midText}</h3>
        <h1>{hitmaszBanner.largeText1}</h1>
        <img
          src={urlFor(hitmaszBanner.image)}
          alt="teleskopowa"
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${hitmaszBanner.product}`}>
            <button type="button">{hitmaszBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{hitmaszBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HitmaszBanner;
