import { useState, useEffect } from 'react';
import { ChatAPI } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribe(props.friend.id, handleStatusChange);

    //cleaning after effect
    return function cleanup() {
      ChatAPI.unsubscribe(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loadingg...';
  }
  return isOnline ? 'Onlline' : 'Offline';
}

export default FriendStatus;
