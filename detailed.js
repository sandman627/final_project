
window.addEventListener("load", () => {
fetch("library_seoul.json")
    .then((response) => response.json())
    .then((data) => {
    data.DATA.forEach(addToList);
    });
});

import {fs} from 'fs';

function GetLbrryName(lbrryNum) {
    fs.readFile('library_seoul.json', 'utf-8', (error, jsonString) => {
        if (error) {
            console.log(error)
        }else{
            const strings = JSON.parse(jsonString);
            const data = strings["DATA"];
            const lbrryData = data[lbrryNum];

            console.log(lbrryData["lbrry_name"]);
            document.getElementById("lbrry_name").innerText = lbrryData["lbrry_name"];
            console.log(document.getElementById("lbrry_name").innerText);
            console.log("");
        }
    });
}


/*

function GetLbrryInfo(lbrryNum, lbrryFeature) {
    const fs = require('fs')
    fs.readFile('library_seoul.json', 'utf-8', (error, jsonString) => {
        if (error) {
            console.log(error)
        }else{
            const strings = JSON.parse(jsonString);
            const header_row = strings["DESCRIPTION"];
            const data = strings["DATA"];

            let keylist = Object.keys(header_row);
            let vallist = Object.values(header_row);
            let colnum = keylist.length;

            const lbrryData = data[lbrryNum];
            
            console.log(lbrryData);
            console.log(lbrryFeature);

            console.log(header_row[lbrryFeature.toUpperCase()] + ": " + lbrryData[lbrryFeature.toLowerCase()]);
        }
    });
}

function GetTableCell(lbrryNum, tr, lbrryKey) {
    const fs = require('fs')
    fs.readFile('library_seoul.json', 'utf-8', (error, jsonString) => {
        if (error) {
            console.log(error)
        }else{
            const strings = JSON.parse(jsonString);
            const header_row = strings["DESCRIPTION"];
            const data = strings["DATA"];

            let keylist = Object.keys(header_row);
            let vallist = Object.values(header_row);
            let colnum = keylist.length;

            const lbrryData = data[lbrryNum];

            let trInfoName = document.createElement("td");
            let lbrry_info_name = document.createTextNode(header_row[lbrryKey.toUpperCase()]);
            trInfoName.appendChild(lbrry_name_text);

            let trInfoText = document.createElement("td");
            let lbrry_info_text = document.createTextNode(lbrryData[lbrryKey.toLowerCase()]);
            trInfoText.appendChild(lbrry_info_text);

            tr.appendChild(trInfoName)
            tr.appendChild(trInfoText)
        }
    });
}


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
            var tblHead = document.createElement("thead");
            var tblBody = document.createElement("tbody");

            // 표 머리글 행


            // 표 도서관 목록
            let row = document.createElement("tr");

            for(let i = startnum; i < startnum + table_row_num && i < data.length; i++) { // startnum 부터 20 개 혹은 남은 데이터의 개수만큼 출력한다
            
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
      
window.onload =  GetLbrryName(1);
alert("af;ljfl; ikl'dgl/jagg");


/*

let libNum = 1;
let libData;
const fs = require('fs');
fs.readFile('library_seoul.json', 'utf-8', (error, jsonString) => {
  if (error) {
    console.log(error)
  }else{
    const strings = JSON.parse(jsonString);
    const header_row = strings["DESCRIPTION"];
    const data = strings["DATA"];
    
    let keylist = Object.keys(header_row);
    let vallist = Object.values(header_row);
    let colnum = keylist.length;

    libData = data[libNum]
  }
});

function GetFeatureValue(feature) {
  let trInfoName = document.createElement("td");
  let lbrry_info_name = document.createTextNode("asdf");
  trInfoName.appendChild(lbrry_name_text);
  
  let trInfoText = document.createElement("td");
  let lbrry_info_text = document.createTextNode("asdf");
  trInfoText.appendChild(lbrry_info_text);

  alert("asdfasdf");
  
  // tr.appendChild(trInfoName)
  // tr.appendChild(trInfoText)
}
*/
