import Image from "next/image";

import HeroCopy from "./(hero)/components/HeroCopy";

export default function Home() {
  return (
    <>
      <div className="relative w-screen h-screen">
        <video
          src="/images/hero-bg.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          // playsInline
        />
        {/* <div className="w-screen h-screen bg-red-400 bg-blend-overlay"> */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-gray-800">
          <svg
            className="absolute top-1/2 left-1/2 w-3/4 h-3/4 fill-[#222527] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
            // className="absolute top-1/2 left-1/2 w-3/4 h-3/4 fill-[#838891] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 114.025 76.152"
          >
            <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path d="M-274.405 315.22h566.93v-566.929h-566.93Z" />
              </clipPath>
              <clipPath id="b" clipPathUnits="userSpaceOnUse">
                <path d="M-191.254 211.043h566.929v-566.929h-566.93Z" />
              </clipPath>
              <clipPath id="c" clipPathUnits="userSpaceOnUse">
                <path d="M-238.082 270.682h566.93v-566.93h-566.93Z" />
              </clipPath>
              <clipPath id="d" clipPathUnits="userSpaceOnUse">
                <path d="M-366.11 217.026h566.929v-566.929h-566.93Z" />
              </clipPath>
              <clipPath id="e" clipPathUnits="userSpaceOnUse">
                <path d="M-322.004 279.154h566.929v-566.93h-566.93Z" />
              </clipPath>
            </defs>
            <path
              d="M0 0v7.518l-23.177 46.403-8.614-1.079-22.776 23.467-7.169-.897-17.801 23.335-6.448-.553-.943 1.373c-25.503 37.148-43.997 81.183-51.64 100.851h-8.764c15.175-53.9 37.739-96.962 42.434-105.631l21.176 1.671.451-5.701-10.048-.793c4.863-5.105 12.921-13.473 17.858-18.122l14.208 1.677.67-5.68-3.208-.379c6.478-5.389 17.195-14.333 21.339-17.951l14.034 1.825.737-5.671-2.328-.303z"
              // clip-path="url(#a)"
              transform="matrix(.35278 0 0 -.35278 56.004 72.604)"
            />
            <path
              d="m0 0 20.26 1.736.489-5.698-10.384-.89 13.602-17.83 14.706 1.841.71-5.674-3.694-.463 17.789-18.328 14.712 1.843.71-5.675-2.91-.364 17.16-34.357v19.667h5.72v-19.669l17.161 34.359-2.911.364.711 5.675 14.712-1.843 17.788 18.328-3.693.463.71 5.674 14.706-1.841 13.602 17.83-10.384.89.489 5.698L172.021 0c26.27 38.704 44.871 84.547 51.364 101.631h-32.009s-34.594-69.494-72.555-119.394H53.2c-37.962 49.9-72.555 119.394-72.555 119.394h-32.009C-44.871 84.547-26.27 38.704 0 0"
              // clip-path="url(#b)"
              transform="matrix(.35278 0 0 -.35278 26.67 35.853)"
            />
            <path
              d="m0 0-7.989-1.039-.978.884c-3.703 3.344-21.895 18.464-26.338 22.152l-5.778-.682-.967.886c-6.257 5.738-18.735 18.889-22.282 22.645l-7.454-.588-.897 1.589c-.275.486-25.608 45.731-42.731 104.642h-7.014c4.295-21.616 15.149-70.288 32.548-109.565l22.928 1.81.451-5.701-8.199-.648c5.711-4.885 15.093-12.762 22.57-18.324l12.941 1.447.636-5.684-2.09-.234C-33.299 8.016-21.097-1.241-17.19-4.181l12.824 1.624.719-5.673-1.91-.242 37.831-46.123c.838.413 1.798 1.024 2.733 1.68z"
              // clip-path="url(#c)"
              transform="matrix(.35278 0 0 -.35278 43.19 56.892)"
            />
            <path
              d="m0 0-6.449.553-17.801-23.335-7.169.897-22.775-23.467-8.615 1.079-23.177-46.405v-7.517l30.009 45.361-2.328.303.738 5.671 14.033-1.825c4.144 3.619 14.862 12.562 21.34 17.952l-3.208.378.67 5.68 14.207-1.677C-5.587-21.703 2.47-13.335 7.333-8.23l-10.047.793.45 5.702 21.176-1.672c4.697 8.674 27.265 51.759 42.434 105.631h-8.764C44.939 82.556 26.445 38.521.942 1.373Z"
              // clip-path="url(#d)"
              transform="matrix(.35278 0 0 -.35278 88.355 37.964)"
            />
            <path
              d="m0 0-1.91.242.719 5.674 12.824-1.625c3.907 2.94 16.109 12.197 23.452 17.771l-2.089.234.635 5.684 12.942-1.447c7.478 5.562 16.859 13.439 22.57 18.324l-8.199.648.451 5.702 22.928-1.811c17.399 39.277 28.253 87.949 32.548 109.565h-7.015C92.734 100.05 67.4 54.806 67.126 54.319l-.897-1.589-7.454.588c-3.547-3.756-16.025-16.907-22.282-22.645l-.966-.886-5.779.682C25.305 26.781 7.113 11.662 3.411 8.317l-.979-.884-7.989 1.039-35.007-52.914c.935-.657 1.895-1.268 2.732-1.681z"
              // clip-path="url(#e)"
              transform="matrix(.35278 0 0 -.35278 72.796 59.881)"
            />
          </svg>
        </div>
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[url(/images/next.svg)] bg-cover bg-blend-multiply" /> */}
      </div>
      <div className="absolute top-0 left-0">
        <div className="grid place-items-center  w-screen h-screen">
          <HeroCopy />
        </div>
      </div>
    </>
    // </div>
  );
}
