function theAngryCat(itemsPrise, entryPoint, value) {
  let leftSide = 0;
  let rightSide = 0;
  let leftTemp = [];
  let rightTemp = [];

  switch (value) {
    case "cheap":
      // calculating left side
      for (let i = 0; i < entryPoint; i++) {
        if (itemsPrise[i] < itemsPrise[entryPoint]) {
          leftTemp.push(itemsPrise[i]);
        }
      }
      leftTemp.sort((a, b) => b - a);
      for (let i = 0; i < leftTemp.length; i++) {
        if (leftTemp[i] + leftTemp[i + 1] < itemsPrise[entryPoint]) {
          leftSide += leftTemp[i] + leftTemp[i + 1];
        } else {
          leftSide += leftTemp[i];
          break;
        }
      }
      //   for (let i = 0; i < leftTemp.length; i++) {
      //     if (leftTemp.length === 0) {
      //       break;
      //     }
      //     if (leftSide < itemsPrise[entryPoint]) {
      //       leftSide += leftTemp[i];
      //     }
      //   }

      ////////////////////
      // calculating right side
      for (let i = entryPoint; i < itemsPrise.length - 1; i++) {
        if (itemsPrise[i + 1] < itemsPrise[entryPoint]) {
          rightTemp.push(itemsPrise[i + 1]);
        }
      }
      rightTemp.sort((a, b) => b - a);
      for (let i = 0; i < rightTemp.length; i++) {
        if (rightTemp[i] + rightTemp[i + 1] < itemsPrise[entryPoint]) {
          rightSide += rightTemp[i] + rightTemp[i + 1];
        } else {
          rightSide += rightTemp[i];
          break;
        }
      }
      //   for (let i = entryPoint; i < itemsPrise.length - 1; i++) {
      //     if (itemsPrise[i + 1] < itemsPrise[entryPoint]) {
      //       rightSide += itemsPrise[i + 1];
      //     }
      //   }

      if (leftSide < itemsPrise[entryPoint] && leftSide >= rightSide) {
        console.log(`Left - ${leftSide}`);
      } else {
        console.log(`Right - ${rightSide}`);
      }
      break;
    case "expensive":
      calculatingLeftSide(itemsPrise, entryPoint);
      calculatingRightSide(itemsPrise, entryPoint);
      if (leftSide >= rightSide) {
        console.log(`Left - ${leftSide}`);
      } else {
        console.log(`Right - ${rightSide}`);
      }
      break;
  }
  function calculatingLeftSide(itemsPrise, entryPoint) {
    for (let i = 0; i < entryPoint; i++) {
      leftSide += itemsPrise[i];
    }
  }
  function calculatingRightSide(itemsPrise, entryPoint) {
    for (let i = entryPoint; i < itemsPrise.length - 1; i++) {
      rightSide += itemsPrise[i + 1];
    }
  }

  function biggestNum(numArr, comparisonNum) {
    let buff = 0;
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] > comparisonNum) {
        buff = numArr[i];
      }
    }
  }
}
theAngryCat([1, 5, 1], 1, "cheap");
console.log("=================");
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([5, 10, 12, 11, 4, 20], 3, "cheap");
console.log("=======================");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, 21, 1, -1, 3, 3], 7, "expensive");
