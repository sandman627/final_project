function CreateTable() {
    const fs = require('fs')
    fs.readFile('library_seoul.json', 'utf-8', (error, jsonString) => {
        if (error) {
            console.log(error)
        }else{
            const strings = JSON.parse(jsonString);
            const header_row = strings["DESCRIPTION"];
            const data = strings["DATA"];

            // console.log(header_row);
            // console.log(data.length); // 전체 도서관 개수


            let keylist = Object.keys(header_row);
            let colnum = keylist.length;
            let startnum = 3;  // 읽기 시작하는 도서관 번호
            let table_row_num = 10;  //도서관 목록에 나타나는 행의 갯수



            console.log(colnum);
            console.log(data[1]["lbrry_name"]);


            // 표 생성
            var body = document.getElementsByTagName("body")[0];
            var tbl = document.createElement("table");
            var tblBody = document.createElement("tbody");

            // 표 머리글 행

            // 표 도서관 목록
            for(let i = startnum; i < startnum + table_row_num && i < data.length; i++) { // startnum 부터 20 개 혹은 남은 데이터의 개수만큼 출력한다
                
                let row = document.createElement("tr");
                
                for(let j = 0; j < colnum; j++){
                    let cell = document.createElement("td");  // 칸 만듬
                    let lbrryInfo = document.createTextNode(data[i]["lbrry_name"]);  //방금 만든 칸에 들어갈 문자열

                    cell.appendChild(lbrryInfo);  // 칸에 문자열을 넣음
                    row.appendChild(cell);  // 행에 칸을 넣음
                }
                tblBody.appendChild(row);  // 행을 표 밑에 붙임
            }
            tbl.appendChild(tblBody);  // 표에 표 몸통을 넣음
            body.appendChild(tbl);  // html body에 표를 넣음
            tbl.setAttribute("border", "1");  // 표의 설정
        }
    });
}


CreateTable();