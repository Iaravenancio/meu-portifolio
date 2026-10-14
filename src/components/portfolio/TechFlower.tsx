import { useId } from "react";

const petals = Array.from({ length: 8 }, (_, index) => index * 45);
const innerPetals = Array.from({ length: 6 }, (_, index) => index * 60);

/** Flor generativa em SVG: malha luminosa, pétalas em movimento e caule contínuo. */
export function TechFlower() {
  const rawId = useId().replace(/:/g, "");
  const glowId = `flower-glow-${rawId}`;
  const lineId = `flower-line-${rawId}`;

  return (
    <div className="tech-flower" aria-hidden="true">
      <svg
        className="tech-flower__svg"
        viewBox="0 0 700 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={glowId} cx="0" cy="0" r="1" gradientTransform="translate(355 275) rotate(90) scale(220)">
            <stop stopColor="#E0F7FF" stopOpacity=".95" />
            <stop offset=".22" stopColor="#38BDF8" stopOpacity=".42" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={lineId} x1="190" y1="100" x2="510" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E0F7FF" stopOpacity=".9" />
            <stop offset=".45" stopColor="#38BDF8" stopOpacity=".68" />
            <stop offset="1" stopColor="#A855F7" stopOpacity=".22" />
          </linearGradient>
          <filter id={`blur-${rawId}`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <path id={`petal-${rawId}`} d="M350 278 C307 237 260 191 276 137 C288 96 326 88 350 121 C376 84 416 100 427 139 C443 190 394 239 350 278Z" />
          <path id={`inner-${rawId}`} d="M350 286 C327 260 309 229 322 204 C332 184 346 192 350 210 C361 188 379 191 385 211 C395 238 371 264 350 286Z" />
        </defs>

        <circle cx="355" cy="275" r="215" fill={`url(#${glowId})`} opacity=".72" />
        <circle cx="355" cy="275" r="138" stroke="#38BDF8" strokeOpacity=".12" strokeDasharray="2 9" />
        <circle cx="355" cy="275" r="168" stroke="#E0F7FF" strokeOpacity=".11" strokeDasharray="1 12" />

        <g className="tech-flower__outer">
          {petals.map((angle) => (
            <g key={angle} transform={`rotate(${angle} 350 275)`}>
              <use href={`#petal-${rawId}`} fill="#38BDF8" fillOpacity=".035" stroke={`url(#${lineId})`} strokeWidth="1.25" />
              <use href={`#petal-${rawId}`} transform="translate(350 205) scale(.82 .88) translate(-350 -205)" stroke="#E0F7FF" strokeOpacity=".34" strokeWidth=".65" />
              <path d="M350 275 C345 234 341 187 350 121 C362 179 365 230 350 275Z" stroke="#BAEEFF" strokeOpacity=".42" strokeWidth=".75" />
              <path d="M350 275 Q312 206 289 145 M350 275 Q389 205 415 146 M350 275 Q333 200 330 116 M350 275 Q368 200 373 118" stroke="#7DD3FC" strokeOpacity=".35" strokeWidth=".65" />
              {Array.from({ length: 5 }, (_, i) => (
                <path key={i} d={`M${300 + i * 20} ${156 + i * 6} Q350 ${188 + i * 9} ${400 - i * 20} ${156 + i * 6}`} stroke="#E0F7FF" strokeOpacity=".22" strokeWidth=".6" />
              ))}
            </g>
          ))}
        </g>

        <g className="tech-flower__inner">
          {innerPetals.map((angle) => (
            <g key={angle} transform={`rotate(${angle} 350 275)`}>
              <use href={`#inner-${rawId}`} fill="#BAE6FD" fillOpacity=".12" stroke="#E0F7FF" strokeOpacity=".86" strokeWidth="1.15" />
              <path d="M350 283 Q343 243 350 210 Q363 248 350 283Z" stroke="#FFFFFF" strokeOpacity=".65" strokeWidth=".7" />
            </g>
          ))}
        </g>

        <g className="tech-flower__core">
          <circle cx="350" cy="275" r="40" fill="#38BDF8" fillOpacity=".25" filter={`url(#blur-${rawId})`} />
          <circle cx="350" cy="275" r="15" fill="#E0F7FF" fillOpacity=".95" />
          <circle cx="350" cy="275" r="26" stroke="#E0F7FF" strokeOpacity=".75" />
          <circle cx="350" cy="275" r="34" stroke="#38BDF8" strokeOpacity=".45" strokeDasharray="2 6" />
          <path d="M350 235V315 M310 275H390 M322 247L378 303 M378 247L322 303" stroke="#FFFFFF" strokeOpacity=".5" strokeWidth=".65" />
        </g>

        <g className="tech-flower__stem">
          <path d="M350 306 C365 360 388 391 427 412 C470 435 507 442 541 477 C567 503 580 541 615 566 C642 586 669 593 700 591" stroke={`url(#${lineId})`} strokeWidth="2.3" />
          <path d="M357 310 C373 363 397 394 433 415 C478 440 513 450 547 484 C572 509 585 545 619 570 C645 589 671 597 700 595" stroke="#E0F7FF" strokeOpacity=".28" strokeWidth=".7" />
          <path d="M431 414 C414 443 403 464 409 491 C433 476 447 449 431 414Z" fill="#38BDF8" fillOpacity=".06" stroke="#7DD3FC" strokeOpacity=".48" />
          <path d="M508 451 C533 437 557 438 577 454 C556 466 531 468 508 451Z" fill="#A855F7" fillOpacity=".06" stroke="#A5B4FC" strokeOpacity=".48" />
          <path d="M581 535 C607 520 631 525 647 543 C624 552 603 552 581 535Z" fill="#38BDF8" fillOpacity=".05" stroke="#7DD3FC" strokeOpacity=".42" />
          <circle cx="427" cy="412" r="3" fill="#E0F7FF" />
          <circle cx="541" cy="477" r="2.4" fill="#7DD3FC" />
          <circle cx="615" cy="566" r="2" fill="#A5B4FC" />
        </g>

        <g className="tech-flower__nodes" fill="#DDF7FF">
          <circle cx="219" cy="164" r="2" />
          <circle cx="462" cy="130" r="2" />
          <circle cx="489" cy="300" r="1.6" />
          <circle cx="231" cy="318" r="1.7" />
          <circle cx="402" cy="80" r="1.4" />
          <circle cx="278" cy="390" r="1.5" />
          <circle cx="550" cy="364" r="1.5" />
        </g>
      </svg>
    </div>
  );
}
