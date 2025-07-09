import React, { useState } from 'react';

const notices = [
  {
    title: "2025학년도 2학기 개강일 안내",
    date: "2025-04-26",
  },
  {
    title: "동아리 모집 일정 공지",
    date: "2025-03-02",
  },
  {
    title: "중간고사 시험 시간표 공지",
    date: "2025-05-20",
  },
  {
    title: "학교 축제 일정 확정 (2025 무비페스타)",
    date: "2025-09-05",
  },
  {
    title: "2025년 여름방학 일정 안내",
    date: "2025-08-01",
  },
  {
    title: "교내 해커톤 참가 신청 안내",
    date: "2025-08-15",
  },
];

export default function Notice() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const today = new Date();


  const filteredNotices = notices.filter((notice) => {
    const noticeDate = new Date(notice.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && noticeDate < start) return false;
    if (end && noticeDate > end) return false;
    return true;
  });

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>📢 공지사항</h2>

      <div style={{ marginBottom: '20px' }}>
        <label>
          시작 날짜:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ marginLeft: '8px', marginRight: '20px' }}
          />
        </label>
        <label>
          종료 날짜:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ marginLeft: '8px' }}
          />
        </label>
      </div>

      <ul>
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice, index) => {
            const noticeDate = new Date(notice.date);
            const isFuture = noticeDate > today;

            return (
              <li key={index} style={{ marginBottom: '10px' }}>
                <strong>
                  {isFuture ? '🔥 ' : ''}
                  {notice.title}
                </strong>{' '}
                - <span>{notice.date}</span>
              </li>
            );
          })
        ) : (
          <p>선택한 날짜에 해당하는 공지사항이 없습니다.</p>
        )}
      </ul>
    </div>
  );
}