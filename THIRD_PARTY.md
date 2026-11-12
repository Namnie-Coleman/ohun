# 외부 자료 출처와 라이선스

| 자료 | 출처 | 라이선스 | 앱에서 쓰는 방식 |
|---|---|---|---|
| 운동 동작 그림 (`ek.pack.gz`) | Everkinetic — https://github.com/everkinetic/data (원작 Greg Priday, everkinetic.com) | CC BY-SA 4.0 — https://creativecommons.org/licenses/by-sa/4.0/ | 그림마다 "그림 © Everkinetic · CC BY-SA 4.0" 표시. 변경: SVG 공백 제거·좌표 소수 둘째 자리 반올림·한 파일로 묶음. 이 그림 묶음은 같은 CC BY-SA 4.0으로 배포 |
| 근육 지도 경로 | react-native-body-highlighter — ELABBASSI Hicham | MIT (전문 아래) | 앱 코드 안에 포함 |
| 식품영양성분 (`data/`) | 식품의약품안전처·농촌진흥청·해양수산부, 공공데이터포털 「전국통합식품영양성분정보 표준데이터」 | 공공데이터, 이용허락범위 제한 없음 | 필요한 항목만 골라 압축, 출처 표시 |
| 인바디 사진 글자 인식 (`ocr/`) | Tesseract.js 7.0.0, tesseract.js-core 7.0.0 (Jerome Wu 외), 한국어 학습 데이터 tessdata 4.0.0_best_int (Google/Tesseract OCR) | Apache 2.0 | 앱 서버에 원본 그대로 두고 사용자가 사진 입력을 처음 누를 때만 내려받음. 사진은 기기 안에서만 처리 |
| 로그인·클라우드 저장 | Firebase JS SDK 10.12.2 (Google) | Apache 2.0 | Google 서버에서 불러옴 |
| 아이콘 글꼴 | Poppins (Indian Type Foundry) | SIL OFL 1.1 | 아이콘 이미지 안에만 사용 |

앱의 나머지 코드와 운동 프로그램 설명 글은 직접 작성한 것입니다. 5/3/1, Madcow, HYROX 등은 각 권리자의 프로그램·상표 이름을 설명 목적으로만 사용하며 공식 제휴가 아닙니다. 이 앱은 비상업 개인 프로젝트이며 광고·결제가 없습니다. 만든 사람: @proteinvillain (Instagram)

---

## MIT License — react-native-body-highlighter

Copyright (c) 2022 ELABBASSI Hicham

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
