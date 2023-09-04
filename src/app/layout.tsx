import Script from "next/script";
import "./globals.css";
import { NextAuthProvider } from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Your Splitwise Analytics",
  description: "See my spendings in a nice way",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body>
          <Script id="segment">
            {`  
            !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="zhFD7Z6QnJNElD8cwxRjQx4CrLIBVlPS";;analytics.SNIPPET_VERSION="4.16.1";
            analytics.load("zhFD7Z6QnJNElD8cwxRjQx4CrLIBVlPS");
            analytics.page();
            }}();
            `}
          </Script>
          {children}
        </body>
        <Analytics />
      </NextAuthProvider>
    </html>
  );
}
