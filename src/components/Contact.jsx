function Contact() {
    const hour = new Date().getHours();
    // if (hour > 9 && hour < 16) {
    //     return (
    //         <p style={{color:'black'}}>운영 중</p>
    //     );
    // }
    // else {
    //     return (
    //         <p style={{color:'black'}}>운영 종료</p>
    //     );
    // }
    // return (
    //     <div>
    //         {hour > 9 && hour < 16 ? (
    //             <p style={{color:'black'}}>운영 중</p>
    //         ) : (
    //             <p style={{color:'black'}}>운영 종료</p>
    //         )}
    //     </div>
    // )
    return (
        <>
        <div>
            <p style={{color:'black', textAlign: 'center'}}> <b>{hour > 9 && hour < 16 ? "운영 중" : "운영 종료"}</b> (운영 시간 : 9:00 ~ 16:00) </p>
            <div style={{display:'inline-block',font:'normal normal 400 12px/normal dotum sans-serif', width:'100%', height:'392px', color:'#333', position:'relative'}}><div style={{height: '360px'}}><a href="https://map.kakao.com/?urlX=855930.0000000467&amp;urlY=782083.0000000005&amp;itemId=8372458&amp;q=%EA%B2%BD%EB%B6%81%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EB%A7%88%EC%9D%B4%EC%8A%A4%ED%84%B0%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90&amp;srcid=8372458&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank"><img src="http://t1.daumcdn.net/roughmap/imgmap/fadd07399966d49ce34810d803e5ec9ce4509a1867f284ecbb8cf340c6d682c6" width="638px" height="358px" style={{border:'1px solid #ccc'}}></img></a></div><div style={{overflow: 'hidden', padding: '7px 11px', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '0px 0px 2px 2px', backgroundColor: 'rgb(249, 249, 249)'}}><a href="https://map.kakao.com" target="_blank" style={{float: 'left'}}><img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵" style={{display:'block',width:'72px',height:'16px'}}></img></a><div style={{float: 'right', position: 'relative', top: '1px', fontSize: '11px'}}><a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;srcid=8372458&amp;confirmid=8372458&amp;q=%EA%B2%BD%EB%B6%81%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EB%A7%88%EC%9D%B4%EC%8A%A4%ED%84%B0%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90&amp;rv=on" style={{float:'left',height:'15px',padding:'1px 0 0 0',lineHeight:'15px',color:'#000',textDecoration: 'none'}}>로드뷰</a><span style={{width: '1px',padding: '0',margin: '0 8px 0 9px',height: '11px',verticalAlign: 'top',position: 'relative',top: '2px',borderLeft: '1px solid #d0d0d0',float: 'left'}}></span><a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;eName=%EA%B2%BD%EB%B6%81%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EB%A7%88%EC%9D%B4%EC%8A%A4%ED%84%B0%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90&amp;eX=855930.0000000467&amp;eY=782083.0000000005" style={{float:'left',height:'15px',paddingTop:'1px',lineHeight:'15px',color:'#000',textDecoration: 'none'}}>길찾기</a><span style={{width: '1px',padding: '0',margin: '0 8px 0 9px',height: '11px',verticalAlign: 'top',position: 'relative',top: '2px',borderLeft: '1px solid #d0d0d0',float: 'left'}}></span><a target="_blank" href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=8372458&amp;itemId=8372458&amp;q=%EA%B2%BD%EB%B6%81%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EB%A7%88%EC%9D%B4%EC%8A%A4%ED%84%B0%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90&amp;urlX=855930.0000000467&amp;urlY=782083.0000000005" style={{float:'left',height:'15px',paddingTop:'1px',lineHeight:'15px',color:'#000',textDecoration: 'none'}}>지도 크게 보기</a></div></div><div><span style={{borderBottom:'0px none #333333',position:'absolute',left:'-25px',top:'-136px',width:'0px',height:'40px'}}></span></div></div>
        </div>
        </>
    )
}

export default Contact