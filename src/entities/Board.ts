import Piece from './Piece'
import { range } from 'lodash'

// interface Box {
//   row: number
//   col: number
//   piece?: Piece
// }

function getInitialState() {
  const boxes = range(1, 10).map(_ => {
    return range(1, 10).map(_ => {
      return Piece.kyo
    })
  })
  boxes[0][0] = Piece.kyo
  boxes[0][1] = Piece.kei
  return boxes
  // return [
  //   {
  //     row: 1,
  //     col: 1,
  //     piece: Piece.kyo,
  //   },
  //   {
  //     row: 1,
  //     col: 2,
  //     piece: Piece.kei,
  //   },
  //   {
  //     row: 1,
  //     col: 3,
  //     piece: Piece.gin,
  //   },
  //   {
  //     row: 1,
  //     col: 4,
  //     piece: Piece.kin,
  //   },
  //   {
  //     row: 1,
  //     col: 5,
  //     piece: Piece.gyoku,
  //   },
  //   {
  //     row: 1,
  //     col: 6,
  //     piece: Piece.kin,
  //   },
  //   {
  //     row: 1,
  //     col: 7,
  //     piece: Piece.gin,
  //   },
  //   {
  //     row: 1,
  //     col: 8,
  //     piece: Piece.kei,
  //   },
  //   {
  //     row: 1,
  //     col: 9,
  //     piece: Piece.kyo,
  //   },
  //   {
  //     row: 2,
  //     col: 2,
  //     piece: Piece.hi,
  //   },
  //   {
  //     row: 2,
  //     col: 8,
  //     piece: Piece.kaku,
  //   },
  //   ...Array(9)
  //     .fill(0)
  //     .map((_, index) => {
  //       return {
  //         row: 3,
  //         col: index + 1,
  //         piece: Piece.fu,
  //       }
  //     }),
  // ]
}

export default class Board {
  state = getInitialState()

  getRow(row: number) {
    return this.state[row]
  }
}

console.log(getInitialState())
