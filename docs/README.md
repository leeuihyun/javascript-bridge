<center>

# **미션 - 다리 건너기**

</center>

<br/>

### 이의현

<br/>

**🛠 미션 소개**

---

- 다리의 길이를 정한다.

  - 다리의 길이에 따라서 랜덤으로 건널 수 있는 다리가 정해진다.
  - 예를 들어 다리의 길이가 3일 때의 건널 수 있는 경로는 아래와 같다.<br/>

    - (위, 아래, 아래 순으로 이동이 가능한 경로)

    ```
    [ O |   |   ]
    [   | O | O ]
    ```

- 위아래 두칸으로 이루어진 다리를 건넌다. (좌 => 우 방향)
- 위아래 둘 중 한 칸만 건널 수 있다.
- 사용자에 입력에 따라 다리를 건넌다.
- 다리를 끝까지 건너면 게임이 종료된다.
- 사용자가 잘못된 값을 입력하면 예외를 발생시키고, 에러 메시지를 출력 후 그 부분부터 다시 입력을 받는다.

<br/>

**🗒 미션 추가 목표**

---

- 비즈니스 로직과 UI 로직의 분리

  - 단일 책임의 원칙 위배 방지

- 객체 안에서 검증과 getter만 사용하지 않고, 로직에 대한 구현도 추가하여 객체스럽게 사용
- 필드의 수 줄이기
- 테스트에서만 사용되는 로직 만들지 않기
- 단위 테스트 하기 힘든 코드 또한 단위 테스트하기

<br/>