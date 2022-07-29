/*
Header
    -> header-ad, header-top, header-menu-pc(hm-pc)
    -> header-menu -> header-link

HMMobile(HeaderMenuMobile)
    -> header-menu-mobile(hm-mobile) -> hm-main(hm), hm-mypage(hmm), hm-seller(hms)

Login
    -> login-title, login-center, login-sub, login-btn, login-register

SignUp
    -> login-title, login-center, signup-agreement, signup-agreement-sub, login-btn

-> allSeller
SellerSection
    -> ss

==Seller(Pc)==
SellerOrder(sso-pc)
SalesHistory(ssh-pc)
    -> sso-ssh
ProductManagement(spm-pc)
SellerReview(ssr-pc)
    -> spm-ssr
SellerStore(sss-pc)

==Seller(Mobile)==
SellerOrder(sso-mobile)
SalesHistory(ssh-mobile)
    -> sso-ssh
ProductManagement(spm-mobile)
SellerReview(ssr-mobile)
    -> spm-ssr
SellerStore(sss-mobile)


-> allMypage
MypageSection
    -> ms

==Mypage(Pc)==
MypageOrder(mmo-pc)
ProductReview(mpr-pc)
    -> mmo-mpr
Membership(mms-pc)
    -> mms
Coupon(mc-pc)
    -> mc
Profile(mp-pc)

==Mypage(Mobile)==
MypageOrder(mmo-mobile)
ProductReview(mpr-mobile)
    -> mmo-mpr
Membership(mms-mobile)
    -> mms
Coupon(mc-mobile)
    -> mc
Profile(mp-mobile)

*/
