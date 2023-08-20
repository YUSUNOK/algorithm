//  n = 4
// 1 2 3 4 ; n
//  5 6 7 ; n-1
//  8 9 10 ; n-1
//  11 12 : n-2
//  13 14 : n-2
//  15 : n-3
//  16 : n-3

// n = 5
// 1 2 3 4 5 : n -> 0
// 9 8 7 6 : n-1 -> 1
// 13 12 11 10 : n-1 -> 2
// 16 15 14 : n-2 -> 3
// 17 18 19 : n-2 -> 0
// 20 21 : n-3 -> 1
// 22 23 : n-3 -> 2
// 24 : n-4 -> 3
// 25 : n-4 -> 0

// n = 6
// 1 2 3 4 5 6 : n -> 0
// 11 10 9 8 7 : n-1 -> 1
// 12 13 14 15 16 : n-1 -> 2
// 17 18 19 20: n-2 -> 3
// 21 22 23 24: n-2 -> 0
// 25 26 27 : n-3 -> 1
// 28 29 30: n-3 -> 2
// 31 32 : n-4 -> 3
// 33 34 : n-4 -> 0
// 35: n-5 -> 1
// 36 : n-5 -> 2

// 총 직선 수 : 1 + (n-1) * 2 
// 왼쪽 오른쪽에서 개수가 -1된다.

// 행+ 0 
// 열+ 1
// 행- 2
// 열- 3 i를 4로 나눈 나머지
// 0-> 1, 2->3에서 개수가 1씩 작아진다. 
const solution = (n) => {
    // 1. 0만 들어있는 이차원으로 초기화하기
    let result = [];
    for(let i = 0; i < n; i++) {
        result.push(Array(n).fill(0));
    }    
    // 2. 뿌려줄 개수 n으로 초기화하기(0다뿌리고 1로변할때, 2다뿌리고 3으로 변할때 1씩 줄어든다.)
    let numberCountToPrint = n;
    let nowCoordinate = [0,0];
    let count = 1;
    
    // 3. 총 직선 수 1 + (n-1) * 2 만큼 반복된다. 
    // i % 4가 
    for(let i = 0; i < 1+ (n-1) * 2; i++) {
        // 각각 한직선의 로직을 짜준다. 
        switch(i % 4) {
            case 0: // nowCoordinate[1]증가
                for(let j = 0; j < numberCountToPrint; j++) {
                   result[nowCoordinate[0]][nowCoordinate[1]] = count++;
                    if( j !== numberCountToPrint-1) {
                        nowCoordinate[1] += 1;
                    }else {
                        nowCoordinate[0] += 1; 
                    }
                }
                break;
            case 1: // nowCoordinate[0]증가
                --numberCountToPrint;
                for(let j = 0; j < numberCountToPrint; j++) {
                    result[nowCoordinate[0]][nowCoordinate[1]] = count++;
                      if( j !== numberCountToPrint-1) {
                        nowCoordinate[0] += 1;
                    }else {
                        nowCoordinate[1] -= 1; 
                    }
                }
                break;
            case 2: // nowCoordinate[1]감소
                 for(let j = 0; j < numberCountToPrint; j++) {
                   result[nowCoordinate[0]][nowCoordinate[1]] = count++;
                    if( j !== numberCountToPrint-1) {
                        nowCoordinate[1] -= 1;
                    }else {
                        nowCoordinate[0] -= 1; 
                    }
                }
                break;
            case 3: // nowCoordinate[0]감소
                --numberCountToPrint;
                for(let j = 0; j < numberCountToPrint; j++) {
                   result[nowCoordinate[0]][nowCoordinate[1]] = count++;
                    if( j !== numberCountToPrint-1) {
                        nowCoordinate[0] -= 1;
                    }else {
                        nowCoordinate[1] += 1; 
                    }
                }
                break; 
        }
    } 
    return result;
}

