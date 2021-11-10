const fs = require('fs')

fs.readFile('library_seoul.json', 'utf-8', (error, jsonString) => {
    if (error) {
        console.log(error)
    }else{
        const strings = JSON.parse(jsonString);
        const header_row = strings["DESCRIPTION"];
        const data = strings["DATA"];

        console.log(header_row);
        console.log(data.length); // 전체 도서관 개수

        let startnum = 3;  // 읽기 시작하는 도서관 번호
        let table_row_num = 10;  //도서관 목록에 나타나는 행의 갯수
        for(let i = startnum; i < startnum + table_row_num && i < data.length; i++) {   // startnum 부터 20 개 혹은 남은 데이터의 개수만큼 출력한다
            console.log(data[i]["lbrry_name"]);
        }
    }
});