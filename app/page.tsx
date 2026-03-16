"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  LayoutDashboard,
  Users,
  Sparkles,
  CreditCard,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const SPIDER_PATH = `M 491.45207,1178.5427 C 460.44085,1087.7365 436.53296,991.76509 427.04527,920 c -3.76402,-28.47117 -7.45943,-78.77081 -8.6856,-118.2233 l -0.67204,-21.62297 8.81258,-18.32687 c 4.84693,-10.07977 30.05813,-61.14212 56.02491,-113.47187 46.9236,-94.56319 47.24216,-95.16681 52.0936,-98.70888 6.8253,-4.9832 14.24306,-8.91313 15.73962,-8.33884 1.77009,0.67924 10.82252,21.5818 9.96783,23.01627 -0.38552,0.64705 -6.70257,10.22787 -14.03789,21.29071 -16.63681,25.091 -16.33674,24.01492 -13.96434,50.07695 4.45713,48.96384 19.71426,123.25274 35.18264,171.3088 5.60669,17.41846 12.68647,35.13685 14.28479,35.75018 0.84893,0.32577 2.46134,-0.77681 3.98718,-2.72647 3.02748,-3.86841 11.33096,-8.00016 16.10543,-8.01394 6.1379,-0.0177 11.43941,2.29554 16.54985,7.22135 2.7212,2.62289 5.26981,4.76888 5.66358,4.76888 2.02079,0 17.63465,-43.25513 25.26799,-70 15.59055,-54.62441 31.61204,-143.24996 28.9888,-160.35639 -0.86926,-5.66852 -2.70915,-9.07536 -16.44244,-30.44584 C 655.36029,573.003 650,564.19719 650,563.62932 650,561.24874 660.12463,542 661.37679,542 c 1.73751,0 15.5366,9.03075 17.91989,11.72759 1.62285,1.83635 15.59544,30.43642 39.70572,81.27241 4.82576,10.175 13.37588,28.175 19.00028,40 31.79898,66.85566 48.95614,103.6409 50.05497,107.31871 0.84044,2.813 -0.99861,45.32242 -3.1011,71.68129 -1.93625,24.27467 -6.93598,66.13851 -10.03199,84 -10.23936,59.07281 -28.17759,128.4596 -51.96358,201 -3.54751,10.8189 -15.86952,45.6952 -19.87822,56.2635 -7.08064,18.667 -5.1579,16.9887 7.61056,-6.6431 20.27559,-37.5258 48.39276,-98.9463 62.22382,-135.9246 8.67372,-23.1898 29.14709,-91.10395 37.54363,-124.53958 10.3274,-41.12445 17.98769,-85.22197 23.66249,-136.21634 l 2.28799,-20.56012 -7.0193,-11.43988 C 825.53134,753.64795 812.33782,732.075 800.07302,712 c -24.0819,-39.41721 -28.3079,-46.27344 -65.3356,-106 -36.23473,-58.4475 -41.83279,-67.32907 -43.6166,-69.19977 -0.89145,-0.93487 -7.22264,-3.67784 -14.06932,-6.09549 -6.84667,-2.41765 -12.60366,-4.86123 -12.79332,-5.43019 -0.44143,-1.32431 4.98274,-2.05347 21.46967,-2.8861 l 13.22785,-0.66804 3.77215,3.88979 c 2.07468,2.13939 12.59815,14.2398 23.38549,26.8898 21.31644,24.99717 54.57531,62.39679 113.38364,127.5 27.80595,30.78231 46.94596,52.96136 49.00302,56.78369 1.90705,3.54359 1.99897,5.59862 1.97775,44.21631 -0.0231,42.03472 -0.64635,52.12135 -5.56108,90 -4.48455,34.56322 -10.30388,63.03077 -20.02256,97.94837 -6.7501,24.25196 -22.32378,65.54633 -34.81049,92.30163 -10.57435,22.6577 -11.96464,25.75 -11.5772,25.75 1.5751,0 20.6825,-28.4947 30.33523,-45.2387 C 889.98493,970.39274 917.11257,887.58853 934.92538,779 937.49875,763.3125 943,721.7713 943,718.02669 c 0,-0.64634 -2.5875,-3.90429 -5.75,-7.23988 -5.92067,-6.24472 -45.29488,-42.91282 -71.71571,-66.78681 -8.21708,-7.425 -20.60397,-18.675 -27.52641,-25 -20.95405,-19.1456 -49.88364,-45.22424 -55.46606,-50 -2.89305,-2.475 -20.62752,-18.225 -39.40995,-35 -18.78243,-16.775 -35.24799,-30.91634 -36.59014,-31.4252 -1.6283,-0.61735 -7.03235,-0.3332 -16.24101,0.85399 C 669.21239,506.1475 667,506.32786 667,505.32832 c 0,-0.50937 8.95458,-5.33735 19.89907,-10.72885 16.12449,-7.94327 20.44401,-9.68303 22.77187,-9.17174 2.96322,0.65083 22.08616,15.66936 68.73001,53.97831 36.8618,30.27488 80.92672,66.51735 107.18283,88.15564 38.68308,31.87964 40.23719,32.95321 41.80159,28.87644 0.32965,-0.85904 1.10698,-9.07154 1.72741,-18.25 2.60331,-38.51258 -2.07649,-112.17589 -11.14531,-175.43499 C 910.1198,408.01218 895.31196,353.96816 878.41944,318.41514 874.39954,309.95463 871,305.12861 871,307.88244 c 0,0.62003 1.55366,6.64118 3.45258,13.38034 11.19746,39.73918 18.29608,88.7645 20.30564,140.23722 1.60234,41.04226 0.10287,126.97224 -2.25683,129.33194 -1.09937,1.09937 4.06782,4.84487 -96.00139,-69.58782 C 721.86825,465.73213 713.83956,460 710.71851,460 c -1.32047,0 -10.97919,5.14114 -21.46382,11.42475 -21.78973,13.05894 -25.22794,14.93533 -25.98308,14.18019 -1.03914,-1.03914 2.68862,-5.24174 23.89165,-26.93493 17.9262,-18.34061 21.65643,-21.70743 23.33674,-21.06327 2.76463,1.05983 8.78089,4.95931 58.5,37.91713 C 839.87747,522.50714 848.36836,528 850.11794,528 c 2.70735,0 2.89757,-2.29261 1.34827,-16.24976 -4.81735,-43.39779 -12.88122,-88.126 -20.95828,-116.25024 -7.59619,-26.44982 -25.35589,-73.69601 -38.64931,-102.81885 -12.37042,-27.10079 -26.57601,-52.91157 -27.55354,-50.0633 -0.211,0.61482 2.05755,7.58982 5.04123,15.5 18.32033,48.56993 31.41355,99.6866 37.62296,146.88215 4.0466,30.75685 7.96737,70.46336 7.04854,71.38219 -0.88644,0.88644 -8.17426,-3.71185 -73.63832,-46.46246 -31.45972,-20.54444 -30.88783,-20.21055 -33.30384,-19.44374 -1.01684,0.32273 -13.18891,12.08359 -27.04905,26.13524 -13.86013,14.05165 -25.43124,25.31746 -25.71357,25.03514 -0.28233,-0.28233 0.23738,-3.50666 1.1549,-7.16519 2.00311,-7.98718 1.4862,-9.99871 -4.83856,-18.82915 -6.68928,-9.33936 -24.05993,-25.36296 -26.55542,-24.49612 -0.54481,0.18925 0.67818,3.94409 2.71774,8.34409 3.41468,7.36655 3.70831,8.71612 3.70831,17.04398 0,7.06219 -0.39887,9.65273 -1.82027,11.82207 -1.79429,2.73843 -1.91563,2.76635 -8.5,1.95602 -8.59388,-1.05764 -22.24989,-1.05239 -28.85218,0.0111 -4.80442,0.77389 -5.28396,0.663 -6.73958,-1.55857 -2.49204,-3.80333 -3.67128,-12.06235 -2.5594,-17.92525 0.53724,-2.83286 2.58637,-8.49709 4.55362,-12.58717 1.96725,-4.09008 3.3919,-7.62143 3.16588,-7.84744 -0.22601,-0.22601 -2.62113,1.05071 -5.32249,2.83716 -6.77021,4.47726 -20.29627,18.05784 -24.89557,24.99591 -4.03836,6.0919 -4.14745,7.21286 -1.89792,19.50219 0.3272,1.7875 0.19346,3.25 -0.2972,3.25 -0.49067,0 -7.58245,-7.0875 -15.75952,-15.75 C 513.82605,415.85336 506.80487,409 504.43771,409 c -1.2302,0 -4.64445,1.63095 -7.58722,3.62433 -2.94277,1.99338 -17.95049,11.52394 -33.35049,21.17902 -15.4,9.65507 -33.52294,21.07412 -40.27321,25.37566 C 416.47653,463.48056 410.69436,467 410.37752,467 c -0.31684,0 -3.23822,1.64317 -6.49196,3.6515 -3.25374,2.00832 -6.2331,3.3343 -6.62079,2.94661 -0.81904,-0.81904 5.47848,-50.80669 9.71293,-77.09811 7.46603,-46.35609 21.70171,-97.51615 39.38566,-141.54382 5.12913,-12.76997 5.73966,-15.54449 2.73485,-12.4284 -5.79573,6.01037 -26.85873,47.77075 -39.57962,78.47222 -27.22631,65.70984 -36.61128,99.84711 -47.52175,172.85751 -3.07176,20.55547 -3.79725,28.67542 -2.66337,29.8093 1.28483,1.28482 10.98497,-4.46026 44.16653,-26.15843 7.7,-5.0352 16.025,-10.38555 18.5,-11.88966 2.475,-1.50411 13.82005,-8.67114 25.21123,-15.92673 C 495.58,438.88356 501.81215,435 502.88326,435 505.06911,435 549,482.01834 549,484.35781 c 0,1.75848 -3.84878,-0.0897 -16.58251,-7.96304 C 505.82279,459.95118 503.71563,458.75 501.46432,458.75 c -3.46369,0 -19.2781,10.88852 -86.96432,59.87661 -15.95,11.54385 -41.6,29.94202 -57,40.88482 -15.4,10.9428 -30.20356,21.6246 -32.8968,23.73734 -7.05109,5.5313 -7.96916,4.97978 -8.75395,-5.25884 -1.0389,-13.55383 -0.94246,-81.78856 0.14711,-104.09332 2.82523,-57.83548 10.13738,-108.55774 21.58356,-149.71881 2.49641,-8.97721 4.39415,-17.07393 4.21721,-17.99271 -0.72333,-3.75595 -14.83286,27.65758 -22.59918,50.31491 -14.74834,43.02657 -24.92133,94.30124 -33.13311,167 -4.59571,40.68569 -5.40106,53.67815 -5.48578,88.5 -0.0827,33.9927 0.38713,40 3.12836,40 1.97782,0 13.92649,-8.92935 42.79258,-31.97931 12.1,-9.66201 26.5598,-21.15681 32.1329,-25.54399 5.57309,-4.38719 22.44809,-17.73345 37.5,-29.65836 95.20937,-75.42988 101.62783,-80.37571 105.71662,-81.4613 1.74342,-0.46289 7.03176,1.71658 20.5,8.44861 19.8817,9.93776 22.26844,11.38546 21.31469,12.92865 -0.43618,0.70576 -2.96415,0.59166 -7.90277,-0.35671 -15.3021,-2.93847 -28.9862,-4.32732 -31.17427,-3.16399 -2.93682,1.56141 -22.72995,18.49087 -91.44182,78.21202 -22.19506,19.29091 -41.99506,36.31752 -44,37.83691 -2.00494,1.51939 -4.54535,3.79226 -5.64535,5.05083 -1.1,1.25856 -9.14753,8.56543 -17.88341,16.23747 -8.73587,7.67204 -22.28889,19.57417 -30.11781,26.44917 -25.49131,22.3853 -45.95093,41.2239 -48.25959,44.43597 l -2.26082,3.14549 1.52174,14.45927 c 3.62058,34.40208 9.33698,74.31823 14.10038,98.45927 18.27786,92.63269 40.00992,155.58162 74.97345,217.1675 11.67297,20.5612 29.76874,47.3231 31.09915,45.9927 0.24716,-0.2471 -1.99673,-5.3343 -4.98642,-11.3048 C 354.19341,1022.4506 331.73654,949.75225 322.57605,886 c -6.25863,-43.55684 -9.10963,-101.06995 -6.80207,-137.21781 0.88641,-13.88547 1.09951,-14.93171 3.76806,-18.5 3.35958,-4.4923 14.69099,-17.23573 30.03901,-33.78219 6.12197,-6.6 14.20578,-15.375 17.96401,-19.5 3.75824,-4.125 21.98266,-23.7 40.49873,-43.5 36.58836,-39.12547 56.95134,-61.40871 83.84612,-91.75296 9.56444,-10.79117 18.56444,-20.09893 20,-20.68392 1.88466,-0.76801 7.0035,-0.67701 18.41754,0.32741 8.69409,0.76507 16.05165,1.63524 16.35013,1.93372 1.21534,1.21534 -1.02716,2.6317 -7.41844,4.68547 -3.70653,1.19106 -9.66414,3.24913 -13.23914,4.57349 l -6.5,2.40793 -10,15.51633 c -5.5,8.53398 -16.975,26.31712 -25.5,39.51809 -18.53083,28.69501 -23.41534,36.34441 -60.0071,93.97444 -15.54023,24.475 -29.70802,46.75 -31.48399,49.5 -15.04338,23.29388 -19.9313,31.15879 -20.8077,33.48062 -0.73871,1.95708 -0.4167,8.28043 1.17671,23.10691 9.49561,88.35522 18.70445,135.10353 42.63061,216.41247 12.54622,42.6362 23.45442,72.5295 40.50436,111 16.5767,37.4027 43.88114,92.3185 44.69175,89.8858 0.16233,-0.4872 -4.00133,-13.4666 -9.25257,-28.8431 z`;

const profitScreenshots = [
  {
    id: 1,
    title: "Consistency",
    tag: "Disciplined execution",
    image: "/assets/IMG_9620.PNG",
  },
  {
    id: 2,
    title: "Session Accuracy",
    tag: "Structured entries",
    image: "/assets/IMG_9617.PNG",
  },
  {
    id: 3,
    title: "Controlled Growth",
    tag: "Risk-first approach",
    image: "/assets/IMG_9612.PNG",
  },
  {
    id: 4,
    title: "Execution Quality",
    tag: "Clean review process",
    image: "/assets/IMG_9623.PNG",
  },
];

const studentProofs = [
  {
    id: 1,
    name: "Student",
    label: "Funded",
    image: "/assets/TAMIL S_certificate 1.png",
  },
  {
    id: 2,
    name: "Student",
    label: "Profit Locked",
    image: "/assets/TAMILSELVAN M_certificate 2.png",
  },
  {
    id: 3,
    name: "Student",
    label: "Confidence Built",
    image: "/assets/TAMILSELVAN M_certificate overall.png",
  },
  {
    id: 4,
    name: "Student",
    label: "Payout Received",
    image: "/assets/TAMILSELVAN M_certificate payout.png",
  },
];

const strategySteps = [
  {
    id: "01",
    title: "Market Structure",
    body: "Start with clean directional bias. Identify the dominant swing behavior before looking for entries.",
  },
  {
    id: "02",
    title: "Key Zone Mapping",
    body: "Mark high-probability reaction zones with precision so execution happens only at meaningful locations.",
  },
  {
    id: "03",
    title: "Rejection Logic",
    body: "Wait for rejection behavior, not assumptions. Let the market confirm your area before committing risk.",
  },
  {
    id: "04",
    title: "Entry Confirmation",
    body: "Use a structured trigger model. Remove random execution and enter only when the setup aligns fully.",
  },
  {
    id: "05",
    title: "Risk Placement",
    body: "Stops and size are defined before the trade. Protect capital first, then let the edge compound over time.",
  },
  {
    id: "06",
    title: "Discipline & Execution",
    body: "The edge is only real when repeated consistently. Journaling and review turn a setup into a process.",
  },
];

const appFeatures = [
  {
    icon: LayoutDashboard,
    previewImage: "/assets/Screenshot_20260313-001604.Chrome.png",
    title: "Trade Journal",
    body: "Track every position with clean structured inputs so review becomes simple and repeatable.",
  },
  {
    icon: ShieldCheck,
    previewImage: "/assets/Screenshot_20260313-001634.Chrome.png",
    title: "Risk Tracking",
    body: "See risk habits clearly and build tighter control over position sizing, losses, and exposure.",
  },
  {
    icon: TrendingUp,
    previewImage: "/assets/Screenshot_20260313-001649.Chrome.png",
    title: "Performance Analytics",
    body: "Turn trade data into useful insight with summaries, patterns, and strategy-specific breakdowns.",
  },
  {
    icon: Sparkles,
    previewImage: "/assets/Screenshot_20260313-001657.Chrome.png",
    title: "Psychology Insights",
    body: "Connect behavior and outcomes so emotional mistakes are easier to detect and reduce.",
  },
  {
    icon: Users,
    previewImage: "/assets/Screenshot_20260313-001716.Chrome.png",
    title: "Session Review",
    body: "Measure performance across trading sessions and understand when your edge performs best.",
  },
  {
    icon: CreditCard,
    previewImage: "/assets/Screenshot_20260313-001805.Chrome.png",
    title: "Pips Calculator",
    body: "Review specific setups over time and discover where the strategy performs strongest.",
  },
];

const mentorshipItems = [
  {
    title: "Foundation",
    description:
      "Learn forex basics, market structure, trend reading, and how to build a strong trading base before entering live markets.",
  },
  {
    title: "Execution",
    description:
      "Understand entry models, confirmations, timing, and how to execute trades with more clarity and less confusion.",
  },
  {
    title: "Risk Management",
    description:
      "Master lot sizing, stop loss placement, risk-to-reward ratio, and capital protection to trade with discipline.",
  },
  {
    title: "Psychology",
    description:
      "Build patience, emotional control, and confidence so you can avoid revenge trading and impulsive decisions.",
  },
  {
    title: "Live Sessions",
    description:
      "Get practical exposure through live market sessions where setups, execution, and decision-making are explained in real time.",
  },
  {
    title: "Support System",
    description:
      "Receive guidance, doubt clarification, and structured support to stay consistent throughout your trading journey.",
  },
];

const pricingDetails = {
  batch: "Next Mentorship Batch",
  price: "₹5,999",
  includes: [
    "Spidey Edge framework overview",
    "Mentorship access",
    "Live review guidance",
    "Risk management system",
    "RiskOra access / bonus area placeholder",
  ],
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function SpiderSvg() {
  return (
    <svg
      id="svg6519"
      viewBox="0 0 252.47214 359.92855"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="g7072"
        transform="matrix(0.3723659,0,0,0.3723659,-98.668909,-89.87369)"
      >
        <path id="path-1" d={SPIDER_PATH} />
        <path id="path-2" d={SPIDER_PATH} />
        <path id="path-3" d={SPIDER_PATH} />
      </g>
    </svg>
  );
}

function SpiderLogoPreloader() {
  return (
    <>
      <style jsx>{`
        .website-preloader {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
          overflow: hidden;
        }

        .preloader-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 9999px;
          background: radial-gradient(
            circle,
            rgba(255, 42, 42, 0.14) 0%,
            rgba(255, 42, 42, 0.06) 35%,
            transparent 70%
          );
          filter: blur(20px);
        }

        .preloader-logo {
          position: relative;
          width: 220px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .preloader-logo :global(svg) {
          width: 100%;
          height: 100%;
          display: block;
        }

        .preloader-logo :global(#path-1),
        .preloader-logo :global(#path-2),
        .preloader-logo :global(#path-3) {
          fill: none;
          stroke: #ff2a2a;
          stroke-dasharray: 12000;
          stroke-dashoffset: 12000;
          filter: drop-shadow(0 0 10px rgba(255, 42, 42, 0.28));
        }

        .preloader-logo :global(#path-1) {
          stroke-width: 1.4px;
          animation: dash 1.4s linear 0s forwards;
        }

        .preloader-logo :global(#path-2) {
          stroke-width: 3px;
          animation: dash 1.3s ease-in-out 0  .4s forwards;
        }

        .preloader-logo :global(#path-3) {
          stroke-width: 4.5px;
          animation: dash 1.4s cubic-bezier(0.17, 0.67, 1, 0.43) 0.8s forwards;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (max-width: 640px) {
          .preloader-logo {
            width: 170px;
            height: 170px;
          }

          .preloader-glow {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>

      <div className="website-preloader">
        <div className="preloader-glow" />
        <div className="preloader-logo">
          <SpiderSvg />
        </div>
      </div>
    </>
  );
}



function MagneticButton({
  children,
  className = "",
  href = "#",
  target,
  rel,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "shadow-btn inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium no-underline",
        className,
      )}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 text-[10px] uppercase tracking-[0.28em] text-red-400/80 md:mb-4 md:text-xs">
      {children}
    </div>
  );
}

function FullPageConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let particlesArray: Particle[] = [];

    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 170,
    };

    const getPageHeight = () =>
      Math.max(
        window.innerHeight,
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );

    const setCanvasSize = () => {
      const width = window.innerWidth;
      const height = getPageHeight();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mouse.radius = Math.max(140, Math.min(width, window.innerHeight) * 0.18);
    };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string,
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update(width: number, height: number) {
        if (this.x > width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > height || this.y < 0) this.directionY = -this.directionY;

        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < width - this.size * 10) this.x += 1.2;
            if (mouse.x > this.x && this.x > this.size * 10) this.x -= 1.2;
            if (mouse.y < this.y && this.y < height - this.size * 10) this.y += 1.2;
            if (mouse.y > this.y && this.y > this.size * 10) this.y -= 1.2;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      const width = window.innerWidth;
      const height = getPageHeight();
      const numberOfParticles = Math.max(170, Math.floor((width * height) / 18000));

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 0.7;
        const x = Math.random() * (width - size * 4) + size * 2;
        const y = Math.random() * (height - size * 4) + size * 2;
        const directionX = Math.random() * 0.55 - 0.275;
        const directionY = Math.random() * 0.55 - 0.275;
        const color = "rgba(190, 228, 255, 0.85)";
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      const width = window.innerWidth;
      const maxDistance = Math.min(26000, Math.max(15000, width * 22));

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = dx * dx + dy * dy;

          if (distance < maxDistance) {
            const opacityValue = Math.max(0, 1 - distance / maxDistance);
            ctx.strokeStyle = `rgba(230, 205, 255, ${opacityValue * 0.7})`;
            ctx.lineWidth = 1.15;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      const width = window.innerWidth;
      const height = getPageHeight();

      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(width, height);
      }
      connect();
    }

    const updatePointer = (clientX: number, clientY: number) => {
      mouse.x = clientX;
      mouse.y = clientY + window.scrollY;
    };

    const handleMouseMove = (event: MouseEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      updatePointer(touch.clientX, touch.clientY);
    };

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    setCanvasSize();
    init();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("mouseout", handleMouseOut);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}

function HeroFluidReveal() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame = 0;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const fluidScene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const textureLoader = new THREE.TextureLoader();
    const renderTargetType = THREE.UnsignedByteType;

    let rt1 = new THREE.WebGLRenderTarget(512, 512, {
      type: renderTargetType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
    });

    let rt2 = new THREE.WebGLRenderTarget(512, 512, {
      type: renderTargetType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
    });

    const overlay = textureLoader.load("/assets/spider2.png");
    const bottom = textureLoader.load("/assets/spider1.png");

    overlay.colorSpace = THREE.NoColorSpace;
    bottom.colorSpace = THREE.NoColorSpace;
    overlay.minFilter = THREE.LinearFilter;
    overlay.magFilter = THREE.LinearFilter;
    bottom.minFilter = THREE.LinearFilter;
    bottom.magFilter = THREE.LinearFilter;
    overlay.generateMipmaps = false;
    bottom.generateMipmaps = false;

    const mouse = new THREE.Vector2(0.5, 0.5);
    let move = 0;

    const revealMaterial = new THREE.ShaderMaterial({
      uniforms: {
        overlay: { value: overlay },
        bottom: { value: bottom },
        fluid: { value: rt1.texture },
        uContainerAspect: { value: container.clientWidth / container.clientHeight },
        uImageAspect1: { value: 1 },
        uImageAspect2: { value: 1 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D overlay;
        uniform sampler2D bottom;
        uniform sampler2D fluid;
        uniform float uContainerAspect;
        uniform float uImageAspect1;
        uniform float uImageAspect2;
        varying vec2 vUv;

        vec2 coverUv(vec2 uv, float containerAspect, float imageAspect) {
          vec2 newUv = uv;
          if (containerAspect > imageAspect) {
            float scale = imageAspect / containerAspect;
            newUv.y = (uv.y - 0.5) * scale + 0.5;
          } else {
            float scale = containerAspect / imageAspect;
            newUv.x = (uv.x - 0.5) * scale + 0.5;
          }
          return newUv;
        }

        void main() {
          float mask = texture2D(fluid, vUv).r;
          vec2 uv1 = coverUv(vUv, uContainerAspect, uImageAspect1);
          vec2 uv2 = coverUv(vUv, uContainerAspect, uImageAspect2);
          vec4 img1 = texture2D(overlay, uv1);
          vec4 img2 = texture2D(bottom, uv2);
          vec3 finalRgb = mix(img1.rgb, img2.rgb, clamp(mask, 0.0, 1.0));
          gl_FragColor = vec4(finalRgb, 1.0);
        }
      `,
      transparent: false,
      toneMapped: false,
    });

    const revealMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), revealMaterial);
    scene.add(revealMesh);

    const fluidMaterial = new THREE.ShaderMaterial({
      uniforms: {
        prev: { value: rt1.texture },
        mouse: { value: mouse },
        move: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D prev;
        uniform vec2 mouse;
        uniform float move;
        varying vec2 vUv;

        void main() {
          vec4 color = texture2D(prev, vUv) * 0.97;
          float d = distance(vUv, mouse);
          float splat = smoothstep(0.16, 0.0, d) * move;
          color.r += splat;
          gl_FragColor = color;
        }
      `,
      transparent: false,
      toneMapped: false,
    });

    const fluidMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), fluidMaterial);
    fluidScene.add(fluidMesh);

    const updateImageAspects = () => {
      const overlayImage = overlay.image as { width?: number; height?: number } | undefined;
      const bottomImage = bottom.image as { width?: number; height?: number } | undefined;

      if (overlayImage?.width && overlayImage?.height) {
        revealMaterial.uniforms.uImageAspect1.value =
          overlayImage.width / overlayImage.height;
      }

      if (bottomImage?.width && bottomImage?.height) {
        revealMaterial.uniforms.uImageAspect2.value =
          bottomImage.width / bottomImage.height;
      }
    };

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      mouse.x = (clientX - rect.left) / rect.width;
      mouse.y = 1 - (clientY - rect.top) / rect.height;
      move = 1;
    };

    const onMouseMove = (e: MouseEvent) => updatePointer(e.clientX, e.clientY);
    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      updatePointer(touch.clientX, touch.clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      updatePointer(touch.clientX, touch.clientY);
    };

    const onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      revealMaterial.uniforms.uContainerAspect.value =
        container.clientWidth / container.clientHeight;
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", onResize);

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      updateImageAspects();

      fluidMaterial.uniforms.prev.value = rt1.texture;
      fluidMaterial.uniforms.mouse.value = mouse;
      fluidMaterial.uniforms.move.value = move;

      renderer.setRenderTarget(rt2);
      renderer.render(fluidScene, camera);
      renderer.setRenderTarget(null);

      const temp = rt1;
      rt1 = rt2;
      rt2 = temp;

      revealMaterial.uniforms.fluid.value = rt1.texture;
      move *= 0.9;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);

      scene.remove(revealMesh);
      fluidScene.remove(fluidMesh);

      revealMesh.geometry.dispose();
      fluidMesh.geometry.dispose();
      revealMaterial.dispose();
      fluidMaterial.dispose();
      rt1.dispose();
      rt2.dispose();
      overlay.dispose();
      bottom.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="hero-anim order-1 mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[24px] bg-[#0c0c0c] sm:rounded-[28px] lg:order-2 lg:rounded-[32px]">
      <div ref={containerRef} className="relative h-full w-full" />
    </div>
  );
}

export default function Page() {
  // Full-page glass lens effect (click/touch)
  // Render the effect component at top-level so it applies across the page
  // (component is client-only and manages its own DOM injection)
  
  const [showPreloader, setShowPreloader] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProfit, setActiveProfit] = useState(0);
  const [activeStrategy, setActiveStrategy] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [studentSpot, setStudentSpot] = useState({ x: 50, y: 50 });
  const [paymentSpot, setPaymentSpot] = useState({ x: 50, y: 50 });

  const progressRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const profitItemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const strategyItemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const featureItemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const navItems = useMemo(
    () => [
      ["Results", "#results"],
      ["Students", "#students"],
      ["Strategy", "#strategy"],
      ["RiskOra", "#riskora"],
      ["Mentorship", "#mentorship"],
      ["Join", "#payment"],
    ],
    [],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowPreloader(false);
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (showPreloader) return;

    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrolled})`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showPreloader]);

  useEffect(() => {
    if (showPreloader) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.07,
      });

      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [showPreloader]);

  useEffect(() => {
    if (showPreloader) return;

    const getClosestIndex = (items: Array<HTMLElement | null>) => {
      const viewportCenter = window.innerHeight * (isMobile ? 0.35 : 0.42);
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - itemCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      return bestIndex;
    };

    const handleScroll = () => {
      if (profitItemRefs.current.length && !isMobile) {
        setActiveProfit(getClosestIndex(profitItemRefs.current));
      }
      if (strategyItemRefs.current.length) {
        setActiveStrategy(getClosestIndex(strategyItemRefs.current));
      }
      if (featureItemRefs.current.length && !isMobile) {
        setActiveFeature(getClosestIndex(featureItemRefs.current));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile, showPreloader]);

  if (showPreloader) {
    return <SpiderLogoPreloader />;
  }

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen bg-[#000] text-white selection:bg-red-700/30 selection:text-white"
    >
    
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <FullPageConstellationBackground />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,22,46,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.07),transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.04] md:opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px] md:[background-size:60px_60px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,0.18),rgba(5,5,5,0.34),#050505)]" />
      </div>

      <div
        ref={progressRef}
        className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-red-700 via-red-500 to-white"
      />

      <header className="fixed inset-x-0 top-0 z-[60] border-b border-white/8 bg-black/30 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
    <a href="#top" className="flex items-center">
      <img
        src="/assets/LOGO.png"
        alt="Rahul FX Logo"
        className="h-14 w-auto object-contain md:h-18"
      />
    </a>

    <nav className="hidden items-center gap-7 md:flex">
      {navItems.map(([label, href]) => (
        <a
          key={label}
          href={href}
          className="text-sm text-zinc-300 transition hover:text-red-500"
        >
          {label}
        </a>
      ))}
      <MagneticButton href="#payment" className="bg-red-700 text-white hover:bg-red-600">
        Join Mentorship
      </MagneticButton>
    </nav>

    <button
      type="button"
      onClick={() => setMenuOpen((s) => !s)}
      className="rounded-full border border-white/10 p-2 md:hidden"
      aria-label="Toggle menu"
    >
      {menuOpen ? <X size={18} /> : <Menu size={18} />}
    </button>
  </div>

  {menuOpen && (
    <div className="border-t border-white/8 bg-black/90 px-4 py-4 md:hidden">
      <div className="flex flex-col gap-3">
        {navItems.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="rounded-xl border border-white/8 px-3 py-3 text-sm text-zinc-300"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href="#payment"
          className="rounded-full bg-red-700 px-4 py-3 text-center text-sm font-medium"
          onClick={() => setMenuOpen(false)}
        >
          Join Mentorship
        </a>
      </div>
    </div>
  )}
</header>

      <main id="top" className="relative z-10">
        <section className="mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-10 pt-28 md:px-6 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="order-2 lg:order-1">
              <div className="hero-anim mb-4 inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-red-300 md:mb-5 md:text-xs">
                Trader / Mentor
              </div>

              <h1 className="hero-anim max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl lg:text-[92px]">
                RAHUL <span className="text-red-700">FX</span>
              </h1>

              <p className="hero-anim mt-3 text-base text-zinc-300 md:mt-4 md:text-xl">
                Precision. Discipline. Edge.
              </p>

              <p className="hero-anim mt-5 max-w-xl text-sm leading-7 text-zinc-400 md:mt-6 md:text-base">
                A premium trading portfolio built around structured execution,
                student transformation, and a product ecosystem powered by Spidey
                Edge and RiskOra.
              </p>

              <div className="hero-anim mt-8 grid gap-3 sm:flex sm:flex-wrap md:mt-10 md:gap-4">
                <MagneticButton
                  href="#results"
                  className="shadow-red w-full bg-red-700 text-white hover:bg-red-600 sm:w-auto"
                >
                  View Results <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton href="#strategy" className="w-full sm:w-auto">
                  Explore Strategy
                </MagneticButton>
                <MagneticButton href="#mentorship" className="w-full sm:w-auto">
                  Join Mentorship
                </MagneticButton>
              </div>

              <div className="hero-anim mt-8 grid max-w-xl gap-3 sm:grid-cols-3 md:mt-12 md:gap-4">
                {[
                  ["Brand", "RAHUL FX"],
                  ["Strategy", "Spidey Edge"],
                  ["App", "RiskOra"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="shadow-btn rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur"
                  >
                    <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:text-xs">
                      {k}
                    </div>
                    <div className="mt-2 text-sm font-medium text-zinc-100">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <HeroFluidReveal />
          </div>
        </section>

        <section
          id="results"
          className="reveal-section mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20 lg:px-8"
        >
          <div className="mb-10 max-w-2xl md:mb-12">
            <SectionLabel>Profit Proof</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl md:text-5xl">
              Results that look structured, not noisy.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 md:mt-5 md:text-base">
              Smooth scrolling cards on the left drive the active screenshot on the
              right. Replace these placeholders with your real proof.
            </p>
          </div>

          <div className="hidden lg:grid gap-8 lg:grid-cols-[0.46fr_0.54fr] lg:items-start lg:gap-10">
            <div className="space-y-4 md:space-y-6">
              {profitScreenshots.map((item, idx) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    profitItemRefs.current[idx] = el;
                  }}
                  className="flex min-h-[34vh] items-center md:min-h-[46vh] lg:min-h-[58vh]"
                >
                  <div
                    className={cn(
  "shadow-btn flex w-full items-start gap-4 rounded-2xl border p-4 text-left",
  idx === activeStrategy
    ? "shadow-red border-red-500/40 bg-red-500/[0.08]"
    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]",
)}
                  >
                    <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:text-xs">
                      0{idx + 1}
                    </div>
                    <div className="mt-3 text-xl font-medium text-white md:text-2xl">
                      {item.title}
                    </div>
                    <div className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.tag}. Use this block for short proof explanation,
                      trading style, or setup notes beside each screenshot.
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative lg:sticky lg:top-28">
              <div className="relative h-[340px] sm:h-[420px] md:h-[520px]">
                {profitScreenshots.map((item, idx) => {
                  const offset = idx - activeProfit;
                  return (
                    <div
                      key={item.id}
                      className="absolute inset-0 rounded-[24px] border border-white/10 bg-[#101010] p-2 shadow-2xl transition-all duration-500 sm:rounded-[28px] sm:p-3 md:rounded-[30px]"
                      style={{
                        transform: `translateY(${offset * 18}px) scale(${1 - Math.abs(offset) * 0.04}) rotate(${offset * 2.4}deg)`,
                        opacity: offset < -1 ? 0 : 1 - Math.abs(offset) * 0.18,
                        zIndex: 100 - Math.abs(offset),
                      }}
                    >
                      <div className="relative h-full overflow-hidden rounded-[18px] border border-white/8 bg-black sm:rounded-[22px] md:rounded-[24px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-contain object-center block bg-black"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.66),transparent_45%)]" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-4">
                          <div>
                            <div className="text-[10px] uppercase tracking-[0.25em] text-red-300 md:text-xs">
                              Screenshot Placeholder
                            </div>
                            <div className="mt-2 text-lg font-medium text-white sm:text-xl md:text-2xl">
                              {item.title}
                            </div>
                          </div>
                          <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[10px] text-zinc-200 sm:text-xs">
                            {item.tag}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:hidden">
            {profitScreenshots.map((item, idx) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0d0d0d]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain object-center block bg-black"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),transparent_45%)]" />
                </div>

                <div className="p-4 sm:p-5 md:p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:text-xs">
                    0{idx + 1}
                  </div>
                  <div className="mt-3 text-xl font-medium text-white md:text-2xl">
                    {item.title}
                  </div>
                  <div className="mt-2 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-red-300 md:text-xs">
                    {item.tag}
                  </div>
                  <div className="mt-4 text-sm leading-7 text-zinc-400">
                    Use this block for short proof explanation, trading style, or setup notes below each screenshot.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="students"
          className="reveal-section mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20 lg:px-8"
          onMouseMove={(e) => {
            if (isMobile) return;
            const rect = e.currentTarget.getBoundingClientRect();
            setStudentSpot({
              x: ((e.clientX - rect.left) / rect.width) * 100,
              y: ((e.clientY - rect.top) / rect.height) * 100,
            });
          }}
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] px-4 py-8 sm:px-5 sm:py-10 md:rounded-[36px] md:px-8 md:py-12">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: isMobile
                  ? "radial-gradient(circle at 50% 50%, rgba(197,22,46,0.14), transparent 26%)"
                  : `radial-gradient(circle at ${studentSpot.x}% ${studentSpot.y}%, rgba(197,22,46,0.18), transparent 22%)`,
              }}
            />

            <div className="relative z-10 mb-8 max-w-2xl md:mb-10">
              <SectionLabel>Student Achievements</SectionLabel>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl md:text-5xl">
                A moving wall of proof and progress.
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400 md:mt-5 md:text-base">
                This section is designed for your student screenshots,
                achievement cards, payout proof, and quick testimonials.
              </p>
            </div>

            {[0, 1].map((row) => (
              <div
                key={row}
                className={cn(
                  "mb-4 flex min-w-max gap-3 sm:gap-4 md:mb-5 md:gap-5",
                  row % 2 === 0
                    ? "animate-[marquee_35s_linear_infinite]"
                    : "animate-[marqueeReverse_42s_linear_infinite]",
                )}
              >
                {[...studentProofs, ...studentProofs].map((item, idx) => (
                  <div
                    key={`${row}-${idx}`}
                    className="group w-[220px] shrink-0 rounded-[20px] border border-white/10 bg-[#0d0d0d] p-2.5 transition duration-300 hover:-translate-y-1 hover:border-red-500/30 sm:w-[250px] sm:p-3 md:w-[280px] md:rounded-[24px]"
                  >
                    <div className="relative h-[170px] overflow-hidden rounded-[16px] border border-white/8 sm:h-[190px] md:h-[220px] md:rounded-[18px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),transparent_50%)]" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 sm:bottom-4 sm:left-4 sm:right-4 sm:gap-3">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-red-300">
                            Proof Placeholder
                          </div>
                          <div className="mt-1 text-xs font-medium sm:text-sm">{item.name}</div>
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-100 sm:px-3">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section
          id="strategy"
          className="reveal-section mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20 lg:px-8"
        >
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-5 md:rounded-[36px] md:p-8 lg:p-10">
            <div className="mb-8 max-w-2xl md:mb-10">
              <SectionLabel>Spidey Edge</SectionLabel>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl md:text-5xl">
                A strategy revealed like a process, not a promise.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-start lg:gap-8">
              <div className="space-y-3 lg:sticky lg:top-28">
                {strategySteps.map((step, idx) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => {
                      setActiveStrategy(idx);
                      strategyItemRefs.current[idx]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    className={cn(
                      "flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition",
                      idx === activeStrategy
                        ? "border-red-500/40 bg-red-500/[0.08]"
                        : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]",
                    )}
                  >
                    <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:text-xs">
                      {step.id}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white sm:text-base">
                        {step.title}
                      </div>
                      <div className="mt-1 text-xs text-zinc-400 sm:text-sm">
                        Structured breakdown
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="space-y-4 md:space-y-6">
                {strategySteps.map((step, idx) => (
                  <div
                    key={step.id}
                    ref={(el) => {
                      strategyItemRefs.current[idx] = el;
                    }}
                    className="flex min-h-[42vh] items-center md:min-h-[52vh] lg:min-h-[62vh]"
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: idx === activeStrategy ? 1 : 0.55,
                        scale: idx === activeStrategy ? 1 : 0.98,
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#0c0c0c] p-5 sm:p-6 md:rounded-[28px] md:p-8"
                    >
                      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:34px_34px] md:[background-size:42px_42px]" />
                      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-700/20 blur-3xl md:h-52 md:w-52" />
                      <div className="relative z-10">
                        <div className="text-[10px] uppercase tracking-[0.26em] text-red-300 md:text-xs">
                          Spidey Edge / Step {step.id}
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl md:text-4xl">
                          {step.title}
                        </h3>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 md:mt-6 md:text-base">
                          {step.body}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="riskora"
          className="reveal-section mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20 lg:px-8"
        >
          <div className="mb-8 max-w-2xl md:mb-10">
            <SectionLabel>RiskOra</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl md:text-5xl">
              A product layer that turns trades into data.
            </h2>
          </div>

          <div className="hidden lg:grid gap-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-start lg:gap-8">
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] p-4 sm:p-5 md:min-h-[580px] md:rounded-[36px] md:p-8 lg:sticky lg:top-28">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,22,46,0.18),transparent_25%),linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_25%)]" />

              <div
                className="relative mx-auto mt-2 flex h-[360px] max-w-[240px] items-center justify-center rounded-[28px] border border-white/10 bg-black p-2.5 shadow-2xl transition duration-500 sm:h-[420px] sm:max-w-[270px] sm:rounded-[32px] sm:p-3 md:mt-4 md:h-[500px] md:max-w-[310px] md:rounded-[38px]"
                style={{
                  transform: `translateY(${activeFeature * -4}px) rotate(${(activeFeature - 2) * 1.2}deg) scale(${1 + activeFeature * 0.005})`,
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/10 bg-[#111] sm:rounded-[26px] md:rounded-[30px]">
                  <img
                    src={appFeatures[activeFeature].previewImage}
                    alt={appFeatures[activeFeature].title}
                    className="h-full w-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0.12),transparent_45%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_28%)]" />
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              {appFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    ref={(el) => {
                      featureItemRefs.current[idx] = el;
                    }}
                    className="flex min-h-[32vh] items-center md:min-h-[40vh] lg:min-h-[52vh]"
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: idx === activeFeature ? 1 : 0.55,
                        scale: idx === activeFeature ? 1 : 0.985,
                      }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "w-full rounded-[22px] border p-4 transition-all duration-300 sm:rounded-[24px] sm:p-5 md:rounded-[26px]",
                        idx === activeFeature
                          ? "border-red-500/35 bg-red-500/[0.08]"
                          : "border-white/10 bg-white/[0.03]",
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-red-300">
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="text-base font-medium text-white md:text-lg">
                            {feature.title}
                          </div>
                          <div className="mt-2 text-sm leading-7 text-zinc-400">
                            {feature.body}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6 lg:hidden">
            {appFeatures.map((feature) => {
              return (
                <div
                  key={feature.title}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0d0d0d]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-black">
                    <img
                      src={feature.previewImage}
                      alt={feature.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0.12),transparent_45%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_28%)]" />
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-red-300">
                        <feature.icon size={18} />
                      </div>
                      <div>
                        <div className="text-xl font-medium text-white md:text-2xl">
                          {feature.title}
                        </div>
                        <div className="mt-3 text-sm leading-7 text-zinc-400">
                          {feature.body}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="mentorship"
          className="reveal-section mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20 lg:px-8"
        >
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-5 md:rounded-[36px] md:p-8 lg:p-10">
            <SectionLabel>Mentorship</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-2xl font-semibold tracking-[-0.05em] sm:text-3xl md:text-6xl"
            >
              Built for traders who want structure, not noise.
            </motion.h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:mt-6 md:text-base">
              This mentorship section is designed to convert with clarity.
              Replace these blocks with your actual offer details, schedule,
              deliverables, and support system.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 md:mt-10 md:gap-5">
              {mentorshipItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  className="shadow-btn rounded-[20px] border border-white/10 bg-[#0d0d0d] p-4 sm:rounded-[22px] sm:p-5 md:rounded-[24px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 md:text-xs">
                      Module 0{idx + 1}
                    </div>
                    <ChevronRight size={16} className="text-red-300" />
                  </div>

                  <div className="mt-4 text-lg font-medium text-white md:mt-5 md:text-xl">
                    {item.title}
                  </div>

                  <div className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap md:mt-10 md:gap-4">
              <MagneticButton
                href="#payment"
                className="w-full bg-red-700 text-white hover:bg-red-600 sm:w-auto"
              >
                Reserve Your Spot <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton href="#riskora" className="w-full sm:w-auto">
                See RiskOra
              </MagneticButton>
            </div>
          </div>
        </section>

        <section
          id="payment"
          className="reveal-section mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20 lg:px-8"
          onMouseMove={(e) => {
            if (isMobile) return;
            const rect = e.currentTarget.getBoundingClientRect();
            setPaymentSpot({
              x: ((e.clientX - rect.left) / rect.width) * 100,
              y: ((e.clientY - rect.top) / rect.height) * 100,
            });
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Payment</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl md:text-5xl">
              Join the next batch with a clean final CTA.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:mt-5 md:text-base">
              This area is built for payment details, joining instructions, and
              your trust-building closing message.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl md:mt-12">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0c0c] p-4 sm:p-5 md:rounded-[36px] md:p-8">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: isMobile
                    ? "radial-gradient(circle at 50% 50%, rgba(197,22,46,0.16), transparent 28%)"
                    : `radial-gradient(circle at ${paymentSpot.x}% ${paymentSpot.y}%, rgba(197,22,46,0.22), transparent 24%)`,
                }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-red-500/15 md:rounded-[36px]" />

              <div className="relative z-10 grid gap-6 md:grid-cols-[0.58fr_0.42fr] md:items-start md:gap-8">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-red-300 md:text-xs">
                    {pricingDetails.batch}
                  </div>
                  <div className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                    {pricingDetails.price}
                  </div>
                  <div className="mt-4 text-sm leading-7 text-zinc-400">
                  
                
                  </div>

                  <div className="mt-6 space-y-3 md:mt-8">
                    {pricingDetails.includes.map((item) => (
                      <div
                        key={item}
                       className="shadow-btn shadow-red flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-zinc-200"
                      >
                        <span className="h-2 w-2 rounded-full bg-red-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur sm:p-5 md:rounded-[28px]">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 md:text-xs">
                    Action Panel
                  </div>
                  <div className="mt-4 text-lg font-medium sm:text-xl">Reserve your place</div>
                  <div className="mt-3 text-sm leading-7 text-zinc-400">
                    Add payment QR, UPI details, contact number, batch schedule,
                    and confirmation steps here.
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeCg-gfi8XEcwyBQahhfYtfbn1n6BVLfd2Ex24LVuXUrByg6g/viewform?usp=publish-editor"
                      className="shadow-btn shadow-red inline-flex items-center justify-center rounded-full border border-red-600 bg-red-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-red-600"
                    >
                      Pay & Join Now
                    </a>
                    <a
                      href="https://wa.me/918148144104?text=Hi%20Rahul%2C%20I%20want%20to%20join%20your%20trading%20mentorship"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shadow-btn inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-center text-sm font-medium text-zinc-200 hover:bg-white/[0.05]"
                    >
                      Contact on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/8 px-4 py-8 md:px-6 md:py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[0.35em] md:text-sm">
              RAHUL <span className="text-red-700">FX</span>
            </div>
            <div className="mt-2 text-sm text-zinc-500">
              Trader portfolio / strategy / app / mentorship.
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400 md:gap-5">
            <a href="#results">Results</a>
            <a href="#students">Students</a>
            <a href="#strategy">Strategy</a>
            <a href="#riskora">RiskOra</a>
            <a href="#mentorship">Mentorship</a>
            <a href="#payment">Join</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
      .shadow-btn {
  border-color: rgba(255, 255, 255, 0.14);
  color: #e5e7eb;
  background: rgba(255, 255, 255, 0.03);
  box-sizing: border-box;
  transition:
    transform 0.35s,
    box-shadow 0.35s,
    border-color 0.35s,
    color 0.35s,
    background 0.35s;
}

.shadow-btn:hover {
  transform: translateY(-0.25em);
  box-shadow: 0 0 0.5em 0 rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.26);
  color: #ffffff;
}

.shadow-red:hover {
  box-shadow: 0 0 0.65em 0 rgba(239, 68, 68, 0.35);
  border-color: rgba(239, 68, 68, 0.4);
}
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #050505;
        }

        * {
          -webkit-tap-highlight-color: transparent;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeReverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

