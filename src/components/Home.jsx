import React from 'react';
import './Home.css';


const notifications = [
  "📌 오늘은 6교시 수업까지 진행됩니다.",
  "📢 학사일정이 변경되었습니다. 자세한 사항은 공지사항을 확인하세요.",
  "⛅ 금일 야외 수업이 예정되어 있습니다. 체육복 착용 권장!",
  "📎 신입생 오리엔테이션은 다음 주 월요일입니다.",
  "📅 오늘은 도서관 자습실이 22시까지 운영됩니다.",
  "✅ 학생회 선거 투표는 이번 주 금요일까지입니다.",
];

function getRandomNotification() {
  const index = Math.floor(Math.random() * notifications.length);
  return notifications[index];
}

function Home() {
  const notification = getRandomNotification();

  return (
    <div style={{ textAlign: 'center' }}>
        <h3>경북소프트웨어마이스터고등학교</h3>
      <p><strong>- 알림 -</strong></p>
      <p>{notification}</p>
      <img src="https://i.namu.wiki/i/PWQCzc6Huoq-zlDdqfosax2FVK4zWwZkPwcFiI9YYTa5SwZTYig_ER9ltf3gLhMeUOM6ox-1ycl73qoIc18u3NhHXocZs5tcHJDdKg33YrWgwJKvToysvu7CNHHTjNKaoqM3WUBS4CMpuUcKE-ia50mqddENvKw12lI95Dn01Vg.webp" className='school-image'/>
      <h2>학교 전경</h2>
    </div>
  );
}

export default Home;
