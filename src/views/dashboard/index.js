import React from "react"
import { Button, Result } from "antd"

const dashboard = () => {
  const color = "#fa541c"
  // const color = "#f00"
  // https://svg2jsx.com/
  return (
    <>

      <Result
        icon={
          <div style={{width: 180, margin: '0 auto'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              data-name="Layer 1"
              viewBox="0 0 516.62 440.93"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="208.35"
                  x2="284.25"
                  y1="414.17"
                  y2="458.09"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopOpacity="0"></stop>
                  <stop offset="0.99"></stop>
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="338.11"
                  x2="314.51"
                  y1="417.21"
                  y2="446.19"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-3"
                  x1="4.67"
                  x2="934.59"
                  y1="255.62"
                  y2="418.18"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-4"
                  x1="363.7"
                  x2="1293.62"
                  y1="255.62"
                  y2="418.18"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-5"
                  x1="162.8"
                  x2="628.35"
                  y1="342.71"
                  y2="327.18"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-6"
                  x1="196.94"
                  x2="167.05"
                  y1="120.64"
                  y2="703.93"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-7"
                  x1="194.43"
                  x2="198.91"
                  y1="234.15"
                  y2="17.21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" stopOpacity="0"></stop>
                  <stop offset="0.99" stopColor="#fff"></stop>
                </linearGradient>
                <linearGradient
                  id="linear-gradient-8"
                  x1="234.73"
                  x2="724.19"
                  y1="134.15"
                  y2="164.03"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-9"
                  x1="285.38"
                  x2="321.23"
                  y1="108.45"
                  y2="108.45"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ecc4d7"></stop>
                  <stop offset="0.42" stopColor="#efd4d1"></stop>
                  <stop offset="1" stopColor="#f2eac9"></stop>
                </linearGradient>
                <linearGradient
                  id="linear-gradient-10"
                  x1="267.46"
                  x2="754.23"
                  y1="206.27"
                  y2="261.85"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-11"
                  x1="250.42"
                  x2="691.47"
                  y1="228.58"
                  y2="481.38"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-12"
                  x1="281.79"
                  x2="328.41"
                  y1="399.04"
                  y2="82.89"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-13"
                  x1="284.68"
                  x2="431.1"
                  y1="342.71"
                  y2="70.79"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-14"
                  x1="314.25"
                  x2="320.23"
                  y1="419.58"
                  y2="263.3"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-15"
                  x1="307.65"
                  x2="364.72"
                  y1="428.68"
                  y2="473.5"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-16"
                  x1="201.84"
                  x2="201.64"
                  y1="213.33"
                  y2="155.55"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-17"
                  x1="200.86"
                  x2="202.54"
                  y1="204.54"
                  y2="250.56"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-18"
                  x1="296.1"
                  x2="335.54"
                  y1="83.26"
                  y2="107.76"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-19"
                  x1="253.09"
                  x2="223.8"
                  y1="191.88"
                  y2="159.01"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-20"
                  x1="159.49"
                  x2="192.23"
                  y1="222.08"
                  y2="222.08"
                  xlinkHref="#linear-gradient-9"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-21"
                  x1="87.94"
                  x2="161.75"
                  y1="129.68"
                  y2="117.13"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-22"
                  x1="148.76"
                  x2="147.27"
                  y1="35.72"
                  y2="115.51"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-23"
                  x1="143.55"
                  x2="142.06"
                  y1="35.63"
                  y2="115.41"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-24"
                  x1="184.55"
                  x2="183.05"
                  y1="36.39"
                  y2="116.18"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-25"
                  x1="230.12"
                  x2="228.63"
                  y1="37.25"
                  y2="117.03"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-26"
                  x1="155.34"
                  x2="153.84"
                  y1="35.85"
                  y2="115.63"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-27"
                  x1="164.9"
                  x2="163.4"
                  y1="36.02"
                  y2="115.81"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-28"
                  x1="191.59"
                  x2="190.1"
                  y1="36.52"
                  y2="116.31"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-29"
                  x1="161.84"
                  x2="160.35"
                  y1="35.97"
                  y2="115.75"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-30"
                  x1="243.27"
                  x2="241.78"
                  y1="37.49"
                  y2="117.28"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-31"
                  x1="195.93"
                  x2="194.44"
                  y1="36.61"
                  y2="116.39"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-32"
                  x1="226.41"
                  x2="224.91"
                  y1="37.18"
                  y2="116.96"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-33"
                  x1="148.76"
                  x2="147.27"
                  y1="56.34"
                  y2="136.13"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-34"
                  x1="143.55"
                  x2="142.06"
                  y1="56.24"
                  y2="136.03"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-35"
                  x1="184.55"
                  x2="183.05"
                  y1="57.01"
                  y2="136.8"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-36"
                  x1="230.12"
                  x2="228.63"
                  y1="57.86"
                  y2="137.65"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-37"
                  x1="155.34"
                  x2="153.84"
                  y1="56.46"
                  y2="136.25"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-38"
                  x1="164.9"
                  x2="163.4"
                  y1="56.64"
                  y2="136.43"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-39"
                  x1="191.59"
                  x2="190.1"
                  y1="57.14"
                  y2="136.93"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-40"
                  x1="161.84"
                  x2="160.35"
                  y1="56.59"
                  y2="136.37"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-41"
                  x1="243.27"
                  x2="241.78"
                  y1="58.11"
                  y2="137.89"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-42"
                  x1="195.93"
                  x2="194.44"
                  y1="57.22"
                  y2="137.01"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-43"
                  x1="226.41"
                  x2="224.91"
                  y1="57.8"
                  y2="137.58"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-44"
                  x1="148.76"
                  x2="147.27"
                  y1="76.96"
                  y2="156.74"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-45"
                  x1="143.55"
                  x2="142.06"
                  y1="76.86"
                  y2="156.65"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-46"
                  x1="184.55"
                  x2="183.05"
                  y1="77.63"
                  y2="157.41"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-47"
                  x1="230.12"
                  x2="228.63"
                  y1="78.48"
                  y2="158.27"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-48"
                  x1="155.34"
                  x2="153.84"
                  y1="77.08"
                  y2="156.87"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-49"
                  x1="164.9"
                  x2="163.4"
                  y1="77.26"
                  y2="157.05"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-50"
                  x1="191.59"
                  x2="190.1"
                  y1="77.76"
                  y2="157.55"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-51"
                  x1="161.84"
                  x2="160.35"
                  y1="77.2"
                  y2="156.99"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-52"
                  x1="243.27"
                  x2="241.78"
                  y1="78.73"
                  y2="158.51"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-53"
                  x1="195.93"
                  x2="194.44"
                  y1="77.84"
                  y2="157.63"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-54"
                  x1="226.41"
                  x2="224.91"
                  y1="78.41"
                  y2="158.2"
                  xlinkHref="#linear-gradient-7"
                ></linearGradient>
              </defs>
              <path
                fill={color}
                d="M325.11 440.5c24.89.3 49.86.58 74.57-2.4 12.33-1.48 24.76-3.84 35.82-9.49 12.18-6.22 22.07-16.11 31.1-26.39 19.49-22.18 36.21-47.35 45-75.53s9.18-59.66-2.88-86.61c-8-18-21.33-33.64-26.25-52.68-8.16-31.58 8.27-66-1.35-97.17-3.68-11.92-11-22.43-19.28-31.74-33.2-37.23-85-57-134.53-51.41-61.92 7-115.87 50.14-178 54.27-21 1.39-42.42-1.77-63 2.6-36.07 7.64-65.39 40.24-69.18 76.91-2.52 24.49 5.25 48.68 10.74 72.68 5.8 25.39 9 52.24 1.8 77.26-5.44 18.84-16.54 35.62-22.42 54.32-5.45 17.16-6.25 35.43-5.63 53.4.19 5.32.56 10.8 2.87 15.6 7.83 16.21 38.28 20.94 54.24 22.37 28.22 2.55 57.66.83 86 1.32q90.21 1.58 180.38 2.69z"
                opacity="0.18"
                transform="translate(-1.43 -6.14)"
                style={{ isolation: "isolate" }}
              ></path>
              <path
                fill={color}
                d="M256.19 431.44a4 4 0 01.1 2.45 3.89 3.89 0 01-.78 1.19c-3.09 3.49-7.7 5.16-12.1 6.69a32.45 32.45 0 01-4.71 1.36 28.06 28.06 0 01-5.18.31 150.6 150.6 0 01-17-1.08A20.11 20.11 0 01231.21 430c3.11-.61 6.31-.46 9.46-.77a1.35 1.35 0 001.14-.52 1.41 1.41 0 000-1l-1.26-4.7a2 2 0 01-.07-1.24c.21-.58.88-.84 1.47-1 2.13-.62 3.54-6.87 5.82-7s5.45 7.33 5.85 9.7c.48 2.92 2.24 6.74 2.57 7.97z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient)"
                d="M256.19 431.44a4 4 0 01.1 2.45 3.89 3.89 0 01-.78 1.19c-3.09 3.49-7.7 5.16-12.1 6.69a32.45 32.45 0 01-4.71 1.36 28.06 28.06 0 01-5.18.31 150.6 150.6 0 01-17-1.08A20.11 20.11 0 01231.21 430c3.11-.61 6.31-.46 9.46-.77a1.35 1.35 0 001.14-.52 1.41 1.41 0 000-1l-1.26-4.7a2 2 0 01-.07-1.24c.21-.58.88-.84 1.47-1 2.13-.62 3.54-6.87 5.82-7s5.45 7.33 5.85 9.7c.48 2.92 2.24 6.74 2.57 7.97z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill={color}
                d="M319.35 437.05c5.92 5.67 14.91 6.84 23 5.91 1.37-.16 2.93-.49 3.61-1.69s.17-2.71-.56-3.88c-1.72-2.72-4.51-4.58-7.32-6.16a67.16 67.16 0 00-13.08-5.59 8 8 0 01-2.68-1.19c-1.77-1.4-1.94-4-3.34-5.8-.59-.75-7.26-2.54-7.91-2-2 1.54.39 6.4 1.26 8.68 1.67 4.23 3.67 8.51 7.02 11.72z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient-2)"
                d="M319.35 437.05c5.92 5.67 14.91 6.84 23 5.91 1.37-.16 2.93-.49 3.61-1.69s.17-2.71-.56-3.88c-1.72-2.72-4.51-4.58-7.32-6.16a67.16 67.16 0 00-13.08-5.59 8 8 0 01-2.68-1.19c-1.77-1.4-1.94-4-3.34-5.8-.59-.75-7.26-2.54-7.91-2-2 1.54.39 6.4 1.26 8.68 1.67 4.23 3.67 8.51 7.02 11.72z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path fill={color} d="M411.52 240.32H460.62V440.36H411.52z"></path>
              <path fill={color} d="M52.35 240.32H101.45V440.36H52.35z"></path>
              <path
                fill="url(#linear-gradient-3)"
                d="M52.35 240.32H101.45V296.18H52.35z"
              ></path>
              <path
                fill="url(#linear-gradient-4)"
                d="M411.39 240.32H460.49V296.18H411.39z"
              ></path>
              <path fill={color} d="M34.17 223.95H471.54V243.95H34.17z"></path>
              <path
                fill={color}
                d="M256.55 277.37s-66.38 29.1-69.11 34.1-1.82 17.73 2.28 23.19 49.1 87.75 49.1 87.75l15-4.1-29.55-89.11s81.84-4.54 87.75-10.45 14.09-23.64 14.09-23.64l-42.74-38.65z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient-5)"
                d="M256.55 277.37s-66.38 29.1-69.11 34.1-1.82 17.73 2.28 23.19 49.1 87.75 49.1 87.75l15-4.1-29.55-89.11s81.84-4.54 87.75-10.45 14.09-23.64 14.09-23.64l-42.74-38.65z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <rect
                width="213.68"
                height="134.57"
                x="90.09"
                y="59.37"
                fill={color}
                rx="10.53"
              ></rect>
              <rect
                width="200.02"
                height="122.06"
                x="96.65"
                y="65"
                fill="url(#linear-gradient-6)"
                rx="9.7"
              ></rect>
              <rect
                width="200.02"
                height="122.06"
                x="96.65"
                y="65"
                fill="url(#linear-gradient-7)"
                rx="9.7"
              ></rect>
              <path
                fill="url(#linear-gradient-8)"
                d="M271.21 122.52c-5 9-12 16.72-16.65 25.9-3.37 6.71-5.37 14-8.41 20.88s-7.39 13.54-14 17.16c-2.69 1.48-5.9 2.62-7.29 5.35a250.69 250.69 0 0042.57 3 6.33 6.33 0 002.67-.43 6.77 6.77 0 002.38-2.46c9.68-13.86 25.69-23.83 30.38-40.07 2.17-7.47 1.61-15.43 1-23.19-.74-10.15-1.49-20.32-3-30.4-1.12-7.61-1.93-15.88-10-19.11-4.65-1.87-11.17-2-15.54.74-6.05 3.73-3.13 8-.82 13.19 4.5 9.67 1.68 20.57-3.29 29.44z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient-9)"
                d="M299.44 120.38a1.26 1.26 0 01.84.15 1.16 1.16 0 01.3.64 34.28 34.28 0 01.3 4.54 6.71 6.71 0 001.51 4.19c1.5 1.59 3.93 1.74 6.11 1.8a4.49 4.49 0 001.37-.11 8.78 8.78 0 001.69-1c1.55-.89 3.51-.74 5.1-1.55a6.33 6.33 0 001.64-1.27c3.15-3.3 3.44-8.47 2.38-12.92s-3.21-8.56-4.37-13c-1-3.91-1.28-8.17-3.53-11.53a2.76 2.76 0 00-2.11-1.46 43.85 43.85 0 00-10.18-.61c-2.74 0-5.6.15-8 1.46-1.54.83-5.84-5.73-6.92-4.36-.76 1 1.05 21.61 1.3 23.2 2.13 13.45 8.8 12.02 12.57 11.83z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill={color}
                d="M268.14 159.17s7.28-25.92 22.51-30.69 38.19-6.14 43.42-4.78 20.23 9.78 21.82 33.88 2.95 36.14 2.95 36.14l-4.09 101.39s-55.92 9.09-70.92 2.27l-5.46-25-5.45 19.55-16.37-14.55 9.09-30.46s-1.36-72.75 2.5-87.75z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient-10)"
                d="M268.14 159.17s7.28-25.92 22.51-30.69 38.19-6.14 43.42-4.78 20.23 9.78 21.82 33.88 2.95 36.14 2.95 36.14l-4.09 101.39s-55.92 9.09-70.92 2.27l-5.46-25-5.45 19.55-16.37-14.55 9.09-30.46s-1.36-72.75 2.5-87.75z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient-11)"
                d="M326.69 194c-3.69 6.1-5.38 13.16-7 20.08L309.06 259c-2.21 9.36-4.47 18.86-9.06 27.31s-11.87 15.91-21.12 18.55c-6.86 2-14.18 1.17-21.27 1.95a48.43 48.43 0 00-35.11 22 634.14 634.14 0 0087.55-4.9c4.29-.54 8.73-1.18 12.39-3.49 4.29-2.72 6.93-7.38 9-12 4.51-9.88 7.41-20.41 10-31a525.1 525.1 0 009.92-52.63c2.2-16.13 6.69-36.31 3.93-52.34-10.57 2.38-22.98 12.31-28.6 21.55z"
                opacity="0.48"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="none"
                stroke="#3cb6d5"
                strokeMiterlimit="10"
                strokeWidth="1.28"
                d="M236.88 221L263.08 220.77 263.76 208.72 236.88 221z"
              ></path>
              <path
                fill={color}
                d="M253.31 322.61L307.86 414.45 319.68 411.72 292.4 319.43 253.31 322.61z"
              ></path>
              <path
                fill="url(#linear-gradient-12)"
                d="M253.31 322.61L307.86 414.45 319.68 411.72 292.4 319.43 253.31 322.61z"
              ></path>
              <path
                fill={color}
                d="M425.23 229.64c-2.28 9.11-21.85 85-21.85 85s-5 20.92-20.44 20.92c-8.29 0-48.88-.72-84.73-1.4-31-.58-58.47-1.12-58.47-1.12s-3.63-13.41 7.71-14.34 43.64 0 43.64 0 15.94-.87 22.29-16.8c5.23-13 17.14-65.79 21.31-84.39a34 34 0 016.59-13.9c7.17-9.16 21.41-23.69 40.3-24.9 19.62-1.31 32.22 6.05 38.71 12.59a22.09 22.09 0 014.94 6.93c2.27 5.93 2.27 22.3 0 31.41z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient-13)"
                d="M420.29 191.32c0 .58 0 1.12-.05 1.7 0 0-38.22-13.61-66.85 29.35l-26.6 93.4s-5.28 17.73-28.58 18.41c-31-.58-58.47-1.12-58.47-1.12s-3.63-13.41 7.71-14.34 43.64 0 43.64 0 15.94-.87 22.29-16.8c5.23-13 17.14-65.79 21.31-84.39a34 34 0 016.59-13.9c7.17-9.16 21.41-23.69 40.3-24.9 19.62-1.31 32.22 6.05 38.71 12.59z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill={color}
                d="M311.95 328.33H319.21999999999997V440.82H311.95z"
              ></path>
              <path
                fill="url(#linear-gradient-14)"
                d="M311.95 328.33H319.21999999999997V440.82H311.95z"
              ></path>
              <path
                fill={color}
                opacity="0.18"
                style={{ isolation: "isolate" }}
                d="M311.95 440.82L311.95 328.33"
              ></path>
              <rect
                width="61.38"
                height="9"
                x="286.83"
                y="431.93"
                fill={color}
                rx="4.5"
              ></rect>
              <rect
                width="61.38"
                height="9"
                x="286.83"
                y="431.93"
                fill="url(#linear-gradient-15)"
                rx="4.5"
              ></rect>
              <path fill={color} d="M170.79 193.88H232.85V219.57H170.79z"></path>
              <path
                fill="url(#linear-gradient-16)"
                d="M170.79 193.88H232.85V219.57H170.79z"
              ></path>
              <path fill={color} d="M142.73 212.97H256.39V223.88H142.73z"></path>
              <path
                fill="url(#linear-gradient-17)"
                d="M144.52 213.77H258.18V222.32000000000002H144.52z"
              ></path>
              <path
                fill="#3f3d56"
                d="M297.54 68.07c-1.88 1.4-3.51 3.13-5.49 4.38a17.67 17.67 0 01-9 2.48c-2.15.07-4.78.1-5.81 2-.85 1.55 0 3.51 1.08 4.89A12.6 12.6 0 00282 84.9a8.7 8.7 0 012 1.28c1.23 1.25 1.24 3.23 2 4.81 1.08 2.22 3.54 3.4 5.12 5.3 3.11 3.73 2.35 9.49 5 13.53a13.57 13.57 0 006.35 4.7A20.2 20.2 0 00313.3 116a14.11 14.11 0 009.24-5.43c1.89-2.63 2.65-5.89 3.19-9.08 1.07-6.29 1.44-12.82-.14-19-3.12-12.15-15.98-23.39-28.05-14.42z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient-18)"
                d="M297.54 68.07c-1.88 1.4-3.51 3.13-5.49 4.38a17.67 17.67 0 01-9 2.48c-2.15.07-4.78.1-5.81 2-.85 1.55 0 3.51 1.08 4.89A12.6 12.6 0 00282 84.9a8.7 8.7 0 012 1.28c1.23 1.25 1.24 3.23 2 4.81 1.08 2.22 3.54 3.4 5.12 5.3 3.11 3.73 2.35 9.49 5 13.53a13.57 13.57 0 006.35 4.7A20.2 20.2 0 00313.3 116a14.11 14.11 0 009.24-5.43c1.89-2.63 2.65-5.89 3.19-9.08 1.07-6.29 1.44-12.82-.14-19-3.12-12.15-15.98-23.39-28.05-14.42z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill={color}
                d="M300.72 138.31a15.63 15.63 0 012.46 12.88c-2.62 11.37-9.87 38.35-22.08 50-15.69 15-39.55 30.69-89 29.33l.69-13.64s53.53-4.78 58.3-22.51 23.53-55.92 30.35-59.67c5.36-2.92 13.89-3.55 19.28 3.61z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient-19)"
                d="M300.72 138.31a15.63 15.63 0 012.46 12.88c-2.62 11.37-9.87 38.35-22.08 50-15.69 15-39.55 30.69-89 29.33l.69-13.64s53.53-4.78 58.3-22.51 23.53-55.92 30.35-59.67c5.36-2.92 13.89-3.55 19.28 3.61z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient-20)"
                d="M181.61 216.18a23.24 23.24 0 00-22.12 7.82l11.85 1.16a4.47 4.47 0 012.19.6 20.6 20.6 0 011.45 1.5 5.61 5.61 0 003.5 1c3.71.17 7.43.18 11.14 0a2.09 2.09 0 001.3-.35 2 2 0 00.55-1.09c.49-1.9 1.57-7.22-.27-8.55-.86-.61-3.5-.53-4.61-.82-1.66-.38-3.29-.93-4.98-1.27z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill={color}
                d="M442.7 57.63v46.45a9.29 9.29 0 01-9.29 9.28h-34.08l-14.46 21.57v-21.57h-23.54a9.28 9.28 0 01-9.29-9.28V57.63a9.28 9.28 0 019.29-9.28h72.08a9.29 9.29 0 019.29 9.28z"
                opacity="0.18"
                transform="translate(-1.43 -6.14)"
                style={{ isolation: "isolate" }}
              ></path>
              <path
                fill="#fff"
                d="M439.11 55.24v46.45a9.28 9.28 0 01-9.29 9.28h-34.07l-14.47 21.57V111h-23.53a9.29 9.29 0 01-9.3-9.28V55.24a9.29 9.29 0 019.3-9.28h72.07a9.28 9.28 0 019.29 9.28z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient-21)"
                d="M109.64 73.07H118.08V177.47H109.64z"
              ></path>
              <path
                fill={color}
                d="M374.94 79.21l14.62-7.53v2.18L377.24 80v.07l12.32 6.17v2.18l-14.62-7.53zM391.6 89.71l8.79-22.85h2.14l-8.82 22.85zM419.13 81l-14.61 7.5v-2.23l12.41-6.17V80l-12.41-6.17v-2.15l14.61 7.5z"
                transform="translate(-1.43 -6.14)"
              ></path>
              <path
                fill="url(#linear-gradient-22)"
                d="M134.17 89.68H161.29999999999998V91.67H134.17z"
              ></path>
              <path
                fill="url(#linear-gradient-23)"
                d="M134.17 93.53H150.73V95.4H134.17z"
              ></path>
              <path
                fill="url(#linear-gradient-24)"
                d="M157.41 93.53H209.51999999999998V95.41H157.41z"
              ></path>
              <path
                fill="url(#linear-gradient-25)"
                d="M214.39 93.53H243.71999999999997V95.41H214.39z"
              ></path>
              <path
                fill="url(#linear-gradient-26)"
                d="M142.78 97.39H165.55V99.36H142.78z"
              ></path>
              <path
                fill="url(#linear-gradient-27)"
                d="M150.09 101.24H177.22V103.22999999999999H150.09z"
              ></path>
              <path
                fill="url(#linear-gradient-28)"
                d="M178.99 101.24H201.73000000000002V103.44999999999999H178.99z"
              ></path>
              <path
                fill="url(#linear-gradient-29)"
                d="M150.05 105.09H171V106.96000000000001H150.05z"
              ></path>
              <path
                fill="url(#linear-gradient-30)"
                d="M231.51 105.09H252.45999999999998V106.96000000000001H231.51z"
              ></path>
              <path
                fill="url(#linear-gradient-31)"
                d="M173.01 105.09H216.23999999999998V107.16H173.01z"
              ></path>
              <path
                fill="url(#linear-gradient-32)"
                d="M220.35 105.09H229.88V107.2H220.35z"
              ></path>
              <path
                fill="url(#linear-gradient-33)"
                d="M134.17 110.3H161.29999999999998V112.28999999999999H134.17z"
              ></path>
              <path
                fill="url(#linear-gradient-34)"
                d="M134.17 114.15H150.73V116.02000000000001H134.17z"
              ></path>
              <path
                fill="url(#linear-gradient-35)"
                d="M157.41 114.15H209.51999999999998V116.03H157.41z"
              ></path>
              <path
                fill="url(#linear-gradient-36)"
                d="M214.39 114.15H243.71999999999997V116.03H214.39z"
              ></path>
              <path
                fill="url(#linear-gradient-37)"
                d="M142.78 118H165.55V119.97H142.78z"
              ></path>
              <path
                fill="url(#linear-gradient-38)"
                d="M150.09 121.86H177.22V123.85H150.09z"
              ></path>
              <path
                fill="url(#linear-gradient-39)"
                d="M178.99 121.86H201.73000000000002V124.07H178.99z"
              ></path>
              <path
                fill="url(#linear-gradient-40)"
                d="M150.05 125.71H171V127.58H150.05z"
              ></path>
              <path
                fill="url(#linear-gradient-41)"
                d="M231.51 125.71H252.45999999999998V127.58H231.51z"
              ></path>
              <path
                fill="url(#linear-gradient-42)"
                d="M173.01 125.71H216.23999999999998V127.77999999999999H173.01z"
              ></path>
              <path
                fill="url(#linear-gradient-43)"
                d="M220.35 125.71H229.88V127.82H220.35z"
              ></path>
              <path
                fill="url(#linear-gradient-44)"
                d="M134.17 130.92H161.29999999999998V132.91H134.17z"
              ></path>
              <path
                fill="url(#linear-gradient-45)"
                d="M134.17 134.77H150.73V136.64000000000001H134.17z"
              ></path>
              <path
                fill="url(#linear-gradient-46)"
                d="M157.41 134.77H209.51999999999998V136.65H157.41z"
              ></path>
              <path
                fill="url(#linear-gradient-47)"
                d="M214.39 134.77H243.71999999999997V136.65H214.39z"
              ></path>
              <path
                fill="url(#linear-gradient-48)"
                d="M142.78 138.62H165.55V140.59H142.78z"
              ></path>
              <path
                fill="url(#linear-gradient-49)"
                d="M150.09 142.47H177.22V144.46H150.09z"
              ></path>
              <path
                fill="url(#linear-gradient-50)"
                d="M178.99 142.47H201.73000000000002V144.68H178.99z"
              ></path>
              <path
                fill="url(#linear-gradient-51)"
                d="M150.05 146.33H171V148.20000000000002H150.05z"
              ></path>
              <path
                fill="url(#linear-gradient-52)"
                d="M231.51 146.33H252.45999999999998V148.20000000000002H231.51z"
              ></path>
              <path
                fill="url(#linear-gradient-53)"
                d="M173.01 146.33H216.23999999999998V148.4H173.01z"
              ></path>
              <path
                fill="url(#linear-gradient-54)"
                d="M220.35 146.33H229.88V148.44000000000003H220.35z"
              ></path>
            </svg>
          </div>
        }
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>
        ]}
      />
    </>
  )
}

export default dashboard