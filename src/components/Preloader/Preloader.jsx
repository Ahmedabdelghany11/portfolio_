import { useEffect, useState } from "react";

import "./_preloader.scss";

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    let progressTimer;
    let hideTimer;
    let currentProgress = 0;

    const updateProgress = () => {
      currentProgress += Math.random() * 8;

      const targetProgress = isReady ? 100 : Math.min(currentProgress, 92);

      setProgress(targetProgress);

      if (!isReady) {
        progressTimer = window.setTimeout(updateProgress, 90);
      }
    };

    const handleLoad = () => {
      setIsReady(true);
      setProgress(100);

      hideTimer = window.setTimeout(() => {
        setIsLeaving(true);

        window.setTimeout(() => {
          document.body.style.overflow = previousOverflow;
          onComplete?.();
        }, 650);
      }, 350);
    };

    updateProgress();

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.clearTimeout(progressTimer);
      window.clearTimeout(hideTimer);

      window.removeEventListener("load", handleLoad);

      document.body.style.overflow = previousOverflow;
    };
  }, [isReady, onComplete]);

  return (
    <div
      className={`preloader ${isLeaving ? "preloader--leaving" : ""}`}
      aria-hidden="true"
    >
      <div className="preloader__grid" />

      <div className="preloader__glow preloader__glow--one" />
      <div className="preloader__glow preloader__glow--two" />

      <div className="preloader__content">
        <div className="preloader__brand">
          <span className="preloader__mark">A.</span>
          <span className="preloader__mark">A.</span>
        </div>

        <div className="preloader__label">Frontend Engineer</div>

        <div className="preloader__status">
          <div className="preloader__status-row">
            <span>{isReady ? "Ready" : "Initializing"}</span>

            <span>{Math.round(progress).toString().padStart(3, "0")}%</span>
          </div>

          <div className="preloader__bar">
            <span
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="preloader__meta">
            <span>React</span>
            <span>TypeScript</span>
            <span>UI / UX</span>
          </div>
        </div>
      </div>

      <span className="preloader__corner preloader__corner--top-left">01</span>

      <span className="preloader__corner preloader__corner--top-right">
        SYSTEM ONLINE
      </span>

      <span className="preloader__corner preloader__corner--bottom-left">
        AHMED ABDELGHANY
      </span>

      <span className="preloader__corner preloader__corner--bottom-right">
        {new Date().getFullYear()}
      </span>

      <div className="preloader__line preloader__line--top" />
      <div className="preloader__line preloader__line--bottom" />
    </div>
  );
}

export default Preloader;
