import React from "react";
import Wine from "./img/WINE.png";
import Absolute from "./img/Absolute.png";
import Game_Jam_Gym from "./img/Game_Jam_Gym.png";
import Comment from "./img/Comment.png";
import Ada from "./img/Ada.png";
import RCE from "./img/RCE.png";
import GoBlocks from "./img/GoBlocks.png";
import AIgora from "./img/AIgora.png";
import Frame from "./img/Frame.png";
import './Club.css';

const Club = () => {
  return (
    <div>
      <h1>동아리 소개!!</h1>
      <h2>저희 학교에 있는 10가지의 동아리를 간략히 소개해 드리죠. 후후</h2>
      <h2>
        1. WINE. (웹 개발) <img src={Wine} alt="WINE" className="img" />
        2. Absolute. (모바일 앱 개발) <img src={Absolute} alt="Absolute" className="img" /><p></p>
        3. Game Jam/Gym. (게임 개발) <img src={Game_Jam_Gym} alt="Game_Jam_Gym" className="img" />
        4. Commant. (알고리즘 연구) <img src={Comment} alt="Comment" className="img" /><p></p>
        5. Ada. (프로젝트) <img src={Ada} alt="Ada" className="img" />
        6. RCE. (정보 보안) <img src={RCE} alt="RCE" className="img" /><p></p>
        7. GoBlocks. (블록체인 연구) <img src={GoBlocks} alt="GoBlocks" className="img" />
        8. AIgora. (인공지능) <img src={AIgora} alt="AIgora" className="img" /><p></p>
        9. Frame. (디자인) <img src={Frame} alt="Frame" className="img" />
      </h2>
    </div>
  );
};

export default Club;
