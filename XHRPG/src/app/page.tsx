 "use client";

import Link from "next/link";
import { useState } from "react";
import { games } from "./data/games";

export default function Home(){

 const [open,setOpen] = useState(false);
 const latest = games?.[0];

 return (
 <main className="xhrpg-home">

  <aside
   className={open ? "drawer-nav open":"drawer-nav"}
   onMouseEnter={()=>setOpen(true)}
   onMouseLeave={()=>setOpen(false)}
  >
   <div className="logo-box">
    <b>喜灰</b>
    <span>RPG</span>
   </div>

   {[
    "首页",
    "游戏库",
    "作者们",
    "羊崩杯",
    "上传游戏",
    "个人空间"
   ].map(x=>
    <div className="nav-item" key={x}>{x}</div>
   )}

  </aside>


  <section className="content-area">

   <header className="top-bar">
    <input placeholder="搜索 RPG 游戏..."/>
    <div>
     <button>注册</button>
     <button>登录</button>
    </div>
   </header>


   <section className="latest-box">

    <button>‹</button>

    <div className="latest-inner">

     <div
      className="latest-cover"
      style={{
       backgroundImage:`url(${latest?.cover ?? ""})`
      }}
     />

     <div>
      <h1>{latest?.name}</h1>
      <p>{latest?.description}</p>
     </div>

    </div>

    <button>›</button>

   </section>


   <h2>游戏库</h2>

   <div className="game-grid">

    {games.map((game)=>(

<Link
key={game.id}
className="square-card"
href={`/game/${game.id}`}
>


<div className="cover-box">


<img

className="cover-img"

src={`/assets/games/games${game.id}.png`}

onError={(e)=>{

const img=e.currentTarget;


if(img.dataset.try==="png"){

img.dataset.try="jpg";

img.src=`/assets/games/games${game.id}.jpg`;

}

else if(img.dataset.try==="jpg"){

img.dataset.try="webp";

img.src=`/assets/games/games${game.id}.webp`;

}

else{

img.style.display="none";

}

}}


data-try="png"

/>


</div>



<div className="game-title">

{game.name}

</div>


</Link>

))}

   </div>

  </section>

 </main>
 )
}
