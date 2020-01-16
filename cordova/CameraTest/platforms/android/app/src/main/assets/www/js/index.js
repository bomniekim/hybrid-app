// 문서가 로딩되어야 html 요소 제어가 가능하므로 
$(document).ready( function(){

    // html 문서의 로드와는 별개로 device의 준비(connection) 콜백 처리 필요 (onResume같은 역할)
    document.addEventListener('deviceready', onDeviceReady, true); // 옵션값 true: 부모가 자식에게

    // 카메라 실행 버튼 클릭이벤트
    $('#btn_takePic').click(function(){
        takePic();
    });
    
    // 갤러리 앱 실행 버튼 클릭이벤트
    $('#btn_getPic').click(function(){
        getPic();
    });
});

// 디바이스가 준비되면 자동으로 실행되는 콜백함수
function onDeviceReady(){
    // alert(); // web용 다이얼로그

    // 디바이스 고유의 다이얼로그 사용
    // 디바이스 고유의 기능을 사용하고자 한다면 해당 기능 package(library)를 npm에서 다운받아 plug-in해야 함
    navigator.notification.alert('Device is Ready', null, 'Alert Dialog','OK');

}

// 카메라 or 갤러리 사용 모두 하나의 plug-in사용
// cordova-plugin-camera

// 카메라 실행 함수
function takePic(){
    navigator.camera.getPicture( // 성공시 함수, 실패시 함수, 옵션
        function( imgData ){ // 사진 캡쳐 성공 시
            var img=document.getElementById('img_pic');
            img.src=imgData;

            $('h3').replaceWith( $('<h3>Taken Pictures</h3>'));
        },
        function( msg ){ // 사진 캡쳐 실패 시 
            alert( msg );
        },
        { // 옵션
            quality:20,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true

        }); 
        
}

// 갤러리 앱 실행 함수
function getPic(){
    navigator.camera.getPicture(
        function( imgData ){ // 사진 캡쳐 성공 시
            var img=document.getElementById('img_pic');
            img.src=imgData;

            $('h3').replaceWith( $('<h3>Taken Pictures</h3>'));
        },
        function( msg ){ // 사진 캡쳐 실패 시 
            alert( msg );
        },
        { // 옵션
            quality:20,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        }); 
}