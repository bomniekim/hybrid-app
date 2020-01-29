<?php

    header('Content-Type:application/json; charset=utf-8');

    //슈퍼전역변수 $_POST배열에는 json문자열이 파싱되어 들어오지 못함
    //클라이언트로부터 받은 json body데이터를 읽어오기
    $jsonData= file_get_contents('php://input');//파일 읽기 함수
    // echo $jsonData;
    // echo "\n\n";

    //보통 json문자열을 받아 DB같은 곳에 저장하는 작업 수행

    //이 예제에서는 간단하게 json문자열을 파싱해서 echo해주기
    $obj= json_decode($jsonData); //json문자열 --> 객체로 변환 (php의 함수)
    // echo "$obj->name \n";
    // echo "$obj->age \n";
    // echo "$obj->address \n\n";

    //실제 현업에서는 서버가 echo하는 데이터도 json으로 주는 경우가 많음
    $arr= json_decode($jsonData, true); //json문자열  --> 연관배열로 변환

    //연관배열을 json으로 변환
    $json=json_encode($arr);
    echo $json;




?>