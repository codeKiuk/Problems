function solution(board, moves) {
  let answer = 0;
  const basket = [];
  let lastIDXinBasket;

  moves.map((idx) => {
    let pickedByCrain = 0;
    let pickedByCrainIdx = -1;

    pickedByCrainIdx = board.findIndex((floor) => {
      return floor[idx - 1] !== 0;
    });

    if (pickedByCrainIdx !== -1) {
      pickedByCrain = board[pickedByCrainIdx][idx - 1];
      board[pickedByCrainIdx][idx - 1] = 0;
      basket[basket.length] = pickedByCrain;
    }

    lastIDXinBasket = basket.length - 1;

    if (
      lastIDXinBasket !== 0 &&
      basket[lastIDXinBasket - 1] === pickedByCrain
    ) {
      basket.pop();
      basket.pop();
      answer = answer + 2;
    }
  });

  return answer;
}
