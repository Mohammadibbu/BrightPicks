import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={300}
    viewBox="0 0 500 300"
    backgroundColor="#302727"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="71" y="72" rx="3" ry="3" width="88" height="6" />
    <rect x="73" y="89" rx="3" ry="3" width="52" height="6" />
    <rect x="71" y="104" rx="3" ry="3" width="180" height="7" />
    <rect x="65" y="304" rx="3" ry="3" width="300" height="5" />
    <rect x="70" y="136" rx="3" ry="3" width="65" height="15" />
    <circle cx="85" cy="42" r="20" />
    <rect x="70" y="119" rx="3" ry="3" width="228" height="6" />
    <rect x="69" y="159" rx="3" ry="3" width="36" height="15" />
    <rect x="111" y="159" rx="3" ry="3" width="22" height="15" />
    <rect x="142" y="160" rx="3" ry="3" width="22" height="15" />
    <rect x="170" y="160" rx="3" ry="3" width="22" height="15" />
    <rect x="198" y="160" rx="3" ry="3" width="22" height="15" />
    <rect x="66" y="201" rx="3" ry="3" width="228" height="36" />
    <rect x="234" y="27" rx="3" ry="3" width="55" height="30" />
  </ContentLoader>
);

export default MyLoader;
