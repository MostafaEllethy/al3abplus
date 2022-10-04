import Script from "next/script";
import { FC, memo, useEffect, useRef, useState } from "react";
import Spinner from "../Spinner";

const Comments: FC<{ url: string }> = ({ url }) => {
  const commentsContainerRef = useRef<HTMLDivElement>(null);
  const [commentsLoading, setCommentsLoading] = useState(true);
  useEffect(() => {
    setCommentsLoading(true);
    if (commentsContainerRef.current != null) {
      const win: any = window;
      if (win.FB) {
        win.FB.XFBML.parse(document.querySelector("body"), () =>
          setCommentsLoading(false)
        );
      }
    }
  }, [commentsContainerRef, url]);
  return (
    <section
      className={`card w-full bg-base-100 shadow-sm border mt-4 rounded`}
    >
      <div id="fb-root"></div>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v14.0"
        nonce="S9AX0VYf"
        strategy="lazyOnload"
        onLoad={() => {
          const win: any = window;
          win.FB.Event.subscribe("xfbml.render", () => {
            setCommentsLoading(false);
          });
        }}
      />
      <div className="card-body relative overflow-hidden p-5">
        {commentsLoading && (
          <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-white z-10">
            <Spinner className="text-sky-700 ml-2" /> جاري تحميل التعليقات
          </div>
        )}
        <div
          ref={commentsContainerRef}
          className="fb-comments"
          data-href={url}
          data-width=""
          data-numposts="5"
          data-mobile="true"
        ></div>
      </div>
    </section>
  );
};

export default memo(Comments);
