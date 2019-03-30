import Piece from './Piece'

interface Box {
  row: number
  col: number
  piece: Piece
}

const initialState: Box[] = [
  {
    row: 1,
    col: 1,
    piece: Piece.kyo,
  },
  {
    row: 1,
    col: 2,
    piece: Piece.kei,
  },
]

export default class Board {
  state: Box[] = initialState

  getRow(row: number) {
    return this.state.filter(s => s.row === row)
  }
}
