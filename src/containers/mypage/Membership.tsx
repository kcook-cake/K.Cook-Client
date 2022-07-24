import React from 'react';
import MembershipMobile from 'src/components/mypage/mobile/MembershipMobile';
import MembershipPC from 'src/components/mypage/pc/MembershipPC';
import '../../styles/mypage/Membership.scss';

function Membership (){
    return(
        <> 
            <MembershipPC/>
            <MembershipMobile/>
        </>
    )
   
}


export default Membership;