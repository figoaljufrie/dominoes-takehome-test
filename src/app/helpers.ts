import { dominoArr } from "./dominoData";

//buat cari double numbers.
export function countDoubles(data = dominoArr): number {
  let countDom = 0;
  for (let i = 0; i < data.length; i++) {
    let card: number[] = data[i]!;
    if (card[0] === card[1]) {
      countDom++;
    }
  }
  console.log(countDom);
  return countDom;
}

console.log("Final Return:", countDoubles());

/*
Feature 2: Sort Domino Asc & Desc.

1. dominoArr already built. So, do i still need to use for while loop?

while for loop is running.

ASC:
If data[i, 0] is bigger than data[i++], data[i, 0] = stays. if less than, switch side?

same for desc, but less than?
*/
export function ascendingDom(data = dominoArr): number[][] {
  //ini buat loop dari array 1 di domino:
  for (let i = 0; i < data.length; i++) {
    //let a: number[] = data[i]!;

    //ini buat loop dari array setelah i:
    for (let j = i + 1; j < data.length; j++) {
      //let b: number[] = data[j]!;

      //kondisi, buat compare array di index a[0], dengan index b[1]:
      if (data[i]![0]! > data[j]![0]!) {
        //value sementara untuk nampung data:

        let temp: number[] = data[i]!;

        // i jadi loop dari b:
        data[i]! = data[j]!;

        //dan j jadi data sementara berisikan temp (di depan array data i).
        data[j] = temp;
        //pengulangan sampai selesai ngitung.
      } else if (data[i]![0] === data[j]![0]) {
        if (data[i]![1]! > data[j]![1]!) {
          let temp2: number[] = data[i]!;

          data[i]! = data[j]!;
          data[j]! = temp2;
        }
      }
    }
  }
  return data;
}
console.log(ascendingDom());

export function descendingDom(data = dominoArr): number[][] {
  //ini buat loop dari array 1 di domino:
  for (let i = 0; i < data.length; i++) {
    //let a: number[] = data[i]!;

    //ini buat loop dari array setelah i:
    for (let j = i + 1; j < data.length; j++) {
      //let b: number[] = data[j]!;

      //kondisi, buat compare array di index a[0], dengan index b[1]:
      if (data[i]![0]! < data[j]![0]!) {
        //value sementara untuk nampung data:

        let temp: number[] = data[i]!;

        // i jadi loop dari b:
        data[i]! = data[j]!;

        //dan j jadi data sementara berisikan temp (di depan array data i).
        data[j] = temp;
        //pengulangan sampai selesai ngitung.
      } else if (data[i]![0] === data[j]![0]) {
        if (data[i]![1]! < data[j]![1]!) {
          let temp2: number[] = data[i]!;

          data[i]! = data[j]!;
          data[j]! = temp2;
        }
      }
    }
  }
  return data;
}
console.log(descendingDom());

/*to remove domino with the same total number and number combinations:
- itung index di 0 
- itung index di 1

kalo index 0 + index 1 di array pertama = index 0 + index 1 di array kedua, remove array kedua.
*/
export function removeDom(data = dominoArr): number[][] {
  let result: number[][] = [];

  for (let i = 0; i < data.length; i++) {
    let domino: number[] = data[i]!;

    // Check if this domino or its reversed version already exists in result
    let exists = false;
    for (let k = 0; k < result.length; k++) {
      let r: number[] = result[k]!;
      if (
        (domino[0] === r[0] && domino[1] === r[1]) ||
        (domino[0] === r[1] && domino[1] === r[0])
      ) {
        exists = true;
        break;
      }
    }

    // If it doesn't exist yet, push it to result
    if (!exists) {
      result.push(domino);
    }
  }

  return result;
}
console.log(removeDom());

/*
- Ambil list dari dominoArr.
- bikin empty variable buat tampung data domino yang mau di flip.
- bikin for-loop per isi kartu domino.
- Ambil kartu domino 1, dan kartu domino 2.
- swap mereka.
domino 1 -> domino 2
domino 2 -> domino 1

add hasilnya ke flipped variable.
repeat sampai semua kartu ke proses.

*/
export function flipDom(data = dominoArr): number[][] {
  let flipped: number[][] = [];
  for (let i = 0; i < data.length; i++) {
    let card = data[i]!;
    let newCard = [card[1]!, card[0]!];
    flipped.push(newCard);
  }

  return flipped;
}
console.log(flipDom());

/*
1. ambil list dari dominoArr.
2. bikin variable result.
3. for loop per domino card. [card1, card2].
4. Calculate card1 + card2:

5. if calculate card1 + card2 = targetTotal:
- Add this card into result.

6. else, dont add into result.

7. setelah loop selesai, return finish.

*/
export function removeDomInTotal(
  data = dominoArr,
  targetTotal: number
): number[][] {
  let result: number[][] = [];

  for (let i = 0; i < data.length; i++) {
    let card: number[] = data[i]!;
    let countCard: number = card[0]! + card[1]!;
    if (countCard !== targetTotal) {
      result.push(card);
    } else {
    }
  }
  return result;
}
console.log(removeDomInTotal(dominoArr, 7));

export function resetDom(data = dominoArr): number[][] {
  let defaultDom: number[][] = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ];
  let reset: number[][] = defaultDom.map((card) => [...card]);

  return reset;
}
console.log(resetDom());
