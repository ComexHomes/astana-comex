import Head from "next/head";
import Homebanner from "@/components/Homebanner";
import Aboutteam from "@/components/Aboutteam";
import Cover from "@/components/Cover";
import City from "@/components/City";
import Covertwo from "@/components/Covertwo";
import Studiobedroom from "@/components/Studiobedroom";
import Revealarea from "@/components/Revealarea";
export default function Home() {
  return (
    <>
      <Head>
        <title>ASTANA</title>
        <meta
          name="WELCOME TO
Astana RESIDENCE"
          content="Discover the pinnacle of luxury and immerse yourself in the finest
living experience at Astana Residence. This exceptional development
seamlessly combines timeless elegance with classic charm, offering a
sophisticated and refined lifestyle like no other."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"e8d4e123d329ca216a27723f23c6f43f"})});
            `,
          }}
        ></script>
      </Head>
      <Homebanner />
      <Revealarea />
      <Studiobedroom />
      <Covertwo />
      <City />
      <Cover />
      <Aboutteam />
    </>
  );
}
