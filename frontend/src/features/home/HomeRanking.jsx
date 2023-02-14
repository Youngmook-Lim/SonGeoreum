import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

// import ranking from '../../common/api/rankingInfo'
import axios from '../../common/api/https'
import './HomeRanking.scss'

function HomeRanking() {

  const [rankingList, setRankingList] = useState([]);
  const [toggle, setToggle] = useState(false)

  async function rankingInfo() {
    const data = await axios.get(
      '/api/user/ranking'
      );
      const newDataList = data.data;
      for (let i=0; i<newDataList.length; i++) {
        console.log(newDataList[i], rankingList[i]);
      }
      setRankingList(data.data)
    console.log('랭킹!', data)
  }

  useEffect(() => {
    const updateRanking = setInterval(() => 
    {
      rankingInfo()
    }, 5000)
    rankingInfo();
    setToggle(true);
  }
  ,[])

  return (
    <div>
    <div className="rankingTitle">실시간 유저 랭킹</div>
    

    <TransitionGroup className='rankingMember'>
    
      {rankingList.map((member, idx) => (
        <CSSTransition
        in = {toggle}
        timeout = {300}
        classNames = "rank"
        mountOnEnter
      unmountOnExit
      >
        <div className='wrapElement'>
          <div className={`rankingElement${idx+1} rankingElement1`}>
            <div className='rankingIndex'>{idx+1}</div>
            {/* <div className='rankingLevel'>{member.level}</div> */}
            <div className='rankingNickname'>{member.nickname}</div>
            {/* <div className='rankingExperience'>{member.experience}</div> */}
          </div>
        </div>
    </CSSTransition>
      ))}
    </TransitionGroup>
    </div>
  )
}

export default HomeRanking