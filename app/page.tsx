'use client'

import Profile from "./ui/profile";
import { useEffect } from 'react';
import { useGlobalContext } from "./Context/store";

export default function Page() {
  return (  
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <Profile/>
</div>
  );
}
