import * as React from 'react'
import styled from 'styled-components'
import Piece from './components/Piece'
import Board from './entities/Board'

const BoardComponent = styled.div`
  max-width: 300px;
`

const Row = styled.div`
  display: flex;
`

interface AppProps {}

interface AppState {
  board: Board
}

export default class App extends React.Component<AppProps, AppState> {
  state = {
    board: new Board(),
  }

  render() {
    const { board } = this.state
    console.log(board)

    return (
      <BoardComponent>
        <Row>
          {board.getRow(1).map(box => (
            <Piece key={box.col} name={box.piece} />
          ))}
        </Row>
      </BoardComponent>
    )
  }
}
