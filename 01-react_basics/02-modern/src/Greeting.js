import React from "react";

function Greeting() {
  return <div>안녕하세요</div>;
}

export const MemoizedGreeting = React.memo(Greeting);
