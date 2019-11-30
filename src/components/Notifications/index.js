import React from 'react';

import NotificationCard from '../NotificationCard';

export default function Notifications() {
  return (
    <NotificationCard title="this is a test" subtitle={<>his name is <a href="https://jjba.fandom.com/pt-br/wiki/Diavolo">diavolo</a></>}/>
  );
}
