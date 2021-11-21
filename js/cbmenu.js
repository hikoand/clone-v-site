$(document).ready(function () {

    var walletCnt = 0;
    function walletCont(num) {
    walletCnt++;
    if (num != null) walletCnt = 2; // 커런트 메뉴 클로즈 시에 필요함

    if (walletCnt % 2 == 1) {
        $('#vwallet').fadeIn();

        fnCloseCbm(); // 컴바인 사이드 메뉴 클로즈

        $('#mbSub,  #mbMenuShadow').removeClass('on');
        //vfun.valofe.com 일 때만
        $('#crtMenu').removeClass('on');
        $('#crtMenu > span').toggleClass('fa-sort-up fa-sort-down');
        //푸터 월럿 초기화
        $('#fVwallet').fadeOut();
        fWalletCont(2);
        // END vfun.valofe.com 일 때만
        $('.user-coin > span > span').addClass('fa-angle-up');
        $('.user-coin > span > span').removeClass('fa-angle-down');
    } else {
        $('#vwallet').fadeOut();
        $('.user-coin > span > span').addClass('fa-angle-down');
        $('.user-coin > span > span').removeClass('fa-angle-up');
        //resetWallet();
    }

}
}