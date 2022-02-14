const engToNum = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
}

function solution(s) {
    let answer = '';
    
    let splitedInput = s.split('')
    let word = '';
    for (let i=0; i < splitedInput.length; i++) {
        // isInteger || !isNaN 처리 => 0일 경우 false되는 case 처리
        if (Number.isInteger(parseInt(splitedInput[i]))) {
            word = '';
            answer = answer + splitedInput[i]
            continue;
        }
        
        word = word + splitedInput[i];
        
        if (engToNum[word]) {
            answer = answer + engToNum[word];
            word = ''
        }
        
    }
    
    answer = parseInt(answer)
    
    return answer;
}