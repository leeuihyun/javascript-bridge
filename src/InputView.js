const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./lib/constants');
const {
  changeSizeType,
  printBridgeSizeError,
  sizeRegexTest,
} = require('./lib/bridgeSizeInputUtils');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const Bridge = require('./Bridge');
const BridgeGame = require('./BridgeGame');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.INPUT_BRIDGE_SIZE, (size) => {
      try {
        this.bridgeSizeErrorCheck(size);
      } catch (error) {
        this.bridgeSizeRetry(error);
      }
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGE.INPUT_BRIDGE_MOVE, (move) => {
      try {
        this.bridgeMoveGo(move);
      } catch (error) {
        this.bridgeMoveRetry(error);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.INPUT_BRIDGE_RESTART, (ask) => {
      console.log(ask);
      try {
      } catch (error) {}
    });
  },

  bridgeSizeErrorCheck(size) {
    printBridgeSizeError(sizeRegexTest(changeSizeType(size)));
    this.bridgeSizeGo(changeSizeType(size));
  },

  bridgeSizeGo(size) {
    this.bridge = new Bridge(BridgeMaker.makeBridge(size, generate));
    this.bridgeGame = new BridgeGame();
    this.readMoving();
  },

  bridgeSizeRetry(error) {
    Console.print(error);
    this.readBridgeSize();
  },

  bridgeMoveGo(move) {
    this.bridgeGame.move(move, this.bridge.getBridge());
    if (!this.bridgeGame.checkX()) {
      this.readGameCommand();
    }
  },

  bridgeMoveRetry(error) {
    Console.print(error);
    this.readMoving();
  },
};

module.exports = InputView;
