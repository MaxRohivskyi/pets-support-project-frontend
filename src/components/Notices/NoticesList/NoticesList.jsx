import { selectNotices } from '../../../redux/notices/selector';
import { useSelector } from 'react-redux';
import { Notice } from '../NoticesItem/NoticesItem';
import { NoticesList } from './NoticesList.styled';

export const NoticeList = () => {
  const notices = useSelector(selectNotices);
  return (
    <NoticesList>
      {notices.map(notice => {
          return <Notice key={notice._id} item={ notice} />;
      })}
    </NoticesList>
  );
};
