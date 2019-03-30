import * as React from 'react'
import Piece from './components/Piece'

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Piece name="歩" />
        hello
      </div>
    )
  }
}
